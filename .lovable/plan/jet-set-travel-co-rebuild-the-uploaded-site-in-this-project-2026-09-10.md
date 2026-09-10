# Jet Set Travel Co. — rebuild the uploaded site in this project

Your upload is a single finished web page for Jet Set Travel Co. (travel advisor), with its own fonts, ivory/espresso/gold colours, a sunset-gradient hero, and six embedded photos/logo images. The plan is to rebuild it here exactly as it looks today, as the home page of this app.

## What you'll get

One page at the site root with the same sections and wording as your file:

- Sticky top bar: logo, links (Services, Perks, Recent trips, Reviews, Contact), "Book a consult" button
- Hero: "Trips planned with taste, booked with an edge." with the two buttons
- Services: Hotels & resorts, Cruises, Flights (with the small line icons)
- Why book through an advisor: the four perk cards
- Recent trips: the photo mosaic
- Client reviews
- "A quick call tells us if we're a fit." contact section
- Footer with the logo

Every "Book a consult" / consultation button keeps pointing to your existing Fora intake link, opening in a new tab.

## Look and feel

The colour palette (ivory, espresso, gold, amber, coral, plum) and the two fonts (Fraunces headings, Work Sans body) become the project's design system, so the rebuilt page matches the original rather than looking like a generic template. Layout stays responsive: the mobile behaviour from your file (hidden nav links, tighter padding, stacked grids) is preserved.

## Images

The six pictures baked into your file (trip photos and the logo) are extracted and hosted as proper image files, so the page loads fast instead of carrying them inline.

## Technical notes

- Rewrite `src/routes/index.tsx` as the landing page, split into section components under `src/components/`.
- Port the CSS custom properties into `src/styles.css` as semantic tokens (background, foreground, primary, accent, etc.) and build the page with Tailwind utilities on those tokens — no hardcoded colours.
- Load Fraunces + Work Sans via `<link>` tags in `src/routes/__root.tsx`.
- Decode the base64 images from the upload, save them, and register them as hosted assets; import them in components.
- Add page metadata to the index route: title "Jet Set Travel Co. — Travel Advisor", matching description, og/twitter tags, single H1, alt text on all images, smooth-scroll anchor links.
- No backend needed: the consult form stays on the external Fora link.
