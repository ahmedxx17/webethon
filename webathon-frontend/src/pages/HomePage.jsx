import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Animated counter hook
const useCounter = (end, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, start, duration]);
  
  return count;
};

// Stat card component
const StatCard = ({ title, value, icon }) => {
  const count = useCounter(value);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">{count}</h3>
        </div>
        <div className="bg-gradient-to-r from-teal-500/20 to-blue-600/20 p-3 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
};

// Feature card component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
    <div className="bg-gradient-to-r from-teal-500/20 to-blue-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Step card component
const StepCard = ({ number, title, description, image, role }) => (
  <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-white shadow-md border border-gray-100">
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
        {number}
      </div>
    </div>
    <div className="flex-grow">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {role && (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-teal-500/20 to-blue-600/20 text-teal-700">
            {role}
          </span>
        )}
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
    {image && (
      <div className="w-full md:w-32 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    )}
  </div>
);

// Proposal card component
const ProposalCard = ({ title, department, deadline, votes, target, status }) => {
  const percentage = Math.round((votes / target) * 100);
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
          status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
        }`}>
          {status}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-2">{department}</p>
      <p className="text-gray-600 text-sm mb-4">Deadline: {deadline}</p>
      
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-gray-600">{votes} votes</span>
        <span className="text-gray-600">{percentage}% of goal</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

// Testimonial card component
const TestimonialCard = ({ quote, name, role, image }) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">"{quote}"</p>
  </div>
);

function HomePage() {
  // For parallax effect
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full opacity-20 blur-3xl"
            style={{ transform: `translate(${offset * 0.05}px, ${offset * 0.05}px)` }}
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"
            style={{ transform: `translate(${-offset * 0.05}px, ${-offset * 0.05}px)` }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl"
            style={{ transform: `translate(${offset * 0.02}px, ${-offset * 0.02}px)` }}
          ></div>
        </div>
        
        {/* City skyline silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-black opacity-30"
             style={{ 
               maskImage: "url('https://assets.codepen.io/t-1/codepen-logo-white.svg')", 
               maskSize: "contain",
               maskRepeat: "repeat-x",
               maskPosition: "bottom"
             }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Smarter Cities.
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Real-Time Collaboration.
              </span>
              </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              A collaborative platform connecting citizens, officials, and administrators to build 
              smarter, more responsive cities through real-time issue tracking, department coordination,
              and community decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/issues/report" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-lg font-medium text-center transition-all duration-300 shadow-lg hover:shadow-xl">
                Report an Issue
                </Link>
              <Link to="/dashboard" className="px-8 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 text-white border border-white border-opacity-30 rounded-lg font-medium text-center backdrop-blur-sm transition-all duration-300">
                Explore Dashboard
                </Link>
              </div>
            </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform provides powerful tools for citizens, officials, and administrators
              to collaborate on making cities smarter and more efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Report City Issues"
              description="Easily report and track urban issues with geolocation, photos, and status updates in real-time."
            />
            
            <FeatureCard 
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>}
              title="Interactive City Map"
              description="Navigate through a detailed map of your city, filter issues by type, status, and department."
            />
            
            <FeatureCard 
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>}
              title="Real-time Collaboration"
              description="Direct communication channels between citizens and department officials for faster issue resolution."
            />
            
            <FeatureCard 
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
              title="Proposal Voting"
              description="Participate in community decisions through transparent voting on city proposals and initiatives."
            />
            
            <FeatureCard 
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
              title="Department KPIs"
              description="Track performance metrics across city departments with transparent, data-driven insights."
            />
            
            <FeatureCard 
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="AR Integration"
              description="Experience augmented reality views of city issues and proposed solutions in your actual environment."
                />
              </div>
            </div>
      </section>

      {/* Live City Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Live City Stats</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-time metrics showing the pulse of our collaborative smart city platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Open Issues" 
              value={124} 
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
            
            <StatCard 
              title="Resolved Today" 
              value={37} 
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
            
            <StatCard 
              title="Voter Participation" 
              value={68} 
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
            />
            
            <StatCard 
              title="Active Departments" 
              value={12} 
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform streamlines the process of reporting and resolving city issues through collaboration
            </p>
          </div>
          
          <div className="space-y-6">
            <StepCard 
              number="1" 
              title="Report an Issue" 
              role="Citizen"
              description="Citizens can easily report issues they encounter in the city using our mobile app or website. Add photos, location, and details to help officials understand the problem."
            />
            
            <div className="flex justify-center">
              <svg className="w-6 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
            
            <StepCard 
              number="2" 
              title="Assign & Prioritize" 
              role="Department Official"
              description="Department officials review incoming reports, assign them to the appropriate teams, and prioritize based on urgency and available resources."
            />
            
            <div className="flex justify-center">
              <svg className="w-6 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
            
            <StepCard 
              number="3" 
              title="Resolve & Update" 
              role="Collaboration"
              description="Teams work to resolve issues and provide real-time updates to citizens. Once resolved, citizens can verify and rate the resolution quality."
            />
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/about/process" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
              Learn more about our process
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
              </div>
      </section>

      {/* Proposals Spotlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proposals Spotlight</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Current proposals open for community voting and feedback
              </p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProposalCard 
              title="New Bike Lanes on Main Street"
              department="Transport Department"
              deadline="June 30, 2023"
              votes={1250}
              target={2000}
              status="Active"
            />
            
            <ProposalCard 
              title="Community Garden in Central Park"
              department="Parks & Recreation"
              deadline="July 15, 2023"
              votes={876}
              target={1500}
              status="Active"
            />
            
            <ProposalCard 
              title="Smart Street Lighting Initiative"
              department="Energy & Infrastructure"
              deadline="July 5, 2023"
              votes={1890}
              target={2500}
              status="Closing Soon"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/proposals" className="px-8 py-3 bg-white text-teal-600 border border-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-colors duration-300">
              View All Proposals
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Voices</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from citizens and officials who are using our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="As a concerned citizen, I love how easy it is to report issues and actually see them get resolved. The transparency is refreshing!"
              name="Sarah Johnson"
              role="Citizen"
              image="https://randomuser.me/api/portraits/women/44.jpg"
            />
            
            <TestimonialCard 
              quote="This platform has transformed how our department handles citizen requests. We're more efficient and our approval ratings have never been higher."
              name="Michael Chen"
              role="Transport Department Official"
              image="https://randomuser.me/api/portraits/men/32.jpg"
            />
            
            <TestimonialCard 
              quote="The data insights we get from this platform help us make better decisions about resource allocation across the city."
              name="Amara Okafor"
              role="City Administrator"
              image="https://randomuser.me/api/portraits/women/68.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join us in shaping a smarter city</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Be part of the collaborative effort to make our city more responsive, efficient, and citizen-focused.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="px-8 py-3 bg-white text-teal-600 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Register Now
            </Link>
            <Link to="/login" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white hover:text-teal-600 transition-colors duration-300">
              Login
            </Link>
          </div>
      </div>
      </section>
    </div>
  );
}

export default HomePage; 