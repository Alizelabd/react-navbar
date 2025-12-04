import { GithubIcon, SettingsIcon, LogOutIcon, UserIcon } from 'lucide-react';
import {
  Navbar,
  NavbarLogo,
  NavbarContent,
  NavbarMobile,
} from '@/components/navbar';
import { NavbarUser, NavbarUserItem, NavbarUserSeparator } from '@/components/navbar-user';
import { NavbarSearch } from '@/components/navbar-search';

function App() {
  // Note: The mobile menu state is now managed internally by NavbarMobile (Radix Dialog),
  // so the local state 'isMenuOpen' is no longer needed for the mobile menu.
  // We'll use a dummy state for demonstration purposes if needed, but remove the old logic.

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="default" sticky>
        <NavbarContent>
          <NavbarLogo href="/">
            <GithubIcon className="h-6 w-6" />
            <span>Brand</span>
          </NavbarLogo>
        </NavbarContent>

        <NavbarContent className="hidden md:flex">
          <ul className='flex gap-4 items-center'>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            
            {/* New: NavbarSearch (Command Palette) */}
            <li><NavbarSearch placeholder="Search (Cmd+K)" /></li>
            
            {/* New: NavbarUser (Dropdown Menu) */}
            <li>
              <NavbarUser avatarUrl="https://i.pravatar.cc/150?img=3" userName="Ali Zlabd">
                <NavbarUserItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  Profile
                </NavbarUserItem>
                <NavbarUserItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  Settings
                </NavbarUserItem>
                <NavbarUserSeparator />
                <NavbarUserItem>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Log Out
                </NavbarUserItem>
              </NavbarUser>
            </li>
          </ul>
        </NavbarContent>

        {/* New: NavbarMobile (Radix Dialog) */}
        <NavbarContent className="md:hidden">
          <NavbarMobile side="right">
            <div className="flex flex-col gap-4">
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">About</a>
              <NavbarSearch placeholder="Search" />
            </div>
          </NavbarMobile>
        </NavbarContent>
      </Navbar>
      
      <div className="p-8">
        <h1 className="text-2xl font-bold">Enhanced Navbar Demo</h1>
        <p className="mt-4">Scroll down to test the sticky feature.</p>
        <div className="h-[2000px] bg-white mt-8 p-4 border rounded-lg">
          Content to force scroll
        </div>
      </div>
    </div>
  );
}

export default App;
