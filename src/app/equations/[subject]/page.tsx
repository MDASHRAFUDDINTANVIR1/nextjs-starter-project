'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Sample equations data for different subjects
const equationsData = {
  physics: [
    {
      id: 1,
      title: "Newton's Second Law",
      equation: "F = ma",
      explanation: "The force F acting on an object is equal to the mass m of the object multiplied by its acceleration a.",
      example: "A 2kg object accelerating at 5 m/s² experiences a force of 10N (2 × 5 = 10)."
    },
    {
      id: 2,
      title: "Kinetic Energy",
      equation: "KE = ½mv²",
      explanation: "The kinetic energy of an object is equal to half its mass multiplied by its velocity squared.",
      example: "A 1kg ball moving at 2 m/s has kinetic energy of 2J (½ × 1 × 2² = 2)."
    }
  ],
  chemistry: [
    {
      id: 1,
      title: "Ideal Gas Law",
      equation: "PV = nRT",
      explanation: "Relates pressure (P), volume (V), number of moles (n), and temperature (T) of an ideal gas, where R is the gas constant.",
      example: "At 1 atm pressure, 1 mole of gas at 273K occupies 22.4L volume."
    }
  ],
  math: [
    {
      id: 1,
      title: "Quadratic Formula",
      equation: "x = (-b ± √(b² - 4ac)) / 2a",
      explanation: "Solves quadratic equations in the form ax² + bx + c = 0",
      example: "For x² + 5x + 6 = 0, a=1, b=5, c=6, solutions are x = -2 and x = -3"
    }
  ],
  // Add more subjects as needed
};

export default function SubjectEquations({ params }: { params: { subject: string } }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get equations for the current subject
  const equations = equationsData[params.subject as keyof typeof equationsData] || [];
  
  // Filter equations based on search term
  const filteredEquations = equations.filter(eq => 
    eq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eq.equation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get subject name with proper capitalization
  const subjectName = params.subject.charAt(0).toUpperCase() + params.subject.slice(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {subjectName} Equations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore essential equations and formulas in {subjectName}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search equations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>

        {/* Equations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEquations.map((eq) => (
            <Card key={eq.id} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{eq.title}</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-lg font-mono text-center">{eq.equation}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Explanation:</h4>
                  <p className="text-gray-600">{eq.explanation}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Example:</h4>
                  <p className="text-gray-600">{eq.example}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-4">
                <button className="text-[#0A64BC] hover:text-blue-700">
                  <i className="far fa-bookmark mr-1"></i>
                  Save
                </button>
                <button className="text-[#0A64BC] hover:text-blue-700">
                  <i className="fas fa-share-alt mr-1"></i>
                  Share
                </button>
              </div>
            </Card>
          ))}
        </div>

        {filteredEquations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No equations found matching your search.</p>
          </div>
        )}

        {/* Quick Navigation */}
        <div className="mt-12">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Quick Navigation</h3>
            <div className="flex flex-wrap gap-4">
              {equations.map((eq) => (
                <a
                  key={eq.id}
                  href={`#${eq.id}`}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-[#0A64BC] hover:text-white transition-colors"
                >
                  {eq.title}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
