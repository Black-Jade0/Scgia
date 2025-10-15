import React from "react";

// Define the shape of a single scheme object
export interface Scheme {
    name: string;
    category: string;
    status: "active" | "draft";
    rules: string[];
    eligible: string;
    approved: string;
}

// Define the props for the component
interface SchemeCardProps {
    scheme: Scheme;
    delay: number;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, delay }) => (
    <div
        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 animate-fadeIn"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="flex items-start justify-between mb-4">
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {scheme.name}
                </h3>
                <p className="text-sm text-gray-600">{scheme.category}</p>
            </div>
            <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    scheme.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                }`}
            >
                {scheme.status === "active" ? "Active" : "Draft"}
            </span>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-xs font-semibold text-gray-700 mb-3">
                Eligibility Rules
            </p>
            <div className="space-y-2">
                {scheme.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            IF
                        </div>
                        <span className="text-gray-700">{rule}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex items-center justify-between mb-4">
            <div>
                <p className="text-2xl font-bold text-gray-900">
                    {scheme.eligible}
                </p>
                <p className="text-xs text-gray-600">Eligible Beneficiaries</p>
            </div>
            <div className="text-right">
                <p className="text-lg font-semibold text-green-600">
                    {scheme.approved}
                </p>
                <p className="text-xs text-gray-600">Approved</p>
            </div>
        </div>
        <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
            View Eligible Beneficiaries
        </button>
    </div>
);

export default SchemeCard;
