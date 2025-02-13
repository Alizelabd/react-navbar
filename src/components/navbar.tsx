import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/cn';

// Types
export interface NavbarRootProps {
  children?: React.ReactNode;
  className?: string;
}

export interface NavbarLogoProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export interface NavbarContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface NavbarMenuProps {
  children: React.ReactNode;
  className?: string;
  show?: boolean;
}

export interface NavbarTriggerProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

// Variants
const navbarVariants = cva(
  'flex items-center justify-between relative z-10',
  {
    variants: {
      variant: {
        default: 'bg-white border-b border-gray-200 px-4 py-3',
        transparent: 'bg-transparent px-4 py-3',
        colored: 'bg-primary text-primary-foreground px-4 py-3',
      },
      sticky: {
        true: 'sticky top-0',
        false: 'relative',
      },
    },
    defaultVariants: {
      variant: 'default',
      sticky: false,
    },
  }
);

// Components
export type NavbarProps = 
  NavbarRootProps &
    VariantProps<typeof navbarVariants>;

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ className, children, variant, sticky, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(navbarVariants({ variant, sticky }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Navbar.displayName = 'Navbar';

const NavbarLogo = React.forwardRef<HTMLDivElement | HTMLAnchorElement, NavbarLogoProps>(
  ({ className, children, href, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          className={cn('text-xl font-semibold', className)}
          {...props}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    }

    return (
      <div
        className={cn('text-xl font-semibold', className)}
        {...props}
        ref={ref as React.Ref<HTMLDivElement>}
      >
        {children}
      </div>
    );
  }
);
NavbarLogo.displayName = 'NavbarLogo';

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

const NavbarMenu = React.forwardRef<HTMLElement, NavbarMenuProps>(
  ({ className, children, show = true, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          'flex items-center gap-4 transition-all duration-200',
          show ? 'opacity-100' : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto',
          'absolute left-0 top-full w-full bg-white md:static md:w-auto md:bg-transparent p-4 md:p-0',
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

const NavbarTrigger = React.forwardRef<HTMLButtonElement, NavbarTriggerProps>(
  ({ className, onClick, children, ...props }, ref) => {
    return (
      <button
      type='button'
        ref={ref}
        onClick={onClick}
        className={cn(
          'inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 md:hidden',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
NavbarTrigger.displayName = 'NavbarTrigger';

export {
  Navbar,
  NavbarLogo,
  NavbarContent,
  NavbarMenu,
  NavbarTrigger,
};