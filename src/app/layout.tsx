import type { Metadata } from "next";
import "./styles/globals.css"
import { dahyun, pretendard } from "./styles/fonts";

export const metadata: Metadata = {
  title: "Next project",
  description: "재밌게 공부하는 Next.js",
  icons : {
    icon : "/assets/images/logo/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} ${dahyun.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
