"use client"

import { Edit, Trash2, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { DataTable } from "@/components/shared/data-table"
import { Button } from "@/components/shared/ui/button"
import { useModal } from "@/hooks/use-modal"

const tasks = [
  {
    id: "1",
    title: "Subscribe to Youtube Channel",
    category: "social",
    reward: 0.15,
    status: "active",
    type: "micro-task",
  },
  {
    id: "2",
    title: "Download and Install App",
    category: "micro-task",
    reward: 1.50,
    status: "pending",
    type: "app-test",
  },
  {
    id: "3",
    title: "Complete Survey on Fast Food",
    category: "survey",
    reward: 0.75,
    status: "active",
    type: "survey",
  },
  {
    id: "4",
    title: "Watch 30s Video Advertisement",
    category: "social",
    reward: 0.05,
    status: "active",
    type: "ads",
  },
]

export default function AdminTasksPage() {
  const { open } = useModal()

  const actions = (item: any) => (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-md hover:bg-secondary/10 hover:text-secondary"
        onClick={() => open("EDIT_TASK", { task: item })}
      >
        <Edit className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-md hover:bg-destructive/10 hover:text-destructive"
        onClick={() => open("DELETE_TASK", { task: item })}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
      {item.status === "pending" && (
        <>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-emerald-500/10 hover:text-emerald-500">
            <CheckCircle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-destructive/10 hover:text-destructive">
            <XCircle className="h-4 w-4" />
          </Button>
        </>
      )}
    </>
  )

  return (
    <div className="space-y-8">
      <PageHeader
        title="Task Management"
        description="Oversee all micro-jobs, approve submissions, and monitor task quality."
        actionLabel="Create Task"
        onAction={() => open("CREATE_TASK")}
      />
      
      <DataTable 
        data={tasks} 
        searchKey="title" 
        placeholder="Search tasks..."
        actions={actions}
      />
    </div>
  )
}
