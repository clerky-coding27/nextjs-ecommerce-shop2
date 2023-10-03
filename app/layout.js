import './globals.css';
import { Inter } from 'next/font/google';
import HeaderComponent from './HeaderComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'Shop', template: '%s | Shop' },
  description: 'This is Claras e-commerce shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <HeaderComponent className="HeaderComponent" />
        </header>
        <main>
          <div className={inter.className}>{children}</div>
        </main>
      </body>
    </html>
  );
}
