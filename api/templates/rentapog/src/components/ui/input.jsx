import React from 'react';

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`block w-full rounded-md border border-slate-200 px-3 py-2 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 ${className}`}
      {...props}
    />
  );
}
