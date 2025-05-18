# Photomagic 🪄

Welcome to Photomagic! This project is a B2C SaaS application that allows users to upload their photos/albums and request transformations into various artistic styles. All transformations are currently handled manually offline.

This README provides information for collaborators to get started with the project.

For a detailed log of development progress and specific commit changes, please see [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md).

## Core Idea

Photomagic enables users to:
*   Upload photos and albums.
*   Request artistic transformations (e.g., coloring books, comic strips, Ghiblified art).

The initial MVP focuses on collecting user requests and images, with manual offline processing of transformations.

## Tech Stack

*   **Frontend:** React (JavaScript) with Hooks and functional components
*   **Build Tool:** Vite
*   **Routing:** React Router DOM
*   **Styling:** HTML5 & CSS3 (initially plain CSS/CSS Modules)
*   **Linting & Formatting:** ESLint & Prettier
*   **Version Control:** Git

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd photomagic-dev
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173` (or the next available port).

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run preview`: Serves the production build locally for preview.
*   `npm run lint`: Lints the codebase using ESLint.
*   `npm run format`: Formats the codebase using Prettier.

## Project Structure

*   `public/`: Static assets that are directly copied to the build output.
*   `src/`: Contains all the source code for the application.
    *   `assets/`: Images, fonts, and other static assets used by components.
    *   `components/`: Reusable UI components (e.g., Header, Footer, Button).
    *   `pages/`: Top-level page components corresponding to different screens/routes.
    *   `App.jsx`: Main application component, handles layout and routing.
    *   `main.jsx`: The entry point of the React application.
    *   `index.css`: Global styles and CSS resets.
*   `eslint.config.js`: ESLint configuration.
*   `.prettierrc.json`: Prettier configuration.
*   `vite.config.js`: Vite configuration.
*   `DEVELOPMENT_LOG.md`: Detailed log of commits and development progress.

## Contributing

(Details to be added later, e.g., branching strategy, code review process.)

---

*This project follows the development plan outlined in `initial-website-sketch.pdf` and guided by AI-assisted pair programming.*
