"use client"

import { 
  Users, 
  Copy, 
  Share2, 
  Gift, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/shared/page-header"
import { DataTable } from "@/components/shared/data-table"
import { Button } from "@/components/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card"
import { Input } from "@/components/shared/ui/input"
import { Badge } from "@/components/shared/ui/badge"

const referralStats = [
  {
    title: "Total Referrals",
    value: "24",
    description: "Active partners",
    icon: Users,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Earnings Share",
    value: "$158.40",
    description: "Referral commission",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Success Rate",
    value: "82%",
    description: "Active referral ratio",
    icon: TrendingUp,
    color: "bg-emerald-500/10 text-emerald-600",
  },
]

const referrals = [
  {
    id: "REF-001",
    user: "Robert J.",
    status: "active",
    joined: "2024-03-01",
    earned: "$42.50",
  },
  {
    id: "REF-005",
    user: "Maria K.",
    status: "active",
    joined: "2024-03-05",
    earned: "$12.00",
  },
  {
    id: "REF-012",
    user: "Alex T.",
    status: "pending",
    joined: "2024-03-10",
    earned: "$0.00",
  },
]

export default function FreelancerReferralsPage() {
  const referralLink = "https://microjob.com/ref/john_doe_99"

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink)
    alert("Referral link copied to clipboard!")
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <PageHeader
        title="Referral & Invite"
        description="Invite friends and earn a percentage of their task rewards."
        actionLabel="Join Affiliate Program"
        onAction={() => alert("Joining affiliate program...")}
      />

      <div className="grid gap-6 lg:grid-cols-3">
         <Card className="lg:col-span-2 overflow-hidden">
            <div className="h-1 bg-primary/20 w-full" />
            <CardHeader>
               <CardTitle className="text-lg font-bold text-foreground">Your Referral Link</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                  Share this link with your friends. For every task they complete, you will earn a <strong>5% commission</strong>.
               </p>
               <div className="flex items-center gap-2 drop-shadow-sm">
                  <div className="relative flex-1">
                     <Users className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                     <Input 
                        readOnly 
                        value={referralLink} 
                        className="pl-10 h-11 border-border/60 bg-muted/20 font-bold text-foreground selection:bg-primary/20" 
                     />
                  </div>
                  <Button onClick={copyLink} className="h-11 px-6 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-widest text-[10px]">
                     <Copy className="mr-2 size-3.5" />
                     Copy
                  </Button>
               </div>
               <div className="flex flex-wrap gap-2 pt-2">
                  <Button variant="outline" size="sm" className="h-8 rounded-full border-border/50 text-[10px] font-bold uppercase tracking-tighter">
                     Share on Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 rounded-full border-border/50 text-[10px] font-bold uppercase tracking-tighter">
                     Invite via Email
                  </Button>
               </div>
            </CardContent>
         </Card>

         <Card className="bg-primary/5 dark:bg-primary/10 overflow-hidden relative">
            <Gift className="absolute -right-8 -top-8 size-40 text-primary opacity-10 rotate-12" />
            <CardHeader>
               <CardTitle className="text-sm font-bold text-foreground uppercase tracking-wider">Passive Income</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
               <h3 className="text-3xl font-black text-primary tracking-tighter leading-none">$158.40</h3>
               <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Total Earned from partners</p>
               <div className="pt-4 border-t border-primary/20 space-y-3">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase">Commission Rate</span>
                     <Badge className="bg-primary/20 text-primary border-none">5%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase">Active Network</span>
                     <span className="text-xs font-bold text-foreground">18 Users</span>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {referralStats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 + 0.2 }}
          >
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className={stat.color + " rounded-lg p-2.5"}>
                    <stat.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">{stat.title}</p>
                    <h3 className="text-xl font-bold text-foreground mt-2 tracking-tight">{stat.value}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Referral Network</h4>
        <DataTable 
          data={referrals} 
          searchKey="user" 
          placeholder="Search by User..."
        />
      </div>
    </div>
  )
}
