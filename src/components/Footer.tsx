import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Important Notice</h3>
          <p className="text-gray-300 mb-4 max-w-3xl mx-auto">
            This app provides general TSA guidelines for reference. Rules may change and 
            final decisions are always made by TSA officers. For the most current information, 
            visit the official TSA website.
          </p>
          <a
            href="https://www.tsa.gov/travel/security-screening/whatcanibring"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Official TSA "What Can I Bring?" Tool
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};