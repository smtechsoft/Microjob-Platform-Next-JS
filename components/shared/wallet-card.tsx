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
      "relative w-full h-[220px] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#006D44] via-[#006D44] to-[#910A2D] text-white transition-all duration-300",
      className
    )}>
      {/* 1. Background Visuals (Shapes and Icons) */}
      <div className="absolute top-4 right-4 w-24 h-24 bg-white/5 rounded-[20px] -rotate-12 transform translate-x-4 -translate-y-4" />
      <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-[14px] flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 blur-lg rounded-full" />
          <Wifi className="size-4 text-white/80 rotate-90" />
        </div>
      </div>

      {/* 2. Background Wallet Icon (Reduced size as requested) */}
      <div className="absolute -bottom-6 -left-6 opacity-[0.06] pointer-events-none z-0">
        <Wallet className="size-48 rotate-12" strokeWidth={0.5} />
      </div>

      {/* Content Layer */}
      <div className="relative h-full w-full p-6 flex flex-col justify-between z-10">
        {/* Top Section: Main Balance */}
        <div className="space-y-4 pt-2">
          <div className="space-y-0.5">
            <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest leading-none">Wallet Balance</p>
            <motion.h3 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-black tracking-tight flex items-baseline leading-none mt-1"
            >
              <span className="text-lg mr-0.5 opacity-80">৳</span>
              {balance}
            </motion.h3>
          </div>
        </div>

        {/* Bottom Section: Sub Stats */}
        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
          <div className="space-y-0.5">
            <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Pending</p>
            <div className="flex items-center text-lg font-bold tracking-tight leading-none mt-0.5">
               <span className="text-xs mr-0.5 opacity-50">৳</span>
               {pending}
            </div>
          </div>
          <div className="space-y-0.5 text-right">
            <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">Withdrawable</p>
            <div className="flex items-center justify-end text-lg font-bold tracking-tight leading-none mt-0.5">
               <span className="text-xs mr-0.5 opacity-50">৳</span>
               {withdrawable}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
