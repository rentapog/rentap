import React from 'react';

export function Sheet({ open, onOpenChange, children }) {
  return open ? (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/30" onClick={() => onOpenChange(false)} />
      <div className="relative bg-white w-64 h-full shadow-lg z-10 animate-slide-in">
        {children}
      </div>
    </div>
  ) : null;
}

export function SheetContent({ children, side = 'right', className = '', ...props }) {
  return (
    <div className={`h-full ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SheetTrigger({ asChild, children, ...props }) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      onClick: (e) => {
        if (children.props.onClick) children.props.onClick(e);
        if (props.onClick) props.onClick(e);
      },
    });
  }
  return (
    <button {...props}>{children}</button>
  );
}
