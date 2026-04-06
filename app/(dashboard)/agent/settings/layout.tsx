import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Account Settings",
}

export default function AgentSettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
