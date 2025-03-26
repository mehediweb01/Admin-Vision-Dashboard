import React from "react";
import SideSection from "../components/shared/Sidebar/SideSection";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Author from "../components/Tables/Author";
import Projects from "../components/Tables/Projects";

function Tables() {
  return (
    <div className="flex items-start">
      <div className="border-r border-white/70">
        <SideSection />
      </div>
      <div className="w-full">
        <Navbar />
        <div>
          {" "}
          <Author />
        </div>
        <div className="mt-16">
          {" "}
          <Projects />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Tables;
