import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
// Import Page Components
import Dashboard from "./Pages/Dashboard";
import EligibilityEngine from "./Pages/EligibilityEngine";  
import ProjectTracker from "./Pages/ProjectTracker";    
import AiSkillMatcher from "./Pages/AiSkillMatcher";
import AuditDashboard from "./Pages/AuditDashboard";
import CitizenPortal from "./Pages/CitizenPortal";
import EnumeratorApp from "./Pages/Enumerator";

const UnderDevelopment: React.FC = () => (
    <div className="flex items-center justify-center h-96">
        <div className="text-center">
            <p className="text-gray-600 text-lg">Page under development</p>
            <p className="text-gray-400 text-sm mt-2">Coming soon...</p>
        </div>
    </div>
);

// This layout is for the internal dashboard pages
const AppLayout: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    return (
        <div className="min-h-screen bg-gray-50">
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <main className="lg:ml-64 p-6 lg:p-8">
                <Outlet />
            </main>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Routes WITH the sidebar layout */}
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="eligibility" element={<EligibilityEngine />} />
                    <Route path="Projecttracker" element={<ProjectTracker />} />
                    <Route path="Aiskillmatcher" element={<AiSkillMatcher />} />
                    <Route path="audit" element={<AuditDashboard />} />
                    <Route path="registry" element={<UnderDevelopment />} />
                </Route>

                {/* Standalone routes WITHOUT the sidebar */}
                <Route path="/citizen" element={<CitizenPortal />} />
                <Route path="/enumerator" element={<EnumeratorApp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
