import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Voting card component
const VotingCard = ({ title, description, deadline, votes, category, status }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-gradient-to-r from-teal-500 to-blue-600 text-white';
      case 'closing soon':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white';
      case 'closed':
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
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
      <p className="text-gray-500 text-sm mb-2">{category}</p>
      <p className="text-gray-600 text-sm mb-4">Deadline: {deadline}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Total Votes: {votes}</span>
        <Link 
          to="/proposals/vote" 
          className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center group"
        >
          Vote Now
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

function Voting() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample voting data
  const votings = [
    {
      title: "Community Garden Initiative",
      description: "Proposal to establish a community garden in the central park area",
      deadline: "2024-04-15",
      votes: 156,
      category: "Environment",
      status: "Active"
    },
    {
      title: "Public Library Extension",
      description: "Extend the public library hours and add new digital resources",
      deadline: "2024-04-20",
      votes: 89,
      category: "Education",
      status: "Closing Soon"
    },
    {
      title: "Street Lighting Upgrade",
      description: "Upgrade street lighting to LED technology in residential areas",
      deadline: "2024-03-30",
      votes: 234,
      category: "Infrastructure",
      status: "Closed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Voting Center</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Participate in community decisions and shape the future of your city
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
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              All Proposals
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'active'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab('closed')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'closed'
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Closed
            </button>
          </div>
        </div>

        {/* Voting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {votings.map((voting, index) => (
            <VotingCard key={index} {...voting} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/proposals/view"
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">View Proposals</h3>
              <svg className="w-6 h-6 text-teal-600 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="text-gray-600">Browse all active and past proposals</p>
          </Link>

          <Link
            to="/proposals/vote"
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Cast Your Vote</h3>
              <svg className="w-6 h-6 text-teal-600 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="text-gray-600">Participate in active proposals</p>
          </Link>

          <Link
            to="/proposals/results"
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">View Results</h3>
              <svg className="w-6 h-6 text-teal-600 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="text-gray-600">See the outcomes of past proposals</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Voting; 