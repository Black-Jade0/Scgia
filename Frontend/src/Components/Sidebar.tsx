import React from "react";
import { NavLink } from "react-router-dom";
import {
    Home,
    Target,
    FileText,
    Menu,
    X,
    LayoutGrid,
    Sparkles,
} from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: Home, path: "/" },
        {
            id: "project-tracker",
            label: "Project Tracker",
            icon: LayoutGrid,
            path: "/Projecttracker",
        },
        {
            id: "eligibility",
            label: "Eligibility Engine",
            icon: Target,
            path: "/eligibility",
        },
        {
            id: "ai-matcher",
            label: "AI Matchmaker",
            icon: Sparkles,
            path: "/Aiskillmatcher",
        },
        { id: "audit", label: "Audit Log", icon: FileText, path: "/audit" },
    ];

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-900 text-white rounded-lg"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <aside
                className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-transform duration-300 z-40 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 w-64`}
            >
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-xl font-bold text-blue-900">
                        PM-AJAY Connect
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">
                        Admin Dashboard
                    </p>
                </div>
                <nav className="p-4">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                                    isActive
                                        ? "bg-blue-900 text-white shadow-lg"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            <item.icon size={20} />
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
