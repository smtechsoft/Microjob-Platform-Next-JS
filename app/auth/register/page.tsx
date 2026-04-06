"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  User, 
  Mail, 
  Lock, 
  ArrowRight, 
  Gift, 
  ShieldCheck, 
  Briefcase, 
  UserCircle 
} from "lucide-react"

import { Button } from "@/components/shared/ui/button"
import { Input } from "@/components/shared/ui/input"
import { Label } from "@/components/shared/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/shared/ui/card"
import { Badge } from "@/components/shared/ui/badge"
import { cn } from "@/lib/utils"

export default function RegisterPage() {
  const [role, setRole] = React.useState<"freelancer" | "agent">("freelancer")

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-xl py-12"
    >
      <Card className="rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
        
        <CardHeader className="space-y-2 pb-8 pt-10 px-8 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
           <div className="space-y-1">
              <div className="flex justify-center sm:justify-start mb-2">
                 <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest text-primary border-primary/20 bg-primary/5 px-2.5 py-0.5">
                    Account Provisioning
                 </Badge>
              </div>
              <CardTitle className="text-3xl font-black tracking-tighter">Get Started Today</CardTitle>
              <CardDescription className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground italic">
                Choose your role to start your journey on MicroJobs.
              </CardDescription>
           </div>
        </CardHeader>

        <CardContent className="space-y-8 px-8">
          {/* Role Selector */}
          <div className="grid grid-cols-2 gap-4">
             {[
               { id: "freelancer", label: "I'm a Freelancer", icon: UserCircle, desc: "Earn by tasks" },
               { id: "agent", label: "I'm an Agent", icon: Briefcase, desc: "Manage workers" }
             ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRole(r.id as any)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 text-center group",
                    role === r.id 
                      ? "bg-primary/5 border-primary ring-1 ring-primary/20 shadow-none" 
                      : "bg-background/50 border-[#006D44]/15 hover:border-primary/20 hover:bg-primary/5"
                  )}
                >
                   <div className={cn(
                     "size-10 rounded-xl flex items-center justify-center transition-colors",
                     role === r.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                   )}>
                      <r.icon className="size-5" />
                   </div>
                   <div>
                      <p className={cn("text-[11px] font-black uppercase tracking-tight leading-none", role === r.id ? "text-primary" : "text-foreground")}>{r.label}</p>
                      <p className="text-[9px] font-bold uppercase tracking-tighter text-muted-foreground mt-1 opacity-60 leading-none">{r.desc}</p>
                   </div>
                </button>
             ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</Label>
              <div className="relative group">
                 <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                 <Input placeholder="John Doe" className="pl-11 rounded-xl h-12 bg-background font-bold" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</Label>
              <div className="relative group">
                 <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                 <Input type="email" placeholder="name@example.com" className="pl-11 rounded-xl h-12 bg-background font-bold" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Password</Label>
              <div className="relative group">
                 <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                 <Input type="password" placeholder="••••••••" className="pl-11 rounded-xl h-12 bg-background font-bold" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                 {role === "freelancer" ? "Referral Code (Optional)" : "Agent Role Type"}
              </Label>
              <div className="relative group">
                 <Gift className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                 <Input placeholder={role === "freelancer" ? "REF-12345" : "Bulk Provider"} className="pl-11 rounded-xl h-12 bg-background font-bold" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
             <Button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-[11px] shadow-none group">
                Provision New Account
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
             </Button>

             <p className="text-[10px] font-bold text-muted-foreground text-center leading-relaxed italic px-4">
                By creating an account, you agree to our <Link href="#" className="text-primary hover:underline font-black">Terms of Service</Link> and platform <Link href="#" className="text-primary hover:underline font-black">Privacy Protocol</Link>.
             </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-4 pb-12 bg-muted/5 border-t border-border/30">
           <div className="text-center pt-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                 Already a user on MicroJobs?{" "}
                 <Link href="/auth/login" className="text-primary hover:underline ml-1 font-black">Login Account</Link>
              </p>
           </div>
           
           <div className="flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-tighter text-muted-foreground/60 italic">
              <ShieldCheck className="size-3" />
              AES-256 Bit Encryption Active & Monitored
           </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
