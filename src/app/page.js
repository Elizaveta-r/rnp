import ComfortablySection from "@/sections/ComfortablySection";
import DashboardInterface from "@/sections/DashboardInterface";
import MainSection from "@/sections/MainSection";
import SectionScreenshots from "@/sections/SectionScreenshots";
import Features from "@/sections/Features";
import HowItWorks from "@/sections/HowItWorks";
import CTA from "@/sections/CTA";
import CTAFirst from "@/sections/CTAFirst";

export const metadata = {
  metadataBase: new URL("https://rnp-theta.vercel.app"),
  title: "ИИ-помощник для бизнеса — автоматизация, контроль и эффективность",
  description:
    "Пока вы управляете бизнесом — искусственный интеллект следит за порядком. Автоматизация процессов, контроль сотрудников и напоминания о важном. Всё под контролем 24/7.",
  openGraph: {
    title: "ИИ-помощник для бизнеса — автоматизация и порядок 24/7",
    description:
      "Ваш бизнес под контролем искусственного интеллекта. Автоматизация рутинных задач, контроль сотрудников и напоминания о важном — всё в одном решении.",
    url: "https://rnp-theta.vercel.app/",
    siteName: "Letuchka",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ИИ-помощник для бизнеса Letuchka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ИИ-помощник для бизнеса — Letuchka",
    description:
      "Искусственный интеллект управляет рутиной, чтобы вы управляли бизнесом. Попробуйте бесплатно!",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://rnp-theta.vercel.app/",
  },
};

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
