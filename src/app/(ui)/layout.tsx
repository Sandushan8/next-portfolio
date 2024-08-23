import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Poppins({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
