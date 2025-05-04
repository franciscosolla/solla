import {
  DownloadIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/profile.png" alt="Profile" width={200} height={200} />
      <h1>Francisco Solla</h1>
      <h2>Senior Frontend Software Engineer</h2>
      <div>
        <LinkedInLogoIcon />
        <GitHubLogoIcon />
        <EnvelopeClosedIcon />
      </div>
      <button>
        Resume <DownloadIcon />
      </button>
      <p>
        I’m a Senior Software Engineer with 8+ years of experience building
        fast, accessible, and scalable applications across SaaS, marketplaces,
        and high-growth platforms. My core stack includes React, Next.js,
        TypeScript, and modern testing frameworks — and I’ve led projects
        ranging from billing systems to design system overhauls and Core Web
        Vitals optimization.
        <br />
        In recent years, I’ve grown increasingly drawn to Web3 — not just as a
        new technical domain, but as a meaningful evolution in how we build
        digital systems. I see blockchain as a foundation for trust,
        transparency, and user ownership — technologies that can challenge
        legacy financial structures and unlock new models of coordination. This
        shift isn’t just about staying ahead technically; it’s about
        contributing to a more open, resilient internet.
        <br />
        I’m now focused on applying my software engineering expertise and
        systems thinking to help build that future.
      </p>
    </div>
  );
}
