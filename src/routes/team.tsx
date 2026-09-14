import { createFileRoute } from "@tanstack/react-router";
import { contact, team } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Vi på Rallypoint – Hanna, Jonna & Nazanin | Rallypoint Hair" },
      {
        name: "description",
        content:
          "Möt frisörerna Hanna och Jonna samt bryn- och fransstylisten Nazanin på Rallypoint Hair vid Mariatorget.",
      },
      { property: "og:title", content: "Vi på Rallypoint | Rallypoint Hair" },
      {
        property: "og:description",
        content: "Möt Hanna, Jonna och Nazanin – teamet bakom Rallypoint Hair.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Teamet,
});

function Teamet() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-16">
      <Reveal className="md:text-center">
        <h1 className="font-display text-5xl md:text-7xl">Vi på Rallypoint</h1>
        <a href={contact.booking} target="_blank" rel="noreferrer" className="btn-ink mt-6">
          Boka tid
        </a>
      </Reveal>

      <div className="mt-10 space-y-12 border-t border-hairline pt-10">
        {team.map((member, i) => (
          <Reveal
            key={member.name}
            delay={i * 80}
            className={`flex flex-col gap-8 md:items-center md:gap-14 ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <figure className="img-zoom overflow-hidden w-full max-w-[380px] h-[475px] shrink-0 mx-auto md:mx-0">
              <img
                src={member.image}
                alt={`${member.name}, frisör på Rallypoint Hair`}
                loading="lazy"
                className="w-full h-full object-cover grayscale"
              />
            </figure>
            <div className="flex-1">
              <h2 className="font-display text-4xl">{member.name}</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {member.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}