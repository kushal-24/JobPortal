import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
//react-hot-toast is a lightweight library to show toast notifications (little popup messages like “Saved!” or “Error occurred”).

import LandingPage  from "./pages/LandingPage/LandingPage.jsx";
import SignUp  from "./pages/auth/SignUp.jsx";
import Login  from "./pages/auth/Login.jsx";
import JobSeekerDashboard from "./pages/JobSeeker/JobSeekerDashboard.jsx";
import EmployerDashboard from "./pages/Employer/EmployerDashBoard.jsx";
import JobDetails  from "./pages/JobSeeker/JobDetails.jsx";
import SavedJobs  from "./pages/JobSeeker/SavedJobs.jsx";
import ManageJobs  from "./pages/Employer/ManageJobs.jsx";
import JobPostingForm  from "./pages/Employer/JobPostingForm.jsx";
import UserProfile  from "./pages/JobSeeker/UserProfile.jsx";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";
import ApplicationViewer from "./pages/Employer/ApplicationViewer.jsx";
import EmployerProfilePage from "./pages/Employer/EmployerProfilePage.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/find-jobs" element={<JobSeekerDashboard />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/profile" element={<UserProfile />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute requiredRole="employer" />}>
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="/post-job" element={<JobPostingForm />} />
            <Route path="/manage-jobs" element={<ManageJobs />} />
            <Route path="/applicants" element={<ApplicationViewer />} />
            <Route path="/company-profile" element={<EmployerProfilePage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
          {/*"If the user goes to any route that doesn't exist, automatically redirect them to /replace." */}
        
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
}

export default App;
