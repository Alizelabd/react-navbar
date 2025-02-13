#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import ora from 'ora';
import prompts from 'prompts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .name('add-navbar')
  .description('Add the navbar component to your project')
  .action(async () => {
    try {
      // Prompt for installation directory
      const response = await prompts({
        type: 'text',
        name: 'directory',
        message: 'Where would you like to install the navbar component?',
        initial: 'components/navbar'
      });

      const spinner = ora('Installing navbar component...').start();

      // Define paths
      const targetDir = path.join(process.cwd(), response.directory);
      const sourceDir = path.join(__dirname, 'src', 'components', 'navbar.tsx');

      // Ensure target directory exists
      await fs.ensureDir(targetDir);

      // Copy component files
      await fs.copy(sourceDir, targetDir);

      // Create utils file if it doesn't exist
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

      spinner.succeed('Navbar component installed successfully!');
      
      console.log('\nYou can now import the navbar component:');
      console.log(`import { Navbar } from "${response.directory}"`);
      
      console.log('\nMake sure your tailwind.config.js includes the component path:');
      console.log(`content: [
  // ...
  './${response.directory}/**/*.{js,ts,jsx,tsx}'
]`);

    } catch (error) {
      console.error('Error installing navbar component:', error);
      process.exit(1);
    }
  });

program.parse();