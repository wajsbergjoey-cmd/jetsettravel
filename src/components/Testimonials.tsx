const reviews = [
  {
    quote:
      "Joey made the entire travel planning process so easy and stress-free! He was incredibly helpful, responsive, and made sure everything was taken care of.",
    name: "Ascha W.",
  },
  {
    quote:
      "Such a great experience from start to finish! Joey was professional, friendly, and helped us find exactly what we were looking for.",
    name: "Jennifer S.",
  },
  {
    quote:
      "Joey was fantastic to work with and really went above and beyond to make our trip special. Everything was organized perfectly, and we felt taken care of throughout the process.",
    name: "Brian K.",
  },
  {
    quote:
      "I couldn't have asked for a better travel planning experience! Joey was knowledgeable, attentive, and made booking our trip incredibly simple.",
    name: "Taylor D.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="pt-24 pb-[100px]">
      <div className="wrap">
        <div className="mb-[52px] max-w-[640px]">
          <div className="kicker">Client reviews</div>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] leading-[1.15]">
            What it's like to work with Joey.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-[4px] border border-border bg-card px-[30px] py-8"
            >
              <div className="mb-4 text-[0.95rem] tracking-[2px] text-gold" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className="mb-5 font-display text-[1.08rem] leading-[1.55] italic">
                “{r.quote}”
              </blockquote>
              <figcaption className="text-[0.9rem] font-medium text-foreground-soft">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
