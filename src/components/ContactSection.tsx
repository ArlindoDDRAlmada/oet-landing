import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Building,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.infoEmailTitle"),
      content: "customer@onono-technologies.com",
      subtitle: t("contact.infoEmailSubtitle"),
      action: "mailto:customer@onono-technologies.com",
    },
    {
      icon: Phone,
      title: t("contact.infoPhoneTitle"),
      content: "+244 929 976 519",
      subtitle: t("contact.infoPhoneSubtitle"),
      action: "tel:+244929976519",
    },
    {
      icon: MapPin,
      title: t("contact.infoLocationTitle"),
      content: "Rua Eduardo Mondlane Ingombotas Luanda Angola",
      subtitle: t("contact.infoLocationSubtitle"),
      action: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: t("contact.infoHoursTitle"),
      content: t("contact.infoHoursContent"),
      subtitle: t("contact.infoHoursSubtitle"),
      action: null,
    },
  ];

  const services = [
    t("services.service1Title"),
    t("services.service2Title"),
    t("services.service3Title"),
    t("services.service4Title"),
    t("services.service5Title"),
    t("services.service6Title"),
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("contact.title")}{" "}
            <span className="bg-gradient-oet bg-clip-text text-transparent">
              {t("contact.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t("contact.infoTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t("contact.infoDescription")}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="group"
                  >
                    <div
                      className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all cursor-pointer"
                      onClick={() =>
                        info.action && window.open(info.action, "_blank")
                      }
                    >
                      <div className="w-12 h-12 bg-gradient-oet rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-900 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-gray-600 text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-oet rounded-2xl p-8 text-white"
            >
              <h4 className="text-2xl font-bold mb-4">
                {t("contact.whyUsTitle")}
              </h4>
              <div className="space-y-3">
                {[
                  t("contact.whyUs1"),
                  t("contact.whyUs2"),
                  t("contact.whyUs3"),
                  t("contact.whyUs4"),
                  t("contact.whyUs5"),
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm opacity-90">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-oet-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("contact.formTitle")}
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-oet-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {t("contact.formSuccessTitle")}
                  </h4>
                  <p className="text-gray-600">
                    {t("contact.formSuccessDescription")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        {t("contact.formName")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-oet-green-500 focus:border-transparent transition-all"
                        placeholder={t("contact.formNamePlaceholder")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        {t("contact.formEmail")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-oet-green-500 focus:border-transparent transition-all"
                        placeholder={t("contact.formEmailPlaceholder")}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        {t("contact.formCompany")}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-oet-green-500 focus:border-transparent transition-all"
                        placeholder={t("contact.formCompanyPlaceholder")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        {t("contact.formPhone")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-oet-green-500 focus:border-transparent transition-all"
                        placeholder={t("contact.formPhonePlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      {t("contact.formService")}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-oet-green-500 focus:border-transparent transition-all"
                    >
                      <option value="">
                        {t("contact.formServicePlaceholder")}
                      </option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      {t("contact.formMessage")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-oet-green-500 focus:border-transparent transition-all resize-none"
                      placeholder={t("contact.formMessagePlaceholder")}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-oet text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t("contact.formSubmitting")}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t("contact.formSubmit")}</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-sm text-gray-600 text-center">
                    {t("contact.formAgreement")}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
