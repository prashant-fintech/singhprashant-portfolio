import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "About",
  description: "Learn more about Prashant Singh - Full-stack developer, AWS specialist, and data engineer passionate about building scalable applications.",
  url: "/about",
});

const skills = {
  "Programming": ["Python", "SQL", "R", "Scala", "TypeScript", "JavaScript"],
  "Risk & Finance": ["Quantitative Risk Modeling", "Credit Risk", "Market Risk", "Basel III", "IFRS 9"],
  "Data Engineering": ["Apache Spark", "PySpark", "Apache Airflow", "Kafka", "Delta Lake"],
  "Cloud & AWS": ["AWS Lambda", "AWS Glue", "S3", "Redshift", "EMR", "CloudFormation"],
  "Databases": ["PostgreSQL", "Snowflake", "MongoDB", "Redis", "DynamoDB"],
  "FinTech": ["Banking APIs", "Payment Systems", "Regulatory Reporting", "Financial Modeling"]
};

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    year: "2024"
  },
  {
    name: "Financial Risk Manager (FRM)",
    issuer: "Global Association of Risk Professionals", 
    year: "2020"
  },
  {
    name: "Certified Analytics Professional (CAP)",
    issuer: "INFORMS",
    year: "2019"
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <div className="mt-4 flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Risk Data Engineer & Quantitative Technologist</span>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                I&apos;m a Risk Data Engineer and Quantitative Technologist with over 10 years of experience 
                in banking, fintech, and data engineering. I specialize in building cloud-native risk 
                analytics systems and automated financial data pipelines that power critical business decisions.
              </p>
              <p>
                As the founder of FinPulse Labs, Bankopedia, and qfinbox, I combine deep domain expertise 
                in finance with modern data architecture. My work spans quantitative risk modeling, 
                real-time financial data processing, and scalable analytics platforms using Python, 
                Airflow, PySpark, and AWS.
              </p>
              <p>
                My passion lies in transforming complex financial requirements into elegant, intelligent 
                solutions that help organizations make better risk and investment decisions through data.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-lg border border-border/50">
                <h3 className="text-lg font-semibold mb-2">Risk Analytics & Modeling</h3>
                <p className="text-muted-foreground">
                  Building quantitative risk models and analytics systems for banking and fintech. 
                  Expertise in credit risk, market risk, and regulatory compliance frameworks.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border/50">
                <h3 className="text-lg font-semibold mb-2">Financial Data Engineering</h3>
                <p className="text-muted-foreground">
                  Designing automated data pipelines for financial institutions using Python, 
                  Apache Airflow, and PySpark. Real-time processing of market data and risk metrics.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border/50">
                <h3 className="text-lg font-semibold mb-2">Cloud-Native Solutions</h3>
                <p className="text-muted-foreground">
                  Architecting scalable financial technology solutions on AWS. 
                  Serverless computing, containerization, and infrastructure automation for fintech.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border/50">
                <h3 className="text-lg font-semibold mb-2">Quantitative Technology</h3>
                <p className="text-muted-foreground">
                  Developing intelligent systems for investment analytics and portfolio optimization. 
                  Machine learning applications in finance and algorithmic trading strategies.
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-lg font-medium mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-muted rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <Link
                href="mailto:hello@singhprashant.dev"
                className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
              >
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">hello@singhprashant.dev</div>
                </div>
              </Link>
              <Link
                href="https://github.com/singhprashant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
              >
                <Github className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-sm text-muted-foreground">@singhprashant</div>
                </div>
              </Link>
              <Link
                href="https://linkedin.com/in/prashant-singh-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">prashant-singh-dev</div>
                </div>
              </Link>
            </div>
          </section>

          {/* Companies Founded */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Companies Founded</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border/50">
                <h3 className="font-medium">FinPulse Labs</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Advanced analytics and AI solutions for financial institutions
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border/50">
                <h3 className="font-medium">Bankopedia</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Knowledge platform for banking professionals and fintech insights
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border/50">
                <h3 className="font-medium">qfinbox</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Quantitative finance toolkit and risk analytics platform
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 rounded-lg border border-border/50">
                  <h3 className="font-medium">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="p-6 rounded-lg bg-muted/50">
            <h3 className="text-lg font-semibold mb-2">Let&apos;s Work Together</h3>
            <p className="text-sm text-muted-foreground mb-4">
              I&apos;m always interested in new opportunities and interesting projects.
            </p>
            <Link
              href="mailto:hello@singhprashant.dev"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}