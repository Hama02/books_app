"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getMenuList } from "./MenuUtils";
import { cn } from "@/utils/clsx";
import React from "react";

export function Menu() {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <>
      <nav className="mt-11 h-full w-full">
        <ul className="flex flex-col items-start space-y-10 px-2">
          {menuList.map(({ href, label, icon: Icon, active }, index) => (
            <div className={cn("mx-3 w-full")} key={index}>
              <Link href={href} className="flex items-center">
                <Icon
                  className={cn(active ? "fill-[#4B97F1]" : "fill-[#6C6C6C]")}
                />
                <p className={cn(active ? "text-[#4B97F1]" : "text-[#6C6C6C]")}>
                  {label}
                </p>
              </Link>
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
}
