"use client"

import * as React from "react"
import { Search, MoreHorizontal, Edit, Trash2, Shield, UserX, CheckCircle2 } from "lucide-react"

import { Input } from "@/components/shared/ui/input"
import { Button } from "@/components/shared/ui/button"
import {
  Card,
  CardContent,
} from "@/components/shared/ui/card"
import { Badge } from "@/components/shared/ui/badge"

interface DataTableProps {
  data: any[]
  searchKey: string
  placeholder?: string
  actions?: (item: any) => React.ReactNode
}

export function DataTable({
  data = [],
  searchKey,
  placeholder = "Search...",
  actions
}: DataTableProps) {
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredData = data.filter((item) =>
    item[searchKey]?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-lg border-border/50 bg-background/50 focus-visible:ring-primary/20 h-10"
          />
        </div>
        <div className="flex-1" />
        {/* Additional filters can go here */}
      </div>

      <Card className="border-border/40 bg-card overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted/50 border-b border-border/40">
              <tr>
                {Object.keys(data[0] || {}).filter(k => k !== 'id' && k !== 'avatar').map((key) => (
                  <th 
                    key={key} 
                    className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </th>
                ))}
                {actions && <th className="px-6 py-4 text-right" />}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {filteredData.length > 0 ? (
                filteredData.map((item, i) => (
                  <tr key={item.id || i} className="group hover:bg-muted/20 transition-colors">
                    {Object.entries(item).filter(([k]) => k !== 'id' && k !== 'avatar').map(([key, value], idx) => (
                      <td key={idx} className="px-6 py-4 whitespace-nowrap text-sm text-foreground font-bold">
                        {renderCell(key, value)}
                      </td>
                    ))}
                    {actions && (
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                           {actions(item)}
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={20} className="px-6 py-12 text-center text-muted-foreground italic text-sm">
                    No results found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

function renderCell(key: string, value: any) {
  if (key === "status") {
    return (
      <Badge 
        variant={value === "active" ? "success" : value === "pending" ? "warning" : (value === "rejected" || value === "error") ? "destructive" : "secondary"}
        className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter"
      >
        {value}
      </Badge>
    )
  }

  if (key === "role") {
    return (
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-primary" />
        <span className="capitalize font-extrabold text-xs text-foreground">{value}</span>
      </div>
    )
  }

  if (typeof value === "string" && value.includes("@")) {
    return <span className="text-muted-foreground font-medium">{value}</span>
  }

  return <span className="font-bold text-foreground/90">{String(value)}</span>
}
