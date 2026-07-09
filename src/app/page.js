"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Badge,
  Card,
  Carousel,
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

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
  loading: () => null,
});

// Helper function to chunk array for multi-item carousel slides.
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const highlights = [
  "Senior Data Engineer with 7+ years of experience building scalable cloud data platforms",
  "Architected multi-petabyte AWS S3 data lake ingesting terabytes of compressed data daily",
  "Built feature serving infrastructure supporting ~1B queries/day with P99 reads under 25ms",
  "End-to-end RAG/vector search pipelines for semantic search and ranking models",
  "Established observability with Prometheus, Grafana, OpenTelemetry, and Sentry",
];

const skillBranches = [
  {
    branch: "Languages & APIs",
    skills: [
      { name: "Python", iconType: "code" },
      { name: "SQL", iconType: "database" },
      { name: "JavaScript/TypeScript", iconType: "code" },
      { name: "C#/.NET", iconType: "code" },
      { name: "Bash", iconType: "code" },
      { name: "FastAPI", iconType: "code" },
    ],
  },
  {
    branch: "Cloud & Data Platforms",
    skills: [
      { name: "AWS (S3, Lambda, Kinesis, Redshift)", iconType: "cloud" },
      { name: "Azure (Data Factory, Synapse)", iconType: "cloud" },
      { name: "Databricks/Spark", iconType: "pipeline" },
      { name: "ClickHouse", iconType: "database" },
      { name: "PostgreSQL", iconType: "database" },
      { name: "SQL Server", iconType: "database" },
      { name: "Data Lake Architecture (Delta Lake)", iconType: "database" },
      { name: "Embedding & Vector Databases", iconType: "ml" },
    ],
  },
  {
    branch: "Pipelines, MLOps & Reliability",
    skills: [
      { name: "ETL/ELT", iconType: "pipeline" },
      { name: "Batch & Stream Processing", iconType: "pipeline" },
      { name: "Feature Stores", iconType: "ml" },
      { name: "RAG Pipelines", iconType: "ml" },
      { name: "ML Feature Engineering", iconType: "ml" },
      { name: "Model Serving", iconType: "ml" },
      { name: "CI/CD & GitHub Actions", iconType: "pipeline" },
      { name: "Terraform", iconType: "cloud" },
      { name: "OpenTelemetry", iconType: "pipeline" },
      { name: "Prometheus & Grafana", iconType: "pipeline" },
      { name: "Sentry", iconType: "pipeline" },
      { name: "Data Governance & PII Protection", iconType: "cloud" },
      { name: "A/B Testing", iconType: "ml" },
      { name: "Git", iconType: "git" },
      { name: "Jira & Confluence", iconType: "pipeline" },
      { name: "Agile/Scrum", iconType: "pipeline" },
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
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "August 2023 - May 2028",
    image: "/certifications/aws-cloud-practitioner.png",
    imageType: "badge",
    description: "Validates foundational AWS cloud concepts, security, architecture, and billing knowledge.",
    verifyUrl:
      "https://www.credly.com/badges/048b3039-bd82-43af-9f51-19cf092be69d",
  },
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
    issuer: "Databricks Academy",
    date: "March 2026",
    image: "/certifications/databricks-fundamentals.png",
    imageType: "certificate",
    description: "Covers Databricks lakehouse fundamentals for data engineering, analytics, and collaborative workflows.",
    verifyUrl:
      "https://credentials.databricks.com/0c1f0a41-3298-43d4-8c5c-7738aafbd84e#acc.Avmp9xED",
  },
  {
    title: "Building Generative AI-Powered Applications with Python",
    issuer: "IBM via Coursera",
    date: "January 2026",
    image: "/certifications/ibm-gen-ai-python.png",
    imageType: "certificate",
    description: "Highlights Python-based generative AI application development and practical AI integration patterns.",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/BUK44CV8KBHW",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM via Coursera",
    date: "January 2026",
    image: "/certifications/ibm-data-analysis.png",
    imageType: "certificate",
    description: "Validates data analysis skills using Python for cleaning, visualization, and insight generation.",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/8S22GIL0LZ5Y",
  },
  {
    title: "Developing AI Applications with Python and Flask",
    issuer: "IBM via Coursera",
    date: "January 2026",
    image: "/certifications/ibm-ai-flask.png",
    imageType: "certificate",
    description: "Shows experience building AI-powered Python and Flask applications for deployable web solutions.",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/CT9Z68SJIKP3",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM via Coursera",
    date: "January 2026",
    image: "/certifications/ibm-python-data-science.png",
    imageType: "certificate",
    description: "Establishes Python fundamentals for data science, AI workflows, and applied development.",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/TSSMKLXJHVI7",
  },
  {
    title: "HackerRank Software Engineer Certificate",
    issuer: "HackerRank",
    date: "June 17, 2026",
    image: "/certifications/hackerrank-software-engineer.png",
    imageType: "certificate",
    description: "Recognizes role-based software engineering proficiency through HackerRank’s practical assessment.",
    verifyUrl: "https://www.hackerrank.com/certificates/afd13b2baca8",
  },
  {
    title: "TestDome AI Engineer Certificate (Top 10%)",
    issuer: "TestDome",
    date: "June 17, 2026",
    image: "/certifications/testdome-ai-engineer.png",
    imageType: "certificate",
    description: "Certifies AI engineering problem-solving ability with a ranking in the top 10% on TestDome.",
    verifyUrl: "https://www.testdome.com/certificates/aac7c5afc22144849c733a892fe214a8",
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
          <Title level={4}>Senior Data Engineer, Constructor</Title>
        </div>
        <Text className="muted">May 2025 - May 2026</Text>
        <ul className="experience-bullets">
          <li>
            Data lake and ingestion: Architected and maintained a multi-petabyte AWS data lake on S3 ingesting
            terabytes of compressed event data daily. Built high-throughput ingestion services (Python FastAPI,
            AWS Lambda, Kinesis) for product and catalog APIs and user-event streams.
          </li>
          <li>
            ETL and feature engineering: Designed and implemented scalable batch and micro-batch ETL pipelines
            (PySpark and Databricks) to compute production ML features such as product CTR and add-to-cart rates.
            Materialized Parquet and Delta datasets to form an offline feature store with point-in-time correctness.
          </li>
          <li>
            Real-time analytics and serving: Integrated ClickHouse and Cube.dev for sub-minute analytics and query APIs.
            Implemented a low-latency feature-serving layer (memory-mapped index service) achieving P99 reads under 25 ms
            for online models.
          </li>
          <li>
            ML infrastructure and RAG: Built end-to-end RAG and vector-search pipelines by embedding product and query text,
            storing vectors for semantic search, and integrating features with ranking models. Automated training and serving
            via Databricks and cloud endpoints.
          </li>
          <li>
            Monitoring, quality, and DevOps: Established observability with Prometheus, Grafana, OpenTelemetry, and Sentry.
            Added data-quality checks, schema tests, and CI/CD automation with Terraform and GitHub Actions. Participated
            in on-call rotations to maintain 24/7 reliability.
          </li>
          <li>
            Collaboration and impact: Partnered with Data Science, Product, and Customer Success to onboard large retail
            clients and deliver analytics-ready data per SLAs. Supported pipelines and features behind a search engine
            serving about 1B queries/day and enabled A/B tests that improved conversion outcomes.
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
          <Title level={4}>Data Engineer, IT Gurus of Atlanta</Title>
        </div>
        <Text className="muted">February 2022 - May 2025</Text>
        <ul className="experience-bullets">
          <li>
            Designed, developed, and maintained ETL and ELT pipelines to ingest and transform structured and
            semistructured data from databases, APIs, and enterprise applications into analytics-ready datasets.
          </li>
          <li>
            Built data-ingestion frameworks (Python, SQL) and scalable Spark and PySpark workflows for large-volume
            processing. Materialized Parquet and Delta tables to support analytics and ML.
          </li>
          <li>
            Developed complex SQL, stored procedures, and dimensional models to support BI reporting and ad hoc analysis.
          </li>
          <li>
            Implemented data quality checks, validation rules, and reconciliation processes to improve data accuracy,
            integrity, and reliability.
          </li>
          <li>
            Implemented cloud data solutions using AWS (S3, Glue, Lambda, Redshift) and automated recurring tasks
            with orchestration tools.
          </li>
          <li>
            Troubleshot production pipeline issues, performed root-cause analysis, and supported CI/CD practices
            using Git and GitHub Actions.
          </li>
          <li>
            Collaborated with analysts, product owners, and stakeholders to gather requirements and deliver curated
            datasets for dashboards. Followed Agile and Scrum delivery methodologies.
          </li>
        </ul>
      </div>
    ),
  },
];

const pipelineStages = [
  {
    title: "Ingest",
    description: "Capture events, API payloads, and batch files from commerce systems.",
    stack: "Kinesis, Lambda, FastAPI",
  },
  {
    title: "Store",
    description: "Land raw and curated datasets in a governed lakehouse architecture.",
    stack: "S3, Delta Lake, Parquet",
  },
  {
    title: "Transform",
    description: "Build reliable ETL and feature pipelines with quality checks and tests.",
    stack: "Databricks, PySpark, Airflow",
  },
  {
    title: "Serve",
    description: "Publish analytics and low-latency features for applications and models.",
    stack: "ClickHouse, APIs, Online Store",
  },
  {
    title: "Observe",
    description: "Track lineage, SLAs, and reliability with alerts and operational insights.",
    stack: "OpenTelemetry, Grafana, Sentry",
  },
];

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Layout className="portfolio-layout">
      <Header className="portfolio-header">
        <div className="brand">JACOB ADAMS</div>
        <Space size="middle" wrap>
          <Badge color="#0b8f87" text="Senior Data Engineer" />
        </Space>
      </Header>

      <Content className="portfolio-content">
        <section className="hero-section content-section section-hero">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={16}>
              <Title>Data Engineer Building Platforms That Scale, Serve, and Convert</Title>
              <Paragraph className="hero-copy">
                I am a Senior Data Engineer based in Kansas City, Missouri with deep
                experience across cloud lakehouses, distributed ETL, real-time
                analytics, and machine learning feature infrastructure.
              </Paragraph>
              <Space wrap size={[8, 8]}>
                <Tag icon={<DatabaseOutlined />} color="processing">
                  Data Engineering
                </Tag>
                <Tag icon={<ThunderboltOutlined />} color="gold">
                  Streaming and Low Latency
                </Tag>
                <Tag icon={<ExperimentOutlined />} color="success">
                  ML Infrastructure
                </Tag>
                <Tag icon={<CloudServerOutlined />} color="cyan">
                  AWS + Azure
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
          <Title level={2}>Data Engineering Pipeline</Title>
          <Paragraph className="section-copy">
            End-to-end pipeline design used to move high-volume commerce data from ingestion to
            reliable analytics and model-ready feature serving.
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
                    {certifications.length} industry certifications across cloud,
                    data engineering, AI, and application development from AWS,
                    Azure, Databricks, and IBM.
                  </Text>
                </Paragraph>
              </Card>
            </Col>
          </Row>

          <Card title="Certification Gallery" className="cert-gallery-card">
            <Carousel
              className="cert-carousel"
              dots={{ className: "cert-carousel-dots" }}
              draggable
              swipe
              infinite
              lazyLoad="ondemand"
            >
              {chunkArray(certifications, 3).map((group, slideIndex) => (
                <div key={`cert-slide-${slideIndex}`} className="cert-slide">
                  <div className="cert-slide-grid">
                    {group.map((cert) => (
                      <div key={cert.title} className="cert-item">
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
                            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 44vw, 320px"
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
              ))}
            </Carousel>
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
    </>
  );
}
