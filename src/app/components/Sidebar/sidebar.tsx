"use client";
import { Logs, X } from "lucide-react";
import { Menu } from "./Menu";
import { useState } from "react";
import MobileMenu from "../MobileMenu";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside
        className={
          "bg-[#FCFCFC] fixed left-0 top-0 z-20 h-screen -translate-x-full transition-[width] duration-300 ease-in-out lg:translate-x-0 w-72 border-r-2"
        }
      >
        <div className="relative flex h-full flex-col overflow-y-auto px-3 py-4 mt-11">
          <h2 className="w-full text-center text-xl">
            Wellness<b>One</b>
          </h2>

          <Menu />
        </div>
      </aside>

      <div
        className="lg:hidden flex items-center py-5 w-full px-10 md:px-20 absolute top-0 left-[-4px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <>
            <X />
            <MobileMenu />
          </>
        ) : (
          <Logs />
        )}
        <h2>Menu</h2>
      </div>
    </>
  );
}
