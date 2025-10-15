import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
// Import Page Components
import Dashboard from "./Pages/Dashboard";
import EligibilityEngine from "./Pages/EligibilityEngine";

/**
 * A placeholder component for pages that are not yet developed.
 */
const UnderDevelopment: React.FC = () => (
    <div className="flex items-center justify-center h-96">
        <div className="text-center">
            <p className="text-gray-600 text-lg">Page under development</p>
            <p className="text-gray-400 text-sm mt-2">Coming soon...</p>
        </div>
    </div>
);

/**
 * Defines the main layout of the application, including the sidebar
 * and the main content area where pages will be rendered.
 */
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

            <main className="lg:ml-64 min-h-screen p-6 lg:p-8">
                {/* Child routes will be rendered here */}
                <Outlet />
            </main>
        </div>
    );
};

/**
 * The main App component that sets up the application's routing.
 * All page routes are defined here.
 */
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* All pages use the AppLayout which includes the sidebar */}
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="eligibility" element={<EligibilityEngine />} />
                    <Route path="registry" element={<UnderDevelopment />} />
                    <Route path="projects" element={<UnderDevelopment />} />
                    <Route path="audit" element={<UnderDevelopment />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
