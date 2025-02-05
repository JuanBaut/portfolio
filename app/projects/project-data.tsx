export interface Project {
  image: string;
  title: string;
  year: number;
  description: string;
  source?: string;
  website?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    image:
      "https://res.cloudinary.com/dh9rajm0q/image/upload/v1738777215/portfolio/sanarte.png",
    title: "SanArte [WIP]",
    year: 2025,
    description: "E-commerce for a home-decor business.",
    source: "https://github.com/and-rs/sanarte-hydrogen",
    technologies: [
      "TypeScript",
      "Remix",
      "Hydrogen",
      "GraphQL",
      "Tailwind",
      "Shadcn/ui",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dh9rajm0q/image/upload/v1738777214/portfolio/joe_car_por.png",
    title: "Artist Portfolio [WIP]",
    year: 2025,
    description: "Portfolio for an illustrator and artist.",
    source: "https://github.com/and-rs/portfolio-joseph-carreno",
    technologies: ["TypeScript", "Next.js", "Shadcn/ui", "Tailwind"],
  },
  {
    image:
      "https://res.cloudinary.com/dh9rajm0q/image/upload/v1738776811/portfolio/pixelstream.png",
    title: "Pixel Stream",
    year: 2024,
    description: "Business landing page for modelling agency.",
    website: "https://pixelstream.com.co",
    technologies: [
      "TypeScript",
      "Next.js",
      "Shadcn/ui",
      "Tailwind",
      "Framer Motion",
      "EmailJS",
      "Google Ads",
    ],
  },
];
