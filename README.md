# Horizon College Website

A modern, responsive website for Horizon College built with Next.js and Tailwind CSS.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (v8 or later) or [yarn](https://yarnpkg.com/) (v1.22 or later)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### Setting Up the Project in Visual Studio Code

1. **Clone the repository**

   If you have Git installed, you can clone the repository:

   \`\`\`bash
   git clone https://github.com/yourusername/horizon-college.git
   cd horizon-college
   \`\`\`

   Alternatively, you can download the project as a ZIP file and extract it.

2. **Open the project in Visual Studio Code**

   \`\`\`bash
   code .
   \`\`\`

   Or open Visual Studio Code, select "File" > "Open Folder" and navigate to the project directory.

3. **Install dependencies**

   Open a terminal in Visual Studio Code by selecting "Terminal" > "New Terminal" from the menu, then run:

   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

4. **Start the development server**

   After the dependencies are installed, start the development server:

   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **View the website**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Project Structure

- `app/` - Contains the main pages and layouts using Next.js App Router
- `components/` - Reusable UI components
- `lib/` - Utility functions and configuration
- `public/` - Static assets like images and fonts
- `hooks/` - Custom React hooks

### Recommended VS Code Extensions

For the best development experience, consider installing these VS Code extensions:

- **ESLint** - For JavaScript/TypeScript linting
- **Prettier** - For code formatting
- **Tailwind CSS IntelliSense** - For Tailwind CSS class suggestions
- **PostCSS Language Support** - For better CSS syntax highlighting

### Running in Production Mode

To build and run the project in production mode:

\`\`\`bash
npm run build
npm start
# or
yarn build
yarn start
\`\`\`

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Icon library

## License

This project is licensed under the MIT License - see the LICENSE file for details.
