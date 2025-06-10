import React from "react";
import Skip from "@/api/skip.type";

type SkipPreviewerProps = {
    selectedSkip: Skip | undefined;
    selectedSize: number | null;
};

const SkipPreviewer: React.FC<SkipPreviewerProps> = ({ selectedSkip, selectedSize }) => (
    <div className="mt-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden mb-32 lg:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-64">
            {/* Image background section - left */}
            <div
                className={`bg-cover bg-center transition-all duration-300 ${!selectedSkip ? 'grayscale blur-sm' : ''}`}
                style={{
                    backgroundImage: `url(/images/${selectedSkip ? `${selectedSize}-yarder-skip.jpg` : '4-yarder-skip.jpg'})`,
                    minHeight: '320px'
                }}
            >
                <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center p-6">
                    <h3 className="text-2xl font-bold text-white backdrop-blur-sm px-4 py-2 rounded-lg">
                        {selectedSkip ? `${selectedSize} Yard Skip` : "Select a Skip Size"}
                    </h3>
                </div>
            </div>

            {/* Details section - right */}
            <div className="p-6 bg-gray-900/5 flex flex-col">
                {selectedSkip ? (
                    <>
                        {/* Price and Hire Period in the same row */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                            <div>
                                <p className="text-gray-400 text-sm mb-2">Price</p>
                                <p className="text-3xl font-bold text-primary-blue">£{selectedSkip.price_before_vat}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-2">Hire Period</p>
                                <p className="font-medium">{selectedSkip.hire_period_days} days</p>
                            </div>
                        </div>
                        {/* Tags row */}
                        <div className="flex flex-col sm:flex-row gap-2 mt-2">
                            <div className="flex items-center">
                                <span className="text-gray-400 text-xs mr-2">Road Legal:</span>
                                <span
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                    ${selectedSkip.allowed_on_road
                                            ? 'bg-[#2A2A2A] text-lime-400'
                                            : 'bg-[#2A2A2A] text-amber-400'}
                  `}
                                >
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        {selectedSkip.allowed_on_road ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        )}
                                    </svg>
                                    {selectedSkip.allowed_on_road
                                        ? "Allowed on the road"
                                        : "Not Allowed on the road"}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-400 text-xs mr-2">Heavy Waste:</span>
                                <span
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                    ${selectedSkip.allows_heavy_waste
                                            ? 'bg-[#2A2A2A] text-lime-400'
                                            : 'bg-[#2A2A2A] text-amber-400'}
                  `}
                                >
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        {selectedSkip.allows_heavy_waste ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        )}
                                    </svg>
                                    {selectedSkip.allows_heavy_waste
                                        ? "Heavy Waste Allowed"
                                        : "Heavy Waste Not Allowed"}
                                </span>
                            </div>
                        </div>

                        {/* <div className="mt-auto pt-4 border-t border-gray-700">
                            <button className="w-full bg-primary-blue hover:bg-secondary-blue text-white py-3 rounded-lg font-medium transition-colors">
                                Book This Skip
                            </button>
                        </div> */}
                    </>
                ) : (
                    // Placeholder content when nothing is selected
                    <div className="flex flex-col items-center justify-center h-full min-h-[320px]">
                        <div className="w-16 h-16 rounded-full bg-primary-blue/10 flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-primary-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
                            </svg>
                        </div>
                        <p className="text-lg text-primary-blue font-semibold mb-2">No Skip Size Selected</p>
                        <p className="text-gray-400 text-center mb-4">Please select a skip size to see details and pricing.</p>
                        <div className="flex flex-col sm:flex-row gap-2 opacity-60">
                            <div className="flex items-center">
                                <span className="text-gray-400 text-xs mr-2">Road Legal:</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#2A2A2A] text-gray-500">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Not specified
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-400 text-xs mr-2">Heavy Waste:</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#2A2A2A] text-gray-500">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Not specified
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default SkipPreviewer;
