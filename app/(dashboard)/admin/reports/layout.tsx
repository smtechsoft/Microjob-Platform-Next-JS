import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform Reports & Analytics",
}

export default function AdminReportsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
