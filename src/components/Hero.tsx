import { CONSULT_URL } from "@/lib/site";

export function Hero() {
  return (
    <header
      id="top"
      className="hero-gradient relative flex min-h-[560px] items-end overflow-hidden md:min-h-[640px]"
    >
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="pointer-events-none absolute -top-[4%] -right-[20%] z-[1] w-[85%] max-w-[640px] opacity-50 md:-top-[8%] md:-right-[6%] md:w-[62%] md:opacity-90"
      >
        <path d="M40,420 L460,60 L500,90 L120,470 Z" fill="rgba(20,12,10,0.28)" />
        <path d="M60,440 L470,90 L500,115 L140,480 Z" fill="rgba(20,12,10,0.18)" />
      </svg>
      <div className="relative z-[2] w-full pt-[90px] pb-[78px] md:pt-[120px]">
        <div className="wrap">
          <div className="mb-[18px] text-[0.95rem] text-[rgba(255,244,230,0.86)]">
            Travel advisor — hotels, cruises &amp; flights
          </div>
          <h1 className="max-w-[11ch] text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.04] font-medium text-cream">
            Trips planned with taste, <em className="text-[#FDE3B8] italic">booked with an edge.</em>
          </h1>
          <p className="mt-[26px] max-w-[46ch] text-[1.08rem] text-[rgba(255,246,235,0.88)]">
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
        </div>
      </div>
    </header>
  );
}
