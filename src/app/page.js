import ComfortablySection from "@/sections/ComfortablySection";
import DashboardInterface from "@/sections/DashboardInterface";
import MainSection from "@/sections/MainSection";
import SectionScreenshots from "@/sections/SectionScreenshots";
import Features from "@/sections/Features";
import HowItWorks from "@/sections/HowItWorks";
import Button from "@/ui/Button";
import { ArrowRight, CirclePlay } from "lucide-react";
import CTA from "@/sections/CTA";
import CTAFirst from "@/sections/CTAFirst";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center pt-16 relative z-1 w-full flex-col gap-24">
      <MainSection />
      <SectionScreenshots />
      <ComfortablySection />
      <CTAFirst />
      <DashboardInterface />
      <Features />
      <HowItWorks />
      <CTA />
    </main>
  );
}
