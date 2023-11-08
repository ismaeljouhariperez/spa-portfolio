import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
// import { dir } from 'i18next';
import { languages } from './i18n/settings';

const inter = Inter({ subsets: ['latin'] });
export async function generateStaticParams(): Promise<{ params: { lng: string } }[]> {
  return languages.map((lng) => ({ params: { lng } }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string; // 'en' | 'fr'
  };
}

export const metadata: Metadata = {
  title: 'Ismael Jouhari-Perez',
  description: 'Mon portfolio de développeur Full Stack avec Next.js'
};

const RootLayout: React.FC<RootLayoutProps> = ({ children, params: { lng } }) => {
  return (
    <html lang={lng}>
    {/* <html lang={lng} dir={dir(lng) as 'ltr' | 'rtl'}> */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
export default RootLayout;
