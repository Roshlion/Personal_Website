'use client';

import { useEffect, useState } from 'react';

interface EC2Status {
  status: 'running' | 'stopped' | 'pending' | 'stopping' | 'terminated' | 'unknown';
  instanceType: string;
  launchTime?: string;
  runtime?: string;
  estimatedCost?: string;
  publicIp?: string;
  currentTask: string;
  error?: string;
}

export default function EC2StatusCard() {
  const [status, setStatus] = useState<EC2Status | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const fetchStatus = async () => {
    try {
      const response = await fetch('/api/ec2-status');
      const data = await response.json();
      setStatus(data);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Failed to fetch EC2 status:', error);
      setStatus({
        status: 'unknown',
        instanceType: 'N/A',
        currentTask: 'Failed to fetch status',
        error: 'Network error',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchStatus();

    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-lg animate-pulse">
        <div className="h-8 bg-neutral-800 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-neutral-800 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-neutral-800 rounded w-1/2"></div>
      </div>
    );
  }

  if (!status) {
    return null;
  }

  const getStatusColor = () => {
    switch (status.status) {
      case 'running':
        return 'bg-green-500';
      case 'stopped':
        return 'bg-red-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'stopping':
        return 'bg-orange-500';
      case 'terminated':
        return 'bg-gray-500';
      default:
        return 'bg-neutral-500';
    }
  };

  const getStatusText = () => {
    switch (status.status) {
      case 'running':
        return '🟢 Running';
      case 'stopped':
        return '🔴 Stopped';
      case 'pending':
        return '🟡 Starting';
      case 'stopping':
        return '🟠 Stopping';
      case 'terminated':
        return '⚫ Terminated';
      default:
        return '⚪ Unknown';
    }
  };

  const isPulsing = status.status === 'running';

  return (
    <div className="relative group">
      {/* Gradient glow effect when running */}
      {isPulsing && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-300 animate-pulse"></div>
      )}

      <div className="relative bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-neutral-100 mb-1">
              TRADER - Algorithmic Trading Platform
            </h3>
            <p className="text-sm text-neutral-400 flex items-center gap-2">
              <span className="text-blue-400">Phase 7:</span> EC2 Production Deployment
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`inline-block w-3 h-3 rounded-full ${getStatusColor()} ${isPulsing ? 'animate-pulse' : ''}`}></span>
            <span className="text-sm font-medium text-neutral-300">
              {getStatusText()}
            </span>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-6 pb-6 border-b border-neutral-800">
          <p className="text-neutral-300 leading-relaxed mb-3">
            Quantitative trading research platform combining <span className="text-blue-400 font-medium">14 production-ready strategies</span> with
            machine learning and multi-strategy portfolio optimization. Processing <span className="text-purple-400 font-medium">400M+ minute bars</span> from
            a full year of market data (Oct 2024 - Oct 2025) on AWS infrastructure.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-900/30 border border-blue-800/50 rounded text-xs text-blue-300">
              Walk-Forward Validation
            </span>
            <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded text-xs text-purple-300">
              Cost-Aware Selection
            </span>
            <span className="px-2 py-1 bg-green-900/30 border border-green-800/50 rounded text-xs text-green-300">
              Regime Detection
            </span>
            <span className="px-2 py-1 bg-orange-900/30 border border-orange-800/50 rounded text-xs text-orange-300">
              ML Meta-Selector
            </span>
          </div>
        </div>

        {/* Current Task */}
        <div className="mb-6">
          <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wide font-medium">Current Run</p>
          <p className="text-neutral-300 leading-relaxed">
            {status.currentTask}
          </p>
          {status.status === 'running' && (
            <p className="text-sm text-neutral-500 mt-2">
              🎯 Goal: Identify optimal strategy configuration for live trading deployment
            </p>
          )}
        </div>

        {/* Stats Grid */}
        {status.status === 'running' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-neutral-800/50 rounded-lg p-3 border border-neutral-700">
              <p className="text-xs text-neutral-500 mb-1">Instance Type</p>
              <p className="text-sm font-medium text-neutral-200">{status.instanceType}</p>
            </div>
            {status.runtime && (
              <div className="bg-neutral-800/50 rounded-lg p-3 border border-neutral-700">
                <p className="text-xs text-neutral-500 mb-1">Runtime</p>
                <p className="text-sm font-medium text-green-400">{status.runtime}</p>
              </div>
            )}
            {status.estimatedCost && (
              <div className="bg-neutral-800/50 rounded-lg p-3 border border-neutral-700">
                <p className="text-xs text-neutral-500 mb-1">Est. Cost</p>
                <p className="text-sm font-medium text-blue-400">{status.estimatedCost}</p>
              </div>
            )}
            <div className="bg-neutral-800/50 rounded-lg p-3 border border-neutral-700">
              <p className="text-xs text-neutral-500 mb-1">Last Updated</p>
              <p className="text-sm font-medium text-neutral-200">
                {lastUpdate.toLocaleTimeString()}
              </p>
            </div>
          </div>
        )}

        {/* Error Display */}
        {status.error && (
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-4">
            <p className="text-sm text-red-400">⚠️ {status.error}</p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-4 pb-4 border-b border-neutral-800">
          <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wide font-medium">Tech Stack</p>
          <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
            <span>Python 3.11</span>
            <span className="text-neutral-700">•</span>
            <span>Polars / DuckDB</span>
            <span className="text-neutral-700">•</span>
            <span>scikit-learn</span>
            <span className="text-neutral-700">•</span>
            <span>AWS S3</span>
            <span className="text-neutral-700">•</span>
            <span>EC2 Spot Instances</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-3 items-center">
            <a
              href="https://github.com/Roshlion/Trader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-blue-400 transition-colors"
            >
              📁 Repository
            </a>
            {status.status === 'running' && (
              <span className="text-xs text-neutral-600">
                • Live updates every 30s
              </span>
            )}
          </div>
          {status.status === 'stopped' && (
            <span className="text-xs text-neutral-600">
              Idle - No active compute
            </span>
          )}
          {status.status === 'running' && (
            <span className="text-xs text-neutral-600">
              Phases 1-6 Complete ✓
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
