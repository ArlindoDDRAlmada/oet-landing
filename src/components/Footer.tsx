"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Facebook,
  Twitter,
  Instagram,
  ArrowUp,
  Code,
  Heart,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    resources: [
      { name: t("footer.caseStudies"), href: "#projects" },
      { name: t("footer.blog"), href: "#" },
      { name: t("footer.documentation"), href: "#" },
      { name: t("footer.support"), href: "#contact" },
    ],
    legal: [
      { name: t("footer.privacyPolicy"), href: "#" },
      { name: t("footer.termsOfService"), href: "#" },
      { name: t("footer.cookiePolicy"), href: "#" },
      { name: t("footer.gdprCompliance"), href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-600",
    },
    { name: "Github", icon: Github, href: "#", color: "hover:text-gray-900" },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      content: "customer@onono-technologies.com",
      href: "mailto:customer@onono-technologies.com",
    },
    { icon: Phone, content: "+244 929 976 519", href: "tel:+244929976519" },
    {
      icon: MapPin,
      content: "Rua Eduardo Mondlane Ingombotas Luanda Angola",
      href: "https://maps.google.com",
    },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link to send email to customer@onono-technologies.com
      const subject = encodeURIComponent("Nova Subscrição Newsletter");
      const body = encodeURIComponent(
        `Nova subscrição para a newsletter:\n\nEmail: ${email}\nData: ${new Date().toLocaleString(
          "pt-PT"
        )}\n\nPor favor, adicione este email à lista de newsletter.`
      );

      const mailtoLink = `mailto:customer@onono-technologies.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      setSubmitStatus("success");
      setEmail("");

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error sending newsletter subscription:", error);
      setSubmitStatus("error");

      // Reset error status after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3Ccircle cx='55' cy='55' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold">
                    <span className="text-oet-green-400">ONONO</span>
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {t("hero.subtitle")}
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t("footer.description")}
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 text-gray-300 hover:text-oet-green-400 transition-colors group"
                      >
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">{info.content}</span>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all hover:bg-gray-700`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Resources Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-oet-blue-400">
                    {t("footer.resources")}
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <motion.button
                          onClick={() => scrollToSection(link.href)}
                          whileHover={{ x: 5 }}
                          className="text-gray-300 hover:text-white transition-colors text-sm"
                        >
                          {link.name}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold mb-4 text-purple-400">
                    {t("footer.legal")}
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-gray-300 hover:text-white transition-colors text-sm"
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="bg-gradient-oet rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">
              {t("footer.newsletterTitle")}
            </h3>
            <p className="text-white/80 mb-6">
              {t("footer.newsletterDescription")}
            </p>
            <div className="max-w-md mx-auto">
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.newsletterPlaceholder")}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                  disabled={isSubmitting}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    submitStatus === "success"
                      ? "bg-green-500 text-white"
                      : submitStatus === "error"
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-900 hover:shadow-lg"
                  } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting
                    ? "Enviando..."
                    : submitStatus === "success"
                    ? "Enviado!"
                    : submitStatus === "error"
                    ? "Erro"
                    : t("footer.subscribe")}
                </motion.button>
              </form>
              {submitStatus === "success" && (
                <p className="text-white/80 text-sm mt-2 text-center">
                  Email enviado! Verifique seu cliente de email.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-200 text-sm mt-2 text-center">
                  Por favor, insira um email válido.
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0"
            >
              <span>{t("footer.copyright")}</span>
              <span>{t("footer.madeWith")}</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>{t("footer.in")}</span>
            </motion.div>

            <div className="flex items-center space-x-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-gray-400 text-sm"
              >
                <Code className="w-4 h-4" />
                <span>{t("footer.builtWith")}</span>
              </motion.div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gradient-oet rounded-full flex items-center justify-center hover:shadow-lg transition-all"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
