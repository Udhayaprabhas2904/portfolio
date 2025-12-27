import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Github, Linkedin, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import contactBg from "@/assets/contact_image.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xzdbeynn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Tirunelveli, Tamil Nadu",
      color: "bg-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8220378185",
      href: "tel:+918220378185",
      color: "bg-accent",
    },
    {
      icon: Mail,
      label: "Email",
      value: "udhayaprabha174@gmail.com",
      href: "mailto:udhayaprabha174@gmail.com",
      color: "bg-primary",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Udhayaprabhas2904",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/udhayaprabha-s-039aab26a",
      color: "hover:text-accent",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Contact Me
          </h2>

          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let’s work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-4 bg-card/80 backdrop-blur-sm border-2 border-primary/40 hover:border-primary transition-all duration-300 hover:-translate-x-2"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${info.color} p-3 rounded-lg shrink-0`}>
                      <info.icon className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-4 rounded-lg border-2 border-primary/40 hover:border-primary transition-all duration-300 hover:scale-110 bg-card/80 backdrop-blur-sm ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/40 hover:border-primary transition-all animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  Message
                </label>
                <Textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="hero"
                className="w-full shadow-glow group"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
