import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Stats } from "@/components/landing/stats"
import { Features } from "@/components/landing/features"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden transition-colors">
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <Stats />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
