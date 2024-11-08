/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {hostname: "wrightgatewaytravels.com"},
        {hostname: "wright-travels.vercel.app"},
      ]  
    },
   
};

export default nextConfig;
