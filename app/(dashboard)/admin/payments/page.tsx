"use client"

import { DollarSign, ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, History } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { DataTable } from "@/components/shared/data-table"
import { Button } from "@/components/shared/ui/button"
import { useModal } from "@/hooks/use-modal"

const payments = [
  {
    id: "1",
    user: "Robert Johnson",
    amount: "$150.00",
    method: "bKash",
    status: "pending",
    date: "2024-03-20",
  },
  {
    id: "2",
    user: "John Doe",
    amount: "$25.40",
    method: "Nagad",
    status: "active",
    date: "2024-03-18",
  },
  {
    id: "3",
    user: "Alice Brown",
    amount: "$1,200.00",
    method: "Bank Transfer",
    status: "active",
    date: "2024-03-15",
  },
  {
    id: "4",
    user: "Jane Smith",
    amount: "$45.00",
    method: "bKash",
    status: "rejected",
    date: "2024-03-12",
  },
]

export default function AdminPaymentsPage() {
  const { open } = useModal()

  const actions = (item: any) => (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-md hover:bg-secondary/10 hover:text-secondary"
        onClick={() => open("EDIT_PAYMENT", { payment: item })}
      >
        <CheckCircle2 className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-destructive/10 hover:text-destructive">
        <ArrowDownRight className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-muted/50">
        <History className="h-4 w-4" />
      </Button>
    </>
  )

  return (
    <div className="space-y-8">
      <PageHeader
        title="Payment & Withdrawals"
        description="Monitor all platform financial flows and process payout requests."
      />
      
      <DataTable 
        data={payments} 
        searchKey="user" 
        placeholder="Search by user..."
        actions={actions}
      />
    </div>
  )
}
