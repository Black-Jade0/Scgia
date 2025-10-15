import React from "react";

// Define types for the props
interface StatCardProps {
    icon: React.ElementType;
    title: string;
    value: string;
    change: string;
    color: string;
    delay: number;
}

const StatCard: React.FC<StatCardProps> = ({
    icon: Icon,
    title,
    value,
    change,
    color,
    delay,
}) => (
    <div
        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn border border-gray-100"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div
            className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}
        >
            <Icon size={24} className="text-white" />
        </div>
        <div className="flex items-end justify-between">
            <div>
                <p className="text-gray-600 text-sm mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
            </div>
            <span
                className={`text-sm font-semibold ${
                    change.startsWith("+")
                        ? "text-green-600"
                        : "text-orange-600"
                }`}
            >
                {change}
            </span>
        </div>
    </div>
);

export default StatCard;
