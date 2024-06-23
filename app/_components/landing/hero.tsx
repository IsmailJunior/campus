import { type FC } from 'react';
import Link from 'next/link';
import type { HeroBlockType } from '@/app/_types/hero-block';
import { StrapiImage } from '@/app/_components/shared/strapi-image';
import { kufam } from '@/app/_fonts/fonts';
import { cn } from '@/app/_lib/utils';
import { Button } from '@/app/_components/ui/button';

export const Hero: FC<HeroBlockType> = ( {
	data:
	{
		h2: { title,
		image: { url: textImage } },
		h4,
		image: { url },
		offWhite,
		position,
		page,
		links } } ) =>
{
	return (
		<Link href={page} className={`relative h-96 flex flex-col items-center justify-center text-slate-100 ${offWhite && 'text-zinc-950'}`}>
		<div className={`absolute flex flex-col items-center justify-center left-2/4 -translate-x-2/4 text-center space-y-4 ${position === 'bottom' ? 'bottom-12' : 'top-12'}`}>
				<h1 className='text-3xl md:text-6xl font-semibold'>{ title }</h1>
				<StrapiImage
					src={ textImage }
					alt='Text Background'
					height={ 1080 }
					width={ 1920 }
					className='w-56 -z-10'
				/>
				<p className={ cn( kufam.className, 'md:text-3xl' ) }>{ h4 }</p>
				<div>
					{  links.map( ( {text, id} ) => (
						<Button size='sm' className='hover:bg-zinc-900 mx-2' key={ id }>{ text }</Button>
					) ) }
				</div>
		</div>
			<StrapiImage
				src={ url }
				alt='Background'
				height={ 1080 }
				width={ 1920 }
				className='absolute inset-0 object-cover object-top w-full h-full -z-10'
			/>
		</Link>
	)
}