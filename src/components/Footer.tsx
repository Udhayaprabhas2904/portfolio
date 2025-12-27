import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white py-14">
      <div className="container mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Udhayaprabha S</h3>
            <p className="text-white/80 leading-relaxed">
              Full Stack Developer, Data Analyst, and UI/UX Designer focused on
              building scalable, user-centered, and impactful digital solutions.
            </p>
          </div>

          {/* QUICK LINKS CENTER */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-4 text-center">Quick Links</h4>

            <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-center">
              <a href="#about" className="text-white/80 hover:text-accent transition-colors">
                About
              </a>
              <a href="#skills" className="text-white/80 hover:text-accent transition-colors">
                Skills
              </a>

              <a href="#projects" className="text-white/80 hover:text-accent transition-colors">
                Projects
              </a>
              <a href="#certifications" className="text-white/80 hover:text-accent transition-colors">
                Certifications
              </a>

              <a href="#experience" className="text-white/80 hover:text-accent transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-white/80 hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold mb-3">Get in Touch</h4>

            <div className="space-y-3 text-white/80 mb-4">
              <a
                href="mailto:udhayaprabha174@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                udhayaprabha174@gmail.com
              </a>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 8220378185
              </div>
            </div>

            {/* SOCIAL ICONS UNDER CONTACT */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/Udhayaprabhas2904"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 p-2 rounded-lg text-white hover:bg-white hover:text-black transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/udhayaprabha-s-039aab26a"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 p-2 rounded-lg text-white hover:bg-white hover:text-black transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Udhayaprabha S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
