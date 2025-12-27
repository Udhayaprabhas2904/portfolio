import { GraduationCap, Award, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import educationBg from "@/assets/Education image.jpg";

const About = () => {
  const education = [
    {
      degree: "B.Tech Information Technology",
      institution: "Francis Xavier Engineering College",
      period: "2022 - 2026",
      grade: "CGPA: 8.5",
    },
    {
      degree: "HSC",
      institution: "Annai Matric Hr. Sec. School",
      period: "2022",
      grade: "83.3%",
    },
    {
      degree: "SSLC",
      institution: "Annai Matric Hr. Sec. School",
      period: "2020",
      grade: "79%",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${educationBg})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-purple-50/85 to-blue-50/80"></div>

      {/* DECORATIVE BLOBS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Know Me Better
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 mx-auto rounded-full"></div>


          

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Focused on learning, improving, and creating impactful digital solutions.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* PROFESSIONAL SUMMARY */}
          <div className="animate-fade-in-up">
            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 border-t-4 border-t-primary backdrop-blur-sm bg-card/80">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-gradient-hero rounded-full"></div>
                <h3 className="text-2xl font-bold text-primary">
                  Professional Summary
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                Motivated <strong>Full Stack Developer</strong>,{" "}
                <strong>Data Analyst</strong>, and{" "}
                <strong>UI/UX Designer</strong> Proficient in React.js, Node.js,
                Python, SQL, and Figma. Skilled in building modern web
                applications, applying data-driven decision-making, and crafting
                responsive, user-friendly interfaces. Focused on creating clean
                layouts, reusable components, and intuitive designs that enhance
                usability and user engagement.
              </p>

              <p className="text-muted-foreground leading-relaxed text-justify">
                Experienced in developing scalable applications, working with
                databases, and improving overall application performance. Strong
                interest in creating meaningful user experiences through clean
                UI and effective data visualizations. Passionate about
                leveraging technology to solve real-world problems and
                continuously learning new tools and skills to grow as a
                developer.
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Location:
                    </span>
                    <p className="font-semibold ml-4">
                      Tirunelveli, Tamil Nadu
                    </p>
                  </div>

                  <div>
                    <span className="text-muted-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Email:
                    </span>
                    <p className="font-semibold ml-4 break-all">
                      udhayaprabha174@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* EDUCATION */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-hero p-3 rounded-lg shadow-glow">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary backdrop-blur-sm bg-card/80 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Award className="h-5 w-5 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {edu.period}
                        </span>
                        <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full font-semibold">
                          {edu.grade}
                        </span>
                      </div>
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

export default About;
