import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }:LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
