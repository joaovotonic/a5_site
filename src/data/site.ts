/**
 * Dados institucionais da A5 Tecnologia.
 * Tudo que estiver como `undefined` NÃO é exibido no site (nada é inventado).
 * Preencha quando tiver a informação confirmada.
 */

export const COMPANY = {
  name: "A5 Tecnologia",
  legalName: "A5 Tecnologia Balanças, Sistemas e Etiquetas",
  whatsapp: "5592999752315",
  phone: "(92) 3342-2315",
  mobile: "(92) 99975-2315",
  supportWhatsapp: "5592985280101",
  supportMobile: "(92) 98528-0101",
  email: "comercial@a5tecnologia.com.br",
  instagram: "https://www.instagram.com/a5_tecnologia_balancas/",
  instagramHandle: "@a5_tecnologia_balancas",
  /** Defina NEXT_PUBLIC_FACEBOOK_URL no .env.local com a URL da página oficial. */
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || undefined,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export function whatsappLink(message = "Olá! Gostaria de um orçamento de balanças.") {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function supportWhatsappLink(
  message = "Olá! Preciso abrir um chamado técnico / suporte na A5 Tecnologia."
) {
  return `https://wa.me/${COMPANY.supportWhatsapp}?text=${encodeURIComponent(message)}`;
}

export interface Store {
  id: string;
  title?: string;
  city: string;
  uf: string;
  role: string;
  address?: string;
  hours?: string;
  phone?: string;
  whatsapp?: string;
  /** Nome da variável de ambiente com o Place ID do Google desta unidade. */
  placeIdEnv: string;
}

export const STORES: Store[] = [
  {
    id: "manaus",
    title: "A5 Tecnologia · Matriz",
    city: "Manaus",
    uf: "AM",
    role: "Matriz · Boulevard",
    address: "Rua Comendador Clementino, 379 – Boulevard",
    hours: "Segunda a sexta, das 07h30 às 17h00",
    phone: COMPANY.phone,
    whatsapp: COMPANY.whatsapp,
    placeIdEnv: "GOOGLE_PLACE_ID_MANAUS",
  },
  {
    id: "manaus-filial",
    title: "A5 Comércio · Filial",
    city: "Manaus",
    uf: "AM",
    role: "Filial · Joaquim Nabuco",
    address: "Av. Joaquim Nabuco, 186 — Centro, CEP 69005-080",
    hours: "Segunda a sexta, das 07h30 às 17h00",
    phone: "(92) 3342-2315",
    whatsapp: COMPANY.whatsapp,
    placeIdEnv: "GOOGLE_PLACE_ID_MANAUS_FILIAL",
  },
  {
    id: "boa-vista",
    title: "Unidade Boa Vista",
    city: "Boa Vista",
    uf: "RR",
    role: "Unidade Roraima",
    address: "Rua Cerejo Cruz, nº 964 — Centro, CEP 69301-060",
    phone: "(95) 98420-7306",
    whatsapp: "5595984207306",
    placeIdEnv: "GOOGLE_PLACE_ID_BOA_VISTA",
  },
  {
    id: "fortaleza",
    title: "Unidade Fortaleza",
    city: "Fortaleza",
    uf: "CE",
    role: "Unidade Ceará",
    address: "Edifício Cidade, R. Padre Mororó, 862 - Térreo - Centro, CEP 60030-141",
    phone: "(85) 97401-0077",
    whatsapp: "5585974010077",
    placeIdEnv: "GOOGLE_PLACE_ID_FORTALEZA",
  },
];

export function mapsSearchUrl(store: Store) {
  const q = store.address
    ? `${store.address}, ${store.city} - ${store.uf}`
    : `A5 Tecnologia balanças ${store.city} ${store.uf}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

export function mapsEmbedUrl(store: Store) {
  const q = store.address
    ? `${store.address}, ${store.city} - ${store.uf}`
    : `A5 Tecnologia balanças ${store.city} ${store.uf}`;
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
}
