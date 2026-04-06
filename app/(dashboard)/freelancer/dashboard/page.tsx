import { Metadata } from "next"
import { DashboardView } from "@/components/shared/dashboard-view"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default function FreelancerDashboardPage() {
  return <DashboardView role="freelancer" />
}
