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
    id: "real-02",
    isReal: true,
    name: "Rani Pink Zari-Border Handloom Saree",
    price: null,               // add real price
    images: [
      "images/featured/rani-pink-zari-saree.jpg",
      "images/featured/real02-border.jpg"
    ],
    imageLabels: ["Full drape", "Border detail (cropped, low source resolution)"],
    colour: "Rani Pink",
    fabric: "Handloom Weave",
    fabricNote: "Placeholder name — swap for the real fabric once confirmed",
    weave: null,
    pattern: "Solid rani pink body with a plain, unembellished field",
    border: "Golden-cream border woven with a pink-and-gold floral vine",
    pallu: "Same golden-cream floral-vine pallu as the border, in matching zari",
    occasion: "Festive / Wedding wear",   // inferred from the border styling — confirm before publishing
    length: null,
    blouse: null,
    description: "A vivid rani pink handloom saree with a rich, unbroken field of colour, set off by a golden-cream border woven through with a pink and gold floral vine. The same motif carries into the pallu, giving the drape a clean, elegant finish that lets the colour do the talking.",
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "Featured",
    badgeColour: "gold",
    sections: ["featured"],
    photoNote: "This photo is quite low-resolution, so only 2 useful angles could be cropped from it without looking blurry — a sharper, well-lit reshoot (full drape, border, pallu, blouse) will make this listing much stronger."
  },
  {
    id: "real-03",
    isReal: true,
    name: "Olive Green Zari-Stripe Saree with Maroon Pallu",
    price: null,
    images: [
      "images/featured/green-red-zari-saree.jpg",
      "images/featured/real03-border.jpg",
      "images/featured/real03-pallu.jpg",
      "images/featured/real03-blouse.jpg",
      "images/featured/real03-detail.jpg"
    ],
    imageLabels: ["Full drape (flat-lay)", "Border detail", "Pallu detail", "Blouse piece", "Fabric detail"],
    colour: "Olive Green / Maroon",
    fabric: "Handloom Weave",
    fabricNote: "Placeholder name — swap for the real fabric once confirmed",
    weave: null,
    pattern: "Olive-green body woven in fine horizontal gold zari stripes",
    border: "Deep maroon border with dense gold zari vine and small floral motifs, fine sky-blue thread accents, and rows of woven elephant/temple figures near the edge",
    pallu: "Maroon pallu carrying the same gold vine and floral motifs as the border",
    occasion: "Festive / Wedding wear",   // inferred from the border/pallu detailing — confirm before publishing
    length: null,
    blouse: "Matching maroon blouse piece included (as shown folded with the saree)",
    description: "An olive-green handloom saree woven in fine gold zari stripes, paired with a deep maroon border and pallu worked in dense gold vine and floral motifs, lifted with small sky-blue accents and rows of woven elephant figures. A striking colour contrast with a traditional, richly detailed border.",
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "Featured",
    badgeColour: "gold",
    sections: ["featured"],
    photoNote: "All angles shown are crops from the one flat-lay photo you provided — add a real draped/worn shot when you can, for a truer sense of fall and drape."
  },
  {
    id: "real-04",
    isReal: true,
    name: "Mustard Gold Zari Saree with Elephant-Motif Border",
    price: null,
    images: [
      "images/featured/mustard-gold-zari-saree.jpg",
      "images/featured/real04-border.jpg",
      "images/featured/real04-pallu.jpg",
      "images/featured/real04-detail.jpg"
    ],
    imageLabels: ["Full drape (flat-lay)", "Border detail", "Pallu / folded corner detail", "Fabric detail"],
    colour: "Mustard Gold / Orange",
    fabric: "Handloom Weave",
    fabricNote: "Placeholder name — swap for the real fabric once confirmed",
    weave: null,
    pattern: "All-over fine gold zari diamond/paisley texture on a mustard-orange ground",
    border: "Wide gold zari border with rows of elephant and floral roundel motifs",
    pallu: "Orange-red pallu edged in green and pink piping, with the same gold zari work",
    occasion: null,             // add suggested occasion
    length: null,
    blouse: null,                // folded corner in the photo may be the pallu reverse rather than a separate blouse piece — confirm and add a real blouse photo
    description: "A mustard-gold handloom saree with a fine, all-over zari diamond texture and a wide border worked in rows of elephant and floral roundel motifs. The pallu shifts to a warmer orange-red, finished with slim green and pink piping for a subtle contrast against all that gold.",
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "Featured",
    badgeColour: "gold",
    sections: ["featured"],
    photoNote: "All angles shown are crops from the one flat-lay photo you provided — the folded corner may be the pallu reverse rather than a separate blouse piece, so please confirm and add a real blouse photo when you can."
  },
  {
    id: "real-05",
    isReal: true,
    name: "Maroon & Gold Zari Jaal Saree with Green Trim",
    price: null,
    images: [
      "images/featured/maroon-gold-zari-saree.jpg",
      "images/featured/real05-border.jpg",
      "images/featured/real05-pallu.jpg",
      "images/featured/real05-detail.jpg"
    ],
    imageLabels: ["Pleats & overview", "Border detail", "Pallu motif detail", "Fabric detail"],
    colour: "Maroon / Gold",
    fabric: "Handloom Weave",
    fabricNote: "Placeholder name — swap for the real fabric once confirmed",
    weave: null,
    pattern: "Dense all-over gold zari paisley/vine jaal on a maroon ground",
    border: "Gold zari temple-edge (zigzag) border with a fine green pinstripe trim",
    pallu: "Maroon pallu with bold gold zari floral and vine motifs, matching the body's jaal work",
    occasion: "Festive / Wedding wear",   // inferred from the dense zari work — confirm before publishing
    length: null,
    blouse: null,
    description: "A deep maroon handloom saree with a dense, all-over gold zari jaal of paisley and vine motifs, gathered here to show off its fall and texture. A gold temple-edge border, trimmed with a fine green pinstripe, runs along the drape, while the pallu carries bolder floral and vine work in the same rich gold.",
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "Featured",
    badgeColour: "gold",
    sections: ["featured"],
    photoNote: "All angles shown are crops from the one close-up pleat photo you provided — it's already a detail shot, so there's no true full-drape or blouse photo yet. Add those when you can."
  },
  {
    id: "real-06",
    isReal: true,
    name: "Teal Zari Saree with Contrast Purple Pallu",
    price: null,
    images: [
      "images/featured/teal-purple-zari-saree.jpg",
      "images/featured/real06-border.jpg",
      "images/featured/real06-pallu.jpg",
      "images/featured/real06-detail.jpg"
    ],
    imageLabels: ["Full drape (styled)", "Border detail", "Pallu detail", "Fabric detail"],
    colour: "Teal / Purple",
    fabric: "Handloom Weave",
    fabricNote: "Placeholder name — swap for the real fabric once confirmed",
    weave: null,
    pattern: "All-over gold zari floral jaal on a teal ground",
    border: "Wide gold-cream border with a purple inner edge",
    pallu: "Contrast purple pallu with matching gold zari floral motifs",
    occasion: null,             // add suggested occasion
    length: null,
    blouse: null,
    description: "A teal handloom saree with an all-over gold zari floral jaal, styled here with the pallu draped over the shoulder to show off its striking contrast panel. The wide gold-cream border is lined in purple, and the same rich purple carries through the pallu, worked with matching gold floral motifs.",
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "Featured",
    badgeColour: "gold",
    sections: ["featured"],
    photoNote: "All angles shown are crops from the one styled drape photo you provided — it's shown on a form with no blouse attached, so add a flat full-saree view and a real blouse photo when you can."
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
    id: "real-07",
    isReal: true,
    name: "Royal Blue Paithani-Style Saree with Peacock Pallu",
    price: null,               // add real price
    images: [
      "images/newarrivals/blue-orange-paithani-saree.jpg",
      "images/newarrivals/n1-border.jpg",
      "images/newarrivals/n1-pallu.jpg",
      "images/newarrivals/n1-detail.jpg"
    ],
    imageLabels: ["Full drape (styled)", "Border detail", "Pallu detail", "Fabric detail"],
    colour: "Royal Blue / Orange",
    fabric: "Handloom Weave",
    fabricNote: "Placeholder name — swap for the real fabric once confirmed",
    weave: null,
    pattern: "Small woven floral booti scattered across a royal blue ground",
    border: "Wide orange-gold border with a fine woven check and temple-edge trim",
    pallu: "Orange-gold pallu worked in a colourful woven peacock and floral motif",
    occasion: null,             // add suggested occasion
    length: null,
    blouse: null,                // not visible in this photo — add a real blouse photo
    description: "A royal blue handloom saree scattered with small woven floral booti, paired with a wide orange-gold border in a fine check weave. The pallu is the standout — a colourful, densely woven peacock and floral motif that lifts the whole drape. Styled here on a form to show the fall of the border and pallu together.",
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "New",
    sections: ["new"],
    photoNote: "All angles shown are crops from the one styled photo you provided — no blouse is visible in it (shown on a bare-shoulder form), so add a real blouse photo when you can."
  },
  {
    id: "real-08",
    isReal: true,
    name: "Rani Pink Paithani-Style Saree with Parrot Pallu",
    price: null,
    images: [
      "images/newarrivals/pink-gold-parrot-saree.jpg",
      "images/newarrivals/n2-border.jpg",
      "images/newarrivals/n2-pallu.jpg",
      "images/newarrivals/n2-detail.jpg"
    ],
    imageLabels: ["Full drape (flat-lay)", "Border detail", "Pallu detail", "Fabric detail"],
    colour: "Rani Pink / Gold",
    fabric: "Handloom Weave",
    fabricNote: "Placeholder name — swap for the real fabric once confirmed",
    weave: null,
    pattern: "Rani pink ground scattered with small gold sequin-like dots",
    border: "Gold zari border with a delicate woven bird-and-branch motif",
    pallu: "Gold pallu with a vivid, densely woven multicoloured parrot and floral-branch motif",
    occasion: "Festive / Wedding wear",   // inferred from the pallu detailing — confirm before publishing
    length: null,
    blouse: null,                // not visible in this photo — add a real blouse photo
    description: "A vivid rani pink handloom saree with small gold dots scattered across the body and a gold border traced with a delicate bird motif. The pallu is richly woven with colourful parrots perched on a flowering branch — a striking, statement finish to an otherwise clean, jewel-toned drape.",
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "New",
    sections: ["new"],
    photoNote: "All angles shown are crops from the one flat-lay photo you provided — add a draped/worn shot and a real blouse photo when you can."
  },
  {
    id: "real-09",
    isReal: true,
    name: "Black Handloom Saree with Gold Peacock Pallu",
    price: null,
    images: [
      "images/newarrivals/black-peacock-saree.jpg",
      "images/newarrivals/n3-border.jpg",
      "images/newarrivals/n3-pallu.jpg",
      "images/newarrivals/n3-detail.jpg"
    ],
    imageLabels: ["Full drape (flat-lay)", "Border detail", "Pallu detail", "Fabric detail"],
    colour: "Black / Gold",
    fabric: "Handloom Weave",
    fabricNote: "Placeholder name — swap for the real fabric once confirmed",
    weave: null,
    pattern: "Black ground scattered with small gold booti dots, finished with a row of woven peacock motifs above the border",
    border: "Slim red border with a golden inner band",
    pallu: "Gold pallu worked in repeating rows of blue and purple peacock motifs, framed by small diamond accents",
    occasion: null,             // add suggested occasion
    length: null,
    blouse: null,                // not visible in this photo — add a real blouse photo
    description: "A black handloom saree scattered with fine gold booti and a row of woven peacock motifs along the top of the border. The gold pallu carries the peacock theme further, worked in repeating rows of blue and purple against a warm gold ground, with a slim red border tying the two together.",
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "New",
    sections: ["new"],
    photoNote: "All angles shown are crops from the one flat-lay photo you provided — add a draped/worn shot and a real blouse photo when you can."
  },
  {
    id: "real-10",
    isReal: true,
    name: "Coral Pink Saree with Floral Paithani Border",
    price: null,
    images: [
      "images/newarrivals/pink-red-floral-border-saree.jpg",
      "images/newarrivals/n4-border.jpg",
      "images/newarrivals/n4-pallu.jpg",
      "images/newarrivals/n4-blouse.jpg",
      "images/newarrivals/n4-detail.jpg"
    ],
    imageLabels: ["Full drape (styled)", "Border detail", "Pallu detail", "Blouse piece", "Fabric detail"],
    colour: "Coral Pink / Gold",
    fabric: "Handloom Weave",
    fabricNote: "Placeholder name — swap for the real fabric once confirmed",
    weave: null,
    pattern: "Plain coral-pink body with a smooth, unembellished field",
    border: "Wide gold border woven with a colourful floral vine (white, orange and purple blooms)",
    pallu: "Orange-gold pallu in a fine striped weave, edged with the same floral vine border",
    occasion: "Festive / Wedding wear",   // inferred from the border detailing — confirm before publishing
    length: null,
    blouse: "Rani pink cap-sleeve blouse shown styled with the saree (blouse colour is a deeper pink than the saree body — confirm if this exact blouse is included or shown for styling only)",
    description: "A coral pink handloom saree with a clean, unbroken field of colour, framed by a wide gold border richly woven with a white, orange and purple floral vine. The pallu shifts to a warmer orange-gold in a fine striped weave, edged in the same floral border. Styled here with a rani pink blouse for contrast.",
    care: "Dry clean is recommended to protect the border colour and any metallic-look thread. If you choose to hand wash, use cold water with a mild detergent, wash it separately from other clothes, and don't wring it. Dry flat or on a padded hanger, out of direct sunlight, then iron on the reverse side on a low-to-medium setting with a thin cloth between the iron and the fabric. Store folded in a breathable cotton or muslin cloth, and refold along different lines every few months to avoid permanent crease marks.",
    shipping: "Orders are shipped within 3&ndash;5 business days of confirmation, using a trusted courier partner, and tracking details are shared with you on WhatsApp once the order is dispatched. Unused, unworn sarees with original tags and packaging intact can be returned within 7 days of delivery. To start a return or exchange, message us on WhatsApp with your order details and reason &mdash; we'll take it from there.",
    tag: "New",
    sections: ["new"],
    photoNote: "All angles shown are crops from the one styled photo you provided — please confirm whether the pink blouse shown is included with this saree or was used for styling only."
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
