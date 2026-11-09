import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { findImage } from "@/lib/images";
import { ArrowIcon } from "./icons";
import { ProductsGrid } from "./ProductsGrid";
import { Reveal } from "./Reveal";

export function Products() {
  const products = PRODUCTS.map((p) => ({ ...p, image: findImage("produtos", p.slug) }));

  return (
    <section id="balancas" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-brand">
                Toledo · Balmak · Marte · Skymsen
              </span>
              <h2 className="h-display mt-4 text-[clamp(2.4rem,5vw,4.2rem)]">
                O equipamento certo para cada <em>tipo de operação.</em>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end lg:text-right">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Balanças comerciais e de piso 2180 Toledo, linha Balmak, balanças de precisão Marte e fatiadores Skymsen.
              </p>
              <Link
                href="/catalogo"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-white transition-colors hover:bg-brand"
              >
                Ver catálogo completo ({products.length} produtos)
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
        <div className="mt-12">
          <ProductsGrid products={products} mode="home" />
        </div>
      </div>
    </section>
  );
}
