import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Issue card component
const IssueCard = ({ title, status, department, date, description, priority }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex gap-2">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(status)}`}>
            {status}
          </span>
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getPriorityColor(priority)}`}>
            {priority}
          </span>
        </div>
      </div>
      <p className="text-gray-500 text-sm mb-2">{department}</p>
      <p className="text-gray-600 text-sm mb-4">{date}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-end">
        <Link to={`/issues/${title.toLowerCase().replace(/\s+/g, '-')}`} 
              className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center">
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

function MyIssues() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample issues data
  const issues = [
    {
      title: "Pothole on Main Street",
      status: "Open",
      department: "Public Works",
      date: "2024-03-15",
      description: "Large pothole causing traffic issues and potential damage to vehicles.",
      priority: "High"
    },
    {
      title: "Street Light Outage",
      status: "In Progress",
      department: "Utilities",
      date: "2024-03-14",
      description: "Multiple street lights not working in the downtown area.",
      priority: "Medium"
    },
    {
      title: "Garbage Collection Delay",
      status: "Resolved",
      department: "Sanitation",
      date: "2024-03-13",
      description: "Regular garbage collection was delayed by 2 days.",
      priority: "Low"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Issues</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Track and manage all your reported city issues in one place
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
                placeholder="Search issues..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              All Issues
            </button>
            <button
              onClick={() => setActiveTab('open')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'open'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Open
            </button>
            <button
              onClick={() => setActiveTab('resolved')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'resolved'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Resolved
            </button>
          </div>
        </div>

        {/* Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, index) => (
            <IssueCard key={index} {...issue} />
          ))}
        </div>

        {/* Report New Issue Button */}
        <div className="mt-12 text-center">
          <Link
            to="/issues/report"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Report New Issue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyIssues; 