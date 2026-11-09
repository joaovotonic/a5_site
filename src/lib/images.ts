import fs from "node:fs";
import path from "node:path";

const EXT = /\.(png|jpe?g|webp|avif)$/i;

/** Lista as imagens de public/images/<dir> (ordem alfabética). Retorna caminhos públicos. */
export function listImages(dir: string): string[] {
  try {
    const abs = path.join(process.cwd(), "public", "images", dir);
    return fs
      .readdirSync(abs)
      .filter((f) => EXT.test(f))
      .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }))
      .map((f) => `/images/${dir}/${f}`);
  } catch {
    return [];
  }
}

/** Primeira imagem cujo nome (sem extensão) corresponde exatamente ao prefixo, ou começa com prefixo-. */
export function findImage(dir: string, prefix: string): string | undefined {
  const all = listImages(dir);
  const target = prefix.toLowerCase();
  const exact = all.find((p) => p.split("/").pop()!.replace(EXT, "").toLowerCase() === target);
  if (exact) return exact;
  return all.find((p) => p.split("/").pop()!.replace(EXT, "").toLowerCase().startsWith(`${target}-`));
}
