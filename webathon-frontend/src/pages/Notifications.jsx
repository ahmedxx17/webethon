import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Notification card component
const NotificationCard = ({ title, type, time, message, isRead }) => {
  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'issue':
        return 'bg-blue-100 text-blue-800';
      case 'proposal':
        return 'bg-purple-100 text-purple-800';
      case 'vote':
        return 'bg-green-100 text-green-800';
      case 'system':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 ${!isRead ? 'border-l-4 border-l-teal-500' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(type)}`}>
            {type}
          </span>
          {!isRead && (
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
          )}
        </div>
        <span className="text-sm text-gray-500">{time}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{message}</p>
      <div className="flex justify-end">
        <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center">
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

function Notifications() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample notifications data
  const notifications = [
    {
      title: "Issue Update: Pothole on Main Street",
      type: "Issue",
      time: "2 hours ago",
      message: "Your reported issue has been assigned to the Public Works department and is now in progress.",
      isRead: false
    },
    {
      title: "New Proposal Available",
      type: "Proposal",
      time: "5 hours ago",
      message: "A new proposal for community garden development is now open for voting.",
      isRead: false
    },
    {
      title: "Voting Reminder",
      type: "Vote",
      time: "1 day ago",
      message: "Don't forget to cast your vote on the new bike lanes proposal. Voting closes in 2 days.",
      isRead: true
    },
    {
      title: "System Maintenance",
      type: "System",
      time: "2 days ago",
      message: "Scheduled maintenance will occur this weekend. The platform will be unavailable for 2 hours.",
      isRead: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Notifications</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Stay updated with all your city-related activities and updates
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
                placeholder="Search notifications..."
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
              All
            </button>
            <button
              onClick={() => setActiveTab('unread')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'unread'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setActiveTab('read')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'read'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Read
            </button>
          </div>
        </div>

        {/* Notifications Grid */}
        <div className="grid grid-cols-1 gap-6">
          {notifications.map((notification, index) => (
            <NotificationCard key={index} {...notification} />
          ))}
        </div>

        {/* Mark All as Read Button */}
        <div className="mt-12 text-center">
          <button
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            Mark All as Read
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notifications; 