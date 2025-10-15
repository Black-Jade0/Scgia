import React from "react";
import {
    Home,
    Briefcase,
    UserCircle,
    WifiOff,
    List,
    MapPin,
    Camera,
    FileText,
    CheckCircle,
    Clock,
} from "lucide-react";

const EnumeratorApp: React.FC = () => {
    const beneficiaries = [
        {
            name: "Ramesh Kumar",
            address: "Village Khedli, Ajmer",
            id: "BEN001",
        },
        { name: "Sunita Devi", address: "Gram Panchayat Beawar", id: "BEN002" },
        { name: "Mohan Lal", address: "Ward 5, Pushkar", id: "BEN003" },
    ];

    return (
        <div className="space-y-6">
            <div className="animate-fadeIn">
                <h1 className="text-3xl font-bold text-gray-900">
                    Enumerator Field App
                </h1>
                <p className="text-gray-600 mt-1">
                    Ensuring authenticity with geo-tagged, offline-first
                    verification.
                </p>
            </div>

            <div
                className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 animate-fadeIn"
                style={{ animationDelay: "100ms" }}
            >
                {/* Phone Mockup */}
                <div
                    className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl flex-shrink-0"
                    style={{ width: "375px", height: "750px" }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                    <div className="bg-gray-50 rounded-[2.5rem] h-full overflow-hidden flex flex-col">
                        <header className="bg-blue-900 p-4 pt-8 text-white">
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold">
                                    Field Verification
                                </h2>
                                <p className="text-xs opacity-80">
                                    Officer ID: ENU-245
                                </p>
                            </div>
                        </header>
                        <main className="flex-1 overflow-y-auto p-4 space-y-4">
                            <div className="bg-orange-100 border border-orange-200 rounded-xl p-3 flex items-center gap-3">
                                <WifiOff
                                    size={20}
                                    className="text-orange-600 animate-pulse"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-orange-900">
                                        Offline Mode Active
                                    </p>
                                    <p className="text-xs text-orange-700">
                                        2 verifications pending sync
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <List size={16} />
                                    Assigned (3)
                                </h3>
                                <div className="space-y-2">
                                    {beneficiaries.map((b) => (
                                        <div
                                            key={b.id}
                                            className="bg-white rounded-lg p-3 border border-gray-200"
                                        >
                                            <h4 className="font-semibold text-gray-900 text-sm">
                                                {b.name}
                                            </h4>
                                            <p className="text-xs text-gray-600">
                                                {b.address}
                                            </p>
                                            <button className="w-full mt-2 bg-blue-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-800">
                                                Verify Now
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-3">
                                    Tools
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                                        <MapPin
                                            size={24}
                                            className="text-blue-600 mx-auto mb-1"
                                        />
                                        <p className="text-xs font-semibold text-gray-800">
                                            Geo-Tag
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                                        <Camera
                                            size={24}
                                            className="text-green-600 mx-auto mb-1"
                                        />
                                        <p className="text-xs font-semibold text-gray-800">
                                            Upload Photo
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                                        <FileText
                                            size={24}
                                            className="text-purple-600 mx-auto mb-1"
                                        />
                                        <p className="text-xs font-semibold text-gray-800">
                                            Add Notes
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                                        <CheckCircle
                                            size={24}
                                            className="text-orange-600 mx-auto mb-1"
                                        />
                                        <p className="text-xs font-semibold text-gray-800">
                                            Submit
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer className="border-t border-gray-200 bg-white p-2 flex justify-around">
                            <button className="flex flex-col items-center py-2 px-4 text-blue-900">
                                <Home size={20} />
                                <span className="text-xs mt-1 font-medium">
                                    Home
                                </span>
                            </button>
                            <button className="flex flex-col items-center py-2 px-4 text-gray-400">
                                <Briefcase size={20} />
                                <span className="text-xs mt-1">Tasks</span>
                            </button>
                            <button className="flex flex-col items-center py-2 px-4 text-gray-400">
                                <UserCircle size={20} />
                                <span className="text-xs mt-1">Profile</span>
                            </button>
                        </footer>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="space-y-4 w-full lg:max-w-xs">
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle
                                    size={20}
                                    className="text-green-600"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    Verified Today
                                </p>
                                <p className="text-2xl font-bold text-green-600">
                                    12
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                <Clock size={20} className="text-orange-600" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    Pending
                                </p>
                                <p className="text-2xl font-bold text-orange-600">
                                    3
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <MapPin size={20} className="text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    GPS Accuracy
                                </p>
                                <p className="text-2xl font-bold text-blue-600">
                                    ±5m
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnumeratorApp;
