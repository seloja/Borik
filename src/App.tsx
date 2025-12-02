import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StoriesSection } from './components/StoriesSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ProjectsSection />
        <StoriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
