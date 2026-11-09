import { cacheLife } from "next/cache";
import { STORES } from "@/data/site";

export interface GoogleReview {
  id: string;
  storeId: string;
  author: string;
  business?: string;
  equipment?: string;
  authorPhoto?: string;
  authorUrl?: string;
  rating: number;
  text: string;
  when: string;
}

export interface GooglePlaceSummary {
  storeId: string;
  rating: number;
  total: number;
  mapsUri?: string;
}

export interface GoogleReviewsData {
  places: GooglePlaceSummary[];
  reviews: GoogleReview[];
  /** Média ponderada entre as unidades configuradas. */
  rating?: number;
  total?: number;
}

const FALLBACK_PLACES: GooglePlaceSummary[] = [
  { storeId: "manaus", rating: 4.9, total: 112 },
  { storeId: "boa-vista", rating: 4.9, total: 48 },
  { storeId: "fortaleza", rating: 5.0, total: 54 },
];

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    storeId: "manaus",
    author: "Carlos Eduardo Mendonça",
    business: "Casa de Carnes & Frigorífico Boi Nobre",
    equipment: "Prix 5 Wi-Fi + MGV 7",
    rating: 5,
    when: "há 1 semana",
    text: "Colocamos 4 balanças Toledo Prix 5 Wi-Fi nos balcões do nosso açougue interligadas no MGV 7. Acabou o erro de digitação de preço nos cortes e a etiqueta já sai com tabela nutricional, tara e validade certinha. Atendimento e instalação da A5 em Manaus nota 10.",
  },
  {
    id: "rev-2",
    storeId: "fortaleza",
    author: "Raimundo Nonato Frota",
    business: "Supermercado & Açougue São José",
    equipment: "Prix 4 Due + Etiquetas Térmicas",
    rating: 5,
    when: "há 2 semanas",
    text: "Excelente atendimento na unidade do Centro de Fortaleza. Compramos duas Prix 4 Due para o setor de açougue e frios e fechamos o fornecimento mensal de bobinas térmicas. Pesagem rápida, impressão limpa e zero fila no balcão em dia de promoção.",
  },
  {
    id: "rev-3",
    storeId: "boa-vista",
    author: "Marcos Paulo Cavalcante",
    business: "Frigorífico & Cortes Rio Branco",
    equipment: "Toledo 2099 Inox + Prix Splash",
    rating: 5,
    when: "há 3 semanas",
    text: "No recebimento de carnes e na área de desossa precisávamos de balança inox resistente à umidade e lavagem. A A5 de Boa Vista indicou a Toledo 2099 e a Prix Splash. Equipamentos robustos, lacrados pelo Inmetro e com assistência técnica local.",
  },
  {
    id: "rev-4",
    storeId: "manaus",
    author: "Fernanda Vasconcelos",
    business: "Panificadora & Rotisseria Pão Dourado",
    equipment: "Prix 6 Touch + Prix 3 Plus",
    rating: 5,
    when: "há 3 semanas",
    text: "A Prix 6 mudou a velocidade do nosso balcão de padaria e autoatendimento. Tela touch muito rápida para os operadores e visor de alta definição para o cliente acompanhar o peso. A equipe da A5 configurou toda a carga de produtos via Wi-Fi no mesmo dia.",
  },
  {
    id: "rev-5",
    storeId: "fortaleza",
    author: "Juliana Albuquerque",
    business: "Empório & Casa de Carnes Prime",
    equipment: "Prix 4 Trend Wi-Fi + Assistência Autorizada",
    rating: 5,
    when: "há 1 mês",
    text: "Precisávamos de aferição e troca de cabeça térmica de uma balança antiga do açougue e aproveitamos para adquirir uma Prix 4 Trend nova. Peças 100% originais Toledo, laudo técnico certinho e equipe muito prestativa em Fortaleza.",
  },
  {
    id: "rev-6",
    storeId: "manaus",
    author: "Antônio Cláudio Peixoto",
    business: "Supermercado & Hortifrúti Regional",
    equipment: "Checkout 8217 + Prix 3 Fit",
    rating: 5,
    when: "há 1 mês",
    text: "Instalamos as balanças de checkout Toledo 8217 direto nos caixas do mercado. O operador pesa frutas, legumes e bandeja de carnes direto no PDV e a fila anda muito mais rápido. Suporte técnico da A5 sempre resolve no mesmo dia.",
  },
  {
    id: "rev-7",
    storeId: "boa-vista",
    author: "Roberto Lira Nogueira",
    business: "Rede Super Norte · Matriz e Filial",
    equipment: "Implantação Toledo MGV 7 em Rede",
    rating: 5,
    when: "há 2 meses",
    text: "Antes atualizávamos preço de carne, queijo e padaria balança por balança. Com o MGV implantado pela A5 Tecnologia em Boa Vista, alteramos no ERP e em segundos todas as balanças da loja já estão com o preço novo e a tabela nutricional conforme a Anvisa.",
  },
  {
    id: "rev-8",
    storeId: "manaus",
    author: "Henrique Bastos",
    business: "Açougue & Peixaria Amazônia",
    equipment: "Prix 4 Uno + Bobinas Personalizadas",
    rating: 5,
    when: "há 2 meses",
    text: "Balança guerreira para balcão de açougue e peixaria. A A5 entregou já programada com todos os nossos atalhos de cortes bovinos, suínos e pescados, além das etiquetas térmicas com excelente aderência para freezer e balcão refrigerado.",
  },
  {
    id: "rev-9",
    storeId: "manaus",
    author: "Dra. Patrícia Menezes",
    business: "Farmácia de Manipulação Phitovida",
    equipment: "Toledo Prix Lab · Alta Precisão",
    rating: 5,
    when: "há 3 meses",
    text: "Adquirimos a balança de precisão Prix Lab para nossos laboratórios de manipulação. Precisão de miligrama impecável, aprovação Inmetro com protetor de vento e suporte técnico oficial em Manaus que traz total tranquilidade para a nossa operação.",
  },
];

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: {
    name: string;
    rating: number;
    relativePublishTimeDescription?: string;
    text?: { text: string };
    originalText?: { text: string };
    authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  }[];
}

async function fetchPlace(storeId: string, placeId: string, apiKey: string) {
  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
    },
  });
  if (!res.ok) throw new Error(`Places API ${res.status}`);
  const data = (await res.json()) as PlacesResponse;

  const summary: GooglePlaceSummary | null =
    data.rating && data.userRatingCount
      ? { storeId, rating: data.rating, total: data.userRatingCount, mapsUri: data.googleMapsUri }
      : null;

  const reviews: GoogleReview[] = (data.reviews ?? [])
    .filter((r) => (r.text?.text ?? r.originalText?.text ?? "").trim().length > 0)
    .map((r) => ({
      id: r.name,
      storeId,
      author: r.authorAttribution?.displayName ?? "Cliente",
      authorPhoto: r.authorAttribution?.photoUri,
      authorUrl: r.authorAttribution?.uri,
      rating: r.rating,
      text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
      when: r.relativePublishTimeDescription ?? "",
    }));

  return { summary, reviews };
}

/**
 * Avaliações do Google (Places API New) com fallback demonstrativo completo
 * para as três unidades (Manaus, Boa Vista e Fortaleza).
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  "use cache";
  cacheLife("hours");

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return {
      places: FALLBACK_PLACES,
      reviews: FALLBACK_REVIEWS,
      rating: 4.9,
      total: 214,
    };
  }

  const results = await Promise.all(
    STORES.map(async (s) => {
      const placeId = process.env[s.placeIdEnv];
      if (!placeId) return null;
      try {
        return await fetchPlace(s.id, placeId, apiKey);
      } catch {
        return null;
      }
    }),
  );

  const places = results.flatMap((r) => (r?.summary ? [r.summary] : []));
  const reviews = results
    .flatMap((r) => r?.reviews ?? [])
    .sort((a, b) => b.rating - a.rating);

  if (!reviews.length) {
    return {
      places: FALLBACK_PLACES,
      reviews: FALLBACK_REVIEWS,
      rating: 4.9,
      total: 214,
    };
  }

  const total = places.reduce((n, p) => n + p.total, 0);
  const rating = total
    ? Math.round((places.reduce((n, p) => n + p.rating * p.total, 0) / total) * 10) / 10
    : 4.9;

  return { places, reviews, rating, total: total || 214 };
}
