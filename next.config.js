module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["http2.mlstatic.com"],
  },
  experimental: {
    outputFileTracingExcludes: [
      "**caniuse-lite**",
      "**styled-jsx**",
      "**react-dom**",
      "**next**",
    ],
  },
};
