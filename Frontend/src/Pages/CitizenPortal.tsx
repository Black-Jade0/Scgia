import React, { useState } from "react";
import {
    UploadCloud,
    Loader,
    CheckCircle,
    DollarSign,
    FileText,
    MapPin,
} from "lucide-react";

const CitizenPortal: React.FC = () => {
    // const [currentStep, setCurrentStep] = useState(1);

    const timelineSteps = [
        {
            icon: FileText,
            title: "Application Submitted",
            status: "completed",
            date: "14 Oct 2025",
        },
        {
            icon: Loader,
            title: "Verification in Progress",
            status: "active",
            date: "In Progress",
        },
        {
            icon: CheckCircle,
            title: "Verification Complete",
            status: "pending",
            date: "Pending",
        },
        {
            icon: DollarSign,
            title: "DBT Transferred",
            status: "pending",
            date: "Pending",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <style>{`
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideInRight {
                  from { opacity: 0; transform: translateX(30px); }
                  to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInLeft {
                  from { opacity: 0; transform: translateX(-30px); }
                  to { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeIn {
                  animation: fadeIn 0.6s ease-out forwards;
                }
                .animate-slideInRight {
                  animation: slideInRight 0.7s ease-out forwards;
                }
                .animate-slideInLeft {
                  animation: slideInLeft 0.7s ease-out forwards;
                }
                .card-shadow {
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                }
                .header-wave {
                    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
                    clip-path: ellipse(90% 100% at 50% 0%);
                }
            `}</style>

            {/* Header Section */}
            <div className="header-wave text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                                <span className="text-3xl font-bold text-blue-700">
                                    PM
                                </span>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight">
                                    PM-AJAY Connect
                                </h1>
                                <p className="text-blue-100 text-lg mt-1">
                                    Pradhan Mantri Anusuchit Jati Abhyuday
                                    Yojana
                                </p>
                            </div>
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="text-sm text-blue-100">
                                Portal for SC Development
                            </p>
                            <p className="text-xs text-blue-200 mt-1">
                                Ministry of Social Justice & Empowerment
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-8 pb-12">
                {/* Info Banner */}
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg mb-8 animate-fadeIn">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">
                                !
                            </span>
                        </div>
                        <div>
                            <p className="text-orange-900 font-semibold">
                                Important Notice
                            </p>
                            <p className="text-orange-800 text-sm mt-1">
                                Please keep your Aadhaar, Caste Certificate, and
                                Income Certificate ready for quick application
                                processing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Quick Stats */}
                    {/* <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                        <div className="bg-blue-600 text-white rounded-xl p-6 card-shadow animate-slideInLeft">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-blue-100 text-sm font-medium">
                                        Total Applications
                                    </p>
                                    <p className="text-3xl font-bold mt-2">
                                        2,847
                                    </p>
                                </div>
                                <FileText size={40} className="opacity-80" />
                            </div>
                        </div>
                        <div
                            className="bg-green-600 text-white rounded-xl p-6 card-shadow animate-slideInLeft"
                            style={{ animationDelay: "100ms" }}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-green-100 text-sm font-medium">
                                        Approved
                                    </p>
                                    <p className="text-3xl font-bold mt-2">
                                        1,923
                                    </p>
                                </div>
                                <CheckCircle size={40} className="opacity-80" />
                            </div>
                        </div>
                        <div
                            className="bg-orange-600 text-white rounded-xl p-6 card-shadow animate-slideInLeft"
                            style={{ animationDelay: "200ms" }}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-orange-100 text-sm font-medium">
                                        Funds Disbursed
                                    </p>
                                    <p className="text-3xl font-bold mt-2">
                                        ₹18.4 Cr
                                    </p>
                                </div>
                                <DollarSign size={40} className="opacity-80" />
                            </div>
                        </div>
                    </div> */}

                    {/* Left Column - Register & Apply */}
                    <div
                        className="lg:col-span-2 bg-white rounded-xl p-8 card-shadow animate-slideInLeft"
                        style={{ animationDelay: "300ms" }}
                    >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <FileText size={22} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                New Benefit Application
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Full Name{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name as per Aadhaar"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="aadhaar"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Aadhaar Number{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="aadhaar"
                                        type="text"
                                        placeholder="xxxx-xxxx-xxxx"
                                        maxLength={12}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="mobile"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Mobile Number{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="mobile"
                                        type="tel"
                                        placeholder="+91 xxxxx xxxxx"
                                        maxLength={10}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="address"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Residential Address{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="address"
                                    rows={3}
                                    placeholder="Enter complete address with village/city, district, state, pincode"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800 resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="scheme"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Select Scheme{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="scheme"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
                                    >
                                        <option value="">
                                            Choose a scheme
                                        </option>
                                        <option value="gia-income">
                                            GIA - Income Generation
                                        </option>
                                        <option value="gia-skill">
                                            GIA - Skill Development
                                        </option>
                                        <option value="gia-infra">
                                            GIA - Infrastructure
                                        </option>
                                        <option value="scholarship">
                                            Scholarship Program
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Category{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="category"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
                                    >
                                        <option value="">
                                            Select category
                                        </option>
                                        <option value="sc">
                                            Scheduled Caste (SC)
                                        </option>
                                        <option value="bpl">
                                            Below Poverty Line
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
                                <p className="text-sm font-semibold text-gray-700 mb-3">
                                    Required Documents
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button className="px-4 py-3 border-2 border-blue-300 text-blue-700 bg-white rounded-lg flex items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50 transition-all">
                                        <UploadCloud size={20} />
                                        <span className="font-medium text-sm">
                                            Caste Certificate
                                        </span>
                                    </button>
                                    <button className="px-4 py-3 border-2 border-blue-300 text-blue-700 bg-white rounded-lg flex items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50 transition-all">
                                        <UploadCloud size={20} />
                                        <span className="font-medium text-sm">
                                            Income Certificate
                                        </span>
                                    </button>
                                    <button className="px-4 py-3 border-2 border-blue-300 text-blue-700 bg-white rounded-lg flex items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50 transition-all">
                                        <UploadCloud size={20} />
                                        <span className="font-medium text-sm">
                                            Bank Passbook
                                        </span>
                                    </button>
                                    <button className="px-4 py-3 border-2 border-blue-300 text-blue-700 bg-white rounded-lg flex items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50 transition-all">
                                        <UploadCloud size={20} />
                                        <span className="font-medium text-sm">
                                            Aadhaar Card
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                                <input
                                    type="checkbox"
                                    id="declaration"
                                    className="mt-1 w-4 h-4 text-blue-600 rounded"
                                />
                                <label
                                    htmlFor="declaration"
                                    className="text-sm text-gray-700"
                                >
                                    I hereby declare that all information
                                    provided is true and accurate to the best of
                                    my knowledge. I understand that false
                                    information may lead to rejection of my
                                    application.
                                </label>
                            </div>

                            <button className="w-full bg-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
                                <CheckCircle size={22} />
                                Check Eligibility & Submit Application
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Application Status Tracker */}
                    <div
                        className="bg-white rounded-xl p-8 card-shadow animate-slideInRight"
                        style={{ animationDelay: "400ms" }}
                    >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-100">
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                <Loader size={22} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Track Application
                            </h2>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                                <div className="flex-1">
                                    <p className="text-xs text-gray-600 font-medium">
                                        Application ID
                                    </p>
                                    <p className="text-lg font-bold text-blue-700">
                                        PMAJAY-2025-001247
                                    </p>
                                </div>
                                <div className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                                    Active
                                </div>
                            </div>
                        </div>

                        <div className="relative pl-1">
                            {timelineSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-5 pb-8 last:pb-0 relative"
                                >
                                    {idx < timelineSteps.length - 1 && (
                                        <div className="absolute left-5 top-12 w-0.5 h-full bg-gray-200"></div>
                                    )}
                                    <div
                                        className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all
                                        ${
                                            step.status === "completed"
                                                ? "bg-green-500"
                                                : step.status === "active"
                                                ? "bg-blue-600 ring-4 ring-blue-100"
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
                                    <div className="flex-1 pt-0.5">
                                        <h3
                                            className={`font-bold text-base mb-1 ${
                                                step.status === "pending"
                                                    ? "text-gray-400"
                                                    : "text-gray-900"
                                            }`}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            className={`text-sm font-medium ${
                                                step.status === "completed"
                                                    ? "text-green-600"
                                                    : step.status === "active"
                                                    ? "text-blue-600"
                                                    : "text-gray-400"
                                            }`}
                                        >
                                            {step.date}
                                        </p>
                                        {step.status === "active" && (
                                            <p className="text-xs text-gray-600 mt-2 bg-blue-50 p-2 rounded">
                                                Your documents are being
                                                verified by field officers.
                                                Expected completion in 2-3 days.
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t-2 border-gray-100">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <MapPin
                                        size={20}
                                        className="text-gray-600 mt-0.5 flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900">
                                            Verification Location
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Verified by Enumerator at Rajgarh,
                                            District Office on 14 Oct 2025
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-6 bg-white border-2 border-blue-600 text-blue-700 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                            <FileText size={18} />
                            Download Application Receipt
                        </button>
                    </div>
                </div>

                {/* Help Section */}
                <div
                    className="mt-8 bg-blue-600 text-white rounded-xl p-8 card-shadow animate-fadeIn"
                    style={{ animationDelay: "500ms" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-2">
                                Need Help?
                            </h3>
                            <p className="text-blue-100 text-sm">
                                Contact our helpdesk for assistance with your
                                application
                            </p>
                            <p className="text-white font-semibold mt-3">
                                📞 1800-XXX-XXXX
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">
                                Email Support
                            </h3>
                            <p className="text-blue-100 text-sm">
                                Send us your queries and we'll respond within 24
                                hours
                            </p>
                            <p className="text-white font-semibold mt-3">
                                ✉️ support@pmajay.gov.in
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">
                                Office Hours
                            </h3>
                            <p className="text-blue-100 text-sm">
                                Monday to Friday: 9:00 AM - 6:00 PM
                            </p>
                            <p className="text-white font-semibold mt-3">
                                🕒 Saturday: 9:00 AM - 1:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CitizenPortal;
