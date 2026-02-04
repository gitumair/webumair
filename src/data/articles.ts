export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "001",
    title: "Whispers of Wisdom",
    subtitle: "Finding clarity in the quiet moments of financial planning",
    category: "Financing",
    date: "Oct 16, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Financial wellness writer and personal growth advocate",
    },
    content: {
      introduction: "In a world of financial noise and conflicting advice, sometimes the wisest course of action is to listen to the whispers—those quiet moments of clarity that cut through the chaos. Financial planning isn't just about numbers; it's about understanding your values and aligning your resources with what truly matters.",
      sections: [
        {
          heading: "The Power of Quiet Reflection",
          content: "Before making any major financial decision, we often rush to consume more information, read more articles, or seek more advice. Yet the most profound insights often come when we step back and simply reflect. Taking time for quiet contemplation allows us to connect with our deeper values and understand what financial security truly means to us—not what society tells us it should mean.",
        },
        {
          heading: "Building Financial Awareness",
          content: "True financial wisdom begins with awareness. This means honestly assessing where you are, understanding your patterns and behaviors around money, and recognizing the emotional drivers behind your financial decisions. It's not about judgment, but about clear-eyed observation. When we can see our financial reality clearly, we're empowered to make intentional changes.",
        },
        {
          heading: "Small Steps, Lasting Change",
          content: "The whispers of wisdom often guide us toward small, sustainable actions rather than dramatic overhauls. Perhaps it's automating a small savings contribution, or finally organizing your financial documents, or having that honest conversation about money with your partner. These quiet actions, consistently applied, create profound change over time.",
        },
        {
          heading: "Values-Based Financial Planning",
          content: "When we align our financial decisions with our core values, money becomes a tool for creating the life we want rather than a source of stress and confusion. Ask yourself: What do I truly value? How can my financial choices support those values? The answers to these questions are your compass in navigating financial decisions.",
        },
      ],
      conclusion: "Financial wisdom isn't found in the loudest voices or the most complex strategies. It's discovered in quiet moments of reflection, in the gentle guidance of your values, and in the consistent application of simple, intentional actions. Listen to the whispers—they often speak the deepest truths.",
    },
    tags: ["financial planning", "mindfulness", "personal finance", "values"],
  },
  {
    id: "002",
    title: "Ink-Stained Insights",
    subtitle: "The art of journaling for a more intentional lifestyle",
    category: "Lifestyle",
    date: "Oct 23, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80",
    author: {
      name: "Sofia Rodriguez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      bio: "Creative writer and mindfulness practitioner",
    },
    content: {
      introduction: "There's something profound about putting pen to paper—the way ink flows across the page, capturing thoughts that might otherwise evaporate. In our digital age, the practice of journaling offers a rare opportunity to slow down, reflect, and connect with ourselves in a tangible, meaningful way.",
      sections: [
        {
          heading: "Why Analog Matters",
          content: "While digital tools have their place, there's neuroscience behind why handwriting engages our brain differently. The physical act of writing slows our thinking, allowing for deeper processing and reflection. It's a form of mindfulness in action, anchoring us in the present moment while we explore our inner landscape.",
        },
        {
          heading: "Creating Your Practice",
          content: "Your journaling practice doesn't need to be elaborate or time-consuming. Start with five minutes each morning or evening. Write freely without judgment—this isn't about perfect prose or profound insights. It's about showing up for yourself, creating space for reflection, and building a relationship with your thoughts and feelings.",
        },
        {
          heading: "Prompts for Deeper Reflection",
          content: "When you're not sure what to write, prompts can guide you: What am I grateful for today? What challenged me and what did I learn? What do I need more of in my life? What can I let go of? These questions invite introspection and help us identify patterns in our thoughts and behaviors.",
        },
        {
          heading: "The Gift of Looking Back",
          content: "One of journaling's greatest gifts reveals itself over time. Looking back through old entries, we see how we've grown, what we've overcome, and patterns we might want to change. This historical perspective offers wisdom we can't access in the present moment alone.",
        },
      ],
      conclusion: "Journaling is more than record-keeping—it's a practice of self-discovery and intentional living. Those ink-stained pages become a map of your inner journey, a testament to your growth, and a tool for creating the life you envision. Start today, even if just for five minutes. Your future self will thank you.",
    },
    tags: ["journaling", "mindfulness", "self-reflection", "lifestyle"],
  },
  {
    id: "003",
    title: "Musings in Grayscale",
    subtitle: "Finding beauty and clarity in life's neutral moments",
    category: "Community",
    date: "Dec 4, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1920&q=80",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Community builder and contemplative writer",
    },
    content: {
      introduction: "We often seek the extremes—the peaks of joy, the depths of sorrow, the bright colors that define our experiences. But what about the in-between? The neutral moments, the grayscale of everyday life that makes up most of our existence? There's unexpected beauty and wisdom in these spaces.",
      sections: [
        {
          heading: "The Overlooked Majority",
          content: "Most of life isn't dramatic. It's morning coffee, routine commutes, quiet evenings, and ordinary conversations. We tend to overlook these moments, waiting for something 'significant' to happen. Yet these grayscale moments—when approached with presence and appreciation—contain their own quiet richness.",
        },
        {
          heading: "Community in the Mundane",
          content: "Some of the deepest community connections happen not in grand gestures but in ordinary moments: the neighbor who waves each morning, the barista who remembers your order, the colleague who checks in during a regular Tuesday. These small, repeated interactions create the texture of belonging.",
        },
        {
          heading: "Finding Clarity in Neutrality",
          content: "When we're not caught up in emotional extremes, we can see more clearly. The grayscale moments offer perspective—a chance to observe our lives without the distortion of intense emotion. This clarity helps us make better decisions and understand what truly matters to us.",
        },
        {
          heading: "Cultivating Appreciation",
          content: "Learning to appreciate the neutral doesn't mean settling for less—it means expanding our capacity for contentment. It's recognizing that a quiet Sunday afternoon, a simple meal with friends, or a walk without destination has its own value. This appreciation makes us resilient and less dependent on external circumstances for our sense of wellbeing.",
        },
      ],
      conclusion: "Life in grayscale isn't boring—it's the canvas on which everything else appears. By learning to appreciate these neutral moments and the community connections within them, we enrich our entire experience. The next time you find yourself in an 'ordinary' moment, pause and look closer. You might be surprised by what you find.",
    },
    tags: ["mindfulness", "community", "presence", "contentment"],
  },
  {
    id: "W001",
    title: "Finding Balance: How to Create a Sustainable Self-Care Routine",
    subtitle: "Developing practices that actually stick",
    category: "Wellness",
    date: "Mar 19, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bio: "Certified wellness coach and holistic health practitioner",
    },
    content: {
      introduction: "Self-care has become a buzzword, often associated with spa days and indulgent treats. While these have their place, true self-care is about sustainable practices that support your physical, mental, and emotional wellbeing consistently—not just when you're burned out.",
      sections: [
        {
          heading: "Understanding Your Needs",
          content: "Before building a self-care routine, you need to understand what you actually need. Are you lacking physical movement, mental rest, emotional processing, or social connection? Self-care isn't one-size-fits-all. Take time to honestly assess where you're depleted and what would genuinely nourish you.",
        },
        {
          heading: "Start Small and Specific",
          content: "The biggest mistake people make with self-care is trying to overhaul everything at once. Instead, start with one small, specific practice. Maybe it's five minutes of stretching each morning, or drinking a glass of water before coffee, or spending ten minutes outside daily. Small, consistent actions create lasting change.",
        },
        {
          heading: "The Four Pillars of Wellness",
          content: "A balanced self-care routine addresses four key areas: physical health (movement, nutrition, sleep), mental health (stress management, learning, rest), emotional health (processing feelings, connection, creativity), and spiritual health (meaning, purpose, values alignment). You don't need elaborate practices in each area—just intentional attention.",
        },
        {
          heading: "Making It Sustainable",
          content: "Sustainability comes from integration, not addition. Instead of adding more to your already full schedule, look for ways to integrate self-care into existing routines. Take walking meetings, practice mindful eating during meals you already eat, or turn your commute into a time for podcasts that inspire you.",
        },
        {
          heading: "When Self-Care Feels Selfish",
          content: "Many people struggle with guilt around self-care, especially caregivers. Remember: you can't pour from an empty cup. Taking care of yourself isn't selfish—it's necessary for showing up as your best self for others. Your wellbeing matters, not just as a means to serve others, but as an end in itself.",
        },
      ],
      conclusion: "A sustainable self-care routine isn't about perfection or elaborate practices. It's about consistent, intentional actions that support your wellbeing across all dimensions of health. Start small, be patient with yourself, and remember that self-care is a practice, not a destination.",
    },
    tags: ["self-care", "wellness", "mindfulness", "sustainable living"],
  },
  {
    id: "T001",
    title: "The Art of Slow Travel: Embracing Local Experiences",
    subtitle: "Discovering depth over distance in your journeys",
    category: "Travel",
    date: "Mar 15, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Slow travel advocate and cultural immersion specialist",
    },
    content: {
      introduction: "In an age of whirlwind tours and bucket-list chasing, slow travel offers a radical alternative: staying longer, going deeper, and truly experiencing a place rather than just seeing it. It's not about how many countries you've visited, but how deeply you've connected with the places you've been.",
      sections: [
        {
          heading: "What Is Slow Travel?",
          content: "Slow travel is a philosophy that prioritizes depth over breadth, quality over quantity. It means staying in fewer places for longer periods, developing routines in new locations, shopping at local markets, and building relationships with locals. It's about experiencing a destination as a temporary resident rather than a tourist passing through.",
        },
        {
          heading: "The Benefits of Slowing Down",
          content: "When you slow down, travel becomes richer and more meaningful. You notice details you'd miss when rushing from sight to sight. You have time for spontaneous conversations, unexpected discoveries, and genuine cultural exchange. You also return home less exhausted and with deeper memories than a photo collection of landmarks.",
        },
        {
          heading: "Practical Steps for Slow Travel",
          content: "Start by choosing one place and staying at least a week—two or more is even better. Rent an apartment instead of staying in hotels. Shop at local markets, take local transportation, and establish routines like a regular cafe or morning walk. Say yes to invitations from locals. Allow for unplanned time in your schedule.",
        },
        {
          heading: "Overcoming FOMO",
          content: "The biggest challenge of slow travel is overcoming the fear of missing out. You might not see every museum or landmark. That's okay. You're choosing depth over breadth, experience over completion. Remember: the goal isn't to check off a list—it's to truly experience and understand a place.",
        },
        {
          heading: "Environmental and Cultural Benefits",
          content: "Slow travel is inherently more sustainable. Fewer flights, more local spending, less overtourism impact. It's also more respectful to local communities. When you stay longer and engage more deeply, you contribute more meaningfully to local economies and build bridges of understanding between cultures.",
        },
      ],
      conclusion: "Slow travel isn't just a way of moving through the world—it's a mindset that values presence, connection, and understanding. In slowing down, we paradoxically experience more. The next time you travel, consider going fewer places and staying longer. You might discover that the journey becomes infinitely richer.",
    },
    tags: ["slow travel", "sustainable travel", "cultural immersion", "mindful exploration"],
  },
  {
    id: "G001",
    title: "Minimalist Living: Creating Space for What Matters Most",
    subtitle: "The freedom found in letting go",
    category: "Growth",
    date: "Mar 10, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Minimalism advocate and intentional living coach",
    },
    content: {
      introduction: "Minimalism isn't about having less for the sake of having less—it's about making room for more: more clarity, more freedom, more focus on what truly matters. In our consumer-driven culture, choosing to live with less is a radical act of intentionality.",
      sections: [
        {
          heading: "Beyond the Aesthetic",
          content: "Minimalism has been co-opted by a certain aesthetic—white walls, sparse furniture, perfectly curated spaces. But true minimalism is about values, not visuals. It's about removing excess so you can focus on what adds value to your life. Your minimalist life might look different from someone else's, and that's exactly as it should be.",
        },
        {
          heading: "The Process of Letting Go",
          content: "Minimalism is as much psychological as it is physical. As you sort through possessions, you're also examining attachments, identities, and habits. That box of college textbooks isn't just books—it's who you used to be. Learning to let go of physical items helps us practice letting go in other areas of life too.",
        },
        {
          heading: "Quality Over Quantity",
          content: "Minimalism isn't about deprivation—it's about being selective. Instead of ten mediocre pairs of shoes, keep three you love. Instead of a closet full of clothes you never wear, maintain a smaller collection of pieces that make you feel great. When you reduce quantity, you can increase quality.",
        },
        {
          heading: "Mental and Digital Minimalism",
          content: "Physical clutter is just one dimension. Consider your commitments, your schedule, your digital life. Do you need to be on five social media platforms? Must you say yes to every invitation? Minimalism applies to time and attention too. Protect your mental space as carefully as your physical space.",
        },
        {
          heading: "The Freedom of Less",
          content: "Here's what minimalism creates: less time spent cleaning and organizing, fewer decisions to make, less financial pressure, more mental clarity, greater focus on relationships and experiences. In removing what doesn't matter, we make room for what does. That's the true gift of minimalism.",
        },
      ],
      conclusion: "Minimalism is a journey, not a destination. You don't need to purge everything or live in an empty room. Start with one drawer, one category, one area of life. As you experience the lightness that comes from letting go, you'll naturally want to continue. What you'll discover isn't just less stuff—it's more freedom, clarity, and space for what truly matters.",
    },
    tags: ["minimalism", "intentional living", "simplicity", "personal growth"],
  },
  {
    id: "D001",
    title: "Docker Essentials: Containerizing Your Applications",
    subtitle: "A practical introduction to containers and why they matter",
    category: "DevOps",
    date: "Feb 04, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1920&q=80",
    author: {
      name: "Umair",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      bio: "DevOps practitioner and cloud engineer",
    },
    content: {
      introduction: "Docker changed how we build and ship software by making environments reproducible and lightweight. This article covers core Docker concepts and a simple workflow to containerize an app.",
      sections: [
        {
          heading: "What is a Container?",
          content: "Containers package an application and its dependencies into a single image that runs consistently across environments. Unlike VMs, containers share the host kernel, making them lightweight and fast to start.",
        },
        {
          heading: "Images, Containers, and Registries",
          content: "A Docker image is a read-only template; a container is a runtime instance of that image. Registries like Docker Hub or private registries store images for distribution and deployment.",
        },
        {
          heading: "Basic Docker Workflow",
          content: "Write a `Dockerfile` describing the image, build it with `docker build`, test locally with `docker run`, and push to a registry with `docker push` for deployment.",
        },
        {
          heading: "Best Practices",
          content: "Keep images small, use multi-stage builds for compiled apps, pin dependency versions, and scan images for vulnerabilities. CI pipelines should build and publish images automatically.",
        },
      ],
      conclusion: "Docker is a foundational tool for modern delivery pipelines. Start by containerizing a small service and iterate—containers enable consistent development, testing, and deployment workflows.",
    },
    tags: ["docker", "containers", "devops", "ci/cd"],
  },
  {
    id: "D002",
    title: "Kubernetes Basics: Orchestrating Containers at Scale",
    subtitle: "Core concepts to run containerized workloads reliably",
    category: "DevOps",
    date: "Feb 04, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
    author: {
      name: "Umair",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      bio: "DevOps practitioner and cloud engineer",
    },
    content: {
      introduction: "Kubernetes automates deployment, scaling, and management of containerized applications. This primer explains Pods, Services, Deployments, and the basic control loop.",
      sections: [
        {
          heading: "Pods and Deployments",
          content: "A Pod is the smallest deployable unit (one or more containers). Deployments manage replica sets and provide declarative updates and rollbacks.",
        },
        {
          heading: "Services and Networking",
          content: "Services expose Pods inside or outside the cluster and provide stable network identities. Kubernetes handles service discovery and load balancing in the cluster.",
        },
        {
          heading: "Scaling and Health",
          content: "Kubernetes supports horizontal scaling, liveness/readiness probes, and rolling updates to keep applications healthy during changes.",
        },
        {
          heading: "When to Use Kubernetes",
          content: "Kubernetes shines when managing many services, autoscaling, and complex release strategies. For small projects, simpler platforms or managed services may be preferable.",
        },
      ],
      conclusion: "Kubernetes introduces operational power and complexity. Learn the fundamentals, run a small cluster, and adopt features incrementally to get value without overwhelm.",
    },
    tags: ["kubernetes", "orchestration", "containers", "cloud-native"],
  },
  {
    id: "D003",
    title: "AWS for Engineers: Core Services and Patterns",
    subtitle: "A practical tour of essential AWS services for deployments",
    category: "DevOps",
    date: "Feb 04, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
    author: {
      name: "Umair",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      bio: "DevOps practitioner and cloud engineer",
    },
    content: {
      introduction: "Amazon Web Services (AWS) offers a vast set of building blocks. This article highlights core services and common patterns used when deploying resilient applications.",
      sections: [
        {
          heading: "Compute Options",
          content: "Choose from EC2 for VMs, ECS/EKS for containers, and Lambda for serverless functions. Each has trade-offs in control, cost, and operational overhead.",
        },
        {
          heading: "Storage and Databases",
          content: "S3 is the durable object store for files; RDS and DynamoDB cover relational and NoSQL needs. Pick storage based on access patterns and consistency requirements.",
        },
        {
          heading: "Networking and Security",
          content: "Use VPCs, subnets, security groups, and IAM to design secure and segmented cloud networks. Least-privilege IAM policies and well-structured VPCs are foundational.",
        },
        {
          heading: "Operational Patterns",
          content: "Adopt infrastructure as code (CloudFormation/Terraform), automated CI/CD, observability (CloudWatch/X-Ray), and blue/green or canary deployments for safer releases.",
        },
      ],
      conclusion: "AWS provides flexible primitives that support nearly any architecture. Start with managed services when possible, automate repeatable tasks, and prioritize observability and security.",
    },
    tags: ["aws", "cloud", "infrastructure", "devops"],
  },
  {
    id: "D004",
    title: "Azure Fundamentals: Deploying Apps on Microsoft Cloud",
    subtitle: "Key Azure services and deployment strategies for engineers",
    category: "DevOps",
    date: "Feb 04, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1920&q=80",
    author: {
      name: "Umair",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      bio: "DevOps practitioner and cloud engineer",
    },
    content: {
      introduction: "Microsoft Azure offers a broad cloud platform with strong enterprise integrations. Here are the core services and patterns to know when deploying applications.",
      sections: [
        {
          heading: "Compute and Container Services",
          content: "Azure provides Virtual Machines, App Service for PaaS, and AKS for Kubernetes. App Service accelerates web app delivery with managed scaling and built-in CI/CD integrations.",
        },
        {
          heading: "Storage and Databases",
          content: "Azure Blob Storage, Azure SQL, and Cosmos DB are common choices. Evaluate consistency and global distribution needs when selecting a database service.",
        },
        {
          heading: "Identity and Security",
          content: "Azure Active Directory (AAD) provides identity and access management. Combine AAD, role-based access, and network security controls to protect workloads.",
        },
        {
          heading: "Developer Productivity",
          content: "Azure DevOps and GitHub Actions both integrate tightly with Azure services for pipelines, releases, and infrastructure automation. Use managed services to reduce operational burden.",
        },
      ],
      conclusion: "Azure is a solid choice for organizations invested in Microsoft ecosystems. Use managed PaaS offerings where possible, automate deployments, and leverage AAD for secure identity management.",
    },
    tags: ["azure", "cloud", "devops", "microsoft"],
  },
  {
    id: "D005",
    title: "Google Cloud Platform: Practical Guide for Engineers",
    subtitle: "Core GCP services and patterns for scalable deployments",
    category: "DevOps",
    date: "Feb 04, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1526378728586-5a9a3e0ba7d6?w=1920&q=80",
    author: {
      name: "Umair",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      bio: "DevOps practitioner and cloud engineer",
    },
    content: {
      introduction: "Google Cloud Platform (GCP) emphasizes data services and developer-friendly APIs. This guide highlights practical GCP services and common deployment approaches.",
      sections: [
        {
          heading: "Compute and Containers",
          content: "GCP offers Compute Engine VMs, Cloud Run for serverless containers, and GKE for Kubernetes orchestration. Cloud Run simplifies container deployment with managed autoscaling.",
        },
        {
          heading: "Storage and Data",
          content: "Cloud Storage, BigQuery, and Cloud SQL cover object storage, analytics, and managed relational databases. BigQuery is especially powerful for large-scale analytics workloads.",
        },
        {
          heading: "Networking and IAM",
          content: "Use VPCs, Cloud Load Balancing, and IAM to control access and traffic. GCP's IAM model is flexible—use least privilege and service accounts for automation.",
        },
        {
          heading: "Observability",
          content: "Cloud Monitoring and Cloud Logging provide integrated observability. Instrument services early and use dashboards and alerts to operate reliably at scale.",
        },
      ],
      conclusion: "GCP offers first-class data and developer tools. Choose managed services to move faster, automate infrastructure, and invest early in observability and IAM practices.",
    },
    tags: ["gcp", "google cloud", "devops", "observability"],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getRelatedArticles(currentId: string, limit: number = 3): Article[] {
  const currentArticle = getArticleById(currentId);
  if (!currentArticle) return articles.slice(0, limit);
  
  // Get articles from the same category, excluding current
  const related = articles.filter(
    article => article.id !== currentId && article.category === currentArticle.category
  );
  
  // If not enough from same category, add others
  if (related.length < limit) {
    const others = articles.filter(
      article => article.id !== currentId && article.category !== currentArticle.category
    );
    return [...related, ...others].slice(0, limit);
  }
  
  return related.slice(0, limit);
}
