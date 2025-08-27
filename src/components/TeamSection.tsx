"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Award,
  Code,
  Shield,
  Cloud,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const teamMembers = [
    {
      name: t("team.member1Name"),
      position: t("team.member1Position"),
      department: "Leadership",
      image: "/images/team-3.jpg",
      bio: t("team.member1Bio"),
      expertise: [
        t("team.member1Expertise1"),
        t("team.member1Expertise2"),
        t("team.member1Expertise3"),
        t("team.member1Expertise4"),
      ],
      social: {
        linkedin: "#",
        github: "#",
        email: "antonio.silva@oet.ao",
      },
      achievements: [
        t("team.member1Achievement1"),
        t("team.member1Achievement2"),
        t("team.member1Achievement3"),
      ],
    },
    {
      name: t("team.member2Name"),
      position: t("team.member2Position"),
      department: "Development",
      image: "/images/team-1.jpg",
      bio: t("team.member2Bio"),
      expertise: [
        t("team.member2Expertise1"),
        t("team.member2Expertise2"),
        t("team.member2Expertise3"),
        t("team.member2Expertise4"),
      ],
      social: {
        linkedin: "#",
        github: "#",
        email: "maria.fernandes@oet.ao",
      },
      achievements: [
        t("team.member2Achievement1"),
        t("team.member2Achievement2"),
        t("team.member2Achievement3"),
      ],
    },
    {
      name: t("team.member3Name"),
      position: t("team.member3Position"),
      department: "Security",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bio: t("team.member3Bio"),
      expertise: [
        t("team.member3Expertise1"),
        t("team.member3Expertise2"),
        t("team.member3Expertise3"),
        t("team.member3Expertise4"),
      ],
      social: {
        linkedin: "#",
        github: "#",
        email: "carlos.mendes@oet.ao",
      },
      achievements: [
        t("team.member3Achievement1"),
        t("team.member3Achievement2"),
        t("team.member3Achievement3"),
      ],
    },
    {
      name: t("team.member4Name"),
      position: t("team.member4Position"),
      department: "Management",
      image: "/images/team-1.jpg",
      bio: t("team.member4Bio"),
      expertise: [
        t("team.member4Expertise1"),
        t("team.member4Expertise2"),
        t("team.member4Expertise3"),
        t("team.member4Expertise4"),
      ],
      social: {
        linkedin: "#",
        github: "#",
        email: "ana.santos@oet.ao",
      },
      achievements: [
        t("team.member4Achievement1"),
        t("team.member4Achievement2"),
        t("team.member4Achievement3"),
      ],
    },
  ];

  const departments = [
    {
      name: t("team.development"),
      icon: Code,
      color: "oet-green",
      description: t("team.developmentDesc"),
    },
    {
      name: t("team.security"),
      icon: Shield,
      color: "oet-blue",
      description: t("team.securityDesc"),
    },
    {
      name: t("team.cloud"),
      icon: Cloud,
      color: "oet-teal",
      description: t("team.cloudDesc"),
    },
    {
      name: t("team.management"),
      icon: Users,
      color: "purple",
      description: t("team.managementDesc"),
    },
  ];

  const stats = [
    { number: "15+", label: t("team.stat1") },
    { number: "50+", label: t("team.stat2") },
    { number: "25+", label: t("team.stat3") },
    { number: "4", label: t("team.stat4") },
  ];

  return (
    <section id="team" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("team.title")}{" "}
            <span className="bg-gradient-oet bg-clip-text text-transparent">
              {t("team.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("team.description")}
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-3xl font-bold bg-gradient-oet bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Departments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {t("team.expertiseAreas")}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-oet rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {dept.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{dept.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 + index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Member Photo */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-oet opacity-0 group-hover:opacity-20 transition-opacity"></div>

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-oet-blue-600" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.github}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Mail className="w-5 h-5 text-oet-green-600" />
                    </motion.a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-oet-green-600 font-semibold mb-1">
                      {member.position}
                    </p>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-oet-green-100 to-oet-teal-100 text-oet-green-700 rounded-full text-xs font-medium">
                      {member.department}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                      {t("team.expertise")}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{member.expertise.length - 3} {t("team.more")}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wider flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      {t("team.keyAchievements")}
                    </h4>
                    <div className="space-y-1">
                      {member.achievements
                        .slice(0, 2)
                        .map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="text-xs text-gray-600 flex items-start"
                          >
                            <span className="w-1 h-1 bg-oet-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-oet rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t("team.ctaTitle")}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {t("team.ctaDescription")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center space-x-2"
            >
              <span>{t("team.ctaButton")}</span>
              <Users className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
