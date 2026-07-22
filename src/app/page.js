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
  CloudServerOutlined,
  DatabaseOutlined,
  EnvironmentOutlined,
  ExperimentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const highlights = [
  "Built scalable backend services, REST APIs, and data workflows for an AI-powered e-commerce search platform",
  "Designed ETL/ELT pipelines and AWS data solutions to drive analytics, reporting, and feature indexing",
  "Engineered search and vector retrieval pipelines to improve product discovery, relevance, and personalized recommendations",
  "Optimized PostgreSQL and SQL Server data models for performance and large-scale product datasets",
  "Automated deployments with Docker, GitHub Actions, CI/CD, and cloud monitoring for reliable releases",
];

const skillBranches = [
  {
    branch: "Backend & APIs",
    skills: [
      { name: "Java", iconType: "code" },
      { name: "C#", iconType: "code" },
      { name: "Python", iconType: "code" },
      { name: "TypeScript", iconType: "code" },
      { name: "Spring Boot", iconType: "code" },
      { name: "ASP.NET Core", iconType: "code" },
      { name: "FastAPI", iconType: "code" },
      { name: "Flask", iconType: "code" },
    ],
  },
  {
    branch: "Cloud & Data Systems",
    skills: [
      { name: "AWS (S3, Lambda, API Gateway, Redshift, Glue, Kinesis)", iconType: "cloud" },
      { name: "Docker", iconType: "cloud" },
      { name: "Kubernetes", iconType: "cloud" },
      { name: "Terraform", iconType: "cloud" },
      { name: "PostgreSQL", iconType: "database" },
      { name: "SQL Server", iconType: "database" },
      { name: "Redis", iconType: "database" },
      { name: "Elasticsearch / OpenSearch", iconType: "database" },
    ],
  },
  {
    branch: "Search, Data & Delivery",
    skills: [
      { name: "REST APIs", iconType: "pipeline" },
      { name: "OpenAPI / Swagger", iconType: "pipeline" },
      { name: "gRPC", iconType: "pipeline" },
      { name: "Microservices", iconType: "pipeline" },
      { name: "ETL / ELT", iconType: "pipeline" },
      { name: "Spark / PySpark", iconType: "pipeline" },
      { name: "Databricks", iconType: "pipeline" },
      { name: "Search & Vector Retrieval", iconType: "ml" },
    ],
  },
];

const renderSkillIcon = (iconType) => {
  switch (iconType) {
    case "database":
      return <DatabaseOutlined />;
    case "cloud":
      return <CloudServerOutlined />;
    case "ml":
      return <ExperimentOutlined />;
    case "git":
      return <GithubOutlined />;
    case "pipeline":
      return <ThunderboltOutlined />;
    case "code":
    default:
      return <DatabaseOutlined />;
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
          <Title level={4}>Senior Backend Engineer, Constructor</Title>
        </div>
        <Text className="muted">May 2025 - May 2026</Text>
        <ul className="experience-bullets">
          <li>
            Designed and built scalable backend services, REST APIs, and data processing workflows for an AI-powered e-commerce search platform using Java, C#, Python, FastAPI, and SQL.
          </li>
          <li>
            Developed microservices and ingestion services to process product catalogs, inventory, pricing, promotions, and customer interaction data from multiple internal and external systems.
          </li>
          <li>
            Integrated search infrastructure, vector retrieval systems, and ranking pipelines to improve product discovery, relevance, and personalized recommendations.
          </li>
          <li>
            Optimized PostgreSQL and SQL Server data models to improve query performance, data access efficiency, and platform reliability for large-scale product datasets.
          </li>
          <li>
            Built high-throughput pipelines with Python, PySpark, AWS services, and Databricks to support indexing, analytics, and machine learning workflows.
          </li>
          <li>
            Automated deployments and data workflows using Docker, GitHub Actions, CI/CD pipelines, and cloud monitoring tools to improve release reliability.
          </li>
          <li>
            Collaborated with software engineers, ML engineers, data scientists, and product teams to deliver scalable AI-driven features and platform improvements.
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
          <Title level={4}>Backend Engineer, IT Gurus of Atlanta</Title>
        </div>
        <Text className="muted">September 2022 - May 2025</Text>
        <ul className="experience-bullets">
          <li>
            Designed and developed backend services, REST APIs, and scalable data processing applications using Python, FastAPI, SQL, Spark, and PySpark.
          </li>
          <li>
            Built ETL/ELT pipelines to ingest, transform, validate, and process structured and semi-structured data from databases, APIs, and cloud platforms.
          </li>
          <li>
            Developed secure APIs with authentication, request validation, asynchronous processing, and OpenAPI/Swagger documentation.
          </li>
          <li>
            Engineered AWS-based data solutions using S3, Glue, Lambda, Redshift, and API Gateway to support analytics, reporting, and operational workflows.
          </li>
          <li>
            Designed relational data models, optimized SQL queries, and improved database performance for large-scale applications.
          </li>
          <li>
            Automated deployments, data workflows, and quality checks using Docker, GitHub Actions, CI/CD pipelines, and monitoring solutions.
          </li>
          <li>
            Partnered with engineers, analysts, and business teams to deliver scalable backend applications and cloud data platforms.
          </li>
        </ul>
      </div>
    ),
  },
];

const pipelineStages = [
  {
    title: "Ingest",
    description: "Collect product, pricing, inventory, and user interaction data through APIs and event streams.",
    stack: "AWS Lambda, API Gateway, S3",
  },
  {
    title: "Store",
    description: "Persist raw and transformed datasets in cloud storage and relational databases for analytics and search.",
    stack: "S3, PostgreSQL, SQL Server",
  },
  {
    title: "Transform",
    description: "Build ETL/ELT pipelines with PySpark and Databricks to clean, validate, and prepare data for reporting.",
    stack: "Databricks, PySpark, Glue",
  },
  {
    title: "Serve",
    description: "Deliver backend APIs, search indexes, and queryable data models to power product discovery and analytics.",
    stack: "FastAPI, Spring Boot, Search",
  },
  {
    title: "Observe",
    description: "Monitor pipelines, deployments, and data quality through CI/CD and cloud observability tools.",
    stack: "Docker, GitHub Actions, Cloud Monitoring",
  },
];

export default function Home() {
  return (
    <div className="portfolio-shell">
      <Layout className="portfolio-layout">
      <Header className="portfolio-header">
        <div className="brand">JACOB ADAMS</div>
        <Space size="middle" wrap>
          <Badge color="#0b8f87" text="Senior Backend & Data Engineer" />
        </Space>
      </Header>

      <Content className="portfolio-content">
        <section className="hero-section content-section section-hero">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={16}>
              <Title>Senior Backend & Data Engineer Building Scalable APIs and Data Platforms</Title>
              <Paragraph className="hero-copy">
                Senior Backend & Data Engineer based in Kansas City, Missouri with 5+ years of experience
                building scalable APIs, distributed systems, and cloud-based data platforms using Java,
                C#, Python, and AWS.
              </Paragraph>
              <Space wrap size={[8, 8]}>
                <Tag icon={<DatabaseOutlined />} color="processing">
                  Backend & APIs
                </Tag>
                <Tag icon={<ThunderboltOutlined />} color="gold">
                  Cloud Data Platforms
                </Tag>
                <Tag icon={<ExperimentOutlined />} color="success">
                  Search & Vector Retrieval
                </Tag>
                <Tag icon={<CloudServerOutlined />} color="cyan">
                  AWS & Modern Stack
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
          <Title level={2}>Backend & Data Platform Pipeline</Title>
          <Paragraph className="section-copy">
            End-to-end backend and data workflows for ingesting, processing, and delivering
            high-volume commerce data to analytics, search, and operational systems.
          </Paragraph>
          <div className="pipeline-grid">
            {pipelineStages.map((stage, index) => (
              <Card key={stage.title} className="pipeline-card" variant="borderless">
                <Text className="pipeline-step">0{index + 1}</Text>
                <Title level={4}>{stage.title}</Title>
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
                    {certifications.length} industry certifications in cloud, backend,
                    data engineering, and search infrastructure from AWS, Microsoft,
                    Databricks, and HackerRank.
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
          <Text><EnvironmentOutlined /> Kansas City, Missouri</Text>
          <Link href="https://www.linkedin.com/in/jacob-adams-39635a414" target="_blank">
            <LinkedinOutlined /> LinkedIn
          </Link>
          <Link href="https://github.com/devsea73" target="_blank">
            <GithubOutlined /> GitHub
          </Link>
        </Space>
      </Footer>
      </Layout>
    </div>
  );
}
