import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { contact, logoUrl, nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur-sm">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-5 md:px-12 md:py-6">
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-rule font-display text-[1.05rem] tracking-wide text-ink"
              activeProps={{ className: "opacity-60" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ink transition-opacity hover:opacity-60 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link
          to="/"
          className="shrink-0 justify-self-center"
          aria-label="Rallypoint Hair – till startsidan"
        >
          <img src={logoUrl} alt="Rallypoint Hair" className="h-12 w-auto md:h-14" />
        </Link>

        <div className="justify-self-end">
          <a
            href={contact.booking}
            target="_blank"
            rel="noreferrer"
            className="btn-ink-sm hidden md:inline-flex"
          >
            Boka tid
          </a>
        </div>
      </div>

      {open ? (
        <nav className="animate-fade-in border-t border-hairline px-6 pb-8 pt-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={contact.booking}
            target="_blank"
            rel="noreferrer"
            className="btn-ink mt-7 w-full"
          >
            Boka tid
          </a>
        </nav>
      ) : null}
    </header>
  );
}
