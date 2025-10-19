import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Capabilities from "@/components/sections/Capabilities";
import Impact from "@/components/sections/Impact";
import CTA from "@/components/sections/CTA";
import Dock from "@/components/ui/dock";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Capabilities />
      <Impact />
      <CTA />
      <Dock />
    </main>
  );
};

export default Index;
