import { Suspense } from "react";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mgv } from "@/components/Mgv";
import { Products } from "@/components/Products";
import { Reviews } from "@/components/Reviews";
import { ClosingCta, Quote, Segments } from "@/components/Segments";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SocialFeed } from "@/components/SocialFeed";
import { Stores } from "@/components/Stores";
import { SupportTicket } from "@/components/SupportTicket";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { COMPANY, STORES } from "@/data/site";
import { findImage } from "@/lib/images";
import { getGoogleReviews } from "@/lib/reviews";
import { getSocialFeed } from "@/lib/social";

async function HeroSection() {
  const reviews = await getGoogleReviews();
  return (
    <Hero
      reviews={reviews}
      heroImage={findImage("lojas", "hero") ?? findImage("ambientes", "hero") ?? findImage("lojas", "manaus")}
      heroProduct={findImage("produtos", "prix-6") ?? findImage("produtos", "prix-5")}
    />
  );
}

async function ReviewsSection() {
  return <Reviews data={await getGoogleReviews()} />;
}

async function SocialSection() {
  return <SocialFeed feed={await getSocialFeed()} />;
}

async function JsonLd() {
  const reviews = await getGoogleReviews();
  const manaus = STORES[0];
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.legalName,
    url: COMPANY.siteUrl,
    telephone: "+559233422315",
    email: COMPANY.email,
    sameAs: [COMPANY.instagram, COMPANY.facebook].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Comendador Clementino, 379",
      addressLocality: manaus.city,
      addressRegion: manaus.uf,
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:00",
    },
    ...(reviews.rating && reviews.total
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviews.rating,
            reviewCount: reviews.total,
          },
        }
      : {}),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function Home() {
  const featuredProducts = {
    "prix-6": findImage("produtos", "prix-6"),
    "prix-7": findImage("produtos", "prix-7"),
  };

  return (
    <>
      <SmoothScroll />
      <Header />
      <main id="conteudo" className="flex-1">
        <Suspense fallback={<div className="min-h-[640px]" />}>
          <HeroSection />
        </Suspense>
        <About
          photo={findImage("lojas", "sobre") ?? findImage("lojas", "manaus")}
          products={featuredProducts}
        />
        <Segments />
        <Quote />
        <Products />
        <Mgv />
        <SupportTicket />
        <Suspense fallback={<div className="min-h-[480px] bg-surface" />}>
          <SocialSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[420px]" />}>
          <ReviewsSection />
        </Suspense>
        <Stores />
        <ClosingCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Suspense fallback={null}>
        <JsonLd />
      </Suspense>
    </>
  );
}
