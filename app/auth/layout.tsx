import { Wallet } from "lucide-react"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 pointer-events-none">
        <div className="size-[500px] rounded-full bg-primary" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 blur-3xl opacity-10 pointer-events-none">
        <div className="size-[400px] rounded-full bg-secondary" />
      </div>

      {/* Header */}
      <header className="p-8 relative z-20">
        <Link href="/" className="flex items-center gap-2 group w-fit">
          <div className="size-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <Wallet className="size-5" />
          </div>
          <span className="text-xl font-black tracking-tighter text-foreground uppercase">
            Micro<span className="text-primary font-black">Jobs</span>
          </span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
         {children}
      </main>

      {/* Footer */}
      <footer className="p-8 text-center relative z-20">
         <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
            &copy; 2026 MicroJobs Portal. Standard Security Protocol Active.
         </p>
      </footer>
    </div>
  )
}
