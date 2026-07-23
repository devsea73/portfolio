"use client";

import Image from "next/image";
import {
  Badge,
  Card,
  Col,
  Divider,
  Layout,
  Row,
  Space,
  Tag,
  Timeline,
  Typography,
} from "antd";
import {
  ApiOutlined,
  CloudOutlined,
  CloudServerOutlined,
  CodeOutlined,
  DatabaseOutlined,
  EnvironmentOutlined,
  ExperimentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SecurityScanOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const highlights = [
  "Senior Full-Stack AI Engineer with 5+ years building cloud-native and AI platforms.",
  "Expert in LLMs, RAG, vector search, and production retrieval pipelines.",
  "Strong backend + frontend experience: React, Next.js, FastAPI, Python, Java, and AWS.",
];

const skillBranches = [
  {
    branch: "Programming Languages",
    skills: [
      { name: "Python", iconType: "code" },
      { name: "Java", iconType: "code" },
      { name: "TypeScript", iconType: "code" },
      { name: "JavaScript", iconType: "code" },
      { name: "SQL", iconType: "database" },
    ],
  },
  {
    branch: "Frontend Development",
    skills: [
      { name: "React", iconType: "thunderbolt" },
      { name: "Next.js", iconType: "api" },
      { name: "TypeScript", iconType: "code" },
      { name: "Tailwind CSS", iconType: "cloud" },
      { name: "Redux / Zustand", iconType: "cloud" },
    ],
  },
  {
    branch: "Backend Development",
    skills: [
      { name: "FastAPI", iconType: "api" },
      { name: "Spring Boot", iconType: "cloudServer" },
      { name: "Node.js / Express", iconType: "code" },
      { name: "REST / GraphQL", iconType: "api" },
      { name: "JWT / OAuth", iconType: "security" },
    ],
  },
  {
    branch: "AI & Search",
    skills: [
      { name: "Generative AI", iconType: "experiment" },
      { name: "LLMs", iconType: "experiment" },
      { name: "RAG", iconType: "database" },
      { name: "AI Agents", iconType: "thunderbolt" },
      { name: "Vector Search", iconType: "database" },
    ],
  },
  {
    branch: "Cloud & DevOps",
    skills: [
      { name: "PostgreSQL", iconType: "database" },
      { name: "Redis", iconType: "database" },
      { name: "Vector Databases", iconType: "database" },
      { name: "Docker / Kubernetes", iconType: "cloudServer" },
      { name: "AWS / Terraform", iconType: "cloud" },
    ],
  },
];

const renderSkillIcon = (iconType) => {
  switch (iconType) {
    case "database":
      return <DatabaseOutlined />;
    case "cloud":
      return <CloudOutlined />;
    case "cloudServer":
      return <CloudServerOutlined />;
    case "experiment":
      return <ExperimentOutlined />;
    case "api":
      return <ApiOutlined />;
    case "security":
      return <SecurityScanOutlined />;
    case "thunderbolt":
      return <ThunderboltOutlined />;
    case "code":
      return <CodeOutlined />;
    default:
      return <CodeOutlined />;
  }
};

const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "May 2025 - May 2028",
    image: "/certifications/aws-developer-associate.png",
    imageType: "badge",
    description: "Confirms ability to build, deploy, and troubleshoot cloud-native applications on AWS.",
    verifyUrl:
      "https://www.credly.com/badges/c49d161e-2bcc-4b0c-9260-50319c230d9c",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "October 2025 - October 2026",
    image: "/certifications/azure-administrator.png",
    imageType: "certificate",
    description: "Demonstrates practical Azure administration skills across identity, compute, networking, and governance.",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/jacobadams-0925/credentials/c49a3be012fc30ef",
  },
  {
    title: "Databricks Accredited Databricks Fundamentals",
    issuer: "Databricks",
    date: "March 2026",
    image: "/certifications/databricks-fundamentals.png",
    imageType: "certificate",
    description: "Covers Databricks lakehouse fundamentals for data engineering, analytics, and collaborative workflows.",
    verifyUrl:
      "https://credentials.databricks.com/0c1f0a41-3298-43d4-8c5c-7738aafbd84e#acc.Avmp9xED",
  },
  {
    title: "Software Engineer Certificate",
    issuer: "HackerRank",
    date: "June 2026",
    image: "/certifications/hackerrank-software-engineer.png",
    imageType: "certificate",
    description: "Recognizes role-based software engineering proficiency through HackerRank's practical assessment.",
    verifyUrl: "https://www.hackerrank.com/certificates/afd13b2baca8",
  },
];

const timelineItems = [
  {
    color: "#0b8f87",
    content: (
      <div>
        <div className="experience-header">
          <div className="experience-company-logo">
            <Image
              src="/company-logos/constructor-logo.png"
              alt="Constructor logo"
              width={44}
              height={44}
              loading="lazy"
            />
          </div>
          <Title level={4}>Full Stack AI Engineer, Constructor</Title>
        </div>
        <Text className="muted">May 2025 - Present</Text>
        <ul className="experience-bullets">
          <li>
            Designed and developed AI-powered e-commerce search and recommendation platforms leveraging machine learning, NLP, transformer models, and large language models to deliver personalized product discovery experiences.
          </li>
          <li>
            Built full-stack AI applications integrating frontend interfaces, backend services, retrieval systems, ranking pipelines, and cloud infrastructure for enterprise-scale commerce platforms.
          </li>
          <li>
            Developed hybrid search solutions combining keyword retrieval, semantic search, vector embeddings, and machine learning ranking models to improve query understanding and product relevance.
          </li>
          <li>
            Built AI retrieval pipelines using embeddings, vector databases, and LLM-based workflows to enhance search intelligence, recommendations, and personalized shopping experiences.
          </li>
          <li>
            Engineered scalable backend services and microservices using Python, FastAPI, Java, and REST APIs to support search orchestration, ranking, and high-volume production workloads.
          </li>
          <li>
            Implemented multi-stage ranking architectures combining learning-to-rank algorithms, behavioral signals, transformer-based models, and LLM-based approaches to optimize search results.
          </li>
          <li>
            Developed data processing workflows for product catalogs, user interactions, clickstream events, and behavioral data to support machine learning models and recommendation systems.
          </li>
          <li>
            Built and optimized APIs, caching layers, and indexing strategies to improve system scalability, reliability, and low-latency response times.
          </li>
          <li>
            Deployed and maintained cloud-native AI services using AWS, Docker, Kubernetes, and CI/CD automation to support production AI workloads.
          </li>
          <li>
            Collaborated with ML engineers, software engineers, and product teams to deliver production-ready AI features, scalable backend systems, and intelligent search capabilities.
          </li>
        </ul>
      </div>
    ),
  },
  {
    color: "#f97316",
    content: (
      <div>
        <div className="experience-header">
          <div className="experience-company-logo">
            <Image
              src="/company-logos/it-gurus-logo.png"
              alt="IT Gurus of Atlanta logo"
              width={44}
              height={44}
              loading="lazy"
            />
          </div>
          <Title level={4}>Full Stack Engineer, IT Gurus Of Atlanta</Title>
        </div>
        <Text className="muted">September 2022 - May 2025</Text>
        <ul className="experience-bullets">
          <li>
            Designed and developed scalable full-stack applications using Java, Spring Boot, Python, FastAPI, React, Next.js, TypeScript, JavaScript, SQL, and REST APIs, integrating AI-powered capabilities and intelligent automation workflows into enterprise applications.
          </li>
          <li>
            Built responsive frontend applications using React, Next.js, TypeScript, and Tailwind CSS, creating modern user interfaces for AI-driven features, data visualization, and business workflows integrated with backend services.
          </li>
          <li>
            Developed secure backend services and microservice architectures using Java Spring Boot and Python FastAPI, implementing authentication, API integrations, asynchronous processing, and backend services supporting AI applications and data-driven platforms.
          </li>
          <li>
            Implemented Generative AI and automation workflows using LLM APIs, retrieval pipelines, embeddings, vector search, and intelligent processing techniques to enhance application capabilities and improve user experiences.
          </li>
          <li>
            Built ETL/ELT data pipelines to ingest, transform, and validate structured and semi-structured data from databases, APIs, and cloud platforms, preparing high-quality datasets for analytics and AI-powered applications.
          </li>
          <li>
            Engineered cloud-native solutions on AWS using S3, Glue, Lambda, Redshift, and API Gateway, deploying scalable application services and AI-enabled workloads with optimized data processing using Parquet and Delta Lake.
          </li>
          <li>
            Designed database schemas, optimized SQL queries, and implemented data models supporting transactional applications, analytics platforms, and AI-driven decision-making workflows.
          </li>
          <li>
            Automated application deployments and infrastructure workflows using Docker, GitHub Actions, CI/CD, and Terraform, enabling reliable delivery of scalable full-stack and AI-powered applications.
          </li>
          <li>
            Collaborated with software engineers, ML engineers, product managers, and data teams in Agile environments to deliver production-ready AI features, cloud-native platforms, and intelligent software solutions.
          </li>
        </ul>
      </div>
    ),
  },
];

const pipelineStages = [
  {
    title: "Campaign Callback Scheduler",
    description: "Serverless AWS platform for campaign callback scheduling and booking management.",
    stack: "Lambda, API Gateway, DynamoDB, Cognito",
  },
  {
    title: "Travel Refund Decision Engine",
    description: "AI agent platform for automated refund decisioning and workflow orchestration.",
    stack: "Anthropic Claude, RAG, Vector DB, FastAPI",
  },
  {
    title: "AI Platform Engineering",
    description: "Enterprise AI platform delivery with secure APIs, RAG pipelines, and cloud-native deployments.",
    stack: "React, FastAPI, Docker, Terraform",
  },
];

export default function Home() {
  return (
    <div className="portfolio-shell">
      <Layout className="portfolio-layout">
      <Header className="portfolio-header">
        <div className="brand">JACOB ADAMS</div>
        <Space size="middle" wrap>
          <Badge color="#0b8f87" text="Senior Full-Stack AI Engineer" />
        </Space>
      </Header>

      <Content className="portfolio-content">
        <section className="hero-section content-section section-hero">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={16}>
              <Title>Senior Full-Stack AI Engineer</Title>
              <Paragraph className="hero-copy">
                 Senior Full-Stack AI Engineer with 5+ years building scalable web and AI platforms. Focused on LLMs, RAG, cloud-native architecture, and end-to-end product delivery.
              </Paragraph>
              <Space wrap size={[8, 8]}>
                <Tag icon={<ExperimentOutlined />} color="success">
                  Generative AI
                </Tag>
                <Tag icon={<ThunderboltOutlined />} color="gold">
                  LLMs & RAG
                </Tag>
                <Tag icon={<CodeOutlined />} color="processing">
                  Full-Stack Systems
                </Tag>
                <Tag icon={<CloudServerOutlined />} color="cyan">
                  Cloud & DevOps
                </Tag>
              </Space>
            </Col>
            <Col xs={24} md={8}>
              <Card className="stat-card" variant="borderless">
                {highlights.map((item) => (
                  <Paragraph key={item} className="stat-line">
                    {item}
                  </Paragraph>
                ))}
              </Card>
            </Col>
          </Row>
        </section>

        <Divider />

        <section className="content-section">
          <Title level={2}>Portfolio Highlights</Title>
          <Paragraph className="section-copy">
            AI and cloud-native solutions delivered with enterprise-grade reliability, automation, and intelligent workflows.
          </Paragraph>
          <div className="pipeline-grid">
            {pipelineStages.map((stage, index) => (
              <Card key={stage.title} className="pipeline-card" variant="borderless">
                <div className="pipeline-card-header">
                  <Text className="pipeline-step">0{index + 1}</Text>
                  <Title level={4}>{stage.title}</Title>
                </div>
                <Paragraph>{stage.description}</Paragraph>
                <Tag color="blue" className="pipeline-tag">
                  {stage.stack}
                </Tag>
              </Card>
            ))}
          </div>
        </section>

        <Divider />

        <section className="content-section">
          <Title level={2}>Experience</Title>
          <Timeline items={timelineItems} />
        </section>

        <Divider />

        <section className="content-section">
          <Title level={2}>Core Skills</Title>
          <Card>
            <div className="skill-branches">
              {skillBranches.map((group) => (
                <div key={group.branch} className="skill-branch">
                  <Text strong className="skill-branch-title">
                    {group.branch}
                  </Text>
                  <div className="skills-grid">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="skill-chip">
                        <span className="skill-icon-circle">{renderSkillIcon(skill.iconType)}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <Divider />

        <section className="content-section">
          <Title level={2}>Education and Certifications</Title>
          <Row gutter={[24, 24]} style={{ marginBottom: "24px" }}>
            <Col xs={24} lg={10}>
              <Card title="Education" className="detail-card education-card">
                <div className="education-content">
                  <div className="education-logo">
                    <Image
                      src="/education/penn-state-logo.png"
                      alt="Penn State University Logo"
                      width={80}
                      height={80}
                      loading="lazy"
                    />
                  </div>
                  <div className="education-info">
                    <Paragraph>
                      <Text strong>Penn State University</Text>
                      <br />
                      B.S. in Data Sciences
                      <br />
                      <Text className="muted">August 2018 - August 2022</Text>
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} lg={14}>
              <Card title="Credential Summary" className="detail-card">
                <Paragraph>
                  <Text>
                    {certifications.length} industry certifications across cloud,
                    data engineering, AI, and application development from AWS,
                    Azure, Databricks, and IBM.
                  </Text>
                </Paragraph>
              </Card>
            </Col>
          </Row>

          <Card title="Certification Gallery" className="cert-gallery-card">
            <div className="cert-marquee" aria-label="Certifications scrolling gallery">
              <div className="cert-track">
                {[...certifications, ...certifications].map((cert, index) => (
                  <div key={`${cert.title}-${index}`} className="cert-item">
                    <div
                      className={`cert-image-wrapper ${
                        cert.imageType === "badge"
                          ? "cert-image-badge"
                          : "cert-image-certificate"
                      }`}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 86vw, (max-width: 1200px) 42vw, 320px"
                        className="cert-image"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <div className="cert-details">
                      <Text strong className="cert-title">
                        {cert.title}
                      </Text>
                      <Text className="cert-issuer">{cert.issuer}</Text>
                      <Text className="cert-date">{cert.date}</Text>
                      <Text className="cert-description">{cert.description}</Text>
                      <Link
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-verify-link"
                      >
                        Verify credential
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>
      </Content>

      <Footer className="portfolio-footer">
        <Space separator={<span>|</span>} wrap>
          <Text><EnvironmentOutlined /> Kansas City, MO 64129</Text>
          <Link href="mailto:seidylgr95@gmail.com">
            <Text>seidylgr95@gmail.com</Text>
          </Link>
          <Text>+1 (857) 342-3365</Text>
          <Link href="https://www.linkedin.com/in/jacobsadams21/" target="_blank">
            <LinkedinOutlined /> LinkedIn
          </Link>
        </Space>
      </Footer>
      </Layout>
    </div>
  );
}
