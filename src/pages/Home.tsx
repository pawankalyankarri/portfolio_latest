import { Navigation } from '../components/Navigation'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { EducationSection } from '../components/EducationSection'

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
