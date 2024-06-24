'use client';
import useSWR from 'swr';
import { service } from '@/app/_services/service';

const useHeroBlocks = (locale: string) =>
{
	const { isLoading, error, data } = useSWR( 'home-page', (url) => service(url, locale) );
	return {
		isLoading,
		error,
		data
	}
};

export { useHeroBlocks };