import { Card } from "@/components/ui/card";
import {
  Code2,
  Users,
  MessageSquare,
  Clock,
  Sparkles,
  Layers,
  PenTool,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

type SkillItem = {
  name: string;
  level: number;
};

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const languages: SkillItem[] = [
    { name: "C", level: 95 },
    { name: "Python", level: 86 },
    { name: "R", level: 78 },
    { name: "MySQL", level: 85 },
  ];

  const frameworks: SkillItem[] = [
    { name: "HTML / CSS", level: 94 },
    { name: "Bootstrap", level: 90 },
    { name: "Tailwind CSS", level: 88 },
    { name: "React.js", level: 85 },
  ];

  const designTools: SkillItem[] = [
    { name: "Figma", level: 80 },
    { name: "Canva", level: 92 },
    { name: "UI Wireframing", level: 85 },
  ];

  const softSkills = [
    {
      name: "Teamwork",
      icon: Users,
      desc: "Collaborate effectively in teams, contribute ideas, and support goals.",
    },
    {
      name: "Communication",
      icon: MessageSquare,
      desc: "Clear verbal and written communication with strong presentation ability.",
    },
    {
      name: "Problem Solving",
      icon: Code2,
      desc: "Analyze problems logically and deliver efficient, practical solutions.",
    },
    {
      name: "Time Management",
      icon: Clock,
      desc: "Prioritize tasks efficiently to meet deadlines with consistent quality.",
    },
  ];

  const SkillCard = ({
    title,
    Icon,
    data,
  }: {
    title: string;
    Icon: LucideIcon;
    data: SkillItem[];
  }) => (
    <Card className="p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-float">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-amber-400" />
        <h4 className="text-xl font-semibold text-white">{title}</h4>
      </div>

      <div className="space-y-5">
        {data.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2 text-white">
              <span>{skill.name}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-400 text-black font-semibold">
                {skill.level}%
              </span>
            </div>

            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-300 to-amber-500 rounded-full transition-all duration-1000"
                style={{ width: visible ? `${skill.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-gradient-hero py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-20 w-72 h-72 bg-amber-400/20 blur-3xl rounded-full animate-floatSlow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-floatSlowDelay" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        {/* HEADER */}
        <div className="text-center mb-16 animate-fadeUp">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="uppercase tracking-wider text-sm text-amber-400 font-semibold">
              Skills & Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What I Bring to the Table
          </h2>

          <div className="w-20 h-1 mx-auto rounded-full bg-amber-400" />
          <p className="text-white/80 mt-4 max-w-xl mx-auto">
  Core skills and tools that define my technical profile.
</p>

        </div>
        

        {/* ===== TECHNICAL SKILLS (ONE CONTAINER) ===== */}
        <Card className="p-10 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-float mb-20">
          <h3 className="text-3xl font-semibold text-white text-center mb-12">
            Technical Skills
          </h3>

          {/* TOP ROW */}
          <div className="grid lg:grid-cols-2 gap-10">
            <SkillCard title="Languages" Icon={Code2} data={languages} />
            <SkillCard title="Frameworks" Icon={Layers} data={frameworks} />
          </div>

          {/* CENTER BOTTOM */}
          <div className="flex justify-center mt-12">
            <div className="w-full lg:w-1/2">
              <SkillCard title="Design Tools" Icon={PenTool} data={designTools} />
            </div>
          </div>
        </Card>

        {/* SOFT SKILLS */}
        <Card className="p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-floatDelay">
          <h3 className="text-2xl font-semibold mb-8 text-white text-center">
            Soft Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex gap-4 p-5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center shadow-md">
                  <skill.icon className="w-6 h-6 text-black" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-floatDelay {
          animation: float 7s ease-in-out infinite;
        }

        .animate-floatSlow {
          animation: float 10s ease-in-out infinite;
        }

        .animate-floatSlowDelay {
          animation: float 12s ease-in-out infinite;
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default Skills;
