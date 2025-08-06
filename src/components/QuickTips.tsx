import React from 'react';
import { Lightbulb, Clock, Droplets, Battery } from 'lucide-react';

export const QuickTips: React.FC = () => {
  const tips = [
    {
      icon: <Droplets className="h-5 w-5" />,
      title: '3-1-1 Liquid Rule',
      description: '3.4 oz containers, 1 quart bag, 1 bag per passenger'
    },
    {
      icon: <Battery className="h-5 w-5" />,
      title: 'Electronics',
      description: 'Laptops and large electronics need separate screening'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Arrive Early',
      description: 'Allow extra time for security screening'
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: 'Pro Tip',
      description: 'Empty water bottles can be filled after security'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Quick Security Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-blue-600">{tip.icon}</div>
                <h3 className="font-semibold text-gray-900">{tip.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};