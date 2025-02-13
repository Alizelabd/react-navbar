import { useState } from 'react';
import { GithubIcon } from 'lucide-react';
import {
  Navbar,
  NavbarLogo,
  NavbarContent,
  NavbarMenu,
  NavbarTrigger,
} from './components/ui/navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar >
      <NavbarContent>
        <NavbarLogo href="/">
          <GithubIcon className="h-6 w-6" />
          <span>Brand</span>
        </NavbarLogo>
      </NavbarContent>

      <NavbarContent  className="hidden md:flex">
        <ul className='flex gap-4'>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </NavbarContent>

      <NavbarContent className="md:hidden">
        <NavbarTrigger onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </NavbarContent>

      <NavbarMenu show={isMenuOpen} align='center' className="md:hidden">
        <ul className="flex flex-col gap-4">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </NavbarMenu>
    </Navbar>
  );
}

export default App;