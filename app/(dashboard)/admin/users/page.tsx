"use client"

import { Edit, Trash2, Shield, UserCheck, UserX } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { DataTable } from "@/components/shared/data-table"
import { Button } from "@/components/shared/ui/button"
import { useModal } from "@/hooks/use-modal"

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    status: "active",
    joined: "2024-03-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "agent",
    status: "active",
    joined: "2024-03-05",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert@example.com",
    role: "freelancer",
    status: "inactive",
    joined: "2024-03-10",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    role: "freelancer",
    status: "pending",
    joined: "2024-03-12",
  },
]

export default function AdminUsersPage() {
  const { open } = useModal()

  const actions = (item: any) => (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-md hover:bg-secondary/10 hover:text-secondary"
        onClick={() => open("EDIT_USER", { user: item })}
      >
        <Edit className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-md hover:bg-destructive/10 hover:text-destructive"
        onClick={() => open("DELETE_USER", { user: item })}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
      {item.status === "active" ? (
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-amber-500/10 hover:text-amber-500">
          <UserX className="h-4 w-4" />
        </Button>
      ) : (
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-emerald-500/10 hover:text-emerald-500">
          <UserCheck className="h-4 w-4" />
        </Button>
      )}
    </>
  )

  return (
    <div className="space-y-8">
      <PageHeader
        title="User Management"
        description="Monitor platform users, adjust roles, and manage permissions."
        actionLabel="Add New User"
        onAction={() => open("CREATE_USER")}
      />
      
      <DataTable 
        data={users} 
        searchKey="name" 
        placeholder="Search by name..."
        actions={actions}
      />
    </div>
  )
}
