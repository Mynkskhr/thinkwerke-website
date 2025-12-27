// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { services, getService } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Service | Thinkwerke" };

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `https://www.thinkwerke.com/services/${service.slug}`,
      type: "article",
    },
    alternates: {
      canonical: `https://www.thinkwerke.com/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) {
    return (
      <main className="py-12">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <p className="mt-3 text-white/70">
          Please return to the <Link className="underline" href="/services">Services</Link> page.
        </p>
      </main>
    );
  }

  // Basic JSON-LD for SEO (Service schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Thinkwerke",
      url: "https://www.thinkwerke.com",
    },
    areaServed: "EU",
    url: `https://www.thinkwerke.com/services/${service.slug}`,
  };

  return (
    <main className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-white/70">
        <Link className="hover:underline" href="/">Home</Link> <span className="mx-2">/</span>
        <Link className="hover:underline" href="/services">Services</Link> <span className="mx-2">/</span>
        <span className="text-white">{service.title}</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight">{service.title}</h1>
      <p className="mt-3 text-white/70 max-w-2xl">{service.short}</p>

      <div className="mt-10 grid gap-4">
        {service.sections.map((sec) => (
          <section
            key={sec.heading}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-semibold">{sec.heading}</h2>
            <ul className="mt-4 list-disc pl-6 text-white/70">
              {sec.bullets.map((b) => (
                <li key={b} className="mt-2">{b}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-semibold hover:bg-white/10 transition"
          href="/services"
        >
          ← All services
        </Link>
        <Link
          className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 font-semibold hover:bg-white/20 transition"
          href="/contact"
        >
          Talk to Thinkwerke →
        </Link>
      </div>
    </main>
  );
}

