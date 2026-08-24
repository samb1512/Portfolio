import {
  ArrowUpRight,
  Menu,
  X,
  FileText,
} from "lucide-react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import projects from "./data/projects.js"
import skills from "./data/skills.js"
import achievements from "./data/achievements.js"
import certifications from "./data/certifications.js"
import currentlyLearning from "./data/currentlyLearning.js"
import languages from "./data/languages.js"

// =====================================================
// PROFILE LINKS
// =====================================================

const githubUrl = "https://github.com/samb1512"

const linkedinUrl =
  "https://www.linkedin.com/in/samiksha-bang-6bb089410"

const resumeUrl = "/Resume.pdf"

const email = "bangsamiksha@gmail.com"

// =====================================================
// NAVIGATION ITEMS
// =====================================================

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Learning", href: "#currently-learning" },
  { label: "Education", href: "#education" },
  { label: "Languages", href: "#languages" },
  { label: "Contact", href: "#contact" },
]

// =====================================================
// APP
// =====================================================

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // ---------------------------------------------------
  // Copy Gmail
  // ---------------------------------------------------

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email)
      } else {
        const textArea = document.createElement("textarea")

        textArea.value = email
        textArea.style.position = "fixed"
        textArea.style.left = "-999999px"
        textArea.style.top = "-999999px"

        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()

        document.execCommand("copy")
        document.body.removeChild(textArea)
      }

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error("Copy failed:", error)
      alert("Please copy the email manually: " + email)
    }
  }

  // ---------------------------------------------------
  // Close mobile menu
  // ---------------------------------------------------

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // ---------------------------------------------------
  // Close menu when pressing Escape
  // ---------------------------------------------------

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  // ---------------------------------------------------
  // Prevent background scrolling when menu is open
  // ---------------------------------------------------

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">

          {/* Logo */}

          <a
            href="#home"
            onClick={closeMenu}
            className="font-semibold tracking-wide transition hover:text-white"
          >
            Samiksha Bang
          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-5 text-sm text-white/60 lg:flex">

            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition hover:text-white"
              >
                {item.label}
              </a>
            ))}

          </div>

          {/* Desktop Buttons */}

          <div className="hidden items-center gap-2 xl:flex">

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
            >
              LinkedIn
              <ArrowUpRight size={15} />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/80"
            >
              <FileText size={16} />
              Resume
            </a>

          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/95 lg:hidden">

            <div className="mx-auto max-h-[calc(100vh-73px)] max-w-6xl overflow-y-auto px-6 py-6">

              <div className="flex flex-col gap-1">

                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-base text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="my-4 h-px bg-white/10" />

                {/* GitHub */}

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  GitHub

                  <ArrowUpRight
                    size={16}
                    className="ml-auto"
                  />
                </a>

                {/* LinkedIn */}

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  LinkedIn

                  <ArrowUpRight
                    size={16}
                    className="ml-auto"
                  />
                </a>

                {/* Resume */}

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black transition hover:bg-white/80"
                >
                  <FileText size={18} />
                  View Resume
                </a>

              </div>

            </div>

          </div>
        )}

      </nav>

      {/* =================================================
          HERO
      ================================================= */}

      <section
        id="home"
        className="flex min-h-screen items-center px-6 pb-16 pt-32 sm:px-8"
      >

        <div className="mx-auto w-full max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40 sm:text-sm">
              Artificial Intelligence & Machine Learning
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
              Samiksha Bang
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              AI & ML student passionate about machine learning,
              data analytics, and building practical technology solutions.
            </p>

            {/* Hero Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80"
              >
                View Projects
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Resume
                <ArrowUpRight size={16} />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                GitHub
                <ArrowUpRight size={16} />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                LinkedIn
                <ArrowUpRight size={16} />
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =================================================
          PORTFOLIO HIGHLIGHTS
      ================================================= */}

      <section className="border-t border-white/10 px-6 py-20">

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">

          <HighlightCard
            value="8.82"
            label="Current CGPA"
          />

          <HighlightCard
            value={projects.length}
            label="Projects"
            delay={0.1}
          />

          <HighlightCard
            value={languages.length}
            label="Languages"
            delay={0.2}
          />

          <HighlightCard
            value="2027"
            label="Graduation"
            delay={0.3}
          />

        </div>

      </section>

      {/* =================================================
          ABOUT
      ================================================= */}

      <section
        id="about"
        className="scroll-mt-20 border-t border-white/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionLabel text="About" />

          <div className="mt-8 max-w-3xl">

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Building with data, AI and technology.
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              I am a B.Tech student specializing in Artificial Intelligence
              and Machine Learning. I enjoy working with machine learning,
              data analytics, visualization, and modern development tools
              to turn data into useful solutions.
            </p>

          </div>

        </div>

      </section>

      {/* =================================================
          SKILLS
      ================================================= */}

      <section
        id="skills"
        className="scroll-mt-20 border-t border-white/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionLabel text="Skills" />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {skills.map((group) => (

              <div key={group.category}>

                <h3 className="mb-4 text-lg font-medium text-white">
                  {group.category}
                </h3>

                <div className="space-y-3">

                  {group.items.map((skill) => (

                    <div
                      key={skill}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/70 transition hover:border-white/30 hover:bg-white/[0.06]"
                    >
                      {skill}
                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          PROJECTS
      ================================================= */}

      <section
        id="projects"
        className="scroll-mt-20 border-t border-white/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionLabel text="Projects" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {projects.map((project, index) => (

              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05]"
              >

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {project.description}
                </p>

                {project.technologies?.length > 0 && (

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                )}

                <div className="mt-6 flex flex-wrap gap-5">

                  {project.github && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                    >
                      GitHub
                      <ArrowUpRight size={15} />
                    </a>

                  )}

                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>

                  )}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          ACHIEVEMENTS
      ================================================= */}

      <section
        id="achievements"
        className="scroll-mt-20 border-t border-white/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionLabel text="Achievements" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {achievements.map((achievement, index) => (

              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05]"
              >

                <p className="text-sm uppercase tracking-wider text-white/40">
                  {achievement.organization}
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  {achievement.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {achievement.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          CERTIFICATIONS
      ================================================= */}

      <section
        id="certifications"
        className="scroll-mt-20 border-t border-white/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionLabel text="Certifications" />

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Certifications & Experience
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {certifications.map((certificate, index) => (

              <motion.div
                key={`${certificate.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20"
              >

                {/* Certificate Image */}

                {certificate.image && (

                  <div className="flex aspect-video items-center justify-center overflow-hidden border-b border-white/10 bg-white">

                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className="h-full w-full object-contain"
                    />

                  </div>

                )}

                <div className="p-6">

                  <p className="text-sm text-white/40">
                    {certificate.organization}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">
                    {certificate.date}
                  </p>

                  {/* View Certificate */}

                  {certificate.link && (

                    <div className="mt-5">

                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        View Certificate
                        <ArrowUpRight size={16} />
                      </a>

                    </div>

                  )}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          CURRENTLY LEARNING
      ================================================= */}

      <section
        id="currently-learning"
        className="scroll-mt-20 border-t border-white/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionLabel text="Currently Learning" />

          <h2 className="mt-6 max-w-3xl text-3xl font-semibold sm:text-4xl">
            Continuously learning and improving.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/60">
            I am continuously developing my technical and analytical skills
            through hands-on projects, practice, and learning.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {currentlyLearning.map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white/70 transition hover:border-white/30 hover:bg-white/[0.06]"
              >

                <p className="font-medium">
                  {item}
                </p>

                <p className="mt-2 text-xs uppercase tracking-wider text-white/30">
                  Currently Learning
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          EDUCATION
      ================================================= */}

      <section
        id="education"
        className="scroll-mt-20 border-t border-white/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionLabel text="Education" />

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <h2 className="text-2xl font-semibold">
              B.Tech in Artificial Intelligence and Machine Learning
            </h2>

            <p className="mt-3 text-white/60">
              Sanjay Ghodawat University
            </p>

            <p className="mt-2 text-sm text-white/40">
              Kolhapur, Maharashtra, India
            </p>

            <p className="mt-2 text-sm text-white/40">
              2023 – 2027
            </p>

            <p className="mt-4 text-white/60">
              CGPA: 8.82
            </p>

          </div>

        </div>

      </section>

      {/* =================================================
          LANGUAGES
      ================================================= */}

      <section
        id="languages"
        className="scroll-mt-20 border-t border-white/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionLabel text="Languages" />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {languages.map((language, index) => (

              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/30 hover:bg-white/[0.06]"
              >

                <h3 className="text-lg font-medium">
                  {language.name}
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  {language.level}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        id="contact"
        className="scroll-mt-20 border-t border-white/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionLabel text="Contact" />

          <h2 className="mt-8 text-4xl font-semibold">
            Let's connect.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-white/60">
            Interested in AI, machine learning, data analytics,
            and technology-driven solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {/* Email Me - Opens Gmail */}

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white/10"
            >
              Email Me
              <ArrowUpRight size={16} />
            </a>

            {/* Copy Gmail */}

            <button
              type="button"
              onClick={copyEmail}
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white/10"
            >
              {copied ? "Copied ✓" : "Copy Gmail"}
            </button>

            {/* GitHub */}

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white/10"
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>

            {/* LinkedIn */}

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white/10"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </a>

            {/* Resume */}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80"
            >
              <FileText size={16} />
              Resume
            </a>

          </div>

          {/* Gmail Address */}

          <p className="mt-6 text-sm text-white/40">
            {email}
          </p>

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Samiksha Bang
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Resume
            </a>

          </div>

        </div>

      </footer>

    </div>
  )
}

// =====================================================
// REUSABLE COMPONENTS
// =====================================================

function SectionLabel({ text }) {
  return (
    <p className="text-sm uppercase tracking-[0.3em] text-white/40">
      {text}
    </p>
  )
}

function HighlightCard({
  value,
  label,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
    >

      <p className="text-2xl font-semibold sm:text-3xl">
        {value}
      </p>

      <p className="mt-2 text-xs text-white/40 sm:text-sm">
        {label}
      </p>

    </motion.div>
  )
}

export default App