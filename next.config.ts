// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Bật chế độ strict của React
  experimental: {
    disableOptimizedLoading: true, // Tắt tối ưu hóa tải trang
  },
  webpack(config, { isServer }) {
    // Cấu hình webpack để hỗ trợ Tailwind CSS
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // Giải quyết vấn đề với fs (FileSystem) khi build client-side
    }
    return config;
  },
};

export default nextConfig;
