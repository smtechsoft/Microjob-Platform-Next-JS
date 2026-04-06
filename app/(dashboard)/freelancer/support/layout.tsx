import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support & Help Center",
}

export default function FreelancerSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
