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
import { useModal } from "@/hooks/use-modal"

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  reward: z.string().min(1, "Reward is required"),
  status: z.string().min(1, "Please select a status"),
  category: z.string().min(1, "Please select a category"),
})

export function TaskModal() {
  const { isOpen, close, type, data } = useModal()

  const isModalOpen = isOpen && (type === "CREATE_TASK" || type === "EDIT_TASK")
  const isEdit = type === "EDIT_TASK"

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      reward: "",
      status: "pending",
      category: "micro-task",
    },
  })

  React.useEffect(() => {
    if (data?.task) {
      form.reset({
        title: data.task.title || "",
        reward: String(data.task.reward || ""),
        status: data.task.status || "pending",
        category: data.task.category || "micro-task",
      })
    } else {
      form.reset({
        title: "",
        reward: "",
        status: "pending",
        category: "micro-task",
      })
    }
  }, [data, form])

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // API call logic here
      console.log(isEdit ? "Updating task:" : "Creating task:", values)
      close()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border/50 shadow-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {isEdit ? "Edit Task" : "Create Task"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isEdit 
              ? "Modify task requirements and reward structure." 
              : "Launch a new job to the platform's freelancer pool."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Task Title</Label>
            <Input
              placeholder="e.g. Subscribe to Youtube Channel"
              className="rounded-lg"
              {...form.register("title")}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
                 <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Reward ($)</Label>
                 <Input
                   type="number"
                   step="0.01"
                   placeholder="0.25"
                   className="rounded-lg"
                   {...form.register("reward")}
                 />
             </div>
             <div className="space-y-2">
                 <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</Label>
                 <Select 
                   onValueChange={(value) => form.setValue("category", value)} 
                   value={form.watch("category")}
                 >
                   <SelectTrigger className="rounded-lg">
                     <SelectValue placeholder="Category" />
                   </SelectTrigger>
                  <SelectContent className="bg-popover border-border/50">
                    <SelectItem value="micro-task">Micro Task</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="survey">Survey/Quiz</SelectItem>
                  </SelectContent>
                </Select>
             </div>
          </div>

           <div className="space-y-2">
             <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</Label>
             <Select 
               onValueChange={(value) => form.setValue("status", value)} 
               value={form.watch("status")}
             >
               <SelectTrigger className="rounded-lg">
                 <SelectValue placeholder="Select status" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="active">Active</SelectItem>
                 <SelectItem value="pending">Pending Review</SelectItem>
                 <SelectItem value="rejected">Rejected</SelectItem>
                 <SelectItem value="completed">Completed</SelectItem>
               </SelectContent>
            </Select>
          </div>

          <DialogFooter className="pt-6 gap-2 sm:gap-0">
            <Button type="button" variant="ghost" onClick={close} className="rounded-lg font-bold uppercase text-[10px] tracking-widest px-8">
              Discard
            </Button>
            <Button type="submit" className="rounded-lg bg-primary text-primary-foreground shadow-none px-8 font-bold uppercase text-[10px] tracking-widest h-11">
              {isEdit ? "Update Job" : "Publish Task"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
