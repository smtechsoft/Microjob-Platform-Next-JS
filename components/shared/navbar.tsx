"use client"

import * as React from "react"
import { Bell, User, MessageSquare, Menu, X } from "lucide-react"

import { Button } from "@/components/shared/ui/button"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/ui/avatar"

export function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-30 h-16 w-full border-b border-slate-200 dark:border-border/50 bg-white dark:bg-background/60 backdrop-blur-md shadow-sm dark:shadow-none">
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
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-lg relative hover:bg-muted transition-colors">
            <Bell className="size-4.5 text-muted-foreground" />
            <span className="absolute right-2.5 top-2.5 size-2 rounded-full border-2 border-background bg-secondary shadow-sm" />
          </Button>

          <div className="mx-2 h-4 w-px bg-border/50" />

          <ThemeToggle />

          <div className="ml-3 flex items-center space-x-3">
            <div className="hidden flex-col items-end text-right md:flex">
              <span className="text-sm font-bold text-foreground leading-none">John Doe</span>
              <span className="mt-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Administrator</span>
            </div>
            <Avatar className="size-9 border border-border/50 shadow-sm transition-transform hover:scale-105">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
