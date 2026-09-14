import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & hitta hit – Brännkyrkagatan 32 | Rallypoint Hair" },
      {
        name: "description",
        content:
          "Rallypoint Hair finns på Brännkyrkagatan 32, intill Mariatorget på Södermalm. Ring 08-600 77 22 eller maila info@rallypointhair.se.",
      },
      { property: "og:title", content: "Kontakt | Rallypoint Hair" },
      {
        property: "og:description",
        content: "Brännkyrkagatan 32, Södermalm. Ring 08-600 77 22 eller maila oss.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-16">
      <Reveal className="md:text-center">
        <h1 className="font-display text-5xl md:text-7xl">Kontakta oss</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Du hittar vår frisörsalong på {contact.street}, alldeles intill Mariatorget på
          Södermalm.
        </p>
        <a href={contact.booking} target="_blank" rel="noreferrer" className="btn-ink mt-7">
          Boka tid
        </a>
      </Reveal>

      <div className="mt-12 grid gap-10 border-t border-hairline pt-10 md:grid-cols-[1fr_1.4fr] md:items-start">
        <Reveal className="space-y-8">
          <div>
            <p className="eyebrow">Kontakt</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="link-rule"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="link-rule">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Adress</p>
            <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
              Rallypoint Hair
              <br />
              {contact.street}
              <br />
              {contact.city}
            </address>
            <a
              href={contact.maps}
              target="_blank"
              rel="noreferrer"
              className="link-rule mt-4 inline-block text-sm"
            >
              Vägbeskrivning
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <iframe
            title="Karta över Rallypoint Hair på Brännkyrkagatan 32"
            src="https://www.openstreetmap.org/export/embed.html?bbox=18.0574%2C59.3165%2C18.0674%2C59.3225&layer=mapnik&marker=59.319534%2C18.062408"
            loading="lazy"
            className="h-[320px] w-full border border-hairline grayscale md:h-[420px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
