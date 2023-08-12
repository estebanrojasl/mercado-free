import React, { ReactNode, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

import { useState } from "react";

interface LayoutProps {
  onData?: Function;
}

const Layout: React.FC<LayoutProps> = ({ onData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(term: string) {
    setSearchTerm(term);
  }

  useEffect(() => {
    if (onData) {
      onData(searchTerm);
    }
  }, [onData, searchTerm]);

  return (
    <div className="text-base">
      <Navbar onSearch={handleSearch} />
    </div>
  );
};

export default Layout;
