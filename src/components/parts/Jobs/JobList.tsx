import React from "react";
import {
  MapPin,
  Briefcase,
  DollarSign,
  Building2,
  CheckCircle2,
} from "lucide-react";

interface JobOption {
  title: string;
  department: string;
  type: string;
  experience: string;
  location: string;
  salary: string;
  requirements: string[];
}

const jobs: JobOption[] = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    type: "Full-time",
    experience: "Senior",
    location: "Remote",
    salary: "$140k - $180k",
    requirements: [
      "5+ years of experience in Python and JavaScript (React/Node.js)",
      "Strong understanding of cloud services (AWS/GCP)",
      "Experience with distributed systems architecture",
      "Proven track record of technical mentorship",
    ],
  },
  {
    title: "Product Designer (UX/UI)",
    department: "Design",
    type: "Full-time",
    experience: "Mid-Senior",
    location: "Hybrid (KTM)",
    salary: "$110k - $150k",
    requirements: [
      "5+ years of experience in Python and JavaScript (React/Node.js)",
      "Strong understanding of cloud services (AWS/GCP)",
      "Experience with distributed systems architecture",
      "Proven track record of technical mentorship",
    ],
  },
  {
    title: "Backend Infrastructure Lead",
    department: "Engineering",
    type: "Full-time",
    experience: "Staff/Lead",
    location: "Remote",
    salary: "$160k - $210k",
    requirements: [
      "5+ years of experience in Python and JavaScript (React/Node.js)",
      "Strong understanding of cloud services (AWS/GCP)",
      "Experience with distributed systems architecture",
      "Proven track record of technical mentorship",
    ],
  },
  {
    title: "Product Marketing Manager",
    department: "Marketing",
    type: "Full-time",
    experience: "Mid",
    location: "Remote",
    salary: "$95k - $130k",
    requirements: [
      "5+ years of experience in Python and JavaScript (React/Node.js)",
      "Strong understanding of cloud services (AWS/GCP)",
      "Experience with distributed systems architecture",
      "Proven track record of technical mentorship",
    ],
  },
  {
    title: "Technical Support Engineer",
    department: "Success",
    type: "Full-time",
    experience: "Entry-Mid",
    location: "Remote",
    salary: "$70k - $95k",
    requirements: [
      "5+ years of experience in Python and JavaScript (React/Node.js)",
      "Strong understanding of cloud services (AWS/GCP)",
      "Experience with distributed systems architecture",
      "Proven track record of technical mentorship",
    ],
  },
  {
    title: "DevOps Architect",
    department: "Infrastructure",
    type: "Full-time",
    experience: "Senior",
    location: "Remote",
    salary: "$150k - $190k",
    requirements: [
      "5+ years of experience in Python and JavaScript (React/Node.js)",
      "Strong understanding of cloud services (AWS/GCP)",
      "Experience with distributed systems architecture",
      "Proven track record of technical mentorship",
    ],
  },
];

export const JobList: React.FC = () => {
  return (
    <section id="jobs" className="py-24 bg-muted/50 px-4 ">
      <div className="max-w-7xl mx-auto grid place-items-center">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="max-w-2xl w-full bg-card rounded-[2rem] border-2 border-border shadow-sm overflow-hidden flex flex-col relative group transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2"
            >
              {/* Main Content Padding */}
              <div className="p-8 pb-4">
                {/* Header Section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {job.title}
                  </h2>
                  <div className="flex items-center gap-2 text-accent font-bold tracking-widest text-xs">
                    <Building2 size={16} />
                    <span className="uppercase">{job.department}</span>
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-y-4 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase size={18} />
                    <span className="text-sm font-medium">
                      {job.type} • {job.experience}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} />
                    <span className="text-sm font-medium">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-card-foreground font-bold col-span-2">
                    <DollarSign size={18} className="text-primary" />
                    <span className="text-lg">{job.salary}</span>
                  </div>
                </div>

                {/* Requirements Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-card-foreground">
                    Key Requirements
                  </h3>
                  <ul className="space-y-3">
                    {job.requirements.map((req, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-0.5 text-accent shrink-0">
                          <CheckCircle2
                            size={20}
                            fill="currentColor"
                            className="text-card fill-accent"
                          />
                        </div>
                        <span className="text-card-foreground/80 font-medium leading-tight">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Button Footer */}
              <div className="mt-4 px-4 pb-4 flex justify-center translate-y-2">
                <button className="w-[90%] bg-primary text-primary-foreground font-bold py-4 px-8 rounded-2xl shadow-lg hover:opacity-90 transition-all duration-200 active:scale-[0.98] flex items-center justify-center">
                  Apply Now
                </button>
              </div>

              {/* Small base padding */}
              <div className="h-4" />
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
