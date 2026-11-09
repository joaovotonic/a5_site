import { COMPANY } from "@/data/site";
import type { SocialFeed as Feed } from "@/lib/social";
import { Reveal } from "./Reveal";
import { SocialMarquee, type FeedItem } from "./SocialMarquee";

const CURATED_INSTAGRAM: FeedItem[] = [
  {
    id: "ig-1",
    image: "/images/redes/01-estoque-prix4-due.jpg",
    caption:
      "Lote de balanças Toledo Prix 4 Due conferido e pronto para entrega em açougues, padarias e supermercados. Equipamentos novos na caixa com garantia oficial.",
    permalink: COMPANY.instagram,
    date: "2026-10-28",
  },
  {
    id: "ig-2",
    image: "/images/redes/02-casa-de-carnes-balcao.jpg",
    caption:
      "Casa de carnes equipada com balcão refrigerado e pesagem Toledo Prix integrada. Velocidade no atendimento e etiqueta térmica com tabela nutricional.",
    permalink: COMPANY.instagram,
    date: "2026-10-24",
  },
  {
    id: "ig-3",
    image: "/images/redes/03-impressora-prix4-due.jpg",
    caption:
      "Detalhe do mecanismo impressor da Toledo Prix 4 Due em bancada técnica da A5 Tecnologia. Troca lateral rápida de bobina térmica e cabeça térmica original.",
    permalink: COMPANY.instagram,
    date: "2026-10-19",
  },
  {
    id: "ig-4",
    image: "/images/redes/04-acougue-carnes-certificadas.jpg",
    caption:
      "Projeto para açougue de carnes certificadas: balança computadora sobre o expositor com comunicação em rede Wi-Fi e cadastro completo de cortes.",
    permalink: COMPANY.instagram,
    date: "2026-10-14",
  },
  {
    id: "ig-5",
    image: "/images/redes/05-prix6-display-carnes.jpg",
    caption:
      "Toledo Prix 6 Touch com visor colorido de alta definição para o cliente e selo oficial de conformidade Inmetro. Ideal para açougues gourmet e padarias.",
    permalink: COMPANY.instagram,
    date: "2026-10-09",
  },
  {
    id: "ig-6",
    image: "/images/redes/06-prix5-plus-lacrada-inmetro.jpg",
    caption:
      "Balança Toledo Prix 5 Plus aferida, lacrada pelo Inmetro e pronta para operação pesada em supermercados e frigoríficos.",
    permalink: COMPANY.instagram,
    date: "2026-10-03",
  },
  {
    id: "ig-7",
    image: "/images/redes/07-oficina-tecnica-autorizada.jpg",
    caption:
      "A5 Tecnologia — Oficina Técnica Autorizada (OTA) Toledo Prix. Peças 100% genuínas, calibração certificada e atendimento em Manaus, Boa Vista e Fortaleza.",
    permalink: COMPANY.instagram,
    date: "2026-09-27",
  },
  {
    id: "ig-8",
    image: "/images/redes/08-software-mgv7-toledo.webp",
    caption:
      "Implantação e suporte ao software Toledo Prix MGV 7: atualize preços e informações nutricionais de todas as balanças da loja em segundos.",
    permalink: COMPANY.instagram,
    date: "2026-09-20",
  },
];

const CURATED_FACEBOOK: FeedItem[] = [
  {
    id: "fb-1",
    image: "/images/redes/04-acougue-carnes-certificadas.jpg",
    caption:
      "Soluções completas de pesagem e etiquetagem para açougues e frigoríficos em Manaus (AM), Boa Vista (RR) e Fortaleza (CE).",
    permalink: COMPANY.facebook || COMPANY.instagram,
    date: "2026-10-26",
  },
  {
    id: "fb-2",
    image: "/images/redes/01-estoque-prix4-due.jpg",
    caption:
      "Estoque local de balanças Toledo Prix 3, Prix 4, Prix 5 e Prix 6, além de bobinas térmicas adesivas para pronta-entrega.",
    permalink: COMPANY.facebook || COMPANY.instagram,
    date: "2026-10-21",
  },
  {
    id: "fb-3",
    image: "/images/redes/07-oficina-tecnica-autorizada.jpg",
    caption:
      "Precisa de manutenção preventiva, calibração ou troca de cabeça térmica? Conte com a Oficina Técnica Autorizada da A5 Tecnologia.",
    permalink: COMPANY.facebook || COMPANY.instagram,
    date: "2026-10-15",
  },
  {
    id: "fb-4",
    image: "/images/redes/05-prix6-display-carnes.jpg",
    caption:
      "Modernize o balcão do seu açougue ou padaria com a linha Toledo Prix 6 Touch e software MGV 7 em rede Wi-Fi.",
    permalink: COMPANY.facebook || COMPANY.instagram,
    date: "2026-10-08",
  },
  {
    id: "fb-5",
    image: "/images/redes/03-impressora-prix4-due.jpg",
    caption:
      "Revisão técnica completa com peças originais Toledo do Brasil e garantia de serviço nas nossas três unidades.",
    permalink: COMPANY.facebook || COMPANY.instagram,
    date: "2026-09-30",
  },
  {
    id: "fb-6",
    image: "/images/redes/02-casa-de-carnes-balcao.jpg",
    caption:
      "Do recebimento com a Toledo 2099 Inox até a etiqueta no balcão refrigerado: fale com nossos consultores pelo WhatsApp.",
    permalink: COMPANY.facebook || COMPANY.instagram,
    date: "2026-09-22",
  },
];

export function SocialFeed({ feed }: { feed: Feed }) {
  const toItems = (posts: Feed["instagram"]): FeedItem[] =>
    posts.map((p) => ({
      id: p.id,
      image: p.image,
      caption: p.caption,
      permalink: p.permalink,
      date: p.date,
      video: p.video,
    }));

  const instagram = feed.instagram.length ? toItems(feed.instagram) : CURATED_INSTAGRAM;
  const facebook = feed.facebook.length ? toItems(feed.facebook) : CURATED_FACEBOOK;

  return (
    <section id="redes" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-brand">Nas redes sociais</span>
          <h2 className="h-display mt-4 max-w-2xl text-[clamp(2.4rem,5vw,4.2rem)]">
            O dia a dia da A5, <em>rolando ao vivo.</em>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Acompanhe instalações em açougues e supermercados, lotes de balanças Toledo Prix recém-chegados e a rotina
            da nossa Oficina Técnica Autorizada no Instagram e no Facebook.
          </p>
        </Reveal>
        <div className="mt-10">
          <SocialMarquee instagram={instagram} facebook={facebook} live />
        </div>
      </div>
    </section>
  );
}
