import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wallet & Earnings Status",
}

export default function AgentWalletLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
