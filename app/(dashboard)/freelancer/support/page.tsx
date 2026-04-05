"use client"

import * as React from "react"
import { 
  MessageSquare, 
  Plus
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/ui/card"
import { Button } from "@/components/shared/ui/button"
import { Input } from "@/components/shared/ui/input"
import { Textarea } from "@/components/shared/ui/textarea"
import { Badge } from "@/components/shared/ui/badge"
import { Label } from "@/components/shared/ui/label"
import { DataTable } from "@/components/shared/data-table"
import { cn } from "@/lib/utils"

const initialTickets = [
  {
    id: "TIC-4401",
    subject: "Payment not received for Task #991",
    category: "Payments",
    status: "open",
    date: "2024-03-12",
  },
  {
    id: "TIC-4398",
    subject: "Unable to upload profile picture",
    category: "Account",
    status: "closed",
    date: "2024-03-10",
  },
  {
    id: "TIC-4385",
    subject: "Question about referral commission",
    category: "Referrals",
    status: "closed",
    date: "2024-03-05",
  },
]

export default function FreelancerSupportPage() {
  const [showNewTicket, setShowNewTicket] = React.useState(false)

  const columns = [
    { key: "id", label: "Ticket ID" },
    { key: "subject", label: "Subject" },
    { key: "category", label: "Category" },
    { 
      key: "status", 
      label: "Status",
      render: (val: string) => (
        <Badge className={cn(
          "rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter border-none",
          val === "open" ? "bg-amber-500/10 text-amber-600" : "bg-emerald-500/10 text-emerald-600"
        )}>
          {val}
        </Badge>
      )
    },
    { key: "date", label: "Date" },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <PageHeader
        title="Support & Help"
        description="Track your tickets and get assistance from our team."
        actionLabel={showNewTicket ? "View Tickets" : "New Ticket"}
        onAction={() => setShowNewTicket(!showNewTicket)}
      />

      <AnimatePresence mode="wait">
        {showNewTicket ? (
          <motion.div
            key="new-ticket"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="border border-border/40 bg-card overflow-hidden">
               <CardHeader className="border-b border-border/30 bg-muted/5">
                  <div className="flex items-center gap-2 text-primary">
                     <Plus className="size-5" />
                     <CardTitle className="text-lg font-bold text-foreground">Create New Ticket</CardTitle>
                  </div>
                  <CardDescription className="text-xs text-muted-foreground uppercase tracking-tight">Our team typically responds within 4 hours.</CardDescription>
               </CardHeader>
               <CardContent className="p-6 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                     <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Subject</Label>
                        <Input placeholder="What do you need help with?" className="rounded-lg border-border/50 bg-background font-bold h-11" />
                     </div>
                     <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Category</Label>
                        <Input placeholder="Payments, Tasks, Account..." className="rounded-lg border-border/50 bg-background font-bold h-11" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Detailed Message</Label>
                     <Textarea 
                        placeholder="Please provide as much detail as possible..." 
                        className="rounded-lg border-border/50 bg-background font-medium min-h-[150px] resize-none" 
                     />
                  </div>
                  <div className="flex justify-end gap-3">
                     <Button variant="ghost" className="h-11 px-8 rounded-lg font-bold uppercase tracking-widest text-[10px]" onClick={() => setShowNewTicket(false)}>
                        Cancel
                     </Button>
                     <Button className="h-11 px-10 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-widest text-[10px]">
                        <MessageSquare className="mr-2 size-3.5" />
                        Submit Ticket
                     </Button>
                  </div>
               </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="ticket-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between px-1">
               <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Ticket History</h4>
               <Badge variant="outline" className="text-[9px] font-bold text-muted-foreground uppercase py-0.5 border-border/50">
                  {initialTickets.length} Total
               </Badge>
            </div>
            <DataTable 
              data={initialTickets} 
              columns={columns}
              searchKey="subject" 
              placeholder="Search tickets..."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
