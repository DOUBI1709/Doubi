import React from 'react';
import { Leaf } from 'lucide-react';

const Header = ({ userName }) => {
  return (
    <div className="bg-green-900 text-white p-6 rounded-lg mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-full">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
          <span className="text-xl font-bold">EcoStep</span>
        </div>
        {userName && (
          <div className="text-green-100">
            Bonjour, {userName}
          </div>
        )}
      </div>
      <p className="text-center text-green-100 mt-4">
        Un pas vers l'avenir
      </p>
    </div>
  );
};

export default Header;
