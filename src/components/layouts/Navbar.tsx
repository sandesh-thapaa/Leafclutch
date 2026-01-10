import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { LuCircleUserRound } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

const careers = [
  { name: "Jobs", href: "/careers/jobs" },
  { name: "Internships", href: "/careers/internships" },
  { name: "Training & Internship", href: "/careers/training" },
];

const others = [
  { name: "Blog", href: "/others/blog" },
  { name: "Verify Certificate", href: "/others/verify-certificate" },
  { name: "Our Projects", href: "/others/our-projects" },
];

const services = [
  { name: "All Services", href: "/services/all-services" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/mobile-development" },
  { name: "DevOps Solutions", href: "/services/devops" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "Data Science & AI", href: "/services/data-science" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-card backdrop-blur-lg">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src="/logo.png" alt="Leafclutch Logo" className="h-14" />
          </Link>

          {/* -------- Desktop Navigation -------- */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {/* Main button */}
                  <button
                    className={`nav-link flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname.startsWith(link.href)
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown menu */}
                  {openDropdown === link.name && (
                    <div className="absolute left-0 w-56 bg-card rounded-md shadow-lg border border-gray-100 dark:border-gray-700 z-10">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors duration-150"
                          onClick={() => setOpenDropdown(null)} // close dropdown on click
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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

          {/* Right section */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="pt-0.5 sm:flex p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all"
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
            <div className="hidden sm:flex">
              <Button asChild>
                <Link to="/login">
                  <LuCircleUserRound className="!w-6 !h-6" /> Login
                </Link>
              </Button>
            </div>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {!mobileMenuOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Menu className="!h-6 !w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <X className="!h-6 !w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-20 inset-x-0 bottom-0 z-50 bg-white border-t"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Scrollable container */}
            <div className="h-auto border-b overflow-y-auto bg-card overscroll-contain px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const open = openDropdown === link.name;

                  return (
                    <div key={link.name}>
                      {/* Main link */}
                      {link.dropdown ? (
                        <button
                          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium active:scale-[0.98]"
                          onClick={() =>
                            setOpenDropdown(open ? null : link.name)
                          }
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          to={link.href}
                          className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium active:scale-[0.98]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}

                      {/* Dropdown links */}
                      {link.dropdown && open && (
                        <div className="ml-4 mt-1 flex flex-col gap-1 border-l pl-3">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="rounded-md px-3 py-2 text-sm text-muted-foreground active:bg-muted"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Footer */}
                <div className="mt-4 border-t pt-4 flex flex-col gap-3">
                  {/* <Button size="icon" onClick={toggleTheme} className="mx-auto">
                    {isDark ? <Sun /> : <Moon />}
                  </Button> */}

                  <Button asChild>
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      <LuCircleUserRound className="!w-5 !h-5" /> Login
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
