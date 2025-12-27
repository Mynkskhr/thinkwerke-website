// components/ServiceCard.tsx
import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
    >
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-white/70">{service.short}</p>
      <p className="mt-4 text-sm font-semibold">Read more →</p>
    </Link>
  );
}

