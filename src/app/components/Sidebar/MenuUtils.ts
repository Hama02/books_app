import React from "react";
import { ExploreIcon, HomeIcon } from "../svgs";

interface Menu {
  href: string;
  label: string;
  active: boolean;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export function getMenuList(pathname: string): Menu[] {
  return [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
      icon: HomeIcon,
    },
    {
      href: "/explore",
      label: "Explore",
      active: pathname.includes("/explore"),
      icon: ExploreIcon,
    },
  ];
}
