import type { Metadata } from "next";
import { dir } from 'i18next';
import { cn } from '@/app/_lib/utils';
import {i18nConfig} from '@/app/_i18n/i18nConfig';
import initTranslations from "@/app/i18n";
import {Providers} from '@/app/_providers/providers'
import { Inter, Vazirmatn as FontSans} from "next/font/google";
import { Toaster } from "@/app/_components/ui/toaster";
import { Navigation } from '@/app/_components/header/navbar/navbar';
import '@mantine/core/styles.css';
import '@/app/_styles/globals.css';

const inter = Inter( { subsets: [ "latin" ] } );
const fontSans = FontSans( {
  subsets: [ 'arabic', 'latin' ],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Al-Farahidi University',
  description: 'Official site of Al-Farahidi University',
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}
const i18Namespaces = ['common']

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: any}
}> )
{
  	const { resources } = await initTranslations(locale, i18Namespaces);
  return (
      <html lang={locale} dir={dir(locale)}>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
          <Providers resources={resources} locale={locale} namespaces={i18Namespaces}>
            <Navigation />
            <main className="my-24">
              { children }
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
