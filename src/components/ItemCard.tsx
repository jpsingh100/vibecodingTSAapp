import React from 'react';
import { TSAItem } from '../types';
import { StatusBadge } from './StatusBadge';
import { Info } from 'lucide-react';

interface ItemCardProps {
  item: TSAItem;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.category}</p>
        </div>
        <StatusBadge status={item.status} />
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <dt className="text-sm font-medium text-gray-500">Carry-On</dt>
            <dd className="text-sm text-gray-900 mt-1">{item.carryOn}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Checked Bag</dt>
            <dd className="text-sm text-gray-900 mt-1">{item.checkedBag}</dd>
          </div>
        </div>

        <div className="border-t pt-3">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-700">{item.description}</p>
              {item.additionalInfo && (
                <p className="text-sm text-gray-600 mt-1 italic">{item.additionalInfo}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};