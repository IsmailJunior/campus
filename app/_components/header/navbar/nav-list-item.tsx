import type { FC } from 'react';
import type { NavListItemType } from '@/app/_types/navbar';
import { motion } from 'framer-motion';
import {itemVariant} from '@/app/_variants/navbar.variants';
import { cn } from '@/app/_lib/utils';

const NavListItem: FC<NavListItemType> = ({children, className, ...props}) =>
{
	return (
		<motion.li { ...props }
			whileHover={ { opacity: 1 } }
			variants={ itemVariant }
			className={ cn( 'cursor-pointer', className ) }>
			{children}
		</motion.li>
	)
};

export { NavListItem };