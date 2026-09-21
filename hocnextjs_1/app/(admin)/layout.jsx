import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "./../_components/backend/Header";
import Menu from "./../_components/backend/Menu";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* <HeaderAd />
        <FooterAD /> */}

        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-slate-900 text-white p-5 border-r border-slate-800 flex flex-col">
            <Menu />
          </div>

          {/* Main */}
          <div className="flex-1 bg-gray-100">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
