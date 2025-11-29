import React from 'react';

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 md:hidden">
      {/* Hidden on medium and larger screens */}
      Sidebar
    </div>
  );
};

export default Sidebar;
