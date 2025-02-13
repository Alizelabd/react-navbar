import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/cn';

import { NavbarMenuProps } from './types';

const menuVariants = cva(
  'flex items-center gap-4 transition-all duration-200 ease-in-out md:opacity-100 md:pointer-events-auto',
  {
    variants: {
      align: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
      },
      show: {
        true: 'opacity-100 pointer-events-auto',
        false: 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto',
      },
    },
    defaultVariants: {
      align: 'center',
      show: true,
    },
  }
);

export type NavbarMenuComponentProps = 
   NavbarMenuProps &
    VariantProps<typeof menuVariants>;

const NavbarMenu = React.forwardRef<HTMLElement, NavbarMenuComponentProps>(
  ({ className, children, show, align, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          menuVariants({ show, align }),
          'absolute left-0 top-full w-full bg-background md:static md:w-auto md:bg-transparent p-4 md:p-0',
          className
        )}
        {...props}
      >
        {children}
      </nav>
    );
  }
);

NavbarMenu.displayName = 'NavbarMenu';

export { NavbarMenu, menuVariants };