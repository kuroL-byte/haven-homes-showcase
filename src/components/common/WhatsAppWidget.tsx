import { brand } from "@/theme";

export function WhatsAppWidget() {
  return (
    <a
      href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
        "Hello Parjane Buildcon, I would like to request project details and schedule a private site visit.",
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp with Parjane Buildcon"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-green-400/40 bg-emerald-600 px-4 py-3 text-white shadow-2xl shadow-emerald-600/40 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-emerald-700"
    >
      <span className="grid size-8 place-items-center rounded-full bg-white text-emerald-600 font-bold text-lg">
        💬
      </span>
      <div className="hidden sm:block text-left pr-1">
        <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-200">
          Parjane Sales Desk
        </p>
        <p className="text-xs font-extrabold text-white">Chat on WhatsApp</p>
      </div>
    </a>
  );
}
