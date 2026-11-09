import Image from "next/image";
import { whatsappLink } from "@/data/site";
import { findImage } from "@/lib/images";
import { ArrowIcon, CheckIcon, CloudIcon, LabelIcon, ScaleIcon } from "./icons";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: ScaleIcon,
    title: "Carga automática de preços em rede (Wi-Fi / Ethernet)",
    text: "Envie preços, descrições, taras e validades do seu ERP para todas as balanças do açougue, padaria e hortifrúti de uma só vez.",
    tag: "Zero digitação manual",
  },
  {
    icon: LabelIcon,
    title: "Tabela nutricional RDC 429 Anvisa e rastreabilidade",
    text: "Gerencie ingredientes, alergênicos, lupa frontal de alto teor, lote de origem do frigorífico e conservação nos rótulos térmicos.",
    tag: "Conformidade Anvisa & Inmetro",
  },
  {
    icon: CloudIcon,
    title: "Monitoramento centralizado das balanças",
    text: "Acompanhe em tempo real se todas as balanças Prix 4, 5, 6 e 7 estão online, status de comunicação e diagnóstico de impressão.",
    tag: "Gestão multi-loja",
  },
];

export function Mgv() {
  const bg = findImage("ambientes", "supermercado") ?? findImage("ambientes", "hortifruti");

  return (
    <section id="mgv" className="p-3 sm:p-5">
      <div className="relative isolate overflow-hidden rounded-[2rem] text-white sm:rounded-[2.5rem]">
        {bg ? (
          <div data-parallax="0.12" className="absolute inset-0 -z-20 will-change-transform">
            <Image src={bg} alt="" fill sizes="100vw" className="object-cover" />
          </div>
        ) : (
          <div aria-hidden className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#0a5fb4_0%,#08457f_100%)]" />
        )}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,rgba(6,24,44,0.94)_0%,rgba(6,24,44,0.82)_55%,rgba(6,24,44,0.68)_100%)]"
        />

        <div className="grid gap-12 px-6 py-16 sm:px-12 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-16 lg:py-28">
          <Reveal className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium uppercase tracking-[0.1em] text-white/90 ring-1 ring-white/25 backdrop-blur">
              Software Oficial Toledo · Prix MGV 7
            </span>
            <h2 className="h-display on-photo mt-4 text-[clamp(2.5rem,5.2vw,4.5rem)]">
              O cadastro entra <em>sozinho.</em> O preço também.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
              O <strong>Prix MGV 7</strong> (Módulo Gerenciador de Vendas da Toledo do Brasil) interliga o seu sistema
              de retaguarda (ERP) às balanças etiquetadoras da loja. A A5 Tecnologia realiza a instalação, configuração
              de layouts de etiquetas e treinamento da sua equipe.
            </p>

            {/* Card com a arte oficial do Prix MGV 7 */}
            <div className="mt-7 flex items-center gap-4 rounded-2xl bg-white/12 p-4 ring-1 ring-white/25 backdrop-blur-md">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white/95 p-1.5">
                <Image
                  src="/images/ambientes/mgv7-box.webp"
                  alt="Software Toledo Prix MGV 7"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <div className="text-xs leading-relaxed text-white/90">
                <p className="text-sm font-semibold text-white">Compatível com Prix 4 Uno, Due, Trend, Prix 5, 6 e 7</p>
                <p className="mt-0.5 text-white/80">
                  Importação automática por arquivo texto, banco de dados ou WebService, com suporte técnico especializado
                  A5 em Manaus, Boa Vista e Fortaleza.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappLink("Olá! Quero saber mais sobre a implantação do software Toledo MGV 7 para minhas balanças.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-foreground transition-transform hover:scale-[1.03]"
              >
                Falar sobre implantação do MGV 7
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-3.5 lg:col-span-6 lg:pl-6">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={0.08 * i}>
                <div className="flex items-start gap-4 rounded-3xl bg-white p-5 text-foreground shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] sm:p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <f.icon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand">
                      {f.tag}
                    </span>
                    <h3 className="mt-1.5 text-[17px] font-semibold tracking-tight">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{f.text}</p>
                  </div>
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green-600 text-white">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
