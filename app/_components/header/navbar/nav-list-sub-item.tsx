import type { FC } from 'react';
import type { NavListSubItemType } from '@/app/_types/navbar';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { cn } from '@/app/_lib/utils';

const NavListSubItem : FC<NavListSubItemType> = ({className,children}) =>
{
	const {i18n: {language }} = useTranslation();
	const itemVariants = {
    visible: {opacity: 0.80, translateX: 0},
    hidden: { opacity: 0, translateX: language === 'en' ? -50 : 50}
	};

	return (
		<motion.li
			whileHover={ { opacity: 1 } }
			variants={ itemVariants }
			className={ cn( 'cursor-pointer', className ) }>
			{children}
		</motion.li>
	)
};

export { NavListSubItem };