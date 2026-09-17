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
    colour: "Gold / Champagne",
    fabric: "Handloom Weave",
    fabricNote: "Placeholder name — swap for the real fabric once confirmed",
    weave: null,                // add weave details
    pattern: "All-over floral vine (butta) motifs in rani pink, green and blue on a fine gold zari ground",
    border: "Rani pink woven border, edged with a narrow golden zari band",
    pallu: "Gold zari pallu finished with a multicoloured tassel fringe",
    occasion: "Festive / Wedding wear",   // inferred from the motif and pallu styling — confirm before publishing
    length: null,                // add saree length
    blouse: null,                // add blouse details
    description: "A gold-toned handloom saree with a fine, all-over zari texture, scattered through with a hand-drawn vine and floral motif in rani pink, green and blue. The pallu carries the same golden ground and finishes in a hand-tied multicoloured tassel fringe, while a rani pink border traces the edge of the drape. The overall effect is rich without being heavy — a saree suited to festive occasions and celebrations, styled here with the pallu draped forward to show off the motif and border together.",
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "Featured",
    badgeColour: "gold",
    sections: ["featured", "new"]
  },
  {
    id: "sample-01",
    isReal: false,
    name: "Sample Saree — Silk Weave",
    price: 6200,
    images: [
      "images/samples/sample-01-full.svg",
      "images/samples/sample-01-border.svg",
      "images/samples/sample-01-pallu.svg"
    ],
    colour: "Maroon",
    fabric: "Silk",
    weave: "Zari border",
    pattern: "Woven zari butta scattered across a deep maroon ground",
    border: "Broad gold zari border with a temple-edge line",
    pallu: "Zari-worked pallu finished with a plain gold hem",
    occasion: "Wedding",
    length: "5.5 m saree + 0.8 m blouse piece",
    blouse: "Unstitched matching blouse piece included",
    description: "A rich maroon silk-weave saree with gold zari butta motifs scattered across the body and a broad temple-edge border. Deep, traditional colouring built for wedding and festive occasions. This is placeholder demo content shown only to preview the site layout — not a real product yet.",
    care: "Dry clean only, out of direct sunlight, store flat or on a padded hanger. (Sample care text for layout preview.)",
    shipping: "Ships within 3&ndash;5 business days; 7-day return on unworn pieces with tags intact. (Sample shipping text for layout preview.)",
    tag: "New",
    sections: ["featured", "new"]
  },
  {
    id: "sample-02",
    isReal: false,
    name: "Sample Saree — Cotton Handloom",
    price: 2800,
    images: [
      "images/samples/sample-02-full.svg",
      "images/samples/sample-02-border.svg",
      "images/samples/sample-02-pallu.svg"
    ],
    colour: "Ivory",
    fabric: "Cotton",
    weave: "Temple border",
    pattern: "Simple handloom check with a woven temple-border trim",
    border: "Warm brown temple-motif border",
    pallu: "Plain ivory pallu with a narrow contrast line",
    occasion: "Festive",
    length: "5.5 m saree + 0.8 m blouse piece",
    blouse: "Unstitched matching blouse piece included",
    description: "A light, breathable ivory cotton handloom saree with a classic temple-motif border in warm brown. Easy to drape and suited to daytime festive wear. This is placeholder demo content shown only to preview the site layout — not a real product yet.",
    care: "Hand wash cold, separately, in mild detergent; dry in shade; iron on medium. (Sample care text for layout preview.)",
    shipping: "Ships within 3&ndash;5 business days; 7-day return on unworn pieces with tags intact. (Sample shipping text for layout preview.)",
    tag: "Best seller",
    sections: ["featured", "bestseller"]
  },
  {
    id: "sample-03",
    isReal: false,
    name: "Sample Saree — Tussar Weave",
    price: 4500,
    images: [
      "images/samples/sample-03-full.svg",
      "images/samples/sample-03-border.svg",
      "images/samples/sample-03-pallu.svg"
    ],
    colour: "Rani Pink",
    fabric: "Tussar",
    weave: "Butta",
    pattern: "Small woven butta motifs evenly spaced across the body",
    border: "Gold zari border with a fine butta trim",
    pallu: "Butta-worked pallu in matching gold zari",
    occasion: "Party",
    length: "5.5 m saree + 0.8 m blouse piece",
    blouse: "Unstitched matching blouse piece included",
    description: "A vibrant rani pink tussar-weave saree with delicate gold butta motifs and a coordinating zari border. The natural sheen of tussar gives it a soft festive glow, well suited to evening occasions. This is placeholder demo content shown only to preview the site layout — not a real product yet.",
    care: "Dry clean recommended; store away from direct light to preserve colour. (Sample care text for layout preview.)",
    shipping: "Ships within 3&ndash;5 business days; 7-day return on unworn pieces with tags intact. (Sample shipping text for layout preview.)",
    tag: "New",
    sections: ["featured", "new"]
  },
  {
    id: "sample-04",
    isReal: false,
    name: "Sample Saree — Linen Weave",
    price: 3200,
    images: [
      "images/samples/sample-04-full.svg",
      "images/samples/sample-04-border.svg",
      "images/samples/sample-04-pallu.svg"
    ],
    colour: "Teal",
    fabric: "Linen",
    weave: "Plain",
    pattern: "Plain-woven teal linen with a smooth, matte texture",
    border: "Slim self-tone border with a soft ivory pinline",
    pallu: "Plain teal pallu, unembellished",
    occasion: "Everyday",
    length: "5.5 m saree + 0.8 m blouse piece",
    blouse: "Unstitched matching blouse piece included",
    description: "A cool teal linen-weave saree in a plain, matte finish with a slim self-tone border. Lightweight and easy to wear, made for everyday comfort. This is placeholder demo content shown only to preview the site layout — not a real product yet.",
    care: "Machine or hand wash cold; iron while slightly damp for a crisp finish. (Sample care text for layout preview.)",
    shipping: "Ships within 3&ndash;5 business days; 7-day return on unworn pieces with tags intact. (Sample shipping text for layout preview.)",
    tag: "Best seller",
    sections: ["bestseller"]
  },
  {
    id: "sample-05",
    isReal: false,
    name: "Sample Saree — Georgette Weave",
    price: 3900,
    images: [
      "images/samples/sample-05-full.svg",
      "images/samples/sample-05-border.svg",
      "images/samples/sample-05-pallu.svg"
    ],
    colour: "Gold",
    fabric: "Georgette",
    weave: "Printed",
    pattern: "All-over printed motif on a flowing gold georgette base",
    border: "Deep maroon printed border",
    pallu: "Printed pallu echoing the body's motif",
    occasion: "Festive",
    length: "5.5 m saree + 0.8 m blouse piece",
    blouse: "Unstitched matching blouse piece included",
    description: "A flowing gold georgette saree with an all-over printed motif and a deep maroon printed border. Light drape with a soft festive shimmer. This is placeholder demo content shown only to preview the site layout — not a real product yet.",
    care: "Hand wash cold or dry clean; hang dry away from direct sun. (Sample care text for layout preview.)",
    shipping: "Ships within 3&ndash;5 business days; 7-day return on unworn pieces with tags intact. (Sample shipping text for layout preview.)",
    tag: null,
    sections: ["bestseller"]
  },
  {
    id: "sample-06",
    isReal: false,
    name: "Sample Saree — Chanderi Weave",
    price: 5400,
    images: [
      "images/samples/sample-06-full.svg",
      "images/samples/sample-06-border.svg",
      "images/samples/sample-06-pallu.svg"
    ],
    colour: "Blush",
    fabric: "Chanderi",
    weave: "Zari border",
    pattern: "Sheer, lightly textured weave with a subtle sheen",
    border: "Maroon-toned zari border",
    pallu: "Zari-bordered pallu in matching blush tone",
    occasion: "Wedding",
    length: "5.5 m saree + 0.8 m blouse piece",
    blouse: "Unstitched matching blouse piece included",
    description: "A soft blush chanderi-weave saree with a delicate sheen and a maroon-toned zari border. Sheer and lightweight, suited to daytime wedding functions. This is placeholder demo content shown only to preview the site layout — not a real product yet.",
    care: "Dry clean only; store folded in muslin cloth. (Sample care text for layout preview.)",
    shipping: "Ships within 3&ndash;5 business days; 7-day return on unworn pieces with tags intact. (Sample shipping text for layout preview.)",
    tag: "New",
    sections: ["new"]
  },
  {
    id: "sample-07",
    isReal: false,
    name: "Sample Saree — Cotton Everyday",
    price: 2200,
    images: [
      "images/samples/sample-07-full.svg",
      "images/samples/sample-07-border.svg",
      "images/samples/sample-07-pallu.svg"
    ],
    colour: "Ivory",
    fabric: "Cotton",
    weave: "Plain",
    pattern: "Plain-woven ivory cotton, lightly textured",
    border: "Narrow self-tone border",
    pallu: "Plain ivory pallu, unembellished",
    occasion: "Everyday",
    length: "5.5 m saree + 0.8 m blouse piece",
    blouse: "Unstitched matching blouse piece included",
    description: "A simple, breathable ivory cotton saree in a plain weave with a narrow self-tone border. An easy, everyday piece. This is placeholder demo content shown only to preview the site layout — not a real product yet.",
    care: "Machine or hand wash cold; iron on medium heat. (Sample care text for layout preview.)",
    shipping: "Ships within 3&ndash;5 business days; 7-day return on unworn pieces with tags intact. (Sample shipping text for layout preview.)",
    tag: null,
    sections: []
  },
];

const FILTER_TAXONOMY = {
  colour: ["Gold", "Maroon", "Ivory", "Rani Pink", "Teal", "Blush"],
  fabric: ["Silk", "Cotton", "Tussar", "Linen", "Georgette", "Chanderi"],
  weave: ["Zari border", "Temple border", "Butta", "Plain", "Printed"],
  occasion: ["Wedding", "Festive", "Party", "Everyday"],
};
