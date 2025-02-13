import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';
import { NavbarRootProps } from './types';

const navbarVariants = cva(
  'w-full flex items-center justify-between px-4 py-3 relative z-50',
  {
    variants: {
      sticky: {
        true: 'fixed top-0 left-0',
        false: 'relative',
      },
      transparent: {
        true: 'bg-transparent',
        false: 'bg-background border-b',
      },
    },
    defaultVariants: {
      sticky: false,
      transparent: false,
    },
  }
);

export type NavbarProps = 
  NavbarRootProps &
    VariantProps<typeof navbarVariants>;

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ className, children, sticky, transparent, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          navbarVariants({ sticky, transparent }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Navbar.displayName = 'Navbar';

export { Navbar, navbarVariants };