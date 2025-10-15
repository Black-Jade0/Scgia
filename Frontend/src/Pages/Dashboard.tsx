import React from "react";
import StatCard from "../Components/StatCard";
import {
    Users,
    Clock,
    Award,
    DollarSign,
    MapPin,
    CheckCircle,
} from "lucide-react";

const Dashboard: React.FC = () => {
    const stats = [
        {
            icon: Users,
            title: "Verified Beneficiaries",
            value: "24,567",
            change: "+12%",
            color: "bg-blue-900",
            delay: 0,
        },
        {
            icon: Clock,
            title: "Pending Verifications",
            value: "1,234",
            change: "-8%",
            color: "bg-orange-500",
            delay: 100,
        },
        {
            icon: Award,
            title: "Linked Schemes",
            value: "18",
            change: "+3",
            color: "bg-green-600",
            delay: 200,
        },
        {
            icon: DollarSign,
            title: "Funds Released (Cr)",
            value: "₹45.2",
            change: "+18%",
            color: "bg-purple-600",
            delay: 300,
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Unified Beneficiary Registry
                    </h1>
                    <p className="text-gray-600 mt-1">
                        One Verified Source for PM-AJAY
                    </p>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    System Active
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <StatCard key={idx} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Geographic Distribution
                    </h3>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl h-96 flex items-center justify-center border-2 border-dashed border-blue-200">
                        <div className="text-center">
                            <MapPin
                                size={48}
                                className="text-blue-600 mx-auto mb-3"
                            />
                            <p className="text-gray-700 font-medium">
                                Interactive Map Visualization
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                State-wise Onboarding Progress
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Recent Activity
                    </h3>
                    <div className="space-y-4">
                        {[
                            {
                                action: "New verification completed",
                                time: "2 min ago",
                                color: "bg-green-500",
                            },
                            {
                                action: "Scheme eligibility updated",
                                time: "15 min ago",
                                color: "bg-blue-500",
                            },
                            {
                                action: "DBT transfer initiated",
                                time: "1 hour ago",
                                color: "bg-purple-500",
                            },
                            {
                                action: "Project milestone reached",
                                time: "3 hours ago",
                                color: "bg-orange-500",
                            },
                        ].map((activity, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0"
                            >
                                <div
                                    className={`w-2 h-2 rounded-full ${activity.color} mt-2`}
                                ></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        {activity.action}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-2">
                            Data Integration Pipeline
                        </h3>
                        <p className="text-blue-200">
                            SECC • BPL • Aadhaar • State Databases
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle size={24} className="text-green-400" />
                        <span className="font-semibold">
                            All Systems Synced
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
