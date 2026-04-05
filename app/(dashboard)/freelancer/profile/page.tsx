"use client"

import { 
  UserCircle, 
  Mail, 
  MapPin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Plus, 
  CheckCircle2, 
  Save 
} from "lucide-react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/shared/ui/card"
import { Input } from "@/components/shared/ui/input"
import { Button } from "@/components/shared/ui/button"
import { Label } from "@/components/shared/ui/label"
import { Badge } from "@/components/shared/ui/badge"
import { Textarea } from "@/components/shared/ui/textarea"

const skills = [
  "Photo Editing",
  "Translation (Spanish)",
  "Data Entry",
  "Content Writing",
  "Logo Design",
  "Video Transcription",
]

export default function FreelancerProfilePage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <PageHeader
        title="Profile Management"
        description="Update your professional bio, skills, and contact information."
        actionLabel="View Public Profile"
        onAction={() => alert("Redirecting to public profile...")}
      />

      <div className="grid gap-6 lg:grid-cols-3">
         <Card className="lg:col-span-2 border border-border/40 bg-card overflow-hidden">
            <CardHeader className="border-b border-border/30 bg-muted/5">
               <CardTitle className="text-lg font-bold text-foreground">Professional Info</CardTitle>
               <CardDescription className="text-xs text-muted-foreground uppercase tracking-tight">Main details shown to potential clients.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
               <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                     <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Display Name</Label>
                     <Input defaultValue="John Doe" className="rounded-lg border-border/50 bg-background font-bold h-11" />
                  </div>
                  <div className="space-y-2">
                     <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Expertise Title</Label>
                     <Input defaultValue="Professional Graphic Designer & Translator" className="rounded-lg border-border/50 bg-background font-bold h-11" />
                  </div>
               </div>
               <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Bio / Experience Summary</Label>
                  <Textarea 
                     defaultValue="Professional freelancer with 5+ years of experience in digital arts and translation. Specialized in quick-turnaround microjobs." 
                     className="rounded-lg border-border/50 bg-background font-medium min-h-[120px] resize-none" 
                  />
               </div>
               <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                     <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Location</Label>
                     <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input defaultValue="San Francisco, CA" className="pl-10 rounded-lg border-border/50 bg-background font-bold h-11" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Portfolio Website</Label>
                     <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input defaultValue="https://johndoe.design" className="pl-10 rounded-lg border-border/50 bg-background font-bold h-11" />
                     </div>
                  </div>
               </div>
               <div className="flex justify-end pt-4 border-t border-border/30">
                  <Button className="h-11 px-10 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-widest text-[10px]">
                     <Save className="mr-2 size-3.5" />
                     Save Changes
                  </Button>
               </div>
            </CardContent>
         </Card>

         <div className="space-y-6">
            <Card className="border border-border/40 bg-card">
               <CardHeader>
                  <div className="flex items-center justify-between">
                     <CardTitle className="text-sm font-bold text-foreground uppercase tracking-wider">Expert Skills</CardTitle>
                     <Button variant="ghost" size="icon" className="size-8 text-primary hover:bg-primary/10">
                        <Plus className="size-4" />
                     </Button>
                  </div>
               </CardHeader>
               <CardContent className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                     <Badge key={skill} variant="secondary" className="bg-muted/40 hover:bg-muted/60 text-[10px] font-bold py-1 px-2.5 rounded-full border-none">
                        {skill}
                     </Badge>
                  ))}
               </CardContent>
            </Card>

            <Card className="border border-border/40 bg-emerald-500/5 dark:bg-emerald-500/10 dark:border-emerald-500/20">
               <CardHeader>
                  <div className="flex items-center gap-2 text-emerald-600">
                     <Award className="size-5" />
                     <CardTitle className="text-xs font-bold uppercase tracking-wider">Verification Status</CardTitle>
                  </div>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase">Identity Verified</span>
                     <CheckCircle2 className="size-4 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase">Skills Certified</span>
                     <CheckCircle2 className="size-4 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-muted-foreground uppercase">Background Check</span>
                     <CheckCircle2 className="size-4 text-emerald-500" />
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  )
}
