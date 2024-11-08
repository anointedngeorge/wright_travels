/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {hostname: "wrightgatewaytravels.com"},
        {hostname: "127.0.0.1"},
      ]  
    },
   
};

export default nextConfig;
