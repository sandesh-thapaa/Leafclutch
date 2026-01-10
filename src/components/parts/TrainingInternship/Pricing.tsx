import React from "react";
import type { PricingCategory } from "./types";
import { Check, Tag, CalendarDays, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  categories: PricingCategory[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ categories }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Refined Section Header based on reference image */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-6 py-2 bg-primary/5 dark:bg-mint/10 border border-primary/10 dark:border-mint/20 rounded-full mb-6">
            <span className="text-sm font-bold text-primary dark:text-mint uppercase">
              Available Options
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-6">
            Our Courses
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the option that best fits your goals and schedule.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col bg-card border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden h-full"
            >
              {/* Decorative background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-mint/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-mint/10 transition-colors" />

              {/* Content area split into two columns on desktop */}
              <div className="flex flex-col sm:flex-row mb-8 flex-grow">
                <div className="flex-1 flex flex-col pr-0 sm:pr-8 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-800 pb-8 sm:pb-0">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-primary dark:text-white mb-2">
                      {cat.name}
                    </h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-black text-accent dark:text-mint">
                        {cat.totalFee}
                      </span>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                        Total Fee
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-mint/10 dark:bg-mint/5 border border-mint/20 rounded-2xl">
                    <div className="flex items-center space-x-2 text-mint">
                      <Tag className="w-4 h-4" />
                      <span className="text-sm font-black italic">
                        Enroll with just {cat.enrollmentFee}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col pt-8 sm:pt-0 sm:pl-8">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                    Courses Included
                  </p>
                  <div className="grid grid-cols-1 gap-y-4">
                    {cat.courses.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center space-x-3 group/item"
                      >
                        <div className="shrink-0 w-6 h-6 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700 group-hover/item:border-mint transition-colors">
                          <Check className="w-3.5 h-3.5 text-mint" />
                        </div>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-300 leading-tight group-hover/item:text-primary dark:group-hover/item:text-white transition-colors">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Width Button */}
              <button className="w-full py-5 bg-primary dark:bg-white text-white dark:text-primary font-black text-lg rounded-2xl group-hover:bg-mint group-hover:text-primary transition-all shadow-lg active:scale-[0.98]">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        {/* Attractive Installment Badge with Calendar Icon */}
        <div className="mt-20 flex justify-center">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-mint/20 via-accent/20 to-mint/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative inline-flex items-center gap-6 px-10 py-5 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-full shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] hover:border-mint/30">
              {/* Prominent Calendar Icon */}
              <div className="flex shrink-0 items-center justify-center w-14 h-14 bg-gradient-to-br from-mint to-accent rounded-full shadow-lg transform transition-transform group-hover:rotate-12">
                <CalendarDays className="w-7 h-7 text-white" />
              </div>

              {/* Textual Content */}
              <div className="flex flex-col">
                {/* <div className="flex items-center space-x-2 mb-0.5">
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.25em]">
                    Payment Schedule
                  </span>
                  <Sparkles className="w-3 h-3 text-mint" />
                </div> */}
                <p className="text-base md:text-xl font-bold text-gray-700 dark:text-gray-200 leading-tight">
                  Remaining fee payable in{" "}
                  <span className="text-accent dark:text-mint font-black italic">
                    5 easy installments
                  </span>
                </p>
              </div>

              {/* Verified Tag */}
              <div className="hidden md:flex flex-col items-center justify-center pl-6 border-l border-gray-100 dark:border-gray-800">
                <ShieldCheck className="w-6 h-6 text-mint mb-1" />
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">
                  Secure Pay
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
