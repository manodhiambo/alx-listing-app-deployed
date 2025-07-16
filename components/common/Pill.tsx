import React from 'react';

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
        ${
          isActive
            ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
        }
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
