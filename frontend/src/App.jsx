import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateResume from "./pages/create"; // Your report page
import ResumeUpload from "./pages/ResumeUpload";
// import TemplateSelection from './pages/TemplateSelection';
import TemplateSelection from "./Component/TemplateSelection";
import ResumePreview from "./Component/ResumePreview";
import SignupPage from "./pages/signup";
import Login from "./pages/login";
import UploadResume from "./pages/existingResume";
import MultipleResume from "./pages/MultipleResume";
import Communication from "./pages/Communication";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/resumeupload" element={<ResumeUpload />} />
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/resume-creation" element={<CreateResume />} />
        <Route path="/resume" element={<UploadResume/>} />
        <Route path="/template-selection" element={<TemplateSelection />} />
        <Route path="/resume-preview/:templateId" element={<ResumePreview />} />
        <Route path="/mul_resume" element={<MultipleResume />} />
        <Route path='/communication' element={<Communication />} />
        {/* <Route path="/resume-creation" element={<CreateResume />} /> */}
        {/* Home page route */}
        {/* <Route path="/resume" element={< Resume/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;