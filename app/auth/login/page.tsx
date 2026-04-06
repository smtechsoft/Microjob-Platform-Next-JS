"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Globe,
  Users
} from "lucide-react"

import { Button } from "@/components/shared/ui/button"
import { Input } from "@/components/shared/ui/input"
import { Label } from "@/components/shared/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/shared/ui/card"
import { Badge } from "@/components/shared/ui/badge"
import { RadioGroup } from "@/components/shared/ui/radio-group"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"

export default function LoginPage() {
  const [role, setRole] = React.useState("user")

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md"
    >
      <Card className="rounded-xl relative overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
        
        <CardHeader className="space-y-2 pb-8 pt-10">
          <div className="flex justify-center mb-4">
             <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest text-primary border-primary/20 bg-primary/5 px-3 py-1">
                Authorized Access Only
             </Badge>
          </div>
          <CardTitle className="text-3xl font-black tracking-tighter text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground italic">
            Secure login to your TaskGo dashboard.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Identity Selection - Role Radio Group */}
          <div className="space-y-3">
             <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Select Identity</Label>
             <RadioGroup 
                defaultValue="user" 
                onValueChange={setRole}
                className="grid grid-cols-3 gap-3"
             >
                {[
                   { id: "user", label: "User", icon: Users },
                   { id: "admin", label: "Admin", icon: ShieldCheck },
                   { id: "agent", label: "Agent", icon: Globe }
                ].map((item) => (
                   <div key={item.id} className="relative">
                      <RadioGroupPrimitive.Item
                         value={item.id}
                         id={item.id}
                         className={cn(
                            "peer sr-only",
                            "focus:outline-none"
                         )}
                      />
                      <Label
                         htmlFor={item.id}
                         className={cn(
                            "flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-border bg-card cursor-pointer transition-all hover:bg-muted/50",
                            "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-primary/20",
                            "text-[10px] font-black uppercase tracking-widest text-muted-foreground peer-data-[state=checked]:text-primary"
                         )}
                      >
                         <item.icon className="size-5" strokeWidth={2.5} />
                         {item.label}
                      </Label>
                   </div>
                ))}
             </RadioGroup>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</Label>
              <div className="relative group">
                 <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                 <Input 
                   type="email" 
                   placeholder="name@example.com" 
                   className="pl-11 rounded-xl h-12 bg-background font-bold focus:ring-primary/20"
                 />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                 <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Password</Label>
                 <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">Forgot?</Link>
              </div>
              <div className="relative group">
                 <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                 <Input 
                   type="password" 
                   placeholder="••••••••" 
                   className="pl-11 rounded-xl h-12 bg-background font-bold focus:ring-primary/20"
                 />
              </div>
            </div>
          </div>

          <Button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-[11px] shadow-none group">
             Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
             <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-2 pb-10">
           <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                 New to TaskGo?{" "}
                 <Link href="/auth/register" className="text-primary hover:underline ml-1">Create Account</Link>
              </p>
           </div>
           
           <div className="flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-tighter text-muted-foreground/60 italic">
              <ShieldCheck className="size-3" />
              AES-256 Bit Encryption Active
           </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
