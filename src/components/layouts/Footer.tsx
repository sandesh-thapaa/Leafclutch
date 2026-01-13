import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { TbBrandTiktok, TbBrandDiscord } from "react-icons/tb";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Apps", href: "/services/mobile-development" },
  { name: "DevOps", href: "/services/devops" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "Data Science", href: "/services/data-science" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Training & Internship", href: "/training" },
];

const training = [
  { name: "Core Tech & Design", href: "/training#core-tech-and-design" },
  { name: "Data & AI Programs", href: "/training#data-and-ai-programs" },
  { name: "DSA Program", href: "/training/#dsa-program" },
  { name: "Programming Languages", href: "/training/#programming-languages" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services/all-services" },
  { name: "Careers", href: "/careers/jobs" },
  { name: "Contact", href: "mailto:hr@leafclutchtech.com.np" },
];

const socials = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61584902195796",
    label: "Facebook",
  },
  { icon: Twitter, href: "https://x.com/", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/leafclutch-technologies/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/leafclutch.technologies/",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@LeafclutchTechnologies",
    label: "YouTube",
  },
  { icon: TbBrandTiktok, href: "https://www.tiktok.com/en/", label: "Tiktok" },
  {
    icon: TbBrandDiscord,
    href: "https://discord.gg/4aDwcMZBPq",
    label: "Discord",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-16 md:pb-10  ">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link to="/">
              <img src="/logo.png" alt="Leafclutch Logo" className="h-16" />
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Empowering innovation through cutting-edge technology solutions,
              training, and digital transformation services.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@leafclutch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                info@leafclutchtech.com.np
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +977-9766715666
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Bhairahawa, Lumbini
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* training */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Training & Internship
            </h3>
            <ul className="mt-4 space-y-3">
              {training.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    // onClick={() => {}}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("mailto:") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Leafclutch Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
