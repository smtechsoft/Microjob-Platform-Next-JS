"use client"

import { BarChart3, TrendingUp, Users, Target, DollarSign, ArrowUpRight, Download, Calendar } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/ui/card"
import { Button } from "@/components/shared/ui/button"

const reports = [
  { title: "Today's Revenue", value: "$1,240.50", trend: "+12.5%", icon: DollarSign, color: "text-emerald-500" },
  { title: "New Users", value: "342", trend: "+8.2%", icon: Users, color: "text-blue-500" },
  { title: "Tasks Completed", value: "1,520", trend: "+15.3%", icon: Target, color: "text-secondary" },
  { title: "Active Agents", value: "24", trend: "-2.1%", icon: TrendingUp, color: "text-amber-500" },
]

export default function AdminReportsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Reports & Analytics"
        description="Comprehensive overview of platform performance and financial health."
        actionLabel="Export CSV"
        onAction={() => console.log("Exporting...")}
      />
      
      {/* KPI Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {reports.map((report) => (
          <Card key={report.title}>
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg bg-muted/40 ${report.color}`}>
                     <report.icon className="h-5 w-5" />
                  </div>
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${report.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-destructive/10 text-destructive'}`}>
                    {report.trend}
                  </div>
               </div>
               <div className="mt-4">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{report.title}</p>
                  <h3 className="text-2xl font-bold text-foreground mt-1">{report.value}</h3>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-0.5">
               <CardTitle className="text-xl font-bold">Volume Trends</CardTitle>
               <CardDescription className="text-xs">Task submissions vs. completions over the last 30 days.</CardDescription>
            </div>
            <div className="flex gap-2">
               <Button variant="outline" size="sm" className="h-8 rounded-lg text-[10px] font-bold uppercase border-border/50">Weekly</Button>
               <Button variant="secondary" size="sm" className="h-8 rounded-lg text-[10px] font-bold uppercase">Monthly</Button>
            </div>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-t border-border/30">
             <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex items-end gap-2 h-32">
                   {[40, 70, 45, 90, 65, 80, 50, 100, 85, 95].map((h, i) => (
                     <div key={i} className="w-4 bg-primary/20 rounded-t-sm hover:bg-primary transition-colors cursor-pointer" style={{ height: `${h}%` }} />
                   ))}
                </div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Dynamic charting integration required</p>
             </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3">
           <CardHeader>
              <CardTitle className="text-xl font-bold">Top Earners</CardTitle>
              <CardDescription className="text-xs">Highest generating freelancers this month.</CardDescription>
           </CardHeader>
           <CardContent>
              <div className="space-y-5">
                 {[
                   { name: "John Doe", amount: "$1,240.50", change: "+12%" },
                   { name: "Jane Smith", amount: "$980.20", change: "+5%" },
                   { name: "Robert Johnson", amount: "$750.40", change: "+15%" },
                   { name: "Alice Brown", amount: "$620.00", change: "+2%" },
                   { name: "Charlie Davis", amount: "$450.00", change: "-1.5%" },
                 ].map((earner, i) => (
                   <div key={i} className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-[10px] font-bold">{i+1}</div>
                        <p className="text-sm font-bold text-foreground">{earner.name}</p>
                     </div>
                     <div className="text-right">
                        <p className="text-sm font-bold text-foreground">{earner.amount}</p>
                        <p className={`text-[9px] font-bold uppercase ${earner.change.startsWith('+') ? 'text-emerald-500' : 'text-destructive'}`}>{earner.change}</p>
                     </div>
                   </div>
                 ))}
              </div>
           </CardContent>
        </Card>
      </div>

       <Card>
          <CardHeader>
             <CardTitle className="text-xl font-bold">Recent Invoices</CardTitle>
             <CardDescription className="text-xs">Summary of processed payouts and platform fees.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-40 flex items-center justify-center border-2 border-dashed border-border/30 rounded-xl">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                   <Download className="h-6 w-6 opacity-20" />
                   <p className="text-xs font-bold uppercase tracking-wider opacity-60">Platform Inactivity Records</p>
                </div>
             </div>
          </CardContent>
       </Card>
    </div>
  )
}
