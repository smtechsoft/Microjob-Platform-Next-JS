"use client"

import { User, Mail, Lock, Shield, Check } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/ui/card"
import { Input } from "@/components/shared/ui/input"
import { Button } from "@/components/shared/ui/button"
import { Label } from "@/components/shared/ui/label"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/shared/ui/tabs"
import { Badge } from "@/components/shared/ui/badge"

export default function AgentSettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <PageHeader
        title="Settings"
        description="Manage your professional profile, credentials, and account security."
      />
      
      <Tabs defaultValue="profile" className="w-full space-y-6">
         <div className="flex items-center justify-between">
            <TabsList className="bg-muted/40 p-1 rounded-xl border border-border/30 h-10 w-full lg:w-auto">
               <TabsTrigger value="profile" className="text-xs font-bold uppercase tracking-wider rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-8 px-6 transition-all">
                  Profile Change
               </TabsTrigger>
               <TabsTrigger value="email" className="text-xs font-bold uppercase tracking-wider rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-8 px-6 transition-all">
                  Email
               </TabsTrigger>
               <TabsTrigger value="password" className="text-xs font-bold uppercase tracking-wider rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-8 px-6 transition-all">
                  Password
               </TabsTrigger>
            </TabsList>
         </div>

         <div className="w-full">
            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6 animate-in slide-in-from-bottom-2 duration-300">
               <Card className="border border-border/40 bg-card shadow-sm">
                  <CardHeader>
                     <div className="flex items-center gap-2 text-primary mb-1">
                        <User className="h-5 w-5" />
                        <CardTitle className="text-lg font-bold text-foreground">Profile Information</CardTitle>
                     </div>
                     <CardDescription className="text-xs text-muted-foreground font-medium uppercase tracking-tight">Public identity across the platform.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                     <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                           <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</Label>
                           <Input defaultValue="John Doe" className="rounded-lg border-border/50 bg-background/50 font-bold h-11" />
                        </div>
                        <div className="space-y-2">
                           <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                           <Input defaultValue="+1 (555) 000-0000" className="rounded-lg border-border/50 bg-background/50 font-bold h-11" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Bio / Agency Name</Label>
                        <Input defaultValue="Premier Services Agent" className="rounded-lg border-border/50 bg-background/50 font-bold h-11" />
                     </div>
                     <Button className="w-full sm:w-auto h-10 px-8 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-wider text-xs">
                        Update Profile
                     </Button>
                  </CardContent>
               </Card>
            </TabsContent>

            {/* Email Tab */}
            <TabsContent value="email" className="space-y-6 animate-in slide-in-from-bottom-2 duration-300">
               <Card className="border border-border/40 bg-card shadow-sm">
                  <CardHeader>
                     <div className="flex items-center gap-2 text-primary mb-1">
                        <Mail className="h-5 w-5" />
                        <CardTitle className="text-lg font-bold text-foreground">Email Address</CardTitle>
                     </div>
                     <CardDescription className="text-xs text-muted-foreground font-medium uppercase tracking-tight">Main contact for notifications and security.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                     <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Current Email</Label>
                        <Input disabled value="john@example.com" className="rounded-lg border-border/50 bg-muted/30 font-bold h-11 opacity-70" />
                     </div>
                     <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">New Email Address</Label>
                        <Input placeholder="Enter your new email" className="rounded-lg border-border/50 bg-background/50 font-bold h-11" />
                     </div>
                     <Button className="w-full sm:w-auto h-10 px-8 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-wider text-xs">
                        Change Email
                     </Button>
                  </CardContent>
               </Card>
            </TabsContent>

            {/* Password Tab */}
            <TabsContent value="password" className="space-y-6 animate-in slide-in-from-bottom-2 duration-300">
               <Card className="border border-border/40 bg-card shadow-sm">
                  <CardHeader>
                     <div className="flex items-center gap-2 text-primary mb-1">
                        <Lock className="h-5 w-5" />
                        <CardTitle className="text-lg font-bold text-foreground">Account Security</CardTitle>
                     </div>
                     <CardDescription className="text-xs text-muted-foreground font-medium uppercase tracking-tight">Update credentials regularly to stay safe.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                     <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Current Password</Label>
                        <Input type="password" placeholder="••••••••" className="rounded-lg border-border/50 bg-background/50 font-bold h-11" />
                     </div>
                     <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                           <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">New Password</Label>
                           <Input type="password" placeholder="New password" className="rounded-lg border-border/50 bg-background/50 font-bold h-11" />
                        </div>
                        <div className="space-y-2">
                           <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Confirm New Password</Label>
                           <Input type="password" placeholder="Confirm password" className="rounded-lg border-border/50 bg-background/50 font-bold h-11" />
                        </div>
                     </div>
                     <Button className="w-full sm:w-auto h-10 px-8 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-wider text-xs">
                        Update Password
                     </Button>
                  </CardContent>
               </Card>
            </TabsContent>
         </div>
      </Tabs>
      
      <div className="flex items-center justify-between p-4 rounded-xl border border-primary/20 bg-primary/5 w-full">
         <div className="flex gap-3">
            <Shield className="size-5 text-primary shrink-0" />
            <div className="space-y-1">
               <p className="text-xs font-bold text-foreground uppercase tracking-widest leading-none">Security Status</p>
               <p className="text-[10px] text-muted-foreground italic font-medium">Your account is fully synchronized with current safety protocols.</p>
            </div>
         </div>
         <Badge className="bg-emerald-500/10 text-emerald-600 border-none px-2 py-0.5 rounded-full select-none">
            PROTECTED
         </Badge>
      </div>
    </div>
  )
}
