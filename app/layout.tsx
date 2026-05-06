import type { Metadata } from "next";
import "@/styles/globals.css";
import { fontSans, fontSerif, fontDisplay } from "@/lib/fonts";

import { Navigation } from "@/layouts/navigation";
import { personalInfo } from "@/features/home/constants";
import ClientShell from "@/layouts/main/ClientShell";
import MuiProvider from "@/lib/MuiProvider";
import { Container } from "@mui/material";
import { BackgroundManager } from "@/components/BackgroundManager";

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
          <BackgroundManager />
          <Navigation />

          <Container
            maxWidth="lg"
            component="main"
            sx={{
              pt: { xs: 12, md: 16 },
              px: { xs: 3, md: 6 },
              minHeight: '100vh'
            }}
          >
            <ClientShell>
              {children}
            </ClientShell>
          </Container>
        </MuiProvider>
      </body>
    </html>
  );
}
