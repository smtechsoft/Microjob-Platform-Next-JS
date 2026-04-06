import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wallet & Earnings",
}

export default function WalletLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
