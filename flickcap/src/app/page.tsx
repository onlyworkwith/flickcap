import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TemplatesSection from '@/components/TemplatesSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080512] overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TemplatesSection />
      <Footer />
    </main>
  );
}
