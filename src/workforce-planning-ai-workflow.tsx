import React, { useState } from 'react';
import { Brain, TrendingUp, Users, Target, AlertCircle, CheckCircle, BarChart3, UserCheck, Lightbulb } from 'lucide-react';

const WorkforcePlanningWorkflow = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const phases = [
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AI-Powered Workforce Planning & Analytics Workflow
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Best Market Practice Implementation Framework
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-sm text-gray-700">Proactive Planning</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="text-purple-500" size={20} />
              <span className="text-sm text-gray-700">90% Prediction Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-blue-500" size={20} />
              <span className="text-sm text-gray-700">Strategic Alignment</span>
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
                {/* Connection Line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-gray-300 z-0"></div>
                )}
                
                {/* Phase Card */}
                <div 
                  className={`relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
                    isSelected ? 'border-blue-500 scale-[1.02]' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedPhase(isSelected ? null : phase.id)}
                >
                  <div className="p-6">
                    {/* Phase Header */}
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
                          
                          {/* Feasibility Badge */}
                          <div className="text-right">
                            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                              phase.feasibility >= 75 ? 'bg-green-100 text-green-700' :
                              phase.feasibility >= 65 ? 'bg-yellow-100 text-yellow-700' :
                              'bg-orange-100 text-orange-700'
                            }`}>
                              <AlertCircle size={14} />
                              {phase.feasibility}% Feasibility
                            </div>
                          </div>
                        </div>

                        {/* Expandable Content */}
                        {isSelected && (
                          <div className="mt-6 space-y-6 animate-in fade-in duration-300">
                            {/* Core Processes */}
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <Users size={18} className="text-blue-500" />
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

                            {/* AI Capabilities */}
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

                            {/* Key Outputs */}
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <Target size={18} className="text-green-500" />
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

        {/* Implementation Timeline */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <TrendingUp className="text-blue-500" />
            Implementation Timeline & Expected Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">Months 1-3: Foundation</h4>
              <p className="text-sm text-gray-600">Data integration, dashboard setup (Phase 1 & 3)</p>
              <p className="text-xs text-gray-500 mt-2">Quick wins: Real-time visibility into workforce metrics</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">Months 4-8: Intelligence</h4>
              <p className="text-sm text-gray-600">Deploy forecasting and succession planning (Phase 2 & 4)</p>
              <p className="text-xs text-gray-500 mt-2">Impact: 6-month advance notice on talent gaps</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">Months 9-12: Optimization</h4>
              <p className="text-sm text-gray-600">Strategic planning and continuous improvement (Phase 5 & 6)</p>
              <p className="text-xs text-gray-500 mt-2">Outcome: 30% better talent-business alignment</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Expected Business Impact</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">Shift from reactive to proactive workforce planning</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">Reduce critical role vacancy time by 40%</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">Improve internal promotion rates by 25%</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">Enable data-driven talent investment decisions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Click on any phase to expand and see detailed processes, AI capabilities, and outputs
        </div>
      </div>
    </div>
  );
};

export default WorkforcePlanningWorkflow;