import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Wellness = () => {
  const wellnessArticles = articles.filter(article => 
    article.category.toLowerCase() === "wellness"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Gymnastic
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Join me on my fitness journey! From workout routines and nutrition tips to gymnastic training and bodybuilding insights. 
            Let's build strength, discipline, and a healthier lifestyle together.
          </p>
        </div>

        {/* Articles Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Fitness Philosophy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Fitness isn't just about lifting weights—it's about building a stronger version of yourself, both physically and mentally. 
                The gym has taught me discipline, consistency, and the power of pushing through limits.
              </p>
              <p>
                Whether you're a beginner or an experienced lifter, I share practical tips, workout routines, and motivation 
                to help you achieve your fitness goals. Let's embrace the grind together and transform not just our bodies, 
                but our mindset and lifestyle.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Wellness;
