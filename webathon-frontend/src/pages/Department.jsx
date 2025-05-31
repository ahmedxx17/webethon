import { useState } from 'react';
import { Link } from 'react-router-dom';

const Department = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = [
    {
      id: 1,
      name: "Transport Department",
      description: "Managing city transportation infrastructure and services",
      status: "Active",
      issues: 24,
      staff: 45,
      category: "Infrastructure",
      recentActivity: "New bus route added to North District"
    },
    {
      id: 2,
      name: "Sanitation Department",
      description: "Ensuring clean and healthy city environment",
      status: "Active",
      issues: 18,
      staff: 32,
      category: "Public Health",
      recentActivity: "Waste collection schedule updated"
    },
    {
      id: 3,
      name: "Health Department",
      description: "Managing public health services and facilities",
      status: "Active",
      issues: 15,
      staff: 28,
      category: "Healthcare",
      recentActivity: "New vaccination center opened"
    },
    {
      id: 4,
      name: "Education Department",
      description: "Overseeing public schools and educational programs",
      status: "Active",
      issues: 12,
      staff: 38,
      category: "Education",
      recentActivity: "New STEM program launched"
    },
    {
      id: 5,
      name: "Public Safety Department",
      description: "Ensuring public safety and emergency response",
      status: "Active",
      issues: 20,
      staff: 52,
      category: "Security",
      recentActivity: "Emergency response drill completed"
    }
  ];

  const departmentIssues = [
    {
      id: 1,
      department: "Transport Department",
      title: "Pothole on Main Street",
      status: "In Progress",
      priority: "High",
      date: "2024-03-15"
    },
    {
      id: 2,
      department: "Sanitation Department",
      title: "Garbage Collection Delay",
      status: "Open",
      priority: "Medium",
      date: "2024-03-14"
    },
    {
      id: 3,
      department: "Health Department",
      title: "Vaccination Center Overcrowding",
      status: "Resolved",
      priority: "High",
      date: "2024-03-13"
    }
  ];

  const departmentKPIs = [
    {
      id: 1,
      department: "Transport Department",
      metric: "Response Time",
      value: "85%",
      target: "90%",
      trend: "up"
    },
    {
      id: 2,
      department: "Sanitation Department",
      metric: "Service Coverage",
      value: "92%",
      target: "95%",
      trend: "up"
    },
    {
      id: 3,
      department: "Health Department",
      metric: "Patient Satisfaction",
      value: "88%",
      target: "85%",
      trend: "up"
    }
  ];

  const renderDepartmentCard = (department) => (
    <div key={department.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{department.name}</h2>
          <p className="text-gray-600">{department.description}</p>
        </div>
        <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-teal-500 to-blue-600 text-white">
          {department.status}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-500">Active Issues</p>
          <p className="text-xl font-semibold text-gray-800">{department.issues}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-500">Staff Members</p>
          <p className="text-xl font-semibold text-gray-800">{department.staff}</p>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>Category: {department.category}</span>
        <span>Recent: {department.recentActivity}</span>
      </div>

      <div className="flex justify-end space-x-3">
        <button className="px-4 py-2 bg-white text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-all duration-200">
          View Details
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
          Contact Department
        </button>
      </div>
    </div>
  );

  const renderIssuesList = () => (
    <div className="space-y-4">
      {departmentIssues.map(issue => (
        <div key={issue.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{issue.title}</h3>
              <p className="text-gray-600">{issue.department}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              issue.status === 'Resolved' ? 'bg-green-100 text-green-800' :
              issue.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {issue.status}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Priority: {issue.priority}</span>
            <span className="text-gray-500">Date: {issue.date}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderKPIs = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {departmentKPIs.map(kpi => (
        <div key={kpi.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{kpi.department}</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">{kpi.metric}</p>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold text-gray-800">{kpi.value}</p>
                <p className="text-sm text-gray-500">Target: {kpi.target}</p>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className={`mr-2 ${
                kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {kpi.trend === 'up' ? '↑' : '↓'}
              </span>
              <span className="text-gray-500">Trending {kpi.trend}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">City Departments</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Explore and interact with various city departments and their services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-96">
            <div className="relative">
              <input
                type="text"
                placeholder="Search departments..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('issues')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'issues'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Issues
            </button>
            <button
              onClick={() => setActiveTab('kpis')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'kpis'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              KPIs
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map(renderDepartmentCard)}
          </div>
        )}

        {activeTab === 'issues' && renderIssuesList()}

        {activeTab === 'kpis' && renderKPIs()}

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Report an Issue</h3>
            <p className="text-gray-600 mb-4">Need to report a problem or request a service? Submit your request here.</p>
            <Link 
              to="/report-issue"
              className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center group"
            >
              Submit Request
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Department Statistics</h3>
            <p className="text-gray-600 mb-4">View detailed performance metrics and statistics for all departments.</p>
            <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center group">
              View Statistics
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department; 