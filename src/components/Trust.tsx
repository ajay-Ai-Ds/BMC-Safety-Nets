"use client";

import { motion } from "framer-motion";
import { Award, Shield, Clock, Zap, CheckCircle2, IndianRupee, Users, Sparkles } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    title: "10+ Years Experience",
    desc: "A decade of providing quality protection across Bangalore."
  },
  {
    icon: Sparkles,
    title: "1000+ Installations",
    desc: "Over a thousand homes and spaces secured successfully."
  },
  {
    icon: Shield,
    title: "Warranty Guarded",
    desc: "Up to 5 years warranty on premium netting products."
  },
  {
    icon: Clock,
    title: "24/7 Hours Support",
    desc: "Always available for booking, inquiries, and customer help."
  },
  {
    icon: Zap,
    title: "Same Day Service",
    desc: "Quick inspection and installation within 24 hours of booking."
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Unbeatable rates with no hidden costs or surprise fees."
  },
  {
    icon: CheckCircle2,
    title: "Premium Materials",
    desc: "UV-resistant, high-tensile HDPE nets and steel grills."
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Highly-trained, certified technicians for secure fittings."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Trust() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-slate-100 rounded-full blur-3xl pointer-events-none opacity-60"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-primary-light"
          >
            Why BMC Safety Nets
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display"
          >
            Bangalore's Most Trusted Protection Services
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto mt-4 rounded"
          />
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 12px 20px -8px rgba(0,0,0,0.08)" }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-300 relative group"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-4 border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
