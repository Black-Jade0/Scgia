import React, { useState } from "react";
import {
    ChevronDown,
    Search,
    Banknote,
    ClipboardList,
    Users,
    X,
    CheckCircle,
    MapPin,
} from "lucide-react";

interface Project {
    id: string;
    name: string;
    location: string;
    budget: string;
    budgetNumeric: number;
    beneficiariesLinked: number;
    progress: number;
    milestonesComplete: string;
    fundsReleased: string;
}

interface Beneficiary {
    name: string;
    id: string;
    dbtStatus: "transferred" | "pending";
    amount?: string;
    date?: string;
}

/**
 * Project Tracker Page Component
 * Shows real-time linkage between funds, projects, and beneficiaries
 */
const ProjectTracker: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [districtFilter, setDistrictFilter] = useState<string>("all");
    const [schemeFilter, setSchemeFilter] = useState<string>("all");

    const projects: Project[] = [
        {
            id: "PRJ001",
            name: "Skill Training Center, Ajmer",
            location: "Ajmer, Rajasthan",
            budget: "₹50 Lakh",
            budgetNumeric: 5000000,
            beneficiariesLinked: 150,
            progress: 60,
            milestonesComplete: "3/5",
            fundsReleased: "₹30 Lakh",
        },
        {
            id: "PRJ002",
            name: "Women Empowerment Hub, Jaipur",
            location: "Jaipur, Rajasthan",
            budget: "₹75 Lakh",
            budgetNumeric: 7500000,
            beneficiariesLinked: 220,
            progress: 80,
            milestonesComplete: "4/5",
            fundsReleased: "₹60 Lakh",
        },
        {
            id: "PRJ003",
            name: "Rural Livelihood Center, Udaipur",
            location: "Udaipur, Rajasthan",
            budget: "₹40 Lakh",
            budgetNumeric: 4000000,
            beneficiariesLinked: 95,
            progress: 45,
            milestonesComplete: "2/5",
            fundsReleased: "₹18 Lakh",
        },
        {
            id: "PRJ004",
            name: "Digital Literacy Program, Kota",
            location: "Kota, Rajasthan",
            budget: "₹35 Lakh",
            budgetNumeric: 3500000,
            beneficiariesLinked: 180,
            progress: 90,
            milestonesComplete: "5/5",
            fundsReleased: "₹35 Lakh",
        },
        {
            id: "PRJ005",
            name: "Handicraft Training Center, Jodhpur",
            location: "Jodhpur, Rajasthan",
            budget: "₹60 Lakh",
            budgetNumeric: 6000000,
            beneficiariesLinked: 125,
            progress: 35,
            milestonesComplete: "2/5",
            fundsReleased: "₹21 Lakh",
        },
    ];

    const beneficiaries: Beneficiary[] = [
        {
            name: "Ramesh Kumar",
            id: "BEN-2025-00147",
            dbtStatus: "transferred",
            amount: "₹25,000",
            date: "14 Sep 2025",
        },
        {
            name: "Sunita Devi",
            id: "BEN-2025-00148",
            dbtStatus: "transferred",
            amount: "₹25,000",
            date: "15 Sep 2025",
        },
        {
            name: "Mohan Lal",
            id: "BEN-2025-00149",
            dbtStatus: "pending",
        },
        {
            name: "Priya Sharma",
            id: "BEN-2025-00150",
            dbtStatus: "transferred",
            amount: "₹25,000",
            date: "16 Sep 2025",
        },
        {
            name: "Rajesh Singh",
            id: "BEN-2025-00151",
            dbtStatus: "transferred",
            amount: "₹25,000",
            date: "16 Sep 2025",
        },
        {
            name: "Kavita Meena",
            id: "BEN-2025-00152",
            dbtStatus: "pending",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="animate-fadeIn">
                <h1 className="text-3xl font-bold text-gray-900">
                    Project Tracker & Beneficiary Linkage
                </h1>
                <p className="text-gray-600 mt-1">
                    Mapping every rupee from fund to beneficiary
                </p>
            </div>

            {/* Filter Controls */}
            <div
                className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 animate-fadeIn"
                style={{ animationDelay: "100ms" }}
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Filter by District
                        </label>
                        <div className="relative">
                            <select
                                value={districtFilter}
                                onChange={(e) =>
                                    setDistrictFilter(e.target.value)
                                }
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                            >
                                <option value="all">All Districts</option>
                                <option value="ajmer">Ajmer</option>
                                <option value="jaipur">Jaipur</option>
                                <option value="udaipur">Udaipur</option>
                                <option value="kota">Kota</option>
                                <option value="jodhpur">Jodhpur</option>
                            </select>
                            <ChevronDown
                                size={20}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Filter by Scheme
                        </label>
                        <div className="relative">
                            <select
                                value={schemeFilter}
                                onChange={(e) =>
                                    setSchemeFilter(e.target.value)
                                }
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                            >
                                <option value="all">All Schemes</option>
                                <option value="skill">Skill Development</option>
                                <option value="livelihood">
                                    Livelihood Support
                                </option>
                                <option value="infrastructure">
                                    Infrastructure
                                </option>
                            </select>
                            <ChevronDown
                                size={20}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-end">
                        <button className="w-full sm:w-auto px-6 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                            <Search size={20} />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Projects Table */}
            <div
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn"
                style={{ animationDelay: "200ms" }}
            >
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                    Project Name
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                    Location
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                    Budget
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                    Beneficiaries
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                    Progress
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {projects.map((project, idx) => (
                                <tr
                                    key={project.id}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">
                                            {project.name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            ID: {project.id}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <MapPin
                                                size={16}
                                                className="text-gray-400"
                                            />
                                            <span className="text-sm">
                                                {project.location}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-gray-900">
                                            {project.budget}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Users
                                                size={16}
                                                className="text-blue-600"
                                            />
                                            <span className="font-medium text-gray-900">
                                                {project.beneficiariesLinked}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 bg-gray-200 rounded-full h-2 min-w-[100px]">
                                                <div
                                                    className="bg-blue-900 h-2 rounded-full transition-all duration-500"
                                                    style={{
                                                        width: `${project.progress}%`,
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">
                                                {project.progress}%
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() =>
                                                setSelectedProject(project)
                                            }
                                            className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detail Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-indigo-900 p-6 rounded-t-2xl">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">
                                        {selectedProject.name}
                                    </h2>
                                    <p className="text-blue-200 mt-1">
                                        Total Budget: {selectedProject.budget}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Visual Flow */}
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Fund Flow & Impact
                            </h3>
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                                            <Banknote
                                                size={20}
                                                className="text-white"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-green-900">
                                                Funds Released
                                            </p>
                                            <p className="text-lg font-bold text-green-700">
                                                {selectedProject.fundsReleased}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-0.5 bg-gray-300"></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                </div>

                                <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                            <ClipboardList
                                                size={20}
                                                className="text-white"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-blue-900">
                                                Milestones
                                            </p>
                                            <p className="text-lg font-bold text-blue-700">
                                                {
                                                    selectedProject.milestonesComplete
                                                }{" "}
                                                Complete
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-0.5 bg-gray-300"></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                </div>

                                <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                                            <Users
                                                size={20}
                                                className="text-white"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-purple-900">
                                                Beneficiaries
                                            </p>
                                            <p className="text-lg font-bold text-purple-700">
                                                {
                                                    selectedProject.beneficiariesLinked
                                                }{" "}
                                                Linked
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Beneficiary List */}
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                Linked Beneficiaries
                            </h3>
                            <div className="space-y-3 max-h-96 overflow-y-auto">
                                {beneficiaries.map((beneficiary, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-semibold text-gray-900">
                                                    {beneficiary.name}
                                                </h4>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    ID: {beneficiary.id}
                                                </p>
                                            </div>
                                            <div>
                                                {beneficiary.dbtStatus ===
                                                "transferred" ? (
                                                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex items-center gap-2">
                                                        <CheckCircle
                                                            size={16}
                                                        />
                                                        <div className="text-right">
                                                            <p className="font-semibold text-sm">
                                                                {
                                                                    beneficiary.amount
                                                                }{" "}
                                                                Transferred
                                                            </p>
                                                            <p className="text-xs">
                                                                on{" "}
                                                                {
                                                                    beneficiary.date
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg">
                                                        <p className="font-semibold text-sm">
                                                            Transfer Pending
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectTracker;
