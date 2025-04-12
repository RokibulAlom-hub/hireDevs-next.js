import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";



export const metadata = {
  title: "HireDevs",
  description: "Find Your Dream Job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
