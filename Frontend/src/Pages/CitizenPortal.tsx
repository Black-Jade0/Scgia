import React, { useState } from "react";
import {
    UploadCloud,
    FileText,
    Loader,
    CheckCircle,
    DollarSign,
    MapPin,
} from "lucide-react";

const CitizenPortal: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        { number: 1, title: "Self-Register" },
        { number: 2, title: "Eligibility Check" },
        { number: 3, title: "Track Status" },
    ];

    const timelineSteps = [
        {
            icon: FileText,
            title: "Application Submitted",
            status: "completed",
            date: "14 Oct 2025, 10:30 AM",
            description: "Your application has been received",
        },
        {
            icon: Loader,
            title: "Verification in Progress",
            status: "active",
            date: "In Progress",
            description: "Field officer verification pending",
        },
        {
            icon: CheckCircle,
            title: "Verification Complete",
            status: "pending",
            date: "Pending",
            description: "Awaiting completion",
        },
        {
            icon: DollarSign,
            title: "DBT Transferred",
            status: "pending",
            date: "Pending",
            description: "Direct benefit transfer",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="animate-fadeIn">
                <h1 className="text-3xl font-bold text-gray-900">
                    Citizen Portal
                </h1>
                <p className="text-gray-600 mt-1">
                    Empowering Every Beneficiary
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Registration & Application */}
                <div className="space-y-6">
                    <div
                        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fadeIn"
                        style={{ animationDelay: "100ms" }}
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-6">
                            Register & Apply for Schemes
                        </h2>

                        {/* Progress Stepper */}
                        <div className="relative mb-8 flex justify-between items-start">
                            <div
                                className="absolute top-5 left-0 w-full h-0.5 bg-gray-200"
                                aria-hidden="true"
                            >
                                <div
                                    className="absolute h-full bg-blue-900"
                                    style={{
                                        width: `${
                                            ((currentStep - 1) /
                                                (steps.length - 1)) *
                                            100
                                        }%`,
                                    }}
                                ></div>
                            </div>
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="relative flex flex-col items-center w-1/3"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all z-10 ${
                                            currentStep >= step.number
                                                ? "bg-blue-900 text-white"
                                                : "bg-gray-200 text-gray-500"
                                        }`}
                                    >
                                        {step.number}
                                    </div>
                                    <p className="text-xs font-medium text-gray-700 mt-2 text-center">
                                        {step.title}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Form Section */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Aadhaar Number{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="XXXX XXXX XXXX"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-900 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-gray-700">
                                    <UploadCloud size={20} />{" "}
                                    <span className="text-sm font-medium">
                                        Upload Caste Certificate
                                    </span>
                                </button>
                                <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-900 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-gray-700">
                                    <UploadCloud size={20} />{" "}
                                    <span className="text-sm font-medium">
                                        Upload Income Certificate
                                    </span>
                                </button>
                            </div>
                            <button
                                onClick={() => setCurrentStep(2)}
                                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl mt-4"
                            >
                                Check Eligibility & Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Application Status Tracker */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fadeIn"
                    style={{ animationDelay: "200ms" }}
                >
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                        My Application Status
                    </h2>
                    <div className="relative">
                        {timelineSteps.map((step, idx) => (
                            <div
                                key={idx}
                                className="flex gap-4 pb-8 last:pb-0 relative"
                            >
                                {idx < timelineSteps.length - 1 && (
                                    <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200"></div>
                                )}
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${
                                        step.status === "completed"
                                            ? "bg-green-500"
                                            : step.status === "active"
                                            ? "bg-blue-900 animate-pulse"
                                            : "bg-gray-200"
                                    }`}
                                >
                                    <step.icon
                                        size={20}
                                        className={
                                            step.status === "pending"
                                                ? "text-gray-500"
                                                : "text-white"
                                        }
                                    />
                                </div>
                                <div className="flex-1 pt-1">
                                    <h3
                                        className={`font-semibold mb-1 ${
                                            step.status === "pending"
                                                ? "text-gray-500"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-1">
                                        {step.description}
                                    </p>
                                    <p
                                        className={`text-xs font-medium ${
                                            step.status === "completed"
                                                ? "text-green-600"
                                                : step.status === "active"
                                                ? "text-blue-600"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        {step.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CitizenPortal;
