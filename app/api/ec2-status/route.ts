import { NextResponse } from 'next/server';
import { EC2Client, DescribeInstancesCommand } from '@aws-sdk/client-ec2';

// Initialize EC2 client with credentials from environment
const ec2Client = new EC2Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

interface EC2StatusResponse {
  status: 'running' | 'stopped' | 'pending' | 'stopping' | 'terminated' | 'unknown';
  instanceType: string;
  launchTime?: string;
  runtime?: string;
  estimatedCost?: string;
  publicIp?: string;
  currentTask: string;
  error?: string;
}

function calculateRuntime(launchTime: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - launchTime.getTime();
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

function estimateCost(launchTime: Date, instanceType: string): string {
  const now = new Date();
  const hours = (now.getTime() - launchTime.getTime()) / (1000 * 60 * 60);

  // Spot pricing estimates (approximate)
  const spotPrices: { [key: string]: number } = {
    'c6i.2xlarge': 0.11,
    'c6i.xlarge': 0.055,
    'c6i.4xlarge': 0.22,
    't3.medium': 0.012,
    't3.large': 0.024,
  };

  const hourlyRate = spotPrices[instanceType] || 0.10;
  const cost = hours * hourlyRate;

  return `$${cost.toFixed(2)}`;
}

export async function GET() {
  try {
    // Check if credentials are configured
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      return NextResponse.json({
        status: 'unknown',
        instanceType: 'N/A',
        currentTask: 'AWS credentials not configured',
        error: 'Missing AWS credentials in environment',
      } as EC2StatusResponse, { status: 500 });
    }

    const instanceId = process.env.EC2_INSTANCE_ID;
    if (!instanceId) {
      return NextResponse.json({
        status: 'unknown',
        instanceType: 'N/A',
        currentTask: 'Instance ID not configured',
        error: 'Missing EC2_INSTANCE_ID in environment',
      } as EC2StatusResponse, { status: 500 });
    }

    // Query EC2 for instance status
    const command = new DescribeInstancesCommand({
      InstanceIds: [instanceId],
    });

    const response = await ec2Client.send(command);

    if (!response.Reservations || response.Reservations.length === 0) {
      return NextResponse.json({
        status: 'unknown',
        instanceType: 'N/A',
        currentTask: 'Instance not found',
        error: 'EC2 instance not found',
      } as EC2StatusResponse, { status: 404 });
    }

    const instance = response.Reservations[0].Instances?.[0];
    if (!instance) {
      return NextResponse.json({
        status: 'unknown',
        instanceType: 'N/A',
        currentTask: 'No instance data',
        error: 'No instance data returned',
      } as EC2StatusResponse, { status: 404 });
    }

    const state = instance.State?.Name || 'unknown';
    const instanceType = instance.InstanceType || 'unknown';
    const launchTime = instance.LaunchTime;
    const publicIp = instance.PublicIpAddress;

    // Map state to our response type
    const statusMap: { [key: string]: EC2StatusResponse['status'] } = {
      'running': 'running',
      'stopped': 'stopped',
      'pending': 'pending',
      'stopping': 'stopping',
      'terminated': 'terminated',
    };

    const status = statusMap[state] || 'unknown';

    // Build response
    const responseData: EC2StatusResponse = {
      status,
      instanceType,
      currentTask: getCurrentTask(status),
      ...(launchTime && {
        launchTime: launchTime.toISOString(),
        runtime: calculateRuntime(launchTime),
        estimatedCost: estimateCost(launchTime, instanceType),
      }),
      ...(publicIp && { publicIp }),
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('EC2 Status API Error:', error);
    return NextResponse.json({
      status: 'unknown',
      instanceType: 'N/A',
      currentTask: 'Error fetching status',
      error: error instanceof Error ? error.message : 'Unknown error',
    } as EC2StatusResponse, { status: 500 });
  }
}

function getCurrentTask(status: string): string {
  switch (status) {
    case 'running':
      return 'Annual optimization: 13 strategies × 5 tickers (Oct 2024 - Oct 2025)';
    case 'stopped':
      return 'No active tasks';
    case 'pending':
      return 'Instance starting...';
    case 'stopping':
      return 'Instance shutting down...';
    case 'terminated':
      return 'Instance terminated';
    default:
      return 'Status unknown';
  }
}

// Enable revalidation every 30 seconds
export const revalidate = 30;
