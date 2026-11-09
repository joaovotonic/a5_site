import { cacheLife } from "next/cache";

export interface SocialPost {
  id: string;
  network: "instagram" | "facebook";
  image?: string;
  caption: string;
  permalink: string;
  date: string;
  video?: boolean;
}

interface IgMedia {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

interface FbPost {
  id: string;
  message?: string;
  full_picture?: string;
  permalink_url: string;
  created_time: string;
}

/**
 * Instagram Graph API (conta Business/Creator).
 * Requer INSTAGRAM_ACCESS_TOKEN no .env.local.
 */
async function fetchInstagram(): Promise<SocialPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];
  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=12&access_token=${token}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Instagram API ${res.status}`);
  const json = (await res.json()) as { data?: IgMedia[] };
  return (json.data ?? []).map((m) => ({
    id: m.id,
    network: "instagram" as const,
    image: m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url,
    caption: m.caption ?? "",
    permalink: m.permalink,
    date: m.timestamp,
    video: m.media_type === "VIDEO",
  }));
}

/**
 * Facebook Graph API (página).
 * Requer FACEBOOK_PAGE_ID e FACEBOOK_PAGE_TOKEN no .env.local.
 */
async function fetchFacebook(): Promise<SocialPost[]> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const token = process.env.FACEBOOK_PAGE_TOKEN;
  if (!pageId || !token) return [];
  const fields = "id,message,full_picture,permalink_url,created_time";
  const url = `https://graph.facebook.com/v21.0/${pageId}/posts?fields=${fields}&limit=12&access_token=${token}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Facebook API ${res.status}`);
  const json = (await res.json()) as { data?: FbPost[] };
  return (json.data ?? []).map((p) => ({
    id: p.id,
    network: "facebook" as const,
    image: p.full_picture,
    caption: p.message ?? "",
    permalink: p.permalink_url,
    date: p.created_time,
  }));
}

export interface SocialFeed {
  instagram: SocialPost[];
  facebook: SocialPost[];
}

/** Posts reais das redes (cache de ~1h). Sem credenciais → listas vazias. */
export async function getSocialFeed(): Promise<SocialFeed> {
  "use cache";
  cacheLife("hours");

  const [instagram, facebook] = await Promise.all([
    fetchInstagram().catch(() => []),
    fetchFacebook().catch(() => []),
  ]);
  return { instagram, facebook };
}
