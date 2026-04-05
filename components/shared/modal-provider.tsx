"use client"

import { useEffect, useState } from "react"
import { UserModal } from "@/components/shared/modals/user-modal"
import { DeleteUserModal } from "@/components/shared/modals/delete-user-modal"
import { TaskModal } from "@/components/shared/modals/task-modal"

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <UserModal />
      <DeleteUserModal />
      <TaskModal />
    </>
  )
}
