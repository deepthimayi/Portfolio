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
    items: ["Java", "Python", "JavaScript", "C/C++", "SQL"],
  },
  {
    cluster: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "AWS Lambda", "Docker", "Kubernetes", "Kafka", "CI/CD", "Jenkins", "Bitbucket"],
  },
  {
    cluster: "Web & APIs",
    items: ["Spring Boot", "REST APIs", "SOAP", "Microservices", "OAuth 2.0", "JWT", "React", "JUnit"],
  },
  {
    cluster: "Databases & Tools",
    items: ["MySQL", "MongoDB", "Git", "Postman", "Datadog", "JMeter", "LoadRunner"],
  },
]

export const currentlyLearning = ["Next.js", "TypeScript", "System Design"]

export const projects = [
  {
    number: "01",
    title: "RAG Chatbot",
    description:
      "AI-powered document Q&A system handling 5K+ documents. Implemented hybrid search combining vector similarity and keyword matching for high-relevance retrieval.",
    tech: ["AWS S3", "OpenSearch", "Bedrock", "Python"],
    github: "https://github.com/deepthimayi",
    demo: "#",
  },
  {
    number: "02",
    title: "Food Delivery App",
    description:
      "Full-stack MERN app with real-time WebSocket order tracking for 1K+ users. Built RESTful APIs for order management, authentication, and live notifications.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "WebSocket", "JWT"],
    github: "https://github.com/deepthimayi",
    demo: "#",
  },
  {
    number: "03",
    title: "Application Performance Testing",
    description:
      "Designed a load testing framework simulating 1,000+ concurrent users. Identified bottlenecks and optimized system throughput by 25% through query tuning and connection pooling.",
    tech: ["JMeter", "LoadRunner"],
    github: "https://github.com/deepthimayi",
    demo: "#",
  },
  {
    number: "04",
    title: "EEG Deception Detection",
    description:
      "Explored deep learning pipelines using CNN-LSTM models on EEG signals. Extracted time-frequency features with FFT and DWT to analyze cross-subject deception patterns.",
    tech: ["Python", "TensorFlow", "CNN-LSTM", "FFT", "DWT"],
    github: "https://github.com/deepthimayi",
    demo: "#",
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
