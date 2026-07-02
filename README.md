# Shah Makhdum — Software & AI Engineer Portfolio

A high-performance, cinematic portfolio showcasing intelligent systems, software architecture, and AI engineering. Built with the latest modern web technologies.

![Portfolio Preview](/public/project-1.png) <!-- Update this path with an actual preview image of the portfolio -->

## ✨ Features

- **Next.js 15 App Router:** Leveraging the latest React Server Components for optimal performance and SEO.
- **Cinematic Animations:** Powered by `framer-motion` (via `motion/react`) to deliver a high-end, immersive experience.
- **Hardware-Accelerated Custom Cursor:** A sleek, custom-built cursor that interacts seamlessly with the DOM.
- **Smooth Scrolling:** Integrated `lenis` for premium, buttery-smooth scrolling dynamics.
- **Server-Optimized Images:** Full integration with `next/image` for automatic WebP/AVIF compression and layout shift prevention.
- **Secure Telemetry Form:** Fully functional contact form powered by FormSubmit (no backend required).
- **Tailwind CSS v4:** Modern styling system utilizing deep dark aesthetics and vibrant orange (`#FF5C00`) accents.

## 🚀 Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS, Tailwind Merge, CLSX
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Language:** TypeScript

## 🛠️ Getting Started

### Prerequisites

- Node.js `18.17.0` or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cyphex-0/portfolio-v1.git
   cd portfolio-v1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
.
├── app/                  # Next.js App Router (page.tsx, layout.tsx, error.tsx)
├── components/           # Reusable React components (Hero, Projects, Contact, etc.)
├── lib/                  # Utility functions (cn for Tailwind classes)
├── assets/               # Static assets and images
└── public/               # Public-facing assets
```

## 🌐 Contact Configuration

The contact form is wired to use [FormSubmit.co](https://formsubmit.co). 
If you fork this repo, simply change the email in the `fetch` request inside `components/Contact.tsx` to your own email address, then submit the form once locally and click the "Activate" link sent to your inbox to enable it.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
