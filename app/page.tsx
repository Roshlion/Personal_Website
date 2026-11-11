import type { ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";

const skillGroups = [
  {
    label: "Analytics",
    items: [
      "SQL",
      "Python",
      "Pandas",
      "Seaborn",
      "Scikit-learn",
      "NumPy",
      "Matplotlib",
      "R",
      "Java",
      "MATLAB",
      "VBA",
      "Excel",
      "Tableau",
      "Power BI",
      "Snowflake",
      "dbt",
      "AWS",
      "Oracle",
      "Redshift",
      "Git",
      "ETL",
    ],
  },
  {
    label: "Credit risk and data science",
    items: [
      "Credit Risk Modeling",
      "Credit Policy Strategy",
      "Risk-Based Pricing",
      "Predictive Modeling",
      "Machine Learning",
    ],
  },
  {
    label: "Strategy",
    items: [
      "Strategic Problem Solving",
      "Cross-Functional Leadership",
      "Project Management",
      "Change Management",
      "Executive Communication",
      "Critical Thinking",
      "Hypothesis-Driven Assessment",
      "Human-Centered Design",
    ],
  },
];

function Card({ children }: { children: ReactNode }) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
      {children}
    </article>
  );
}

export default function Home() {
  return (
    <Container className="py-14 md:py-20">
      <section className="mb-16">
        <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-4">
          Auto Finance · Capital One
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-50 mb-4">
          Roshen Jegajeevan
        </h1>
        <p className="text-lg text-neutral-300 mb-6 max-w-2xl">
          Business Manager, Partnerships. M.S. Computer Science at Georgia Tech,
          focused on machine learning.
        </p>
        <p className="text-neutral-400 leading-relaxed max-w-2xl mb-8">
          I work on credit policy, decisioning, and the reporting that supports
          those decisions. That includes policy tests, production models, and
          automated portfolio views for executive review.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resume"
            className="px-5 py-2.5 rounded-lg bg-neutral-100 text-neutral-950 text-sm font-medium hover:bg-white transition-colors"
          >
            View resume
          </Link>
          <a
            href="mailto:Roshenj76@gmail.com"
            className="px-5 py-2.5 rounded-lg border border-neutral-700 text-sm text-neutral-200 hover:border-neutral-500 transition-colors"
          >
            Roshenj76@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/roshen-jegajeevan-a278a9205/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-neutral-700 text-sm text-neutral-200 hover:border-neutral-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-4">
          Experience
        </h2>
        <div className="space-y-4">
          <Card>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-xl font-semibold text-neutral-50">Capital One</h3>
                <p className="text-neutral-400">Auto Finance</p>
              </div>
              <p className="text-sm text-neutral-500">McLean, VA</p>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                  <p className="font-medium text-neutral-100">
                    Business Manager, Partnerships
                  </p>
                  <p className="text-sm text-neutral-500">Mar 2026 – Present</p>
                </div>
                <ul className="space-y-2 text-sm text-neutral-400 leading-relaxed list-disc pl-5">
                  <li>
                    Led a high-impact, multi-state credit policy expansion test
                    for a strategic lending partner using Python, SQL, and Policy
                    Engine to revise LTV, FE, BE, PTI, payment, and term counter
                    limits as well as approval limits, targeting 2.5–3x funded
                    volume growth ahead of a national rollout projected to
                    generate up to ~$100M in incremental NPV and ~$3B in
                    originations.
                  </li>
                  <li>
                    Coordinated cross-functional test implementation and
                    post-launch monitoring across sales, legal, product,
                    operations, and technology, partnering with executive
                    leadership on applicant mix, approval rates, funded volume,
                    credit risk, and profitability to refine credit policy limits
                    and inform the national rollout.
                  </li>
                  <li>
                    Managed interns and new hires in the Partnerships portfolio,
                    leading onboarding, technical guidance, responsibilities, and
                    key analytical decisions.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                  <p className="font-medium text-neutral-100">
                    Senior Associate, Prime Skew
                  </p>
                  <p className="text-sm text-neutral-500">Aug 2025 – Mar 2026</p>
                </div>
                <ul className="space-y-2 text-sm text-neutral-400 leading-relaxed list-disc pl-5">
                  <li>
                    Developed and launched a differentiated credit decisioning
                    strategy projected to generate ~$20M in incremental NPV
                    across Prime-Skew dealerships representing 8% of Capital
                    One’s dealer network, optimizing approval targets, pricing,
                    and counter limits for historically underpenetrated segments.
                  </li>
                  <li>
                    Productionized an XGBoost model using market and dealer-level
                    attributes not captured in existing approval and risk models
                    to identify rate-insensitive customer segments and apply
                    risk-based pricing, accounting for ~$7M of the projected $20M
                    NPV uplift.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                  <p className="font-medium text-neutral-100">
                    Senior Associate, Dealer Management
                  </p>
                  <p className="text-sm text-neutral-500">Aug 2024 – Aug 2025</p>
                </div>
                <ul className="space-y-2 text-sm text-neutral-400 leading-relaxed list-disc pl-5">
                  <li>
                    Built an automated Auto Finance reporting suite using SQL,
                    dbt, and Tableau to monitor portfolio volume, credit losses,
                    valuations, and consumer, deal, and risk KPIs across key
                    segmentations, used by executive leadership for credit policy
                    and risk strategy decisions.
                  </li>
                  <li>
                    Automated quarterly reporting with SQL and Python, including
                    KPI calculations, visualizations, and Google Sheets and
                    Slides updates, removing days of manual work each quarter.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                  <p className="font-medium text-neutral-100">
                    Associate, Credit Card Innovation
                  </p>
                  <p className="text-sm text-neutral-500">Aug 2023 – Aug 2024</p>
                </div>
                <ul className="space-y-2 text-sm text-neutral-400 leading-relaxed list-disc pl-5">
                  <li>
                    Enhanced a production credit risk analytics repository in
                    Python, SQL, and YAML that generates time-series reports
                    comparing expected credit risk with actual portfolio
                    performance, including model changes, bug fixes, and
                    deployment.
                  </li>
                  <li>
                    Presented model-driven credit risk insights that informed
                    credit card policy decisions, with follow-up analysis in
                    Python, SQL, and Excel.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-semibold text-neutral-50">
                  EduTourism Inc.
                </h3>
                <p className="text-neutral-400">
                  Full Stack Developer (Part-Time)
                </p>
              </div>
              <div className="text-sm text-neutral-500 md:text-right">
                <p>Atlanta, GA</p>
                <p>Aug 2021 – Dec 2022</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-neutral-400 leading-relaxed list-disc pl-5">
              <li>
                Built front-end interfaces and back-end functionality for an
                early-stage educational tourism platform, including database
                management.
              </li>
              <li>
                Developed and integrated backend APIs and services for user
                authentication, data processing, and database operations.
              </li>
            </ul>
          </Card>

          <Card>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-semibold text-neutral-50">
                  Amazon, Southwest Airlines, Warner Bros. Discovery
                </h3>
                <p className="text-neutral-400">
                  Business Analyst, Fleet Analyst, and Data Analyst internships
                </p>
              </div>
              <div className="text-sm text-neutral-500 md:text-right">
                <p>Atlanta, GA</p>
                <p>Jan 2022 – Dec 2022</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-neutral-400 leading-relaxed list-disc pl-5">
              <li>
                Amazon: Built an automated training reporting suite with Redshift
                and QuickSight to track completion, participation, and operational
                performance.
              </li>
              <li>
                Southwest Airlines: Analyzed fleet utilization, ticket pricing, and
                fuel consumption with SQL, Python, and Snowflake to find
                efficiency and route-profitability opportunities.
              </li>
              <li>
                Warner Bros. Discovery: Built a SQL and Tableau suite for
                newsletter open rates, click-through, subscriber growth,
                engagement, and unsubscribes.
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-4">
          Education
        </h2>
        <Card>
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-neutral-50">
                Georgia Institute of Technology
              </h3>
              <p className="text-neutral-300 mt-1">
                M.S. Computer Science, Machine Learning
              </p>
              <p className="text-neutral-300">B.S. Industrial Engineering</p>
              <p className="text-sm text-neutral-400 mt-3">
                Summa Cum Laude. Top Capstone Project for 2023. Teaching
                Assistant, Optimization.
              </p>
              <p className="text-sm text-neutral-500 mt-2 max-w-xl">
                Coursework in machine learning, statistical modeling, probability
                and statistics, optimization, and data structures and algorithms.
              </p>
            </div>
            <p className="text-sm text-neutral-500">Atlanta, GA</p>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-4">
          Skills
        </h2>
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm text-neutral-400 mb-2">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
