"use client";

import Image from "next/image";
import { useState } from "react";
import { COMPANY, supportWhatsappLink } from "@/data/site";
import { CheckIcon, PhoneIcon, ScaleIcon, ToolIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

const SERVICE_TYPES = [
  "Chamado Externo (Visita Técnica na Loja)",
  "Suporte Remoto (MGV 7 / Rede / Etiquetas)",
  "Calibração, Aferição e Lacre Inmetro",
  "Manutenção em Bancada (OTA)",
] as const;

const SYMPTOMS = [
  "Falha na impressão / Etiqueta saindo em branco",
  "Balança não comunica na rede / MGV 7",
  "Peso oscilando ou descalibrada",
  "Lacre rompido / Notificação IPEM-Inmetro",
  "Balança de piso 2180 / Plataforma sem leitura",
  "Equipamento não liga / Falha no teclado",
  "Manutenção preventiva programada",
] as const;

const SUPPORT_PILLARS = [
  {
    title: "Chamado Técnico Externo (In-Loco)",
    desc: "Nossa equipe técnica vai até o seu açougue, supermercado, padaria ou frigorífico para atendimento no balcão, checkout e balanças de piso 2180.",
    badge: "Atendimento na sua loja",
  },
  {
    title: "Oficina Técnica Autorizada (OTA)",
    desc: "Técnicos credenciados com lacre oficial de manutenção, pesos-padrão calibrados e estoque local de cabeças térmicas, células de carga e teclados.",
    badge: "Peças 100% Originais",
  },
  {
    title: "Plantão MGV 7, Rede e Rotulagem",
    desc: "Suporte para destravar carga de preços via Wi-Fi/Ethernet, configurar tabela nutricional RDC 429 Anvisa e integração com sistemas ERP e PDV.",
    badge: "Remoto ou Presencial",
  },
];

export function SupportTicket() {
  const [serviceType, setServiceType] = useState<string>(SERVICE_TYPES[0]);
  const [symptom, setSymptom] = useState<string>(SYMPTOMS[0]);
  const [equipment, setEquipment] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("Manaus - AM");

  const buildTicketMessage = () => {
    const lines = [
      "🔧 *SOLICITAÇÃO DE CHAMADO TÉCNICO / SUPORTE — A5 TECNOLOGIA*",
      "",
      `• *Modalidade:* ${serviceType}`,
      `• *Ocorrência:* ${symptom}`,
      equipment.trim() ? `• *Equipamento / Modelo:* ${equipment.trim()}` : null,
      companyName.trim() ? `• *Empresa / Cliente:* ${companyName.trim()}` : null,
      location.trim() ? `• *Unidade / Localidade:* ${location.trim()}` : null,
      "",
      "Pode me informar a disponibilidade de atendimento?",
    ].filter(Boolean);

    return lines.join("\n");
  };

  return (
    <section id="suporte" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-brand">
                <ToolIcon className="h-3.5 w-3.5" />
                Assistência Técnica & Chamado Externo
              </span>
              <h2 className="h-display mt-4 text-[clamp(2.4rem,5vw,4.3rem)]">
                Balança parada no balcão? <em>Abra um chamado técnico agora.</em>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Solicite visita técnica externa na sua loja, aferição com pesos-padrão ou suporte para rede e software MGV 7 direto no WhatsApp da assistência técnica.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Coluna Esquerda: Informações do Suporte Externo + Fotos Reais da OTA */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-6">
            {/* Card Principal com Foto de Manutenção Real + Número Direto */}
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground p-7 text-white sm:p-9">
              <Image
                src="/images/ambientes/manutencao-prix.jpg"
                alt="Manutenção técnica de balança Toledo Prix"
                fill
                sizes="(min-width:1024px) 580px, 100vw"
                className="-z-20 object-cover opacity-40"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(6,20,36,0.94)_0%,rgba(8,46,84,0.82)_55%,rgba(6,20,36,0.92)_100%)]"
              />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/25 backdrop-blur-md">
                  <span className="live-dot h-2 w-2 rounded-full bg-emerald-400" />
                  Central de Chamados A5
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#82c8ff] ring-1 ring-white/20">
                  OTA Credenciada Toledo
                </span>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/75">
                WhatsApp Exclusivo de Suporte & Chamado Externo
              </p>
              <p className="h-display on-photo mt-1 text-4xl text-white sm:text-5xl">
                {COMPANY.supportMobile}
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                Atendimento ágil para chamadas urgentes de balanças comerciais Prix, frentes de caixa, balanças de piso 2180, Balmak, Marte e fatiadores.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={supportWhatsappLink(
                    "Olá! Preciso solicitar um chamado técnico / suporte imediato para minha balança."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chamar suporte direto: {COMPANY.supportMobile}
                </a>
                <a
                  href={`tel:+${COMPANY.supportWhatsapp}`}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white/15 px-5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-md transition-colors hover:bg-white/25"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Ligar para o suporte
                </a>
              </div>
            </div>

            {/* 3 Pilares de Atendimento Técnico */}
            <div className="grid gap-4">
              {SUPPORT_PILLARS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-line bg-white p-5 transition-colors hover:border-brand/40 sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className="rounded-full bg-brand-soft px-3 py-0.5 text-[11px] font-semibold text-brand">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Direita: Formulário Interativo para Abrir Chamado no WhatsApp 92 98528-0101 */}
          <div className="lg:col-span-6">
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-line bg-white p-6 shadow-[0_24px_60px_-32px_rgba(14,26,20,0.22)] sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-line pb-5">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                      Abertura Rápida de Ordem de Serviço
                    </span>
                    <h3 className="h-display mt-1 text-3xl text-foreground">
                      Solicitar Chamado Externo ou Suporte
                    </h3>
                  </div>
                  <div className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand sm:grid">
                    <ScaleIcon className="h-6 w-6" />
                  </div>
                </div>

                {/* 1. Modalidade do chamado */}
                <div className="mt-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                    1. Tipo de atendimento desejado
                  </label>
                  <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                    {SERVICE_TYPES.map((type) => {
                      const active = serviceType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setServiceType(type)}
                          className={`flex items-center gap-2 rounded-2xl border px-3.5 py-3 text-left text-xs font-medium transition-all ${
                            active
                              ? "border-brand bg-brand-soft/70 font-semibold text-brand shadow-xs"
                              : "border-line bg-paper text-foreground/80 hover:border-foreground/40"
                          }`}
                        >
                          <span
                            className={`grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                              active ? "bg-brand text-white" : "border border-line bg-white"
                            }`}
                          >
                            {active && <CheckIcon className="h-2.5 w-2.5" strokeWidth={3} />}
                          </span>
                          <span>{type}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Sintoma / Ocorrência */}
                <div className="mt-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                    2. O que está acontecendo com o equipamento?
                  </label>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {SYMPTOMS.map((sym) => {
                      const active = symptom === sym;
                      return (
                        <button
                          key={sym}
                          type="button"
                          onClick={() => setSymptom(sym)}
                          className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                            active
                              ? "bg-foreground text-white"
                              : "bg-surface text-foreground/80 hover:bg-line/70"
                          }`}
                        >
                          {sym}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Dados opcionais para agilizar o técnico */}
                <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="ticket-equip"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted"
                    >
                      Modelo da Balança / Equipamento
                    </label>
                    <input
                      id="ticket-equip"
                      type="text"
                      value={equipment}
                      onChange={(e) => setEquipment(e.target.value)}
                      placeholder="Ex.: Prix 4 Due, Piso 2180, Prix 5..."
                      className="mt-1.5 h-11 w-full rounded-xl border border-line bg-paper px-3.5 text-sm text-foreground placeholder:text-muted/70 focus:border-brand focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ticket-company"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted"
                    >
                      Nome do Comércio / Empresa
                    </label>
                    <input
                      id="ticket-company"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Ex.: Açougue Boi Dourado"
                      className="mt-1.5 h-11 w-full rounded-xl border border-line bg-paper px-3.5 text-sm text-foreground placeholder:text-muted/70 focus:border-brand focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-3.5">
                  <label
                    htmlFor="ticket-location"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted"
                  >
                    Cidade / Bairro para visita técnica
                  </label>
                  <input
                    id="ticket-location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex.: Manaus - Centro / Boa Vista / Fortaleza"
                    className="mt-1.5 h-11 w-full rounded-xl border border-line bg-paper px-3.5 text-sm text-foreground placeholder:text-muted/70 focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Botão de Envio Direto para 92 98528-0101 */}
              <div className="mt-6 border-t border-line pt-5">
                <a
                  href={supportWhatsappLink(buildTicketMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-brand px-6 text-base font-semibold text-white shadow-md transition-all hover:bg-brand-dark hover:scale-[1.01]"
                >
                  <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                  Enviar Chamado no WhatsApp {COMPANY.supportMobile}
                </a>
                <p className="mt-2.5 text-center text-xs text-muted">
                  Sua solicitação abre diretamente no WhatsApp do setor de Suporte Técnico e Chamado Externo ({COMPANY.supportMobile}).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
