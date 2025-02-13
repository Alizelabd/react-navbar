import type { ReactNode, Ref } from 'react';

export type NavbarRootProps = {
  children?: ReactNode;
  className?: string;
  sticky?: boolean;
  transparent?: boolean;
  ref?: Ref<HTMLDivElement>;
}

export type NavbarLogoProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  ref?: Ref<HTMLDivElement>;
}

export type NavbarContentProps = {
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

export type NavbarMenuProps = {
  children: ReactNode;
  className?: string;
  show?: boolean;
  align?: 'start' | 'center' | 'end';
  ref?: Ref<HTMLElement>;
}

export type NavbarTriggerProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ElementType;
}