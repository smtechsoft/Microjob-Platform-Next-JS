import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Freelancer Management",
}

export default function AgentFreelancersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
