import {
  Globe,
  Smartphone,
  Settings,
  ShieldCheck,
  Search,
  FileText,
  Code,
  CheckCircle2,
  Brain,
  Megaphone,
} from "lucide-react";

export const SERVICES_DATA = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: <Globe className="w-6 h-6" />,
    features: [
      "Custom Web Apps",
      "E-commerce",
      "CMS Solutions",
      "API Development",
    ],
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
    icon: <Smartphone className="w-6 h-6" />,
    features: ["iOS Apps", "Android Apps", "Cross-platform", "App Maintenance"],
    href: "/services/mobile-development",
  },
  {
    title: "DevOps Solutions",
    description:
      "Streamline your development with CI/CD pipelines, cloud infrastructure, and automation.",
    icon: <Settings className="w-6 h-6" />,
    features: [
      "Cloud Migration",
      "CI/CD Pipelines",
      "Docker & K8s",
      "Infrastructure as Code",
    ],
    href: "/services/devops",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with comprehensive security audits, penetration testing, and compliance.",
    icon: <ShieldCheck className="w-6 h-6" />,
    features: [
      "Security Audits",
      "Data Protection",
      "Incident Response",
      "Network Security",
    ],
    href: "/services/cybersecurity",
  },
  {
    title: "Data Science & AI",
    description:
      "Transform data into actionable insights with machine learning, analytics and automation.",
    icon: <Brain className="w-6 h-6" />,
    features: ["ML Models", "Data Analytics", "AI Integration", "Automation"],
    href: "/services/data-science",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your online presence with SEO, social media marketing, and paid advertising.",
    icon: <Megaphone className="w-6 h-6" />,
    features: ["SEO", "Social Media", "PPC Campaigns", "Content Strategy"],
    href: "/services/digital-marketing",
  },
];

export const PROCESS_DATA = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your needs and goals.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "Planning",
    description: "Creating a detailed roadmap and timeline.",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Development",
    description: "Building with agile methodology.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "Delivery",
    description: "Testing, deployment, and ongoing support.",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
];
