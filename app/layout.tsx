import type { Metadata } from "next";
import "@/styles/globals.css";
import { fontSans, fontSerif, fontDisplay } from "@/lib/fonts";

import { personalInfo } from "@/features/home/constants";
import MuiProvider from "@/lib/MuiProvider";
import QueryProvider from "@/lib/QueryProvider";

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
        className={`${fontSans.variable} ${fontSerif.variable} ${fontDisplay.variable}`}
        style={{ margin: 0, minHeight: '100vh' }}
      >
        <MuiProvider>
          <QueryProvider>
            {children}
          </QueryProvider>
        </MuiProvider>
      </body>
    </html>
  );
}
