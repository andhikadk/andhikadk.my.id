import { Inter } from 'next/font/google';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Andhika Dwi Khalisyahputra',
  description:
    'Personal website to showcase projects and notes of Andhika Dwi Khalisyahputra',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
        style={{
          backgroundImage: `url('/bg.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center -12px',
          backgroundSize: '64rem',
        }}>
        <Header />
        <main className='layout'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
