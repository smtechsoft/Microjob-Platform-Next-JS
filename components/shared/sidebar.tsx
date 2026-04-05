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
  Target
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/shared/ui/button"

const getMenuItems = (role: string) => [
  { icon: LayoutDashboard, label: "Dashboard", href: `/${role}/dashboard` },
  { icon: Users, label: "User Management", href: `/${role}/users`, roles: ["admin"] },
  { icon: Target, label: "Task Management", href: `/${role}/tasks` },
  { icon: Wallet, label: "Earnings/Wallet", href: `/${role}/wallet` },
  { icon: BarChart3, label: "Reports", href: `/${role}/reports` },
  { icon: UserCircle, label: "Profile", href: `/${role}/profile` },
  { icon: Settings, label: "Settings", href: `/${role}/settings` },
]

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
            <div className="mr-3 flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Briefcase className="size-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-foreground leading-none">MicroJob</h1>
              <p className="mt-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{role} Panel</p>
            </div>
          </div>

          <nav className="flex-1 space-y-0.5">
            {menuItems.filter(item => !item.roles || item.roles.includes(role)).map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen?.(false)}
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
                    isActive 
                      ? "bg-secondary/10 text-secondary" 
                      : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className={cn("mr-3 size-4.5", isActive ? "text-secondary" : "text-muted-foreground/70 group-hover:text-foreground")} />
                  <span className="flex-1">{item.label}</span>
                  {isActive && <div className="size-1.5 rounded-full bg-secondary" />}
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
