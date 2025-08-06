import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface StatusBadgeProps {
  status: 'allowed' | 'restricted' | 'prohibited';
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSize = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  if (status === 'allowed') {
    return (
      <span className={`inline-flex items-center gap-1.5 ${sizeClasses[size]} font-medium text-green-800 bg-green-100 rounded-full`}>
        <CheckCircle className={iconSize[size]} />
        Allowed
      </span>
    );
  }

  if (status === 'restricted') {
    return (
      <span className={`inline-flex items-center gap-1.5 ${sizeClasses[size]} font-medium text-yellow-800 bg-yellow-100 rounded-full`}>
        <AlertTriangle className={iconSize[size]} />
        Restricted
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 ${sizeClasses[size]} font-medium text-red-800 bg-red-100 rounded-full`}>
      <XCircle className={iconSize[size]} />
      Prohibited
    </span>
  );
};