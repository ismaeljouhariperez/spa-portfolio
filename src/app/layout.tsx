import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { languages } from '@/app/i18n/settings';
import { DarkModeProvider } from '@/contexts/DarkModeContext';
import GrainBackground from '@/components/grain';
import AnimatedCursor from "react-animated-cursor"

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams(): Promise<{ params: { lng: string } }[]> {
  return languages.map((lng) => ({ params: { lng } }));
}

interface RootLayoutProps {
  children: React.ReactNode;
    lng: string; // 'en' | 'fr'
}

export const metadata: Metadata = {
  title: 'Ismael Jouhari-Perez',
  description: 'Mon portfolio de développeur Full Stack avec Next.js'
};

const RootLayout: React.FC<RootLayoutProps> = ({ children, lng }) => {
  return (
    <html lang={lng} >
      <DarkModeProvider >
        <body className={`grain-overlay transition duration-700 ease-in-out ${inter.className}`}>
          <GrainBackground />
          {children}
        </body>
      </DarkModeProvider>
      {/* <AnimatedCursor color='255, 255, 255'/> */}
    </html>
  );
}
export default RootLayout;
