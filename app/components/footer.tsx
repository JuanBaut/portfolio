"use client";

import { metaData, socialLinks } from "app/config";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="float-right flex gap-3.5 text-lg transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="mt-16 block lg:mt-24">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline"
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <SocialLinks />
    </small>
  );
}
