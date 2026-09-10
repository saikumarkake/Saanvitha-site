/* =========================================================
   Product data
   -----------------------------------------------------------
   Only ONE product is real: "real-01". Its 3 images are all
   crops of the single photo you uploaded (full drape, border
   close-up, pallu/tassel close-up) — there's no second real
   angle to show yet. Swap in genuine additional-angle photos
   whenever you shoot them; the gallery already supports more
   than one image.

   Fabric on real-01 is a working placeholder name you asked to
   have filled in for now — confirm and replace with the real
   fabric before publishing. Weave, occasion, length, blouse and
   price are still open placeholders since no info was given for
   them. Care and shipping/returns text are generic starting
   copy — adjust to match your actual policy before publishing.

   Every other entry is a clearly labelled SAMPLE placeholder
   that exists only to demonstrate the shop grid, cards and
   filters — swap these for your own photographed inventory
   before launch. Sample fabric/weave/price/occasion values are
   demo taxonomy only, not claims about real products.
   ========================================================= */

const PRODUCTS = [
  {
    id: "real-01",
    isReal: true,
    name: "Gold-Tone Floral Motif Saree with Rani Pink Border",
    price: null,               // add real price
    images: [
      "images/heritage-saree.jpg",
      "images/detail-border.jpg",
      "images/detail-pallu.jpg"
    ],
    colour: "Gold / Champagne with Rani Pink border",
    fabric: "Handloom Weave (placeholder name — swap for the real fabric once confirmed)",
    weave: null,                // add weave details
    occasion: null,             // add suggested occasion
    length: null,                // add saree length
    blouse: null,                // add blouse details
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "Featured",
    badgeColour: "gold"
  },
  {
    id: "sample-01",
    isReal: false,
    name: "Sample Saree — Silk Weave",
    price: 6200,
    image: null,
    colour: "Maroon",
    fabric: "Silk",
    weave: "Zari border",
    occasion: "Wedding",
    tag: "New",
  },
  {
    id: "sample-02",
    isReal: false,
    name: "Sample Saree — Cotton Handloom",
    price: 2800,
    image: null,
    colour: "Ivory",
    fabric: "Cotton",
    weave: "Temple border",
    occasion: "Festive",
    tag: "Best seller",
  },
  {
    id: "sample-03",
    isReal: false,
    name: "Sample Saree — Tussar Weave",
    price: 4500,
    image: null,
    colour: "Rani Pink",
    fabric: "Tussar",
    weave: "Butta",
    occasion: "Party",
    tag: "New",
  },
  {
    id: "sample-04",
    isReal: false,
    name: "Sample Saree — Linen Weave",
    price: 3200,
    image: null,
    colour: "Teal",
    fabric: "Linen",
    weave: "Plain",
    occasion: "Everyday",
    tag: "Best seller",
  },
  {
    id: "sample-05",
    isReal: false,
    name: "Sample Saree — Georgette Weave",
    price: 3900,
    image: null,
    colour: "Gold",
    fabric: "Georgette",
    weave: "Printed",
    occasion: "Festive",
    tag: null,
  },
  {
    id: "sample-06",
    isReal: false,
    name: "Sample Saree — Chanderi Weave",
    price: 5400,
    image: null,
    colour: "Blush",
    fabric: "Chanderi",
    weave: "Zari border",
    occasion: "Wedding",
    tag: "New",
  },
  {
    id: "sample-07",
    isReal: false,
    name: "Sample Saree — Cotton Everyday",
    price: 2200,
    image: null,
    colour: "Ivory",
    fabric: "Cotton",
    weave: "Plain",
    occasion: "Everyday",
    tag: null,
  },
];

const FILTER_TAXONOMY = {
  colour: ["Gold", "Maroon", "Ivory", "Rani Pink", "Teal", "Blush"],
  fabric: ["Silk", "Cotton", "Tussar", "Linen", "Georgette", "Chanderi"],
  weave: ["Zari border", "Temple border", "Butta", "Plain", "Printed"],
  occasion: ["Wedding", "Festive", "Party", "Everyday"],
};
