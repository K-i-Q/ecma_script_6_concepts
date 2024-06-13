import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcmaScript 6",
  description: "EcmaScript Concepts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body className={inter.className}>
      <nav className="bg-yellow-800 p-3">
          <ul className="flex space-x-2 justify-between text-white">
            <li><a href='/'>Home</a></li>
            <li><a href='/desestruturacao-objeto'>Object Destructuring</a></li>
            <li><a href='/desestruturacao-lista'>Array Destructuring</a></li>
            <li><a href='/arrow-function'>Arrow Function</a></li>
            <li><a href='/template-literals'>Template Literals</a></li>
            <li><a href='/spread-operator'>Spread Operator</a></li>
            <li><a href='/rest-operator'>Rest Operator</a></li>
            <li><a href='/default-parameter'>Default Parameter</a></li>
          </ul>
        </nav>
        {children}</body>
    </html>
  );
}
