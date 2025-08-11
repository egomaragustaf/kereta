"use client";

import { Banknote, Train, Map } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import path from "path";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: <Train /> },
  { label: "Fare", href: "/fare", icon: <Banknote /> },
  { label: "Map", href: "/map", icon: <Map /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-1/2 bottom-6 -translate-x-1/2 w-[280px] border rounded-full backdrop-blur-xl shadow-xl">
      <ul className="flex w-full items-center justify-around py-5">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={cn(
                "text-muted-foreground hover:text-primary transition-colors",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}>
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
