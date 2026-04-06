import { Metadata } from "next"
import { DashboardView } from "@/components/shared/dashboard-view"

export const metadata: Metadata = {
  title: "Agent Dashboard",
}

export default function AgentDashboardPage() {
  return <DashboardView role="agent" />
}
