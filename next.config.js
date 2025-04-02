/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "mlrit.ac.in",
        },
        {
          protocol: "https",
          hostname: "www.piet.co.in",
        },
        {
          protocol: "https",
          hostname: "redefcorp.com",
        },
        {
          protocol: "https",
          hostname: "bestiu.edu.in",
        },
        {
          protocol: "https",
          hostname: "francisxavier.ac.in",
        },
      ],
    },
  };
  
  module.exports = nextConfig;