'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Search, Menu, XCircle } from 'lucide-react';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { motion } from 'framer-motion';
import { navbarVariant } from '@/app/_variants/navbar.variants';
import { useNavLinks } from '@/app/_hooks/nav-links.hooks';
import { useDropdown } from '@/app/_hooks/use-dropdown.hooks';
import { useNavbar } from '@/app/_hooks/use-navbar.hooks';
import { kufam } from '@/app/_fonts/fonts';
import { cn } from '@/app/_lib/utils';
import { Button } from '@/app/_components/ui/button';
import { NavList } from '@/app/_components/header/navbar/nav-list';
import { NavListItem } from '@/app/_components/header/navbar/nav-list-item';
import {NavListSubItem} from '@/app/_components/header/navbar/nav-list-sub-item';
import { Root, List, Item, Content } from '@/app/_components/ui/navigation';

const Navigation = () =>
{
	const { t } = useTranslation();
	const {navLinks} = useNavLinks();
	const {
		isDropdownOpened,
		toggleDropdown,
		onNavLinkClicked,
		list,
		listIndex,
		height,
		backgroundImage } = useDropdown();
	const { isNavbarHidden } = useNavbar();

	return (
		<motion.div
			transition={ { ease: 'easeInOut', duration: 0.2 } }
			animate={ isNavbarHidden ? 'hidden' : 'visible' }
			variants={ navbarVariant }
			className='fixed w-screen top-0 z-20 bg-background'>
			<Root className='relative'>
			<List className='my-6 px-12'>
				<Link href='/'>
					<Item>Logo</Item>
				</Link>
			</List>
			<List className='flex'>
				<Item>
					<Button>
						<Search className='mr-5 rtl:ml-5'/>
						<span>{t('common:searchButton')}</span>
					</Button>
				</Item>
				<Item>
					<Button onClick={toggleDropdown}>
						<Menu className='mr-5 rtl:ml-5'/>
						<span>{t('common:menuButton')}</span>
					</Button>
					<Content isDropdownOpend={isDropdownOpened} height={height} className='px-5 will-change-auto'>
							<div
								className='-z-10 bg-cover bg-center bg-no-repeat h-screen w-screen 
								absolute top-0 left-0 transition-background duration-300'
								style={ {
									backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0)),
								linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0)),url(${ backgroundImage })`
								} }></div>
					<div>
					<div className='z-10 flex justify-between items-center px-5'>
					<span>Logo</span>
					<button
						className='flex cursor-pointer items-center opacity-70 
						hover:opacity-100 transition-background duration-200'
						onClick={ toggleDropdown } >
					<span>{t('common:closeNavButton')}</span>
					<XCircle className='m-5' color='white' size={ 50 } strokeWidth={ 0.60 } />
					</button>
					</div>
						
					<List className='flex'>	
						<NavList
							className='text-3xl md:text-5xl m-0 list-none p-[22px] sm:w-[500px]'
							isDropdownOpened={ isDropdownOpened }>
						<ScrollShadow as='ul' className='flex flex-col w-[370px] h-[600px] py-16 space-y-6 
						md:space-y-12 snap-mandatory snap-y scroll-smooth no-scrollbar md:scrollbar'>
						{ navLinks.map( ( navLink ) => (
							<NavListItem
								onClick={ () => onNavLinkClicked( navLink.id, navLinks, navLink.backgroundImage ) }
								key={ navLink.id } className={ cn( kufam.className, 'inline w-fit text-wrap relative' ) }>
									{navLink.displayName.display}
								</NavListItem>
							))}
						</ScrollShadow>
						</NavList>
									
						<NavList
							isDropdownOpened={ listIndex }
							key={ listIndex }
							className='text-3xl md:text-2xl m-0 list-none p-[22px] sm:w-[500px]'>
							<ScrollShadow as='ul'
								className='flex flex-col w-[370px] h-[600px] py-16 space-y-6 md:space-y-8 snap-mandatory 
								snap-y scroll-smooth no-scrollbar md:scrollbar'>
							{ list.map( ( listItem ) => (
								<NavListSubItem className={ cn( kufam.className, 'inline w-fit text-wrap relative' ) }
									key={ listItem }>
									{listItem}
								</NavListSubItem>
							))}
						</ScrollShadow>
							</NavList>
						</List>
						</div>
					</Content>
				</Item>
			</List>
		</Root>
		</motion.div>	
	)
};

export {Navigation}