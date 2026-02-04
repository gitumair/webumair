import Header from "@/components/Header";
import { Mail, MessageCircle, Linkedin, Instagram } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Muhammad Umair Nasir
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            IT & Development insights, tutorials, and the latest in technology.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
          <p>
            I'm Muhammad Umair Nasir, a passionate software developer and tech enthusiast dedicated to sharing 
            knowledge about IT and development. This blog started with a simple goal: to create a resource 
            where developers can find practical insights, tutorials, and guidance on their coding journey.
          </p>
          <p>
            In an ever-evolving tech landscape, staying updated is crucial. That's why I focus on delivering 
            content that's not just informative but immediately applicable—whether you're building your first 
            web app or architecting complex systems.
          </p>
          <p>
            I explore topics that matter to developers: modern frameworks, best practices in software engineering, 
            emerging technologies, and career growth in tech. My approach combines hands-on experience with 
            continuous learning and a commitment to helping others succeed.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">My Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I believe that quality education should be accessible to everyone. This blog is dedicated to 
              providing clear, practical content that helps developers:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Master modern web development technologies and frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Write cleaner, more maintainable code</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Stay current with industry trends and best practices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Build successful careers in technology</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">My Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Practical Learning</h3>
              <p className="text-muted-foreground">
                I focus on real-world applications and hands-on tutorials that you can apply immediately.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Quality Content</h3>
              <p className="text-muted-foreground">
                Every article is thoroughly researched and tested to ensure accuracy and value.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-muted-foreground">
                I believe in giving back to the developer community that has helped me grow.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Continuous Growth</h3>
              <p className="text-muted-foreground">
                Technology evolves constantly, and so do I—always learning and sharing new discoveries.
              </p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out through any of these channels.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:umairzk565@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href="https://wa.me/923116785371"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted font-medium transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-umair-nasir/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted font-medium transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/m_umairnasir786"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted font-medium transition-colors"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
