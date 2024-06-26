import { privacy } from '#site/content';
import { type NextPage, type Metadata } from 'next';
import { MDXContent } from '@/app/_components/shared/mdx-components';
export const metadata: Metadata =  {
	title: 'Your Privacy',
	description: 'Your Privacy matter.'
}

const PrivacyPage: NextPage = () =>
{
	return (
		<article className='prose p-12'>
			<header>
				<h1>{privacy.title}</h1>
			</header>
			<MDXContent content={ privacy.content } />
			<footer>
				<strong>Last time updated: </strong><span>{privacy.date}</span>
			</footer>
		</article>
	)
};

export default PrivacyPage;