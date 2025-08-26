import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>

        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-oet-blue-600/30 via-oet-teal-500/20 to-oet-green-500/30 animate-pulse"></div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0">
          {/* Large floating circles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-oet-blue-500/10 rounded-full animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-oet-teal-500/10 rounded-full animate-float-medium"></div>
          <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-oet-green-500/10 rounded-full animate-float-fast"></div>

          {/* Floating particles */}
          <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-oet-blue-400/60 rounded-full animate-particle-1"></div>
          <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-oet-teal-400/60 rounded-full animate-particle-2"></div>
          <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-oet-green-400/60 rounded-full animate-particle-3"></div>
          <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-oet-blue-300/60 rounded-full animate-particle-4"></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-oet-teal-300/60 rounded-full animate-particle-5"></div>

          {/* Geometric lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M0,200 Q250,100 500,200 T1000,200"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-draw-line"
              />
              <path
                d="M0,400 Q250,300 500,400 T1000,400"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-draw-line-delayed"
              />
              <path
                d="M0,600 Q250,500 500,600 T1000,600"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-draw-line-delayed-2"
              />
            </svg>
          </div>
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-3 mb-6"
              >
                <img
                  src="/oet-logo.jpg"
                  alt="OET Logo"
                  className="h-16 w-auto object-contain bg-white/10 backdrop-blur-sm rounded-lg p-2"
                />
                <div>
                  <h1 className="text-2xl font-bold">
                    <span className="text-oet-green-400">ONONO</span>
                  </h1>
                  <p className="text-sm text-gray-300 uppercase tracking-wider">
                    {t("hero.subtitle")}
                  </p>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                {t("hero.title")}{" "}
                <span className="bg-gradient-oet bg-clip-text text-transparent">
                  {t("hero.titleHighlight")}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                {t("hero.description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="group bg-gradient-oet text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>{t("hero.ctaProject")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToServices}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all"
                >
                  {t("hero.ctaServices")}
                </motion.button>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                <div className="flex items-center space-x-3">
                  <Code className="w-8 h-8 text-oet-green-400" />
                  <div>
                    <h3 className="font-semibold">{t("hero.featureDev")}</h3>
                    <p className="text-sm text-gray-300">
                      {t("hero.featureDevDesc")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-oet-teal-400" />
                  <div>
                    <h3 className="font-semibold">
                      {t("hero.featureInnovation")}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {t("hero.featureInnovationDesc")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-oet-blue-400" />
                  <div>
                    <h3 className="font-semibold">
                      {t("hero.featureSecurity")}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {t("hero.featureSecurityDesc")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Technology Image with Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Background Technology Image */}
                <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
                  <img
                    src="/OnonoTech.png"
                    alt="Technology in Africa - Angola"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-oet/20"></div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-20 left-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <Code className="w-12 h-12 text-oet-green-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">
                    {t("hero.floatingCard1Title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("hero.floatingCard1Desc")}
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute top-64 right-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <Shield className="w-12 h-12 text-oet-blue-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">
                    {t("hero.floatingCard2Title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("hero.floatingCard2Desc")}
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-44 right-40 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <Zap className="w-12 h-12 text-oet-teal-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">
                    {t("hero.floatingCard3Title")}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {t("hero.floatingCard3Desc")}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
