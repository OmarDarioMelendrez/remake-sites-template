import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhatsAppButton phoneNumber="1234567890" />
    </main>
  );
}
