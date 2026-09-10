import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { CONSULT_URL } from "@/lib/site";

type ConsultContextValue = { open: () => void; close: () => void; isOpen: boolean };

const ConsultContext = createContext<ConsultContextValue | null>(null);

export function useConsult() {
  const ctx = useContext(ConsultContext);
  if (!ctx) throw new Error("useConsult must be used inside <ConsultProvider>");
  return ctx;
}

const steps = [
  {
    title: "Tell me about the trip",
    body: "Where you're headed, rough dates, who's travelling, and the budget you have in mind.",
  },
  {
    title: "I come back with real options",
    body: "Hand-picked hotels, sailings, or routings — with the upgrades and credits attached.",
  },
  {
    title: "You approve, I book",
    body: "Nothing is charged through me. Same rates as booking direct, handled properly.",
  },
];

function Panel({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Book a consultation">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-[rgba(24,15,10,0.55)] backdrop-blur-[2px] motion-safe:animate-in motion-safe:fade-in"
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-[460px] flex-col overflow-y-auto bg-background shadow-[0_0_80px_-20px_rgba(24,15,10,0.7)] motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-300">
        <div className="flex items-center justify-between border-b border-border px-7 py-5">
          <span className="kicker mb-0">Free consultation</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-soft transition-colors hover:text-gold-deep"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={1.8}>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 flex-col px-7 py-8">
          <h2 className="text-[1.8rem] leading-[1.15]">Let's plan your trip.</h2>
          <p className="mt-4 text-[0.98rem] text-foreground-soft">
            The consult is free and takes about fifteen minutes. Here's exactly how it goes.
          </p>

          <ol className="mt-8 flex list-none flex-col gap-6 p-0">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="badge-gradient mt-[2px] flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-[0.9rem] text-cream">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-display text-[1.05rem]">{s.title}</span>
                  <span className="mt-1 block text-[0.92rem] text-foreground-soft">{s.body}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-auto pt-10">
            <a
              href={CONSULT_URL}
              target="_blank"
              rel="noopener"
              onClick={onClose}
              className="block w-full rounded-[3px] bg-primary px-6 py-4 text-center text-[0.98rem] text-primary-foreground transition-colors hover:bg-gold-deep"
            >
              Continue to the booking form
            </a>
            <p className="mt-3 text-center text-[0.8rem] text-foreground-soft">
              Opens Fora's secure intake form in a new tab — this page stays right here.
            </p>
            <a
              href="mailto:hello@jetsettravelco.com"
              className="mt-4 block text-center text-[0.88rem] text-foreground-soft underline hover:text-gold-deep"
            >
              Or just email me instead
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export function ConsultProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <ConsultContext.Provider value={value}>
      {children}
      {isOpen && <Panel onClose={close} />}
    </ConsultContext.Provider>
  );
}
