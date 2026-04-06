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
      const converted = (parseFloat(val) / 120).toFixed(2);
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
        "relative h-[220px] w-full rounded-xl overflow-hidden cursor-pointer select-none group",
        "bg-gradient-to-br from-primary via-primary/90 to-primary/80",
        "shadow-none border border-primary/20",
        className
      )}
      onClick={onToggleCurrency}
    >
      {/* Visual Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16 blur-3xl" />
      </div>

      <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
         <div className="size-10 rounded-lg border-2 border-white/40 flex items-center justify-center font-black text-xs text-white">VISA</div>
      </div>

      {/* Content Layer */}
      <div className="relative h-full w-full p-7 flex flex-col justify-between z-10">
        {/* Top Section: Main Balance */}
        <div className="space-y-4 pt-4">
          <div className="space-y-1">
            <p className="text-[11px] font-bold text-white/70 uppercase tracking-widest leading-none">Total Balance ({currency})</p>
            <motion.h3 
              key={currency}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-black tracking-tight flex items-baseline leading-none mt-2 text-white"
            >
              <span className="text-2xl mr-1.5 opacity-80 font-bold">{symbol}</span>
              {formatValue(balance)}
            </motion.h3>
          </div>
        </div>

        {/* Bottom Section: Sub Stats */}
        <div className="flex items-end justify-between pt-6">
          <div className="space-y-0.5">
            <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none text-white">Pending</p>
            <div className="flex items-center text-xl font-bold tracking-tight leading-none mt-1 text-white">
               <span className="text-sm mr-1 opacity-60">{symbol}</span>
               {formatValue(pending)}
            </div>
          </div>
          <div className="space-y-0.5 text-right">
            <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none text-white">Withdrawable</p>
            <div className="flex items-center justify-end text-xl font-bold tracking-tight leading-none mt-1 text-white">
               <span className="text-sm mr-1 opacity-60">{symbol}</span>
               {formatValue(withdrawable)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
