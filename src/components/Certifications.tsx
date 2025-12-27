import { Card } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Sparkles,
  Download,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import certBg from "@/assets/certification.jpg";

const Certifications = () => {
  const certifications = [
    {
      title: "Industry 4.0 and Industrial Internet of Things",
      issuer: "NPTEL",
      score: "71%",
      type: "certification",
      certificate: "/certificates/NPTEL_IIoT.pdf",
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      score: "58%",
      type: "certification",
      certificate: "/certificates/NPTEL_Privacy_Security.pdf",
    },
    {
      title: "Python Development & Data Science",
      issuer: "Udemy",
      score: "Completed",
      type: "certification",
      certificate: "/certificates/Udemy_Python.pdf",
    },
  ];

  const publications = [
    {
      title: "PetPals Network",
      journal:
        "IJSREM - International Journal of Scientific Research in Engineering and Management",
      details: "Vol. 09, Issue 04, April 2025",
      issn: "ISSN: 2582-3930",
      link: "https://ijsrem.com/download/petpals-network/",
      certificate: "/certificates/Journal Certificate.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${certBg})` }}
    >
      {/* LIGHT WHITE / BLUE OVERLAY */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-[1px]" />

      {/* Soft decorative blobs */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Achievements
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-3">
            Certifications & Publication
          </h2>

          {/* Indigo underline */}
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 mx-auto rounded-full mb-4" />

          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional certifications supporting academic and technical development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* CERTIFICATIONS */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-hero p-3 rounded-lg shadow-glow">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="
                    p-5 bg-card/95 backdrop-blur-sm
                    border-2 border-accent/60
                    shadow-md hover:shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="bg-accent/20 p-2 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {cert.issuer}
                    </span>
                  </div>

                  <h4 className="font-bold text-lg mb-3">
                    {cert.title}
                  </h4>

                  <div className="flex items-center justify-between">
                    <div className="bg-accent/20 px-3 py-1.5 rounded-full text-sm font-semibold">
                      {cert.score === "Completed"
                        ? "✓ Completed"
                        : `Score: ${cert.score}`}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0"
                        onClick={() =>
                          window.open(cert.certificate, "_blank")
                        }
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>

                      <Button size="sm" variant="ghost" asChild>
                        <a href={cert.certificate} download>
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

         {/* PUBLICATIONS */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-hero p-3 rounded-lg shadow-glow">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Publication</h3>
            </div>

            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card
                  key={index}
                  className="
                    p-5 bg-card/95 backdrop-blur-sm
                    border-2 border-primary/60
                    shadow-md hover:shadow-lg
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      Journal
                    </span>
                  </div>

                  <h4 className="font-bold text-lg mb-2">
                    {pub.title}
                  </h4>
                  {/* Publication description */}
                  <p className="text-muted-foreground text-sm mt-4 text-justify leading-relaxed">
                    This full-stack web application integrates pet adoption, healthcare services, and pet product commerce into a unified digital platform. Built using React.js and MySQL, it enables dynamic user interactions, secure data management, and responsive design. Core functionalities include pet adoption management, symptom-based health assessment, veterinary appointment scheduling, service modules, and integrated e-commerce features. The system is designed with scalability and usability in mind to enhance efficiency and accessibility across the pet care ecosystem. Real-time inventory updates, personalized recommendations, and structured checkout processes further improve user experience. The platform aims to support pet owners, shelters, and veterinarians by streamlining operations and providing comprehensive digital solutions, delivering a truly seamless and consistently efficient pet care experience.
                  </p>

                 <br></br> <p className="text-muted-foreground text-sm mb-1">
                    {pub.journal}{" "}({pub.details}).
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold">
                      {pub.issn}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0"
                        onClick={() => window.open(pub.link, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>

                      <Button size="sm" variant="ghost" asChild>
                        <a href={pub.certificate} download>
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;









