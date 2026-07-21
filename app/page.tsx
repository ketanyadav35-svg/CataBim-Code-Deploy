import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { WhyUsSection } from '@/components/sections/why-us-section'
import { EngineeringSection } from '@/components/sections/engineering-section'
import { TrainingSection } from '@/components/sections/training-section'
import { BlogSection } from '@/components/sections/blog-section'
import { ContactSection } from '@/components/sections/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <EngineeringSection />
        <TrainingSection />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
