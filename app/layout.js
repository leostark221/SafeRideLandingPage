import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://saferride.org'),
  title: {
    default: 'Safe Ride — Get home safe, and let the people who matter know it',
    template: '%s · Safe Ride',
  },
  description:
    "Safe Ride is a personal-safety app. Share your live location with people you trust, send an instant SOS, and set safety check-ins so someone always knows you're okay.",
  keywords: [
    'personal safety app',
    'live location sharing',
    'SOS app',
    'safety check-in',
    'walk home safe',
    'location tracker for family',
    'trusted contacts',
    'night safety',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Safe Ride',
    url: 'https://saferride.org/',
    title: 'Safe Ride — Get home safe, and let the people who matter know it',
    description:
      "Share your live location with people you trust, send an instant SOS, and set safety check-ins so someone always knows you're okay.",
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Safe Ride' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safe Ride — Get home safe, and let the people who matter know it',
    description:
      'Live location sharing, one-tap SOS, and safety check-ins with the people you trust.',
    images: ['/og-image.png'],
  },
};

export const viewport = {
  themeColor: '#211f1f',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
