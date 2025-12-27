import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  ArrowRight,
  ChevronDown,
  Mail,
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ===== LEFT ===== */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-down">
              Hello, I'm
              <span className="block mt-2 bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">
                Udhayaprabha S
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-4 text-white/90 font-medium flex items-center gap-2 animate-slide-down">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Aspiring Full Stack Developer & Data Analyst
            </p>

            <p className="text-lg mb-8 text-white/80 max-w-xl animate-slide-down">
             Innovative Full Stack Developer & Data Analyst building scalable, robust, secure, data-driven web applications with React.js, Node.js, and Python, focused on delivering real-world solutions and actionable insights.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mb-8 animate-slide-down">
              <Button
                size="lg"
                variant="hero"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="hero-outline"
                onClick={() =>
                  (window.location.href =
                    "mailto:udhayaprabha174@gmail.com?subject=Hiring Inquiry&body=Hello Udhayaprabha,")
                }
              >
                <Mail className="mr-2 h-5 w-5" /> Hire Me
              </Button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 animate-slide-down">
              <a
                href="https://github.com/Udhayaprabhas2904"
                target="_blank"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/udhayaprabha-s-039aab26a"
                target="_blank"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* ===== RIGHT ===== */}
          <div className="relative flex justify-center animate-float">
            <div className="relative w-96 h-96">
              <div className="absolute -inset-3 bg-gradient-to-r from-accent via-primary to-secondary rounded-full blur-xl opacity-40"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white/30">
                <img
                  src={profilePhoto}
                  alt="Udhayaprabha S"
                  className="w-full h-full object-cover"
                />
              </div>

   <div className="absolute bottom-6 left-2 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F97316] px-4 py-2 rounded-xl shadow-md text-black animate-float">
  <div className="text-xl font-bold">5+</div>
  <div className="text-xs font-medium">Projects</div>
</div>


              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                <span className="font-bold text-primary text-sm">
                  Udhayaprabha S
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL DOWN */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-center animate-bounce-soft">
        <span className="text-sm">Scroll Down</span>
        <ChevronDown className="mx-auto mt-1" />
      </div>
    </section>
  );
};

export default Hero;
