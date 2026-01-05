import { Benefits } from "../../components/parts/Jobs/Benefits";
import { CTA } from "../../components/parts/Jobs/CTA";
import { JobList } from "../../components/parts/Jobs/JobList";
import { Hero } from "../../components/parts/Jobs/JobsHero";

export default function Job() {
  return (
    <div>
      <Hero />
      <Benefits />
      <JobList />
      <CTA />
    </div>
  );
}
