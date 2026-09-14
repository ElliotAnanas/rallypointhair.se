import { createFileRoute } from "@tanstack/react-router";
import { contact, gallery } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/galleri")({
  head: () => ({
    meta: [
      { title: "Galleri – klippningar & färgningar | Rallypoint Hair" },
      {
        name: "description",
        content:
          "Bilder på klippningar, slingor, balayage och färgningar gjorda av frisörerna på Rallypoint Hair, Södermalm.",
      },
      { property: "og:title", content: "Galleri | Rallypoint Hair" },
      {
        property: "og:description",
        content: "Klippningar, slingor och balayage av teamet på Rallypoint Hair.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Galleri,
});

function Galleri() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-16">
      <Reveal className="md:text-center">
        <h1 className="font-display text-5xl md:text-7xl">Galleri</h1>
        <a href={contact.booking} target="_blank" rel="noreferrer" className="btn-ink mt-6">
          Boka tid
        </a>
      </Reveal>

      <div className="mt-10 columns-2 gap-3 border-t border-hairline pt-10 md:gap-4 lg:columns-3">
        {gallery.map((src, i) => (
          <Reveal
            key={src}
            delay={(i % 3) * 70}
            className="img-zoom mb-3 break-inside-avoid overflow-hidden md:mb-4"
          >
            <img
              src={src}
              alt={`Hårbehandling utförd på Rallypoint Hair, bild ${i + 1}`}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
