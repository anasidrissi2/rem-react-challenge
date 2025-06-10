import { useEffect, useState } from "react";
import { fetchSkipsByLocation } from "../api/skip.service";
import Skip from "@/api/skip.type";
import SkipPreviewer from "./SkipPreviewer";
import SkipSizeOptions from "./SkipSizeOptions";
import StepActions from "./StepActions";


function SkipSizeSelector() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  useEffect(() => {
    fetchSkipsByLocation()
      .then((response: Skip[]) => {
        setData(response);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);


  const availableSizes = Array.from(new Set(data.map((item: Skip) => item.size))).sort((a, b) => a - b);
  const selectedSkip = data.find((item: Skip) => item.size === selectedSize);


  return (
    <div className="max-w-7xl mx-auto px-4 pb-12 md:pb-32 mt-5">
      <h2 className="text-2xl font-bold text-center mb-4">Choose Your Skip Size</h2>
      <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>

      {loading && (
        <div className="flex flex-col items-center justify-center w-full py-16 max-h-24">
              <p>Loading available skip sizes ...</p>
        </div>
      )}
      {error && <div className="p-4 text-red-500 text-center">{error}</div>}

      {data.length > 0 && (
        <SkipSizeOptions
          availableSizes={availableSizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      )}

      {/* skip detailes preview */}
      <SkipPreviewer selectedSkip={selectedSkip} selectedSize={selectedSize} />

      {/* Stepper action */}
      {selectedSkip && (
        <StepActions
          message="Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost."
          item={{
            size: selectedSkip.size,
            price: selectedSkip.price_before_vat,
            hirePeriod: selectedSkip.hire_period_days,
          }}
          onBack={() => {/* handle back */}}
          onContinue={() => {/* handle continue */}}
        />
      )}

    </div>
  );
}

export default SkipSizeSelector;