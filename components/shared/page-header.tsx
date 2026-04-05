"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/shared/ui/button"

interface PageHeaderProps {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export function PageHeader({
  title,
  description,
  actionLabel,
  onAction,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
        <p className="text-sm font-medium text-muted-foreground">{description}</p>
      </div>
      {actionLabel && (
        <Button 
          onClick={onAction}
          className="rounded-lg bg-primary text-primary-foreground shadow-sm text-xs font-bold uppercase tracking-wider h-10 px-6 sm:self-center self-start mt-4 sm:mt-0"
        >
          <Plus className="mr-2 h-4 w-4" />
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
