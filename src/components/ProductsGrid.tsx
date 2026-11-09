"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  PRODUCT_BRANDS,
  PRODUCT_CATEGORIES,
  type Product,
  type ProductBrand,
  type ProductCategory,
} from "@/data/products";
import { whatsappLink } from "@/data/site";
import { ArrowIcon, CheckIcon, CloseIcon, WhatsAppIcon } from "./icons";
import { ScalePlaceholder } from "./ScalePlaceholder";

export type ProductWithImage = Product & { image?: string };

const BRAND_DESCRIPTIONS: Record<ProductBrand, { badge: string; summary: string }> = {
  "Toledo do Brasil": {
    badge: "Revenda & OTA Oficial",
    summary: "Linha Prix comercial, etiquetadoras em rede, bancada 9094/2099 e balanças de piso industriais 2180 e 2124.",
  },
  Balmak: {
    badge: "Linha Completa Balmak",
    summary: "Balanças touch EDGE, etiquetadoras Órion, linha comercial Quick/ONE, checkout PDV, piso BK e linha farma.",
  },
  "Marte Científica": {
    badge: "Laboratório & Precisão",
    summary: "Balanças analíticas (0,0001g), semianalíticas (0,001g) e de precisão com calibração interna e selo Inmetro.",
  },
  Skymsen: {
    badge: "Fatiadores Profissionais",
    summary: "Fatiadores e cortadores de frios, queijos e carnes automáticos e semiautomáticos em inox com proteção NR-12.",
  },
};

export function ProductsGrid({
  products,
  mode = "home",
  initialBrand = "Todas",
}: {
  products: ProductWithImage[];
  /** "home" = vitrine simplificada na tela principal; "catalog" = tela dedicada com todos os produtos abertos */
  mode?: "home" | "catalog";
  initialBrand?: ProductBrand | "Todas" | "Destaques";
}) {
  const [brand, setBrand] = useState<ProductBrand | "Todas" | "Destaques">(
    mode === "home" ? "Destaques" : initialBrand
  );
  const [category, setCategory] = useState<ProductCategory | "Todas">("Todas");
  const [search, setSearch] = useState("");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [selectedModal, setSelectedModal] = useState<ProductWithImage | null>(null);

  // Filtragem
  const filtered = products.filter((p) => {
    if (brand === "Destaques") {
      if (!p.featured) return false;
    } else if (brand !== "Todas" && p.brand !== brand) {
      return false;
    }

    if (category !== "Todas" && p.category !== category) {
      return false;
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchBrand = p.brand.toLowerCase().includes(q);
      const matchTagline = p.tagline.toLowerCase().includes(q);
      const matchIdeal = p.idealFor.some((i) => i.toLowerCase().includes(q));
      const matchCap = p.specs.capacity.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchTagline && !matchIdeal && !matchCap) {
        return false;
      }
    }

    return true;
  });

  // Na tela principal ("home"), limitamos a exibição a 6 itens por aba (ou 6 nos destaques) para manter a página enxuta
  const HOME_LIMIT = 6;
  const shown = mode === "home" ? filtered.slice(0, HOME_LIMIT) : filtered;

  const countByBrand = (b: ProductBrand) => products.filter((p) => p.brand === b).length;

  return (
    <div>
      {/* Abas de Marcas */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="tablist"
          aria-label="Filtrar por marca"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {mode === "home" && (
            <button
              type="button"
              role="tab"
              aria-selected={brand === "Destaques"}
              onClick={() => {
                setBrand("Destaques");
                setCategory("Todas");
              }}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-colors ${
                brand === "Destaques"
                  ? "border-foreground bg-foreground text-white"
                  : "border-line bg-white text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              Principais Modelos
            </button>
          )}

          {mode === "catalog" && (
            <button
              type="button"
              role="tab"
              aria-selected={brand === "Todas"}
              onClick={() => setBrand("Todas")}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-colors ${
                brand === "Todas"
                  ? "border-foreground bg-foreground text-white"
                  : "border-line bg-white text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              Todas as Marcas ({products.length})
            </button>
          )}

          {PRODUCT_BRANDS.map((b) => (
            <button
              key={b}
              type="button"
              role="tab"
              aria-selected={brand === b}
              onClick={() => setBrand(b)}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-colors ${
                brand === b
                  ? "border-brand bg-brand text-white shadow-sm"
                  : "border-line bg-white text-foreground/85 hover:border-brand hover:text-brand"
              }`}
            >
              {b === "Skymsen" ? "Skymsen · Fatiadores" : b}{" "}
              <span className="ml-1 text-xs opacity-75">({countByBrand(b)})</span>
            </button>
          ))}

          {mode === "home" && (
            <Link
              href="/catalogo"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Catálogo Completo ({products.length})
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>

        {/* Busca rápida no modo catálogo */}
        {mode === "catalog" && (
          <div className="relative w-full lg:w-80">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar modelo, 2180, fatiador, açougue..."
              className="h-11 w-full rounded-full border border-line bg-white px-5 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none"
            />
          </div>
        )}
      </div>

      {/* Sub-filtro por Categoria no modo Catálogo Completo */}
      {mode === "catalog" && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-medium uppercase tracking-wider text-muted">Aplicação:</span>
          {(["Todas", ...PRODUCT_CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                category === cat
                  ? "bg-foreground text-white"
                  : "bg-white text-muted ring-1 ring-line hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Resumo da marca selecionada */}
      {brand !== "Todas" && brand !== "Destaques" && (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-white/80 px-5 py-3.5 text-sm">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-brand-soft px-3 py-0.5 text-xs font-semibold text-brand">
              {BRAND_DESCRIPTIONS[brand].badge}
            </span>
            <span className="text-foreground/85">{BRAND_DESCRIPTIONS[brand].summary}</span>
          </div>
          {mode === "home" && (
            <Link
              href={`/catalogo?marca=${encodeURIComponent(brand)}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
            >
              Ver todos os {countByBrand(brand)} modelos de {brand}
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      )}

      {/* Grade de Produtos */}
      <ul
        className={`mt-8 grid gap-6 ${
          mode === "home" ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {shown.map((p) => {
          const isExpanded = mode === "catalog" || expandedSlug === p.slug;

          return (
            <li key={p.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-34px_rgba(15,23,42,0.45)]">
                {/* Imagem de fundo contextual + Foto oficial do equipamento */}
                <div className="relative isolate aspect-[16/10] overflow-hidden bg-surface">
                  {p.ambientBg && (
                    <Image
                      src={p.ambientBg}
                      alt=""
                      fill
                      sizes="(min-width:1024px) 380px, (min-width:640px) 48vw, 95vw"
                      className="-z-20 object-cover opacity-30 blur-[1.5px] transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.93)_18%,rgba(247,248,245,0.78)_65%,rgba(230,233,227,0.9)_100%)]"
                  />

                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width:1024px) 360px, (min-width:640px) 45vw, 90vw"
                      className="object-contain p-4 drop-shadow-[0_14px_24px_rgba(14,26,20,0.18)] transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full place-items-center p-8">
                      <ScalePlaceholder label={p.name} />
                    </div>
                  )}

                  <span className="absolute left-3.5 top-3.5 rounded-full bg-foreground/85 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                    {p.line}
                  </span>

                  {p.highlight && (
                    <span className="absolute right-3.5 top-3.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand shadow-sm ring-1 ring-line">
                      {p.highlight}
                    </span>
                  )}

                  <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-1.5 rounded-xl bg-white/92 px-3 py-1.5 text-[11px] font-medium text-foreground shadow-sm ring-1 ring-black/5 backdrop-blur-md">
                    <span className="truncate">{p.specs.capacity}</span>
                    <span className="rounded-md bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand">
                      {p.certification ?? "INMETRO"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="h-display text-[1.85rem] leading-none text-foreground">{p.name}</h3>
                    <span className="shrink-0 text-xs font-semibold text-brand">{p.brand}</span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.tagline}</p>

                  {/* No modo "home" simplificado, mostra resumo compacto + botão para abrir todas as informações */}
                  {!isExpanded ? (
                    <div className="mt-4 flex flex-1 flex-col justify-end">
                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {p.idealFor.slice(0, 3).map((u) => (
                          <span
                            key={u}
                            className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-medium text-foreground/80"
                          >
                            {u}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setSelectedModal(p)}
                          className="inline-flex min-h-10 items-center justify-center rounded-full border border-line bg-paper px-3 text-xs font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
                        >
                          Ficha técnica
                        </button>
                        <a
                          href={whatsappLink(
                            `Olá! Tenho interesse no equipamento ${p.name} (${p.brand}). Pode me passar um orçamento?`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-foreground px-3 text-xs font-medium text-white transition-colors hover:bg-brand"
                        >
                          <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                          Cotar agora
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* Modo Catálogo Completo (ou card expandido): exibe 100% das especificações técnicas */
                    <>
                      <dl className="mt-4 grid gap-1.5 rounded-2xl bg-paper p-3.5 text-xs ring-1 ring-line/80">
                        <div className="flex items-start justify-between gap-2">
                          <dt className="font-medium text-muted">Especificação:</dt>
                          <dd className="text-right font-medium text-foreground">{p.specs.connectivity}</dd>
                        </div>
                        <div className="flex items-start justify-between gap-2 border-t border-line/60 pt-1.5">
                          <dt className="font-medium text-muted">Operação:</dt>
                          <dd className="text-right font-medium text-foreground">{p.specs.printer}</dd>
                        </div>
                      </dl>

                      <ul className="mt-4 space-y-1.5 text-xs text-foreground/85">
                        {p.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2">
                            <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={2.5} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mb-5 mt-4 border-t border-line/70 pt-3.5">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-muted">Indicada para:</p>
                        <ul className="mt-2 flex flex-wrap gap-1.5">
                          {p.idealFor.map((u) => (
                            <li
                              key={u}
                              className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-foreground/85"
                            >
                              {u}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto flex items-center gap-2">
                        {mode === "home" && (
                          <button
                            type="button"
                            onClick={() => setExpandedSlug(null)}
                            className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-4 text-xs font-medium text-muted hover:text-foreground"
                          >
                            Recolher
                          </button>
                        )}
                        <a
                          href={whatsappLink(
                            `Olá! Tenho interesse no equipamento ${p.name} (${p.brand}). Pode me passar um orçamento?`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-white transition-colors hover:bg-brand"
                        >
                          <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                          Cotar {p.name}
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {/* Rodapé da vitrine na tela principal convidando para o Catálogo Completo */}
      {mode === "home" && (
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-line bg-white p-6 text-center sm:flex-row sm:px-8 sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Catálogo Multimarcas Completo · {products.length} Equipamentos
            </p>
            <p className="mt-1 text-base font-medium text-foreground">
              Veja todas as balanças comerciais, piso 2180, Balmak, Marte analíticas e fatiadores Skymsen com ficha técnica completa.
            </p>
          </div>
          <Link
            href="/catalogo"
            className="inline-flex min-h-12 shrink-0 items-center gap-2.5 rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
          >
            Abrir catálogo completo ({products.length} itens)
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      )}

      {/* Modal de Ficha Técnica Completa (quando clicado na tela principal) */}
      {selectedModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Ficha técnica de ${selectedModal.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedModal(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedModal(null)}
              aria-label="Fechar ficha técnica"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-surface text-foreground hover:bg-line"
            >
              <CloseIcon />
            </button>

            <div className="grid gap-6 sm:grid-cols-12 sm:items-center">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface sm:col-span-5">
                {selectedModal.image ? (
                  <Image
                    src={selectedModal.image}
                    alt={selectedModal.name}
                    fill
                    sizes="260px"
                    className="object-contain p-4"
                  />
                ) : (
                  <ScalePlaceholder label={selectedModal.name} />
                )}
              </div>

              <div className="sm:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                    {selectedModal.brand}
                  </span>
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground">
                    {selectedModal.line}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    {selectedModal.certification ?? "INMETRO"}
                  </span>
                </div>

                <h3 className="h-display mt-3 text-3xl text-foreground sm:text-4xl">{selectedModal.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{selectedModal.tagline}</p>
              </div>
            </div>

            <dl className="mt-6 grid gap-2.5 rounded-2xl bg-paper p-4 text-sm ring-1 ring-line">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <dt className="font-medium text-muted">Capacidade / Lâmina:</dt>
                <dd className="font-semibold text-foreground">{selectedModal.specs.capacity}</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-line/60 pt-2">
                <dt className="font-medium text-muted">Comunicação / Motor:</dt>
                <dd className="font-medium text-foreground">{selectedModal.specs.connectivity}</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-line/60 pt-2">
                <dt className="font-medium text-muted">Operação:</dt>
                <dd className="font-medium text-foreground">{selectedModal.specs.printer}</dd>
              </div>
            </dl>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Características e Diferenciais
              </p>
              <ul className="mt-2.5 space-y-2 text-sm text-foreground/90">
                {selectedModal.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-line pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Aplicações recomendadas:</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {selectedModal.idealFor.map((u) => (
                  <li
                    key={u}
                    className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {u}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(
                  `Olá! Vi a ficha técnica do equipamento ${selectedModal.name} (${selectedModal.brand}) e gostaria de um orçamento.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-white transition-colors hover:bg-brand"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                Solicitar orçamento de {selectedModal.name}
              </a>
              <Link
                href="/catalogo"
                onClick={() => setSelectedModal(null)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-6 text-sm font-semibold text-foreground hover:border-brand hover:text-brand"
              >
                Ver catálogo completo
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
