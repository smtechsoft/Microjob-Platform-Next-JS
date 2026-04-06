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
  Zap
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
      { title: "Platform Balance", value: "$124,450.00", description: "+12.5% monthly", icon: DollarSign, trend: "up", color: "bg-emerald-500/10 text-emerald-600" },
      { title: "Total Tasks", value: "842", description: "42 active now", icon: Briefcase, trend: "up", color: "bg-secondary/10 text-secondary" },
      { title: "Total Freelancers", value: "1,280", description: "+48 this week", icon: Users, trend: "up", color: "bg-emerald-500/10 text-emerald-600" },
      { title: "Success Rate", value: "98.2%", description: "+0.4% avg", icon: TrendingUp, trend: "up", color: "bg-secondary/10 text-secondary" },
    ]
  }
  if (role === "agent") {
    return [
      { title: "Agency Commission", value: "$4,250.00", description: "This month", icon: DollarSign, trend: "up", color: "bg-emerald-500/10 text-emerald-600" },
      { title: "Managed Freelancers", value: "124", description: "8 active", icon: Users, trend: "up", color: "bg-secondary/10 text-secondary" },
      { title: "Pending Reviews", value: "15", description: "Tasks to approve", icon: Clock, trend: "down", color: "bg-emerald-500/10 text-emerald-600" },
      { title: "Success Rate", value: "96.5%", description: "Team average", icon: TrendingUp, trend: "up", color: "bg-secondary/10 text-secondary" },
    ]
  }
  // Freelancer Stats: Expanded for 2x2 grid as seen in screenshot
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

  // Layout for Freelancer matches the screenshot but is responsive for desktop
  if (role === "freelancer") {
    return (
      <div className="space-y-10">
        {/* Hello Section */}
        <div className="space-y-1">
          <h2 className="text-3xl font-black tracking-tight text-foreground flex items-center gap-2">
            Hello, Sakil! <span className="animate-bounce">👋</span>
          </h2>
          <p className="text-sm font-medium text-muted-foreground italic">Let's earn some rewards today.</p>
        </div>

        {/* Top Grid: Financials & Stats */}
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
              <Button className="flex-1 h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest text-[11px] shadow-none gap-3">
                  <div className="size-6 rounded-full border-2 border-primary-foreground flex items-center justify-center font-black text-xs">+</div>
                  Deposit
              </Button>
              <Button variant="outline" className="flex-1 h-14 rounded-xl border-secondary/30 bg-secondary/5 hover:bg-secondary/10 text-secondary font-black uppercase tracking-widest text-[11px] shadow-none gap-3">
                  <Briefcase className="size-5" />
                  Withdraw
              </Button>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-black tracking-tight text-foreground uppercase tracking-widest text-[11px] opacity-60">Overview</h3>
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
                  <div className={cn("size-8 rounded-lg flex items-center justify-center", stat.color)}>
                    <stat.icon className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-foreground tracking-tight leading-none flex items-baseline">
                      {stat.title.includes("Rewards") || stat.title.includes("Earnings") ? (
                        <span className="text-sm mr-0.5 opacity-60 font-bold">{symbol}</span>
                      ) : null}
                      {stat.title.includes("Rewards") || stat.title.includes("Earnings") ? formatValue(stat.value) : stat.value}
                    </h4>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1.5 leading-none">{stat.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Quick Tasks (Full Width) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black tracking-tight text-foreground uppercase tracking-widest text-[11px] opacity-60">Quick Tasks</h3>
            <Button variant="link" className="text-xs font-black uppercase tracking-widest text-primary p-0 h-auto">View Full Task List</Button>
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
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                      <div className="flex-1 min-w-0 space-y-4">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest bg-primary/5 text-primary border-primary/20 px-3 py-0.5">
                            {task.cat}
                          </Badge>
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-50">#{task.id}</span>
                        </div>
                        <h4 className="text-lg font-black text-foreground group-hover:text-primary transition-colors leading-tight truncate">
                          {task.title}
                        </h4>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 opacity-80">
                             <Clock className="size-4 text-muted-foreground" />
                             <span className="text-xs font-bold text-muted-foreground capitalize">{task.deadline}</span>
                          </div>
                          <div className="flex items-center gap-2 opacity-80">
                             <Star className="size-4 text-amber-500 fill-amber-500" />
                             <span className="text-xs font-bold text-muted-foreground">{task.diff}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 shrink-0 border-t sm:border-t-0 border-border/40 pt-4 sm:pt-0">
                         <div className="space-y-0.5 sm:text-right">
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-50">Reward</p>
                           <h3 className="text-2xl font-black text-foreground">
                             {symbol}{formatValue(task.reward)}
                           </h3>
                         </div>
                         <Button size="lg" className="h-10 px-8 rounded-lg bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] shadow-none">
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

  // Default Dashboard for Admin/Agent
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Overview</h2>
          <p className="text-sm font-medium text-muted-foreground">Welcome back. Here is your <span className="font-bold text-primary capitalize">{role}</span> dashboard.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-lg border-border text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/20">
            Reports
          </Button>
          <Button size="sm" className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-bold uppercase tracking-wider">
            Add Task
          </Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {currentStats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="h-[220px]"
          >
            <Card className="h-full flex flex-col justify-center">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className={stat.color + " rounded-lg p-2.5"}>
                    <stat.icon className="size-5" />
                  </div>
                  {stat.trend === "up" ? (
                    <div className="text-[10px] font-bold text-emerald-600 flex items-center bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                      <ArrowUpRight className="mr-0.5 size-3" />
                      ↑
                    </div>
                  ) : stat.trend === "down" ? (
                    <div className="text-[10px] font-bold text-destructive flex items-center bg-destructive/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                      <ArrowDownRight className="mr-0.5 size-3" />
                      ↓
                    </div>
                  ) : (
                    <div className="text-[10px] font-bold text-muted-foreground flex items-center bg-muted/20 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                      Active
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-2">{stat.title}</p>
                  <h3 className="text-2xl font-black text-foreground tracking-tight leading-none">{stat.value}</h3>
                  <p className="text-[10px] text-muted-foreground font-medium mt-3 flex items-center italic leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                    {stat.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-foreground lowercase first-letter:uppercase tracking-tight">
              Platform Revenue
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              Monthly revenue overview across all services.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-t border-border/10 bg-muted/5">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative size-32">
                <div className="absolute inset-0 rounded-full border-2 border-muted border-t-primary animate-[spin_3s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border-2 border-muted border-r-secondary animate-[spin_2s_linear_infinite]" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Analytics Processing</p>
                <p className="text-[9px] text-muted-foreground italic">Visualization coming soon...</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-bold text-foreground">Recent Activity</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">Latest interactions.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary/5">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {activities.map((activity, i) => (
                <div key={i} className="flex gap-3 group items-center">
                  <div className="relative">
                    <Avatar className="size-9 border border-border/50 group-hover:border-primary/50 transition-colors">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback className="text-[10px] font-bold text-muted-foreground bg-muted/50">{activity.user[0] || 'S'}</AvatarFallback>
                    </Avatar>
                    <div className={cn(
                      "absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-card",
                      activity.status === "success" ? "bg-emerald-500" :
                        activity.status === "pending" ? "bg-amber-500" : "bg-destructive"
                    )} />
                  </div>
                  <div className="flex-1 space-y-0.5 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-foreground truncate">{activity.user}</p>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase whitespace-nowrap ml-2">{activity.time}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-tight truncate">
                      {activity.action} <span className="font-bold text-foreground/80">{activity.target}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {(role === "admin" || role === "agent") && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="cursor-pointer group">
            <CardContent className="p-5 flex items-center gap-4 h-[90px]">
              <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Users className="size-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-foreground tracking-tight">{role === "admin" ? "Agent Requests" : "Freelancer Requests"}</h4>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-70">12 pending items</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-4 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer group">
            <CardContent className="p-5 flex items-center gap-4 h-[90px]">
              <div className="size-11 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <DollarSign className="size-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-foreground tracking-tight">Payout Review</h4>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-70">$1,250 in review</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-4 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer group sm:col-span-2 lg:col-span-1">
            <CardContent className="p-5 flex items-center gap-4 h-[90px]">
              <div className="size-11 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive group-hover:scale-110 transition-transform">
                <AlertCircle className="size-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-foreground tracking-tight">Dispute Center</h4>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-70">3 active disputes</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-4 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
