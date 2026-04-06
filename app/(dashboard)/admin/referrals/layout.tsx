import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Referral & Commission Settings",
}

export default function AdminReferralsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
