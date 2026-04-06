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
  AlertCircle
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
  // Freelancer Stats: Keep only Wallet Card data as requested
  return [
    { title: "Current Balance", value: "420.50", description: "Ready to withdraw", icon: Clock, trend: "neutral", color: "bg-emerald-500/10 text-emerald-600" },
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
    { user: "System", action: "payout approved", target: "$250.00", time: "1 day ago", status: "success", avatar: "" },
    { user: "TechStart", action: "approved task", target: "Landing Page", time: "2 days ago", status: "success", avatar: "https://i.pravatar.cc/150?u=tech" },
  ]
}

export function DashboardView({ role = "admin" }: { role?: string }) {
  const currentStats = getStats(role)
  const activities = getActivities(role)

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Overview</h2>
          <p className="text-sm font-medium text-muted-foreground">Welcome back. Here is your <span className="font-bold text-primary capitalize">{role}</span> dashboard.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-lg border-border text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/20">
            {role === "freelancer" ? "Withdraw" : "Reports"}
          </Button>
          <Button size="sm" className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-bold uppercase tracking-wider">
            {role === "freelancer" ? "Find Tasks" : "Add Task"}
          </Button>
        </div>
      </div>

      {/* Stats Grid - Single card for freelancers, Grid for others */}
      <div className={cn(
        "grid gap-4",
        role === "freelancer" ? "grid-cols-1 max-w-md" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      )}>
        {currentStats.map((stat, i) => (
          (role === "freelancer" && stat.title === "Current Balance") ? (
             <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="h-[220px]"
              >
                <WalletCard 
                  balance="420.50" 
                  pending="85.00" 
                  withdrawable="335.50"
                  className="h-full"
                />
              </motion.div>
          ) : (
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
          )
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-foreground lowercase first-letter:uppercase tracking-tight">
              {role === "freelancer" ? "Earnings History" : "Platform Revenue"}
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              {role === "freelancer" ? "Your personal task income across all categories." : "Monthly revenue overview across all services."}
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-t border-[#006D44]/10 bg-muted/5">
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
          {/* Quick Actions */}
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
