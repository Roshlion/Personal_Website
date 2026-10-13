"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "text-neutral-100"
      : "text-neutral-400 hover:text-neutral-100";
  };

  return (
    <header className="border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-sm sticky top-0 z-50">
      <Container className="py-4">
        <nav className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="hidden sm:inline font-semibold tracking-tight text-neutral-100"
          >
            Roshen Jegajeevan
          </Link>
          <div className="flex w-full items-center justify-between gap-6 text-sm sm:w-auto sm:justify-end">
            <Link href="/" className={`transition-colors ${isActive("/")}`}>
              Home
            </Link>
            <Link
              href="/resume"
              className={`transition-colors ${isActive("/resume")}`}
            >
              Resume
            </Link>
            <a
              href="https://www.linkedin.com/in/roshen-jegajeevan-a278a9205/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
