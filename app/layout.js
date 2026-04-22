import './globals.css';

export const metadata = {
  title: 'Realtime Chat App with Ably, NextJS and Vercel',
  description: 'A demo chat application with Next.js using Ably Chat',
  icons: {
    icon: { url: 'https://static.ably.dev/motif-red.svg?nextjs-vercel', type: 'image/svg+xml' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
