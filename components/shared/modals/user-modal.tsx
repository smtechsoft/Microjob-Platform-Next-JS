"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shared/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select"
import { Input } from "@/components/shared/ui/input"
import { Button } from "@/components/shared/ui/button"
import { Label } from "@/components/shared/ui/label"
import { Switch } from "@/components/shared/ui/switch"
import { useModal } from "@/hooks/use-modal"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Please select a role"),
  status: z.boolean().default(true),
})

export function UserModal() {
  const { isOpen, close, type, data } = useModal()

  const isModalOpen = isOpen && (type === "CREATE_USER" || type === "EDIT_USER")
  const isEdit = type === "EDIT_USER"

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      name: "",
      email: "",
      role: "freelancer",
      status: true,
    },
  })

  React.useEffect(() => {
    if (data?.user) {
      form.reset({
        name: data.user.name || "",
        email: data.user.email || "",
        role: data.user.role || "freelancer",
        status: data.user.status !== "inactive",
      })
    } else {
      form.reset({
        name: "",
        email: "",
        role: "freelancer",
        status: true,
      })
    }
  }, [data, form])

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // API call logic here
      console.log(isEdit ? "Updating user:" : "Creating user:", values)
      close()
    } catch (error) {
      console.error(error)
    }
  }

  const handleClose = () => {
    form.reset()
    close()
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px] bg-card border-border/50">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {isEdit ? "Edit User" : "Create New User"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isEdit 
              ? "Update user details and account permissions." 
              : "Add a new member to the platform."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="rounded-lg border-border focus-visible:ring-primary/20"
              {...form.register("name")}
            />
            {form.formState.errors.name && (
              <p className="text-[10px] font-bold text-destructive uppercase tracking-tight">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="rounded-lg border-border focus-visible:ring-primary/20"
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <p className="text-[10px] font-bold text-destructive uppercase tracking-tight">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="role" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Role</Label>
              <Select 
                onValueChange={(value) => form.setValue("role", value)} 
                defaultValue={form.getValues("role")}
                value={form.watch("role")}
              >
                <SelectTrigger className="rounded-lg border-border">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="agent">Agent</SelectItem>
                  <SelectItem value="freelancer">Freelancer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</Label>
              <div className="flex h-11 items-center space-x-2 rounded-lg border border-border px-3">
                <Switch
                  checked={form.watch("status")}
                  onCheckedChange={(checked) => form.setValue("status", checked)}
                />
                <span className="text-xs font-bold text-foreground">
                  {form.watch("status") ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>
          <DialogFooter className="pt-4 gap-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={handleClose} className="rounded-lg border-border/50 font-bold uppercase text-[10px] tracking-widest px-6 h-11">
              Cancel
            </Button>
            <Button type="submit" className="rounded-lg bg-primary text-primary-foreground shadow-sm font-bold uppercase text-[10px] tracking-widest px-6 h-11">
              {isEdit ? "Save Changes" : "Create User"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
