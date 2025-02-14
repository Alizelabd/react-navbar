# react-navbar
This project is a flexible and customizable navigation bar built with React and Tailwind. It includes interactive components like dropdown menus.

## Installation

```bash
npm install @b7r/react-navbar
npx add-navbar
```

## Usage

```tsx
import { 
  Navbar, 
  NavbarLogo, 
  NavbarContent, 
  NavbarMenu, 
  NavbarTrigger 
} from '@src/compnents/ui';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar variant="default" sticky>
      <NavbarContent>
        <NavbarLogo href="/">
          <span>Logo</span>
        </NavbarLogo>
      </NavbarContent>

      <NavbarContent className="hidden md:flex">
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About</a>
      </NavbarContent>

      <NavbarContent className="md:hidden">
        <NavbarTrigger onClick={() => setIsOpen(!isOpen)}>
          <svg>...</svg>
        </NavbarTrigger>
      </NavbarContent>

      <NavbarMenu show={isOpen} className="md:hidden">
        <div className="flex flex-col gap-4">
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
```

## Components

### Navbar

The root component that wraps all navbar elements.

Props:
- `variant`: 'default' | 'transparent' | 'colored'
- `sticky`: boolean
- `className`: string

### NavbarLogo

Component for the navbar logo/brand.

Props:
- `href`: string (optional)
- `className`: string
- `children`: ReactNode

### NavbarContent

A container for navbar items.

Props:
- `className`: string
- `children`: ReactNode

### NavbarMenu

Mobile-responsive menu container.

Props:
- `show`: boolean
- `className`: string
- `children`: ReactNode

### NavbarTrigger

Mobile menu trigger button.

Props:
- `onClick`: () => void
- `className`: string
- `children`: ReactNode

## Customization

The components use Tailwind CSS classes and can be customized using the className prop:

```jsx
<Navbar className="custom-navbar">
  {/* ... */}
</Navbar>
```

## License

MIT
