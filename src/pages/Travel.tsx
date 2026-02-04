import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Travel = () => {
  const travelArticles = articles.filter(article => 
    article.category.toLowerCase() === "travel"
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Travels
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Join me as I explore beautiful destinations, share travel tips, and document my adventures around the world. 
            From hidden gems to popular spots, discover travel stories and guides from my personal experiences.
          </p>
        </div>

        {/* Articles Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        {/* Travel Philosophy */}
        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Travel Philosophy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Travel is more than visiting new places—it's about experiencing different cultures, meeting new people, 
                and creating memories that last a lifetime. I believe in authentic travel that goes beyond tourist spots.
              </p>
              <p>
                Through my travels, I share practical tips, budget-friendly guides, and personal stories that help you 
                plan your own adventures. Whether it's a weekend getaway or an international trip, let me inspire you 
                to explore the world and create your own unforgettable experiences.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Travel;
