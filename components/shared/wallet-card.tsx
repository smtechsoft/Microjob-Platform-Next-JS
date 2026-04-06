"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Wallet, Wifi } from "lucide-react"

interface WalletCardProps {
  balance: string
  pending: string
  withdrawable: string
  className?: string
}

export function WalletCard({ 
  balance, 
  pending, 
  withdrawable, 
  className 
}: WalletCardProps) {
  return (
    <div className={cn(
      "relative w-full h-[220px] rounded-[32px] overflow-hidden bg-gradient-to-br from-[#006D44] via-[#006D44] to-[#910A2D] text-white shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-1",
      className
    )}>
      {/* 1. Background Visuals (Shapes and Icons) */}
      <div className="absolute top-6 right-6 w-32 h-32 bg-white/5 rounded-[24px] -rotate-12 transform translate-x-4 -translate-y-4" />
      <div className="absolute top-6 right-6 w-28 h-28 bg-white/10 rounded-[22px] flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
          <Wifi className="size-6 text-white/80 rotate-90" />
        </div>
      </div>

      {/* 2. Large Background Wallet Icon (User Request) */}
      <div className="absolute -bottom-12 -left-12 opacity-[0.07] pointer-events-none z-0">
        <Wallet className="size-72 rotate-12" strokeWidth={0.5} />
      </div>

      {/* Content Layer */}
      <div className="relative h-full w-full p-8 flex flex-col justify-between z-10">
        {/* Top Section: Main Balance */}
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-[13px] font-bold text-white/70 uppercase tracking-widest">Wallet Balance</p>
            <motion.h3 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-black tracking-tight"
            >
              <span className="text-3xl mr-1 opacity-80">৳</span>
              {balance}
            </motion.h3>
          </div>
        </div>

        {/* Bottom Section: Sub Stats (From Image Reference) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest leading-none">Pending</p>
            <div className="flex items-center text-xl font-bold tracking-tight">
               <span className="text-sm mr-0.5 opacity-60">৳</span>
               {pending}
            </div>
          </div>
          <div className="space-y-1 text-right sm:text-left sm:ml-auto">
            <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest leading-none">Withdrawable</p>
            <div className="flex items-center justify-end sm:justify-start text-xl font-bold tracking-tight">
               <span className="text-sm mr-0.5 opacity-60">৳</span>
               {withdrawable}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Interaction Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50 pointer-events-none" />
    </div>
  )
}
