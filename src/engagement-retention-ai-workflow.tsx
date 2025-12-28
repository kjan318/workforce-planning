import { useState } from 'react';
import { 
  Heart, 
  TrendingDown, 
  Brain, 
  MessageSquare, 
  Users, 
  Award, 
  Target, 
  AlertCircle, 
  CheckCircle, 
  Zap, 
  Activity, 
  LineChart, 
  UserPlus, 
  ArrowRight, 
  DollarSign, 
  Scale, 
  TrendingUp, 
  Shield, 
  Eye, 
  RefreshCw, 
  BarChart3, 
  UserCheck, 
  Lightbulb, 
  Home, 
  ChevronRight, 
  Briefcase 
} from 'lucide-react';

const HRWorkflowHub = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  // Navigation data
  const workflows = [
    {
      id: 'workforce-planning',
      title: 'Workforce Planning & Analytics',
      icon: BarChart3,
      color: 'bg-blue-500',
      gradient: 'from-blue-50 to-indigo-50',
      avgFeasibility: 73,
      description: 'Transform reactive staffing into strategic workforce planning with predictive analytics',
      painPoints: ['Only 15% engage in strategic planning', 'Inability to forecast talent needs', 'Reactive staffing'],
      expectedImpact: '30% better talent-business alignment'
    },
    {
      id: 'compensation-benefits',
      title: 'Compensation & Benefits',
      icon: DollarSign,
      color: 'bg-green-500',
      gradient: 'from-green-50 to-emerald-50',
      avgFeasibility: 71,
      description: 'Ensure pay equity and market competitiveness with AI-powered analysis',
      painPoints: ['Pay equity concerns', 'Market competitiveness challenges', 'Manual analysis'],
      expectedImpact: '25-30% reduction in compensation turnover'
    },
    {
      id: 'engagement-retention',
      title: 'Employee Engagement & Retention',
      icon: Heart,
      color: 'bg-pink-500',
      gradient: 'from-pink-50 to-rose-50',
      avgFeasibility: 77,
      description: 'Proactively prevent turnover and boost engagement with predictive intelligence',
      painPoints: ['Only 23% engaged globally', '46% turnover from burnout', 'Difficulty predicting attrition'],
      expectedImpact: '25% retention increase, 30% burnout reduction'
    }
  ];

  // Workforce Planning Data
  const workforcePlanningPhases = [
    {
      id: 1,
      title: "Data Collection & Integration",
      icon: BarChart3,
      color: "bg-blue-500",
      feasibility: 85,
      aiRole: "Data Aggregation Engine",
      processes: [
        "Collect historical workforce data (headcount, turnover, performance)",
        "Integrate external market trends and industry benchmarks",
        "Gather business strategic plans and growth projections",
        "Consolidate skills inventory and competency data"
      ],
      aiCapabilities: [
        "Automated data extraction from HRIS, payroll, and performance systems",
        "Real-time integration with labor market APIs",
        "Natural language processing of business documents",
        "Data quality checks and anomaly detection"
      ],
      outputs: ["Unified workforce data warehouse", "Validated data sets", "Market intelligence reports"]
    },
    {
      id: 2,
      title: "Predictive Demand Forecasting",
      icon: TrendingUp,
      color: "bg-purple-500",
      feasibility: 65,
      aiRole: "Forecasting Engine",
      processes: [
        "Analyze historical staffing patterns",
        "Model business growth scenarios",
        "Predict departmental workforce needs",
        "Forecast skill requirements by timeline"
      ],
      aiCapabilities: [
        "Machine learning models analyze 3-5 years of historical data",
        "Scenario planning algorithms simulate business changes",
        "Time-series forecasting for headcount needs",
        "Skills gap prediction using job market trends"
      ],
      outputs: ["6-24 month workforce demand forecasts", "Role-specific hiring timelines", "Skills requirement projections"]
    },
    {
      id: 3,
      title: "People Analytics Dashboard",
      icon: Brain,
      color: "bg-green-500",
      feasibility: 75,
      aiRole: "Insights & Visualization Platform",
      processes: [
        "Real-time workforce metrics tracking",
        "Trend identification and pattern recognition",
        "Risk assessment and alerts",
        "Performance benchmarking"
      ],
      aiCapabilities: [
        "Interactive dashboards with 90% prediction accuracy",
        "Automated anomaly detection for turnover risks",
        "Natural language query interface for HR leaders",
        "Predictive alerts for critical talent gaps"
      ],
      outputs: ["Executive HR dashboards", "Department-specific reports", "Risk alerts and recommendations"]
    },
    {
      id: 4,
      title: "Succession Planning Automation",
      icon: UserCheck,
      color: "bg-orange-500",
      feasibility: 60,
      aiRole: "Talent Matching & Development Engine",
      processes: [
        "Identify critical roles and succession needs",
        "Assess internal talent pool readiness",
        "Match high-potential employees to future roles",
        "Create personalized development plans"
      ],
      aiCapabilities: [
        "Skills-based matching algorithms evaluate 50+ competencies",
        "Performance pattern analysis identifies high-potential talent",
        "Career path modeling based on successful transitions",
        "Automated development plan generation"
      ],
      outputs: ["Succession readiness scores", "High-potential talent pipeline", "Development roadmaps", "Succession risk reports"]
    },
    {
      id: 5,
      title: "Strategic Action Planning",
      icon: Target,
      color: "bg-red-500",
      feasibility: 70,
      aiRole: "Recommendation Engine",
      processes: [
        "Generate hiring strategies and timelines",
        "Recommend skill development initiatives",
        "Optimize workforce allocation",
        "Budget planning for talent investments"
      ],
      aiCapabilities: [
        "AI recommends optimal hiring mix (internal vs external)",
        "Cost-benefit analysis of build vs buy talent strategies",
        "Resource optimization algorithms",
        "ROI projections for L&D investments"
      ],
      outputs: ["Strategic workforce plans", "Hiring roadmaps", "Budget recommendations", "Action priority matrix"]
    },
    {
      id: 6,
      title: "Continuous Monitoring & Adjustment",
      icon: Lightbulb,
      color: "bg-teal-500",
      feasibility: 80,
      aiRole: "Adaptive Learning System",
      processes: [
        "Track plan execution and outcomes",
        "Monitor changing business conditions",
        "Refine predictions based on results",
        "Alert stakeholders to deviations"
      ],
      aiCapabilities: [
        "Real-time KPI tracking against forecasts",
        "Machine learning models continuously improve accuracy",
        "Automated variance reporting",
        "Proactive scenario remodeling"
      ],
      outputs: ["Performance tracking reports", "Model accuracy improvements", "Updated forecasts", "Stakeholder alerts"]
    }
  ];

  // Compensation & Benefits Data
  const compensationPhases = [
    {
      id: 1,
      title: "Data Integration & Governance",
      icon: Shield,
      color: "bg-blue-500",
      feasibility: 85,
      aiRole: "Data Aggregation & Quality Control Engine",
      processes: [
        "Integrate payroll, HRIS, and performance management systems",
        "Establish data governance policies and privacy frameworks",
        "Collect market compensation data from multiple sources",
        "Implement anonymization protocols for sensitive data"
      ],
      aiCapabilities: [
        "Automated data extraction from multiple HR systems",
        "Real-time data quality validation and error detection",
        "Privacy-first anonymization for employee data protection",
        "Integration with market survey databases (Payscale, WTW, Mercer)"
      ],
      outputs: ["Clean, anonymized compensation dataset", "Data governance documentation", "Market intelligence database"],
      challenges: ["Data privacy and security concerns", "Integration complexity across systems", "Ensuring data accuracy"]
    },
    {
      id: 2,
      title: "Market Trend Analysis",
      icon: TrendingUp,
      color: "bg-green-500",
      feasibility: 70,
      aiRole: "Competitive Intelligence Engine",
      processes: [
        "Analyze external market compensation data",
        "Benchmark roles against industry standards",
        "Track real-time salary trends and inflation impacts",
        "Identify competitive gaps and opportunities"
      ],
      aiCapabilities: [
        "Continuous monitoring of market salary data from multiple sources",
        "Dynamic compensation modeling based on market shifts",
        "Predictive analytics for future market trends",
        "Role-specific benchmarking across industries and locations"
      ],
      outputs: ["Market competitiveness reports by role", "Salary range recommendations", "Competitive positioning analysis"],
      challenges: ["Data source reliability", "Regional market variations", "Budget constraints"]
    },
    {
      id: 3,
      title: "Pay Equity Audit & Analysis",
      icon: Scale,
      color: "bg-purple-500",
      feasibility: 65,
      aiRole: "Equity Detection & Compliance Engine",
      processes: [
        "Analyze compensation across demographics",
        "Identify unexplained pay disparities",
        "Perform regression analysis for equal pay",
        "Generate compliance reports for regulations"
      ],
      aiCapabilities: [
        "Advanced statistical modeling to detect pay gaps",
        "Attorney-client privileged analysis frameworks",
        "Automated identification of equity violations",
        "Scenario modeling for pay adjustment strategies"
      ],
      outputs: ["Pay equity audit reports", "Disparity identification by demographics", "Remediation recommendations"],
      challenges: ["Privacy concerns with demographic data", "Potential litigation exposure", "Bias in historical data"]
    },
    {
      id: 4,
      title: "Compensation Planning & Modeling",
      icon: DollarSign,
      color: "bg-yellow-500",
      feasibility: 75,
      aiRole: "Strategic Planning & Recommendation Engine",
      processes: [
        "Design salary structures and pay ranges",
        "Plan merit increase budgets and allocations",
        "Model compensation scenarios and financial impact",
        "Generate individualized pay recommendations"
      ],
      aiCapabilities: [
        "AI generates pay recommendations for new hires and promotions",
        "Scenario modeling to forecast financial impact",
        "Budget compliance tracking and alerts",
        "Performance-linked compensation recommendations"
      ],
      outputs: ["Salary structure design", "Merit increase recommendations", "Budget allocation models"],
      challenges: ["Balancing equity with performance", "Manager resistance", "Budget constraints"]
    },
    {
      id: 5,
      title: "Benefits Optimization",
      icon: Award,
      color: "bg-pink-500",
      feasibility: 60,
      aiRole: "Benefits Intelligence Engine",
      processes: [
        "Analyze benefits utilization patterns",
        "Assess employee preferences and demographics",
        "Recommend personalized benefits packages",
        "Optimize total rewards mix for retention"
      ],
      aiCapabilities: [
        "Predictive analytics on benefits utilization",
        "Personalized benefits recommendations based on life stage",
        "Cost-benefit analysis of benefits programs",
        "Employee satisfaction modeling"
      ],
      outputs: ["Personalized benefits recommendations", "Benefits portfolio optimization", "Cost efficiency analysis"],
      challenges: ["Limited personalization options", "Regulations complexity", "Privacy concerns"]
    },
    {
      id: 6,
      title: "Manager Enablement",
      icon: Users,
      color: "bg-indigo-500",
      feasibility: 80,
      aiRole: "Communication Support Assistant",
      processes: [
        "Train managers on compensation philosophy",
        "Provide AI-powered decision support tools",
        "Generate communication templates",
        "Enable self-service compensation inquiries"
      ],
      aiCapabilities: [
        "AI chatbots answer manager questions on policies",
        "Privacy-first frameworks guide managers",
        "Generate personalized communication scripts",
        "Practice conversations with AI"
      ],
      outputs: ["Manager training materials", "Communication templates", "Decision support guidelines"],
      challenges: ["Manager over-reliance on AI", "Maintaining human judgment", "Training needs"]
    },
    {
      id: 7,
      title: "Employee Transparency",
      icon: Eye,
      color: "bg-teal-500",
      feasibility: 75,
      aiRole: "Employee Self-Service Platform",
      processes: [
        "Provide salary insights to employees",
        "Enable self-service benefits selection",
        "Answer employee questions via chatbots",
        "Deliver total rewards statements"
      ],
      aiCapabilities: [
        "AI chatbots provide 24/7 answers to inquiries",
        "Personalized total rewards statements",
        "Self-service tools for benefits enrollment",
        "Transparent salary range visibility"
      ],
      outputs: ["Employee self-service portal", "AI-powered chatbot", "Total rewards statements"],
      challenges: ["Managing expectations", "Balancing transparency", "Ensuring accuracy"]
    },
    {
      id: 8,
      title: "Continuous Monitoring",
      icon: RefreshCw,
      color: "bg-orange-500",
      feasibility: 70,
      aiRole: "Risk Management Engine",
      processes: [
        "Monitor turnover risk related to compensation",
        "Track market changes and movements",
        "Measure ROI of compensation investments",
        "Refine AI models based on outcomes"
      ],
      aiCapabilities: [
        "Predictive churn models identify retention risks",
        "Real-time market monitoring and alerts",
        "Continuous learning from decisions",
        "ROI analysis linking pay to retention"
      ],
      outputs: ["Retention risk reports", "Market movement alerts", "Compensation ROI analysis"],
      challenges: ["Attribution challenges", "Rapid market changes", "Cost control balance"]
    }
  ];

  // Engagement & Retention Data
  const engagementPhases = [
    {
      id: 1,
      title: "Real-Time Sentiment Analysis",
      icon: MessageSquare,
      color: "bg-blue-500",
      feasibility: 75,
      aiRole: "Continuous Listening Engine",
      processes: [
        "Monitor internal communications and collaboration tools",
        "Analyze employee feedback and survey responses",
        "Track sentiment patterns across teams",
        "Detect early warning signs of disengagement"
      ],
      aiCapabilities: [
        "NLP scans emails, Slack, and Teams messages",
        "Sentiment scoring identifies morale shifts",
        "Pattern recognition detects stress or disengagement",
        "Real-time alerts when sentiment drops"
      ],
      outputs: ["Team sentiment dashboards", "Disengagement alerts", "Burnout risk indicators"],
      metrics: ["25% reduction in turnover via early detection", "Real-time visibility into 100+ signals"]
    },
    {
      id: 2,
      title: "AI-Driven Engagement Surveys",
      icon: Activity,
      color: "bg-green-500",
      feasibility: 85,
      aiRole: "Adaptive Survey Intelligence Platform",
      processes: [
        "Deploy frequent pulse surveys with adaptive questioning",
        "Analyze responses in real-time",
        "Identify engagement drivers and barriers",
        "Generate personalized follow-up questions"
      ],
      aiCapabilities: [
        "Dynamic question adaptation",
        "AI analytics highlight trends and predict behavior",
        "Automated action recommendations",
        "73% more actionable insights"
      ],
      outputs: ["Pulse survey results", "Engagement driver analysis", "Team recommendations"],
      metrics: ["85% feasibility for immediate deployment", "40% improvement in manager responsiveness"]
    },
    {
      id: 3,
      title: "Predictive Attrition Modeling",
      icon: TrendingDown,
      color: "bg-red-500",
      feasibility: 80,
      aiRole: "Turnover Prediction Engine",
      processes: [
        "Analyze historical turnover patterns",
        "Identify at-risk employees before job hunting",
        "Score individual flight risk",
        "Prioritize intervention by criticality"
      ],
      aiCapabilities: [
        "ML models predict turnover with 87% accuracy",
        "Analyzes 50+ factors: tenure, performance, engagement",
        "Early warning 3-6 months in advance",
        "Risk scoring prioritizes retention efforts"
      ],
      outputs: ["Employee flight risk scores", "Attrition probability reports", "High-risk employee lists"],
      metrics: ["87% accuracy in predictions", "3-6 month advance notice"]
    },
    {
      id: 4,
      title: "Personalized Intervention",
      icon: Heart,
      color: "bg-pink-500",
      feasibility: 70,
      aiRole: "Proactive Engagement Engine",
      processes: [
        "Generate personalized retention strategies",
        "Recommend targeted development opportunities",
        "Monitor burnout indicators",
        "Track intervention effectiveness"
      ],
      aiCapabilities: [
        "AI recommends tailored interventions",
        "Personalized career development suggestions",
        "Burnout detection through work patterns",
        "Automated wellness recommendations"
      ],
      outputs: ["Personalized retention plans", "Career recommendations", "Burnout protocols"],
      metrics: ["30% reduction in burnout turnover", "25% increase in satisfaction"]
    },
    {
      id: 5,
      title: "Internal Mobility Matching",
      icon: UserPlus,
      color: "bg-purple-500",
      feasibility: 70,
      aiRole: "Career Opportunity Engine",
      processes: [
        "Map employee skills and aspirations",
        "Match employees with internal opportunities",
        "Recommend personalized learning paths",
        "Track internal mobility success"
      ],
      aiCapabilities: [
        "Skills-based matching analyzes 50+ competencies",
        "Career path modeling",
        "Proactive opportunity alerts",
        "94% stay when invested in development"
      ],
      outputs: ["Internal opportunity matches", "Career roadmaps", "Skills gap analysis"],
      metrics: ["40% increase in internal promotions", "70% improvement in satisfaction"]
    },
    {
      id: 6,
      title: "Recognition Automation",
      icon: Award,
      color: "bg-yellow-500",
      feasibility: 85,
      aiRole: "Smart Recognition Engine",
      processes: [
        "Identify contribution patterns",
        "Suggest recognition opportunities to managers",
        "Automate peer-to-peer recognition",
        "Track recognition impact"
      ],
      aiCapabilities: [
        "AI detects achievements from project data",
        "Automated recognition suggestions",
        "Personalized appreciation messages",
        "71% quit when unrecognized"
      ],
      outputs: ["Recognition recommendations", "Achievement notifications", "Peer prompts"],
      metrics: ["63% higher innovation from engaged employees", "25% improvement in satisfaction"]
    },
    {
      id: 7,
      title: "Manager Enablement",
      icon: Users,
      color: "bg-indigo-500",
      feasibility: 75,
      aiRole: "Leadership Support Assistant",
      processes: [
        "Provide team engagement insights to managers",
        "Suggest coaching strategies",
        "Train managers on conversations",
        "Deliver personalized development"
      ],
      aiCapabilities: [
        "AI chatbots provide sentiment insights",
        "Coaching recommendations by risk factors",
        "Simulated conversation practice",
        "Continuous feedback on effectiveness"
      ],
      outputs: ["Manager dashboards", "Coaching playbooks", "Team health reports"],
      metrics: ["40% improvement in response time", "28% better retention prediction"]
    },
    {
      id: 8,
      title: "Continuous Monitoring",
      icon: LineChart,
      color: "bg-teal-500",
      feasibility: 80,
      aiRole: "Adaptive Learning System",
      processes: [
        "Track engagement KPIs in real-time",
        "Measure intervention effectiveness",
        "Refine AI models based on outcomes",
        "Generate executive reports"
      ],
      aiCapabilities: [
        "Continuous learning improves accuracy",
        "A/B testing of retention strategies",
        "ROI tracking connects engagement to revenue",
        "Automated benchmarking"
      ],
      outputs: ["Engagement ROI reports", "Strategy effectiveness metrics", "Executive dashboards"],
      metrics: ["25% rise in retention by 2025", "Financial impact mapping"]
    }
  ];

  // Get current workflow data
  const getCurrentPhases = () => {
    if (currentView === 'workforce-planning') {
      return workforcePlanningPhases;
    } else if (currentView === 'compensation-benefits') {
      return compensationPhases;
    } else if (currentView === 'engagement-retention') {
      return engagementPhases;
    }
    return [];
  };

  const getCurrentWorkflow = () => {
    return workflows.find(w => w.id === currentView);
  };

  // Home Page Component
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="text-blue-600" size={48} />
            <h1 className="text-5xl font-bold text-gray-800">
              AI-Powered HR Transformation Hub
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Strategic Workflows for Modern HR Excellence
          </p>
          <p className="text-sm text-gray-500">
            Based on 2025 Market Best Practices & Real-World Implementation Data
          </p>
        </div>

        {/* Statistics Banner */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">74%</div>
            <p className="text-sm text-gray-600">Average AI Feasibility Across Workflows</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">22</div>
            <p className="text-sm text-gray-600">Total Process Phases Covered</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
            <p className="text-sm text-gray-600">Average Efficiency Improvement</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">25%</div>
            <p className="text-sm text-gray-600">Expected Retention Increase</p>
          </div>
        </div>

        {/* Workflow Cards */}
        <div className="space-y-6 mb-12">
          {workflows.map((workflow) => {
            const WorkflowIcon = workflow.icon;
            return (
              <div 
                key={workflow.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-500"
                onClick={() => setCurrentView(workflow.id)}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`${workflow.color} p-4 rounded-lg text-white shrink-0`}>
                      <WorkflowIcon size={40} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800 mb-2">{workflow.title}</h2>
                          <p className="text-gray-600 mb-3">{workflow.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-2">
                            <CheckCircle size={16} />
                            {workflow.avgFeasibility}% Avg Feasibility
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <AlertCircle className="text-red-500" size={18} />
                            Key Pain Points
                          </h4>
                          <ul className="space-y-1">
                            {workflow.painPoints.map((point, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <Target className="text-green-500" size={18} />
                            Expected Impact
                          </h4>
                          <p className="text-sm text-gray-700 bg-green-50 p-3 rounded border border-green-200">
                            {workflow.expectedImpact}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-end">
                        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                          View Detailed Workflow
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Implementation Approach */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recommended Implementation Approach</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Start with High Feasibility</h4>
              <p className="text-sm text-gray-600">
                Begin with Engagement & Retention (77% avg feasibility) for quick wins and stakeholder buy-in
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Build Strategic Foundation</h4>
              <p className="text-sm text-gray-600">
                Implement Workforce Planning (73% avg) to enable data-driven decision making
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Optimize Compensation</h4>
              <p className="text-sm text-gray-600">
                Deploy Compensation & Benefits (71% avg) with proper legal and privacy safeguards
              </p>
            </div>
          </div>
        </div>

        {/* Key Success Factors */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Critical Success Factors</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {[
                "Maintain human oversight for all AI recommendations",
                "Start with attorney-client privileged frameworks for sensitive data",
                "Invest in change management and stakeholder communication",
                "Ensure data quality and address bias proactively"
              ].map((factor, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{factor}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                "Focus on measurable ROI rather than technology for its own sake",
                "Build integration capabilities with existing HR tech stack",
                "Prioritize employee trust and transparency",
                "Implement continuous learning and model refinement"
              ].map((factor, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Workflow Detail Page Component
  const WorkflowDetailPage = () => {
    const workflow = getCurrentWorkflow();
    const phases = getCurrentPhases();
    if (!workflow) return null;

    const WorkflowIcon = workflow.icon;

    return (
      <div className={`min-h-screen bg-gradient-to-br ${workflow.gradient} p-8`}>
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => { setCurrentView('home'); setSelectedPhase(null); }}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
          >
            <Home size={20} />
            <span className="font-semibold">Back to Hub</span>
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <WorkflowIcon className={`${workflow.color.replace('bg-', 'text-')}`} size={48} />
              <h1 className="text-4xl font-bold text-gray-800">
                {workflow.title}
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-2">{workflow.description}</p>
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-sm text-gray-700">{workflow.avgFeasibility}% Avg Feasibility</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="text-blue-500" size={20} />
                <span className="text-sm text-gray-700">{workflow.expectedImpact}</span>
              </div>
            </div>
          </div>

          {/* Workflow Phases */}
          <div className="space-y-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isSelected = selectedPhase === phase.id;
              
              return (
                <div key={phase.id} className="relative">
                  {index < phases.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-12 bg-gray-300 z-0"></div>
                  )}
                  
                  <div 
                    className={`relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
                      isSelected ? 'border-blue-500 scale-[1.02]' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedPhase(isSelected ? null : phase.id)}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`${phase.color} p-3 rounded-lg text-white shrink-0`}>
                          <Icon size={28} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 mb-1">
                                Phase {phase.id}: {phase.title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-2">
                                AI Role: <span className="font-semibold text-gray-800">{phase.aiRole}</span>
                              </p>
                            </div>
                            
                            <div className="text-right">
                              <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                                phase.feasibility >= 80 ? 'bg-green-100 text-green-700' :
                                phase.feasibility >= 70 ? 'bg-yellow-100 text-yellow-700' :
                                'bg-orange-100 text-orange-700'
                              }`}>
                                {phase.feasibility >= 80 ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
                                {phase.feasibility}% Feasibility
                              </div>
                            </div>
                          </div>

                          {!isSelected && phase.metrics && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {phase.metrics.slice(0, 2).map((metric, idx) => (
                                <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
                                  {metric}
                                </span>
                              ))}
                            </div>
                          )}

                          {isSelected && (
                            <div className="mt-6 space-y-6 animate-in fade-in duration-300">
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                  <Activity size={18} className="text-blue-500" />
                                  Core Processes
                                </h4>
                                <ul className="space-y-2">
                                  {phase.processes.map((process, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                      <span className="text-blue-500 mt-1">•</span>
                                      <span>{process}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                  <Brain size={18} className="text-purple-500" />
                                  AI Capabilities & Technology
                                </h4>
                                <ul className="space-y-2">
                                  {phase.aiCapabilities.map((capability, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                      <span className="text-purple-500 mt-1">⚡</span>
                                      <span>{capability}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                  <CheckCircle size={18} className="text-green-500" />
                                  Key Outputs
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {phase.outputs.map((output, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm border border-green-200">
                                      {output}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {phase.challenges && (
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                    <AlertCircle size={18} className="text-amber-500" />
                                    Implementation Challenges
                                  </h4>
                                  <ul className="space-y-2">
                                    {phase.challenges.map((challenge, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-amber-500 mt-1">⚠</span>
                                        <span>{challenge}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {phase.metrics && (
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                    <Target size={18} className="text-indigo-500" />
                                    Expected Impact Metrics
                                  </h4>
                                  <ul className="space-y-2">
                                    {phase.metrics.map((metric, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-indigo-500 mt-1">📊</span>
                                        <span>{metric}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Implementation Roadmap */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <ArrowRight className="text-blue-500" />
              12-Month Implementation Roadmap
            </h3>
            <div className="space-y-6">
              {currentView === 'workforce-planning' && (
                <>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Months 1-3: Foundation</h4>
                    <p className="text-sm text-gray-700">Data integration, dashboard setup (Phase 1 & 3)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Quick wins: Real-time visibility into workforce metrics</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Months 4-8: Intelligence</h4>
                    <p className="text-sm text-gray-700">Deploy forecasting and succession planning (Phase 2 & 4)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Impact: 6-month advance notice on talent gaps</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Months 9-12: Optimization</h4>
                    <p className="text-sm text-gray-700">Strategic planning and continuous improvement (Phase 5 & 6)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Outcome: 30% better talent-business alignment</p>
                  </div>
                </>
              )}
              {currentView === 'compensation-benefits' && (
                <>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Quarter 1: Foundation & Quick Wins</h4>
                    <p className="text-sm text-gray-700">Launch data integration and market analysis (Phase 1 & 2)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Impact: Immediate visibility into competitive positioning</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Quarter 2: Equity & Compliance</h4>
                    <p className="text-sm text-gray-700">Deploy pay equity audits with legal safeguards (Phase 3)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Impact: Reduce legal risk and improve pay fairness</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Quarter 3: Strategic Planning</h4>
                    <p className="text-sm text-gray-700">Enable AI-powered compensation planning (Phase 4 & 5)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Impact: Data-driven merit cycles</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Quarter 4: Transparency & Optimization</h4>
                    <p className="text-sm text-gray-700">Launch employee-facing tools (Phase 6, 7 & 8)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Impact: Enhanced transparency and proactive retention</p>
                  </div>
                </>
              )}
              {currentView === 'engagement-retention' && (
                <>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Months 1-3: Foundation & Quick Wins</h4>
                    <p className="text-sm text-gray-700">Deploy AI-driven surveys and recognition (Phase 2 & 6)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Quick Impact: 25% improvement in manager responsiveness</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Months 4-6: Intelligence Layer</h4>
                    <p className="text-sm text-gray-700">Activate sentiment analysis and predictive modeling (Phase 1 & 3)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Strategic Impact: 87% accuracy in predicting departures</p>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Months 7-9: Proactive Intervention</h4>
                    <p className="text-sm text-gray-700">Enable personalized interventions and mobility (Phase 4 & 5)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Human Impact: 30% reduction in burnout</p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Months 10-12: Optimization & Scale</h4>
                    <p className="text-sm text-gray-700">Empower managers and optimize performance (Phase 7 & 8)</p>
                    <p className="text-xs text-green-600 font-semibold mt-2">Business Impact: 25% retention improvement</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Click on any phase to expand and see detailed processes, AI capabilities, and outputs
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {currentView === 'home' ? <HomePage /> : <WorkflowDetailPage />}
    </>
  );
};

export default HRWorkflowHub;