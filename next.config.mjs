import { build } from 'velite';

/** @type {import('next').NextConfig} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "127.0.0.1",
				port: "1337",
				pathname: "/uploads/**/*",
			},
			{
				protocol: "https",
				hostname: "placehold.co",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
	},
	// othor next config here...
	webpack: config =>
	{
		config.plugins.push( new VeliteWebpackPlugin() );
		return config;
	}
};

class VeliteWebpackPlugin
{
	static started = false;
	apply (/** @type {import('webpack').Compiler} */ compiler )
	{
		// executed three times in nextjs
		// twice for the server (nodejs / edge runtime) and once for the client
		compiler.hooks.beforeCompile.tapPromise( 'VeliteWebpackPlugin', async () =>
		{
			if ( VeliteWebpackPlugin.started ) return;
			VeliteWebpackPlugin.started = true;
			const dev = compiler.options.mode === 'development';
			await build( { watch: dev, clean: !dev } );
		} );
	}
}