import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile Apps", href: "/services/mobile-development" },
  { name: "DevOps", href: "/services/devops" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "Data Science", href: "/services/data-science" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

const edtech = [
  { name: "Courses", href: "/training/courses" },
  { name: "Internships", href: "/training/internships" },
  { name: "Mentorship", href: "/training/mentorship" },
  { name: "Certifications", href: "/training/certifications" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/about#careers" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-heading text-xl font-bold text-primary-foreground">L</span>
              </div>
              <span className="font-heading text-xl font-bold text-foreground">
                Leafclutch Technologies
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Empowering innovation through cutting-edge technology solutions, 
              training, and digital transformation services.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@leafclutch.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                info@leafclutch.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                123 Tech Street, Innovation City
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
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
            <h3 className="text-base font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* EdTech */}
          <div>
            <h3 className="text-base font-semibold text-foreground">Training</h3>
            <ul className="mt-4 space-y-3">
              {edtech.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
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
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Leafclutch Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
