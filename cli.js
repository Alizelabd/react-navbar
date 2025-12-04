#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import ora from 'ora';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentFiles = [
  { name: 'navbar.tsx', required: true },
  { name: 'navbar-user.tsx', required: false, option: 'withUserDropdown' },
  { name: 'navbar-search.tsx', required: false, option: 'withSearch' },
];

const dependencies = {
  '--with-user-dropdown': ['@radix-ui/react-dropdown-menu'],
  '--with-search': ['@radix-ui/react-dialog'],
};

program
  .name('add-navbar')
  .description('Add the enhanced navbar component to your project')
  .option('-d, --dir <path>', 'Installation directory for the component', 'components/navbar')
  .option('--with-user-dropdown', 'Include the NavbarUser component (requires @radix-ui/react-dropdown-menu)', false)
  .option('--with-search', 'Include the NavbarSearch component (Command Palette, requires @radix-ui/react-dialog)', false)
  .action(async (options) => {
    const { dir, withUserDropdown, withSearch } = options;
    const targetDir = path.join(process.cwd(), dir);
    const spinner = ora(`Installing navbar component(s) to ${dir}...`).start();

    try {
      // 1. Ensure target directory exists
      await fs.ensureDir(targetDir);

      // 2. Copy component files
      const filesToCopy = componentFiles.filter(file => 
        file.required || 
        (file.option === 'withUserDropdown' && withUserDropdown) ||
        (file.option === 'withSearch' && withSearch)
      );

      for (const file of filesToCopy) {
        const sourcePath = path.join(__dirname, 'src', 'components', file.name);
        const targetPath = path.join(targetDir, file.name);
        await fs.copy(sourcePath, targetPath);
      }

      // 3. Create utils file if it doesn't exist
      const utilsDir = path.join(process.cwd(), 'lib');
      const utilsFile = path.join(utilsDir, 'utils.ts');
      
      if (!await fs.pathExists(utilsFile)) {
        await fs.ensureDir(utilsDir);
        await fs.writeFile(utilsFile, `
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`);
      }

      spinner.succeed('Navbar component(s) installed successfully!');
      
      console.log('\n--- Next Steps ---');
      console.log(`1. Import the main component:`);
      console.log(`   import { Navbar, NavbarMobile, NavbarContent } from "${dir}/navbar"`);
      
      if (withUserDropdown) {
        console.log(`2. You included NavbarUser. Import it:`);
        console.log(`   import { NavbarUser, NavbarUserItem } from "${dir}/navbar-user"`);
      }
      
      if (withSearch) {
        console.log(`3. You included NavbarSearch. Import it:`);
        console.log(`   import { NavbarSearch } from "${dir}/navbar-search"`);
      }

      // 4. Dependency check and suggestion
      const requiredDeps = [];
      if (withUserDropdown) requiredDeps.push(...dependencies['--with-user-dropdown']);
      if (withSearch) requiredDeps.push(...dependencies['--with-search']);

      if (requiredDeps.length > 0) {
        console.log('\n4. Make sure you have the following Radix UI dependencies installed:');
        console.log(`   npm install ${requiredDeps.join(' ')}`);
      }

      console.log('\n5. Ensure your tailwind.config.js includes the component path:');
      console.log(`   content: [
     // ...
     './${dir}/**/*.{js,ts,jsx,tsx}'
   ]`);

    } catch (error) {
      spinner.fail('Error installing navbar component(s).');
      console.error('Details:', error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
