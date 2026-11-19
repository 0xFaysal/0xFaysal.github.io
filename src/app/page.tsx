import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { AwardsSection } from "@/components/AwardsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection, ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
      <Hero />
      <ExperienceSection />
      <WorkSection />
      <SkillsSection />
      <EducationSection />
      <AwardsSection />
      <ContactSection />
    </div>
  );
}
