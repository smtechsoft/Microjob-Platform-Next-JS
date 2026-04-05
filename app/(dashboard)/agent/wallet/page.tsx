"use client"

import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  Plus, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/shared/page-header"
import { DataTable } from "@/components/shared/data-table"
import { Button } from "@/components/shared/ui/button"
import { Card, CardContent } from "@/components/shared/ui/card"
import { Badge } from "@/components/shared/ui/badge"
import { useModal } from "@/hooks/use-modal"

const walletStats = [
  {
    title: "Total Commission",
    value: "$4,250.00",
    description: "Earned this month",
    icon: TrendingUp,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Available Balance",
    value: "$1,840.50",
    description: "Ready for withdrawal",
    icon: Wallet,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Pending Payouts",
    value: "$620.00",
    description: "Processing from tasks",
    icon: Clock,
    color: "bg-amber-500/10 text-amber-600",
  },
]

const withdrawals = [
  {
    id: "TRX-4421",
    amount: "$1,200.00",
    method: "Bank Transfer",
    status: "completed",
    date: "2024-03-10",
  },
  {
    id: "TRX-4418",
    amount: "$450.00",
    method: "PayPal",
    status: "completed",
    date: "2024-03-05",
  },
  {
    id: "TRX-4409",
    amount: "$320.00",
    method: "Bank Transfer",
    status: "processing",
    date: "2024-03-12",
  },
  {
    id: "TRX-4398",
    amount: "$150.00",
    method: "Crypto (USDT)",
    status: "failed",
    date: "2024-02-28",
  },
]

export default function AgentWalletPage() {
  const { open } = useModal()

  const columns = [
    { key: "id", label: "Transaction ID" },
    { key: "method", label: "Method" },
    { 
      key: "amount", 
      label: "Amount",
      render: (val: string) => <span className="font-bold text-foreground">{val}</span>
    },
    { 
      key: "status", 
      label: "Status",
      render: (val: string) => (
        <Badge className={
          val === "completed" ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20" :
          val === "processing" ? "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20" :
          "bg-destructive/10 text-destructive hover:bg-destructive/20"
        }>
          {val}
        </Badge>
      )
    },
    { key: "date", label: "Date" },
  ]

  return (
    <div className="space-y-8">
      <PageHeader
        title="Wallet & Earnings"
        description="Monitor your commissions and manage payout requests."
        actionLabel="Withdraw Funds"
        onAction={() => open("WITHDRAW_FUNDS")}
      />

      {/* Wallet Stats */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {walletStats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <Card className="border border-border/40 bg-card shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className={stat.color + " rounded-lg p-2.5"}>
                    <stat.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.title}</p>
                    <h3 className="text-xl font-bold text-foreground mt-1 tracking-tight">{stat.value}</h3>
                    <p className="text-[10px] text-muted-foreground font-medium mt-0.5">{stat.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Withdrawal History</h4>
          <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest">
            <Download className="mr-2 size-3.5" />
            Export CSV
          </Button>
        </div>
        <DataTable 
          data={withdrawals} 
          searchKey="id" 
          placeholder="Search by Transaction ID..."
        />
      </div>
    </div>
  )
}
