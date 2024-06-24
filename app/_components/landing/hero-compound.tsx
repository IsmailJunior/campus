'use client';
import { type FC } from 'react';
import { useHeroBlocks } from '@/app/_hooks/use-hero-blocks.hooks';
import { Hero } from '@/app/_components/landing/hero';

export const HeroCompound: FC<{locale: string}> = ({locale}) =>
{
	const { isLoading, data } = useHeroBlocks(locale);
	if(isLoading) return <p>Loading...</p>
	const { blocks } = data;
	return (
		<>
		<section className='relative space-y-4'>
			{ blocks.map( ( block:any ) => (
				<Hero key={block.id} data={block}/>
			))}
			</section>
		</>
	)
}