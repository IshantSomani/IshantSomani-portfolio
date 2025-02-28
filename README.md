# 🚀 Portfolio PWA - Modern Developer Showcase

![React](https://img.shields.io/badge/React-19-61DAFB.svg)
![Vite](https://img.shields.io/badge/Vite-6.0-FFC017.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-06B6D4.svg)
![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8.svg)

This project is a high-performance Progressive Web Application (PWA) portfolio that provides a seamless, native-app-like experience while showcasing technical skills and professional achievements. Built with modern web technologies, it features offline capabilities, ensuring users can access the portfolio even without an internet connection. The application is optimized for both desktop and mobile devices, providing a responsive and smooth user experience. Additionally, the portfolio is designed with developer engagement in mind, ensuring that the website not only highlights professional accomplishments but also demonstrates best practices in modern web development.

## ✨ Core Features

- **Progressive Web App**
  - 📲 Installable on mobile/home screen
  - 📴 Offline-first functionality

- **Project Presentation**
  - 🖼️ Dynamic project filtering by tech stack
  - 🎥 Embedded project demos & code samples
  - 📊 Interactive technology radar visualization

- **User Experience**
  - 🕹️ Motion-driven interactions (60 FPS)
  - ♿ WCAG 2.1 AA accessibility compliance
  - 📱 Mobile-optimized touch gestures

## 🛠 Technology Stack

### Core Architecture
| Component         | Technology       | Purpose                          |
|-------------------|------------------|----------------------------------|
| Framework         | React 19         | Component-based UI              |
| Build Tool        | Vite 6           | Instant dev server + optimized builds |
| Styling           | Tailwind CSS 4   | Utility-first CSS with JIT mode  |
| Routing           | React Router 7   | Client-side navigation           |

### Key Dependencies
**Runtime Essentials**
| Package           | Version | Purpose                          |
|-------------------|---------|----------------------------------|
| `react-icons`     | 5.5     | SVG icon collection              |
| `framer-motion`   | 12.4    | Complex animations               |
| `react-spinners`  | 0.15    | Loading state indicators         |
| `workbox-window`  | 7.0.0   | Service worker management        |

**Build Enhancements**
| Package                      | Version | Purpose                |
|------------------------------|---------|------------------------|
| `@vitejs/plugin-react-swc`   | 4.3.2 | Fast Refresh via SWC     |
| `@vitejs/plugin-pwa`         | 0.21.1  | PWA manifest generation|
| `eslint-plugin-react-refresh`| 0.4.18 | Linting for HMR         |

## 🚀 Getting Started

### Prerequisites
- Node.js ≥18.x
- npm ≥9.x

### Installation
```bash
git clone https://github.com/IshantSomani/IshantSomani-portfolio.git

cd IshantSomani-portfolio
```
```bash
npm install
```

```bash
npm run dev
```

## 📂 Project Structure
```bash
ishant-portfolio/
  ├── public/                  # Public assets
  │   ├── favicon.ico          # Favicon for the website
  │   ├── images/              # Store public images
  ├── src/                     # Source files
  │   ├── assets/              # Static assets like images, icons, etc.
  │   ├── components/          # Reusable components
  │   ├── pages/               # Pages for routing
  │   ├── App.jsx              # Main app component
  │   ├── index.css            # Global CSS styles
  │   └── main.jsx             # Entry point for React app
  ├── .gitignore               # Git ignore file
  ├── index.html               # Main HTML file for the project
  ├── package.json             # Project dependencies and scripts
  ├── pwa-assets.config.js     # Configuration for PWA assets
  ├── vercel.json              # Vercel deployment configuration
  ├── vite.config.js           # Vite build configuration
  └── README.md                # Project overview and setup instructions
```

## 🎨 Design System
- **Color Palette**: Accessible contrast ratios with WCAG AA compliance
- **Typography**: System fonts stack with dynamic scaling
- **Spacing**: 8px baseline grid system
- **Breakpoints**: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)

## 🌐 Deployment
Automatically deployed via Vercel/GitHub Actions:
1. Push to `main` branch triggers build
2. Zero-downtime deployment with rollback capability
3. Cache-optimized static asset delivery

## 📄 License
MIT Licensed - See [LICENSE](LICENSE) for full details.