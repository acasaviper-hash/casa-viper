import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ManifestoSection } from '@/components/home/ManifestoSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { MenuPreviewSection } from '@/components/home/MenuPreviewSection';
import { SignatureDrinks } from '@/components/home/SignatureDrinks';
import { GallerySection } from '@/components/home/GallerySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ReservationSection } from '@/components/home/ReservationSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ManifestoSection />
      <ExperienceSection />
      <SignatureDrinks />
      <MenuPreviewSection />
      <GallerySection />
      <TestimonialsSection />
      <ReservationSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
