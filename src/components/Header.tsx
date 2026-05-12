import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-cream border-b border-brand-graphite/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">

          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Mysha Foods Logo"
            width={80}
            height={80}
            className="object-contain"
          />

          <span className="text-xl font-bold text-brand-charcoal tracking-tight">
            MYSHA FOODS
          </span>

        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-brand-graphite hover:text-brand-saffron transition-colors">
            Home
          </Link>

          <Link href="/products" className="text-sm font-medium text-brand-graphite hover:text-brand-saffron transition-colors">
            Products
          </Link>

          <Link href="/about" className="text-sm font-medium text-brand-graphite hover:text-brand-saffron transition-colors">
            About
          </Link>

          <Link href="/contact" className="text-sm font-medium text-brand-graphite hover:text-brand-saffron transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-brand-charcoal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

      </div>
    </header>
  );
}