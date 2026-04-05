"use client"

import { Users, Percent, Gift, TrendingUp, Settings2 } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/ui/card"
import { Input } from "@/components/shared/ui/input"
import { Button } from "@/components/shared/ui/button"
import { Label } from "@/components/shared/ui/label"
import { Switch } from "@/components/shared/ui/switch"

export default function AdminReferralsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Referral & Commissions"
        description="Configure reward structures and referral hierarchies for the platform."
      />
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/40 bg-card shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2 text-primary mb-1">
              <Gift className="h-5 w-5" />
              <CardTitle className="text-xl font-bold">Referral Rewards</CardTitle>
            </div>
            <CardDescription className="text-xs">Direct bonuses for inviting new users.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="space-y-4">
               <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-bold">Registration Bonus</Label>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">Paid to the referrer</p>
                  </div>
                  <div className="w-24">
                    <Input type="number" defaultValue="2.00" className="text-right font-bold rounded-lg border-border/50" />
                  </div>
               </div>
               <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-bold">New User Reward</Label>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">Paid to the new user</p>
                  </div>
                  <div className="w-24">
                    <Input type="number" defaultValue="0.50" className="text-right font-bold rounded-lg border-border/50" />
                  </div>
               </div>
             </div>
             
             <div className="pt-4 border-t border-border/30">
                <Button className="w-full rounded-lg bg-primary text-primary-foreground shadow-sm">Update Rewards</Button>
             </div>
          </CardContent>
        </Card>

        <Card className="border-border/40 bg-card shadow-sm">
          <CardHeader>
             <div className="flex items-center gap-2 text-secondary mb-1">
              <Percent className="h-5 w-5" />
              <CardTitle className="text-xl font-bold">Commission Tiers</CardTitle>
            </div>
            <CardDescription className="text-xs">Ongoing percentages from freelancer earnings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="space-y-4">
                {[
                  { level: "Level 1 (Direct)", percent: "10" },
                  { level: "Level 2 (Indirect)", percent: "5" },
                  { level: "Level 3 (Legacy)", percent: "2" },
                ].map((tier) => (
                  <div key={tier.level} className="flex items-center justify-between">
                    <Label className="text-sm font-bold">{tier.level}</Label>
                    <div className="flex items-center gap-2">
                       <Input type="number" defaultValue={tier.percent} className="w-20 text-right font-bold rounded-lg border-border/50" />
                       <span className="text-xs font-bold text-muted-foreground">%</span>
                    </div>
                  </div>
                ))}
             </div>
             <div className="pt-4 border-t border-border/30">
                <Button variant="outline" className="w-full rounded-lg border-border/50 shadow-sm">Save Tiers</Button>
             </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/40 bg-card shadow-sm">
        <CardHeader>
           <div className="flex items-center gap-2 text-primary/80 mb-1">
            <Settings2 className="h-5 w-5" />
            <CardTitle className="text-lg font-bold">Hierarchy Settings</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="flex items-center justify-between p-4 rounded-xl bg-muted/20 border border-border/30">
              <div className="space-y-1">
                <Label className="text-sm font-bold">Enable Multi-level Referrals</Label>
                <p className="text-xs text-muted-foreground font-medium">Allow users to earn from their referrals' referrals up to 3 levels.</p>
              </div>
              <Switch defaultChecked />
           </div>
           <div className="flex items-center justify-between p-4 rounded-xl bg-muted/20 border border-border/30">
              <div className="space-y-1">
                <Label className="text-sm font-bold">Auto-approve Commissions</Label>
                <p className="text-xs text-muted-foreground font-medium">Automatically credit wallets upon task completion.</p>
              </div>
              <Switch />
           </div>
        </CardContent>
      </Card>
    </div>
  )
}
