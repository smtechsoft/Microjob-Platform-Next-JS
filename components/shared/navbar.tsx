"use client"

import * as React from "react"
import { Bell, User, MessageSquare, Menu, X, Clock, CheckCircle2, AlertCircle, Rocket } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/shared/ui/button"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/ui/avatar"
import { cn } from "@/lib/utils"

const notifications = [
  {
    id: 1,
    title: "New Task Available",
    description: "Logo Design for Tech Startup",
    time: "2 mins ago",
    icon: AlertCircle,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: 2,
    title: "Payout Processed",
    description: "Your withdrawal of $1,200.00 was successful",
    time: "1 hour ago",
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    id: 3,
    title: "New Message",
    description: "Sarah Chen sent you a message",
    time: "3 hours ago",
    icon: MessageSquare,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
]

export function Navbar({ 
  onToggleSidebar,
  role = "admin"
}: { 
  onToggleSidebar: () => void,
  role?: string
}) {
  const [showNotifications, setShowNotifications] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isAdmin = role === "admin"

  return (
    <header className="sticky top-0 z-30 h-16 w-full border-b border-border/40 bg-background/80 backdrop-blur-md shadow-none">
      <div className="flex h-full items-center px-4 md:px-6 lg:ml-64">
        <div className="flex flex-1 items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onToggleSidebar}
            className="mr-2 rounded-lg lg:hidden"
          >
            <Menu className="size-5" />
          </Button>

          {/* Title Context - Design is Original, Content is Dynamic */}
          <div className="flex items-center gap-2.5">
             <div className="size-7 rounded-lg flex items-center justify-center bg-primary/10">
                <Rocket className="size-4 text-primary" strokeWidth={2.5} />
             </div>
             <h2 className="text-base font-bold tracking-tight text-foreground">
                {role === "admin" ? "Admin Portal" : role === "agent" ? "Agent Portal" : "TaskGo Dashboard"}
             </h2>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative" ref={dropdownRef}>
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "rounded-lg relative transition-colors",
                showNotifications ? "bg-muted" : "hover:bg-muted"
              )}
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="size-5 text-muted-foreground" />
              <span className="absolute right-2.5 top-2.5 size-2 rounded-full border-2 border-background bg-secondary" />
            </Button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-80 rounded-xl border border-border/50 bg-card p-2 shadow-none z-50 overflow-hidden text-foreground"
                >
                  <div className="flex items-center justify-between px-3 py-2 border-b border-border/40 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-high-contrast">Notifications</span>
                    <Button variant="ghost" className="h-6 px-2 text-[9px] font-black uppercase tracking-widest text-primary hover:bg-primary/10">Mark all read</Button>
                  </div>
                  <div className="space-y-1">
                    {notifications.map((n) => (
                      <button 
                        key={n.id}
                        className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors text-left group"
                      >
                        <div className={cn("size-8 rounded-lg flex items-center justify-center shrink-0", n.bg)}>
                          <n.icon className={cn("size-4", n.color)} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-black text-high-contrast leading-none mb-1 group-hover:text-primary transition-colors">{n.title}</p>
                          <p className="text-[10px] text-muted-contrast truncate leading-none mb-1.5">{n.description}</p>
                          <div className="flex items-center text-[9px] font-black text-muted-foreground/60 uppercase tracking-tighter">
                            <Clock className="mr-1 size-3" />
                            {n.time}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-border/40 text-center">
                    <Button variant="ghost" className="w-full h-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary">View all activity</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={cn("mx-2 h-4 w-px", isAdmin ? "bg-border/50" : "bg-border/50")} />

          <div>
            <ThemeToggle />
          </div>

          <div className="ml-3 flex items-center space-x-3">
            <div className="hidden flex-col items-end text-right md:flex">
              <span className="text-sm font-bold leading-none text-foreground">Sakil Ahmed</span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-contrast">{role} Portal</span>
            </div>
            <Avatar className="size-9 border border-border/50 transition-transform hover:scale-105">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
