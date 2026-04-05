"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Shield, 
  Users, 
  BarChart4, 
  Layers, 
  Smartphone,
  Globe,
  Lock,
  Search,
  CheckCircle2
} from "lucide-react"
import { Badge } from "@/components/shared/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/ui/card"

const freelancerFeatures = [
  {
    title: "Instant Withdrawals",
    description: "Get your earnings within minutes after task approval via your choice of gateway.",
    icon: Zap,
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    title: "Verified Tasks",
    description: "Every microjob is pre-vetted by our quality control engine to ensure fair pay.",
    icon: CheckCircle2,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    title: "Referral Bonuses",
    description: "Earn lifetime commissions by inviting your network to the platform.",
    icon: Globe,
    color: "text-blue-500 bg-blue-500/10",
  },
]

const agencyFeatures = [
  {
    title: "Bulk Management",
    description: "Create and manage thousands of tasks with our advanced agency dashboard.",
    icon: Layers,
    color: "text-purple-500 bg-purple-500/10",
  },
  {
    title: "Reporting Suite",
    description: "In-depth analytics on worker performance, task accuracy, and budget usage.",
    icon: BarChart4,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    title: "Global Workforce",
    description: "Access over 50,000+ verified freelancers ready to work on your projects.",
    icon: Users,
    color: "text-blue-500 bg-blue-500/10",
  },
]

export function Features() {
  return (
    <section id="how-it-works" className="py-24 space-y-24 bg-background">
      {/* Freelancer Section */}
      <div id="explore" className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-600 border-none px-3 py-0.5 rounded-full uppercase text-[9px] font-black tracking-widest">
              Freelancer Power
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-high-contrast leading-[0.9]">
              Work Anywhere. <br /><span className="text-emerald-800! dark:text-primary! italic">Earn Instantly.</span>
            </h2>
            <p className="text-base text-muted-contrast font-medium max-w-lg leading-relaxed">
              We've built the ultimate ecosystem for freelancers to find high-paying microjobs with guaranteed same-day payouts.
            </p>
            <div className="grid gap-6 pt-6">
               {freelancerFeatures.map((f, i) => (
                  <motion.div 
                    key={f.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                     <div className={`p-2 rounded-lg size-10 flex items-center justify-center shrink-0 ${f.color} transition-transform group-hover:scale-110`}>
                        <f.icon className="size-5" />
                     </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-high-contrast uppercase tracking-tight leading-none">{f.title}</h4>
                        <p className="text-xs text-muted-contrast leading-relaxed">{f.description}</p>
                      </div>
                  </motion.div>
               ))}
            </div>
          </div>
          
          <div className="flex-1 w-full rounded-3xl border border-border/40 aspect-video relative overflow-hidden ring-1 ring-white/10 dark:ring-white/5">
             <img 
                src="/landing/hero-preview.png" 
                alt="Freelancer Workspace Preview" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Agency Section */}
      <div id="agencies" className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6">
            <Badge className="bg-purple-500/10 text-purple-600 border-none px-3 py-0.5 rounded-full uppercase text-[9px] font-black tracking-widest">
              Agency Suite
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-high-contrast leading-[0.9]">
              Scale Your Team. <br /><span className="text-secondary! italic">Manage Simply.</span>
            </h2>
            <p className="text-base text-muted-contrast font-medium max-w-lg leading-relaxed">
              Powerful tools for agencies to deploy campaigns, verify task accuracy, and manage payouts at scale.
            </p>
            <div className="grid gap-6 pt-6">
               {agencyFeatures.map((f, i) => (
                  <motion.div 
                    key={f.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                     <div className={`p-2 rounded-lg size-10 flex items-center justify-center shrink-0 ${f.color} transition-transform group-hover:scale-110`}>
                        <f.icon className="size-5" />
                     </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-high-contrast uppercase tracking-tight leading-none">{f.title}</h4>
                        <p className="text-xs text-muted-contrast leading-relaxed">{f.description}</p>
                      </div>
                  </motion.div>
               ))}
            </div>
          </div>
          
          <div className="flex-1 w-full rounded-3xl border border-border/40 aspect-video relative overflow-hidden ring-1 ring-white/10 dark:ring-white/5">
             <img 
                src="/landing/agency-preview.png" 
                alt="Agency Management Preview" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
             />
             <div className="absolute inset-0 bg-gradient-to-bl from-secondary/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
