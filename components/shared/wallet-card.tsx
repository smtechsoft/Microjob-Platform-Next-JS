"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Wallet, Wifi } from "lucide-react"

export function WalletCard({ 
  balance, 
  pending, 
  withdrawable, 
  className,
  currency = "BDT",
  onToggleCurrency
}: { 
  balance: string, 
  pending: string, 
  withdrawable: string, 
  className?: string,
  currency?: "BDT" | "USD",
  onToggleCurrency?: () => void
}) {
  const formatValue = (val: string) => {
    if (currency === "USD") {
      const converted = (parseFloat(val.replace(/[^\d.]/g, '')) / 120).toFixed(2);
      return converted;
    }
    return val;
  };

  const symbol = currency === "BDT" ? "৳" : "$";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "relative w-full h-[220px] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#006D44] via-[#006D44] to-[#910A2D] text-white transition-all duration-300 cursor-pointer select-none group",
        className
      )}
      onClick={onToggleCurrency}
    >
      {/* 1. Background Visuals (Shapes and Icons) - RESTORED ORIGINAL */}
      <div className="absolute top-4 right-4 w-24 h-24 bg-white/5 rounded-[20px] -rotate-12 transform translate-x-4 -translate-y-4" />
      <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-[14px] flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 blur-lg rounded-full" />
          <Wifi className="size-4 text-white/80 rotate-90" />
        </div>
      </div>

      {/* 2. Background Wallet Icon - RESTORED ORIGINAL */}
      <div className="absolute -bottom-6 -left-6 opacity-[0.06] pointer-events-none z-0">
        <Wallet className="size-48 rotate-12" strokeWidth={0.5} />
      </div>

      {/* Content Layer */}
      <div className="relative h-full w-full p-7 flex flex-col justify-between z-10">
        {/* Top Section: Main Balance */}
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest leading-none">Total Balance ({currency})</p>
            <motion.h3 
              key={currency}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold tracking-tight flex items-baseline leading-none mt-1"
            >
              <span className="text-xl mr-1.5 opacity-80 font-bold">{symbol}</span>
              {formatValue(balance)}
            </motion.h3>
          </div>
        </div>

        {/* Bottom Section: Sub Stats */}
        <div className="flex items-end justify-between">
          <div className="space-y-0.5">
            <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest leading-none">Pending</p>
            <div className="flex items-center text-lg font-bold tracking-tight leading-none mt-1 text-white">
               <span className="text-sm mr-1 opacity-60 font-bold">{symbol}</span>
               {formatValue(pending)}
            </div>
          </div>
          <div className="space-y-0.5 text-right">
            <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest leading-none">Withdrawable</p>
            <div className="flex items-center justify-end text-lg font-bold tracking-tight leading-none mt-1 text-white">
               <span className="text-sm mr-1 opacity-60 font-bold">{symbol}</span>
               {formatValue(withdrawable)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
