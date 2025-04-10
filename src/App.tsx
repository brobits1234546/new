import React, { useState } from 'react';
import { ImageUpload } from './components/ImageUpload';
import { DiseaseCard } from './components/DiseaseCard';
import { potatoDiseases, Disease } from './data/diseases';
import { Leaf } from 'lucide-react';

function App() {
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  const handleImageSelect = (file: File) => {
    // In a real application, this would involve actual image analysis
    // For this demo, we'll randomly select a disease
    const randomIndex = Math.floor(Math.random() * potatoDiseases.length);
    setSelectedDisease(potatoDiseases[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Potato Disease Detector
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload a photo of your potato plant to identify potential diseases and get detailed information about treatments and solutions.
          </p>
        </div>

        {/* Image Upload Section */}
        <div className="mb-12">
          <ImageUpload onImageSelect={handleImageSelect} />
        </div>

        {/* Results Section */}
        {selectedDisease && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Analysis Results
            </h2>
            <DiseaseCard disease={selectedDisease} />
          </div>
        )}

        {/* Info Section */}
        {!selectedDisease && (
          <div className="text-center text-gray-600 mt-8">
            <p>
              Currently supporting detection of: Late Blight, Early Blight, Black Scurf,
              Common Scab, and Bacterial Soft Rot
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;