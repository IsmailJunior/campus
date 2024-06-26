'use client';
import useSWR from 'swr';
import { fetcher } from '@/app/_services/service';

const useHeroBlocks = (locale: string) =>
{
	const { isLoading, error, data } = useSWR( 'home-page', (url) => fetcher(url, locale) );
	return {
		isLoading,
		error,
		data
	}
};

export { useHeroBlocks };