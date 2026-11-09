import Image from "next/image";
import { COMPANY, STORES, mapsEmbedUrl, mapsSearchUrl, whatsappLink } from "@/data/site";
import { findImage } from "@/lib/images";
import { ArrowIcon, CheckIcon, ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

const STORE_SERVICES: Record<string, string[]> = {
  manaus: [
    "Matriz · Exclusiva Toledo no Amazonas",
    "Oficina Técnica Autorizada (OTA) completa",
    "Showroom de balanças Prix 3, 4, 5, 6, 7, Bancada e Piso 2180",
    "Estoque de bobinas térmicas e peças originais",
  ],
  "manaus-filial": [
    "Filial A5 Comércio no Centro de Manaus (Av. Joaquim Nabuco)",
    "Venda a pronta-entrega de balanças Toledo, Balmak, Marte e fatiadores",
    "Retirada rápida de bobinas de etiquetas térmicas e suprimentos",
    "Recebimento de equipamentos para assistência técnica e aferição",
  ],
  "boa-vista": [
    "Atendimento em Boa Vista e todo o estado de Roraima",
    "Venda de balanças Toledo Prix e suporte ao MGV 7",
    "Manutenção técnica, aferição e reposição de peças",
    "Fornecimento de etiquetas térmicas para açougues e mercados",
  ],
  fortaleza: [
    "Unidade no Centro de Fortaleza · Atendimento no Ceará",
    "Balanças comerciais Prix para açougues, padarias e varejo",
    "Assistência técnica especializada e cabeças térmicas",
    "Implantação de rede Wi-Fi, MGV 7 e bobinas adesivas",
  ],
};

export function Stores() {
  return (
    <section id="lojas" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-brand">Nossas 4 unidades físicas</span>
          <h2 className="h-display mt-4 max-w-2xl text-[clamp(2.4rem,5vw,4.2rem)]">
            Perto de você, em <em>três capitais.</em>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Duas unidades em Manaus (Matriz Comendador Clementino e Filial A5 Comércio na Av. Joaquim Nabuco), além das unidades de Boa Vista (RR) e Fortaleza (CE).
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {STORES.map((s, i) => {
            const photo = findImage("lojas", s.id);
            const wa = s.whatsapp ?? undefined;
            const services = STORE_SERVICES[s.id] ?? [];
            return (
              <li key={s.id}>
                <Reveal delay={0.06 * i} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_40px_-28px_rgba(14,26,20,0.25)]">
                    <div className="relative aspect-[16/9] bg-[linear-gradient(135deg,#e8f1fb,#f6f8fb)]">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={`Loja da A5 Tecnologia em ${s.city}`}
                          fill
                          sizes="(min-width:1024px) 580px, 90vw"
                          className="object-cover"
                        />
                      ) : s.address ? (
                        <iframe
                          title={`Mapa — ${s.title ?? s.city}`}
                          src={mapsEmbedUrl(s)}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="h-full w-full border-0"
                        />
                      ) : (
                        <div className="grid h-full place-items-center">
                          <span className="text-6xl font-semibold tracking-tight text-brand/80">{s.uf}</span>
                        </div>
                      )}
                      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand shadow-sm ring-1 ring-line">
                        {s.role}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="h-display text-3xl leading-none sm:text-4xl">
                        {s.title ?? s.city} <span className="text-muted">· {s.uf}</span>
                      </h3>

                      <ul className="mt-5 space-y-3 text-[14.5px]">
                        <li className="flex gap-3">
                          <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                          <span>
                            {s.address ?? "Chame no WhatsApp para saber o endereço e o atendimento da unidade."}
                          </span>
                        </li>
                        {s.hours && (
                          <li className="flex gap-3">
                            <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                            <span>{s.hours}</span>
                          </li>
                        )}
                        {s.phone && (
                          <li className="flex gap-3">
                            <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                            <span className="font-medium">
                              <a href={`tel:+55${s.phone.replace(/\D/g, "")}`} className="hover:underline">
                                {s.phone}
                              </a>
                              {(s.id === "manaus" || s.id === "manaus-filial") && (
                                <>
                                  {" · "}
                                  <a href={`tel:+55${COMPANY.mobile.replace(/\D/g, "")}`} className="hover:underline">
                                    {COMPANY.mobile}
                                  </a>
                                </>
                              )}
                            </span>
                          </li>
                        )}
                      </ul>

                      {services.length > 0 && (
                        <ul className="mt-5 space-y-1.5 rounded-2xl bg-paper p-4 text-xs text-foreground/85 ring-1 ring-line/80">
                          {services.map((srv) => (
                            <li key={srv} className="flex items-start gap-2">
                              <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={2.5} />
                              <span>{srv}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-auto flex flex-col gap-2 pt-6 sm:flex-row">
                        <a
                          href={
                            wa
                              ? `https://wa.me/${wa}`
                              : whatsappLink(`Olá! Gostaria de atendimento da unidade de ${s.city}.`)
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          WhatsApp {s.city}
                        </a>
                        <a
                          href={mapsSearchUrl(s)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-line px-5 text-sm font-medium transition-colors hover:border-foreground"
                        >
                          Como chegar
                          <ArrowIcon className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
