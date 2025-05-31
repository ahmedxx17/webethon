import { useState } from 'react';

const ViewProposals = () => {
  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Community Garden Initiative",
      description: "Proposal to establish a community garden in the central park area",
      status: "Active",
      votes: 156,
      deadline: "2024-04-15",
      category: "Environment"
    },
    {
      id: 2,
      title: "Public Library Extension",
      description: "Extend the public library hours and add new digital resources",
      status: "Active",
      votes: 89,
      deadline: "2024-04-20",
      category: "Education"
    },
    {
      id: 3,
      title: "Street Lighting Upgrade",
      description: "Upgrade street lighting to LED technology in residential areas",
      status: "Completed",
      votes: 234,
      deadline: "2024-03-30",
      category: "Infrastructure"
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredProposals = filter === 'all' 
    ? proposals 
    : proposals.filter(proposal => proposal.status.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">View Proposals</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Explore and track all community proposals and their progress
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'all' 
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'active' 
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === 'completed' 
                  ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProposals.map((proposal) => (
            <div key={proposal.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{proposal.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  proposal.status === 'Active' 
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white' 
                    : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                }`}>
                  {proposal.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{proposal.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Category: {proposal.category}</span>
                <span>Votes: {proposal.votes}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Deadline: {proposal.deadline}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Want to Vote?</h3>
            <p className="text-gray-600 mb-4">Participate in active proposals and make your voice heard.</p>
            <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center group">
              Go to Voting
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">View Results</h3>
            <p className="text-gray-600 mb-4">Check the outcomes of completed proposals and current voting progress.</p>
            <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center group">
              See Results
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

export default ViewProposals; 