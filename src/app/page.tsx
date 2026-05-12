import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { CategoryStrip } from "@/components/sections/CategoryStrip";
import { WhyPartner } from "@/components/sections/WhyPartner";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CategoryStrip />
      <WhyPartner />
      <ClientLogos />
      <CtaSection />
    </>
  );
}
