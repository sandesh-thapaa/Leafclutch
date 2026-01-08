import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { LuCircleUserRound } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const careers = [
  { name: "Jobs", href: "/careers/jobs" },
  { name: "Internships", href: "/careers/internships" },
  { name: "Training & Internship", href: "/careers/internships" },
];

const others = [
  { name: "Blog", href: "/others/blog" },
  { name: "Verify Certificate", href: "/others/verify-certificate" },
  { name: "Our Projects", href: "/others/our-projects" },
];
const services = [
  { name: "All Services", href: "/services/blog" },
  { name: "Web Development", href: "/services/verify-certificate" },
  { name: "Mobile App Development", href: "/services/our-projects" },
  { name: "DevOps Solutions", href: "/services/our-projects" },
  { name: "Cybersecurity", href: "/services/our-projects" },
  { name: "Data Science & AI", href: "/services/our-projects" },
  { name: "Digital Marketing", href: "/services/our-projects" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", dropdown: services },
  { name: "Careers", href: "/careers", dropdown: careers },
  { name: "Others", href: "/others", dropdown: others },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-card backdrop-blur-lg ">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src="/logo.png" alt="Leafclutch Logo" className="h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`nav-link flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium ${
                        isActive(link.href) ? "text-primary" : ""
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56 bg-card">
                    {/* <DropdownMenuItem asChild>
                      <Link
                        to={link.href}
                        className="cursor-pointer font-medium"
                      >
                        All {link.name}
                      </Link>
                    </DropdownMenuItem> */}
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link to={item.href} className="cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`nav-link rounded-md px-3 py-2 text-sm font-medium ${
                    isActive(link.href) ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden sm:flex"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
            {/* <div className="p-10">
              <LuCircleUserRound size={40} className="text-red-500" />
            </div> */}
            <div className="hidden items-center gap-2 sm:flex">
              <Button asChild>
                <Link to="/login">
                  <LuCircleUserRound className="!w-6 !h-6" /> Login
                </Link>
              </Button>
              {/* <Button asChild>
                <Link to="/register">Apply Now</Link>
              </Button> */}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="animate-fade-in border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      isActive(link.href)
                        ? "bg-secondary text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <div className="flex items-center justify-between px-3">
                  <span className="text-sm font-medium">Theme</span>
                  <Button variant="ghost" size="icon" onClick={toggleTheme}>
                    {isDark ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                </div>
                <Button variant="outline" asChild className="mx-3">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild className="mx-3">
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
