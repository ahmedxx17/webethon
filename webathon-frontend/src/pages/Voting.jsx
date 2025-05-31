import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Voting card component
const VotingCard = ({ title, category, deadline, totalVotes, options, status }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  
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

  const calculatePercentage = (votes) => {
    return Math.round((votes / totalVotes) * 100);
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
      <p className="text-gray-600 text-sm mb-6">Deadline: {deadline}</p>
      
      <div className="space-y-4 mb-6">
        {options.map((option, index) => (
          <div key={index} className="relative">
            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
              <input
                type="radio"
                name={`vote-${title}`}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
              />
              <div className="ml-3 flex-grow">
                <span className="block text-sm font-medium text-gray-900">{option.text}</span>
                <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"
                    style={{ width: `${calculatePercentage(option.votes)}%` }}
                  ></div>
                </div>
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>{option.votes} votes</span>
                  <span>{calculatePercentage(option.votes)}%</span>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Link 
          to={`/voting/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center"
        >
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <button 
          className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={selectedOption === null}
        >
          Submit Vote
        </button>
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
      title: "City Budget Allocation 2024",
      category: "Finance",
      deadline: "June 30, 2024",
      totalVotes: 2500,
      status: "Active",
      options: [
        { text: "Increase funding for public transportation", votes: 1200 },
        { text: "Invest in renewable energy projects", votes: 800 },
        { text: "Expand public parks and recreation", votes: 500 }
      ]
    },
    {
      title: "New Public Library Location",
      category: "Infrastructure",
      deadline: "July 15, 2024",
      totalVotes: 1800,
      status: "Active",
      options: [
        { text: "Downtown Central District", votes: 950 },
        { text: "Northside Community Center", votes: 650 },
        { text: "Eastside Plaza", votes: 200 }
      ]
    },
    {
      title: "Community Event Calendar",
      category: "Culture",
      deadline: "July 5, 2024",
      totalVotes: 1500,
      status: "Closing Soon",
      options: [
        { text: "Monthly street festivals", votes: 600 },
        { text: "Quarterly cultural celebrations", votes: 450 },
        { text: "Annual city-wide festival", votes: 450 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Active Votes</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Make your voice heard by participating in important city decisions
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
                placeholder="Search votes..."
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
              All Votes
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

        {/* Voting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {votings.map((voting, index) => (
            <VotingCard key={index} {...voting} />
          ))}
        </div>

        {/* Create New Vote Button */}
        <div className="mt-12 text-center">
          <Link
            to="/voting/create"
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
            Create New Vote
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Voting; 