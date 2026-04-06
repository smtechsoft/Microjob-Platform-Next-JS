import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Referral & Invite Program",
}

export default function FreelancerReferralsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
