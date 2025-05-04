import {
  DownloadIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-2 gap-8 max-w-3xl m-auto">
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
      <p className="flex flex-col gap-2">
        <span>
          I’m a Senior Software Engineer with{" "}
          <strong>8+ years of experience</strong> building fast, accessible, and
          scalable applications across SaaS, marketplaces, and high-growth
          platforms. My core stack includes{" "}
          <strong>React, Next.js, React Native, Expo, TypeScript</strong>, and
          modern testing frameworks — and I’ve led projects ranging from billing
          systems to design system overhauls and Core Web Vitals optimization.
        </span>
        <span>
          In recent years, I’ve grown increasingly drawn to{" "}
          <strong>Web3</strong> — not just as a new technical domain, but as a
          meaningful evolution in how we build digital systems. I see blockchain
          as a foundation for trust, transparency, and user ownership —
          technologies that can challenge legacy financial structures and unlock
          new models of coordination. This shift isn’t just about staying ahead
          technically; it’s about contributing to a more open, resilient
          internet.
        </span>
        <span>
          I’m now focused on applying my software engineering expertise and
          systems thinking to help build that future.
        </span>
      </p>
    </div>
  );
}
