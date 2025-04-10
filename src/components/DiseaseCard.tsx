import React from 'react';
import { Disease } from '../data/diseases';
import { CheckCircle } from 'lucide-react';

interface DiseaseCardProps {
  disease: Disease;
}

export function DiseaseCard({ disease }: DiseaseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={disease.imageUrl}
        alt={disease.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {disease.name}
        </h3>
        <p className="text-gray-600 mb-4">{disease.description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Symptoms:</h4>
          <ul className="space-y-1">
            {disease.symptoms.map((symptom, index) => (
              <li key={index} className="flex items-start text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Solutions:</h4>
          <ul className="space-y-1">
            {disease.solutions.map((solution, index) => (
              <li key={index} className="flex items-start text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}