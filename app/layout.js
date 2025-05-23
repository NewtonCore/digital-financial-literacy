import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Newton Academy | Empowering Women",
  description: "Empowering women in Africa through digital entrepreneurship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}