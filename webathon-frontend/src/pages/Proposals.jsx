import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Proposal card component
const ProposalCard = ({ title, department, deadline, votes, target, status, description }) => {
  const percentage = Math.round((votes / target) * 100);
  
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'closing soon':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-2">{department}</p>
      <p className="text-gray-600 text-sm mb-4">Deadline: {deadline}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-gray-600">{votes} votes</span>
        <span className="text-gray-600">{percentage}% of goal</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="flex justify-between items-center">
        <Link 
          to={`/proposals/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center"
        >
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
          Vote Now
        </button>
      </div>
    </div>
  );
};

function Proposals() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample proposals data
  const proposals = [
    {
      title: "New Bike Lanes on Main Street",
      department: "Transport Department",
      deadline: "June 30, 2024",
      votes: 1250,
      target: 2000,
      status: "Active",
      description: "Proposal to add dedicated bike lanes on Main Street to promote cycling and reduce traffic congestion."
    },
    {
      title: "Community Garden in Central Park",
      department: "Parks & Recreation",
      deadline: "July 15, 2024",
      votes: 876,
      target: 1500,
      status: "Active",
      description: "Initiative to create a community garden space in Central Park for residents to grow their own produce."
    },
    {
      title: "Smart Street Lighting Initiative",
      department: "Energy & Infrastructure",
      deadline: "July 5, 2024",
      votes: 1890,
      target: 2500,
      status: "Closing Soon",
      description: "Upgrade street lighting to energy-efficient LED lights with smart controls for better energy management."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">City Proposals</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Participate in shaping your city's future by voting on important proposals
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
                placeholder="Search proposals..."
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
              All Proposals
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'active'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab('closing')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'closing'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Closing Soon
            </button>
          </div>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proposals.map((proposal, index) => (
            <ProposalCard key={index} {...proposal} />
          ))}
        </div>

        {/* Create New Proposal Button */}
        <div className="mt-12 text-center">
          <Link
            to="/proposals/create"
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
            Create New Proposal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Proposals; 