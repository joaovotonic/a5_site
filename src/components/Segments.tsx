import Image from "next/image";
import { whatsappLink } from "@/data/site";
import { findImage } from "@/lib/images";
import { ArrowIcon, CheckIcon, LabelIcon, ScaleIcon, ToolIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

const SEGMENTS = [
  {
    slug: "padaria",
    name: "Padarias",
    tag: "Confeitarias e panificadoras",
    models: "Prix 4 Due · Prix 5 W",
    detail: "Etiquetas com tabela nutricional RDC 429, receita, lote, hora de fornada e tara de embalagem.",
    offset: "md:mt-0",
  },
  {
    slug: "acougue-balcao",
    fallbackSlug: "acougue",
    name: "Açougues",
    tag: "Casas de carne e frigoríficos",
    models: "Prix 4 · Prix 5 · 2099 Inox",
    detail: "Atalhos rápidos para cortes bovinos, suínos e aves, etiqueta resistente ao frio e pesagem de recebimento.",
    offset: "md:mt-12",
  },
  {
    slug: "hortifruti",
    name: "Hortifrúti",
    tag: "Feiras, sacolões e quitandas",
    models: "Prix 3 Plus · Checkout 8217",
    detail: "Pesagem ágil no balcão ou direto no caixa (PDV), prato inox com abas e bateria para até 160 horas.",
    offset: "md:mt-4",
  },
  {
    slug: "supermercado",
    name: "Supermercados",
    tag: "Do bairro às grandes redes",
    models: "Prix 5 · Prix 6 · Prix 7T",
    detail: "Baterias de balanças sincronizadas em rede Wi-Fi pelo software Toledo MGV 7 com atualização imediata.",
    offset: "md:mt-16",
  },
  {
    slug: "farmacia",
    name: "Farmácias",
    tag: "Manipulação e laboratórios",
    models: "Toledo Prix Lab LT",
    detail: "Alta precisão analítica e semianalítica de miligramas com capela protetora e homologação Inmetro.",
    offset: "md:mt-8",
  },
];

const GRADIENTS = [
  "from-[#efe6d6] to-[#e0d0b3]",
  "from-[#ead9d4] to-[#dcbfb6]",
  "from-[#e4eadf] to-[#cdd8c4]",
  "from-[#dbe9f7] to-[#bcd6ee]",
  "from-[#e3e1ee] to-[#cbc7e0]",
];

const ACOUGUE_SOLUTIONS = [
  {
    title: "Balcão de Cortes & Atendimento",
    models: "Prix 4 Uno · Prix 4 Due · Prix 5 W Plus",
    desc: "Teclado de acesso rápido para cortes de alto giro (alcatra, contrafilé, costela, frango), cálculo automático de tara da bandeja e impressão imediata do código EAN-13 para o caixa.",
  },
  {
    title: "Pré-Embalagem & Bandejas Refrigeradas",
    models: "Prix 6 Touch · Prix 7E · Etiquetas Térmicas",
    desc: "Impressão contínua com tabela nutricional obrigatória (RDC 429 Anvisa), data de fabricação, validade e conservação em bobinas térmicas com adesivo especial para resfriados e congelados.",
  },
  {
    title: "Desossa Úmida & Recebimento de Carcaças",
    models: "Toledo 2099 Inox · Prix Splash IP65",
    desc: "Conferência de peso na chegada do frigorífico com plataforma em aço inox de até 300 kg e balança 100% lavável à prova d'água para salas de desossa e peixarias.",
  },
];

export function Segments() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-brand">Aplicações por segmento</span>
          <h2 className="h-display mt-3 text-[clamp(2.4rem,5vw,4.2rem)]">
            Feito para quem tem <em>balcão.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-5">
          <p className="text-lg leading-relaxed text-muted text-pretty">
            Padarias, açougues, hortifrútis, supermercados e farmácias: cada operação pesa de um jeito. A A5 Tecnologia
            dimensiona, instala e dá suporte ao modelo ideal para o seu negócio.
          </p>
        </Reveal>
      </div>

      {/* 5 colunas escalonadas com imagens de fundo e informações completas */}
      <ul className="mt-14 flex gap-4 overflow-x-auto pb-6 [scrollbar-width:none] md:grid md:grid-cols-5 md:gap-5 md:overflow-visible">
        {SEGMENTS.map((s, i) => {
          const img =
            findImage("ambientes", s.slug) ??
            (s.fallbackSlug ? findImage("ambientes", s.fallbackSlug) : undefined);
          return (
            <li key={s.name} className={`w-[72%] shrink-0 sm:w-[44%] md:w-auto ${s.offset}`}>
              <Reveal delay={0.07 * i}>
                <figure className="group flex flex-col">
                  <div
                    className={`relative isolate aspect-[4/5.2] overflow-hidden rounded-[1.5rem] bg-gradient-to-b ${GRADIENTS[i % GRADIENTS.length]} p-3.5 flex flex-col justify-between`}
                  >
                    {img && (
                      <Image
                        src={img}
                        alt={`Ambiente de ${s.name.toLowerCase()}`}
                        fill
                        sizes="(min-width:768px) 240px, 70vw"
                        className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div
                      aria-hidden
                      className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,18,14,0.45)_0%,rgba(10,18,14,0.08)_45%,rgba(10,18,14,0.82)_100%)]"
                    />

                    <span className="self-start rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-md">
                      {s.models}
                    </span>

                    <div className="text-white">
                      <p className="h-display text-2xl leading-none text-white">{s.name}</p>
                      <p className="mt-1 text-xs font-medium text-white/85">{s.tag}</p>
                    </div>
                  </div>
                  <figcaption className="mt-3 rounded-2xl border border-line bg-white p-3.5">
                    <p className="text-xs leading-relaxed text-muted">{s.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          );
        })}
      </ul>

      {/* Painel Especial: Açougues, Casas de Carne e Frigoríficos com fotos reais */}
      <div className="mt-24 rounded-[2.25rem] border border-line bg-white p-6 shadow-[0_24px_60px_-32px_rgba(14,26,20,0.2)] sm:p-10 lg:p-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              Especial Açougues · Casas de Carne · Frigoríficos
            </span>
            <h3 className="h-display mt-4 text-[clamp(2.1rem,4.4vw,3.6rem)]">
              Do gancho ao balcão refrigerado, <em>precisão em cada corte.</em>
            </h3>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-muted">
              Equipamos açougues de bairro, casas de carnes gourmet e redes de supermercados em Manaus, Boa Vista e
              Fortaleza com balanças Toledo Prix homologadas pelo Inmetro, software MGV 7 e bobinas térmicas.
            </p>
          </Reveal>
        </div>

        {/* Mosaico de fotos reais de açougues e balanças Toledo em operação */}
        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {/* Foto principal: Casa de carnes real com vitrines refrigeradas e balança no balcão */}
          <Reveal className="lg:col-span-7">
            <div className="group relative isolate flex min-h-[380px] h-full flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 text-white sm:min-h-[440px] sm:p-8">
              <Image
                src="/images/ambientes/casa-de-carnes.jpg"
                alt="Casa de carnes equipada com balcões refrigerados e balança digital"
                fill
                sizes="(min-width:1024px) 680px, 95vw"
                className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,18,14,0.45)_0%,rgba(10,18,14,0.18)_40%,rgba(10,18,14,0.88)_100%)]"
              />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-white/90 px-3.5 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  Linha Açougue & Casa de Carnes
                </span>
                <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Pronta-entrega AM · RR · CE
                </span>
              </div>

              <div className="mt-auto pt-24">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
                  Operação integrada de balcão
                </p>
                <h4 className="h-display mt-1 text-3xl text-white sm:text-4xl">
                  Vitrines de carnes com pesagem e etiquetagem instantânea.
                </h4>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">
                  As balanças Toledo Prix 4 Due, Prix 5 W Plus e Prix 6 Touch trabalham em cima do balcão refrigerado ou
                  no check-stand central, enviando preços em rede pelo MGV 7 e imprimindo etiquetas térmicas resistentes
                  à umidade.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Coluna lateral com 3 fotos reais de balanças em açougue / assistência */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <Reveal delay={0.08}>
              <div className="group relative isolate flex min-h-[210px] flex-col justify-end overflow-hidden rounded-[1.75rem] p-5 text-white">
                <Image
                  src="/images/ambientes/acougue-balcao.jpg"
                  alt="Balcão de açougue carnes certificadas com balança Toledo"
                  fill
                  sizes="(min-width:1024px) 480px, 90vw"
                  className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,18,14,0.15)_0%,rgba(10,18,14,0.86)_100%)]"
                />
                <span className="mb-auto self-start rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-foreground">
                  Açougue · Carnes Certificadas
                </span>
                <p className="h-display mt-10 text-2xl text-white">Balcão de atendimento rápido</p>
                <p className="mt-1 text-xs text-white/85">
                  Pesagem direta sobre o expositor refrigerado com visor duplo para operador e cliente.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.14}>
                <div className="group relative isolate flex min-h-[205px] flex-col justify-end overflow-hidden rounded-[1.5rem] p-4 text-white">
                  <Image
                    src="/images/ambientes/prix6-carnes.jpg"
                    alt="Balança Toledo Prix 6 com tela mostrando cortes de carne e selo Inmetro"
                    fill
                    sizes="(min-width:1024px) 240px, 45vw"
                    className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,18,14,0.1)_0%,rgba(10,18,14,0.88)_100%)]"
                  />
                  <span className="mb-auto self-start rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    Prix 6 Touch
                  </span>
                  <p className="text-sm font-semibold text-white">Visor de Carnes & Ofertas</p>
                  <p className="mt-0.5 text-[11px] text-white/80">Tela colorida com selo oficial Inmetro.</p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="group relative isolate flex min-h-[205px] flex-col justify-end overflow-hidden rounded-[1.5rem] p-4 text-white">
                  <Image
                    src="/images/ambientes/manutencao-prix.jpg"
                    alt="Balança Toledo Prix 4 Due com impressora térmica de etiquetas aberta"
                    fill
                    sizes="(min-width:1024px) 240px, 45vw"
                    className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,18,14,0.1)_0%,rgba(10,18,14,0.88)_100%)]"
                  />
                  <span className="mb-auto self-start rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-foreground">
                    Prix 4 Due
                  </span>
                  <p className="text-sm font-semibold text-white">Impressora Integrada</p>
                  <p className="mt-0.5 text-[11px] text-white/80">Troca rápida de bobina térmica no balcão.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 3 cartões técnicos das etapas do açougue */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {ACOUGUE_SOLUTIONS.map((item, idx) => (
            <Reveal key={item.title} delay={0.06 * idx}>
              <div className="flex h-full flex-col justify-between rounded-2xl bg-paper p-5 ring-1 ring-line">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">{item.models}</span>
                    <CheckIcon className="h-4 w-4 text-brand" strokeWidth={2.5} />
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.desc}</p>
                </div>
                <a
                  href={whatsappLink(`Olá! Tenho um açougue e quero orçamento para ${item.title} (${item.models}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                >
                  Solicitar indicação para meu açougue
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TRUST_METRICS = [
  {
    icon: ScaleIcon,
    value: "Exclusiva no AM",
    label: "Revenda e assistência oficial Toledo em todo o Amazonas, Roraima e Ceará",
  },
  {
    icon: ToolIcon,
    value: "Oficina OTA",
    label: "Técnicos treinados pela fábrica, pesos-padrão calibrados e lacre oficial Inmetro",
  },
  {
    icon: LabelIcon,
    value: "Estoque Local",
    label: "Balanças Prix, cabeças térmicas, peças genuínas e bobinas de etiquetas a pronta-entrega",
  },
];

export function Quote() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] p-8 text-white sm:rounded-[2.5rem] sm:p-12 lg:p-16">
          <Image
            src="/images/ambientes/estoque-prix.jpg"
            alt="Estoque de balanças Toledo Prix na A5 Tecnologia"
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(10,18,14,0.92)_0%,rgba(10,18,14,0.80)_55%,rgba(10,95,180,0.72)_100%)]"
          />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <blockquote className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-white/90 ring-1 ring-white/25 backdrop-blur">
                Compromisso A5 Tecnologia
              </span>
              <p className="h-display on-photo mt-5 text-[clamp(2.1rem,4.5vw,3.6rem)] text-white">
                “Seriedade, agilidade e <em>confiança</em> nos produtos que revendemos e nos serviços que prestamos.”
              </p>
              <footer className="mt-5 text-sm text-white/80">
                A5 Tecnologia Balanças, Sistemas e Etiquetas Ltda · Manaus (AM), Boa Vista (RR) e Fortaleza (CE)
              </footer>
            </blockquote>

            <ul className="grid gap-3.5 lg:col-span-5">
              {TRUST_METRICS.map((m) => (
                <li
                  key={m.value}
                  className="flex items-start gap-3.5 rounded-2xl bg-white/14 p-4 ring-1 ring-white/25 backdrop-blur-md"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">{m.value}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/80">{m.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="p-3 sm:p-5">
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-10 text-center sm:pb-24">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-brand">
            Venda, Implantação & Pós-Venda
          </span>
          <h2 className="h-display mt-3 text-[clamp(2.2rem,4.8vw,3.8rem)]">
            Nenhuma balança para
            <br />
            sem <em>suporte técnico oficial.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            Trabalhamos com peças originais Toledo, cabeças térmicas, teclados de membrana, calibração certificada e
            atendimento direto nas unidades de Manaus, Boa Vista e Fortaleza.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-20 text-center text-white sm:rounded-[2.5rem] sm:px-12 sm:py-28">
          <Image
            src="/images/ambientes/acougue-vitrine.jpg"
            alt="Ambiente comercial equipado pela A5 Tecnologia"
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(14,26,20,0.78)_0%,rgba(14,26,20,0.68)_50%,rgba(10,36,68,0.88)_100%)]"
          />

          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-white ring-1 ring-white/30 backdrop-blur">
            Manaus (AM) · Boa Vista (RR) · Fortaleza (CE)
          </span>
          <h2 className="h-display on-photo mx-auto mt-6 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] text-white">
            Comece a semana com a
            <br />
            <em>balança pesando certo.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85">
            Fale agora com um consultor da A5 Tecnologia no WhatsApp para cotar balanças Prix novas, implantar o
            software MGV 7, pedir bobinas de etiquetas ou agendar assistência técnica autorizada.
          </p>

          <div className="mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-xs text-white/90">
            {[
              "Balanças Homologadas Inmetro",
              "Peças 100% Originais Toledo",
              "Fornecimento de Etiquetas Térmicas",
              "Suporte ao Software MGV 7",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 ring-1 ring-white/25 backdrop-blur"
              >
                <CheckIcon className="h-3.5 w-3.5 text-emerald-300" strokeWidth={2.5} />
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-foreground transition-transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              Solicitar orçamento agora
            </a>
            <a
              href="#lojas"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/18 px-7 text-[15px] font-medium text-white ring-1 ring-white/35 backdrop-blur transition-colors hover:bg-white/28"
            >
              Ver endereços e telefones das lojas
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
