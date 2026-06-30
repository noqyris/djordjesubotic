import { capabilities } from "@/content/capabilities";
import SectionLabel from "@/components/ui/SectionLabel";
import SpotlightCard from "@/components/SpotlightCard";

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="01" kicker="What I do" title="Full-stack, frontend-deep." />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <SpotlightCard key={c.title} capability={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
