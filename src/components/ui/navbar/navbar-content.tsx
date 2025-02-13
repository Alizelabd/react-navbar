import * as React from 'react';
import { cn } from '@/lib/cn';
import { NavbarContentProps } from './types';

const NavbarContent = React.forwardRef<HTMLDivElement, NavbarContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

NavbarContent.displayName = 'NavbarContent';

export { NavbarContent };