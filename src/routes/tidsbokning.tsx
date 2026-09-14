import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/lib/site";

export const Route = createFileRoute("/tidsbokning")({
  head: () => ({
    meta: [
      { title: "Boka tid hos frisören | Rallypoint Hair" },
      {
        name: "description",
        content:
          "Boka tid hos Rallypoint Hair på Södermalm – online via Bokadirekt eller på telefon 08-600 77 22.",
      },
      { property: "og:title", content: "Boka tid | Rallypoint Hair" },
      {
        property: "og:description",
        content: "Onlinebokning via Bokadirekt eller ring 08-600 77 22.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tidsbokning,
});

function Tidsbokning() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-16">
      <h1 className="font-display text-5xl md:text-center md:text-7xl">Tidsbokning</h1>

      <div className="mt-10 grid gap-10 border-t border-hairline pt-10 md:mx-auto md:max-w-3xl md:grid-cols-2 md:text-center">
        <div className="md:flex md:flex-col md:items-center">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Bokning görs via onlinebokning eller på telefon{" "}
            <a
              href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
              className="link-rule text-ink"
            >
              {contact.phone}
            </a>
            .
          </p>
          <a href={contact.booking} target="_blank" rel="noreferrer" className="btn-ink mt-8">
            Boka tid
          </a>
        </div>

        <div>
          <p className="eyebrow">Avbokning</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Behöver du ändra eller avboka din tid? Hör av dig i god tid på telefon eller mail
            så hittar vi en ny tid som passar.
          </p>
          <p className="mt-6 text-sm">
            <a href={`mailto:${contact.email}`} className="link-rule">
              {contact.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
