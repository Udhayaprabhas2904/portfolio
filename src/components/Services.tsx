import { Card } from "@/components/ui/card";
import { Code2, BarChart3, Palette, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Full Stack Web Development",
      description:
        "Building responsive and scalable web applications using React.js, Node.js, and modern libraries. Delivering complete end-to-end solutions from intuitive frontend design to efficient backend architecture.",
      features: [
        "React.js & Node.js",
        "RESTful APIs",
        "Database Design",
        "Responsive UI",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      description:
        "Transforming raw data into actionable insights using Python, SQL, and R by developing interactive visualizations and predictive models that enable accurate, scalable, and data-driven decision-making.",
      features: [
        "Python & SQL",
        "Machine Learning",
        "Data Visualization",
        "Statistical Analysis",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually refined user interfaces using Figma by applying UX research principles, accessibility guidelines, responsive design systems, and modern UI frameworks.",
      features: [
        "Figma Design",
        "Wireframing",
        "Prototyping",
        "User Research",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden
                 bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700"
    >
      {/* soft background glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        {/* HEADER */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
              Services
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            What I Offer
          </h2>

          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400"></div>

          <p className="text-white/80 mt-4 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-white/10 backdrop-blur-md
                         border border-white/25
                         shadow-xl hover:shadow-2xl
                         transition-all duration-300
                         hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4
                           bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400
                           group-hover:scale-110 transition-transform shadow-md"
              >
                <service.icon className="h-8 w-8 text-black" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors">
                {service.title}
              </h3>

              <p className="text-white/80 mb-4 leading-relaxed text-justify">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/80 group-hover:translate-x-1 transition-transform"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
