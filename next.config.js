/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack(config, { nextRuntime, isServer }) {
		if (typeof nextRuntime === "undefined" || !isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				// fixes proxy-agent dependencies
				net: false,
				dns: false,
				tls: false,
				assert: false,
				// fixes next-i18next dependencies
				path: false,
				fs: false,
				// fixes mapbox dependencies
				events: false,
				// fixes sentry dependencies
				child_process: false,
			};
		}
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
};

module.exports = nextConfig;
