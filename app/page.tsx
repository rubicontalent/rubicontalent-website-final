import { About } from "@/components/About";
import { CandidateSection } from "@/components/CandidateSection";
import { ContactForm } from "@/components/ContactForm";
import { EmployerSection } from "@/components/EmployerSection";
import { FeaturedJobs } from "@/components/FeaturedJobs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ReferralSection } from "@/components/ReferralSection";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <EmployerSection />
        <CandidateSection />
        <FeaturedJobs />
        <ReferralSection />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
