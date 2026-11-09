"use client";

import { useMemo, useState } from "react";
import { COMPANY } from "@/data/site";
import { ArrowIcon, FacebookIcon, InstagramIcon } from "./icons";

export interface FeedItem {
  id: string;
  image?: string;
  caption?: string;
  permalink: string;
  date?: string;
  video?: boolean;
}

type Network = "instagram" | "facebook";

function formatDate(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });
}

export function SocialMarquee({
  instagram,
  facebook,
  live,
}: {
  instagram: FeedItem[];
  facebook: FeedItem[];
  /** true quando os itens vêm das APIs oficiais; false quando são fotos locais. */
  live: boolean;
}) {
  const available = useMemo(() => {
    const list: Network[] = [];
    if (instagram.length || COMPANY.instagram) list.push("instagram");
    if (facebook.length || COMPANY.facebook) list.push("facebook");
    return list;
  }, [instagram.length, facebook.length]);

  const [tab, setTab] = useState<Network>("instagram");
  const items = tab === "instagram" ? instagram : facebook;
  const profileUrl = tab === "instagram" ? COMPANY.instagram : COMPANY.facebook;
  const handle = tab === "instagram" ? COMPANY.instagramHandle : "A5 Tecnologia";

  // Duplica a lista para o loop contínuo; duração proporcional à quantidade.
  const loop = items.length ? [...items, ...items] : [];
  const duration = Math.max(40, items.length * 7);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label="Rede social" className="inline-flex self-start rounded-full border border-line bg-white p-1">
          {available.map((n) => (
            <button
              key={n}
              role="tab"
              aria-selected={tab === n}
              onClick={() => setTab(n)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors ${
                tab === n ? "bg-foreground text-white" : "text-muted hover:text-foreground"
              }`}
            >
              {n === "instagram" ? <InstagramIcon className="h-4 w-4" /> : <FacebookIcon className="h-4 w-4" />}
              {n === "instagram" ? "Instagram" : "Facebook"}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm">
          {live && items.length > 0 && (
            <span className="inline-flex items-center gap-2 text-muted">
              <span className="live-dot h-2.5 w-2.5 rounded-full bg-green-600" aria-hidden />
              Atualizado automaticamente
            </span>
          )}
          {profileUrl && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 font-medium text-brand hover:underline"
            >
              {handle}
              <ArrowIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {loop.length > 0 ? (
        <div
          className="marquee relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
          style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
        >
          <ul className="marquee-track">
            {loop.map((it, i) => (
              <li key={`${it.id}-${i}`} className="w-[260px] shrink-0 sm:w-[300px]" aria-hidden={i >= items.length}>
                <a
                  href={it.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={i >= items.length ? -1 : 0}
                  className="group block overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)]"
                >
                  <div className="relative aspect-square bg-surface">
                    {it.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={it.image}
                        alt={it.caption ? it.caption.slice(0, 110) : "Publicação da A5 Tecnologia"}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full place-items-center p-6 text-center text-sm text-muted">
                        {it.caption?.slice(0, 120)}
                      </div>
                    )}
                    {it.video && (
                      <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white">
                        Vídeo
                      </span>
                    )}
                  </div>
                  {(it.caption || it.date) && (
                    <div className="p-4">
                      {it.caption && <p className="line-clamp-3 text-sm leading-relaxed text-foreground/85">{it.caption}</p>}
                      {it.date && <p className="mt-2 text-xs text-muted">{formatDate(it.date)}</p>}
                    </div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-8 grid place-items-center rounded-3xl border border-dashed border-line bg-surface px-6 py-14 text-center">
          <p className="max-w-md text-muted">
            Acompanhe as novidades, entregas e instalações da A5 direto no nosso perfil.
          </p>
          {profileUrl && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-white hover:bg-brand"
            >
              Abrir {tab === "instagram" ? "Instagram" : "Facebook"}
              <ArrowIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
