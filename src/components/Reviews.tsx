"use client";

import Image from "next/image";
import { useState } from "react";
import { STORES } from "@/data/site";
import type { GoogleReviewsData } from "@/lib/reviews";
import { CheckIcon, StarIcon } from "./icons";
import { Reveal } from "./Reveal";

function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex" role="img" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} className={`h-4 w-4 ${i < Math.round(value) ? "text-amber-400" : "text-line"}`} />
      ))}
    </span>
  );
}

export function Reviews({ data }: { data: GoogleReviewsData }) {
  const [unit, setUnit] = useState<string>("todas");
  const storeName = (id: string) => {
    const st = STORES.find((s) => s.id === id);
    return st ? `${st.city}/${st.uf}` : "";
  };

  const filtered = unit === "todas" ? data.reviews : data.reviews.filter((r) => r.storeId === unit);

  return (
    <section id="avaliacoes" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      {/* Banner superior com imagem de fundo e indicadores de reputação por unidade */}
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] p-7 text-white sm:rounded-[2.25rem] sm:p-10 lg:p-12">
          <Image
            src="/images/ambientes/casa-de-carnes.jpg"
            alt="Clientes atendidos pela A5 Tecnologia"
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(10,18,14,0.92)_0%,rgba(10,18,14,0.82)_58%,rgba(10,95,180,0.75)_100%)]"
          />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-white ring-1 ring-white/25 backdrop-blur">
                Avaliações de Clientes · AM · RR · CE
              </span>
              <h2 className="h-display on-photo mt-4 text-[clamp(2.4rem,5vw,4.2rem)] text-white">
                Quem pesa no balcão todo dia, <em>recomenda a A5.</em>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                Depoimentos de açougues, casas de carnes, supermercados, padarias, frigoríficos e farmácias atendidos
                pelas nossas unidades de Manaus, Boa Vista e Fortaleza.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <div className="flex items-center gap-4 rounded-3xl bg-white p-6 text-foreground shadow-lg">
                <span className="h-display text-6xl leading-none text-foreground">
                  {(data.rating ?? 4.9).toFixed(1).replace(".", ",")}
                </span>
                <div>
                  <Stars value={data.rating ?? 4.9} />
                  <p className="mt-1.5 text-sm font-semibold text-foreground">
                    {data.total ?? 214} avaliações de clientes
                  </p>
                  <p className="text-xs text-muted">98% de aprovação em vendas e suporte</p>
                </div>
              </div>
            </div>
          </div>

          {/* Resumo por unidade + filtro */}
          <div className="mt-8 flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "todas", label: "Todas as unidades (214)" },
                { id: "manaus", label: "Manaus · AM (4,9 ★)" },
                { id: "boa-vista", label: "Boa Vista · RR (4,9 ★)" },
                { id: "fortaleza", label: "Fortaleza · CE (5,0 ★)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setUnit(tab.id)}
                  className={`min-h-10 rounded-full px-4 text-xs font-semibold transition-colors ${
                    unit === tab.id
                      ? "bg-white text-foreground shadow-sm"
                      : "bg-white/14 text-white/90 ring-1 ring-white/25 hover:bg-white/24"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs text-white/85">
              <CheckIcon className="h-4 w-4 text-emerald-300" strokeWidth={2.5} />
              Revenda & Oficina Técnica Autorizada Toledo
            </span>
          </div>
        </div>
      </Reveal>

      {/* Grade de depoimentos */}
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r, i) => (
          <li key={r.id}>
            <Reveal delay={0.05 * (i % 3)} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-6 shadow-[0_14px_34px_-24px_rgba(14,26,20,0.25)] transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Stars value={r.rating} />
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-200">
                      <CheckIcon className="h-3 w-3" strokeWidth={2.5} />
                      Cliente Verificado
                    </span>
                  </div>

                  {r.equipment && (
                    <div className="mt-3">
                      <span className="inline-block rounded-lg bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand">
                        {r.equipment}
                      </span>
                    </div>
                  )}

                  <blockquote className="mt-3.5 text-[14.5px] leading-relaxed text-foreground/90">
                    “{r.text}”
                  </blockquote>
                </div>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-line/70 pt-4">
                  {r.authorPhoto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={r.authorPhoto}
                      alt=""
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-sm font-semibold text-white">
                      {r.author.charAt(0)}
                    </span>
                  )}
                  <div className="min-w-0 flex-1 text-xs">
                    <p className="truncate text-sm font-semibold text-foreground">{r.author}</p>
                    {r.business && <p className="truncate font-medium text-brand">{r.business}</p>}
                    <p className="mt-0.5 truncate text-muted">
                      {[storeName(r.storeId), r.when].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
