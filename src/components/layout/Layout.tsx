
import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import ThemeToggle from "../theme/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">
          <div className="text-right mb-2">
            <ThemeToggle />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
