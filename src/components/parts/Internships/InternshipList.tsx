import React from "react";
import { Clock, Users, DollarSign } from "lucide-react";

interface InternshipOption {
  title: string;
  duration: string;
  audience: string;
  stipend: string;
}

const options: InternshipOption[] = [
  {
    title: "Frontend Development Intern",
    duration: "3 months",
    audience: "Students & Freshers",
    stipend: "Stipend Provided",
  },
  {
    title: "Backend Development Intern",
    duration: "3 months",
    audience: "Students & Freshers",
    stipend: "Stipend Provided",
  },
  {
    title: "Data Science Intern",
    duration: "6 months",
    audience: "Students & Freshers",
    stipend: "Stipend Provided",
  },
  {
    title: "DevOps Intern",
    duration: "3 months",
    audience: "Students & Freshers",
    stipend: "Stipend Provided",
  },
  {
    title: "Digital Marketing Intern",
    duration: "3 months",
    audience: "Students & Freshers",
    stipend: "Stipend Provided",
  },
  {
    title: "UI/UX Design Intern",
    duration: "3 months",
    audience: "Students & Freshers",
    stipend: "Stipend Provided",
  },
];

export const InternshipList: React.FC = () => {
  return (
    <section className="py-24 bg-muted/50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary text-primary text-xs font-semibold mb-4 border border-border">
            Available Options
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Internships
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the option that best fits your goals and schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl border border-border shadow-sm flex flex-col hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-card-foreground mb-6">
                {option.title}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">{option.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">{option.audience}</span>
                </div>
                <div className="flex items-center gap-3 text-primary font-semibold">
                  <DollarSign className="w-5 h-5" />
                  <span className="text-sm">{option.stipend}</span>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl border border-border text-foreground font-bold hover:bg-muted transition-colors mt-auto">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
