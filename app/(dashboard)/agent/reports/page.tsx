"use client"

import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar, 
  Download, 
  FileText, 
  Briefcase 
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/ui/card"
import { Button } from "@/components/shared/ui/button"
import { Badge } from "@/components/shared/ui/badge"

const reportKPIs = [
  {
    title: "Direct Referrals",
    value: "142",
    trend: "+12%",
    status: "up",
    icon: Users,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Freelancer Success",
    value: "94.8%",
    trend: "+2.4%",
    status: "up",
    icon: Target,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Active Assignments",
    value: "38",
    trend: "-4%",
    status: "down",
    icon: Briefcase,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Total Retention",
    value: "88%",
    trend: "+5%",
    status: "up",
    icon: TrendingUp,
    color: "bg-amber-500/10 text-amber-600",
  },
]

export default function AgentReportsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Reports & Analytics"
        description="Monitor agency performance metrics and monthly growth."
        actionLabel="Export Report"
        onAction={() => alert("Generating full report...")}
      />

      {/* KPI Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {reportKPIs.map((kpi, i) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <Card className="border border-border/50 bg-card shadow-none rounded-2xl transition-colors hover:border-primary/20">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className={cn(kpi.color, "rounded-lg p-2")}>
                    <kpi.icon className="size-5" />
                  </div>
                  <div className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter flex items-center",
                    kpi.status === "up" ? "text-emerald-600 bg-emerald-500/10" : "text-destructive bg-destructive/10"
                  )}>
                    {kpi.status === "up" ? <ArrowUpRight className="mr-0.5 size-3" /> : <ArrowDownRight className="mr-0.5 size-3" />}
                    {kpi.trend}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[10px] font-bold text-muted-contrast uppercase tracking-widest leading-none">{kpi.title}</p>
                  <h3 className="text-2xl font-bold text-high-contrast mt-2 tracking-tight">{kpi.value}</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="border border-border/50 bg-card shadow-none rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-lg font-bold text-high-contrast">Monthly Freelancer Growth</CardTitle>
              <CardDescription className="text-xs text-muted-contrast">New registrations compared to previous months.</CardDescription>
            </div>
            <BarChart3 className="size-5 text-muted-foreground" />
          </CardHeader>
          <CardContent className="h-[250px] flex items-center justify-center border-t border-border/40">
             <div className="flex flex-col items-center gap-2 opacity-40">
                <div className="flex items-end gap-2 h-24">
                  <div className="w-6 h-12 bg-primary/40 rounded-t-sm" />
                  <div className="w-6 h-16 bg-primary/60 rounded-t-sm" />
                  <div className="w-6 h-8 bg-primary/30 rounded-t-sm" />
                  <div className="w-6 h-20 bg-primary/80 rounded-t-sm" />
                  <div className="w-6 h-14 bg-primary/50 rounded-t-sm" />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-high-contrast">Visual data processing</p>
             </div>
          </CardContent>
        </Card>

        <Card className="border border-border/50 bg-card shadow-none rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-lg font-bold text-high-contrast">Performance Distribution</CardTitle>
              <CardDescription className="text-xs text-muted-contrast">Commission breakdown across direct assignments.</CardDescription>
            </div>
            <Calendar className="size-5 text-muted-foreground" />
          </CardHeader>
          <CardContent className="h-[250px] flex items-center justify-center border-t border-border/40">
             <div className="flex flex-col items-center gap-2 opacity-40">
                <div className="size-20 rounded-full border-8 border-primary/20 border-t-primary/60 animate-[spin_10s_linear_infinite]" />
                <p className="text-[10px] uppercase font-bold tracking-widest text-high-contrast">Generating metrics</p>
             </div>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-2xl border border-border/50 bg-muted/5 p-6 border-dashed flex flex-col items-center justify-center text-center space-y-4">
        <FileText className="size-8 text-muted-foreground" />
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-high-contrast uppercase tracking-widest leading-none">Custom Reports</h4>
          <p className="text-[10px] text-muted-contrast italic">Connect your data to filters for more detailed insights.</p>
        </div>
        <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest px-6 rounded-lg">Configure View</Button>
      </div>
    </div>
  )
}
