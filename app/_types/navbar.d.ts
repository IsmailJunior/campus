import type { ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

export type NavListType = HTMLMotionProps<'ul'> & {
	children: ReactNode;
	isDropdownOpened: boolean | number | null;
};

export type NavListSubItemType = HTMLMotionProps<'li'> & {
	children: ReactNode;
};

export type NavListItemType = HTMLMotionProps<'li'> & {
	children: ReactNode;
}