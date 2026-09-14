import { Link } from "@tanstack/react-router";
import { contact, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-hairline">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-10 md:grid-cols-3 md:px-12 md:py-12 md:text-center">
        <div>
          <h2 className="font-display text-2xl">Rallypoint Hair</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {contact.street}
            <br />
            {contact.city}
            <br />
            {contact.area}
          </p>
        </div>

        <div>
          <p className="eyebrow">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`} className="link-rule">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="link-rule">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.booking}
                target="_blank"
                rel="noreferrer"
                className="link-rule"
              >
                Boka på Bokadirekt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Sidor</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="link-rule">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-8 text-xs text-muted-foreground md:px-12 md:text-center">
        © {new Date().getFullYear()} Rallypoint Hair
      </div>
    </footer>
  );
}
