module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["http2.mlstatic.com"],
  },
  experimental: {
    outputFileTracingIgnores: [
      "**caniuse-lite**",
      "**styled-jsx**",
      "**react-dom**",
    ],
  },
};
