"use client"

import * as React from "react"
import {
  TrendingUp,
  Users,
  Briefcase,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Target,
  Star,
  Zap,
  ShieldCheck,
  ClipboardList,
  Award
} from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/ui/card"
import { Button } from "@/components/shared/ui/button"
import { Badge } from "@/components/shared/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/ui/avatar"
import { cn } from "@/lib/utils"
import { WalletCard } from "@/components/shared/wallet-card"

const getStats = (role: string) => {
  if (role === "admin") {
    return [
      { title: "Total Profit", value: "45", description: "", icon: TrendingUp, trend: "up", color: "text-emerald-500 bg-emerald-500/10" },
      { title: "Task Payouts", value: "12", description: "", icon: DollarSign, trend: "up", color: "text-blue-500 bg-blue-500/10" },
      { title: "Reported Issues", value: "3", description: "", icon: AlertCircle, trend: "down", color: "text-rose-500 bg-rose-500/10" },
      { title: "New Users Today", value: "24", description: "", icon: Users, trend: "up", color: "text-purple-500 bg-purple-500/10" },
    ]
  }
  if (role === "agent") {
    return [
      { title: "Team Size", value: "12", description: "", icon: Users, trend: "up", color: "text-blue-500 bg-blue-500/10" },
      { title: "Active Users", value: "8", description: "", icon: CheckCircle2, trend: "up", color: "text-emerald-500 bg-emerald-500/10" },
      { title: "Commissions", value: "5000", description: "", icon: DollarSign, trend: "up", color: "text-rose-500 bg-rose-500/10" },
      { title: "Agent Level", value: "Silver", description: "", icon: Award, trend: "neutral", color: "text-amber-600 bg-amber-500/10" },
    ]
  }
  // Freelancer Stats
  return [
    { title: "Daily Earnings", value: "120", description: "", icon: TrendingUp, trend: "up", color: "text-emerald-500 bg-emerald-500/10" },
    { title: "Total Tasks", value: "34", description: "", icon: CheckCircle2, trend: "neutral", color: "text-blue-500 bg-blue-500/10" },
    { title: "Pending Rewards", value: "200", description: "", icon: Clock, trend: "neutral", color: "text-amber-500 bg-amber-500/10" },
    { title: "Referrals", value: "5", description: "", icon: Users, trend: "up", color: "text-purple-500 bg-purple-500/10" },
  ]
}

const getActivities = (role: string) => {
  if (role === "admin") {
    return [
      { user: "Alex Rivera", action: "completed task", target: "Logo Design", time: "2 mins ago", status: "success", avatar: "https://i.pravatar.cc/150?u=alex" },
      { user: "System", action: "payout processed", target: "$1,200.00", time: "1 hour ago", status: "success", avatar: "" },
      { user: "Sarah Chen", action: "joined agency", target: "Premier Services", time: "3 hours ago", status: "success", avatar: "https://i.pravatar.cc/150?u=sarah" },
    ]
  }
  return [
    { user: "System", action: "payout approved", target: "৳250.00", time: "1 day ago", status: "success", avatar: "" },
    { user: "TechStart", action: "approved task", target: "Landing Page", time: "2 days ago", status: "success", avatar: "https://i.pravatar.cc/150?u=tech" },
  ]
}

export function DashboardView({ role = "admin" }: { role?: string }) {
  const [currency, setCurrency] = React.useState<"BDT" | "USD">("BDT")
  const currentStats = getStats(role)
  const activities = getActivities(role)

  const toggleCurrency = () => {
    setCurrency(prev => prev === "BDT" ? "USD" : "BDT");
  };

  const formatValue = (val: string) => {
    if (currency === "USD") {
      const converted = (parseFloat(val.replace(/[^\d.]/g, '')) / 120).toFixed(2);
      return converted;
    }
    return val;
  };

  const symbol = currency === "BDT" ? "৳" : "$";

  // Shared Header for Desktop
  const Header = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="space-y-1">
      <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
        {title} <span className="animate-bounce">👋</span>
      </h2>
      <p className="text-xs font-medium text-muted-foreground italic">{subtitle}</p>
    </div>
  )

  // Layout for Admin matches the screenshot BUT WITH ORIGINAL DESIGN
  if (role === "admin") {
    return (
      <div className="space-y-8">
        <Header 
          title="Hello ADMIN, Sakil!" 
          subtitle="Platform control and system monitoring." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Platform Financials */}
          <div className="space-y-6">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-card border border-border/40 p-6 rounded-xl space-y-6 cursor-pointer select-none group"
               onClick={toggleCurrency}
            >
               <div className="flex items-center gap-2 opacity-60">
                  <TrendingUp className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">System Total Liquidity</span>
               </div>
               <motion.h3 
                  key={currency}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-3xl font-bold tracking-tight flex items-baseline leading-none text-foreground"
               >
                  <span className="text-xl mr-2 opacity-60 font-bold">{symbol}</span>
                  {currency === "USD" ? (1250500 / 120).toFixed(2) : "1,250,500.00"}
               </motion.h3>
               
               <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/40">
                  <div className="space-y-0.5">
                     <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Total Users</p>
                     <p className="text-sm font-bold text-foreground">1,240</p>
                  </div>
                  <div className="space-y-0.5">
                     <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Total Agents</p>
                     <p className="text-sm font-bold text-foreground">85</p>
                  </div>
                  <div className="space-y-0.5">
                     <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Active Tasks</p>
                     <p className="text-sm font-bold text-foreground">12</p>
                  </div>
               </div>
            </motion.div>

            {/* Admin Actions buttons row - Brand Color Match */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button className="flex-1 h-12 rounded-xl bg-[#006D44] hover:bg-[#006D44]/90 text-white font-bold uppercase tracking-widest text-[10px] shadow-none gap-2 border-0">
                   <ShieldCheck className="size-4.5" />
                   Verify Deposits
                </Button>
                <Button className="flex-1 h-12 rounded-xl bg-[#910A2D] hover:bg-[#910A2D]/90 text-white font-bold uppercase tracking-widest text-[10px] shadow-none gap-2 border-0">
                   <Zap className="size-4.5" />
                   Withdraw Requests
                </Button>
              </div>
              <Button variant="outline" className="w-full h-12 rounded-xl border-border bg-card hover:bg-muted text-foreground font-bold uppercase tracking-widest text-[10px] shadow-none gap-3">
                 <ClipboardList className="size-5" />
                 Create Global Task
              </Button>
            </div>
          </div>

          {/* Right Column: Platform Overview Grid - Standard Design */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-tight text-foreground uppercase tracking-widest opacity-60">Platform Overview</h3>
            <div className="grid grid-cols-2 gap-4">
               {currentStats.map((stat, i) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card border border-border/40 p-5 rounded-xl space-y-3 transition-colors hover:border-primary/20 cursor-pointer select-none"
                    onClick={toggleCurrency}
                  >
                    <div className={cn("size-9 rounded-lg flex items-center justify-center", stat.color)}>
                      <stat.icon className="size-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xl font-bold text-foreground tracking-tight leading-none flex items-baseline">
                        <span className="text-xs mr-1 opacity-60 font-bold">{symbol}</span>
                        {stat.title.includes("Profit") || stat.title.includes("Payouts") ? (
                          currency === "USD" ? (parseFloat(stat.value) * 1000 / 120).toFixed(0) : stat.value + "k"
                        ) : stat.value}
                      </h4>
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-none opacity-50">{stat.title}</p>
                    </div>
                  </motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Layout for Freelancer matches the screenshot BUT WITH ORIGINAL DESIGN
  if (role === "freelancer") {
    return (
      <div className="space-y-10">
        <Header 
          title="Hello, Sakil!" 
          subtitle="Let's earn some rewards today." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Financials */}
          <div className="space-y-6">
            <WalletCard 
              balance="1200.00" 
              pending="200.00" 
              withdrawable="1000.00"
              currency={currency}
              onToggleCurrency={toggleCurrency}
            />
            {/* Simple Action Buttons Row - Synced with Theme Colors */}
            <div className="flex gap-3">
              <Button className="flex-1 h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest text-[10px] shadow-none gap-3">
                  <div className="size-5 rounded-full border-2 border-primary-foreground flex items-center justify-center font-bold text-[10px]">+</div>
                  Deposit
              </Button>
              <Button variant="outline" className="flex-1 h-12 rounded-xl border-secondary/30 bg-secondary/5 hover:bg-secondary/10 text-secondary font-bold uppercase tracking-widest text-[10px] shadow-none gap-3">
                  <Briefcase className="size-4.5" />
                  Withdraw
              </Button>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-tight text-foreground uppercase tracking-widest opacity-60">Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              {currentStats.map((stat, i) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border/40 p-4 rounded-xl space-y-2 transition-colors hover:border-primary/20 cursor-pointer select-none"
                  onClick={toggleCurrency}
                >
                  <div className={cn("size-8 rounded-lg flex items-center justify-center", stat.color)}>
                    <stat.icon className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground tracking-tight leading-none flex items-baseline">
                      {stat.title.includes("Rewards") || stat.title.includes("Earnings") ? (
                        <span className="text-xs mr-0.5 opacity-60 font-bold">{symbol}</span>
                      ) : null}
                      {stat.title.includes("Rewards") || stat.title.includes("Earnings") ? formatValue(stat.value) : stat.value}
                    </h4>
                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1 leading-none">{stat.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Quick Tasks (Full Width) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold tracking-tight text-foreground uppercase tracking-widest opacity-60">Quick Tasks</h3>
            <Button variant="link" className="text-[10px] font-bold uppercase tracking-widest text-primary p-0 h-auto">View Full Task List</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: "8821", title: "Product Image Background Removal", cat: "Graphics", reward: "5.00", deadline: "24h left", diff: "Easy" },
              { id: "8819", title: "Short Video Transcription (2 mins)", cat: "Writing", reward: "12.50", deadline: "2 days left", diff: "Medium" }
            ].map((task, i) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="group border-border/40 hover:border-primary/20 transition-all bg-card shadow-none overflow-hidden cursor-pointer" onClick={toggleCurrency}>
                  <CardContent className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                      <div className="flex-1 min-w-0 space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-widest bg-primary/5 text-primary border-primary/20 px-2.5 py-0.5">
                            {task.cat}
                          </Badge>
                          <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest opacity-50">#{task.id}</span>
                        </div>
                        <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-tight truncate">
                          {task.title}
                        </h4>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 opacity-80">
                             <Clock className="size-3.5 text-muted-foreground" />
                             <span className="text-[11px] font-medium text-muted-foreground capitalize">{task.deadline}</span>
                          </div>
                          <div className="flex items-center gap-2 opacity-80">
                             <Star className="size-3.5 text-amber-500 fill-amber-500" />
                             <span className="text-[11px] font-medium text-muted-foreground">{task.diff}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 shrink-0 border-t sm:border-t-0 border-border/40 pt-4 sm:pt-0">
                         <div className="space-y-0.5 sm:text-right">
                           <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest opacity-50">Reward</p>
                           <h3 className="text-xl font-bold text-foreground">
                             {symbol}{formatValue(task.reward)}
                           </h3>
                         </div>
                         <Button size="sm" className="h-9 px-6 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-widest text-[9px] shadow-none">
                            Do Task
                         </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Layout for AGENT matches the screenshot BUT WITH ORIGINAL DESIGN
  if (role === "agent") {
    return (
      <div className="space-y-10">
        <Header 
          title="Hello AGENT, Demo!" 
          subtitle="Manage your team and track commissions." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Wallet Financials */}
          <div className="space-y-6">
            <WalletCard 
              balance="1250500.00" 
              pending="200.00" 
              withdrawable="1000.00"
              currency={currency}
              onToggleCurrency={toggleCurrency}
            />
            {/* Agent Actions Column row - Orange Pending / Outline New Agent */}
            <div className="flex gap-3">
              <Button className="flex-1 h-12 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-widest text-[10px] shadow-none gap-3 border-0">
                  <Clock className="size-5" />
                  Pending Appr.
              </Button>
              <Button variant="outline" className="flex-1 h-12 rounded-xl border-border bg-card hover:bg-muted text-foreground font-bold uppercase tracking-widest text-[10px] shadow-none gap-3">
                  <Users className="size-5" />
                  New Agent
              </Button>
            </div>
          </div>

          {/* Right Column: Performance Grid */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-tight text-foreground uppercase tracking-widest opacity-60">Agent Performance</h3>
            <div className="grid grid-cols-2 gap-4">
              {currentStats.map((stat, i) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border/40 p-4 rounded-xl space-y-2 transition-colors hover:border-primary/20 cursor-pointer select-none"
                  onClick={toggleCurrency}
                >
                  <div className={cn("size-8 rounded-lg flex items-center justify-center", stat.color)}>
                    <stat.icon className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground tracking-tight leading-none flex items-baseline">
                      {stat.title.includes("Commissions") ? (
                        <span className="text-xs mr-0.5 opacity-60 font-bold">{symbol}</span>
                      ) : null}
                      {stat.title.includes("Commissions") ? formatValue(stat.value) : stat.value}
                    </h4>
                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1 leading-none">{stat.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Wide Card for Sub-Agent Management */}
        <div className="space-y-6">
          <Card className="group border-border/40 hover:border-primary/20 transition-all bg-card shadow-none overflow-hidden cursor-pointer">
            <CardContent className="p-6">
               <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-left">
                     <h3 className="text-lg font-bold text-foreground capitalize">Manage Sub-Agents</h3>
                     <p className="text-xs text-muted-foreground">Monitor performance of your recruited agents.</p>
                  </div>
                  <Button className="h-10 px-8 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-widest text-[10px] shadow-none gap-2">
                     View Team
                  </Button>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
  return null
}
