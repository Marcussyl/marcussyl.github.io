# Marcus Sze - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a web developer. Built with React and Tailwind CSS, featuring smooth animations and a clean, professional design.

## 🌟 Overview

This portfolio website serves as my digital identity, highlighting my technical skills, project work, and professional journey. The site features:

- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Interactive Elements**: Engaging UI components with hover effects
- **Project Showcase**: Detailed project presentations with modal views
- **Contact Integration**: Email functionality with EmailJS
- **Modern Tech Stack**: Built with cutting-edge web technologies

## 🚀 Live Demo

Visit the live portfolio: [Marcus Sze Portfolio](https://marcussyl.github.io)

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Swiper** - Touch slider for mobile-friendly interactions

### Development Tools

- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Stylelint** - CSS/SCSS linting
- **PostCSS** - CSS processing

### Utilities

- **clsx** - Conditional className utility
- **tailwind-merge** - Intelligent Tailwind class merging
- **jQuery** - DOM manipulation (for accordion functionality)
- **body-scroll-lock** - Body scroll management for modals

### Deployment

- **GitHub Pages** - Static site hosting
- **gh-pages** - Automated deployment

## 📁 Project Structure

```md
marcussyl.github.io/
├── public/
│   └── assets/           # Images, icons, and static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── sections/         # Main page sections
│   ├── lib/             # Utility functions and context
│   ├── fancy/           # Additional components
│   └── main.jsx         # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:Marcussyl/marcussyl.github.io.git
   cd marcussyl.github.io.git
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm deploy` - Deploy to GitHub Pages

## 🎨 Features

### Sections

- **Hero Section** - Introduction with typewriter effect
- **Tech Stack** - Interactive technology showcase
- **Projects** - Portfolio with detailed project modals
- **Milestones** - Professional achievements and timeline
- **Contact** - Contact form with EmailJS integration

### Interactive Elements

- **Smooth Scrolling** - Navigation with offset handling
- **Active Navigation** - Dynamic header highlighting
- **Modal Dialogs** - Project detail views
- **Responsive Navigation** - Mobile-friendly menu
- **Animation Effects** - Framer Motion animations

### Performance Optimizations

- **Lazy Loading** - Images and components
- **Code Splitting** - Optimized bundle sizes
- **CSS Optimization** - Tailwind CSS purging
- **Asset Optimization** - Compressed images and icons

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🎯 Key Components

### Navigation

- Sticky header with active section highlighting
- Mobile hamburger menu
- Smooth scroll navigation

### Project Cards

- Hover effects and animations
- Modal detail views
- Technology tags
- Live demo and GitHub links

### Tech Stack Grid

- Interactive technology icons
- Hover animations
- Organized by categories

## 🔧 Customization

### Adding New Projects

1. Add project data to `src/sections/Projects.jsx`
2. Include project thumbnail in `public/assets/proj-thumbs/`
3. Update project links and descriptions

### Modifying Tech Stack

1. Add tech icons to `public/assets/tech-icos/`
2. Update `techStackItems` array in `src/sections/TechStack.jsx`

### Styling Changes

- Modify Tailwind classes in components
- Update CSS variables in `src/index.css`
- Customize animations in component files

## 📧 Contact Integration

The contact form uses EmailJS for seamless email functionality:

- Configured in `src/sections/Contacts.jsx`
- Requires EmailJS account setup
- Supports form validation and error handling

## 🚀 Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

1. **Build the project**

   ```bash
   pnpm build
   ```

2. **Deploy to GitHub Pages**

   ```bash
   pnpm deploy
   ```

### Custom Domain

To use a custom domain:

1. Add `CNAME` file to `public/` directory
2. Configure DNS settings
3. Update `vite.config.js` base path if needed

## 👨‍💻 About the Developer

**Marcus Sze** - Web Developer passionate about creating responsive, user-friendly web experiences with solid foundation in modern technologies.

- **GitHub**: [@Marcussyl](https://github.com/Marcussyl)
- **LinkedIn**: [Marcus Sze](https://www.linkedin.com/in/marcus-sze-3538ba229/)
- **Portfolio**: [Live Site](https://marcussyl.github.io)

---
