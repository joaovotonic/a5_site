import Image from "next/image";
import { whatsappLink } from "@/data/site";
import type { GoogleReviewsData } from "@/lib/reviews";
import { ArrowIcon, StarIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Hero({
  reviews,
  heroImage,
  heroProduct,
}: {
  reviews: GoogleReviewsData;
  /** Foto de ambiente (public/images/ambientes/hero.*) ou da loja (public/images/lojas/hero.*) */
  heroImage?: string;
  heroProduct?: string;
}) {
  return (
    <section id="inicio" className="p-3 sm:p-5">
      <div className="relative isolate flex min-h-[calc(100svh-1.5rem)] flex-col justify-between overflow-hidden rounded-[2rem] px-4 pb-6 pt-24 text-center text-white sm:min-h-[680px] sm:rounded-[2.5rem] sm:px-8 sm:pb-8 sm:pt-32 lg:h-[88vh] lg:max-h-[860px]">
        {heroImage ? (
          <div data-parallax="0.15" className="absolute inset-0 -z-20 will-change-transform">
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 -z-20 bg-[radial-gradient(90%_70%_at_50%_0%,#7fb2e5_0%,#2f6fae_45%,#0b3a66_100%)]"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(80%_55%_at_50%_45%,rgba(4,14,26,0.64)_0%,rgba(4,14,26,0.25)_75%,transparent_100%),linear-gradient(180deg,rgba(4,14,26,0.56)_0%,rgba(4,14,26,0.44)_45%,rgba(4,14,26,0.78)_100%)]"
        />

        <div className="my-auto flex flex-col items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-black/45 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-sm ring-1 ring-white/35 backdrop-blur-md sm:px-4 sm:text-[11px] sm:tracking-[0.1em]">
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-foreground">Toledo</span>
              Revenda e assistência técnica
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="h-display on-photo mt-5 max-w-5xl text-[clamp(2.75rem,9vw,8rem)] text-white sm:mt-7">
              Pese certo.
              <br />
              <em>Venda com confiança.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.9),0_1px_3px_rgba(0,0,0,0.85)] text-pretty sm:mt-7 sm:text-lg">
              Balanças Toledo Prix, software MGV, etiquetas e assistência técnica — em Manaus, Boa Vista e Fortaleza.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-7 flex w-full max-w-xs flex-col gap-3 sm:mt-9 sm:w-auto sm:max-w-none sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-foreground shadow-md transition-transform hover:scale-[1.03]"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                Solicitar orçamento
              </a>
              <a
                href="#balancas"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black/45 px-7 text-[15px] font-semibold text-white ring-1 ring-white/45 backdrop-blur-md transition-colors hover:bg-black/60"
              >
                Ver balanças Prix
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 flex w-full flex-wrap items-end justify-center gap-3 pt-2 sm:mt-10 sm:justify-between">
          <ul className="flex flex-wrap justify-center gap-2 text-left text-xs sm:justify-start sm:text-sm">
            <li className="rounded-full bg-black/30 px-3.5 py-1.5 ring-1 ring-white/25 backdrop-blur-md sm:bg-white/15 sm:px-4 sm:py-2">
              Manaus · Boa Vista · Fortaleza
            </li>
            <li className="rounded-full bg-black/30 px-3.5 py-1.5 ring-1 ring-white/25 backdrop-blur-md sm:bg-white/15 sm:px-4 sm:py-2">
              Exclusiva Toledo no Amazonas
            </li>
            {reviews.rating && (
              <li className="inline-flex items-center gap-1.5 rounded-full bg-black/30 px-3.5 py-1.5 ring-1 ring-white/25 backdrop-blur-md sm:bg-white/15 sm:px-4 sm:py-2">
                <StarIcon className="h-4 w-4 text-amber-300" />
                {reviews.rating.toFixed(1).replace(".", ",")} no Google · {reviews.total} avaliações
              </li>
            )}
          </ul>

          {heroProduct && (
            <div className="hidden w-60 items-center gap-3 rounded-3xl bg-white p-3 pr-5 text-left text-foreground shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] md:flex">
              <div className="relative h-16 w-16 shrink-0 rounded-2xl bg-background">
                <Image src={heroProduct} alt="Balança Toledo Prix" fill sizes="64px" className="object-contain p-1.5" />
              </div>
              <div className="text-xs leading-snug">
                <p className="font-semibold">Linha Toledo Prix</p>
                <p className="text-muted">Do balcão ao supermercado</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
