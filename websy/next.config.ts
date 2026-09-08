import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.chatbase.co https://assets.calendly.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.chatbase.co https://assets.calendly.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.chatbase.co https://*.chatbase.co https://assets.calendly.com; connect-src 'self' https://formsubmit.co https://www.chatbase.co https://*.chatbase.co https://calendly.com https://assets.calendly.com; frame-src https://www.chatbase.co https://*.chatbase.co https://calendly.com; form-action 'self' https://formsubmit.co; base-uri 'self'; frame-ancestors 'none'; object-src 'none'" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
