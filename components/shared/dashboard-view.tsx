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

const stats = [
  {
    title: "Total Balance",
    value: "$12,450.00",
    description: "+12.5% from last month",
    icon: DollarSign,
    trend: "up",
    color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
  },
  {
    title: "Active Tasks",
    value: "42",
    description: "8 pending review",
    icon: Briefcase,
    trend: "up",
    color: "bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400",
  },
  {
    title: "Total Freelancers",
    value: "1,280",
    description: "+48 this week",
    icon: Users,
    trend: "up",
    color: "bg-purple-500/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400",
  },
  {
    title: "Success Rate",
    value: "98.2%",
    description: "+0.4% from average",
    icon: TrendingUp,
    trend: "up",
    color: "bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400",
  },
]

const recentActivities = [
  {
    user: "Alex Rivera",
    action: "completed task",
    target: "Logo Design for TechStart",
    time: "2 mins ago",
    status: "success",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    user: "Sarah Chen",
    action: "submitted a proposal",
    target: "Next.js Dashboard Project",
    time: "15 mins ago",
    status: "pending",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    user: "Mike Johnson",
    action: "withdrew earnings",
    target: "$450.00",
    time: "1 hour ago",
    status: "success",
    avatar: "https://i.pravatar.cc/150?u=mike",
  },
  {
    user: "Elena Rodriguez",
    action: "reported an issue",
    target: "Payment Gateway Error",
    time: "3 hours ago",
    status: "error",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
]

export function DashboardView({ role = "admin" }: { role?: string }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Overview</h2>
          <p className="text-sm font-medium text-muted-foreground">Welcome back, John. Here is your <span className="font-bold text-primary capitalize">{role}</span> dashboard.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="rounded-lg border-border text-xs font-bold uppercase tracking-wider text-foreground">
            Reports
          </Button>
          <Button size="sm" className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm text-xs font-bold uppercase tracking-wider">
            Add Task
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <Card className="border border-border/40 bg-card shadow-sm transition-shadow hover:shadow-md">
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className={stat.color + " rounded-lg p-2"}>
                    <stat.icon className="size-5" />
                  </div>
                  {stat.trend === "up" ? (
                    <div className="text-[10px] font-bold text-emerald-600 flex items-center bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                      <ArrowUpRight className="mr-0.5 size-3" />
                      12%
                    </div>
                  ) : (
                    <div className="text-[10px] font-bold text-destructive flex items-center bg-destructive/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                      <ArrowDownRight className="mr-0.5 size-3" />
                      4%
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-foreground mt-2 tracking-tight">{stat.value}</h3>
                  <p className="text-[10px] text-muted-foreground font-medium mt-1 flex items-center italic">
                    {stat.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4 border border-border/40 bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-foreground">Platform Earnings</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">Monthly revenue overview across all services.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-t border-border/30">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative size-32">
                <div className="absolute inset-0 rounded-full border-2 border-muted border-t-primary animate-[spin_3s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border-2 border-muted border-r-secondary animate-[spin_2s_linear_infinite]" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Chart Data Processing</p>
                <p className="text-[10px] text-muted-foreground italic">Real-time visualization coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3 border border-border/40 bg-card shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold text-foreground">Activity</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">Latest platform interactions.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:bg-secondary/10">All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {recentActivities.map((activity, i) => (
                <div key={i} className="flex gap-3 group items-start">
                  <div className="relative mt-0.5">
                    <Avatar className="size-8 border border-border/50">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback className="text-[10px] font-bold text-muted-foreground">{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className={cn(
                      "absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-card",
                      activity.status === "success" ? "bg-secondary" : 
                      activity.status === "pending" ? "bg-amber-500" : "bg-destructive"
                    )} />
                  </div>
                  <div className="flex-1 space-y-0.5 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-foreground truncate">{activity.user}</p>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase whitespace-nowrap">{activity.time}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-tight truncate">
                      {activity.action} <span className="font-bold text-foreground">{activity.target}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
         <Card className="border border-border/40 bg-card hover:bg-muted/10 transition-colors cursor-pointer group">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <Users className="size-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Agent Requests</h4>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">12 pending applications</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-4 text-primary" />
              </div>
            </CardContent>
         </Card>
         <Card className="border border-border/40 bg-card hover:bg-muted/10 transition-colors cursor-pointer group">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="size-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
                <DollarSign className="size-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Payout Review</h4>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">$1,250 in review</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-4 text-secondary" />
              </div>
            </CardContent>
         </Card>
         <Card className="border border-border/40 bg-card hover:bg-muted/10 transition-colors cursor-pointer group">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="size-10 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive group-hover:scale-105 transition-transform">
                <AlertCircle className="size-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Dispute Center</h4>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">3 active disputes</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="size-4 text-destructive" />
              </div>
            </CardContent>
         </Card>
      </div>
    </div>
  )
}
