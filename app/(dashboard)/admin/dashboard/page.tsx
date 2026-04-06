import { Metadata } from "next"
import { DashboardView } from "@/components/shared/dashboard-view"

export const metadata: Metadata = {
  title: "Admin Dashboard",
}

export default function AdminDashboardPage() {
  return <DashboardView role="admin" />
}
