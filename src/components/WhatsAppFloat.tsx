import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a A5 Tecnologia no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.8)] transition-transform hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
