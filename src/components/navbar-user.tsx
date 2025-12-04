import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/cn';

// Types
export type NavbarUserProps = {
  avatarUrl: string;
  userName: string;
  children: React.ReactNode;
  className?: string;
};

const NavbarUser = ({ avatarUrl, userName, children, className }: NavbarUserProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            'flex items-center gap-2 cursor-pointer rounded-full p-1 transition-colors hover:bg-gray-100',
            className
          )}
          aria-label={`User menu for ${userName}`}
        >
          <img
            src={avatarUrl}
            alt={userName}
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
          )}
          sideOffset={5}
        >
          <DropdownMenu.Label className="px-2 py-1.5 text-sm font-semibold text-gray-700">
            {userName}
          </DropdownMenu.Label>
          <DropdownMenu.Separator className="h-px bg-gray-100 my-1" />
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

// Helper components for menu items
export const NavbarUserItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenu.DropdownMenuItemProps & { inset?: boolean }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenu.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenu.Item>
));
NavbarUserItem.displayName = DropdownMenu.Item.displayName;

export const NavbarUserSeparator = DropdownMenu.Separator;

export { NavbarUser };
