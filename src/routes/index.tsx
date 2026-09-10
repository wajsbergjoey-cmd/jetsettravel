import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Perks } from "@/components/Perks";
import { RecentTrips } from "@/components/RecentTrips";
import { Testimonials } from "@/components/Testimonials";
import { Consult } from "@/components/Consult";
import { ConsultProvider } from "@/components/ConsultPanel";
import { SiteFooter } from "@/components/SiteFooter";

const title = "Jet Set Travel Co. — Travel Advisor";
const description =
  "Hotels, cruises, and flights planned and booked by an advisor — upgrades, resort credit, and insider perks at no extra cost to you.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Jet Set Travel Co.",
          description,
          email: "hello@jetsettravelco.com",
          sameAs: ["https://instagram.com/jetsettravelco_"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ConsultProvider>
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Perks />
        <RecentTrips />
        <Testimonials />
        <Consult />
      </main>
      <SiteFooter />
    </ConsultProvider>
  );
}
