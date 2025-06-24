import Link from 'next/link';
import { Card } from "@/components/ui/card";

const subjects = [
  {
    id: 'physics',
    name: 'Physics',
    icon: 'fa-atom',
    description: 'Fundamental laws and equations of physics',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: 'fa-flask',
    description: 'Chemical formulas and reactions',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'math',
    name: 'Mathematics',
    icon: 'fa-square-root-variable',
    description: 'Mathematical formulas and equations',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: 'fa-code',
    description: 'Coding concepts and algorithms',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'business',
    name: 'BBA/Business',
    icon: 'fa-chart-line',
    description: 'Business formulas and calculations',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'engineering',
    name: 'Engineering',
    icon: 'fa-gear',
    description: 'Engineering principles and formulas',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'medical',
    name: 'Medical/Pharma',
    icon: 'fa-staff-snake',
    description: 'Medical calculations and conversions',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: 'fa-money-bill-trend-up',
    description: 'Financial formulas and calculations',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 'statistics',
    name: 'Statistics',
    icon: 'fa-chart-column',
    description: 'Statistical formulas and probability',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: 'fa-earth-americas',
    description: 'Geographical calculations and conversions',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function Equations() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Equation Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access a comprehensive collection of equations and formulas across various subjects
          </p>
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <Link href={`/equations/${subject.id}`} key={subject.id}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center mb-4`}>
                  <i className={`fas ${subject.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                <p className="text-gray-600">{subject.description}</p>
                <div className="mt-4 flex items-center text-[#0A64BC]">
                  <span className="text-sm">Explore equations</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for equations..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A64BC] focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="text-[#0A64BC] text-3xl mb-4">
                <i className="fas fa-bookmark"></i>
              </div>
              <h3 className="font-semibold mb-2">Save Favorites</h3>
              <p className="text-gray-600">Bookmark frequently used equations for quick access</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-[#0A64BC] text-3xl mb-4">
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="font-semibold mb-2">Practice Problems</h3>
              <p className="text-gray-600">Solve example problems to better understand the equations</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-[#0A64BC] text-3xl mb-4">
                <i className="fas fa-share-nodes"></i>
              </div>
              <h3 className="font-semibold mb-2">Share Knowledge</h3>
              <p className="text-gray-600">Share equations and explanations with your peers</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
