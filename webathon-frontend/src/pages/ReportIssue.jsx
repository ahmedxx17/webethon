import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportIssue = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    department: '',
    priority: 'Medium',
    location: '',
    attachments: []
  });

  const departments = [
    { id: 'transport', name: 'Transport Department' },
    { id: 'sanitation', name: 'Sanitation Department' },
    { id: 'health', name: 'Health Department' },
    { id: 'education', name: 'Education Department' },
    { id: 'safety', name: 'Public Safety Department' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitting issue:', formData);
    // Navigate back to MyIssues page after submission
    navigate('/my-issues');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Report an Issue</h1>
          <p className="text-lg text-blue-100">
            Help us improve our city by reporting issues that need attention
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Issue Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Brief description of the issue"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Detailed Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Please provide detailed information about the issue"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                id="department"
                name="department"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select a department</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Priority */}
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                Priority Level
              </label>
              <select
                id="priority"
                name="priority"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter the location of the issue"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            {/* Attachments */}
            <div>
              <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-1">
                Attachments
              </label>
              <input
                type="file"
                id="attachments"
                multiple
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                onChange={handleFileChange}
              />
              <p className="mt-1 text-sm text-gray-500">
                You can attach multiple files (images, documents, etc.)
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Submit Issue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
