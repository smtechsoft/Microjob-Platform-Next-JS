"use client"

import { Edit, UserCheck, UserX, Mail, ExternalLink } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { DataTable } from "@/components/shared/data-table"
import { Button } from "@/components/shared/ui/button"
import { Badge } from "@/components/shared/ui/badge"
import { useModal } from "@/hooks/use-modal"

const freelancers = [
  {
    id: "1",
    name: "Alex Rivera",
    email: "alex@example.com",
    tasksCompleted: 124,
    successRate: "98%",
    status: "active",
    joined: "2024-01-15",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@example.com",
    tasksCompleted: 85,
    successRate: "95%",
    status: "active",
    joined: "2024-02-01",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    tasksCompleted: 42,
    successRate: "88%",
    status: "inactive",
    joined: "2024-02-10",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    email: "elena@example.com",
    tasksCompleted: 156,
    successRate: "99%",
    status: "pending",
    joined: "2024-03-01",
  },
]

export default function AgentFreelancersPage() {
  const { open } = useModal()

  const actions = (item: any) => (
    <div className="flex items-center gap-1">
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-md hover:bg-secondary/10 hover:text-secondary"
        title="Edit Profile"
      >
        <Edit className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-md hover:bg-primary/10 hover:text-primary"
        title="Contact"
      >
        <Mail className="h-4 w-4" />
      </Button>
      {item.status === "active" ? (
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-destructive/10 hover:text-destructive" title="Deactivate">
          <UserX className="h-4 w-4" />
        </Button>
      ) : (
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-emerald-500/10 hover:text-emerald-500" title="Activate">
          <UserCheck className="h-4 w-4" />
        </Button>
      )}
      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-slate-500/10 hover:text-slate-500" title="View Portfolio">
        <ExternalLink className="h-4 w-4" />
      </Button>
    </div>
  )

  const columns = [
    { key: "name", label: "Freelancer" },
    { key: "email", label: "Email" },
    { 
      key: "tasksCompleted", 
      label: "Tasks",
      render: (val: number) => <span className="font-bold">{val}</span>
    },
    { 
      key: "successRate", 
      label: "Success",
      render: (val: string) => (
        <Badge variant="outline" className="bg-emerald-500/5 text-emerald-600 border-emerald-200">
          {val}
        </Badge>
      )
    },
    { 
      key: "status", 
      label: "Status",
      render: (val: string) => (
        <Badge className={
          val === "active" ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20" :
          val === "pending" ? "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20" :
          "bg-destructive/10 text-destructive hover:bg-destructive/20"
        }>
          {val}
        </Badge>
      )
    },
    { key: "joined", label: "Joined" },
  ]

  return (
    <div className="space-y-8">
      <PageHeader
        title="Freelancer Management"
        description="Monitor and manage freelancers assigned to your agency."
        actionLabel="Register Freelancer"
        onAction={() => open("CREATE_FREELANCER")}
      />
      
      <DataTable 
        data={freelancers} 
        searchKey="name" 
        placeholder="Search by name..."
        actions={actions}
      />
    </div>
  )
}
