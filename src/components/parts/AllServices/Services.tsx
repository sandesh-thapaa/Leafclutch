import React from "react";
import { motion } from "framer-motion";
import { SERVICES_DATA } from "./constants";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard: React.FC<{
  service: (typeof SERVICES_DATA)[0];
  index: number;
}> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:-translate-y-1 transition-all group overflow-hidden"
    >
      {/* Top Right Decorative Shape */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2F4F7] dark:bg-slate-800/50 rounded-bl-full -z-0 opacity-50 transition-colors" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Icon Container */}
        <div className="w-1/2 h-[12rem] dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary dark:text-mint mb-4 border border-blue-100/50 dark:border-slate-700">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-4 text-[#081E67] dark:text-white tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 dark:text-slate-400 mb-8 text-center leading-relaxed text-base font-normal max-w-[90%]">
          {service.description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-10">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00d9a5] flex items-center justify-center shadow-sm">
                <Check size={12} strokeWidth={4} className="text-white" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Learn More Action Box */}
        <Link to={service.href}>
          <button className="w-full flex items-center justify-between p-4 px-6 rounded-xl border border-mint/40 dark:border-mint/20 hover:bg-primary/10 dark:hover:bg-mint/10 transition-all group/btn">
            <span className="text-lg font-bold text-[#14b8a6] dark:text-mint">
              Learn More
            </span>
            <div className="text-[#14b8a6] dark:text-mint transition-transform duration-300 group-hover/btn:translate-x-1">
              <ArrowRight size={22} />
            </div>
          </button>
        </Link>
      </div>

      {/* Bottom Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#081E67] via-[#14b8a6] to-[#2dd4bf] opacity-90" />
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-[#f8fafc] dark:bg-slate-950 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            What we offer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary dark:text-white"
          >
            Available Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We leverage the latest technologies and industry best practices to
            deliver exceptional digital experiences that scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
