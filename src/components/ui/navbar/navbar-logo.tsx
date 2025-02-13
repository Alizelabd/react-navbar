import * as React from 'react';
import { cn } from '@/lib/cn';

import { NavbarLogoProps } from './types';

const NavbarLogo = React.forwardRef<HTMLDivElement | HTMLAnchorElement, NavbarLogoProps>(
  ({ className, children, href, ...props }, ref) => {
    const Wrapper = href ? 'a' : 'div';
    
    return (
      <Wrapper
        ref={ref as React.Ref<HTMLDivElement & HTMLAnchorElement>}
        className={cn(
          'flex items-center gap-2 text-xl font-semibold hover:opacity-90 transition-opacity',
          className
        )}
        {...(href ? { href } : {})}
        {...props}
      >
        {children}
      </Wrapper>
    );
  }
);

NavbarLogo.displayName = 'NavbarLogo';

export { NavbarLogo };