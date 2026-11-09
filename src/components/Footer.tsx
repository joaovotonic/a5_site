import { COMPANY } from "@/data/site";
import { FacebookIcon, InstagramIcon } from "./icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <Logo className="h-10 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Revenda e assistência técnica Toledo. Balanças, sistemas e etiquetas em Manaus, Boa Vista e Fortaleza.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da A5 Tecnologia"
              className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:border-brand hover:text-brand"
            >
              <InstagramIcon />
            </a>
            {COMPANY.facebook && (
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da A5 Tecnologia"
                className="grid h-11 w-11 place-items-center rounded-full border border-line transition-colors hover:border-brand hover:text-brand"
              >
                <FacebookIcon />
              </a>
            )}
          </div>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">Navegação</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["/#quem-somos", "Quem somos"],
              ["/#balancas", "Destaques na Home"],
              ["/catalogo", "Catálogo Completo (43 itens)"],
              ["/#suporte", "Chamado Externo & Suporte"],
              ["/#mgv", "Software MGV 7"],
              ["/#redes", "Redes sociais"],
              ["/#avaliacoes", "Avaliações"],
              ["/#lojas", "Lojas"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">Contato & Suporte</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>Comercial: {COMPANY.phone} · {COMPANY.mobile}</li>
            <li>
              <a
                href={`https://wa.me/${COMPANY.supportWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:underline"
              >
                Suporte / Chamado Externo: {COMPANY.supportMobile}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-brand">
                {COMPANY.email}
              </a>
            </li>
            <li className="text-muted">Matriz Manaus: Rua Comendador Clementino, 379 – Boulevard</li>
            <li className="text-muted">Filial A5 Comércio: Av. Joaquim Nabuco, 186 – Centro, Manaus/AM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted sm:px-8">
          © {COMPANY.legalName}. Toledo e Prix são marcas da Toledo do Brasil.
        </p>
      </div>
    </footer>
  );
}
