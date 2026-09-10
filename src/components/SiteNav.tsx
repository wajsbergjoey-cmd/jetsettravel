import logo from "@/assets/logo.png.asset.json";
import { CONSULT_URL } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#perks", label: "Perks" },
  { href: "#trips", label: "Recent trips" },
  { href: "#reviews", label: "Reviews" },
  { href: "#consult", label: "Contact" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-[rgba(245,237,225,0.92)] backdrop-blur-[8px]">
      <div className="wrap flex h-[74px] items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logo.url} alt="Jet Set Travel Co." className="block h-12 w-auto" />
        </a>
        <div className="hidden gap-[34px] text-[0.92rem] text-foreground-soft md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-gold-deep">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={CONSULT_URL}
          target="_blank"
          rel="noopener"
          className="inline-block rounded-[3px] bg-primary px-5 py-[10px] text-[0.88rem] tracking-[0.01em] text-primary-foreground transition-colors hover:bg-gold-deep"
        >
          Book a consult
        </a>
      </div>
    </nav>
  );
}
