'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/Button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-2xl font-bold tracking-tight">Question Ace</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link 
              href="/questions" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Questions Hub
            </Link>
            <Link 
              href="/equations" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Equations
            </Link>
            <Link 
              href="/premium" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Premium
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Contact
            </Link>
            <Button 
              variant="outline" 
              className="ml-6 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              Login / Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link 
              href="/questions" 
              className="text-gray-300 hover:text-white block py-2 text-base font-medium transition-colors duration-200"
            >
              Questions Hub
            </Link>
            <Link 
              href="/equations" 
              className="text-gray-300 hover:text-white block py-2 text-base font-medium transition-colors duration-200"
            >
              Equations
            </Link>
            <Link 
              href="/premium" 
              className="text-gray-300 hover:text-white block py-2 text-base font-medium transition-colors duration-200"
            >
              Premium
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white block py-2 text-base font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            <Button 
              variant="outline" 
              className="w-full mt-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              Login / Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
