import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Sparkles, Mail } from "lucide-react";

const Projects = () => {
  const projects = [
     {
      title: "Parkinson's Disease Prediction",
      date: "Feb 2024",
      description:
        "Machine learning model that predicts Parkinson’s disease using biomedical voice features. Designed to support early detection through data-driven insights.",
      technologies: ["Python", "Jupyter Notebook", "Streamlit"],
      github: "https://github.com/Udhayaprabhas2904/parkinsons_prediction",
      linkedin:
        "https://www.linkedin.com/posts/udhayaprabha-s-039aab26a_transforming-purpose-into-action-my-journey-activity-7346325767892496387-i3r1",
      color: "from-cyan-500 to-teal-600",
    },

     {
      title: "Online Shopping Bill Separator",
      date: "Sep 2024",
      description:
        "Design-focused project emphasizing clean layouts, optimized flows, and intuitive interaction patterns to deliver an efficient and user bill-splitting experience.",
      technologies: ["Figma", "UI/UX Design"],
      linkedin:
        "https://www.linkedin.com/posts/udhayaprabha-s-039aab26a_billbuddy-grocery-shopping-bill-activity-7347191280247967744-OzI9",
      color: "from-amber-500 to-orange-600",
    },
     {
      title: "Hungry Heaven",
      date: "Dec 2024",
      description:
        "Beginner-friendly food ordering web app built with React featuring a responsive interface reusable components and modular design for development.",
      technologies: ["React.js", "Node.js", "MySQL"],
      linkedin:
        "https://www.linkedin.com/posts/udhayaprabha-s-039aab26a_hungry-heaven-my-first-react-project-activity-7380644133016801280-6Cwk",
      color: "from-rose-500 to-pink-600",
    },
    
    {
      title: "PetPals Network",
      date: "May 2025",
      description:
        "Full-stack pet care platform integrating adoption, healthcare, and e-commerce features using modern web technologies and scalable architecture secure.",
      technologies: ["React.js", "Node.js", "Firebase", "MySQL"],
      github: "https://github.com/Udhayaprabhas2904/petpals_network",
      linkedin:
        "https://www.linkedin.com/posts/udhayaprabha-s-039aab26a_started-in-january-felt-impossible-in-activity-7342792200570683393-cz0M",
      color: "from-primary to-indigo-600",
    },
   
    {
      title: "Forest Fire Risk Prediction",
      date: "Nov 2025",
      description:
        "A predictive solution that analyzes environmental and meteorological data to identify fire-prone conditions and support disaster management risk.",
      technologies: ["Python", "Scikit-learn", "Flask"],
      github: "https://github.com/Udhayaprabhas2904/forsestfire",
      linkedin: "https://www.linkedin.com/in/udhayaprabha-s-039aab26a",
      color: "from-emerald-500 to-green-600",
    },
   
    {
      title: "More projects coming soon",
      date: "Upcoming",
      description:
        "As a passionate fresher, I'm continuously learning and building new projects. Follow my journey and let's connect and collaborate together professionally.",
      technologies: ["Machine Learning", "Full Stack", "UI/UX"],
      mail: "mailto:udhayaprabha174@gmail.com",
      color: "from-fuchsia-500 to-pink-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700"
    >
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-amber-400" />
            <span className="text-amber-400 font-semibold uppercase tracking-wider text-sm">
              Projects
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>

          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400" />

          <p className="text-white/80 mt-4 max-w-2xl mx-auto">
            Showcasing innovative solutions across web development, data analysis, and UI/UX design.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              tabIndex={0}
              className="
                relative overflow-hidden
                bg-gradient-to-br from-purple-500/90 via-violet-600/90 to-indigo-600/90
                border-2 border-white/40
                rounded-2xl
                shadow-xl
                transition-all
                focus-within:border-yellow-400
                focus-within:ring-2 focus-within:ring-yellow-400/40
              "
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 text-white flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 text-black">
                    {project.date}
                  </span>
                </div>

                <p className="text-white/90 mb-4 text-sm leading-relaxed text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-white/40 text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <Button
                      size="sm"
                      className="flex-1 bg-transparent border-2 border-white text-white
                                 focus:bg-white focus:text-black
                                 active:bg-white active:text-black"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}

                  {project.linkedin && (
                    <Button
                      size="sm"
                      className="flex-1 bg-transparent border-2 border-white text-white
                                 focus:bg-white focus:text-black
                                 active:bg-white active:text-black"
                      asChild
                    >
                      <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  )}

                  {project.mail && (
                    <Button
                      size="sm"
                      className="flex-1 bg-transparent border-2 border-white text-white
                                 focus:bg-white focus:text-black
                                 active:bg-white active:text-black"
                      asChild
                    >
                      <a href={project.mail}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
