import Hero from "../components/Hero/Hero";
import FamilyStory from "../components/FamilyStory/FamilyStory";
import Features from "../components/Features/Features";
import HomeProductsPreview from "../components/HomeProductsPreview/HomeProductsPreview";
import CustomizationSteps from "../components/CustomizationSteps/CustomizationSteps";
import Gallery from "../components/Gallery/Gallery";
import ContactSection from "../components/ContactSection/ContactSection";
import ShippingBanner from "../components/ShippingBanner/ShippingBanner";
import FadeInSection from "../components/FadeInSection/FadeInSection";

export default function Home() {
  return (
    <>
      <Hero />

      <FadeInSection>
        <FamilyStory />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <HomeProductsPreview />
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <Features />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <CustomizationSteps />
      </FadeInSection>

      <FadeInSection delay={0.25}>
        <Gallery />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <ShippingBanner />
      </FadeInSection>
    </>
  );
}