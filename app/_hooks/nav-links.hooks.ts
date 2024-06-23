'use client';
import { useTranslation } from 'react-i18next';

import
{
	black,
	campus,
	focus,
	about,
	visit,
	news,
	lectures,
	tutors,
	quality,
	calendar,
	library,
	instructions,
	metrics,
	development,
	links,
	jobs
} from '@/app/_lib/constants';
	
const useNavLinks = () =>
{
	const { t } = useTranslation();
	const navLinks = [
	{
		id: 1,
		displayName: t('common:academicsNavLink', {returnObjects: true}),
		href: '/#',
		list: t( 'common:academicsNavLink', { returnObjects: true } ),
		backgroundImage: black.src
	},
	{
		id: 2,
		displayName: t('common:campusNavLink', {returnObjects: true}),
		href: '/#',
		list: t( 'common:campusNavLink', { returnObjects: true } ),
		backgroundImage: campus.src
	},
	{
		id: 3,
		displayName: t('common:inFocusNavLink', {returnObjects: true}),
		href: '/#',
		list: t( 'common:inFocusNavLink', { returnObjects: true } ),
		backgroundImage: focus.src
	},
	{
		id: 4,
		displayName: t('common:visitNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:visitNavLink', {returnObjects: true}),
		backgroundImage: visit.src
	},
	{
		id: 5,
		displayName: t('common:aboutNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:aboutNavLink', {returnObjects: true}),
		backgroundImage: about.src
	},
	{
		id: 6,
		displayName: t('common:newsNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:newsNavLink', {returnObjects: true}),
		backgroundImage: news.src
	},
	{
		id: 7,
		displayName: t('common:lecturesNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:lecturesNavLink', {returnObjects: true}),
		backgroundImage: lectures.src
	},
	{
		id: 8,
		displayName: t('common:tutorsNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:tutorsNavLink', {returnObjects: true}),
		backgroundImage: tutors.src
	},
	{
		id: 9,
		displayName: t('common:qualityDivisionNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:qualityDivisionNavLink', {returnObjects: true}),
		backgroundImage: quality.src
	},
	{
		id: 10,
		displayName: t('common:academicCalendarNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:academicCalendarNavLink', {returnObjects: true}),
		backgroundImage: calendar.src
	},
	{
		id: 11,
		displayName: t('common:libraryNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:libraryNavLink', {returnObjects: true}),
		backgroundImage: library.src
	},
	{
		id: 12,
		displayName: t('common:instructionsNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:instructionsNavLink', {returnObjects: true}),
		backgroundImage: instructions.src
	},
	{
		id: 13,
		displayName: t('common:metricsNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:metricsNavLink', {returnObjects: true}),
		backgroundImage: metrics.src
	},
	{
		id: 14,
		displayName: t('common:sustainableDevelopmentNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:sustainableDevelopmentNavLink', {returnObjects: true}),
		backgroundImage: development.src
	},
	{
		id: 15,
		displayName: t('common:jobsNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:jobsNavLink', {returnObjects: true}),
		backgroundImage: jobs.src
	},
	{
		id: 16,
		displayName: t('common:academicLinksNavLink', {returnObjects: true}),
		href: '/#',
		list: t('common:academicLinksNavLink', {returnObjects: true}),
		backgroundImage: links.src
	},
	]
	
	return { navLinks };
};

export {useNavLinks};