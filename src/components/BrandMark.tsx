import logo from "@/assets/logo.png.asset.json";

type Props = {
  /** compact = smaller mark + tighter wordmark (used in nav when scrolled) */
  size?: "sm" | "md" | "lg";
  /** hide the wordmark on very small screens */
  responsive?: boolean;
  tagline?: boolean;
  className?: string;
};

const sizes = {
  sm: { mark: "h-9 w-9", name: "text-[0.95rem]", gap: "gap-2.5" },
  md: { mark: "h-11 w-11", name: "text-[1.05rem]", gap: "gap-3" },
  lg: { mark: "h-14 w-14", name: "text-[1.25rem]", gap: "gap-3.5" },
} as const;

export function BrandMark({
  size = "md",
  responsive = false,
  tagline = false,
  className = "",
}: Props) {
  const s = sizes[size];
  return (
    <span className={`flex items-center ${s.gap} ${className}`}>
      <img
        src={logo.url}
        alt=""
        aria-hidden="true"
        className={`${s.mark} shrink-0 rounded-full object-contain transition-all duration-300`}
      />
      <span
        className={`${responsive ? "hidden xs:flex" : "flex"} flex-col leading-none`}
      >
        <span
          className={`font-display ${s.name} font-semibold tracking-[0.14em] text-foreground uppercase`}
        >
          Jet Set
        </span>
        <span className="mt-[3px] text-[0.58rem] font-medium uppercase tracking-[0.34em] text-gold-deep">
          Travel Co.
        </span>
        {tagline && (
          <span className="mt-2 text-[0.72rem] tracking-[0.16em] text-foreground-soft uppercase">
            Hotels · Cruises · Flights
          </span>
        )}
      </span>
    </span>
  );
}
