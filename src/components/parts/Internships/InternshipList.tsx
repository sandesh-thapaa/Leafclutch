import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, DollarSign } from "lucide-react";
import { Button } from "../../ui/button";

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

const internships = [
  {
    title: "Graphic Designer Internship",
    duration: "3-6 months",
    type: "Unpaid and Remote",
    description:
      "Work on real-world projects, learn best practices, and contribute to our visual branding across various channels.",
    skills: [
      "Canva",
      "Adobe Creative Suite",
      "Typography",
      "Layout Principles",
    ],
  },
  {
    title: "UI/UX Designer Internship",
    duration: "3-6 months",
    type: "Unpaid and Remote",
    description:
      "Collaborate to design intuitive and user-friendly interfaces in Figma.",
    skills: ["Figma", "UX Principles", "Prototyping"],
  },
];

const emailRecipient = "careers@leafclutchtech.com.np";
const SHOW_INTERNSHIP_LIST = false;

const GOOGLE_FORM_URL = "https://forms.gle/4YBqdUdRyrpTx5EF8";

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

        {SHOW_INTERNSHIP_LIST && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {options.map((option, index) => {
              // Pre-fill the email body
              const body = `Hello,

I would like to apply for the ${option.title} position. Here is my information:

Name: [Your Name]
LinkedIn: [Your LinkedIn]
GitHub: [Your GitHub]
Resume: Please attach your resume file.

Thank you.
`;

              const mailtoLink = `mailto:${emailRecipient}?subject=${encodeURIComponent(
                `Internship Application: ${option.title}`
              )}&body=${encodeURIComponent(body)}`;

              return (
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
                      <span className="text-sm font-medium">
                        {option.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {option.audience}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-primary font-semibold">
                      <DollarSign className="w-5 h-5" />
                      <span className="text-sm">{option.stipend}</span>
                    </div>
                  </div>
                  <a
                    href={mailtoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full py-3 rounded-xl border border-border text-foreground font-bold hover:bg-muted transition-colors mt-auto">
                      Apply Now
                    </button>
                  </a>
                </div>
              );
            })}
          </div>
        )}

        <div className="space-y-6">
          {internships.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-accent/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {job.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {job.duration} •{" "}
                    <span className="text-accent">{job.type}</span>
                  </p>
                </div>
                <Button asChild>
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* <div className="mt-8 p-8 bg-white dark:bg-gray-800 rounded-3xl border border-dashed border-primary max-w-3xl mx-auto text-center">
          <p className="text-[2rem] text-gray-500 dark:text-gray-400 italic">
            "Only two internships are available for now."
          </p>
        </div> */}
      </div>
    </section>
  );
};
