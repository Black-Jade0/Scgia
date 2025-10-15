import React, { useState } from "react";
import {
    Home,
    Briefcase,
    UserCircle,
    WifiOff,
    MapPin,
    Camera,
    FileText,
    CheckCircle,
    Clock,
    Upload,
    ChevronRight,
    X,
} from "lucide-react";

const EnumeratorApp: React.FC = () => {
    const [selectedBeneficiary, setSelectedBeneficiary] = useState<string | null>(null);

    const beneficiaries = [
        { name: "Ramesh Kumar", address: "Village Khedli, Ajmer", id: "BEN001", scheme: "GIA - Skill Development", status: "pending" },
        { name: "Sunita Devi", address: "Gram Panchayat Beawar", id: "BEN002", scheme: "GIA - Income Generation", status: "pending" },
        { name: "Mohan Lal", address: "Ward 5, Pushkar", id: "BEN003", scheme: "Scholarship Program", status: "verified" },
        { name: "Geeta Sharma", address: "Village Saradhna, Ajmer", id: "BEN004", scheme: "GIA - Infrastructure", status: "pending" },
    ];

    const handleVerifyClick = (id: string) => {
        setSelectedBeneficiary(id);
    };

    const closeVerification = () => {
        setSelectedBeneficiary(null);
    };

    return (
        <div className="min-h-screen ">
            <style>{`
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideUp {
                  from { opacity: 0; transform: translateY(100%); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
                .animate-slideUp { animation: slideUp 0.4s ease-out forwards; }
                .card-shadow { box-shadow: 0 8px 30px rgba(0, 70, 255, 0.08); }
                .header-wave {
                  background-color: #0046FF;
                  clip-path: ellipse(80% 100% at 50% 0%);
                }
            `}</style>

            {/* Header Section */}
            <div className="header-wave text-white py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-2xl font-bold text-[#0046FF]">E</span>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight">Field Enumerator App</h1>
                                <p className="text-blue-100 text-sm mt-1">Offline-First Verification System</p>
                            </div>
                        </div>
                        <div className="hidden md:block text-right">
                            <p className="text-sm">Enumerator ID: ENU-2025-047</p>
                            <p className="text-xs text-blue-200 mt-1">Ajmer District</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-8 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Mobile App Preview */}
                    <div className="lg:col-span-1 flex justify-center animate-fadeIn" style={{ animationDelay: "100ms" }}>
                        <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl" style={{ width: "340px", height: "680px" }}>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                            <div className="bg-white rounded-[2.5rem] h-full overflow-hidden flex flex-col">
                                <div className="bg-[#0046FF] p-4 pt-8 text-white flex items-center justify-between">
                                    <h2 className="font-bold text-lg">Verification Tasks</h2>
                                    <UserCircle size={28} />
                                </div>
                                <div className="bg-[#FF9013]/10 border-b-2 border-[#FF9013]/30 p-3 flex items-center gap-2">
                                    <WifiOff size={18} className="text-[#FF9013] animate-pulse" />
                                    <div>
                                        <p className="text-xs font-bold text-[#FF9013]">Offline Mode</p>
                                        <p className="text-xs text-orange-800">2 verifications pending sync</p>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
                                    <h3 className="text-xs font-bold text-gray-500 px-1 uppercase tracking-wider">Assigned Beneficiaries</h3>
                                    {beneficiaries.map((b) => (
                                        <div key={b.id} className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-gray-900 text-sm">{b.name}</h4>
                                                {b.status === "verified" ? <CheckCircle size={16} className="text-[#73C8D2]" /> : <Clock size={16} className="text-[#FF9013]" />}
                                            </div>
                                            <p className="text-xs text-gray-600 mb-2">{b.address}</p>
                                            {b.status === "pending" ? (
                                                <button onClick={() => handleVerifyClick(b.id)} className="w-full bg-[#0046FF] text-white py-2 rounded-md text-xs font-bold hover:bg-blue-800 transition-all">Verify Now</button>
                                            ) : (
                                                <div className="w-full bg-teal-50 text-[#73C8D2] py-2 rounded-md text-xs font-bold text-center">✓ Verified</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t bg-white p-2 flex justify-around">
                                    <button className="p-2 text-[#0046FF]"><Home size={24} /></button>
                                    <button className="p-2 text-gray-400"><Briefcase size={24} /></button>
                                    <button className="p-2 text-gray-400"><UserCircle size={24} /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop View - Right Column */}
                    <div className="lg:col-span-2 space-y-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
                        {/* Action Center Card */}
                        <div className="bg-white rounded-2xl p-6 card-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Action Center</h3>
                                <button className="px-4 py-2 bg-[#0046FF] text-white rounded-lg text-sm font-semibold hover:bg-blue-800 transition-all flex items-center gap-2">
                                    <Upload size={16} /> Sync Now
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-[#73C8D2]">
                                    <p className="text-sm text-gray-600">Synced Today</p><p className="text-2xl font-bold text-[#73C8D2]">6</p>
                                </div>
                                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-[#FF9013]">
                                    <p className="text-sm text-gray-600">Pending Sync</p><p className="text-2xl font-bold text-[#FF9013]">2</p>
                                </div>
                            </div>
                            <hr className="my-6"/>
                            <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button className="bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#0046FF] rounded-lg p-4 transition-all text-center">
                                    <Camera size={24} className="mx-auto mb-2" />
                                    <p className="font-semibold text-sm">Take Photo</p>
                                </button>
                                <button className="bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#0046FF] rounded-lg p-4 transition-all text-center">
                                    <MapPin size={24} className="mx-auto mb-2" />
                                    <p className="font-semibold text-sm">Geo-Tag</p>
                                </button>
                                <button className="bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#0046FF] rounded-lg p-4 transition-all text-center">
                                    <FileText size={24} className="mx-auto mb-2" />
                                    <p className="font-semibold text-sm">Add Notes</p>
                                </button>
                            </div>
                        </div>
                        
                        {/* Beneficiary List */}
                        <div className="bg-white rounded-2xl p-6 card-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Beneficiary List</h3>
                            <div className="space-y-3">
                                {beneficiaries.map((b) => (
                                    <div key={b.id} onClick={() => b.status === 'pending' && handleVerifyClick(b.id)} className="border rounded-lg p-4 flex items-center justify-between hover:border-[#0046FF] transition-all cursor-pointer">
                                        <div>
                                            <h4 className="font-bold text-gray-900">{b.name}</h4>
                                            <p className="text-sm text-gray-600">{b.address}</p>
                                        </div>
                                        {b.status === 'pending' ? <span className="px-3 py-1 bg-[#FF9013]/10 text-[#FF9013] text-xs font-bold rounded-full">Pending</span> : <span className="px-3 py-1 bg-[#73C8D2]/20 text-[#73C8D2] text-xs font-bold rounded-full">Verified</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Verification Modal */}
            {selectedBeneficiary && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slideUp card-shadow">
                        <div className="sticky top-0 bg-[#0046FF] text-white p-5 flex items-center justify-between rounded-t-2xl">
                            <h3 className="text-lg font-bold">Verification for {selectedBeneficiary}</h3>
                            <button onClick={closeVerification} className="text-white hover:bg-white/20 p-2 rounded-full"><X size={20} /></button>
                        </div>
                        <div className="p-6 space-y-4">
                           <button className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 border">
                                <div className="flex items-center gap-3"><Camera className="text-[#0046FF]" /><div><p className="font-semibold">Capture Documents</p><p className="text-xs text-gray-500">Aadhaar, Caste Certificate</p></div></div><ChevronRight/>
                           </button>
                           <button className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 border">
                                <div className="flex items-center gap-3"><MapPin className="text-[#0046FF]" /><div><p className="font-semibold">Geo-Tag Location</p><p className="text-xs text-gray-500">Record GPS coordinates</p></div></div><ChevronRight/>
                           </button>
                           <button className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 border">
                                <div className="flex items-center gap-3"><UserCircle className="text-[#0046FF]" /><div><p className="font-semibold">Take Beneficiary Photo</p><p className="text-xs text-gray-500">Live photo required</p></div></div><ChevronRight/>
                           </button>
                           <div className="flex gap-3 pt-4">
                               <button onClick={closeVerification} className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50">Cancel</button>
                               <button onClick={closeVerification} className="flex-1 py-3 bg-[#73C8D2] text-white rounded-lg font-semibold hover:bg-teal-600">Complete & Sync</button>
                           </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EnumeratorApp;

