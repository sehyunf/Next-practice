import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next project",
  description: "재밌게 공부하는 Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
