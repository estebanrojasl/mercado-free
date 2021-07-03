import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

interface layoutProps {
  children: ReactNode;
}

const Layout: React.FC<layoutProps> = (props) => {
  return (
    <div className="text-base">
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
