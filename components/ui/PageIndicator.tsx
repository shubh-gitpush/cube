"use client";

import { usePathname } from "next/navigation";

const PageIndicator = () => {
  const pathname = usePathname();

  const getPageLabel = (path: string): string => {
    if (path === "/") return "Home";
    if (path.includes("/typography")) return "Typography";
    if (path.includes("/colors")) return "Colors";
    if (path.includes("/about")) return "About";
    if (path.includes("/contact")) return "Contact";
    return "Page";
  };

  return (
    <div className="text-black hover:text-gray-600 cursor-pointer transition-colors">
      <span className="text-xl font-medium">{getPageLabel(pathname)} →</span>
    </div>
  );
};

export default PageIndicator;
