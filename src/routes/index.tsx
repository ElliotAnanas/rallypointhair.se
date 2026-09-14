import { createFileRoute, Link } from "@tanstack/react-router";
import { contact, gallery, heroUrl } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Frisör på Mariatorget, Södermalm | Rallypoint Hair" },
      {
        name: "description",
        content:
          "Rallypoint Hair är en frisörsalong vid Mariatorget på Södermalm. Klippning, färgning samt fransar och bryn. Boka på 08-600 77 22.",
      },
      { property: "og:title", content: "Frisör på Mariatorget, Södermalm | Rallypoint Hair" },
      {
        property: "og:description",
        content:
          "Klippning, färgning och fransar & bryn på Brännkyrkagatan 32, ett stenkast från Mariatorget.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const faqs = [
  {
    q: "Vilka tjänster erbjuder ni?",
    a: "Vi erbjuder både klippning, färgning och fix av fransar och bryn. Vi tar emot både kvinnor, män och icke binära.",
  },
  {
    q: "Var finns ni?",
    a: "Vår salong ligger ett stenkast från Mariatorget på Brännkyrkagatan, Södermalm. Vi som jobbar här heter Hanna och Jonna.",
  },
];

function Index() {
  const strip = gallery.slice(0, 6);

  return (
    <>
      <section className="relative">
        <img
          src={heroUrl}
          alt="Kopparröd balayage klippt och färgad på Rallypoint Hair"
          className="h-[58vh] w-full object-cover md:h-[78vh]"
        />
        <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <h1 className="max-w-4xl font-display text-4xl leading-[1.12] text-background md:text-7xl">
              Frisör på Mariatorget, Södermalm.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <a
              href={contact.booking}
              target="_blank"
              rel="noreferrer"
              className="btn-ink mt-8 border-background bg-background text-ink hover:bg-transparent hover:text-background"
            >
              Boka tid
            </a>
            <p className="mt-4 text-xs tracking-widest text-background/85">
              eller ring{" "}
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="link-rule"
              >
                {contact.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-14 md:px-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 90} className="md:text-center">
              <h2 className="font-display text-2xl">{f.q}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </Reveal>
          ))}
          <Reveal delay={180} className="md:text-center">
            <h2 className="font-display text-2xl">Hur bokar jag?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Boka direkt med oss på{" "}
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="link-rule text-ink"
              >
                {contact.phone}
              </a>{" "}
              eller online via Bokadirekt.
            </p>
            <Link to="/prislista" className="link-rule mt-5 inline-block text-sm">
              Se våra priser
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-12 md:py-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 md:flex-col md:items-center">
            <h2 className="font-display text-3xl md:text-4xl">Ur vårt galleri</h2>
            <Link to="/galleri" className="link-rule text-sm">
              Se hela galleriet
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {strip.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 90} className="img-zoom">
                <Link to="/galleri" aria-label="Öppna galleriet">
                  <img
                    src={src}
                    alt={`Hårbehandling utförd på Rallypoint Hair, bild ${i + 1}`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <Reveal className="mx-auto max-w-[1400px] px-6 py-16 text-center md:px-12 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl">Redo för en ny look?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Boka din tid online dygnet runt, eller ring oss under öppettiderna.
          </p>
          <a
            href={contact.booking}
            target="_blank"
            rel="noreferrer"
            className="btn-ink mt-8"
          >
            Boka tid
          </a>
        </Reveal>
      </section>
    </>
  );
}
