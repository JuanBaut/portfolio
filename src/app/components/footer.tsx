"use client";

import { links, metaData } from "config";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { Button } from "./ui/button";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button variant={"ghost"} size={"icon"}>
        <Icon />
      </Button>
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex float-right gap-3.5 text-lg transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={links.linkedin} icon={FiLinkedin} />
      <SocialLink href={links.twitter} icon={FiTwitter} />
      <SocialLink href={links.github} icon={FiGithub} />
      <SocialLink href={links.email} icon={FiMail} />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="flex justify-between mt-16 lg:mt-24">
      <span className="self-center text-sm">
        <time>© {YEAR} </time>
        <a
          className="no-underline"
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.title}
        </a>
      </span>
      <SocialLinks />
    </div>
  );
}
