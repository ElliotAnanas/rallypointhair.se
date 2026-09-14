# Rally Point Redesign

i want to make a redesign for this website so it will be almost-free except domain fee. recreate the original design first from the website https://rallypointhair.se:
Content's extracted clean. Now let's pull the actual design tokens — colors, fonts, spacing — from the CSS so you've got real values instead of eyeballing screenshots.

Got everything I need. Here's the actual reference material for the redesign.

Fonts

Headline font: Clarkson (a Squarespace-exclusive Typekit font — you can't license this yourself, need a lookalike: think Canela, Reckless, or similar contemporary serif)

Body font: Helvetica Neue fallback stack, standard system sans

There's also ltc-bodoni-175 referenced, likely used somewhere as a display accent

Colors

Base palette is literally just black (hsl(0,0%,0%)) and white (hsl(0,0%,100%)) — this is a minimal, high-contrast salon site with no real brand color beyond black/white. Good news for you, nothing complex to reverse-engineer there.

Content, page by page

Home — "Frisör på Mariatorget, Södermalm." FAQ-style blurbs: services offered (klippning, färgning, fix av fransar/bryn, all genders welcome), location (stenkast från Mariatorget, Brännkyrkagatan, Södermalm, run by Hanna and Jonna), booking via phone 08-600 77 22 or Bokadirekt.

Priser — Full price list, three sections: Klippning, Färgning, Fransar & Ögonbryn. I've got every line item with prices, easy to turn into a table.

Boka — Just booking CTA text + the online booking embed slot.

Team — Bios for Hanna, Jonna, Nazanin, each with years of experience and specialty.

Galleri — Image gallery, no body copy, just photos (grab those from the squarespace-cdn images folder in the zip).

Hittahit (contact) — Email, phone, address (Brännkyrkagatan 32, near Mariatorget), booking CTA.

One flag: since Clarkson is proprietary to Squarespace, you'll want to pick that lookalike serif early since it drives the whole visual feel, the current site leans on that pairing (serif headlines, sans body) pretty hard.

Want me to put this all together into a structured content/design doc you can hand to yourself when you start building, or are you going straight into code from here?

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://rallypointhair-redesign-v1.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0895e62d-4b5b-4437-b9c5-d313485d0d2a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
