"use client"

import { Settings, Globe, Shield, Bell, Database, Mail, Monitor, Smartphone, Lock } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/ui/card"
import { Input } from "@/components/shared/ui/input"
import { Button } from "@/components/shared/ui/button"
import { Label } from "@/components/shared/ui/label"
import { Switch } from "@/components/shared/ui/switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/shared/ui/tabs";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Platform Settings"
        description="Global configuration for site identity, security, and communication."
      />
      
      <Tabs defaultValue="general" className="w-full space-y-6">
         <TabsList className="bg-muted/40 p-1 rounded-xl border border-border/30 h-10 w-full lg:w-auto overflow-x-auto overflow-y-hidden">
            <TabsTrigger value="general" className="text-xs font-bold uppercase tracking-wider rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-8 px-5">General</TabsTrigger>
            <TabsTrigger value="security" className="text-xs font-bold uppercase tracking-wider rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-8 px-5">Security</TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs font-bold uppercase tracking-wider rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-8 px-5">Notifications</TabsTrigger>
            <TabsTrigger value="mailing" className="text-xs font-bold uppercase tracking-wider rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-8 px-5">SMTP/Mailing</TabsTrigger>
         </TabsList>

         <TabsContent value="general" className="space-y-6 animate-in fade-in-50 duration-500">
            <div className="grid gap-6 md:grid-cols-2">
               <Card>
                  <CardHeader>
                     <div className="flex items-center gap-2 text-primary mb-1">
                        <Globe className="h-5 w-5" />
                        <CardTitle className="text-lg font-bold">Site Identity</CardTitle>
                     </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-[#9499b7]">Platform Name</Label>
                        <Input defaultValue="Microjob Platform" className="rounded-lg border-border/50 bg-background/50 font-bold h-11" />
                     </div>
                     <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-[#9499b7]">Contact Email</Label>
                        <Input defaultValue="support@microjob.com" className="rounded-lg border-border/50 bg-background/50 font-bold h-11" />
                     </div>
                     <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-[#9499b7]">Currency Symbol</Label>
                        <Input defaultValue="$" className="rounded-lg border-border/50 bg-background/50 font-bold h-11" />
                     </div>
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader>
                     <div className="flex items-center gap-2 text-secondary mb-1">
                        <Shield className="h-5 w-5" />
                        <CardTitle className="text-lg font-bold text-foreground dark:text-[#ffffff]">Privacy & SEO</CardTitle>
                     </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                     <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                           <Label className="text-sm font-bold text-foreground dark:text-[#ffffff]">Maintenance Mode</Label>
                           <p className="text-[10px] text-muted-foreground dark:text-[#9499b7] font-bold uppercase tracking-tight">Offline for updates</p>
                        </div>
                        <Switch />
                     </div>
                     <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                           <Label className="text-sm font-bold text-foreground dark:text-[#ffffff]">Search Engine Visibility</Label>
                           <p className="text-[10px] text-muted-foreground dark:text-[#9499b7] font-bold uppercase tracking-tight">Indexing for Google/Bing</p>
                        </div>
                        <Switch defaultChecked />
                     </div>
                  </CardContent>
               </Card>
            </div>
         </TabsContent>

         <TabsContent value="security" className="space-y-6 animate-in fade-in-50 duration-500">
            <Card className="max-w-2xl mx-auto">
               <CardHeader>
                  <div className="flex items-center gap-2 text-primary mb-1">
                     <Lock className="h-5 w-5" />
                     <CardTitle className="text-lg font-bold text-foreground dark:text-[#ffffff]">Security Guards</CardTitle>
                  </div>
                  <CardDescription className="text-xs text-muted-foreground dark:text-[#9499b7]">Advanced platform-wide security configuration.</CardDescription>
               </CardHeader>
               <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-background/30 border border-border/30">
                     <div className="space-y-1">
                        <Label className="text-sm font-bold text-foreground dark:text-[#ffffff]">Two-Factor Authentication (Required)</Label>
                        <p className="text-xs text-muted-foreground dark:text-[#9499b7] font-medium">Force all admins to use 2FA.</p>
                     </div>
                     <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-background/30 border border-border/30">
                     <div className="space-y-1">
                        <Label className="text-sm font-bold text-foreground dark:text-[#ffffff]">Limit Login Attempts</Label>
                        <p className="text-xs text-muted-foreground dark:text-[#9499b7] font-medium">Lock account after 5 failed attempts.</p>
                     </div>
                     <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-background/30 border border-border/30">
                     <div className="space-y-1">
                        <Label className="text-sm font-bold text-foreground dark:text-[#ffffff]">Block VPN/Proxy</Label>
                        <p className="text-xs text-muted-foreground dark:text-[#9499b7] font-medium">Restrict registrations from known VPN ranges.</p>
                     </div>
                     <Switch />
                  </div>
               </CardContent>
            </Card>
         </TabsContent>
      </Tabs>

      <div className="flex justify-end pt-4 border-t border-border/30">
        <Button className="rounded-lg bg-white text-black hover:bg-gray-200 shadow-none px-10 h-11 font-bold uppercase tracking-wider text-xs">Save All Changes</Button>
      </div>
    </div>
  )
}
