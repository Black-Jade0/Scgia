import React from "react";
import { NavLink } from "react-router-dom";
import {
    Home,
    Users,
    Briefcase,
    Target,
    FileText,
    Menu,
    X,
} from "lucide-react";

// Define the types for the component's props
interface SidebarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: Home, path: "/" },
        { id: "registry", label: "Registry", icon: Users, path: "/registry" },
        {
            id: "projects",
            label: "Projects",
            icon: Briefcase,
            path: "/projects",
        },
        {
            id: "eligibility",
            label: "Eligibility Engine",
            icon: Target,
            path: "/eligibility",
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
                        Unified Beneficiary System
                    </p>
                </div>

                <nav className="p-4">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
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
                                <Icon size={20} />
                                <span className="font-medium">
                                    {item.label}
                                </span>
                            </NavLink>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-lg text-white">
                        <p className="text-sm font-semibold mb-1">Need Help?</p>
                        <p className="text-xs mb-3 opacity-90">
                            Check our documentation.
                        </p>
                        <button className="w-full bg-white text-orange-600 text-sm font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            Documentation
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
