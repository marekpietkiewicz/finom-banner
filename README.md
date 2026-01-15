# Marketing Banner

A high-performance, responsive, and pixel-perfect marketing banner component built with React 19, TypeScript, and Vite. This project implements a brand-specific design featuring flexible grid layouts, localized content, and comprehensive test coverage.

## 🚀 Key Features

- **Pixel-Perfect Design**: Implemented according to strict brand guidelines (Poppins font, specific hex codes, and precise spacing).
- **Fully Responsive**: Optimized for viewport widths from 320px to 700px+, with custom breakpoints at 360px and 600px.
- **Micro-Interactions**: Smooth hover animations for primary buttons and text links.
- **CSS Grid Layout**: Advanced layout management for vertical centering and complex positioning.
- **Localization (i18n)**: Centralized text management in [src/i18n](src/i18n/index.ts).
- **Close Functionality**: Integrated state management in [App.tsx](src/App.tsx) to dismiss and restore the banner.
- **Robust Testing**: 49 unit tests covering all components and interactions.

## 🛠 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript 5
- **Styling**: CSS Modules
- **Testing**: Vitest + React Testing Library
- **Package Manager**: pnpm

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and [pnpm](https://pnpm.io/) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd finom-banner
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Start the development server with HMR:

```bash
pnpm dev
```

### Testing

Run the full test suite (49 tests):

```bash
pnpm test
```

_Note: Experimental Node warnings are suppressed in the test script for a cleaner output._

### Production Build

Create an optimized production build:

```bash
pnpm build
```

Preview the build locally:

```bash
pnpm preview
```

## 🏗 Project Structure

- [src/components/Banner](src/components/Banner/Banner.tsx): Core banner component and its grid styling.
- [src/components/ui](src/components/ui): Reusable atomic UI components (Button, Link, CheckList, etc.).
- [src/i18n](src/i18n/index.ts): Central source for all localized strings.
- [src/assets](src/assets): Image and graphic assets.

## 🎨 Design Constraints

- **Mobile View**: Max-width of 335px with a 295px internal content area.
- **Desktop View**: Scaled to 700px with a side-by-side feature list.
- **Typography**: Poppins (600 for titles, 500 for links/lists, 400 for body).
