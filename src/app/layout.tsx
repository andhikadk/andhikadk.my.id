import { Inter } from 'next/font/google';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

import 'react-tooltip/dist/react-tooltip.css';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Andhika Dwi Khalisyahputra',
  description:
    'Personal website to showcase projects and notes of Andhika Dwi Khalisyahputra',
  applicationName: 'Andhika Dwi Khalisyahputra',
  authors: [
    {
      name: 'Andhika Dwi Khalisyahputra',
      url: 'https://andhikadk.my.id',
    },
  ],
  themeColor: '#121212',
  colorScheme: 'dark',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='m7lGRNXJFN7Jsop0QAF788EsnM97RXKHI7ncL142K90'
        />
      </head>
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
