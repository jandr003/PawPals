const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placedog.net" },
      { protocol: "https", hostname: "cataas.com" },
      { protocol: "https", hostname: "cdn2.thecatapi.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;