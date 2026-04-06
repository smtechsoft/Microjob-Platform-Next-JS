"use client"

import Link from "next/link"
import { Wallet, Globe, Shield, Zap, Briefcase, Mail, MessageSquare } from "lucide-react"

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Find Work", href: "/register" },
      { label: "Agency Portal", href: "/register?role=agent" },
      { label: "Task Board", href: "/tasks" },
      { label: "Referral Program", href: "/referrals" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Contact Support", href: "/support" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "System Status", href: "#" },
      { label: "API Docs", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-background border-t border-border/40 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 blur-3xl opacity-10 pointer-events-none">
        <div className="size-[400px] rounded-full bg-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-4 pb-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-none group-hover:scale-105 transition-transform">
              <Wallet className="size-5" />
            </div>
            <span className="text-xl font-black tracking-tighter text-high-contrast uppercase transition-colors">
              Micro<span className="text-primary! font-black">Jobs</span>
            </span>
          </Link>
          <p className="text-xs text-muted-contrast leading-relaxed italic max-w-xs font-medium">
             Empowering freelancers and agencies globally with transparent, decentralized micro-tasking and instant payouts.
          </p>
          <div className="flex items-center gap-4 pt-4">
             {[Globe, Shield, Zap, Briefcase, Mail].map((Icon, i) => (
                <Link key={i} href="#" className="size-8 rounded-lg bg-muted/20 border border-border/40 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all">
                   <Icon className="size-4" />
                </Link>
             ))}
          </div>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title} className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-high-contrast">{group.title}</h4>
            <div className="flex flex-col gap-4">
              {group.links.map((link) => (
                <Link key={link.label} href={link.href} className="text-xs font-bold text-muted-contrast hover:text-primary dark:hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] font-black uppercase tracking-widest text-muted-contrast">
           &copy; 2026 MicroJobs Portal. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-high-contrast italic">
           <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
           System Secure & operational
        </div>
      </div>
    </footer>
  )
}
