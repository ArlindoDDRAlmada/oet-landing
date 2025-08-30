import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import { ThemeProvider } from "../components/theme-provider";
import I18nextProviderComponent from "../components/i18n-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnonoTech - OET",
  description: "OnonoTech - OET, Lda",
  icons: {
    icon: "/OnonoTech.png",
    shortcut: "/OnonoTech.png",
    apple: "/OnonoTech.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <I18nextProviderComponent>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </I18nextProviderComponent>
      </body>
    </html>
  );
}
