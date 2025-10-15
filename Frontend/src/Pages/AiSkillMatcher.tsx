import React, { useState, useEffect } from "react";
import {
    UserCircle,
    Award,
    Briefcase,
    Banknote,
    MapPin,
    Clock,
    CheckCircle,
    TrendingUp,
    Building2,
} from "lucide-react";

interface SkillTraining {
    type: "training";
    programName: string;
    location: string;
    stipend: string;
    duration: string;
    matchScore: number;
}

interface JobOpening {
    type: "job";
    jobTitle: string;
    company: string;
    location: string;
    salary: string;
    matchScore: number;
}

interface MicroGrant {
    type: "grant";
    schemeName: string;
    grantAmount: string;
    description: string;
    eligibilityVerified: boolean;
}

type Opportunity = SkillTraining | JobOpening | MicroGrant;

/**
 * Progress Bar Component for Match Scores
 */
const MatchScoreBar: React.FC<{ score: number; delay?: number }> = ({
    score,
    delay = 0,
}) => {
    const [animatedScore, setAnimatedScore] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedScore(score);
        }, delay);
        return () => clearTimeout(timer);
    }, [score, delay]);

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-900">
                    AI Match Score
                </span>
                <span className="text-lg font-bold text-blue-900">
                    {score}%
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                    className="bg-gradient-to-r from-blue-900 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${animatedScore}%` }}
                ></div>
            </div>
        </div>
    );
};

/**
 * Skill Training Card Component
 */
const SkillTrainingCard: React.FC<{
    training: SkillTraining;
    delay: number;
}> = ({ training, delay }) => (
    <div
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeIn"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-indigo-600 rounded-full flex items-center justify-center">
                <Award size={24} className="text-white" />
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                Training Program
            </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
            {training.programName}
        </h3>

        <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-gray-400" />
                <span>{training.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Banknote size={16} className="text-gray-400" />
                <span className="font-semibold text-green-600">
                    Stipend: {training.stipend}
                </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock size={16} className="text-gray-400" />
                <span>{training.duration}</span>
            </div>
        </div>

        <MatchScoreBar score={training.matchScore} delay={delay + 300} />

        <button className="w-full mt-4 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            Apply Now
        </button>
    </div>
);

/**
 * Job Opening Card Component
 */
const JobOpeningCard: React.FC<{ job: JobOpening; delay: number }> = ({
    job,
    delay,
}) => (
    <div
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeIn"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center">
                <Briefcase size={24} className="text-white" />
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                Job Opening
            </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.jobTitle}</h3>

        <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Building2 size={16} className="text-gray-400" />
                <span>{job.company}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-gray-400" />
                <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp size={16} className="text-gray-400" />
                <span className="font-semibold text-green-600">
                    {job.salary}
                </span>
            </div>
        </div>

        <MatchScoreBar score={job.matchScore} delay={delay + 300} />

        <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            View & Apply
        </button>
    </div>
);

/**
 * Micro-Grant Card Component
 */
const MicroGrantCard: React.FC<{ grant: MicroGrant; delay: number }> = ({
    grant,
    delay,
}) => (
    <div
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeIn"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <Banknote size={24} className="text-white" />
            </div>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                Micro-Grant
            </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
            {grant.schemeName}
        </h3>

        <div className="space-y-2 mb-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm text-gray-700">{grant.description}</p>
                <p className="text-2xl font-bold text-green-700 mt-2">
                    {grant.grantAmount}
                </p>
            </div>
        </div>

        {grant.eligibilityVerified && (
            <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2 mb-4">
                <CheckCircle size={20} />
                <span className="font-semibold text-sm">
                    Eligibility Pre-Verified ✓
                </span>
            </div>
        )}

        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Start Application
        </button>
    </div>
);

/**
 * AI Skill Matcher Page Component
 * Showcases personalized skill training, job, and grant recommendations
 */
const AiSkillMatcher: React.FC = () => {
    const beneficiaryProfile = {
        name: "Sunita Devi",
        id: "BEN-2025-00148",
        skills: ["Basic Computers", "Tailoring", "Communication"],
        location: "Ajmer, Rajasthan",
    };

    const opportunities: Opportunity[] = [
        {
            type: "training",
            programName: "Advanced Tailoring & Design",
            location: "Ajmer Training Center",
            stipend: "₹5,000/month",
            duration: "3 months",
            matchScore: 92,
        },
        {
            type: "job",
            jobTitle: "Machine Operator",
            company: "Rajasthan Textiles Ltd.",
            location: "Ajmer Industrial Area",
            salary: "₹12,000 - ₹15,000/month",
            matchScore: 85,
        },
        {
            type: "grant",
            schemeName: "Mudra Yojana - Tarun",
            grantAmount: "₹5,00,000",
            description:
                "Start your own tailoring business with equipment support",
            eligibilityVerified: true,
        },
        {
            type: "training",
            programName: "Digital Marketing Basics",
            location: "Online + Ajmer Hub",
            stipend: "₹3,000/month",
            duration: "2 months",
            matchScore: 78,
        },
        {
            type: "job",
            jobTitle: "Boutique Assistant",
            company: "Fashion House Jaipur",
            location: "Jaipur (30 km from Ajmer)",
            salary: "₹10,000 - ₹12,000/month",
            matchScore: 88,
        },
        {
            type: "grant",
            schemeName: "PM SVANidhi Scheme",
            grantAmount: "₹10,000",
            description:
                "Working capital for street vendors and small businesses",
            eligibilityVerified: true,
        },
    ];

    return (
        <div className="space-y-6">
            <div className="animate-fadeIn">
                <h1 className="text-3xl font-bold text-gray-900">
                    AI-Driven Skill & Livelihood Matchmaker
                </h1>
                <p className="text-gray-600 mt-1">
                    Converting data into empowerment
                </p>
            </div>

            {/* Beneficiary Profile Card */}
            <div
                className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 shadow-lg animate-fadeIn"
                style={{ animationDelay: "100ms" }}
            >
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <UserCircle size={40} className="text-blue-900" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-white">
                            {beneficiaryProfile.name}
                        </h2>
                        <p className="text-blue-200 text-sm mt-1">
                            ID: {beneficiaryProfile.id} •{" "}
                            {beneficiaryProfile.location}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-sm text-blue-200 font-medium">
                                Skills:
                            </span>
                            {beneficiaryProfile.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Banner */}
            <div
                className="bg-blue-50 border border-blue-200 rounded-xl p-4 animate-fadeIn"
                style={{ animationDelay: "200ms" }}
            >
                <p className="text-sm text-blue-900">
                    <strong>Smart Recommendations:</strong> Our AI analyzes your
                    skills, location, and preferences to suggest the best
                    opportunities for growth and income.
                </p>
            </div>

            {/* Main Section: Recommended Opportunities */}
            <div className="animate-fadeIn" style={{ animationDelay: "300ms" }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Based on your profile, here are some recommended
                    opportunities:
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {opportunities.map((opportunity, idx) => {
                        const delay = 400 + idx * 100;
                        if (opportunity.type === "training") {
                            return (
                                <SkillTrainingCard
                                    key={idx}
                                    training={opportunity}
                                    delay={delay}
                                />
                            );
                        } else if (opportunity.type === "job") {
                            return (
                                <JobOpeningCard
                                    key={idx}
                                    job={opportunity}
                                    delay={delay}
                                />
                            );
                        } else {
                            return (
                                <MicroGrantCard
                                    key={idx}
                                    grant={opportunity}
                                    delay={delay}
                                />
                            );
                        }
                    })}
                </div>
            </div>

            {/* Stats Section */}
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn"
                style={{ animationDelay: "1000ms" }}
            >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Award size={24} className="text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                Training Programs
                            </p>
                            <p className="text-2xl font-bold text-blue-600">
                                {
                                    opportunities.filter(
                                        (o) => o.type === "training"
                                    ).length
                                }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Briefcase size={24} className="text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                Job Openings
                            </p>
                            <p className="text-2xl font-bold text-green-600">
                                {
                                    opportunities.filter(
                                        (o) => o.type === "job"
                                    ).length
                                }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <Banknote size={24} className="text-orange-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                Micro-Grants
                            </p>
                            <p className="text-2xl font-bold text-orange-600">
                                {
                                    opportunities.filter(
                                        (o) => o.type === "grant"
                                    ).length
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div
                className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-center shadow-lg animate-fadeIn"
                style={{ animationDelay: "1200ms" }}
            >
                <h3 className="text-2xl font-bold text-white mb-2">
                    Need Help Choosing?
                </h3>
                <p className="text-white/90 mb-4">
                    Connect with our livelihood counselor for personalized
                    guidance
                </p>
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Talk to a Counselor
                </button>
            </div>
        </div>
    );
};

export default AiSkillMatcher;
