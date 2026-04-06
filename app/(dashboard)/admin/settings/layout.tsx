import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform Settings",
}

export default function AdminSettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
