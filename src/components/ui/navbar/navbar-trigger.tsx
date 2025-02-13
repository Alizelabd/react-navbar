import * as React from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/cn';

import { NavbarTriggerProps } from './types';

const NavbarTrigger = React.forwardRef<HTMLButtonElement, NavbarTriggerProps>(
  ({ className, onClick, icon: Icon = Menu, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          'inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground md:hidden',
          className
        )}
        {...props}
      >
        <Icon className="h-6 w-6" />
      </button>
    );
  }
);

NavbarTrigger.displayName = 'NavbarTrigger';

export { NavbarTrigger };