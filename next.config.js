/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["server.ishtiuq.com"], // Add your image server domain here
	},
};

module.exports = nextConfig;
