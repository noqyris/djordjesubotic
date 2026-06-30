// Certifications & learning. Anthropic Academy (Skilljar) courses are completed;
// Microsoft Azure certifications are in progress.

// Completed Claude courses on Anthropic Academy (anthropic.skilljar.com).
// Audience-specific AI Fluency variants (educators / students / nonprofits /
// small businesses / teaching) are intentionally left out as not applicable.
export const anthropicAcademy = {
  issuer: "Anthropic Academy",
  platform: "Skilljar · official certificates",
  status: "completed" as const,
  courses: [
    "Claude 101",
    "Claude Code 101",
    "Claude Code in Action",
    "Claude Platform 101",
    "Introduction to Claude Cowork",
    "Building with the Claude API",
    "Introduction to Model Context Protocol",
    "Model Context Protocol: Advanced Topics",
    "Introduction to Agent Skills",
    "Introduction to Subagents",
    "Claude with Amazon Bedrock",
    "Claude with Google Cloud's Vertex AI",
    "AI Fluency: Framework & Foundations",
    "AI Fluency for Builders",
    "AI Capabilities and Limitations",
  ],
};

export type Cert = {
  code: string;
  title: string;
  issuer: string;
  status: "completed" | "in-progress";
};

// Microsoft certifications currently in progress (official exam titles).
export const microsoftCerts: Cert[] = [
  { code: "AZ-104", title: "Microsoft Azure Administrator", issuer: "Microsoft Certified", status: "in-progress" },
  { code: "AZ-305", title: "Designing Microsoft Azure Infrastructure Solutions", issuer: "Microsoft Certified", status: "in-progress" },
  { code: "AI-102", title: "Designing and Implementing a Microsoft Azure AI Solution", issuer: "Microsoft Certified", status: "in-progress" },
  { code: "AZ-400", title: "Designing and Implementing Microsoft DevOps Solutions", issuer: "Microsoft Certified", status: "in-progress" },
];
