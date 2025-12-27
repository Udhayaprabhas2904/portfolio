import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, Sparkles, Download, Award, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";
import experienceBg from "@/assets/Experience Image.png";

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Digital Marketing Intern",
      company: "IDM Technologies",
      period: "December 2024",
      achievements: [
        "Increased website traffic by 25% through SEO and social media marketing.",
        "Created AI-driven content that increased user engagement by 15%.",
        "Designed marketing assets with Canva and managed campaigns with Google Ads.",
      ],
      certificateColor: "from-violet-500 to-purple-600",
      certificatePath: "/certificates/IDM_Internship.pdf",
      iconBg: "bg-violet-500",
    },
    {
      title: "Node.js Developer Intern",
      company: "Digisailor",
      period: "July 2024",
      achievements: [
        "Built simple pages and forms, integrating them with backend logic.",
        "Enhanced system performance by optimizing API response times by 40%.",
        "Integrated third-party APIs, reducing manual processing by 50%.",
      ],
      certificateColor: "from-emerald-500 to-teal-600",
      certificatePath: "/certificates/Digisailor_Internship.pdf",
      iconBg: "bg-emerald-500",
    },
    {
      title: "SQL Developer Intern",
      company: "Evalbench Technologies",
      period: "June 2024",
      achievements: [
        "Optimized SQL queries, reducing data retrieval times by 35%.",
        "Automated reporting processes, cutting generation time significantly.",
        "Handled cookies for session management and data tracking.",
      ],
      certificateColor: "from-blue-500 to-cyan-600",
      certificatePath: "/certificates/EvalBench_Internship.pdf",
      iconBg: "bg-blue-500",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${experienceBg})` }}
    >
      {/* SINGLE CLEAN OVERLAY */}
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Work Experience
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4 text-black">
            Professional Journey
          </h2>

          <div className="w-24 h-1.5 bg-gradient-hero mx-auto rounded-full"></div>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Building expertise through hands-on experience at leading tech companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${exp.iconBg} hidden lg:block shadow-lg ring-4 ring-background transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-150" : ""
                  }`}
                />

                <Card
                  className={`p-0 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in-up border-0 backdrop-blur-sm bg-card/90 group overflow-hidden ${
                    hoveredIndex === index ? "-translate-y-2 shadow-elevated" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`h-1.5 bg-gradient-to-r ${exp.certificateColor} transition-all duration-500 ${
                      hoveredIndex === index ? "h-2" : ""
                    }`}
                  />

                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      {/* Icon */}
                      <div className="relative shrink-0">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${exp.certificateColor} rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity`}
                        />
                        <div
                          className={`relative bg-gradient-to-r ${exp.certificateColor} p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        >
                          <Briefcase className="h-7 w-7 text-white" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-lg font-semibold flex items-center gap-2 mt-1">
                              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.certificateColor}`} />
                              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {exp.company}
                              </span>
                            </p>
                          </div>

                          <div
                            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${exp.certificateColor} text-white shadow-md`}
                          >
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-semibold">{exp.period}</span>
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                              style={{ transitionDelay: `${i * 50}ms` }}
                            >
                              <span
                                className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.certificateColor} shrink-0`}
                              />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Certificate Section */}
                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Award
                              className="h-5 w-5 text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"
                              style={{ WebkitTextFillColor: "transparent" }}
                            />
                            <FileText className="h-4 w-4" />
                            <span className="font-medium">Certificate Available</span>
                          </div>

                          <div className="flex gap-2 ml-auto">
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className={`group/btn border-2 border-primary/30 hover:border-transparent hover:bg-gradient-to-r ${exp.certificateColor} hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105`}
                            >
                              <a href={exp.certificatePath} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                                View
                              </a>
                            </Button>

                            <Button
                              size="sm"
                              asChild
                              className={`bg-gradient-to-r ${exp.certificateColor} text-white hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 group/download`}
                            >
                              <a href={exp.certificatePath} download>
                                <Download className="h-4 w-4 mr-2 group-hover/download:animate-bounce" />
                                Download PDF
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
