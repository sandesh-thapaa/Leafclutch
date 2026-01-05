import React from "react";
import { ArrowRight } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          Join our internships program and take the next step in your career.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 bg-card text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-background transition-colors shadow-lg">
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-4 rounded-xl border-2 border-primary-foreground text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
