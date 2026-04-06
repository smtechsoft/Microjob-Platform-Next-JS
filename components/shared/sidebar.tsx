"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Wallet, 
  Settings, 
  BarChart3, 
  UserCircle,
  LogOut,
  Target,
  Percent,
  Bell
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/shared/ui/button"

const getMenuItems = (role: string) => {
  const base = [
    { icon: LayoutDashboard, label: "Dashboard", href: `/${role}/dashboard` },
  ]

  if (role === "admin") {
    return [
      ...base,
      { icon: Users, label: "User Management", href: "/admin/users" },
      { icon: Target, label: "Tasks", href: "/admin/tasks" },
      { icon: Wallet, label: "Payments & Wallet", href: "/admin/payments" },
      { icon: Percent, label: "Referral Settings", href: "/admin/referrals" },
      { icon: BarChart3, label: "Reports & Analytics", href: "/admin/reports" },
      { icon: Settings, label: "System Settings", href: "/admin/settings" },
    ]
  }

  if (role === "agent") {
    return [
      ...base,
      { icon: Users, label: "Freelancers", href: "/agent/freelancers" },
      { icon: Wallet, label: "Wallet & Earnings", href: "/agent/wallet" },
      { icon: BarChart3, label: "Reports & Analytics", href: "/agent/reports" },
      { icon: Bell, label: "Notifications", href: "/agent/notifications" },
      { icon: Settings, label: "Settings", href: "/agent/settings" },
    ]
  }

  return [
    ...base,
    { icon: Target, label: "Task List", href: "/freelancer/tasks" },
    { icon: Wallet, label: "Wallet & Earnings", href: "/freelancer/wallet" },
    { icon: Users, label: "Referral & Invite", href: "/freelancer/referrals" },
    { icon: UserCircle, label: "Profile Management", href: "/freelancer/profile" },
    { icon: Bell, label: "Notifications", href: "/freelancer/notifications" },
    { icon: BarChart3, label: "Support & Help", href: "/freelancer/support" },
    { icon: Settings, label: "Settings", href: "/freelancer/settings" },
  ]
}

export function Sidebar({ 
  role = "admin",
  isOpen,
  setOpen
}: { 
  role?: string,
  isOpen?: boolean,
  setOpen?: (open: boolean) => void
}) {
  const pathname = usePathname()
  const menuItems = getMenuItems(role)

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setOpen?.(false)}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-0 z-50 h-screen w-64 border-r border-sidebar-border bg-sidebar transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col px-4 py-6">
          <div className="mb-10 flex items-center px-2">
            <div className="mr-3 flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-none">
              <Briefcase className="size-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-foreground leading-none">MicroJob</h1>
              <p className="mt-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{role} Panel</p>
            </div>
          </div>

          <nav className="flex-1 space-y-0.5">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen?.(false)}
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-bold transition-all duration-200",
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className={cn("mr-3 size-4.5", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                    <span className="flex-1">{item.label}</span>
                    {isActive && <div className="size-1.5 rounded-full bg-primary" />}
                  </Link>
              )
            })}
          </nav>

          <div className="mt-auto border-t border-sidebar-border pt-4">
            <Button variant="ghost" className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive">
              <LogOut className="mr-3 size-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
