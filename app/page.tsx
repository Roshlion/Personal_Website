import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";

export default function Home() {
  const skills = [
    "SQL",
    "Python",
    "Snowflake",
    "dbt",
    "AWS/Redshift",
    "ETL",
    "Tableau",
    "QuickSight",
    "BigQuery",
    "Looker",
    "Hightouch",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Machine Learning",
    "Git/GitHub",
    "Excel",
    "YAML",
    "Matplotlib",
    "Java",
    "MATLAB",
    "Linux",
    "Vercel",
    "Node.js",
    "Next.js",
    "TypeScript",
    "React",
  ];

  return (
    <Container className="py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          Roshen Jegajeevan
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-6">
          Senior Analyst at Capital One · Industrial Engineering (B.S.) · M.S.
          Computer Science (Georgia Tech)
        </p>
        <p className="text-neutral-400 leading-relaxed mb-8 max-w-3xl">
          I&apos;m a data-driven analyst and builder focused on automating analytics,
          modeling, and decision tools. I work across SQL, Python, and modern
          data stacks (Snowflake, dbt) to ship production-grade reporting and
          ML-assisted workflows. Experienced with time-series modeling,
          Tableau/QuickSight dashboards, and end-to-end ETL on AWS/Redshift.
          Pursuing an M.S. in Computer Science (ML concentration) at Georgia
          Tech; previously B.S. in Industrial Engineering. AWS Certified.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="mailto:roshenj67@gmail.com"
            className="flex items-center gap-2 text-neutral-300 hover:text-blue-400 transition-colors group"
          >
            <span className="text-neutral-500 group-hover:text-blue-500">email:</span>
            <span className="font-medium">roshenj67@gmail.com</span>
          </a>
          <span className="hidden sm:inline text-neutral-700">|</span>
          <a
            href="tel:+16784624887"
            className="flex items-center gap-2 text-neutral-300 hover:text-blue-400 transition-colors group"
          >
            <span className="text-neutral-500 group-hover:text-blue-500">call:</span>
            <span className="font-medium">678-462-4887</span>
          </a>
        </div>
      </section>

      {/* Featured Project */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-neutral-100">
          Featured Project
        </h2>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-300"></div>
          <div className="relative bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-neutral-100">
              AI Backtester
            </h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Build and backtest trading strategies—manual or AI-assisted—with ML, technicals, and full portfolio simulation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://ai-backtester-j1kleim2w-roshlions-projects.vercel.app/backtester"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Open Backtester
              </a>
              <a
                href="https://github.com/Roshlion/AI_BACKTESTER"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-neutral-800 text-neutral-100 rounded-lg font-medium border border-neutral-700 hover:border-blue-500/50 hover:bg-neutral-700 transition-all duration-300"
              >
                View Repo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-neutral-100">Education</h2>
        <div className="space-y-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-10 group-hover:opacity-20 blur transition duration-300"></div>
            <div className="relative bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-neutral-100">
                    Georgia Institute of Technology
                  </h3>
                  <p className="text-blue-400 font-medium">Masters in Computer Science (ML concentration)</p>
                  <p className="text-neutral-400 text-sm mt-1">Cumulative GPA: 3.9/4.0</p>
                </div>
                <div className="text-neutral-400 md:text-right mt-2 md:mt-0">
                  <p className="font-medium">Atlanta, GA</p>
                  <p className="text-sm">Dec 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-10 group-hover:opacity-20 blur transition duration-300"></div>
            <div className="relative bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-neutral-100">
                    Georgia Institute of Technology
                  </h3>
                  <p className="text-blue-400 font-medium">Bachelor in Industrial Engineering</p>
                  <p className="text-neutral-400 text-sm mt-1">Cumulative GPA: 3.7/4.0</p>
                </div>
                <div className="text-neutral-400 md:text-right mt-2 md:mt-0">
                  <p className="font-medium">Atlanta, GA</p>
                  <p className="text-sm">May 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-neutral-100">Work Experience</h2>
        <div className="space-y-6">
          {/* Capital One - Senior Associate */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-10 group-hover:opacity-20 blur transition duration-300"></div>
            <div className="relative bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-neutral-100">Capital One</h3>
                  <p className="text-blue-400 font-medium">Senior Associate - Dealer Management (Auto Finance)</p>
                </div>
                <div className="text-neutral-400 md:text-right mt-2 md:mt-0">
                  <p className="font-medium">Atlanta, GA</p>
                  <p className="text-sm">Aug 2024 – Present</p>
                </div>
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm list-disc list-inside">
                <li>Created/Currently working on a Overall Auto Finance Reporting Suite in Tableau that has views that cover multiple metrics such as Volume, Losses, Quarterly Process metrics, Quality Bar metrics etc. across different segments</li>
                <li>Executed/Executing end-to-end change management, including testing updates, coordinating with the engineering team to deploy releases, and documenting changes extensively in the Auto Loans policy repository</li>
                <li>Built automated quarterly reporting workflows by utilizing DBT with snowflake and Python for analysis, metric calculations, and visualization (pandas, SQL, matplotlib, gspread, Google Slides API)</li>
                <li>Developed insights from data analysis using Python, SQL, and Excel to assess vulnerable segments, front-end and back-end performance, and certified pre-owned vehicle trends</li>
              </ul>
            </div>
          </div>

          {/* Capital One - Associate */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-10 group-hover:opacity-20 blur transition duration-300"></div>
            <div className="relative bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-neutral-100">Capital One</h3>
                  <p className="text-blue-400 font-medium">Associate - Credit Card Innovation</p>
                </div>
                <div className="text-neutral-400 md:text-right mt-2 md:mt-0">
                  <p className="font-medium">Atlanta, GA</p>
                  <p className="text-sm">Aug 2023 – Aug 2024</p>
                </div>
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm list-disc list-inside">
                <li>Contributed to a complex repository (SQL, YAML, python~ pandas, numpy, scikit, matplotlib) that generated analytical reports by implementing changes to a time-series model, the execution flow of the process, and other components</li>
                <li>Condensed and presented model-driven insights from the reports to stakeholders, influencing credit card policy decisions, and conducted follow up analytics with Python and Excel</li>
                <li>Initiated the migration of the codebase to a more efficient platform by reformatting code/files and coordinating with technical and non-technical stakeholders</li>
              </ul>
            </div>
          </div>

          {/* Amazon */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-10 group-hover:opacity-20 blur transition duration-300"></div>
            <div className="relative bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-neutral-100">Amazon</h3>
                  <p className="text-blue-400 font-medium">Amazon Web Services Analytics Intern</p>
                </div>
                <div className="text-neutral-400 md:text-right mt-2 md:mt-0">
                  <p className="font-medium">Seattle, WA</p>
                  <p className="text-sm">May 2022 – Aug 2022</p>
                </div>
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm list-disc list-inside">
                <li>Utilized data analysis, statistics, and visualization by querying Amazon&apos;s internal SQL data warehouses</li>
                <li>Created training metrics and cooperated with different stakeholders to create deliverables on QuickSight</li>
                <li>Worked with Amazon Redshift and different ETL techniques to create a pipeline to analyze and visualize data</li>
              </ul>
            </div>
          </div>

          {/* Southwest Airlines */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-10 group-hover:opacity-20 blur transition duration-300"></div>
            <div className="relative bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-neutral-100">Southwest Airlines</h3>
                  <p className="text-blue-400 font-medium">Fleet Strategy Analyst Intern</p>
                </div>
                <div className="text-neutral-400 md:text-right mt-2 md:mt-0">
                  <p className="font-medium">Dallas, TX</p>
                  <p className="text-sm">Jan 2022 – Apr 2022</p>
                </div>
              </div>
              <ul className="space-y-2 text-neutral-400 text-sm list-disc list-inside">
                <li>Utilized SQL, Excel, Alteryx and Tableau to query, combine data sources, analyze, and optimize data to improve Southwest&apos;s base and maintenance scheduling across all airports and maintenance stations</li>
                <li>Published Large-scale data analysis projects that were important to the technical operations division</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-neutral-100">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </section>
    </Container>
  );
}
