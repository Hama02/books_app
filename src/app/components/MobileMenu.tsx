import React from "react";
import { getMenuList } from "./Sidebar/MenuUtils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/clsx";

const MobileMenu = () => {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);
  return (
    <div className="absolute w-full top-14 border-b-2 rounded-lg left-0 px-10 md:px-20 z-20 bg-white transition">
      <ul className="flex flex-col items-start px-2">
        {menuList.map(({ href, label, active }, index) => (
          <div className={cn("mx-3 w-full")} key={index}>
            <Link href={href} className="flex items-center">
              <p className={cn(active ? "text-[#4B97F1]" : "text-[#6C6C6C]")}>
                {label}
              </p>
            </Link>
          </div>
        ))}
        <p className="mx-3 w-full text-[#6C6C6C]">Log out</p>
      </ul>
    </div>
  );
};

export default MobileMenu;
