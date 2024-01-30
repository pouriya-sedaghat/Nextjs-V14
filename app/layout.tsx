import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { Metadata } from 'next';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'crash course',
  description: 'Develope With Nextjs V-14'
}

const beauRivageFont = localFont({
  src: './../public/fonts/BeauRivage-Regular.woff2'
})

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`p-2`}>{children}</body>
    </html>
  );
}

export default RootLayout;