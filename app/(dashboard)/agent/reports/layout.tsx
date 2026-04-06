import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics & Reports",
}

export default function AgentReportsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
