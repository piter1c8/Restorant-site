import { Layout } from "@/components/layout/Layout";
import { AboutSection } from "@/components/sections/AboutSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TeamSection } from "@/components/sections/TeamSection";

export default function Index() {
  return <Layout><HeroSection /><StatsSection /><ServicesSection /><AdvantagesSection /><AboutSection /><PricingSection /><ProcessSection /><GallerySection /><BookingSection /><TeamSection /><ReviewsSection /><FAQSection /><ContactsSection /><CTASection /></Layout>;
}
