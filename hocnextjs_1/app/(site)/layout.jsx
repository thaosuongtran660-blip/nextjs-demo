import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Menu from './../_components/Menu';


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">

      
      <body className="min-h-full flex flex-col">
        <Header></Header>
        <Menu></Menu>

        {children}

         <Footer></Footer>
      </body>
    </html>
  );
}
