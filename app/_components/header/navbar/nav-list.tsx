import type { FC } from 'react';
import { NavListType } from '@/app/_types/navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { listVariant } from '@/app/_variants/navbar.variants';
import { cn } from '@/app/_lib/utils';

const NavList: FC<NavListType> = ( { children, className, isDropdownOpened, ...props} ) =>
{
    return (
        <AnimatePresence>
            {isDropdownOpened && (
                <motion.ul
                    className={ cn( 'space-y-12', className ) }
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={ listVariant } { ...props }>
                    {children}
                </motion.ul>
            )}
        </AnimatePresence>
    );
};

export { NavList };