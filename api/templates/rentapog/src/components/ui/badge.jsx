import React from 'react';

export function Badge({ children, className = '', ...props }) {
  return (
    <span className={`inline-block px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs font-semibold ${className}`} {...props}>
      {children}
    </span>
  );
}
