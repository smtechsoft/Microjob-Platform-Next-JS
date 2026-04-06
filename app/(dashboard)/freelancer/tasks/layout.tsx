import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Task Board",
}

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
