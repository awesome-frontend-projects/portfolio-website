"use client";
import { navItems } from "@/data/data";
import { RiCloseLine } from "@remixicon/react";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full py-5 fixed z-40 bg-neutral-900 border-b border-neutral-800">
      <div className="container flex items-center justify-between">
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          <button
            className="fixed top-10 right-10 ring ring-neutral-700"
            aria-label="open menu"
            onClick={handleClick}
          >
            <RiCloseLine size={30} />
          </button>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`block `}
                  onClick={handleClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Lg menu */}
        <ul className="max-lg:hidden flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* menu icon */}
        <button className="grid gap-2 lg:hidden" onClick={handleClick}>
          <span className="block bg-neutral-50 w-7 h-[1px]"></span>
          <span className="block bg-neutral-50 w-7 h-[1px]"></span>
        </button>
      </div>
    </header>
  );
}
