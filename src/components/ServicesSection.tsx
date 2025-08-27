"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Cloud,
  Shield,
  Network,
  Smartphone,
  Database,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Code,
      title: t("services.service1Title"),
      description: t("services.service1Desc"),
      image: "/images/service-dev.jpg",
      features: [
        t("services.service1Feature1"),
        t("services.service1Feature2"),
        t("services.service1Feature3"),
        t("services.service1Feature4"),
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    },
    {
      icon: Cloud,
      title: t("services.service2Title"),
      description: t("services.service2Desc"),
      image: "/images/service-cloud.jpg",
      features: [
        t("services.service2Feature1"),
        t("services.service2Feature2"),
        t("services.service2Feature3"),
        t("services.service2Feature4"),
      ],
      technologies: ["React", "Node.js", "Angular", ".NET Core", "Flutter"],
    },
    {
      icon: Network,
      title: t("services.service3Title"),
      description: t("services.service3Desc"),
      image: "/images/service-integration.png",
      features: [
        t("services.service3Feature1"),
        t("services.service3Feature2"),
        t("services.service3Feature3"),
        t("services.service3Feature4"),
      ],
      technologies: ["BPMN", "RPA", "Cloud Computing", "Sistemas Integrados"],
    },
    {
      icon: Shield,
      title: t("services.service4Title"),
      description: t("services.service4Desc"),
      image: "/images/service-security.png",
      features: [
        t("services.service4Feature1"),
        t("services.service4Feature2"),
        t("services.service4Feature3"),
        t("services.service4Feature4"),
      ],
      technologies: ["Power BI", "Tableau", "SQL", "Python (Pandas)"],
    },
    {
      icon: Smartphone,
      title: t("services.service5Title"),
      description: t("services.service5Desc"),
      image: "/images/team-1.jpg",
      features: [
        t("services.service5Feature1"),
        t("services.service5Feature2"),
        t("services.service5Feature3"),
        t("services.service5Feature4"),
      ],
      technologies: ["Jira", "Trello", "Asana", "MS Project"],
    },
    {
      icon: Database,
      title: t("services.service6Title"),
      description: t("services.service6Desc"),
      image: "/images/team-2.jpg",
      features: [
        t("services.service6Feature1"),
        t("services.service6Feature2"),
        t("services.service6Feature3"),
        t("services.service6Feature4"),
      ],
      technologies: [
        "Workshops Técnicos",
        "Certificações",
        "Mentoria",
        "Programas de Capacitação",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("services.title")}{" "}
            <span className="bg-gradient-oet bg-clip-text text-transparent">
              {t("services.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("services.description")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-oet opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-oet-green-600" />
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-oet-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                        {t("services.keyFeatures")}
                      </h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-oet-green-500" />
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                        {t("services.technologies")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-oet-green-100 to-oet-teal-100 text-oet-green-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/btn w-full bg-gradient-oet text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <span>{t("services.learnMore")}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-oet rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t("services.ctaTitle")}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {t("services.ctaDescription")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center space-x-2"
            >
              <span>{t("services.ctaButton")}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
