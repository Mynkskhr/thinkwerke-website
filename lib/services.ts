// lib/services.ts
export type Service = {
  slug: string;
  title: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  sections: Array<{ heading: string; bullets: string[] }>;
};

export const services: Service[] = [
  {
    slug: "iso-27001-programme",
    title: "ISO 27001 Programme",
    short:
      "Gap assessment, SoA, internal audits, evidence workflows, and technical control mapping — from readiness to certification.",
    seoTitle: "ISO 27001 Programme | Thinkwerke",
    seoDescription:
      "ISO 27001 programme delivery: gap assessment, Statement of Applicability, internal audits, and automated evidence workflows mapped to cloud and CI/CD controls.",
    keywords: ["ISO 27001", "ISMS", "Statement of Applicability", "internal audit", "evidence", "cloud controls"],
    sections: [
      {
        heading: "What you get",
        bullets: [
          "ISO 27001:2022 gap assessment and implementation roadmap",
          "Statement of Applicability (SoA) and control mapping to engineering reality",
          "Audit-ready evidence workflows (policy → implementation → proof)",
        ],
      },
      {
        heading: "Typical outcomes",
        bullets: [
          "Reduced audit friction through continuous evidence generation",
          "Clear ownership across governance, operations, and engineering",
          "Reusable artefacts for tenders and customer assessments",
        ],
      },
    ],
  },
  {
    slug: "nis2-cra-readiness",
    title: "NIS2 & CRA Readiness",
    short:
      "SSLM, vulnerability lifecycle, SBOM and OSS license governance, continuous evidence aligned to NIS2 and CRA expectations.",
    seoTitle: "NIS2 & CRA Readiness | Thinkwerke",
    seoDescription:
      "NIS2 and CRA readiness program: secure software lifecycle (SSLM), vulnerability management workflows, SBOM and OSS license governance, and continuous compliance evidence.",
    keywords: ["NIS2", "Cyber Resilience Act", "CRA", "SSLM", "SBOM", "vulnerability management", "open source"],
    sections: [
      {
        heading: "What you get",
        bullets: [
          "SSLM pipeline controls (SAST/SCA/SBOM/DAST/IaC/container checks)",
          "Vulnerability lifecycle: detection → SLA → workflow → remediation evidence",
          "SBOM + OSS license governance aligned to product security expectations",
        ],
      },
      {
        heading: "Typical outcomes",
        bullets: [
          "Predictable vulnerability handling with measurable SLAs",
          "Audit-ready software supply-chain artefacts",
          "Clear evidence trails for regulators and customers",
        ],
      },
    ],
  },
  {
    slug: "soc-siem-modernisation",
    title: "SOC & SIEM Modernisation",
    short:
      "Cloud-centric SIEM architectures, MITRE-mapped detections, CSIRT processes, and regulator/customer dashboards.",
    seoTitle: "SOC & SIEM Modernisation | Thinkwerke",
    seoDescription:
      "Modernise SOC and SIEM for cloud: architecture, MITRE-mapped detection engineering, incident response workflows, and governance dashboards for auditors and customers.",
    keywords: ["SOC", "SIEM", "detection engineering", "MITRE ATT&CK", "incident response", "CSIRT"],
    sections: [
      {
        heading: "What you get",
        bullets: [
          "Cloud-centric logging strategy and SIEM architecture",
          "MITRE-mapped detection engineering and tuning",
          "CSIRT / incident response workflows with evidence capture",
        ],
      },
      {
        heading: "Typical outcomes",
        bullets: [
          "Higher signal-to-noise detection coverage",
          "Faster investigations with consistent evidence trails",
          "Dashboards useful to auditors, regulators, and customers",
        ],
      },
    ],
  },
  {
    slug: "cspm-aspm-cnapp",
    title: "CSPM, ASPM & CNAPP",
    short:
      "AWS multi-account foundations, posture visibility, and cloud-native protection aligned to EU sovereignty expectations.",
    seoTitle: "CSPM / ASPM / CNAPP | Thinkwerke",
    seoDescription:
      "Cloud posture and application security management: AWS foundations, posture visibility, and cloud-native protection aligned to regulated EU environments.",
    keywords: ["CSPM", "ASPM", "CNAPP", "AWS", "cloud posture", "cloud security"],
    sections: [
      {
        heading: "What you get",
        bullets: [
          "AWS multi-account foundations and guardrails",
          "Cloud posture visibility and prioritized remediation plan",
          "Cloud-native protection patterns aligned to regulated operations",
        ],
      },
      {
        heading: "Typical outcomes",
        bullets: [
          "Reduced cloud misconfiguration risk",
          "Repeatable remediation playbooks",
          "Better control coverage visibility for audits",
        ],
      },
    ],
  },
  {
    slug: "devsecops-cicd-enablement",
    title: "DevSecOps & CI/CD Enablement",
    short:
      "Secure pipelines, policy-as-code, artifact integrity, attestation and developer-friendly controls that keep delivery fast.",
    seoTitle: "DevSecOps & CI/CD Enablement | Thinkwerke",
    seoDescription:
      "DevSecOps enablement for regulated teams: secure CI/CD, policy-as-code, artifact integrity, attestations, and practical controls that keep delivery velocity.",
    keywords: ["DevSecOps", "CI/CD", "policy as code", "artifact integrity", "attestation", "pipeline security"],
    sections: [
      {
        heading: "What you get",
        bullets: [
          "Secure CI/CD reference implementation and guardrails",
          "Policy-as-code and automated control checks",
          "Artifact integrity and attestation patterns",
        ],
      },
      {
        heading: "Typical outcomes",
        bullets: [
          "Reduced time to produce compliance evidence",
          "Consistent baseline security across teams",
          "Developer-friendly controls with minimal friction",
        ],
      },
    ],
  },
  {
    slug: "interim-architecture-uplift",
    title: "Interim Architecture & Capability Uplift",
    short:
      "Acting as Security/Cloud/DevSecOps architect while enabling teams with skills, process and ownership.",
    seoTitle: "Interim Architecture & Capability Uplift | Thinkwerke",
    seoDescription:
      "Hands-on interim security and cloud architecture leadership with capability uplift: delivery support, skill transfer, and operational ownership for regulated environments.",
    keywords: ["interim architect", "cloud architect", "security architect", "capability uplift", "enablement"],
    sections: [
      {
        heading: "What you get",
        bullets: [
          "Hands-on architecture leadership during delivery",
          "Operating model improvements (process, ownership, quality gates)",
          "Skill uplift and knowledge transfer into your teams",
        ],
      },
      {
        heading: "Typical outcomes",
        bullets: [
          "Faster delivery with fewer security regressions",
          "Teams able to run and evolve the platform independently",
          "Reduced dependency on external support over time",
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

