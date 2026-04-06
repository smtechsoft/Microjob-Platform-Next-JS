import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Payments & Financials",
}

export default function PaymentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
