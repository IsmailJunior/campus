'use client';
import type { FC, ReactNode, HTMLAttributes } from 'react';
import {type HTMLMotionProps, motion, AnimatePresence,type Variants} from 'framer-motion';
import { cn } from '@/app/_lib/utils';

type RootType = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode;
} 

const Root: FC<RootType> = ({children, className,...props}) =>
{
	return (
		<nav className={cn('w-screen h-full flex justify-between z-50', className)} {...props}>
			{children}
		</nav>
	)
};

Root.displayName = 'Root';


type ListType = HTMLMotionProps<'ul'> & {
	children: ReactNode;
}

const List: FC<ListType> = ({children, className, ...props}) =>
{
	return (
		<motion.ul className={cn('', className)} {...props}>
			{children}
		</motion.ul>
	)
}

List.displayName = 'List';

type ItemType = HTMLMotionProps<'li'> & {
	children: ReactNode;
}

const Item: FC<ItemType> = ({children, className, ...props}) =>
{
	return (
		<motion.li className={cn('',className)} {...props}>
			{children}
		</motion.li>
	)
}

Item.displayName = 'Item';

type ContentType = HTMLMotionProps<'div'> & {
	children: ReactNode;
	isDropdownOpend: boolean;
	height: number;
}

const Content: FC<ContentType> = ({children, className, isDropdownOpend, height,...props}) =>
{

	const contentVairants: Variants = {
		visible: {
			translateY: 0,
			transition: {
			duration: 0.45,
			ease: 'circInOut',
			type: 'tween'
			}
		},
		hidden: {
			transition: {
				duration: 0.45,
				ease: 'circInOut',
				type: 'tween'
			},
			translateY: -850
		}
	}
	
	return (
		<AnimatePresence>
			{ isDropdownOpend && (
				<motion.div
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={ contentVairants }
					className={ cn( 'fixed top-0 right-0 w-screen h-screen bg-zinc-950 text-white', className ) }
					{ ...props }>
			{children}
		</motion.div>
			)}
		</AnimatePresence>
	)
};

Content.displayName = 'Content';

export
{
	Root,
	List,
	Item,
	Content
}