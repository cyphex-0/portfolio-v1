import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles
import { LenisProvider } from '@/components/providers';
import { SITE_CONFIG } from '@/config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-[#050505] text-white selection:bg-[#FF5C00] selection:text-white" suppressHydrationWarning>
        <div className="noise-overlay" />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
