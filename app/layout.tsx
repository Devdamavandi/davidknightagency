import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "David Knight Agency",
  description: "Web development agency helping brands and businesses launch online stores.",
  icons: {
    icon: "/logo-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
