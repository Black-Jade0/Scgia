import React from "react";
import SchemeCard, { type Scheme } from "../Components/SchemeCard";
import { CheckCircle } from "lucide-react";

const EligibilityEngine: React.FC = () => {
    // Use the imported Scheme type for our data array
    const schemes: Scheme[] = [
        {
            name: "Income Generation Scheme",
            category: "Economic Empowerment",
            status: "active",
            rules: ["Caste = SC", "Income < ₹1,00,000", "Age 18-45"],
            eligible: "3,247",
            approved: "2,891",
        },
        {
            name: "Skill Development Program",
            category: "Education & Training",
            status: "active",
            rules: ["Caste = SC", "Age 18-35", "Not enrolled in other schemes"],
            eligible: "2,156",
            approved: "1,987",
        },
        {
            name: "Infrastructure Support",
            category: "Housing & Basic Needs",
            status: "active",
            rules: ["BPL Status = Yes", "Property ownership = No"],
            eligible: "1,892",
            approved: "1,654",
        },
        {
            name: "Healthcare Subsidy",
            category: "Health & Wellness",
            status: "draft",
            rules: ["Caste = SC", "Annual income < ₹2,00,000"],
            eligible: "4,523",
            approved: "0",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Smart Eligibility Engine
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Policy-as-Code: Automated, Transparent, Bias-Free
                    </p>
                </div>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
                    <span>Create New Rule</span>
                </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-900">
                    <strong>How it works:</strong> Define eligibility criteria
                    using visual rule blocks. The engine automatically filters
                    beneficiaries and updates in real-time.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {schemes.map((scheme, idx) => (
                    <SchemeCard key={idx} scheme={scheme} delay={idx * 100} />
                ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Results Preview
                </h3>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 text-center border-2 border-dashed border-green-200">
                    <CheckCircle
                        size={48}
                        className="text-green-600 mx-auto mb-3"
                    />
                    <p className="text-gray-700 font-semibold text-lg mb-2">
                        11,818 Total Eligible Beneficiaries
                    </p>
                    <p className="text-sm text-gray-600">
                        Across all active schemes
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EligibilityEngine;
