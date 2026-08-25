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
// NAVIGATION
// =====================================================

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
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
  // COPY EMAIL
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
  // CLOSE MOBILE MENU
  // ---------------------------------------------------

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // ---------------------------------------------------
  // ESCAPE KEY
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
  // PREVENT BACKGROUND SCROLL
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
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-400/10 bg-[#020617]/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">

          {/* Logo */}

          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-2"
          >

            <span className="glow-dot" />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text font-semibold tracking-wide text-transparent transition group-hover:opacity-80">
              Samiksha Bang
            </span>

          </a>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-5 text-sm text-slate-400 lg:flex">

            {navigationItems.map((item, index) => (

              <a
                key={item.href}
                href={item.href}
                className="tech-link whitespace-nowrap transition hover:text-cyan-300"
              >

                <span className="mr-1 text-[9px] text-cyan-400/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

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
              className="tech-button flex items-center gap-2 rounded-full border border-blue-400/20 px-4 py-2 text-sm text-slate-300"
            >
              GitHub
              <ArrowUpRight size={15} />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button flex items-center gap-2 rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-slate-300"
            >
              LinkedIn
              <ArrowUpRight size={15} />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white"
            >
              <FileText size={16} />
              Resume
            </a>

          </div>

          {/* Mobile Menu */}

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400 lg:hidden"
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

          <div className="border-t border-cyan-400/10 bg-[#020617]/98 lg:hidden">

            <div className="mx-auto max-h-[calc(100vh-73px)] max-w-6xl overflow-y-auto px-6 py-6">

              <div className="flex flex-col gap-1">

                {navigationItems.map((item, index) => (

                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-base text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-300"
                  >

                    <span className="mr-3 text-xs text-cyan-400/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item.label}

                  </a>

                ))}

                <div className="my-4 h-px bg-cyan-400/10" />

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-300"
                >
                  GitHub
                  <ArrowUpRight size={16} className="ml-auto" />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-300"
                >
                  LinkedIn
                  <ArrowUpRight size={16} className="ml-auto" />
                </a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 font-medium text-white"
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
        className="scan-line relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:px-8"
      >

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="tech-grid-moving absolute inset-0 opacity-50" />

          <div className="absolute left-[-10%] top-[15%] h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />

          <div className="absolute right-[-5%] top-[20%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

          <div className="absolute bottom-[-15%] left-[40%] h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mb-7 flex items-center gap-3">

              <span className="glow-dot" />

              <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                AI / ML • DATA • TECHNOLOGY
              </span>

            </div>

            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">

              <span className="gradient-text flow-text">
                Samiksha
              </span>

              <br />

              <span className="text-glow text-white">
                Bang
              </span>

            </h1>

            <div className="mt-8 overflow-hidden border-y border-cyan-400/10 py-4">

              <div className="marquee">

                <div className="flex items-center gap-8 whitespace-nowrap text-sm uppercase tracking-[0.25em] text-slate-400">

                  <span>AI / ML Engineer</span>
                  <span className="text-cyan-400">✦</span>

                  <span>Data Analyst</span>
                  <span className="text-blue-400">✦</span>

                  <span>Machine Learning</span>
                  <span className="text-purple-400">✦</span>

                  <span>Power BI</span>
                  <span className="text-cyan-400">✦</span>

                  <span>Artificial Intelligence</span>
                  <span className="text-blue-400">✦</span>

                  <span>AI / ML Engineer</span>
                  <span className="text-cyan-400">✦</span>

                  <span>Data Analyst</span>
                  <span className="text-blue-400">✦</span>

                  <span>Machine Learning</span>
                  <span className="text-purple-400">✦</span>

                </div>

              </div>

            </div>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">

              B.Tech student specializing in Artificial Intelligence and
              Machine Learning, passionate about turning data into
              intelligent and practical technology solutions.

            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#projects"
                className="tech-button rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-7 py-3 text-sm font-medium text-white"
              >
                Explore Projects
                <ArrowUpRight
                  size={16}
                  className="ml-2 inline"
                />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-button rounded-full border border-cyan-400/30 px-7 py-3 text-sm font-medium text-cyan-300"
              >
                <FileText
                  size={16}
                  className="mr-2 inline"
                />
                Resume
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-button rounded-full border border-blue-400/20 px-7 py-3 text-sm text-slate-300 hover:text-blue-300"
              >
                GitHub
                <ArrowUpRight
                  size={16}
                  className="ml-2 inline"
                />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-button rounded-full border border-purple-400/30 px-7 py-3 text-sm text-purple-300"
              >
                LinkedIn
                <ArrowUpRight
                  size={16}
                  className="ml-2 inline"
                />
              </a>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.2em] text-slate-600"
          >

            <span>Python</span>
            <span>•</span>
            <span>Machine Learning</span>
            <span>•</span>
            <span>Power BI</span>
            <span>•</span>
            <span>Data Analytics</span>

          </motion.div>

        </div>

      </section>

      {/* =================================================
          HIGHLIGHTS
      ================================================= */}

      <section className="border-t border-cyan-400/10 px-6 py-20">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">

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
        className="scroll-mt-20 border-t border-cyan-400/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <SectionLabel text="About" />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">

            <div>

              <h2 className="text-3xl font-semibold text-white sm:text-5xl">

                Building with{" "}

                <span className="gradient-text">
                  data, AI
                </span>{" "}

                and technology.

              </h2>

              <p className="mt-7 max-w-3xl leading-8 text-slate-400">

                I am a B.Tech student specializing in Artificial Intelligence
                and Machine Learning. I enjoy working with machine learning,
                data analytics, visualization, and modern development tools
                to turn data into useful solutions.

              </p>

            </div>

            <div className="glass-card cyber-border rounded-3xl p-6">

              <div className="mb-6 flex items-center gap-2">

                <span className="glow-dot" />

                <span className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                  profile.system
                </span>

              </div>

              <div className="space-y-4 font-mono text-sm">

                <p>
                  <span className="text-slate-600">01</span>{" "}
                  <span className="text-cyan-400">role:</span>{" "}
                  <span className="text-slate-300">
                    "AI/ML Engineer"
                  </span>
                </p>

                <p>
                  <span className="text-slate-600">02</span>{" "}
                  <span className="text-cyan-400">focus:</span>{" "}
                  <span className="text-slate-300">
                    "Data & AI"
                  </span>
                </p>

                <p>
                  <span className="text-slate-600">03</span>{" "}
                  <span className="text-cyan-400">status:</span>{" "}
                  <span className="text-green-400">
                    available
                  </span>
                </p>

                <p>
                  <span className="text-slate-600">04</span>{" "}
                  <span className="text-cyan-400">graduation:</span>{" "}
                  <span className="text-slate-300">
                    2027
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          SKILLS
      ================================================= */}

      <section
        id="skills"
        className="scroll-mt-20 border-t border-cyan-400/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <SectionLabel text="Skills" />

          <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">

            Technical{" "}

            <span className="gradient-text">
              Arsenal
            </span>

          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {skills.map((group, index) => (

              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="glass-card cyber-border rounded-3xl p-6"
              >

                <div className="mb-5 flex items-center justify-between">

                  <h3 className="text-lg font-medium text-cyan-300">
                    {group.category}
                  </h3>

                  <span className="font-mono text-xs text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="space-y-3">

                  {group.items.map((skill) => (

                    <div
                      key={skill}
                      className="group rounded-xl border border-white/5 bg-white/[0.02] p-4 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:text-cyan-200"
                    >

                      <span className="mr-3 text-cyan-400/40 transition group-hover:text-cyan-400">
                        +
                      </span>

                      {skill}

                    </div>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          PROJECTS
      ================================================= */}

      <section
        id="projects"
        className="scroll-mt-20 border-t border-cyan-400/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <SectionLabel text="Projects" />

          <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">

            <span className="gradient-text">
              Projects
            </span>

          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {projects.map((project, index) => (

              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          ACHIEVEMENTS
      ================================================= */}

      <section
        id="achievements"
        className="scroll-mt-20 border-t border-cyan-400/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <SectionLabel text="Achievements" />

          <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">

            Milestones &{" "}

            <span className="gradient-text">
              Leadership
            </span>

          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

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
                className="glass-card cyber-border rounded-3xl p-7"
              >

                <p className="font-mono text-xs uppercase tracking-widest text-purple-400">
                  {achievement.organization}
                </p>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {achievement.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
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
        className="scroll-mt-20 border-t border-cyan-400/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <SectionLabel text="Certifications" />

          <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">

            Certifications{" "}

            <span className="gradient-text">
              & Experience
            </span>

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
                className="glass-card cyber-border overflow-hidden rounded-3xl"
              >

                {certificate.image && (

                  <div className="flex aspect-video items-center justify-center overflow-hidden border-b border-cyan-400/10 bg-white">

                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className="h-full w-full object-contain"
                    />

                  </div>

                )}

                <div className="p-6">

                  <p className="text-sm text-cyan-400">
                    {certificate.organization}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {certificate.date}
                  </p>

                  {certificate.link && (

                    <div className="mt-6">

                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tech-button inline-flex items-center gap-2 rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-cyan-300"
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
          EDUCATION
      ================================================= */}

      <section
        id="education"
        className="scroll-mt-20 border-t border-cyan-400/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <SectionLabel text="Education" />

          <div className="mt-10">

            <div className="glass-card cyber-border rounded-3xl p-8">

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                    2023 — 2027
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                    B.Tech in Artificial Intelligence and Machine Learning
                  </h2>

                  <p className="mt-4 text-blue-300">
                    Sanjay Ghodawat University
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Kolhapur, Maharashtra, India
                  </p>

                </div>

                <div className="w-fit rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] px-8 py-5 text-center">

                  <p className="text-3xl font-semibold text-cyan-300">
                    8.82
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                    CGPA
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          LANGUAGES
      ================================================= */}

      <section
        id="languages"
        className="scroll-mt-20 border-t border-cyan-400/10 px-6 py-28 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <SectionLabel text="Languages" />

          <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">

            Communication{" "}

            <span className="gradient-text">
              Skills
            </span>

          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

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
                className="glass-card cyber-border rounded-2xl p-6"
              >

                <span className="font-mono text-xs text-cyan-400/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-lg font-medium text-blue-200">
                  {language.name}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
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
        className="scan-line relative scroll-mt-20 overflow-hidden border-t border-cyan-400/10 px-6 py-28 sm:py-32"
      >

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[20%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl">

          <SectionLabel text="Contact" />

          <h2 className="mt-8 max-w-3xl text-4xl font-semibold sm:text-6xl">

            Let's{" "}

            <span className="gradient-text">
              connect.
            </span>

          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">

            Interested in AI, machine learning, data analytics,
            and technology-driven solutions.

          </p>

          <div className="mt-9 flex flex-wrap gap-3">

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white"
            >
              Email Me
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="tech-button flex items-center gap-2 rounded-full border border-cyan-400/30 px-6 py-3 text-sm text-cyan-300"
            >
              {copied ? "Copied ✓" : "Copy Gmail"}
            </button>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button flex items-center gap-2 rounded-full border border-blue-400/30 px-6 py-3 text-sm text-blue-300"
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button flex items-center gap-2 rounded-full border border-purple-400/30 px-6 py-3 text-sm text-purple-300"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-button flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] px-6 py-3 text-sm font-medium text-cyan-200"
            >
              <FileText size={16} />
              Resume
            </a>

          </div>

          <p className="mt-7 font-mono text-sm text-slate-500">
            {email}
          </p>

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="border-t border-cyan-400/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p>
              © {new Date().getFullYear()} Samiksha Bang
            </p>

            <p className="mt-1 font-mono text-xs text-slate-700">
              AI • DATA • MACHINE LEARNING
            </p>

          </div>

          <div className="flex flex-wrap gap-5">

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-link transition hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-link transition hover:text-purple-400"
            >
              LinkedIn
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-link transition hover:text-cyan-400"
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
// PROJECT CARD
// =====================================================

function ProjectCard({ project, index }) {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  })

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  })

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const rotateY = ((x / rect.width) - 0.5) * 8
    const rotateX = ((y / rect.height) - 0.5) * -8

    setRotation({
      x: rotateX,
      y: rotateY,
    })

    setMousePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setRotation({
      x: 0,
      y: 0,
    })

    setMousePosition({
      x: 50,
      y: 50,
    })
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      style={{
        perspective: "1000px",
      }}
    >

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
        className="group relative h-full cursor-default"
        style={{
          transformStyle: "preserve-3d",
        }}
      >

        {/* Mouse-follow Glow */}

        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(
              300px circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(34, 211, 238, 0.18),
              transparent 60%
            )`,
          }}
        />

        {/* Card */}

        <div className="glass-card cyber-border relative h-full rounded-3xl p-7">

          {/* Top Line */}

          <div className="flex items-start justify-between">

            <span className="font-mono text-xs tracking-widest text-cyan-400/50">
              PROJECT_{String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-white/[0.02]">

              <ArrowUpRight
                size={17}
                className="text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
              />

            </div>

          </div>

          {/* Title */}

          <h3 className="mt-6 text-xl font-semibold text-white transition duration-300 group-hover:text-cyan-300 sm:text-2xl">

            {project.title}

          </h3>

          {/* Description */}

          <p className="mt-4 leading-7 text-slate-400">

            {project.description}

          </p>

          {/* Technologies */}

          {project.technologies?.length > 0 && (

            <div className="mt-6 flex flex-wrap gap-2">

              {project.technologies.map((technology) => (

                <span
                  key={technology}
                  className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-1 text-xs text-cyan-300 transition group-hover:border-cyan-400/25"
                >
                  {technology}
                </span>

              ))}

            </div>

          )}

          {/* Bottom */}

          <div className="mt-7 flex items-center justify-between">

            <div className="flex flex-wrap gap-5">

              {project.github && (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-link flex items-center gap-2 text-sm text-blue-300"
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
                  className="tech-link flex items-center gap-2 text-sm text-purple-300"
                >
                  Live Demo
                  <ArrowUpRight size={15} />
                </a>

              )}

            </div>

            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-700">
              AI / DATA
            </span>

          </div>

        </div>

      </motion.div>

    </motion.div>
  )
}

// =====================================================
// SECTION LABEL
// =====================================================

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3">

      <span className="glow-dot" />

      <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
        {text}
      </p>

      <div className="h-px w-16 bg-gradient-to-r from-cyan-400/50 to-transparent" />

    </div>
  )
}

// =====================================================
// HIGHLIGHT CARD
// =====================================================

function HighlightCard({
  value,
  label,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.5,
      }}
      className="glass-card cyber-border rounded-2xl p-5 sm:p-6"
    >

      <p className="gradient-text text-2xl font-semibold sm:text-3xl">
        {value}
      </p>

      <p className="mt-2 text-xs text-slate-500 sm:text-sm">
        {label}
      </p>

    </motion.div>
  )
}

export default App