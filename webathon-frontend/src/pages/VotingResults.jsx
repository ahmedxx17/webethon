import { useState } from 'react';

const VotingResults = () => {
  const [results] = useState([
    {
      id: 1,
      title: "Community Garden Initiative",
      description: "Proposal to establish a community garden in the central park area",
      status: "Passed",
      totalVotes: 156,
      yesVotes: 98,
      noVotes: 45,
      abstainVotes: 13,
      category: "Environment",
      endDate: "2024-04-15"
    },
    {
      id: 2,
      title: "Public Library Extension",
      description: "Extend the public library hours and add new digital resources",
      status: "Failed",
      totalVotes: 89,
      yesVotes: 35,
      noVotes: 42,
      abstainVotes: 12,
      category: "Education",
      endDate: "2024-04-20"
    },
    {
      id: 3,
      title: "Street Lighting Upgrade",
      description: "Upgrade street lighting to LED technology in residential areas",
      status: "Passed",
      totalVotes: 234,
      yesVotes: 178,
      noVotes: 45,
      abstainVotes: 11,
      category: "Infrastructure",
      endDate: "2024-03-30"
    }
  ]);

  const calculatePercentage = (votes, total) => {
    return ((votes / total) * 100).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Voting Results</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            View the outcomes of community proposals and voting statistics
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Grid */}
        <div className="grid grid-cols-1 gap-8">
          {results.map((result) => (
            <div key={result.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{result.title}</h2>
                  <p className="text-gray-600">{result.description}</p>
                </div>
                <span className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  result.status === 'Passed' 
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white' 
                    : 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                }`}>
                  {result.status}
                </span>
              </div>

              {/* Voting Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Yes Votes</span>
                      <span>{calculatePercentage(result.yesVotes, result.totalVotes)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"
                        style={{ width: `${calculatePercentage(result.yesVotes, result.totalVotes)}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>No Votes</span>
                      <span>{calculatePercentage(result.noVotes, result.totalVotes)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-pink-600 rounded-full"
                        style={{ width: `${calculatePercentage(result.noVotes, result.totalVotes)}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Abstain</span>
                      <span>{calculatePercentage(result.abstainVotes, result.totalVotes)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full"
                        style={{ width: `${calculatePercentage(result.abstainVotes, result.totalVotes)}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Total Votes</p>
                      <p className="text-xl font-semibold text-gray-800">{result.totalVotes}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="text-xl font-semibold text-gray-800">{result.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">End Date</p>
                      <p className="text-xl font-semibold text-gray-800">{result.endDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Turnout</p>
                      <p className="text-xl font-semibold text-gray-800">
                        {calculatePercentage(result.totalVotes, 500)}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                  View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Proposals</h3>
            <p className="text-gray-600 mb-4">View and participate in currently active proposals.</p>
            <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center group">
              View Active Proposals
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Voting Statistics</h3>
            <p className="text-gray-600 mb-4">Access detailed voting statistics and historical data.</p>
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

export default VotingResults; 