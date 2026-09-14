import logoAsset from "@/assets/photo-01.png";
import hero from "@/assets/photo-04.jpg";
import hanna from "@/assets/photo-05.jpg";
import jonna from "@/assets/photo-18.jpg";
import g02 from "@/assets/photo-02.jpg";
import g06 from "@/assets/photo-06.jpg";
import g07 from "@/assets/photo-07.jpg";
import g08 from "@/assets/photo-08.jpg";
import g09 from "@/assets/photo-09.jpg";
import g10 from "@/assets/photo-10.jpg";
import g11 from "@/assets/photo-11.jpg";
import g12 from "@/assets/photo-12.jpg";
import g13 from "@/assets/photo-13.jpg";
import g15 from "@/assets/photo-15.jpg";
import g16 from "@/assets/photo-16.jpg";
import g17 from "@/assets/photo-17.jpg";
import g19 from "@/assets/photo-19.jpg";
import g20 from "@/assets/photo-20.jpg";

export const logoUrl = logoAsset;
export const heroUrl = hero;

export const contact = {
  phone: "08-600 77 22",
  phoneHref: "tel:+468600 7722".replace(" ", ""),
  email: "info@rallypointhair.se",
  street: "Brännkyrkagatan 32",
  city: "118 25 Stockholm",
  area: "Mariatorget, Södermalm",
  booking: "https://www.bokadirekt.se/places/rallypoint-37465",
  maps: "https://www.google.com/maps/search/?api=1&query=Br%C3%A4nnkyrkagatan+32+Stockholm",
};

export const nav = [
  { to: "/priser", label: "Priser" },
  { to: "/boka", label: "Boka" },
  { to: "/team", label: "Team" },
  { to: "/hittahit", label: "Hitta hit" },
  { to: "/galleri", label: "Galleri" },
] as const;

export const team = [
  {
    name: "Hanna",
    image: hanna,
    paragraphs: [
      "Hanna har jobbat som frisör sedan 2012. Från 2013 har hon haft sitt eget företag och hyrt stol men i oktober 2020 startade hon Rallypoint Hair.",
      "Att kunden känner sig väl omhändertagen och sedd är viktigt för henne när du som kund sitter i hennes stol. Hanna utför det mesta inom hårvård för både kvinnor och män och erbjuder även barberartjänster. Hon brinner lite extra för färgbehandlingar, att tillsammans med kunden komma fram till rätt plan för att nå så nära önskat resultat som möjligt är hennes mål med varje behandling.",
    ],
  },
  {
    name: "Jonna",
    image: jonna,
    paragraphs: [
      "Jonna har arbetat som frisör sedan 2013. Hon brinner för yrket och älskar att arbeta med både enkla som komplicerade klippningar och färgningar. Hon är en mycket serviceinriktad person som sätter dig som kund i största fokus. Att få vara kreativ, prova nya saker och rädda busiga hår är något hon älskar.",
      "Hon jobbar sedan 2014 med det italienska hårvårdsmärket Davines i alla sina behandlingar.",
    ],
  },
];

export const gallery = [
  g02,
  g06,
  g07,
  g08,
  g09,
  g10,
  g11,
  g12,
  g13,
  g15,
  g16,
  g17,
  g19,
  g20,
].map((a) => a);

type PriceItem = { name: string; note?: string; price: string };
type PriceSection = { id: string; title: string; intro?: string; items: PriceItem[] };

export const priceSections: PriceSection[] = [
  {
    id: "klippning",
    title: "Klippning",
    intro: "Här kan du se våra priser för klippning.",
    items: [
      { name: "Klippning 60 min", price: "795 kr" },
      {
        name: "Klippning 45 min",
        note: "Rekommenderas för herrklippning där maskin används på sidorna.",
        price: "695 kr",
      },
      {
        name: "Klippning extra mycket hår 75 min",
        note: "Rekommenderas till dig med väldigt tjockt eller långt hår.",
        price: "885 kr",
      },
      {
        name: "Maskinklippning 15 min",
        note: "En och samma längd med maskin.",
        price: "300 kr",
      },
      {
        name: "Klippning lugg 15 min",
        note: "Du som befintlig kund erbjuds kostnadsfri trimning av lugg mellan besöken.",
        price: "200 kr",
      },
      {
        name: "Klippning inklusive Olaplex 80 min",
        note: "Klippning där Olaplex inkluderas i behandlingen för extra starkt, mjukt & friskt hår.",
        price: "1690 kr",
      },
      { name: "Tvätt & fön 45 min", price: "600 kr" },
      { name: "Styling utan tvätt 30 min", price: "400 kr" },
    ],
  },
  {
    id: "fargning",
    title: "Färgning",
    intro:
      "Alla färgpriser är frånpriser och kan variera efter produkt och tidsåtgång. Önskas ej klippning anges detta vid bokning och halva klippriset dras av vid betalning. Avfärgningar/omfärgningar bokas via telefon eller mail och en extra kostnad tillkommer på ordinarie pris.",
    items: [
      {
        name: "Klipp & bottenfärg",
        note: "Färgning av utväxt/botten, max 3 cm.",
        price: "2050 kr",
      },
      {
        name: "Klipp & helfärg",
        note: "Färgning av hela håret med en och samma färg (ej slingor/bayalage).",
        price: "2595 kr",
      },
      {
        name: "Klipp & bottenfärg med slingor i benan",
        note: "Färgning av utväxt/botten max 3 cm och några slingor.",
        price: "2495 kr",
      },
      {
        name: "Klipp & folieslingor Small",
        note: "Slingor i halva håret – tunt hår.",
        price: "2650 kr",
      },
      {
        name: "Klipp & folieslingor Medium",
        note: "Slingor av hela håret – standard långt/tjockt.",
        price: "2850 kr",
      },
      {
        name: "Klipp & folieslingor Large",
        note: "Slingor hela håret – långt/tjockt hår.",
        price: "3050 kr",
      },
      {
        name: "Klipp & folieslingor XL",
        note: "Slingor hela håret – väldigt tjockt/långt hår.",
        price: "3250 kr",
      },
      {
        name: "Klipp & bayalage/specialfärgning",
        note: "Den populära färgningen bayalage eller avancerad slingning/färgning.",
        price: "3390 kr",
      },
      {
        name: "Klipp & bayalage/specialfärgning XL",
        note: "Bayalage eller avancerad slingning/färgning – extra tjockt/långt hår.",
        price: "3590 kr",
      },
      {
        name: "Klipp & nyansering av hela håret",
        note: "Nyansering/lätt toning av hela håret för att fräscha upp befintlig färg eller ta bort gula pigment.",
        price: "1690 kr",
      },
      {
        name: "Klipp & bottensköljning",
        note: "Snabb uppljusande bottenfärg, max 3 cm (bokas per telefon).",
        price: "1590 kr",
      },
      {
        name: "Olaplex i samband med färgbehandling",
        note: "Denna behandling behöver du inte boka till. Din frisör frågar dig om du vill lägga till Olaplex i din behandling om hen anser att det skulle gynna dig.",
        price: "490 kr",
      },
    ],
  },
  {
    id: "fransar",
    title: "Fransar & ögonbryn",
    intro: "Här kan du se våra priser för fransar & ögonbryn.",
    items: [
      { name: "Färgning av fransar och bryn + plockning", price: "395 kr" },
      { name: "Färgning av enbart frans eller bryn", price: "200 kr" },
    ],
  },
];
