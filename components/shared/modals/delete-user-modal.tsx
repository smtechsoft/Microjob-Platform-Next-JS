"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/shared/ui/alert-dialog"
import { useModal } from "@/hooks/use-modal"

export function DeleteUserModal() {
  const { isOpen, close, type, data } = useModal()

  const isModalOpen = isOpen && type === "DELETE_USER"
  const { user } = data

  const onConfirm = async () => {
    try {
      // API Call would go here
      console.log("Deleting user:", user?.id)
      close()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AlertDialog open={isModalOpen} onOpenChange={close}>
      <AlertDialogContent className="bg-card border-border/50">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold">Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground">
            This action cannot be undone. This will permanently delete the account for{" "}
            <span className="font-bold text-foreground">{user?.name || "this user"}</span> and remove their data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-lg border-border/50">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg shadow-sm"
          >
            Confirm Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
