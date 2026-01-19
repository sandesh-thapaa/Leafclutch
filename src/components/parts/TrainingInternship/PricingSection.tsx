import React, { useEffect } from "react";
import type { PricingCategory } from "./types";
import { Check, Tag, CalendarDays } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const PricingSection: React.FC = () => {
  const location = useLocation();
  const [trainings, setTrainings] = useState<TrainingResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrainings = async () => {
      try {
        setLoading(true);
        const data = await trainingApi.getAll();
        setTrainings(data);
      } catch (err) {
        console.error("Pricing fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    getTrainings();
  }, []);

  useEffect(() => {
    if (!location.hash || loading) return;
    const id = location.hash.slice(1);
    const timeout = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [location.key, location.hash, loading]);

  if (loading) {
    return (
      <div className="py-24 text-center font-bold animate-pulse">
        Updating Prices...
      </div>
    );
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          {trainings.map((train) => {
            const cardId = (train.title || "training")
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-");

            return (
              <div
                key={train.id}
                id={cardId}
                className="group relative flex flex-col bg-card border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-mint/5 rounded-full blur-3xl -mr-16 -mt-16" />

                <div className="flex flex-col sm:flex-row mb-8 flex-grow">
                  {/* Left Column: Price & Mentors */}
                  <div className="flex-1 flex flex-col pr-0 sm:pr-8 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-800 pb-8 sm:pb-0 justify-between min-h-[260px]">
                    {/* Price Section */}
                    <div>
                      <h3 className="text-2xl font-black text-primary dark:text-white mb-2">
                        {train.title}
                      </h3>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-black text-accent dark:text-mint">
                          Rs. {train.effective_price}
                        </span>
                        {train.base_price > train.effective_price && (
                          <span className="text-sm text-gray-400 line-through">
                            Rs. {train.base_price}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase">
                        Total Course Fee
                      </span>
                    </div>

                    {/* Mentors Section (Pinned to bottom of this column) */}
                    <div className="mt-8">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                        Lead Mentors
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {train.mentors && train.mentors.length > 0 ? (
                          train.mentors.map((mentor, mIdx) => (
                            <div
                              key={mIdx}
                              className="flex items-center gap-2 bg-muted p-1.5 pr-3 rounded-xl border border-border"
                            >
                              {mentor.photo_url ? (
                                <img
                                  src={mentor.photo_url}
                                  alt={mentor.name}
                                  className="w-7 h-7 rounded-full object-cover border border-primary/20 flex-shrink-0"
                                />
                              ) : (
                                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <User className="w-3.5 h-3.5 text-primary" />
                                </div>
                              )}
                              <span className="text-[11px] font-bold text-primary dark:text-white truncate max-w-[90px]">
                                {mentor.name}
                              </span>
                            </div>
                          ))
                        ) : (
                          <span className="text-xs text-gray-400 italic">
                            Industry Experts
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Benefits */}
                  <div className="flex-1 flex flex-col pt-8 sm:pt-0 sm:pl-8">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                      Course Benefits
                    </p>
                    <div className="grid grid-cols-1 gap-y-4">
                      {train.benefits?.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start space-x-3 group/item"
                        >
                          <div className="shrink-0 mt-1 w-5 h-5 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                            <Check className="w-3 h-3 text-mint" />
                          </div>
                          <span className="text-sm font-bold text-gray-600 dark:text-gray-300 leading-tight">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              <div className="grid grid-cols-2 gap-4">
                <Link
                  to={`/course/${cat.name
                    .toLowerCase()
                    .replace(/&/g, "")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                >
                  <button className="w-full border-2 border-primary py-5 text-primary bg-white dark:text-white font-bold text-lg rounded-2xl hover:bg-mint hover:text-primary transition-all shadow-lg active:scale-[0.98]">
                    View more
                  </button>
                </Link>
                {/* Full Width Button */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSehIqCJm6ITkjUJcu9djYG4H60Uku61Z4Wlg_naCjTLUTjqlQ/viewform?usp=sharing&ouid=102811312275506082295"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full py-5 bg-primary text-white dark:text-white font-bold text-lg rounded-2xl hover:bg-mint hover:text-primary transition-all shadow-lg active:scale-[0.98]">
                    Enroll Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="relative inline-flex items-center gap-6 px-10 py-5 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-full shadow-xl">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-mint to-accent rounded-full shadow-lg">
              <CalendarDays className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-base md:text-xl font-bold text-gray-700 dark:text-gray-200">
                Remaining fee payable in
                <span className="text-accent dark:text-mint font-black italic">
                  5 easy installments
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
