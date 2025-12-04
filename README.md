# react-navbar - Enhanced Accessible Navigation Bar

This project provides a flexible, customizable, and highly accessible navigation bar component built with **React** and **Tailwind CSS**. It has been significantly enhanced by integrating **Radix UI Primitives** to ensure robust accessibility (A11Y) and advanced features.

## ✨ Features

*   **Enhanced Accessibility (A11Y):** Leverages Radix UI for correct focus management, keyboard navigation, and ARIA attributes.
*   **Mobile Menu:** Rebuilt using `Radix Dialog` for a superior, accessible mobile experience.
*   **User Profile Dropdown:** Optional `NavbarUser` component for an accessible user menu.
*   **Command Palette Search:** Optional `NavbarSearch` component providing a modern, command-palette style search interface.
*   **Improved CLI:** A powerful Command Line Interface for easy installation of core and optional components.

## 🛠️ Installation

The component is designed to be installed directly into your project's source code using the provided CLI tool.

### 1. Install Dependencies

First, ensure you have the necessary peer dependencies installed:

```bash
npm install react react-dom class-variance-authority clsx tailwind-merge
```

### 2. Use the CLI to Install Components

Use the `npx` command to run the CLI tool and copy the component files into your project.

```bash
npx add-navbar --dir components/ui/navbar
```

#### Installing Optional Features

You can include the advanced features using the following flags:

| Flag | Description | Required Radix UI Dependency |
| :--- | :--- | :--- |
| `--with-user-dropdown` | Includes the `NavbarUser` component (User Profile Dropdown). | `@radix-ui/react-dropdown-menu` |
| `--with-search` | Includes the `NavbarSearch` component (Command Palette style search). | `@radix-ui/react-dialog` |

**Example: Full Installation**

To install the core component, the user dropdown, and the search component into `src/components/ui/navbar`:

```bash
npx add-navbar --dir src/components/ui/navbar --with-user-dropdown --with-search
```

**Important:** After running the CLI, it will provide clear instructions on which Radix UI packages you need to install to support the optional components you selected.

## 💡 Usage Example

Here is a comprehensive example demonstrating how to use the core and optional components together:

```tsx
import { 
  Navbar, 
  NavbarLogo, 
  NavbarContent, 
  NavbarMobile 
} from '@/components/ui/navbar/navbar'; // Adjust path based on your --dir flag

// Import optional components
import { NavbarUser, NavbarUserItem, NavbarUserSeparator } from '@/components/ui/navbar/navbar-user';
import { NavbarSearch } from '@/components/ui/navbar/navbar-search';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar variant="default" sticky>
        <NavbarContent>
          <NavbarLogo href="/">
            <span className="text-xl font-bold">My App</span>
          </NavbarLogo>
        </NavbarContent>

        {/* Desktop Navigation */}
        <NavbarContent className="hidden md:flex">
          <ul className='flex gap-4 items-center'>
            <li><a href="/features" className="text-gray-600 hover:text-gray-900">Features</a></li>
            <li><a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            
            {/* 1. Command Palette Search */}
            <li><NavbarSearch placeholder="Search (Cmd+K)" /></li>
            
            {/* 2. User Profile Dropdown */}
            <li>
              <NavbarUser avatarUrl="/path/to/avatar.jpg" userName="John Doe">
                <NavbarUserItem>Profile</NavbarUserItem>
                <NavbarUserItem>Settings</NavbarUserItem>
                <NavbarUserSeparator />
                <NavbarUserItem>Log Out</NavbarUserItem>
              </NavbarUser>
            </li>
          </ul>
        </NavbarContent>

        {/* Mobile Navigation */}
        <NavbarContent className="md:hidden">
          {/* 3. Accessible Mobile Menu */}
          <NavbarMobile side="right">
            <div className="flex flex-col gap-4">
              <a href="/features">Features</a>
              <a href="/pricing">Pricing</a>
              <a href="/about">About</a>
              <NavbarSearch placeholder="Search" />
            </div>
          </NavbarMobile>
        </NavbarContent>
      </Navbar>
      {/* ... rest of your application */}
    </div>
  );
}
```

## 🧩 Component API Reference

### 1. Core Components (`navbar.tsx`)

| Component | Description | Props |
| :--- | :--- | :--- |
| **`Navbar`** | The root container for the navigation bar. | `variant`: `'default' \| 'transparent' \| 'colored'`, `sticky`: `boolean`, `className`: `string` |
| **`NavbarLogo`** | Component for the brand or logo. | `href`: `string` (optional), `children`: `ReactNode` |
| **`NavbarContent`** | A flexible container for grouping navigation items (e.g., left, center, right groups). | `className`: `string`, `children`: `ReactNode` |
| **`NavbarTrigger`** | The button element used to trigger the mobile menu (automatically used inside `NavbarMobile`). | `className`: `string`, `children`: `ReactNode` |
| **`NavbarMobile`** | The accessible, Radix-powered mobile menu wrapper. | `side`: `'top' \| 'right' \| 'bottom' \| 'left'` (controls slide direction), `children`: `ReactNode` |

### 2. Optional Components

#### `NavbarUser` (`navbar-user.tsx`)

A component for an accessible user profile dropdown menu.

| Component | Description | Props |
| :--- | :--- | :--- |
| **`NavbarUser`** | The main component wrapping the avatar and dropdown. | `avatarUrl`: `string`, `userName`: `string`, `children`: `ReactNode` (Dropdown items) |
| **`NavbarUserItem`** | A clickable item within the dropdown menu. | Extends `DropdownMenu.DropdownMenuItemProps` |
| **`NavbarUserSeparator`** | A visual separator line within the dropdown. | - |

#### `NavbarSearch` (`navbar-search.tsx`)

A component that triggers a Command Palette style search dialog.

| Component | Description | Props |
| :--- | :--- | :--- |
| **`NavbarSearch`** | The button that opens the search dialog. Supports `Cmd+K` / `Ctrl+K` shortcut. | `placeholder`: `string`, `className`: `string` |

## ⚙️ Development

To run the project locally for development or testing:

1.  Install dependencies: `npm install`
2.  Run the development server: `npm run start`

## 📄 License

MIT
