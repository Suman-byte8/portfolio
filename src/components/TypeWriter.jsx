import React from 'react';
import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  const roles = [
    'Web Designer',
    1000,
    'Full Stack Developer',
    1000,
    'Backend Engineer',
    1000,
    'Blockchain Developer',
    1000,
    'JavaScript Enthusiast',
    1000
  ];

  return (
    <div className="mt-2">
      <TypeAnimation
        sequence={roles}
        wrapper="span"
        speed={50}
        style={{ 
          fontSize: '1.25rem',
          display: 'inline-block',
          color: '#9CA3AF',
          fontWeight: 500
        }}
        repeat={Infinity}
        cursor={true}
        className="font-medium"
      />
    </div>
  );
};

export default TypeWriter;