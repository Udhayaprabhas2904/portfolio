import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ===== SCROLL ACTIVE LINK ===== */
  useEffect(() => {
    const handleScroll = () => {
      let current = "#";

      navLinks.forEach((link) => {
        if (link.href === "#") return;

        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 120) {
            current = link.href;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ===== LOGO / NAME ===== */}
        <a
          href="#"
          onClick={() => scrollToSection("#")}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition"
        >
          Udhayaprabha S
        </a>

        {/* ===== DESKTOP NAV ===== */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`relative font-medium transition-colors duration-300
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-blue-600"
                  }
                `}
              >
                {link.label}

                {/* NEON UNDERLINE */}
                <span
                  className={`absolute -bottom-1 left-0 h-[3px] rounded-full
                    bg-gradient-to-r from-blue-500 to-purple-600
                    shadow-[0_0_10px_rgba(59,130,246,0.7)]
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* ===== RESUME BUTTON (DESKTOP) ===== */}
        <div className="hidden lg:block">
          <a
            href="/resume/Udhayaprabha_S.pdf"
            download
          >
            <Button variant="hero" className="shadow-glow">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </a>
        </div>

        {/* ===== MOBILE MENU ICON ===== */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-800"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left font-medium transition-colors
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-blue-600"
                  }
                `}
              >
                {link.label}
              </button>
            );
          })}

          {/* ===== RESUME BUTTON (MOBILE) ===== */}
          <a
            href="/resume/Udhayaprabha_S.pdf"
            download
            className="block"
          >
            <Button variant="hero" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
