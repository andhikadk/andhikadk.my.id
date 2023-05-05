import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Andhika Dwi Khalisyahputra',
  description: 'Personal website of Andhika Dwi Khalisyahputra',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src='https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js'></script>
      </head>
      <body className={inter.className}>
        <Header />
        <main className='layout'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
