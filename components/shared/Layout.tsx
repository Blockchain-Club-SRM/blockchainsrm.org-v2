import React, { ReactNode } from "react";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="max-w-screen-2xl px-2 sm:px-10 md:px-32 lg:px-40">
      {children && children}
    </div>
  );
};

export default Layout;
