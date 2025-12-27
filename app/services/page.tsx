// app/services/page.tsx
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services | Thinkwerke",
  description:
    "Explore Thinkwerke services: ISO 27001 programme, NIS2 & CRA readiness, SOC & SIEM modernisation, CSPM/ASPM/CNAPP, DevSecOps enablement, and interim architecture uplift.",
};

export default function ServicesIndexPage() {
  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold tracking-tight">Services</h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Architecture, engineering and delivery support for EU-regulated cloud — designed
        to produce audit-ready evidence and keep delivery velocity.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </main>
  );
}

