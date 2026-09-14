import { createFileRoute } from "@tanstack/react-router";
import { contact, priceSections } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/priser")({
  head: () => ({
    meta: [
      { title: "Prislista – klippning & färgning | Rallypoint Hair" },
      {
        name: "description",
        content:
          "Priser för klippning, färgning samt fransar och bryn hos Rallypoint Hair på Södermalm. Klippning från 300 kr.",
      },
      { property: "og:title", content: "Prislista | Rallypoint Hair" },
      {
        property: "og:description",
        content: "Priser för klippning, färgning samt fransar och bryn på Södermalm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Prislista,
});

function Prislista() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-16">
      <Reveal className="md:text-center">
        <h1 className="font-display text-5xl md:text-7xl">Prislista</h1>
        <a href={contact.booking} target="_blank" rel="noreferrer" className="btn-ink mt-6">
          Boka tid
        </a>
      </Reveal>

      <nav className="sticky top-[60px] z-30 mt-8 flex flex-wrap gap-6 border-y border-hairline bg-background/90 py-4 text-sm backdrop-blur md:justify-center md:gap-10">
        {priceSections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="link-rule">
            {s.title}
          </a>
        ))}
      </nav>

      {priceSections.map((section) => (
        <div key={section.id} id={section.id} className="scroll-mt-32 pt-12">
          <Reveal className="md:text-center">
            <h2 className="eyebrow">{section.title}</h2>
            {section.intro ? (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:mx-auto md:max-w-2xl">
                {section.intro}
              </p>
            ) : null}
          </Reveal>

          <ul className="mt-8 md:mx-auto md:max-w-4xl">
            {section.items.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-8 border-t border-hairline py-4"
              >
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl md:text-2xl">{item.name}</h3>
                  {item.note ? (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.note}
                    </p>
                  ) : null}
                </div>
                <span className="shrink-0 font-display text-xl tabular-nums">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Reveal className="mt-14 border-t border-hairline pt-10 text-center">
        <a href={contact.booking} target="_blank" rel="noreferrer" className="btn-ink">
          Boka tid
        </a>
      </Reveal>
    </section>
  );
}
