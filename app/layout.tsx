import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fitness Tracker',
  description: 'Dein persönlicher Fitness-Tracker mit AI-Coach',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}