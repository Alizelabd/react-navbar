import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

// Types
export type NavbarRootProps = {
  children?: React.ReactNode;
  className?: string;
}

export type NavbarLogoProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export type NavbarContentProps = {
  children: React.ReactNode;
  className?: string;
}

export type NavbarMenuProps = {
  children: React.ReactNode;
  className?: string;
}

export type NavbarTriggerProps = {
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
  ({ className, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          'flex flex-col md:flex-row items-start md:items-center gap-4',
          'md:static md:w-auto md:bg-transparent p-4 md:p-0',
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

export type NavbarMobileProps = {
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

const NavbarMobile = ({ children, side = 'right' }: NavbarMobileProps) => {
  const sideClasses = {
    top: 'inset-x-0 top-0 h-1/2',
    right: 'inset-y-0 right-0 w-3/4 max-w-sm',
    bottom: 'inset-x-0 bottom-0 h-1/2',
    left: 'inset-y-0 left-0 w-3/4 max-w-sm',
  }[side];

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NavbarTrigger>
          {/* Placeholder for Menu Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </NavbarTrigger>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            'fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out duration-300',
            sideClasses,
            side === 'right' && 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
            side === 'left' && 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
            side === 'top' && 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
            side === 'bottom' && 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom'
          )}
        >
          <div className="flex flex-col space-y-4">
            {children}
          </div>
          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export {
  Navbar,
  NavbarLogo,
  NavbarContent,
  NavbarMenu,
  NavbarTrigger,
  NavbarMobile,
};