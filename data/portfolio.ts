export const personal = {
  name: "Deepthimayi Pesala",
  nameFirst: "Deepthimayi",
  nameLast: "Pesala.",
  title: "Software Engineer",
  tagline: "Building systems that scale. Writing code that endures.",
  bio: "I'm a software engineer who loves turning complex problems into clean, reliable systems. With 2+ years of industry experience at Capgemini and a Master's in Computer Engineering from Cal State Fullerton, I've worked across the full stack — from cloud infrastructure and microservices to APIs and front-end. I care deeply about craft: readable code, thoughtful architecture, and software that actually holds up in production.",
  location: "Santa Clara, CA",
  phone: "(203) 361-1293",
}

export const links = {
  github: "https://github.com/deepthimayi",
  linkedin: "https://www.linkedin.com/in/deepthimayi-pesala/",
  email: "deepthimayip@gmail.com",
  resume: "/Deepthimayi_Resume.pdf",
}

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "3.8", label: "GPA (M.S.)" },
  { value: "5", label: "Projects" },
  { value: "40+", label: "Technologies" },
]

export const heroStats = [
  { value: "2+", label: "years exp." },
  { value: "M.S.", label: "comp. eng." },
]

// tier: "primary" = core competency, "familiar" = worked with / supporting skill
export const skills = [
  {
    cluster: "Languages",
    items: [
      { name: "Java",       color: "#f89820", tier: "primary" },
      { name: "Python",     color: "#3572A5", tier: "primary" },
      { name: "JavaScript", color: "#F7DF1E", tier: "primary" },
      { name: "TypeScript", color: "#3178C6", tier: "primary" },
      { name: "SQL",        color: "#2dd4d4", tier: "primary" },
      { name: "C#",         color: "#9b4da4", tier: "familiar" },
      { name: "C++",        color: "#00599C", tier: "familiar" },
    ],
  },
  {
    cluster: "Frontend",
    items: [
      { name: "React",        color: "#61DAFB", tier: "primary" },
      { name: "React Native", color: "#61DAFB", tier: "familiar" },
      { name: "Vue.js",       color: "#4FC08D", tier: "familiar" },
      { name: "Angular",      color: "#DD0031", tier: "familiar" },
      { name: "Figma",        color: "#F24E1E", tier: "familiar" },
    ],
  },
  {
    cluster: "Backend",
    items: [
      { name: "Node.js",    color: "#339933", tier: "primary" },
      { name: "Next.js",    color: "#e2e8f0", tier: "primary" },
      { name: "Express.js", color: "#e2e8f0", tier: "primary" },
      { name: "Flask",      color: "#e2e8f0", tier: "familiar" },
      { name: "Auth.js",    color: "#2dd4d4", tier: "familiar" },
    ],
  },
  {
    cluster: "Databases",
    items: [
      { name: "MySQL",     color: "#4479A1", tier: "primary" },
      { name: "MongoDB",   color: "#47A248", tier: "primary" },
      { name: "Snowflake", color: "#29B5E8", tier: "familiar" },
    ],
  },
  {
    cluster: "Cloud & Infra",
    items: [
      { name: "AWS",        color: "#FF9900", tier: "primary" },
      { name: "Docker",     color: "#2496ED", tier: "primary" },
      { name: "GitHub",     color: "#e2e8f0", tier: "primary" },
      { name: "Azure",      color: "#0078D4", tier: "familiar" },
      { name: "GCP",        color: "#4285F4", tier: "familiar" },
      { name: "Kubernetes", color: "#326CE5", tier: "familiar" },
      { name: "Kafka",      color: "#a855f7", tier: "familiar" },
    ],
  },
  {
    cluster: "CI/CD & DevOps",
    items: [
      { name: "Jenkins",    color: "#D24939", tier: "primary" },
      { name: "Bitbucket",  color: "#0052CC", tier: "primary" },
      { name: "TeamCity",   color: "#2dd4d4", tier: "familiar" },
      { name: "Confluence", color: "#0052CC", tier: "familiar" },
      { name: "Trello",     color: "#0052CC", tier: "familiar" },
    ],
  },
  {
    cluster: "Developer Tools",
    items: [
      { name: "VS Code",       color: "#007ACC", tier: "primary" },
      { name: "IntelliJ IDEA", color: "#FF0000", tier: "primary" },
      { name: "Jira",          color: "#0052CC", tier: "primary" },
      { name: "Git",           color: "#F05032", tier: "primary" },
    ],
  },
  {
    cluster: "Testing & QA",
    items: [
      { name: "Postman",       color: "#FF6C37", tier: "primary" },
      { name: "Apache JMeter", color: "#D22128", tier: "primary" },
      { name: "LoadRunner",    color: "#7aacac", tier: "familiar" },
      { name: "Fiddler",       color: "#00b800", tier: "familiar" },
      { name: "Datadog",       color: "#632CA6", tier: "familiar" },
    ],
  },
]

export const projects = [
  {
    number: "01",
    slug: "morning-briefing-bot",
    title: "Morning Briefing Bot",
    tagline: "Personalized AI briefing, every morning at 6:30 AM",
    description:
      "Python agent that aggregates weather, calendar events, commute traffic, top news, and unread Gmail — then sends everything through Claude to generate a smart, context-aware morning briefing delivered as a desktop notification. Modular architecture with per-source error resilience and a plain-text fallback if the Claude API is unavailable.",
    architectureNote: "Weather + Calendar + Traffic + News + Gmail → Claude API → Desktop notification",
    overview:
      "Built an autonomous morning briefing agent that wakes at 6:30 AM via Windows Task Scheduler, pulls live data from five sources — OpenWeatherMap, Google Calendar, Google Maps (commute traffic), NewsAPI, and Gmail — then synthesizes everything into a single smart summary via Claude. Each data module fails independently so partial briefings still deliver. Includes OAuth2 flows for Google services and a web dashboard for reviewing past briefings.",
    tech: ["Python", "Claude API", "Google Calendar API", "Gmail API", "OpenWeatherMap", "NewsAPI"],
    highlights: [
      "Aggregates 5 live data sources into a single Claude-generated briefing",
      "OAuth2 authentication for Google Calendar and Gmail",
      "Per-source error resilience — partial briefings work if any source fails",
      "Plain-text fallback if Claude API is unavailable",
    ],
    featured: true,
    role: "Solo Developer",
    year: "2025",
    duration: "1 month",
    codeUrl: "https://github.com/deepthimayi/Morning-Briefing-Bot",
    github: "https://github.com/deepthimayi/Morning-Briefing-Bot",
    gradientA: "#0a0805",
    gradientB: "#2a1a05",
    accent: "#f59e0b",
  },
  {
    number: "02",
    slug: "rag-chatbot",
    title: "RAG Chatbot",
    tagline: "AI-powered document intelligence at scale",
    description:
      "AI-powered document Q&A system across 5K+ documents, with avg retrieval latency under 300ms. Hybrid search combining dense vector embeddings and BM25 keyword matching delivers higher relevance than either method alone.",
    architectureNote: "S3 → Lambda → OpenSearch (vector + BM25) → Bedrock LLM",
    overview:
      "Built an end-to-end Retrieval-Augmented Generation system that enables intelligent querying across large document collections. The system uses a hybrid search strategy combining dense vector embeddings via AWS Bedrock with BM25 keyword search in OpenSearch, achieving significantly better retrieval precision than either method alone. Documents are ingested asynchronously into S3, chunked and embedded in a Lambda pipeline, then indexed in OpenSearch for sub-second retrieval.",
    tech: ["AWS S3", "OpenSearch", "Bedrock", "Python", "Lambda"],
    highlights: [
      "Handles 5,000+ documents across multiple knowledge domains",
      "Hybrid vector + keyword search for high-relevance results",
      "Sub-2s end-to-end response time via async ingestion pipeline",
      "Serverless architecture scales to zero when idle",
    ],
    role: "Solo Developer",
    year: "2024",
    duration: "3 months",
    github: "",
    gradientA: "#050a0a",
    gradientB: "#0a3a3a",
    accent: "#2dd4d4",
  },
  {
    number: "03",
    slug: "food-delivery-app",
    title: "Food Delivery App",
    tagline: "Real-time order tracking for 1K+ users",
    description:
      "Full-stack MERN platform built for concurrency: WebSocket-driven live order tracking for 1K+ users, JWT refresh token rotation with HttpOnly cookies, a strict order state machine preventing invalid transitions, and API rate limiting to protect endpoints under load.",
    technicalNote: "Concurrent order state transitions handled via optimistic locking",
    overview:
      "Designed and built a full-stack food delivery platform using the MERN stack. Real-time order status updates are pushed to clients via WebSocket connections, eliminating the need for polling and dramatically reducing latency. The authentication layer uses JWT with refresh token rotation for seamless session management. The REST API follows role-based access control, supporting distinct flows for customers, restaurants, and admins.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "WebSocket", "JWT"],
    highlights: [
      "WebSocket-based live order tracking for 1,000+ concurrent users",
      "JWT + refresh token auth with secure HttpOnly cookie storage",
      "REST API with role-based access — customer, restaurant, admin",
      "Optimistic UI updates for sub-100ms perceived response",
    ],
    role: "Full Stack Developer",
    year: "2023",
    duration: "4 months",
    github: "",
    gradientA: "#0a0500",
    gradientB: "#3a1500",
    accent: "#f97316",
  },
  {
    number: "04",
    slug: "performance-testing",
    title: "Performance Testing",
    tagline: "25% throughput gain through systematic load analysis",
    description:
      "Load-tested a Java insurance microservices platform under 1K+ simulated concurrent users. Traced 3× latency spikes to N+1 query patterns and undersized connection pools. Applied query optimization and pool tuning — delivering a 25% throughput increase and 40% reduction in database wait time in production.",
    calloutBadge: "25% throughput ↑  ·  P99 latency ↓ 40%",
    overview:
      "Architected a comprehensive performance testing framework to identify and eliminate system bottlenecks before production. By simulating 1,000+ concurrent users across realistic transaction mixes, pinpointed N+1 query patterns and under-sized connection pools as the primary culprits behind latency spikes. Applied query optimization and connection pool tuning that boosted overall throughput by 25% in production.",
    tech: ["JMeter", "LoadRunner", "SQL", "Python", "Grafana"],
    highlights: [
      "Simulated 1,000+ concurrent users with realistic think times and ramp-up",
      "Identified N+1 query patterns causing 3× latency spikes under load",
      "Connection pool tuning cut database wait time by 40%",
      "25% overall throughput improvement reflected in production metrics",
    ],
    role: "Performance Engineer",
    year: "2022",
    duration: "2 months",
    github: "",
    gradientA: "#05000a",
    gradientB: "#1e0a3a",
    accent: "#a855f7",
  },
  {
    number: "05",
    slug: "eeg-deception-detection",
    title: "EEG Deception Detection",
    tagline: "Deep learning on neural signals",
    contextNote: "Research project — Cal State Fullerton, 2024",
    description:
      "Investigated cross-subject EEG deception markers using deep learning. Preprocessed multi-channel EEG with FFT and DWT, then trained a CNN-LSTM hybrid model — achieving ~55% classification accuracy under leave-one-subject-out cross-validation, above chance on a notoriously hard cross-subject generalization task.",
    overview:
      "Investigated whether EEG signals contain reliable cross-subject markers of deception using deep learning. The pipeline processes raw multi-channel EEG with FFT and Discrete Wavelet Transform to extract time-frequency features, then feeds them into a hybrid CNN-LSTM model that captures both spatial (electrode) and temporal (sequence) patterns simultaneously. Leave-one-subject-out cross-validation was used to evaluate cross-subject generalization.",
    tech: ["Python", "TensorFlow", "CNN-LSTM", "FFT", "DWT", "NumPy"],
    highlights: [
      "Multi-channel EEG preprocessing with artifact rejection pipeline",
      "FFT + DWT feature extraction preserves time-frequency structure",
      "CNN-LSTM hybrid captures spatial and temporal EEG patterns",
      "~55% accuracy on cross-subject classification — above chance on hard generalization task",
    ],
    role: "ML Researcher",
    year: "2024",
    duration: "5 months",
    notebookUrl: "https://github.com/deepthimayi/EEG-Lie-Detection",
    github: "https://github.com/deepthimayi/EEG-Lie-Detection",
    gradientA: "#000a05",
    gradientB: "#002a14",
    accent: "#10b981",
  },
]

export const experience = [
  {
    role: "Software Engineer",
    company: "Capgemini",
    location: "Hyderabad, India",
    period: "Aug '21 – Dec '23",
    highlights: [
      "Developed Java-based microservices processing 50K+ insurance transactions daily",
      "Integrated AWS S3, Lambda, CloudWatch & DynamoDB for secure, async processing",
      "Built API integration layer handling 100K+ requests/day, reducing auth latency by 60%",
      "Maintained 99.9% uptime across weekly production deployments",
      "Improved test coverage to 75% with JUnit; managed CI/CD via Jenkins & Docker",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Capgemini",
    location: "Hyderabad, India",
    period: "Apr '21 – Jul '21",
    highlights: [
      "Implemented RESTful APIs with Spring Boot & Hibernate, integrated with React UI",
      "Improved application reliability by 15% through better API integration patterns",
      "Designed scalable backend services for multi-tier applications",
    ],
  },
]

export const education = [
  {
    degree: "Master of Science, Computer Engineering",
    school: "California State University, Fullerton",
    period: "Jan '24 – Dec '25",
  },
  {
    degree: "Bachelor of Technology, Electronics & Communication Engineering",
    school: "BVRIT Hyderabad",
    period: "Aug '17 – Aug '21",
  },
]
