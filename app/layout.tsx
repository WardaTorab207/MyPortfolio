import Header from "@/components/header";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "@/lib/site-config";
import CustomCursor from "@/components/custom-cursor";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: `${siteConfig.name} | Portfolio`,
  description: `${siteConfig.name} is a ${siteConfig.role} based in ${siteConfig.location}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} ${spaceGrotesk.variable} relative pt-28 sm:pt-36`}>
        <a
          href="#main-content"
          className="absolute left-[-9999px] top-4 z-[10000] whitespace-nowrap rounded-lg bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--text-primary)] shadow-lg transition focus:left-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)]"
        >
          Skip to main content
        </a>
        <div className="animated-gradient-bg absolute inset-0 -z-20"></div>
        <div className="blob-drift-a bg-[var(--deep-navy)]/20 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[var(--ocean-blue)]/25"></div>
        <div className="blob-drift-b bg-[var(--ocean-blue)]/20 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[var(--deep-navy)]/35"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
            <CustomCursor />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
