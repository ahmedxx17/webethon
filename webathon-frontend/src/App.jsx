import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import MyIssues from './pages/MyIssues'
import Notifications from './pages/Notifications'
import Voting from './pages/Voting'
import AdminDashboard from './pages/AdminDashboard'
import ViewProposals from './pages/ViewProposals'
import Vote from './pages/Vote'
import VotingResults from './pages/VotingResults'
import Department from './pages/Department'
import ReportIssue from './pages/ReportIssue'

// Import your pages here
import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/my-issues" element={<MyIssues />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/proposals/view" element={<ViewProposals />} />
            <Route path="/proposals/vote" element={<Vote />} />
            <Route path="/proposals/results" element={<VotingResults />} />
            <Route path="/departments" element={<Department />} />
            <Route path="/report-issue" element={<ReportIssue />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
