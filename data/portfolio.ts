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
  { value: "3.94", label: "GPA (M.S.)" },
  { value: "4", label: "Featured Projects" },
  { value: "10+", label: "Technologies" },
]

export const heroStats = [
  { value: "2+", label: "years exp." },
  { value: "M.S.", label: "comp. eng." },
  { value: "4", label: "projects" },
]

export const skills = [
  {
    cluster: "Languages",
    items: [
      { name: "Java",       color: "#f89820" },
      { name: "Python",     color: "#3572A5" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "SQL",        color: "#2dd4d4" },
      { name: "C#",         color: "#9b4da4" },
      { name: "C++",        color: "#00599C" },
    ],
  },
  {
    cluster: "Frontend",
    items: [
      { name: "React",        color: "#61DAFB" },
      { name: "React Native", color: "#61DAFB" },
      { name: "Vue.js",       color: "#4FC08D" },
      { name: "Angular",      color: "#DD0031" },
      { name: "Figma",        color: "#F24E1E" },
    ],
  },
  {
    cluster: "Backend",
    items: [
      { name: "Node.js",    color: "#339933" },
      { name: "Next.js",    color: "#e2e8f0" },
      { name: "Express.js", color: "#e2e8f0" },
      { name: "Flask",      color: "#e2e8f0" },
      { name: "Auth.js",    color: "#2dd4d4" },
    ],
  },
  {
    cluster: "Databases",
    items: [
      { name: "MySQL",     color: "#4479A1" },
      { name: "MongoDB",   color: "#47A248" },
      { name: "Snowflake", color: "#29B5E8" },
    ],
  },
  {
    cluster: "Cloud & Infrastructure",
    items: [
      { name: "AWS",        color: "#FF9900" },
      { name: "Azure",      color: "#0078D4" },
      { name: "GCP",        color: "#4285F4" },
      { name: "Docker",     color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "GitHub",     color: "#e2e8f0" },
      { name: "Kafka",      color: "#a855f7" },
    ],
  },
  {
    cluster: "CI/CD & DevOps",
    items: [
      { name: "Jenkins",    color: "#D24939" },
      { name: "Bitbucket",  color: "#0052CC" },
      { name: "TeamCity",   color: "#2dd4d4" },
      { name: "Confluence", color: "#0052CC" },
      { name: "Trello",     color: "#0052CC" },
    ],
  },
  {
    cluster: "Developer Tools",
    items: [
      { name: "VS Code",       color: "#007ACC" },
      { name: "IntelliJ IDEA", color: "#FF0000" },
      { name: "Jira",          color: "#0052CC" },
      { name: "Git",           color: "#F05032" },
      { name: "Claude Code",   color: "#2dd4d4" },
      { name: "ChatGPT",       color: "#10a37f" },
    ],
  },
  {
    cluster: "Testing & QA",
    items: [
      { name: "Postman",       color: "#FF6C37" },
      { name: "Apache JMeter", color: "#D22128" },
      { name: "LoadRunner",    color: "#7aacac" },
      { name: "Fiddler",       color: "#00b800" },
      { name: "Datadog",       color: "#632CA6" },
    ],
  },
]

export const projects = [
  {
    number: "01",
    slug: "rag-chatbot",
    title: "RAG Chatbot",
    tagline: "AI-powered document intelligence at scale",
    description:
      "AI-powered document Q&A system handling 5K+ documents. Implemented hybrid search combining vector similarity and keyword matching for high-relevance retrieval.",
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
    github: "https://github.com/deepthimayi",
    demo: "#",
    gradientA: "#050a0a",
    gradientB: "#0a3a3a",
    accent: "#2dd4d4",
  },
  {
    number: "02",
    slug: "food-delivery-app",
    title: "Food Delivery App",
    tagline: "Real-time order tracking for 1K+ users",
    description:
      "Full-stack MERN app with real-time WebSocket order tracking for 1K+ users. Built RESTful APIs for order management, authentication, and live notifications.",
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
    github: "https://github.com/deepthimayi",
    demo: "#",
    gradientA: "#0a0500",
    gradientB: "#3a1500",
    accent: "#f97316",
  },
  {
    number: "03",
    slug: "performance-testing",
    title: "Performance Testing",
    tagline: "25% throughput gain through systematic load analysis",
    description:
      "Designed a load testing framework simulating 1,000+ concurrent users. Identified bottlenecks and optimized system throughput by 25% through query tuning and connection pooling.",
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
    github: "https://github.com/deepthimayi",
    demo: "#",
    gradientA: "#05000a",
    gradientB: "#1e0a3a",
    accent: "#a855f7",
  },
  {
    number: "04",
    slug: "eeg-deception-detection",
    title: "EEG Deception Detection",
    tagline: "Deep learning on neural signals",
    description:
      "Explored deep learning pipelines using CNN-LSTM models on EEG signals. Extracted time-frequency features with FFT and DWT to analyze cross-subject deception patterns.",
    overview:
      "Investigated whether EEG signals contain reliable cross-subject markers of deception using deep learning. The pipeline processes raw multi-channel EEG with FFT and Discrete Wavelet Transform to extract time-frequency features, then feeds them into a hybrid CNN-LSTM model that captures both spatial (electrode) and temporal (sequence) patterns simultaneously. Leave-one-subject-out cross-validation was used to evaluate cross-subject generalization.",
    tech: ["Python", "TensorFlow", "CNN-LSTM", "FFT", "DWT", "NumPy"],
    highlights: [
      "Multi-channel EEG preprocessing with artifact rejection pipeline",
      "FFT + DWT feature extraction preserves time-frequency structure",
      "CNN-LSTM hybrid captures spatial and temporal EEG patterns",
      "Leave-one-subject-out CV evaluates cross-subject generalization",
    ],
    role: "ML Researcher",
    year: "2024",
    duration: "5 months",
    github: "https://github.com/deepthimayi",
    demo: "#",
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
