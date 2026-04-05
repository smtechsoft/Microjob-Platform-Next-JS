"use client"

import * as React from "react"
import { Sidebar } from "@/components/shared/sidebar"
import { Navbar } from "@/components/shared/navbar"
import { usePathname } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false)
  const pathname = usePathname()
  
  // Extract role from pathname (e.g., /admin/dashboard -> admin)
  const role = pathname?.split("/")[1] || "freelancer"

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} role={role} />
      <div className="flex flex-col">
        <Navbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} role={role} />
        <main className="flex-1 p-4 md:p-6 lg:pl-72 lg:pt-0 transition-all duration-300">
          <div className="mx-auto max-w-7xl pt-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
