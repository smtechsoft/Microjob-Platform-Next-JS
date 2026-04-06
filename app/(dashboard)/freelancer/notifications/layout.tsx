import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notifications",
}

export default function FreelancerNotificationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
