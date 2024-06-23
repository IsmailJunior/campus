import type {Variants} from 'framer-motion';

export const itemVariant: Variants = {
	visible: { opacity: 0.80, y: 0 },
	hidden: {opacity: 0, y: -50}
};

export const listVariant: Variants = {
	visible: {
		opacity: 0.8,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.05
		}
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		}
	}
};

export const navbarVariant: Variants = {
	visible: { y: 0 },
	hidden: {y: '-8rem'}
};

