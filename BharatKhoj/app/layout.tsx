import type { Metadata } from 'next';
import { Inter, Cinzel } from 'next/font/google';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'BharatKhoj — Explore the Past. Experience the Legacy.',
  description:
    'An immersive cultural and historical exploration of India — civilizations, monuments, traditional toys, art forms, and heritage games.',
  keywords: ['BharatKhoj', 'India', 'culture', 'history', 'heritage', 'interactive', 'education'],
  openGraph: {
    title: 'BharatKhoj',
    description: "Explore India's rich civilization through interactive cultural experiences.",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="font-body bg-bharatCream text-bharatDark antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#FDF6EE',
              color: '#1A0F08',
              border: '1px solid #E8D5BC',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.875rem',
            },
          }}
        />
      </body>
    </html>
  );
}
