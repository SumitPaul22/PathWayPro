"use client";
import React, { useState, useEffect } from "react";
import AppHeader from "./_components/AppHeader";
import AppFooter from "./_components/AppFooter";
import Sidebar from "./_components/sidebar";

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest("#sidebar") && !event.target.closest("#menu-btn") && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className={`${theme} flex min-h-screen bg-gray-100 dark:bg-gray-900`}>
      <Sidebar isOpen={isSidebarOpen} toggle={setIsSidebarOpen} theme={theme} />
      <div className="flex flex-col flex-1 transition-all duration-300">
        <AppHeader
          theme={theme}
          toggleTheme={toggleTheme}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="${theme} bg-gray-100 dark:bg-gray-900 p-6 md:px-16 lg:px-24 xl:px-32 pt-20">
          {React.cloneElement(children, { theme })}
        </main>
        <AppFooter />
      </div>
    </div>
  );
}

export default DashboardLayout;