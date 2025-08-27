"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: "100%", label: t("about.stat1") },
    { number: "24/7", label: t("about.stat2") },
    { number: "2025", label: t("about.stat3") },
    { number: "∞", label: t("about.stat4") },
  ];

  const values = [
    {
      icon: Target,
      title: t("about.value1Title"),
      description: t("about.value1Desc"),
    },
    {
      icon: Users,
      title: t("about.value2Title"),
      description: t("about.value2Desc"),
    },
    {
      icon: Award,
      title: t("about.value3Title"),
      description: t("about.value3Desc"),
    },
    {
      icon: Globe,
      title: t("about.value4Title"),
      description: t("about.value4Desc"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("about.title")}{" "}
            <span className="bg-gradient-oet bg-clip-text text-transparent">
              {t("about.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t("about.presenceTitle")}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("about.presenceDescription1")}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t("about.presenceDescription2")}
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-oet-green-50 to-oet-teal-50 p-6 rounded-2xl border border-oet-green-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {t("about.missionTitle")}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {t("about.missionDescription")}
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl font-bold bg-gradient-oet bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-oet-blue-50 to-oet-teal-50 p-6 rounded-2xl border border-oet-blue-200"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {t("about.visionTitle")}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {t("about.visionDescription")}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("about.valuesTitle")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-oet rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
