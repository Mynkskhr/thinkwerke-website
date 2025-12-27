// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thinkwerke.com"),
  title: {
    default: "Thinkwerke — Security, Cloud & Compliance Engineering",
    template: "%s",
  },
  description:
    "Security & Compliance Engineering for EU-regulated cloud: ISO 27001, NIS2, CRA, DORA, GDPR into secure-by-design AWS architectures and audit-ready evidence.",
  openGraph: {
    title: "Thinkwerke",
    description:
      "Security & Compliance Engineering for EU-regulated cloud: ISO 27001, NIS2, CRA, DORA, GDPR.",
    url: "https://www.thinkwerke.com",
    siteName: "Thinkwerke",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0f16] text-white">
        <div className="mx-auto max-w-5xl px-5">{children}</div>
      </body>
    </html>
  );
}

