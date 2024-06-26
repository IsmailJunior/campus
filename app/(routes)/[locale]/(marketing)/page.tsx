import type { NextPage } from 'next';
import type { LocaleType } from '@/app/_types/locale';
import { i18nConfig } from '@/app/_i18n/i18nConfig';
import { HeroCompound } from '@/app/_components/landing/hero-compound';

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const Home: NextPage<LocaleType> = ({params: {locale}}) =>
{
  return (
    <HeroCompound locale={ locale } />
  );
}

export default Home;