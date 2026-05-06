"use client";

import {
  ArrowRight,
  Bot,
  Code2,
  Database,
  Server,
  Wrench,
  LayoutDashboard,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Business Website Development",
    description:
      "Professional websites for small businesses, portfolios, startups, restaurants, service providers, and online brands.",
    icon: Code2,
  },
  {
    title: "Automation Engineering",
    description:
      "Python and .NET automation tools for reports, spreadsheets, file processing, APIs, data cleanup, and repetitive workflows.",
    icon: Bot,
  },
  {
    title: "Data Integration & ETL",
    description:
      "Database migrations, SQL workflows, ETL pipelines, reporting systems, and business data automation.",
    icon: Database,
  },
  {
    title: "Technical Support & Debugging",
    description:
      "Help fixing code errors, deployment issues, APIs, databases, application bugs, and project setup problems.",
    icon: Wrench,
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Docker, CI/CD pipelines, Jenkins, Linux/Windows support, cloud deployment help, and infrastructure automation.",
    icon: Server,
  },
  {
    title: "Custom Software Tools",
    description:
      "Dashboards, internal business tools, scheduling systems, admin panels, and lightweight custom applications.",
    icon: LayoutDashboard,
  },
];

const pricing = [
  {
    title: "Starter Website",
    price: "$500+",
    description: "Simple landing page, portfolio, or small business website.",
    items: ["Responsive design", "Contact section", "Basic SEO structure"],
  },
  {
    title: "Business Website",
    price: "$1,500+",
    description:
      "Professional multi-page website with branding and conversion-focused sections.",
    items: ["Multiple pages", "Services/pricing", "Lead capture", "Deployment"],
  },
  {
    title: "Automation Tool",
    price: "$250+",
    description:
      "Python/.NET scripts or small tools to automate repetitive business tasks.",
    items: ["File processing", "Reports", "API workflows", "Data cleanup"],
  },
  {
    title: "Technical Consulting",
    price: "$50/hr",
    description:
      "Debugging, setup help, deployment support, and code troubleshooting.",
    items: ["Python", "Flask", "React", "SQL", "Docker", "Deployment"],
  },
];

const portfolio = [
  {
    title: "Docker Container Management Application",
    description:
      "Cross-platform app built with Python, Electron, JavaScript, React, Bootstrap, and Golang to help manage Docker containers.",
    tags: ["Python", "React", "Docker", "Golang"],
  },
  {
    title: "Healthcare Workflow Automation",
    description:
      "Automation tools, ETL workflows, APIs, and scheduling systems designed to reduce manual work in healthcare operations.",
    tags: [".NET Core", "SQL Server", "ETL", "APIs"],
  },
  {
    title: "Intel DevOps & Infrastructure Automation",
    description:
      "CI/CD pipelines, Python automation workflows, dashboards, and backend tooling using Jenkins, Docker, and DevOps practices.",
    tags: ["Jenkins", "Docker", "Python", "DevOps"],
  },
];

const skills = [
  "Python",
  "C#",
  ".NET Core",
  "Flask",
  "React",
  "TypeScript",
  "SQL Server",
  "Docker",
  "Jenkins",
  "Azure",
  "DevOps",
  "REST APIs",
  "Automation",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="text-xl font-bold tracking-tight">
            TechnicalSolutions
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#services" className="hover:text-green-300">
              Services
            </a>
            <a href="#pricing" className="hover:text-green-300">
              Pricing
            </a>
            <a href="#portfolio" className="hover:text-green-300">
              Portfolio
            </a>
            <a href="#about" className="hover:text-green-300">
              About
            </a>
            <a href="#contact" className="hover:text-green-300">
              Contact
            </a>
          </div>
        </nav>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-wide text-green-300">
              Software Automation & Web Solutions
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Custom websites, automation tools, and technical solutions.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 md:text-xl">
              Helping businesses and individuals streamline workflows, build
              professional web platforms, fix technical problems, and turn ideas
              into working software.
            </p>
            <div className="mt-8 flex flex-wrap gap-4"></div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 ring-1 ring-white/15 backdrop-blur">
                Phoenix-Based
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 ring-1 ring-white/15 backdrop-blur">
                Computer Science & Mathematics Graduate
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 ring-1 ring-white/15 backdrop-blur">
                Intel DevOps Experience
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 ring-1 ring-white/15 backdrop-blur">
                Healthcare Automation Experience
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-bold text-white shadow-soft transition hover:bg-green-400"
              >
                Request a Quote <ArrowRight size={18} />
              </a>

              <a
                href="#portfolio"
                className="rounded-xl border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white hover:text-blue-700"
              >
                View Portfolio
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 shadow-soft ring-1 ring-white/15 backdrop-blur">
            <div className="rounded-2xl bg-white p-6 text-slate-900">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-2xl font-black text-blue-700">
                  HM
                </div>

                <div>
                  <h2 className="text-2xl font-black">Harris Mustic</h2>
                  <p className="text-sm font-semibold text-slate-600">
                    Software Developer • DevOps • Automation
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 text-sm text-slate-700">
                <p className="flex items-center gap-2">
                  <MapPin size={17} className="text-blue-600" />
                  Phoenix, Arizona
                </p>

                <p className="flex items-center gap-2">
                  <Mail size={17} className="text-blue-600" />
                  Harrismustic@gmail.com
                </p>

                <p className="flex items-center gap-2">
                  <Phone size={17} className="text-blue-600" />
                  (602) 410-1646
                </p>

                <p className="flex items-center gap-2">
                  <Linkedin size={17} className="text-blue-600" />
                  linkedin.com/in/harris-mustic
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm leading-6 text-slate-700">
                  Enterprise experience in automation, backend systems, ETL
                  pipelines, CI/CD, Docker, SQL Server, cloud tooling, and
                  workflow optimization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Services"
          title="Technical services built around real business outcomes."
          text="I focus on solutions that save time, reduce manual work, improve systems, and help businesses look more professional online."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-3xl bg-white p-7 shadow-soft"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Pricing"
            title="Simple starting prices."
            text="Final pricing depends on scope, complexity, timeline, integrations, and support needs."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricing.map((plan) => (
              <article
                key={plan.title}
                className="rounded-3xl bg-white p-7 shadow-soft"
              >
                <h3 className="text-lg font-black text-blue-700">
                  {plan.title}
                </h3>

                <p className="mt-3 text-4xl font-black text-slate-950">
                  {plan.price}
                </p>

                <p className="mt-3 min-h-20 leading-7 text-slate-600">
                  {plan.description}
                </p>

                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2
                        className="mt-0.5 text-green-500"
                        size={17}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Portfolio"
          title="Project experience that translates directly into client value."
          text="Examples of technical work and systems experience I can bring to business and software projects."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl bg-white p-7 shadow-soft"
            >
              <h3 className="text-xl font-black text-slate-950">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-slate-950 p-8 text-white shadow-soft">
            <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-white/15 text-5xl font-black ring-4 ring-white/20">
              HM
            </div>

            <h2 className="mt-6 text-center text-3xl font-black">
              Harris Mustic
            </h2>

            <p className="mt-2 text-center font-semibold text-blue-100">
              Software Developer | Automation & Data Integration
            </p>
          </div>

          <div>
            <p className="font-bold uppercase tracking-wide text-blue-700">
              About
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Enterprise-style engineering for practical business problems.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              I’m a software developer with experience in data integration,
              process automation, backend systems, DevOps, and enterprise
              application development.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              My background includes automation and infrastructure work at Intel,
              along with healthcare workflow automation, ETL pipelines, APIs,
              and internal software tools for Donor Network of Arizona.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-soft md:p-12">
          <p className="font-bold uppercase tracking-wide text-green-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Start your project.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Tell me what you need help with. Submit the form below and I will
            receive your request directly by email.
          </p>

          <form
            className="mt-8 grid gap-5"
            onSubmit={async (event) => {
              event.preventDefault();

              const form = event.currentTarget;
              const formData = new FormData(form);

              const payload = {
                name: String(formData.get("name") || ""),
                email: String(formData.get("email") || ""),
                service: String(formData.get("service") || ""),
                message: String(formData.get("message") || ""),
              };

              const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
              });

              if (response.ok) {
                window.location.href = "/thank-you";
              } else {
                alert("There was a problem sending your request. Please try again.");
              }
            }}
          >
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-200">
                Name
              </label>

              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-950 outline-none focus:ring-4 focus:ring-green-500/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-200">
                Email
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-950 outline-none focus:ring-4 focus:ring-green-500/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-200">
                Service Needed
              </label>

              <select
                name="service"
                required
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-950 outline-none focus:ring-4 focus:ring-green-500/30"
              >
                <option value="">Select a service</option>
                <option value="Business Website Development">
                  Business Website Development
                </option>
                <option value="Automation Engineering">
                  Automation Engineering
                </option>
                <option value="Data Integration & ETL">
                  Data Integration & ETL
                </option>
                <option value="Technical Support & Debugging">
                  Technical Support & Debugging
                </option>
                <option value="DevOps & Infrastructure">
                  DevOps & Infrastructure
                </option>
                <option value="Custom Software Tools">
                  Custom Software Tools
                </option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-200">
                Project Details
              </label>

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Describe your project, website idea, automation need, or technical issue..."
                className="w-full resize-y rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-950 outline-none focus:ring-4 focus:ring-green-500/30"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-400"
            >
              Send Request <Mail size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 TechnicalSolutions. Built by Harris Mustic.
      </footer>
    </main>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="font-bold uppercase tracking-wide text-blue-700">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 leading-8 text-slate-600">{text}</p>
    </div>
  );
}