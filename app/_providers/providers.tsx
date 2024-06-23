'use client';
import type { FC } from 'react';
import type { ProvidersType } from '@/app/_types/providers';
import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';
import { MantineProvider } from '@mantine/core';
import initTranslations from '@/app/i18n';

const Providers: FC<ProvidersType> = ({children, locale ,namespaces ,resources }) =>
{
	const i18n = createInstance();
	initTranslations( locale, namespaces, i18n, resources );
	return (
		<I18nextProvider i18n={i18n}>
		<MantineProvider>
			{children}
		</MantineProvider>
		</I18nextProvider>
	)
};

export { Providers };