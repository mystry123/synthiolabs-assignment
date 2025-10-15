# SynthioLabs Chat Interface

A modern, responsive chat interface application built for SynthioLabs, featuring multi-tab navigation and real-time messaging capabilities for medical professionals.

## 🚀 Features

- **Multi-Tab Navigation**: Dashboard, Insights, Transcript, and Chat sections
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Professional Chat Interface**: Designed for medical professionals and clinical researchers
- **Auto-scroll Messaging**: Automatic scroll to latest messages
- **Modern UI**: Clean design with gradient backgrounds and smooth animations
- **TypeScript Support**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with custom gradients and animations
- **UI Components**:
  - Radix UI primitives (dropdowns, tabs)
  - shadcn/ui component library
  - Lucide React icons
- **State Management**: Zustand for lightweight state management
- **Development**: ESLint for code quality and consistency

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd SynthioLabs-assignment
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Start the development server:

```bash
pnpm run dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Features Overview

### Chat Interface

- **User List**: Sidebar showing medical professionals with their roles and online status
- **Message History**: Real-time chat messages with timestamps
- **Responsive Layout**: Seamless mobile and desktop experience
- **Auto-selection**: Automatically selects first user on large screens

### Navigation

- **Multi-tab Interface**: Easy switching between different application sections
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Active State**: Visual indicators for current section

### Design System

- **Custom Gradients**: Beautiful background gradients using SVG assets
- **Consistent Spacing**: TailwindCSS utility classes for consistent design
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## 📊 Performance

The application has been optimized for performance and accessibility, achieving excellent Lighthouse scores:

![Lighthouse Results](https://cdn2.gro.care/abfd0c071f6a_1760571308041.png)

- **Performance**: 96/100
- **Accessibility**: 85/100
- **Best Practices**: 96/100
- **SEO**: 91/100

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking

## 🎨 Customization

The application uses TailwindCSS for styling. You can customize the design by:

1. Modifying the `tailwind.config.ts` file
2. Updating CSS custom properties in `src/index.css`
3. Editing component-specific styles in individual components

## 🔧 Design Assumptions & Trade-offs

### **Background Gradients**

- **Assumption**: Used SVG gradient image (`/assets/gradient.svg`) instead of CSS gradients
- **Reason**: No specific color specifications were provided in the design requirements
- **Trade-off**: SVG approach provides more design flexibility but requires additional asset management
- **Alternative**: Could use CSS `radial-gradient()` with custom colors if specifications are provided

### **Icon System**

- **Choice**: Lucide React icons throughout the application
- **Reason**: Consistent, lightweight, and tree-shakeable icon library
- **Trade-off**: Avoided custom SVG icons to maintain consistency and reduce bundle size
- **Benefits**: Better performance, accessibility, and easier maintenance

### **Navigation Tab Background**

- **Implementation**: Used `bg-[#F6F6F6]/70` instead of `bg-[#FFFFFF]/80`
- **Reason**: Better visibility and contrast against the gradient background
- **Issue**: White background (`#FFFFFF/80`) was not visible enough against the light gradient
- **Solution**: Switched to light gray with 70% opacity for better visual hierarchy

### **Responsive Design**

- **Approach**: Mobile-first design with progressive enhancement
- **Assumption**: Primary usage on both mobile and desktop devices
- **Trade-off**: Slightly more complex CSS but better user experience across devices

### **Mock Data**

- **Implementation**: Hardcoded medical professional data for demonstration
- **Assumption**: Real API integration will replace mock data in production
- **Trade-off**: Faster development but requires future refactoring for real data sources
