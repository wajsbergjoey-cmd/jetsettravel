import heroImg from "@/assets/hero.jpg.asset.json";
import { CONSULT_URL } from "@/lib/site";

const stats = [
  { value: "Fora", label: "Advisor network" },
  { value: "0", label: "Extra cost to you" },
  { value: "24/7", label: "A real person to call" },
];

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[620px] items-end overflow-hidden md:min-h-[720px]"
    >
      <img
        src={heroImg.url}
        alt="Cliffside resort infinity pool overlooking the sea at golden hour"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-veil absolute inset-0" aria-hidden="true" />

      <div className="relative z-[2] w-full pt-[120px] pb-[70px] md:pt-[160px]">
        <div className="wrap">
          <div className="hero-eyebrow mb-6 inline-flex items-center gap-[10px] rounded-full px-4 py-[7px] text-[0.8rem] tracking-[0.14em] text-cream uppercase">
            <span className="h-[6px] w-[6px] rounded-full bg-amber" />
            Travel advisor — hotels, cruises &amp; flights
          </div>
          <h1 className="max-w-[13ch] text-[clamp(2.7rem,6.4vw,4.6rem)] leading-[1.03] font-medium text-cream drop-shadow-[0_2px_24px_rgba(20,12,8,0.35)]">
            Trips planned with taste,{" "}
            <em className="text-[#FDE3B8] italic">booked with an edge.</em>
          </h1>
          <p className="mt-[26px] max-w-[46ch] text-[1.08rem] text-[rgba(255,246,235,0.9)]">
            I plan and book travel the way frequent flyers wish they could do it themselves — with
            the upgrades, credits, and insider knowledge that only come from working an advisor.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a className="btn-primary" href={CONSULT_URL} target="_blank" rel="noopener">
              Get your free consultation
            </a>
            <a className="btn-ghost" href="#services">
              See what I book
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-[rgba(255,244,230,0.22)] pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-[1.5rem] text-cream">{s.value}</dt>
                <dd className="text-[0.82rem] tracking-[0.08em] text-[rgba(255,246,235,0.72)] uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </header>
  );
}
