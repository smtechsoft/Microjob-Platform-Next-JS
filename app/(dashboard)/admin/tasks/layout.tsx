import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Task Registry",
}

export default function AdminTasksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
