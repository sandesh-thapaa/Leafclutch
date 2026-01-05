import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
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
];

const others = [
  { name: "Blog", href: "/blog" },
  { name: "Verify Certificate", href: "/verify-certificate" },
  { name: "Our Projects", href: "/our-projects" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers", dropdown: careers },
  { name: "Others", href: "/others", dropdown: others },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
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
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="font-heading text-xl font-bold text-primary-foreground">
                L
              </span>
            </div>
            <span className="hidden font-heading text-xl font-bold text-foreground sm:block">
              Leafclutch
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
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
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden sm:flex"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <div className="hidden items-center gap-2 sm:flex">
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Apply Now</Link>
              </Button>
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
