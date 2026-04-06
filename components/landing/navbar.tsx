"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, ArrowRight, Wallet } from "lucide-react"

import { Button } from "@/components/shared/ui/button"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Explore Tasks", href: "#explore" },
  { label: "Agencies", href: "#agencies" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-border/40 py-3 shadow-none" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="size-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-none group-hover:scale-105 transition-transform">
            <Wallet className="size-5" />
          </div>
          <span className="text-xl font-black tracking-tighter text-high-contrast uppercase transition-colors">
            Micro<span className="text-primary! font-black">Jobs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-widest text-muted-contrast hover:text-primary! dark:hover:text-primary! transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" className="text-[10px] font-bold uppercase tracking-widest px-6" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-6 rounded-lg shadow-none" asChild>
            <Link href="/auth/register">
              Get Started
              <ArrowRight className="ml-2 size-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-background border-b border-border/40 overflow-hidden"
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Button variant="outline" className="w-full text-[10px] font-bold uppercase tracking-widest py-6" asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button className="w-full text-[10px] font-bold uppercase tracking-widest py-6 rounded-xl shadow-none" asChild>
              <Link href="/auth/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}
