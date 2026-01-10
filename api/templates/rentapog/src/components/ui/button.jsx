import React from 'react';

export function Button({ children, className = '', variant = 'default', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-red-500 text-white hover:bg-red-600',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
  };
  const sizes = {
    md: 'px-4 py-2 text-base',
    icon: 'p-2',
  };
  return (
    <button
      className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
