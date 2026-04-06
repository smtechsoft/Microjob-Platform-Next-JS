"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, TrendingUp, DollarSign } from "lucide-react"

const stats = [
  {
    label: "Total Earned",
    value: "$1.2M+",
    icon: DollarSign,
    color: "text-emerald-500",
  },
  {
    label: "Active Freelancers",
    value: "25k+",
    icon: Users,
    color: "text-blue-500",
  },
  {
    label: "Tasks Completed",
    value: "850k+",
    icon: Briefcase,
    color: "text-purple-500",
  },
  {
    label: "Success Rate",
    value: "99.8%",
    icon: TrendingUp,
    color: "text-amber-500",
  },
]

export function Stats() {
  return (
    <section className="py-20 border-t border-border/40 bg-muted/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 items-center justify-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group text-center space-y-3"
            >
              <div className="flex justify-center">
                <div className="p-3 rounded-xl bg-card border border-border/40 transition-transform group-hover:scale-110 group-hover:bg-primary/5">
                  <stat.icon className={`size-6 ${stat.color}`} />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-high-contrast">
                  {stat.value}
                </h3>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-muted-contrast italic">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
