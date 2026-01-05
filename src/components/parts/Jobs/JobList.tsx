import React from "react";
import { MapPin, Briefcase, DollarSign, Building2 } from "lucide-react";

interface JobOption {
  title: string;
  department: string;
  type: string;
  experience: string;
  location: string;
  salary: string;
}

const jobs: JobOption[] = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    type: "Full-time",
    experience: "Senior",
    location: "Remote",
    salary: "$140k - $180k",
  },
  {
    title: "Product Designer (UX/UI)",
    department: "Design",
    type: "Full-time",
    experience: "Mid-Senior",
    location: "Hybrid (KTM)",
    salary: "$110k - $150k",
  },
  {
    title: "Backend Infrastructure Lead",
    department: "Engineering",
    type: "Full-time",
    experience: "Staff/Lead",
    location: "Remote",
    salary: "$160k - $210k",
  },
  {
    title: "Product Marketing Manager",
    department: "Marketing",
    type: "Full-time",
    experience: "Mid",
    location: "Remote",
    salary: "$95k - $130k",
  },
  {
    title: "Technical Support Engineer",
    department: "Success",
    type: "Full-time",
    experience: "Entry-Mid",
    location: "Remote",
    salary: "$70k - $95k",
  },
  {
    title: "DevOps Architect",
    department: "Infrastructure",
    type: "Full-time",
    experience: "Senior",
    location: "Remote",
    salary: "$150k - $190k",
  },
];

export const JobList: React.FC = () => {
  return (
    <section id="jobs" className="py-24 bg-muted/50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary text-primary text-xs font-semibold mb-4 border border-border">
            Open Positions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find the role that matches your skills and career aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl border border-border shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center hover:border-primary/50 transition-all card-hover group"
            >
              <div className="space-y-4 w-full">
                <div>
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-accent font-semibold uppercase tracking-wider">
                    <Building2 className="w-4 h-4" />
                    {job.department}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">
                      {job.type} • {job.experience}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold sm:col-span-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>
              </div>

              <button className="mt-6 md:mt-0 w-full md:w-auto px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all shadow-sm whitespace-nowrap">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Don't see a perfect fit?{" "}
            <a href="#" className="text-primary font-bold hover:underline">
              Send us your CV anyway!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
