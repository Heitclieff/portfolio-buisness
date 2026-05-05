import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Navigation } from "@/layouts/navigation";
import { personalInfo } from "@/features/home/constants";
import ClientShell from "@/layouts/main/ClientShell";

export const metadata: Metadata = {
  title: personalInfo.name,
  description: personalInfo.roles,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={cn(
          "min-h-screen bg-zinc-950 font-sans antialiased relative z-0 overflow-x-hidden",
          fontSans.variable
        )}
      >
        <Navigation />

        <main className="max-w-[1000px] min-[870px]:pt-4 pt-[60px] m-auto p-4">
          <ClientShell>
            {children}
          </ClientShell>
        </main>

      </body>
    </html>
  );
}
