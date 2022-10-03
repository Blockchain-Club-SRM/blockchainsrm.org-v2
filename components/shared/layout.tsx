import React, { ReactNode } from "react";
import { Header, Footer } from "./";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="px-2 sm:px-10 md:px-32 lg:px-40 pt-40  min-h-screen">
      <Header />
      {children && children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
