import { useState } from 'react';

const Vote = () => {
  const [activeProposals, setActiveProposals] = useState([
    {
      id: 1,
      title: "Community Garden Initiative",
      description: "Proposal to establish a community garden in the central park area. This initiative aims to create a sustainable green space for community members to grow their own produce and learn about sustainable gardening practices.",
      category: "Environment",
      deadline: "2024-04-15",
      totalVotes: 156,
      userVote: null
    },
    {
      id: 2,
      title: "Public Library Extension",
      description: "Extend the public library hours and add new digital resources. This proposal includes extended evening hours, new e-book subscriptions, and digital learning resources for all age groups.",
      category: "Education",
      deadline: "2024-04-20",
      totalVotes: 89,
      userVote: null
    }
  ]);

  const handleVote = (proposalId, vote) => {
    setActiveProposals(proposals => 
      proposals.map(proposal => 
        proposal.id === proposalId 
          ? { 
              ...proposal, 
              userVote: vote,
              totalVotes: proposal.totalVotes + (vote === 'yes' ? 1 : vote === 'no' ? -1 : 0)
            }
          : proposal
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cast Your Vote</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Make your voice heard on important community decisions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {activeProposals.map((proposal) => (
            <div key={proposal.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{proposal.title}</h2>
                  <span className="text-sm text-gray-500">Category: {proposal.category}</span>
                </div>
                <span className="text-sm text-gray-500">Deadline: {proposal.deadline}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{proposal.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleVote(proposal.id, 'yes')}
                    className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                      proposal.userVote === 'yes'
                        ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                    }`}
                  >
                    Vote Yes
                  </button>
                  <button
                    onClick={() => handleVote(proposal.id, 'no')}
                    className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                      proposal.userVote === 'no'
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                    }`}
                  >
                    Vote No
                  </button>
                  <button
                    onClick={() => handleVote(proposal.id, null)}
                    className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                      proposal.userVote === null
                        ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                    }`}
                  >
                    Abstain
                  </button>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total Votes: {proposal.totalVotes}</p>
                  {proposal.userVote && (
                    <p className="text-sm font-medium bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                      Your vote: {proposal.userVote.toUpperCase()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">Learn more about how voting works and its impact on our community.</p>
            <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center group">
              View Voting Guide
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">View Results</h3>
            <p className="text-gray-600 mb-4">Check the outcomes of past proposals and current voting progress.</p>
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

export default Vote; 