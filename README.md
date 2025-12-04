# IEEE CEDA Student Chapter - Landing Page

A high-quality, production-ready static landing page for the IEEE CEDA (Council on Electronic Design Automation) Student Chapter inauguration event at NISB (National Institute of Engineering, IEEE Student Branch).

## Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Smooth Animations**: Powered by Framer Motion for professional, eye-catching animations
- **IEEE Standards**: Follows IEEE color palette and design guidelines
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Accessibility**: WCAG compliant with keyboard navigation and ARIA labels
- **Performance Optimized**: Code splitting, lazy loading, and GPU-accelerated animations

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Production-ready animation library
- **CSS Modules** - Scoped styling

## Project Structure

```
NISB-CEDA/
├── public/
│   └── logos/          # Placeholder logo directory
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Logo header with all 5 logos
│   │   ├── LandingHero.tsx     # Initial landing with CTA
│   │   ├── CEDALogo.tsx        # Animated CEDA logo entrance
│   │   ├── AboutCEDA.tsx       # Modal with About CEDA content
│   │   ├── Opportunities.tsx  # Opportunities section with staggered animations
│   │   └── Footer.tsx          # Footer component
│   ├── styles/
│   │   ├── globals.css         # IEEE color palette, base styles
│   │   └── animations.css      # Custom animation utilities
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Adding Logos

Place your logo files in the `public/logos/` directory and update the `Header.tsx` component to reference them:

- `nisb-logo.png`
- `ieee-logo.png`
- `ceda-logo.png`
- `mysore-subsection-logo.png`
- `bangalore-section-logo.png`

## Design Specifications

### Color Palette (IEEE Standards)
- Primary: IEEE Blue `#00629B`
- Secondary: `#00AEEF` (IEEE accent)
- Background: `#FFFFFF` with subtle gradients
- Text: `#1A1A1A` (dark gray)
- Accent: `#FF6B35` (for CTAs, subtle highlights)

### Typography
- Headings: Poppins (Google Fonts)
- Body: Inter (Google Fonts)

## Animation Flow

1. **Landing Page**: Hero section with animated entrance and "Explore CEDA" button
2. **CEDA Logo**: Animated entrance with rotation and scale effects
3. **About CEDA**: Modal popup appears after logo animation
4. **Opportunities**: Staggered pop-up animations for each opportunity point

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Code splitting for optimal bundle size
- GPU-accelerated animations using `transform` and `will-change`
- Lazy loading for components
- Optimized images and assets

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Skip to main content link
- Focus indicators
- Screen reader friendly

## License

This project is created for IEEE CEDA Student Chapter - NISB.
