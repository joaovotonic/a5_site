import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppIcon } from "@/components/icons";
import { ProductsGrid } from "@/components/ProductsGrid";
import { Reveal } from "@/components/Reveal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PRODUCTS } from "@/data/products";
import { whatsappLink } from "@/data/site";
import { findImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Catálogo Completo — Toledo Prix, Piso 2180, Balmak, Marte e Fatiadores Skymsen",
  description:
    "Catálogo completo de balanças comerciais e de piso Toledo do Brasil (Prix e 2180), balanças Balmak, balanças analíticas e de precisão Marte Científica e fatiadores de frios Skymsen em Manaus, Boa Vista e Fortaleza.",
};

export default function CatalogoPage() {
  const products = PRODUCTS.map((p) => ({ ...p, image: findImage("produtos", p.slug) }));

  return (
    <>
      <SmoothScroll />
      <Header />
      <main id="conteudo" className="flex-1">
        {/* Topo Editorial do Catálogo */}
        <section className="p-3 sm:p-5">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground px-6 pb-14 pt-28 text-white sm:rounded-[2.5rem] sm:px-12 sm:pb-16 sm:pt-36">
            <Image
              src="/images/ambientes/casa-de-carnes.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="-z-20 object-cover opacity-35"
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-[linear-gradient(125deg,rgba(6,20,35,0.92)_0%,rgba(8,42,78,0.84)_55%,rgba(6,20,35,0.92)_100%)]"
            />

            <div className="mx-auto max-w-7xl">
              <Reveal>
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/75">
                  <Link href="/" className="hover:text-white hover:underline">
                    ← Voltar para a página inicial
                  </Link>
                  <span>·</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
                    Catálogo Multimarcas Completo
                  </span>
                </div>

                <h1 className="h-display on-photo mt-5 max-w-4xl text-[clamp(2.5rem,5.5vw,4.8rem)]">
                  Balanças comerciais, piso industrial, precisão e <em>fatiadores de frios.</em>
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                  Explore todos os {products.length} equipamentos fornecidos pela A5 Tecnologia em Manaus (AM), Boa Vista (RR) e Fortaleza (CE) com especificações técnicas completas, homologação Inmetro e suporte especializado.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#82c8ff]">Toledo do Brasil</p>
                    <p className="mt-1 font-semibold text-white">Linha Prix + Piso 2180 / 2124</p>
                    <p className="mt-0.5 text-xs text-white/75">Etiquetadoras, checkout, bancada e piso pesado</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#82c8ff]">Balmak</p>
                    <p className="mt-1 font-semibold text-white">EDGE, Órion, Quick, BK e Farma</p>
                    <p className="mt-0.5 text-xs text-white/75">Automação comercial, balcão, plataforma e hospitalar</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#82c8ff]">Marte Científica</p>
                    <p className="mt-1 font-semibold text-white">Analíticas e Semianalíticas</p>
                    <p className="mt-0.5 text-xs text-white/75">Precisão de 0,0001g a 51kg com calibração interna</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#82c8ff]">Skymsen</p>
                    <p className="mt-1 font-semibold text-white">Fatiadores de Frios e Carnes</p>
                    <p className="mt-0.5 text-xs text-white/75">Automáticos e semiautomáticos em inox NR-12</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Grade Completa com Filtros e Especificações */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ProductsGrid products={products} mode="catalog" />
          </div>
        </section>

        {/* CTA Final de Consultoria */}
        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-foreground p-8 text-center text-white sm:flex-row sm:p-12 sm:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#82c8ff]">
                Consultoria Técnica A5 Tecnologia
              </span>
              <h2 className="h-display on-photo mt-2 text-3xl sm:text-4xl">
                Em dúvida entre dois modelos? <em>Nossa equipe dimensiona para você.</em>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                Fale direto com um especialista em Manaus, Boa Vista ou Fortaleza para cotação de balanças, fatiadores, software MGV 7 e bobinas térmicas.
              </p>
            </div>
            <a
              href={whatsappLink(
                "Olá! Estou vendo o catálogo completo no site da A5 Tecnologia e gostaria de ajuda para escolher o equipamento ideal."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center gap-2.5 rounded-full bg-white px-7 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              Solicitar cotação no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
