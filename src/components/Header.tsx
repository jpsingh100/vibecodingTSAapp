import React from 'react';
import { Shield, Plane } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-10 w-10" />
            <Plane className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            TSA Carry-On Checker
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Quickly check what items you can bring in your carry-on luggage. 
            Get clear guidelines to breeze through airport security.
          </p>
        </div>
      </div>
    </header>
  );
};