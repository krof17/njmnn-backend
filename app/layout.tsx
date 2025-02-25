import Link from 'next/link';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NJMNN | BJJ Rashguards',
  description: 'Peak-inspired BJJ gear',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-4 bg-gray-900 border-b border-gray-700 flex justify-between text-white">
          <Link href="/" className="text-3xl font-bold">NJMNN</Link>
          <div>
            <Link href="/products" className="px-4 hover:text-orange-500">Products</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}