"use client"

import { 
  Bell, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  Clock, 
  DollarSign, 
  Users, 
  MoreVertical, 
  Trash2, 
  Search, 
  Filter 
} from "lucide-react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent } from "@/components/shared/ui/card"
import { Button } from "@/components/shared/ui/button"
import { Input } from "@/components/shared/ui/input"
import { Badge } from "@/components/shared/ui/badge"
import { cn } from "@/lib/utils"

const notifications = [
  {
    id: "1",
    type: "payout",
    title: "Payout Successful",
    description: "Your withdrawal request for $1,200.00 has been processed successfully.",
    time: "2 hours ago",
    status: "unread",
    icon: DollarSign,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    id: "2",
    type: "assignment",
    title: "New Freelancer Assigned",
    description: "Elena Rodriguez has been assigned to your agency's management list.",
    time: "5 hours ago",
    status: "unread",
    icon: Users,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "3",
    type: "system",
    title: "System Maintenance",
    description: "Scheduled maintenance will occur on Sunday at 02:00 AM UTC.",
    time: "1 day ago",
    status: "read",
    icon: Info,
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    id: "4",
    type: "alert",
    title: "Unusual Activity Detected",
    description: "A withdrawal attempt was made from an unrecognized IP address.",
    time: "2 days ago",
    status: "read",
    icon: AlertCircle,
    color: "bg-destructive/10 text-destructive",
  },
  {
    id: "5",
    type: "payout",
    title: "Commission Earned",
    description: "You earned $45.00 commission from Alex Rivera's task completion.",
    time: "3 days ago",
    status: "read",
    icon: DollarSign,
    color: "bg-emerald-500/10 text-emerald-600",
  },
]

export default function AgentNotificationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Notifications"
        description="Stay updated with platform alerts and agency activity."
        actionLabel="Mark all as read"
        onAction={() => alert("All notifications marked as read.")}
      />

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
           <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search notifications..." className="pl-10 h-10 border-border/60 bg-card" />
           </div>
           <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
              <Filter className="size-4" />
           </Button>
        </div>

        <div className="grid gap-3">
          {notifications.map((notification, i) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className={cn(
                "border border-border/40 bg-card hover:bg-muted/10 transition-colors shadow-none cursor-pointer",
                notification.status === "unread" && "border-primary/20 bg-primary/2 dark:bg-primary/5"
              )}>
                <CardContent className="p-4 flex gap-4 items-start">
                   <div className={cn("size-10 rounded-lg flex items-center justify-center shrink-0", notification.color)}>
                      <notification.icon className="size-5" />
                   </div>
                   <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-4">
                         <div className="flex items-center gap-2">
                            <h4 className={cn("text-sm font-bold text-foreground", notification.status === "unread" && "text-primary")}>
                               {notification.title}
                            </h4>
                            {notification.status === "unread" && (
                               <Badge className="h-1.5 w-1.5 rounded-full p-0 bg-primary" />
                            )}
                         </div>
                         <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight whitespace-nowrap">
                            {notification.time}
                         </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1 leading-normal">
                         {notification.description}
                      </p>
                   </div>
                   <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive">
                      <Trash2 className="size-4" />
                   </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-4">
         <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary">
            Load previous notifications
         </Button>
      </div>
    </div>
  )
}
