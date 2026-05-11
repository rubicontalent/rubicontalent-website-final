import { About } from "@/components/About";
import { CandidateSection } from "@/components/CandidateSection";
import { ClientTrust } from "@/components/ClientTrust";
import { ContactForm } from "@/components/ContactForm";
import { ConsultationSection } from "@/components/ConsultationSection";
import { EmployerSection } from "@/components/EmployerSection";
import { FeaturedJobs } from "@/components/FeaturedJobs";
import { Footer } from "@/components/Footer";
import { FounderSection } from "@/components/FounderSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileCTA } from "@/components/MobileCTA";
import { ProcessSection } from "@/components/ProcessSection";
import { ReferralSection } from "@/components/ReferralSection";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyRubicon } from "@/components/WhyRubicon";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientTrust />
        <FounderSection />
        <EmployerSection />
        <CandidateSection />
        <ProcessSection />
        <FeaturedJobs />
        <WhyRubicon />
        <ReferralSection />
        <ConsultationSection />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
