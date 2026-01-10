import { useParams } from "react-router-dom";
import { services } from "../../components/parts/Services/data";
import NotFound from "../../components/ui/NotFound";
import Hero from "../../components/parts/Services/Hero";
import Features from "../../components/parts/Services/Features";
import Benefits from "../../components/parts/Services/Benefits";
import Technologies from "../../components/parts/Services/Technologies";
import FinalCTA from "../../components/parts/Services/FinalCTA";

export default function Services() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? services[slug] : null;

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="animate-in fade-in duration-700">
      <Hero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        icon={service.icon}
        backgroundImage={service.heroImage}
        backgroundSize={service.backgroundSize}
      />
      <Features features={service.features} />
      <Benefits benefits={service.benefits} />
      <Technologies technologies={service.technologies} />
      <FinalCTA />
    </div>
  );
}
