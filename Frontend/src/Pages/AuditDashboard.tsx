import React from "react";
import {
    LayoutGrid,
    Banknote,
    Users,
    ShieldAlert,
    UserPlus,
    FileCheck,
    Lock,
    DownloadCloud,
    MapPin,
} from "lucide-react";

// Simplified Stat Card for this page
const AuditStatCard: React.FC<{
    icon: React.ElementType;
    title: string;
    value: string;
    color: string;
}> = ({ icon: Icon, title, value, color }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
        <div
            className={`w-12 h-12 rounded-full ${color} flex items-center justify-center flex-shrink-0`}
        >
            <Icon size={24} className="text-white" />
        </div>
        <div>
            <p className="text-gray-600 text-sm font-medium">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
    </div>
);

const AuditDashboard: React.FC = () => {
    const auditLogs = [
        {
            icon: FileCheck,
            text: "Verification completed for Sunita Devi (BEN-00148)",
            time: "15 Oct 2025, 10:15 AM",
        },
        {
            icon: UserPlus,
            text: "New beneficiary Ramesh Kumar (BEN-00147) self-registered.",
            time: "14 Oct 2025, 09:30 AM",
        },
        {
            icon: Banknote,
            text: "DBT of ₹25,000 transferred to Priya Sharma (BEN-00150).",
            time: "16 Sep 2025, 11:00 AM",
        },
        {
            icon: ShieldAlert,
            text: "Anomaly flagged: Multiple applications from same IP.",
            time: "13 Sep 2025, 05:20 PM",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="animate-fadeIn">
                <h1 className="text-3xl font-bold text-gray-900">
                    Audit & Transparency Dashboard
                </h1>
                <p className="text-gray-600 mt-1">
                    Ensuring every action is verifiable and immutable.
                </p>
            </div>

            {/* Public Stats Cards */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn"
                style={{ animationDelay: "100ms" }}
            >
                <AuditStatCard
                    icon={LayoutGrid}
                    title="Total Projects"
                    value="24"
                    color="bg-blue-900"
                />
                <AuditStatCard
                    icon={Banknote}
                    title="Funds Released"
                    value="₹2.4 Cr"
                    color="bg-green-600"
                />
                <AuditStatCard
                    icon={Users}
                    title="Beneficiaries Reached"
                    value="12,456"
                    color="bg-purple-600"
                />
                <AuditStatCard
                    icon={ShieldAlert}
                    title="Anomalies Flagged"
                    value="3"
                    color="bg-orange-500"
                />
            </div>

            {/* Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Immutable Audit Log */}
                <div
                    className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fadeIn"
                    style={{ animationDelay: "200ms" }}
                >
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Live Transaction Log
                    </h2>
                    <div className="relative space-y-4">
                        {auditLogs.map((log, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 pl-4"
                            >
                                {/* Dotted line for chain effect */}
                                {idx < auditLogs.length - 1 && (
                                    <div className="absolute left-8 top-12 h-full border-l-2 border-dashed border-gray-300"></div>
                                )}
                                <div className="relative z-10 w-8 h-8 mt-1 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <log.icon
                                        size={16}
                                        className="text-gray-600"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-800">
                                        {log.text}
                                    </p>
                                    <div className="flex items-center justify-between mt-1">
                                        <p className="text-xs text-gray-500">
                                            {log.time}
                                        </p>
                                        <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">
                                            <Lock size={12} />
                                            <span>Anchored</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Transparency Tools */}
                <div
                    className="space-y-6 animate-fadeIn"
                    style={{ animationDelay: "300ms" }}
                >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            Anomaly Detection Map
                        </h2>
                        <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-center p-4 border-2 border-dashed">
                            <div>
                                <MapPin
                                    size={32}
                                    className="text-gray-400 mx-auto mb-2"
                                />
                                <p className="text-sm font-medium text-gray-600">
                                    Map Visualization
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Red markers indicate potential fraud alerts
                                    for review.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            Data Integrity & Reports
                        </h2>
                        <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                            <DownloadCloud size={20} />
                            <span>Download Full Audit Report</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuditDashboard;
