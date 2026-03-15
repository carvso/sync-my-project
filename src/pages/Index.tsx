import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Languages from '@/components/Languages';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Experience from '@/components/Experience';
import TechRoles from '@/components/TechRoles';
import RecruitmentProcess from '@/components/RecruitmentProcess';
import FinalCta from '@/components/FinalCta';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Languages />
        <Skills />
        <WorkExperience />
        <Experience />
        <TechRoles />
        <RecruitmentProcess />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
