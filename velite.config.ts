import { defineConfig, defineCollection, s } from 'velite';

const computedFields = <T extends { slug: string;} >(data: T) => ( {
	...data,
	slugAsParams: data.slug.split('/').slice(1).join('/')
})

const privacy = defineCollection( {
	name: 'Privacy',
	single: true,
	pattern: 'pages/**/privacy/page.mdx',
	schema: s.object( {
		title: s.string().max( 50 ).min( 12 ),
		slug: s.slug(),
		path: s.path(),
		lang: s.enum(['ar','en']),
		description: s.string().max( 50 ).min( 12 ),
		date: s.isodate(),
		content: s.mdx()
	} ).transform(computedFields)
} );

export default defineConfig( {
	root: 'app/_content',
	output: {
		data: '.velite',
		assets: 'public/static',
		base: '/static/',
		name: '[name]-[hash:6].[ext]',
		clean: true
	},
	collections: {privacy}
})