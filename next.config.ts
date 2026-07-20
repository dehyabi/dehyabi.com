import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  allowedDevOrigins: ["192.168.123.176"],
};

export default nextConfig;
