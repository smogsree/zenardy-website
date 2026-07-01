import { Hero } from '../components/Hero'
import { TrustedByMarquee } from '../components/TrustedByMarquee'
import { MacMenuBar } from '../components/MacMenuBar'
import { ZenCopilotMockup } from '../components/ZenCopilotMockup'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { ServicesOverview } from '../components/ServicesOverview'
import { IndustriesServed } from '../components/IndustriesServed'
import { ZenSolutionsSpotlight } from '../components/ZenSolutionsSpotlight'
import { AwardsSection } from '../components/AwardsSection'
import { SuccessStories } from '../components/SuccessStories'
import { TestimonialsCarousel } from '../components/TestimonialsCarousel'
import { CareersBlog } from '../components/CareersBlog'
import { ContactSection } from '../components/ContactSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustedByMarquee />
      <MacMenuBar />
      <ZenCopilotMockup />
      <WhyChooseUs />
      <ServicesOverview />
      <IndustriesServed />
      <ZenSolutionsSpotlight />
      <AwardsSection />
      <SuccessStories />
      <TestimonialsCarousel />
      <CareersBlog />
      <ContactSection />
    </>
  )
}
