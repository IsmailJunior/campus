import {Kufam, Amiri} from 'next/font/google'

export const kufam = Kufam(
	{
		subsets: [ 'arabic', 'latin' ],
		display: 'swap',
		weight: ['400','500','600']
	}
);

export const amiri = Amiri( {
	subsets: [ 'arabic', 'latin' ],
	display: 'swap',
	weight: ['400','700']
})
