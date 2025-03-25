import { FC } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

interface Service {
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    title: "MVP Development",
    desc: "From idea to launch: Full MVP build in 30-45 days using React, NestJS, PostgreSQL.",
  },
  {
    title: "AI & PDF Automation",
    desc: "Integrate AI features like OpenAI, Textract, or DocuSign automation.",
  },
  {
    title: "Fintech & SaaS Integrations",
    desc: "Stripe, HubSpot, SSO, and custom APIs for payment and client management.",
  },
  {
    title: "Dashboard & Admin Panels",
    desc: "Build clean, powerful dashboards for analytics, onboarding, and internal tools.",
  },
  {
    title: "Modern Frontends",
    desc: "Beautiful, responsive UIs with React, Tailwind, and Next.js or Vite.",
  },
  {
    title: "Backend APIs",
    desc: "Scalable backend architecture with NestJS, PostgreSQL, and cloud deployment.",
  },
];

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build Your SaaS MVP in 30 Days
        </h1>
        <p className="text-lg md:text-xl mb-6">
          I help startups and businesses launch fast with fullstack expertise:
          React, NestJS, AI, and Fintech integrations.
        </p>
        <a
          href="https://calendly.com/hello-lawkunchi/30min"
          className="inline-block bg-white text-indigo-700 font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-gray-100 transition"
        >
          Book a Free Strategy Call
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What I Offer</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Launch?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Let’s bring your idea to life. Schedule a free consultation now.
        </p>
        <a
          href="mailto:hello@lawkunchi.com"
          className="inline-block bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-indigo-800 transition"
        >
          hello@lawkunchi.com
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-500 bg-white border-t">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/lawrence-chibondo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/lawkunchi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://twitter.com/lawkunchi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>
        © {new Date().getFullYear()} lawkunchi. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
