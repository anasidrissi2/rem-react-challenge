import React from "react";

type StepActionsProps = {
    message: string;
    item: {
        size: number;
        price: number;
        hirePeriod: number;
    };
    onBack: () => void;
    onContinue: () => void;
};

const StepActions: React.FC<StepActionsProps> = ({ message, item, onBack, onContinue }) => (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 border backdrop-blur-md border-primary-blue p-4 transition-all duration-500 z-50 m-2 rounded-lg">
        <div className="max-w-7xl mx-auto">
            <div className="mb-3 text-xs text-gray-400 text-center leading-snug">
                {message}
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">{item.size} Yard Skip</h3>
                    <div>
                        <span className="text-xl font-bold text-primary-blue">£{item.price}</span>
                        <span className="text-sm text-gray-400 ml-2">{item.hirePeriod} days</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button className="btn-secondary w-full" onClick={onBack}>Back</button>
                    <button className="btn-primary w-full" onClick={onContinue}>Continue</button>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div>
                        <p className="text-sm text-gray-400">{item.size} Yard Skip</p>
                    </div>
                    <div>
                        <span className="text-2xl font-bold text-primary-blue">£{item.price}</span>
                        <span className="text-sm text-gray-400 ml-2">{item.hirePeriod} day hire</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="btn-secondary" onClick={onBack}>Back</button>
                    <button className="btn-primary flex items-center gap-2" onClick={onContinue}>
                        Continue
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default StepActions;
