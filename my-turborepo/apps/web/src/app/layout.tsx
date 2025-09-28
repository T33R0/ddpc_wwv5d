import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@repo/ui/header';
import { Footer } from '@repo/ui/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'ddpc',
  description: 'stop winging it',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <div className="flex flex-col min-h-screen bg-black">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
