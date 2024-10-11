import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
        &copy; {currentYear} Saad A. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Copyright;
