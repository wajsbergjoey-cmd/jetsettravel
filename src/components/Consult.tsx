import { CONSULT_URL } from "@/lib/site";

const steps = [
  "Book a free consultation below",
  "We talk through your trip, budget, and dates",
  "I send a proposal with real options — you approve, I book",
];

export function Consult() {
  return (
    <section id="consult" className="py-[110px]">
      <div className="wrap grid grid-cols-1 items-center gap-[72px] min-[820px]:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="kicker">Let's plan something</div>
          <h2 className="mb-[22px] text-[clamp(1.9rem,3.6vw,2.5rem)] leading-[1.16]">
            A quick call tells us if we're a fit.
          </h2>
          <p className="mb-[30px] max-w-[44ch] text-foreground-soft">
            No obligation, no cost. We'll talk through where you want to go, what matters most on
            this trip, and what it would look like to have me handle the planning.
          </p>
          <ul className="mb-[34px] flex list-none flex-col gap-4 p-0">
            {steps.map((s) => (
              <li key={s} className="step-item">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[4px] bg-primary px-[38px] py-11 text-primary-foreground">
          <h3 className="mb-[14px] text-[1.35rem] text-cream">Free trip consultation</h3>
          <p className="mb-7 text-[0.94rem] text-[rgba(245,237,225,0.78)]">
            Tell me where you're headed and I'll put together options with the perks and upgrades
            most people miss.
          </p>
          <a
            className="btn-primary w-full text-center"
            href={CONSULT_URL}
            target="_blank"
            rel="noopener"
          >
            Book your consult
          </a>
          <div className="mt-[18px] text-[0.82rem] text-[rgba(245,237,225,0.55)]">
            Booked through Fora's secure scheduling — no spam, ever.
          </div>
        </div>
      </div>
    </section>
  );
}
