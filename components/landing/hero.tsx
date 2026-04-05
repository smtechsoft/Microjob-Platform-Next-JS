"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, CheckCircle, Zap, Shield, Target } from "lucide-react"

import { Button } from "@/components/shared/ui/button"
import { Badge } from "@/components/shared/ui/badge"

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20 pointer-events-none">
        <div className="size-[500px] rounded-full bg-primary" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 blur-3xl opacity-10 pointer-events-none">
        <div className="size-[400px] rounded-full bg-secondary" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
             <Badge className="bg-primary/10 text-primary border-none px-4 py-1 rounded-full uppercase text-[10px] font-black tracking-widest shadow-sm">
                Now Live: Payouts 2.0
             </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-[#0a0a0a]! dark:text-white!"
          >
            Turn Your Skills Into <br /><span className="text-emerald-800! dark:text-primary! italic">Instant Earnings.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg text-[#2a2a2a] dark:text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
          >
            The world's most transparent microjob platform. Whether you're a freelancer looking for tasks or an agency managing thousands, we provide the tools to scale your success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button size="lg" className="h-14 px-10 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-primary/30 group w-full sm:w-auto" asChild>
              <Link href="/auth/register">
                Start Earning Now
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 rounded-2xl border-border shadow-sm text-[11px] font-black uppercase tracking-widest text-foreground hover:bg-muted/10 w-full sm:w-auto" asChild>
               <Link href="/#agencies">Manage Agency</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/40"
          >
            {[
              { label: "Secured", icon: Shield },
              { label: "Fast Payout", icon: Zap },
              { label: "Verified", icon: CheckCircle },
              { label: "Targeted", icon: Target },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 group">
                 <item.icon className="size-4 text-primary group-hover:scale-110 transition-transform" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex-1 w-full max-w-2xl relative"
        >
          <div className="relative rounded-[2.5rem] bg-zinc-100 dark:bg-card border border-border/40 shadow-2xl overflow-hidden aspect-[4/3] ring-1 ring-black/5 dark:ring-white/5">
             <img 
                src="/landing/hero-preview.png" 
                alt="MicroJob Analytics Preview" 
                className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 p-4 rounded-2xl bg-card border border-border/40 shadow-2xl z-20 backdrop-blur-md"
          >
             <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                   <Zap className="size-4" />
                </div>
                <div>
                   <p className="text-[9px] font-black uppercase text-zinc-500 dark:text-muted-foreground leading-none italic">Live Analytics</p>
                   <p className="text-xs font-black text-[#0a0a0a] dark:text-white mt-1">+$1,420.50</p>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
