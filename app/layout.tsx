import type { Metadata } from "next";
import "@/styles/globals.css";
import { fontSans, fontSerif, fontDisplay } from "@/lib/fonts";

import { Navigation } from "@/layouts/navigation";
import { personalInfo } from "@/features/home/constants";
import ClientShell from "@/layouts/main/ClientShell";
import MuiProvider from "@/lib/MuiProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://heitclieff.github.io'), // Replace with your actual domain
  title: {
    default: personalInfo.subname,
    template: `%s | ${personalInfo.subname}`,
  },
  description: personalInfo.roles,
  openGraph: {
    title: personalInfo.name,
    description: personalInfo.roles,
    url: 'https://heitclieff.github.io',
    siteName: personalInfo.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: personalInfo.name,
    description: personalInfo.roles,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`min-h-screen font-sans antialiased ${fontSans.variable} ${fontSerif.variable} ${fontDisplay.variable}`}
      >
        <MuiProvider>
          <Navigation />

          <main className="mx-auto max-w-6xl px-6 pt-24 md:px-12">
            <ClientShell>
              {children}
            </ClientShell>
          </main>
        </MuiProvider>
      </body>
    </html>
  );
}
