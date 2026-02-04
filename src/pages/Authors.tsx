import Header from "@/components/Header";
import { Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";
import profileImage from "@/assets/profile-umair.jpg";

const Authors = () => {
  const authors = [
    {
      name: "Muhammad Umair Nasir",
      role: "IT & Development Writer",
      bio: "Muhammad Umair Nasir is a passionate software developer and tech enthusiast with expertise in web development, software engineering, and emerging technologies. He shares practical insights and tutorials to help developers grow their skills and stay current with industry trends.",
      image: profileImage,
      articles: 15,
      email: "umairzk565@gmail.com",
      whatsapp: "923116785371",
      linkedin: "https://www.linkedin.com/in/muhammad-umair-nasir/",
      instagram: "m_umairnasir786",
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Meet Our Authors
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            The voice behind Life of Umair—sharing insights on IT, development, fitness, and travel 
            to inspire and help others grow.
          </p>
        </div>

        {/* Authors Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {authors.map((author, index) => (
            <div key={author.name} className={`rounded-2xl bg-card p-8 hover:shadow-xl transition-all duration-300 animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{author.name}</h3>
                  <p className="text-accent font-medium mb-3">{author.role}</p>
                  <p className="text-sm text-muted-foreground">{author.articles} articles published</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {author.bio}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${author.email}`}
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${author.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`https://instagram.com/${author.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Join Section */}
        <section className="text-center py-12 rounded-2xl bg-muted">
          <h2 className="text-3xl font-bold mb-4">Want to Contribute?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for thoughtful voices to join our community. If you have insights 
            to share on wellness, travel, creativity, or personal growth, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </div>
  );
};

export default Authors;
