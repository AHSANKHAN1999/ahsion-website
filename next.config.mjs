/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Agar future mein images kisi aur website se ayen to yahan domain add karna hoga
    remotePatterns: [],
  },
};

// Note: Yahan 'export default' use hoga, 'module.exports' nahi
export default nextConfig;