import maui from "@/assets/maui.jpg.asset.json";
import amalfi from "@/assets/amalfi.jpg.asset.json";
import cancun from "@/assets/cancun.jpg.asset.json";
import turks from "@/assets/turks.jpg.asset.json";

const tiles = [
  { label: "Maui, Hawaii", url: maui.url, position: "center" },
  { label: "Amalfi Coast", url: amalfi.url, position: "center 78%" },
  { label: "Cancun", url: cancun.url, position: "center 68%" },
  { label: "Turks & Caicos", url: turks.url, position: "center 40%" },
];

export function RecentTrips() {
  return (
    <section id="trips" className="bg-card py-24">
      <div className="wrap">
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-[14px]">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)]">Recent trips</h2>
          <div className="max-w-[34ch] text-[0.96rem] text-foreground-soft">
            A few of the places clients have landed this year.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[14px] min-[520px]:grid-cols-2 min-[900px]:grid-cols-4">
          {tiles.map((t) => (
            <div
              key={t.label}
              role="img"
              aria-label={`${t.label} — recent client trip`}
              className="tile-overlay relative flex h-[220px] items-end overflow-hidden rounded-[2px] bg-cover p-4 min-[900px]:h-[280px]"
              style={{ backgroundImage: `url('${t.url}')`, backgroundPosition: t.position }}
            >
              <span className="relative z-[2] font-display text-[0.98rem] italic text-cream">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
