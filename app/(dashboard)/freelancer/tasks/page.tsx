"use client"

import { 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  ArrowUpRight, 
  Star, 
  MapPin, 
  DollarSign, 
  Briefcase 
} from "lucide-react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent } from "@/components/shared/ui/card"
import { Button } from "@/components/shared/ui/button"
import { Input } from "@/components/shared/ui/input"
import { Badge } from "@/components/shared/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/shared/ui/tabs"

const tasks = [
  {
    id: "TSK-8821",
    title: "Product Image Background Removal",
    category: "Graphics & Design",
    reward: "$5.00",
    deadline: "24h left",
    status: "available",
    difficulty: "Easy",
  },
  {
    id: "TSK-8819",
    title: "Short Video Transcription (2 mins)",
    category: "Writing & Translation",
    reward: "$12.50",
    deadline: "2 days left",
    status: "in-progress",
    difficulty: "Medium",
  },
  {
    id: "TSK-8815",
    title: "Translate Landing Page to Spanish",
    category: "Writing & Translation",
    reward: "$45.00",
    deadline: "Under Review",
    status: "under-review",
    difficulty: "Hard",
  },
  {
    id: "TSK-8802",
    title: "Logo Design for Tech Startup",
    category: "Graphics & Design",
    reward: "$150.00",
    deadline: "Completed",
    status: "completed",
    difficulty: "Hard",
  },
]

export default function FreelancerTasksPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Task List"
        description="Find high-reward tasks and track your active submissions."
        actionLabel="Join Premium Group"
        onAction={() => alert("Redirecting to Premium memberships...")}
      />

      <Tabs defaultValue="available" className="w-full space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TabsList className="bg-muted/40 p-1 rounded-xl border border-border/30 h-10 w-full sm:w-auto overflow-hidden">
            <TabsTrigger value="available" className="text-xs font-bold uppercase tracking-wider rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-8 px-5">Available</TabsTrigger>
            <TabsTrigger value="active" className="text-xs font-bold uppercase tracking-wider rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-8 px-5">My Tasks</TabsTrigger>
            <TabsTrigger value="completed" className="text-xs font-bold uppercase tracking-wider rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-8 px-5">History</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search tasks..." className="pl-10 h-10 border-border/60 bg-card w-full sm:w-[250px]" />
            </div>
            <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
               <Filter className="size-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {tasks.map((task, i) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="group">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest bg-primary/5 text-primary border-primary/20">
                          {task.category}
                        </Badge>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">#{task.id}</span>
                      </div>
                      <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {task.title}
                      </h4>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                           <Clock className="size-3.5 text-muted-foreground" />
                           <span className="text-xs font-bold text-muted-foreground capitalize">{task.deadline}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                           <Star className="size-3.5 text-amber-500 fill-amber-500" />
                           <span className="text-xs font-bold text-muted-foreground">{task.difficulty}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                       <h3 className="text-xl font-bold text-foreground">{task.reward}</h3>
                       <Button size="sm" className="h-9 px-6 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-widest text-[10px]">
                          View Details
                       </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Tabs>

      <div className="flex justify-center pt-4">
         <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all">
            Browse all categories
         </Button>
      </div>
    </div>
  )
}
