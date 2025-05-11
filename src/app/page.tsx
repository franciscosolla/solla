import {
  DownloadIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-2 gap-8 max-w-3xl mx-auto">
      <header className="flex flex-col items-center">
        <Image src="/favicon.webp" alt="Profile" width={200} height={200} />
        <h1 className="text-3xl font-bold">Francisco Solla</h1>
        <h2 className="text-2xl">Senior Software Engineer</h2>
        <div className="flex flex-row gap-3 my-2">
          <a href="https://linkedin.com/in/francisco-solla" target="_blank">
            <LinkedInLogoIcon width={20} height={20} />
          </a>
          <a href="https://github.com/franciscosolla" target="_blank">
            <GitHubLogoIcon width={20} height={20} />
          </a>
          <a href="mailto:contact@solla.dev" target="_blank">
            <EnvelopeClosedIcon width={20} height={20} />
          </a>
        </div>
        <a
          href="/cv-resume-francisco-solla-software-engineer.pdf"
          download
          className="flex flex-row gap-2 items-center bg-stone-950 text-stone-100 py-1 px-2 rounded-sm mt-4"
        >
          Resume <DownloadIcon width={18} height={18} />
        </a>
      </header>
      <main className="flex flex-col gap-8 text-justify">
        <section>
          <p className="flex flex-col gap-2">
            <span>
              With <strong>8+ years of experience</strong> building
              high-performance, scalable web and mobile applications across
              SaaS, B2B marketplaces, and consumer platforms. Skilled in{" "}
              <strong>React, React Native, Next.js, TypeScript</strong>, and
              other modern tools, with a proven track record of leading product
              feature development, improving Core Web Vitals, and contributing
              to large-scale design system initiatives.
            </span>
            <span>
              With international experience across Brazil, Canada, France, USA
              and remote-first teams. Comfortable thriving in asynchronous,
              ownership-driven environments.
            </span>
            <span>
              Now focused on applying this experience to <strong>Web3</strong>.
              Motivated to help decentralized technologies reach more people by
              building accessible, trustworthy, and high-quality user
              experiences.
            </span>
          </p>
        </section>
        <section className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">Engineering Mindset</h3>
          <p className="flex flex-col gap-2">
            <span>
              I lead features from concept to delivery and{" "}
              <strong>
                document decisions so future contributors understand the “why”
              </strong>
              .
            </span>
            <span>
              I advocate for thoughtful, well-tested design systems that{" "}
              <strong>enable fast, confident development</strong>.
            </span>
            <span>
              We should document architectural directives to reduce the amount
              of decisions we have to make while coding.{" "}
              <strong>Remove the noise as much as possible</strong>.
            </span>
            <span>
              I’m convinced that{" "}
              <strong>great software is built on great communication</strong>.
              We need lively, proactive and honest communication — to surface
              risks early, identify knowledge gaps, and avoid misalignment.
            </span>
          </p>
        </section>
      </main>
    </div>
  );
}
