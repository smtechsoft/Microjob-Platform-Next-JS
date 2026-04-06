"use client"

import {
  Wallet,
  Download,
  TrendingUp,
  Clock
} from "lucide-react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/shared/page-header"
import { DataTable } from "@/components/shared/data-table"
import { Button } from "@/components/shared/ui/button"
import { Card, CardContent } from "@/components/shared/ui/card"
import { Badge } from "@/components/shared/ui/badge"
import { useModal } from "@/hooks/use-modal"
import { WalletCard } from "@/components/shared/wallet-card"

const walletStats = [
  {
    title: "Available Balance",
    value: "420.50",
    description: "Ready to withdraw",
    icon: Wallet,
    color: "bg-blue-500/10 text-blue-600",
  },
]

const withdrawals = [
  {
    id: "PAY-9921",
    amount: "$250.00",
    method: "PayPal",
    status: "completed",
    date: "2024-03-10",
  },
  {
    id: "PAY-9918",
    amount: "$120.00",
    method: "Bank Transfer",
    status: "completed",
    date: "2024-03-05",
  },
  {
    id: "PAY-9909",
    amount: "$85.00",
    method: "Crypto (USDT)",
    status: "processing",
    date: "2024-03-12",
  },
  {
    id: "PAY-9898",
    amount: "$50.00",
    method: "PayPal",
    status: "failed",
    date: "2024-02-28",
  },
]

export default function FreelancerWalletPage() {
  const { open } = useModal()

  const columns = [
    { key: "id", label: "Payment ID" },
    { key: "method", label: "Gateway" },
    {
      key: "amount",
      label: "Amount",
      render: (val: string | number) => <span className="font-bold text-foreground">{val}</span>
    },
    {
      key: "status",
      label: "Status",
      render: (val: string | number) => (
        <Badge className={
          val === "completed" ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20" :
            val === "processing" ? "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20" :
              "bg-destructive/10 text-destructive hover:bg-destructive/20"
        }>
          {String(val)}
        </Badge>
      )
    },
    { key: "date", label: "Date" },
  ]

  return (
    <div className="space-y-8">
      <PageHeader
        title="Wallet & Earnings"
        description="Track your task rewards and manage payouts."
        actionLabel="Withdraw Funds"
        onAction={() => open("WITHDRAW_FUNDS")}
      />

      {/* Wallet Stats - Single Wallet Card for Freelancers */}
      <div className="max-w-md">
        {walletStats.map((stat, i) => (
           <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="h-[220px]"
            >
              <WalletCard 
                balance="420.50" 
                pending="85.00" 
                withdrawable="335.50"
                className="h-full"
              />
            </motion.div>
        ))}
      </div>

      <Card className="border border-border/50 bg-card shadow-sm">
        <CardContent className="p-0">
          <div className="p-6 border-b border-border/50">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Payment History</h4>
              <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest px-6 transition-all hover:bg-secondary/10 hover:border-primary/20">
                <Download className="mr-2 size-3.5 text-primary" />
                Export Data
              </Button>
            </div>
          </div>
          <div className="p-6">
            <DataTable
              data={withdrawals}
              columns={columns}
              searchKey="id"
              placeholder="Search by Payment ID..."
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
