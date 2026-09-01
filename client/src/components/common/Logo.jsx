import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'md', showText = true, className = '', to = '/' }) {
  const imgSizeClasses = {
    sm: 'h-6 sm:h-7 max-w-[120px]',
    md: 'h-7 sm:h-8 max-w-[140px] sm:max-w-[160px]',
    lg: 'h-7.5 sm:h-8.5 md:h-9 max-w-[150px] sm:max-w-[180px]',
    xl: 'h-10 sm:h-12 max-w-[220px]'
  };

  const content = (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <img
        src="/logo.png"
        alt="PAW NEAR - The Paw Street"
        className={`w-auto object-contain transition-transform duration-200 group-hover:scale-105 ${imgSizeClasses[size]}`}
      />
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="group focus:outline-none inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
