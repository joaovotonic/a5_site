"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COMPANY, whatsappLink } from "@/data/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./Logo";

const NAV = [
  { href: "/#quem-somos", label: "Quem somos" },
  { href: "/#balancas", label: "Destaques" },
  { href: "/catalogo", label: "Catálogo Completo", highlight: true },
  { href: "/#suporte", label: "Suporte & Chamado" },
  { href: "/#mgv", label: "MGV" },
  { href: "/#avaliacoes", label: "Avaliações" },
  { href: "/#lojas", label: "Lojas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      setScrolled(y > 24);
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY + 4) {
        setHidden(true);
      } else if (y < lastY - 4) {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-3 top-3 z-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:inset-x-5 sm:top-5 ${
        hidden && !open ? "-translate-y-[calc(100%+1.5rem)]" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-auto flex h-[60px] max-w-7xl items-center justify-between rounded-full bg-white/90 pl-5 pr-2 backdrop-blur-md transition-shadow duration-300 sm:h-16 ${
          scrolled ? "shadow-[0_12px_40px_-16px_rgba(14,26,20,0.35)]" : "shadow-[0_6px_24px_-14px_rgba(14,26,20,0.25)]"
        }`}
      >
        <Link href="/" className="flex items-center" aria-label={`${COMPANY.name} — início`}>
          <Logo className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={
                n.highlight
                  ? "rounded-full bg-brand-soft px-3.5 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                  : "rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-white transition-colors hover:bg-brand sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir orçamento
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-full bg-background lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu móvel"
          className="mx-auto mt-2 max-w-7xl rounded-[1.75rem] bg-white p-5 shadow-[0_20px_50px_-20px_rgba(14,26,20,0.4)] lg:hidden"
        >
          <ul className="grid">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`h-display flex min-h-14 items-center border-b border-line text-2xl ${
                    n.highlight ? "font-semibold text-brand" : ""
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand text-base font-medium text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir orçamento no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
