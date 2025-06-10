import React from "react";

type SkipSizeOptionsProps = {
  availableSizes: number[];
  selectedSize: number | null;
  setSelectedSize: (size: number) => void;
};

const SkipSizeOptions: React.FC<SkipSizeOptionsProps> = ({
  availableSizes,
  selectedSize,
  setSelectedSize,
}) => {
  if (!availableSizes.length) return null;

  // Mobile and desktop use similar logic, just different wrappers
  return (
    <>
      {/* Mobile Number Slider Selector */}
      <div className="md:hidden w-full py-6">
        <div className="relative">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x snap-mandatory">
            {availableSizes.map((size) => {
              const baseSize = 1.5;
              const sizeMultiplier = size / Math.max(...availableSizes);
              const buttonSize = `${baseSize + sizeMultiplier * 2}rem`;
              return (
                <div key={size} className="snap-center flex-shrink-0">
                  <button
                    onClick={() => setSelectedSize(size)}
                    className={`flex flex-col items-center justify-center rounded-full transition-all duration-300 border-2
                      ${selectedSize === size
                        ? 'border-primary-blue bg-primary-blue bg-opacity-20 scale-105'
                        : 'border-gray-700 hover:border-gray-600'}
                    `}
                    style={{
                      width: buttonSize,
                      height: buttonSize,
                      minWidth: buttonSize,
                    }}
                  >
                    <span className="text-sm">{size}</span>
                  </button>
                  <span className="text-xs text-center justify-center w-full flex mt-2">yard</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Desktop Horizontal Selector */}
      <div className="hidden md:flex w-full justify-center gap-4 py-2 items-center cursor-pointer min-h-24">
        {availableSizes.map((size) => {
          const baseSize = 3.5;
          const sizeMultiplier = size / 100;
          const itemSize = `${baseSize + sizeMultiplier * 5}rem`;
          return (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`flex-1 max-w-xs py-6 px-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center hover:scale-105
                ${selectedSize === size
                  ? 'border-primary-blue bg-primary-blue bg-opacity-20 scale-105'
                  : 'border-gray-700 hover:border-gray-600'}
              `}
              style={{
                height: itemSize,
                minHeight: baseSize,
              }}
            >
              <span className={`text-md font-bold ${selectedSize === size ? 'text-primary-blue' : 'text-gray-300'}`}>
                {size} <small className="font-semibold">yard</small>
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SkipSizeOptions;
