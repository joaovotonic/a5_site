import Image from "next/image";
import { findImage } from "@/lib/images";
import { CheckIcon, LabelIcon, ScaleIcon, ToolIcon } from "./icons";
import { Reveal } from "./Reveal";

interface PillarCard {
  title: string;
  text: string;
  ambientSlug: string;
  fallbackGradient: string;
  badgeLabel: string;
  badgeTitle: string;
  badgeMeta: string;
  badgeTags: string[];
  highlights: string[];
  icon: typeof ScaleIcon;
  productSlug?: string;
}

const PILLARS: PillarCard[] = [
  {
    title: "Revenda oficial Toledo.",
    text: "Toda a família Prix comercial e de bancada a pronta-entrega, com consultoria para dimensionar o modelo exato para o seu balcão.",
    ambientSlug: "casa-de-carnes",
    fallbackGradient: "from-[#2d5a3c] to-[#132a1c]",
    badgeLabel: "Linha Prix · Varejo",
    badgeTitle: "Prix 3 · 4 · 5 · 6 · 7",
    badgeMeta: "Homologadas INMETRO",
    badgeTags: ["Açougues", "Supermercados", "Padarias"],
    highlights: [
      "Equipamentos novos na caixa com nota fiscal e garantia de fábrica",
      "Configuração inicial de rede, etiquetas e atalhos de produtos",
    ],
    icon: ScaleIcon,
    productSlug: "prix-6",
  },
  {
    title: "Assistência técnica autorizada.",
    text: "Oficina Técnica Autorizada (OTA) para manutenção preventiva e corretiva, aferição com pesos-padrão e reposição de peças genuínas.",
    ambientSlug: "manutencao-prix",
    fallbackGradient: "from-[#3d4d41] to-[#1a241d]",
    badgeLabel: "Suporte Técnico A5",
    badgeTitle: "Exclusiva no Amazonas",
    badgeMeta: "Unidades AM · RR · CE",
    badgeTags: ["Calibração", "Cabeça térmica", "Peças originais"],
    highlights: [
      "Substituição de cabeça térmica, teclado de membrana e célula de carga",
      "Técnicos credenciados com lacre oficial de manutenção",
    ],
    icon: ToolIcon,
    productSlug: "prix-4-due",
  },
  {
    title: "Software MGV e etiquetas.",
    text: "Carga automática de preços e receitas em rede Wi-Fi, adequação à rotulagem nutricional Anvisa e fornecimento contínuo de bobinas.",
    ambientSlug: "padaria",
    fallbackGradient: "from-[#5c4938] to-[#261d14]",
    badgeLabel: "Automação & Suprimentos",
    badgeTitle: "Toledo MGV 7 + Bobinas",
    badgeMeta: "Sincronizado em Rede",
    badgeTags: ["Carga rápida", "RDC 429 Anvisa", "Bobinas térmicas"],
    highlights: [
      "Etiquetas térmicas adesivas 40x40, 60x40, 60x60 e personalizadas",
      "Integração direta com os principais sistemas ERP de supermercado",
    ],
    icon: LabelIcon,
    productSlug: "prix-7",
  },
];

export function About({
  photo,
  products,
}: {
  photo?: string;
  products: Record<string, string | undefined>;
}) {
  return (
    <section id="quem-somos" className="mx-auto max-w-7xl px-5 pb-8 pt-24 sm:px-8 lg:pt-36">
      <Reveal>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-brand shadow-sm ring-1 ring-line">
            Quem somos · A5 Tecnologia
          </span>
        </div>
        <h2 className="h-display mx-auto mt-4 max-w-4xl text-center text-[clamp(2.6rem,6vw,5rem)]">
          Ligue a balança de manhã.
          <br />
          Saiba que <em>cada grama</em> está certa.
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted text-pretty">
          Somos <strong className="font-medium text-foreground">revenda e assistência técnica Toledo do Brasil</strong>,
          exclusiva em todo o Estado do Amazonas, especializada em balanças comerciais, sistemas de gerenciamento de
          pesagem e etiquetas térmicas — com lojas físicas e suporte técnico em{" "}
          <strong className="font-medium text-foreground">Manaus (AM), Boa Vista (RR) e Fortaleza (CE)</strong>.
        </p>
      </Reveal>

      <ul className="mt-16 grid gap-5 md:grid-cols-3">
        {PILLARS.map((p, i) => {
          const bg = findImage("ambientes", p.ambientSlug);
          const prodImg = p.productSlug ? products[p.productSlug] : undefined;
          return (
            <li key={p.title}>
              <Reveal delay={0.1 * i} className="h-full">
                <article
                  className={`group relative isolate flex min-h-[520px] h-full flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-to-b ${p.fallbackGradient} p-6 text-white sm:p-7`}
                >
                  {bg && (
                    <Image
                      src={bg}
                      alt=""
                      fill
                      sizes="(min-width:768px) 400px, 95vw"
                      className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,18,14,0.48)_0%,rgba(10,18,14,0.22)_38%,rgba(10,18,14,0.92)_100%)]"
                  />

                  {/* Glass UI widget no topo — estilo Prado */}
                  <div className="rounded-2xl bg-white/18 p-4 ring-1 ring-white/30 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-2 text-[11px] font-medium text-white/85">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        {p.badgeLabel}
                      </span>
                      <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] text-white">
                        {p.badgeMeta}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold tracking-tight text-white">{p.badgeTitle}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {p.badgeTags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2.5 py-0.5 text-[11px] text-white/95"
                            >
                              <CheckIcon className="h-3 w-3 text-emerald-300" strokeWidth={2.5} />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      {prodImg ? (
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white/95 p-1 shadow-sm">
                          <Image src={prodImg} alt="" fill sizes="56px" className="object-contain p-1" />
                        </div>
                      ) : (
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/20 text-white">
                          <p.icon className="h-6 w-6" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Título serifado, descrição e checklist técnico na base */}
                  <div className="pt-12">
                    <h3 className="h-display text-[2.1rem] leading-[1.03] text-white">{p.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/85">{p.text}</p>
                    <ul className="mt-4 space-y-1.5 border-t border-white/20 pt-3.5 text-xs text-white/85">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300" strokeWidth={2.5} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>

      {/* Faixa institucional com imagem de fundo da Oficina Técnica Autorizada (OTA) */}
      <Reveal delay={0.12}>
        <div className="relative isolate mt-6 overflow-hidden rounded-[1.75rem] p-6 text-white sm:p-10">
          <Image
            src={photo ?? "/images/ambientes/ota-toledo.jpg"}
            alt="Oficina Técnica Autorizada Toledo Prix — A5 Tecnologia"
            fill
            sizes="(min-width:1280px) 1200px, 95vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,rgba(8,34,64,0.92)_0%,rgba(8,34,64,0.82)_55%,rgba(14,26,20,0.68)_100%)]"
          />
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
                Credenciamento Oficial Toledo do Brasil
              </span>
              <h3 className="h-display on-photo mt-3 text-3xl text-white sm:text-4xl">
                Mais do que vender a balança: garantimos a sua <em>operação rodando todos os dias.</em>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">
                Na A5 Tecnologia você encontra o ciclo completo: dimensionamento técnico para açougues e supermercados,
                venda de equipamentos novos Prix, implantação do MGV 7, fornecimento recorrente de etiquetas térmicas e
                assistência técnica com peças originais de fábrica.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-5">
              {[
                { k: "3 Capitais", v: "Manaus, Boa Vista e Fortaleza" },
                { k: "15 Modelos", v: "Linha comercial e bancada Prix" },
                { k: "100% Original", v: "Peças, cabeças térmicas e bobinas" },
              ].map((stat) => (
                <div
                  key={stat.k}
                  className="rounded-2xl bg-white/14 p-4 ring-1 ring-white/25 backdrop-blur-md"
                >
                  <dt className="h-display text-2xl text-white sm:text-3xl">{stat.k}</dt>
                  <dd className="mt-1 text-xs leading-snug text-white/80">{stat.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
