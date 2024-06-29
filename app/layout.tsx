import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Header from "./(routes)/_components/Header/Header";
import Footer1 from "./(routes)/_components/Footer/Footer1";

const lato = Lato({subsets: ["latin"], weight:["100","300","400","700","900",] })


export const metadata: Metadata = {
  title: "Akira Studios",
  description: "Elevating Your Digital Presence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/assets/images/favicon.ico"
          type="image/ico"
          // sizes="<generated>"
        />
      </Head>
      <body className={lato.className}>
        <Header />
         {children}
        <Footer1 />
      </body>
    </html>
  );
}
