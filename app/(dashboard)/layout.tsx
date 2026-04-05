"use client"

import * as React from "react"
import { Sidebar } from "@/components/shared/sidebar"
import { Navbar } from "@/components/shared/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="relative min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col">
        <Navbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 p-4 md:p-6 lg:pl-72 lg:pt-0 transition-all duration-300">
          <div className="mx-auto max-w-7xl pt-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
