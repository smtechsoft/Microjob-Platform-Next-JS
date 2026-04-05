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

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Welcome back, John! 👋</h2>
          <p className="text-muted-foreground">Here's what's happening with your platform today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl border-primary/20 hover:bg-primary/5 transition-all duration-300">
            Download Report
          </Button>
          <Button className="rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
            Create New Task
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden border-none bg-card/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`rounded-xl p-2.5 ${stat.color}`}>
                    <stat.icon className="size-6" />
                  </div>
                  {stat.trend === "up" ? (
                    <div className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
                      <ArrowUpRight className="mr-0.5 size-3" />
                      12%
                    </div>
                  ) : (
                    <div className="flex items-center text-xs font-bold text-rose-500 bg-rose-500/10 px-2 py-1 rounded-full">
                      <ArrowDownRight className="mr-0.5 size-3" />
                      4%
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-foreground mt-1">{stat.value}</h3>
                  <p className="text-xs text-muted-foreground font-medium mt-2 flex items-center">
                    <Clock className="mr-1.5 size-3" />
                    {stat.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        {/* Earnings Chart Placeholder */}
        <Card className="col-span-full md:col-span-4 border-none bg-card/40 backdrop-blur-md shadow-xl">
          <CardHeader>
            <CardTitle>Platform Earnings</CardTitle>
            <CardDescription>Monthly revenue overview across all services.</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px] flex items-center justify-center border-t border-dashed border-border/50">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative size-40 animate-pulse">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary" />
                <div className="absolute inset-4 rounded-full border-4 border-primary/10 border-r-primary/40" />
                <div className="absolute inset-8 rounded-full border-4 border-secondary/20 border-b-secondary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Chart integration pending</p>
                <p className="text-xs text-muted-foreground/60 italic">Visualizing micro-interactions and performance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-full md:col-span-3 border-none bg-card/40 backdrop-blur-md shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions on the platform.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivities.map((activity, i) => (
                <div key={i} className="flex gap-4 group cursor-default">
                  <div className="relative">
                    <Avatar className="size-10 border-2 border-background shadow-md">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className={cn(
                      "absolute -bottom-1 -right-1 size-4 rounded-full border-2 border-background flex items-center justify-center",
                      activity.status === "success" ? "bg-emerald-500" : 
                      activity.status === "pending" ? "bg-amber-500" : "bg-rose-500"
                    )}>
                      {activity.status === "success" ? <CheckCircle2 className="size-2 text-white" /> : 
                       activity.status === "pending" ? <Clock className="size-2 text-white" /> : 
                       <AlertCircle className="size-2 text-white" />}
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{activity.user}</p>
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase">{activity.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {activity.action} <span className="font-semibold text-foreground/80">{activity.target}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
         <Card className="border-none bg-gradient-to-br from-primary/10 to-primary/5 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-5">
              <div className="size-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                <Users className="size-7" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-foreground leading-tight">Agent Requests</h4>
                <p className="text-xs text-muted-foreground">12 new applications pending</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                <ArrowUpRight className="size-5 text-primary" />
              </div>
            </CardContent>
         </Card>
         <Card className="border-none bg-gradient-to-br from-secondary/20 to-secondary/10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-5">
              <div className="size-14 rounded-2xl bg-secondary/30 flex items-center justify-center text-secondary-foreground group-hover:scale-110 transition-transform duration-500">
                <DollarSign className="size-7" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-foreground leading-tight">Payout Review</h4>
                <p className="text-xs text-muted-foreground">Review $1,250 in pending payouts</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                <ArrowUpRight className="size-5 text-secondary-foreground" />
              </div>
            </CardContent>
         </Card>
         <Card className="border-none bg-gradient-to-br from-amber-500/10 to-amber-500/5 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group">
            <CardContent className="p-6 flex items-center gap-5">
              <div className="size-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-500">
                <AlertCircle className="size-7" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-foreground leading-tight">Dispute Center</h4>
                <p className="text-xs text-muted-foreground">3 active disputes need attention</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                <ArrowUpRight className="size-5 text-amber-600" />
              </div>
            </CardContent>
         </Card>
      </div>
    </div>
  )
}
