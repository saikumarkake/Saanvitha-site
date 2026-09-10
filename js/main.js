/* =========================================================
   Saanvitha — shared behaviour
   ========================================================= */

// ---- Config: update before launch ----
const WHATSAPP_NUMBER = "919999999999"; // placeholder — replace with real WhatsApp number, digits only incl. country code

function waLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ---- Mobile nav ----
function initNav(){
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if(!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("open");
    document.body.style.overflow = "";
  }));
}

// ---- Currency ----
function formatPrice(p){
  if(p == null) return "Price on request";
  return "₹" + p.toLocaleString("en-IN");
}

// ---- Product card markup ----
function productCardHTML(p){
  const thumb = p.image || (p.images && p.images[0]);
  const media = thumb
    ? `<img src="${thumb}" alt="${p.name}" loading="lazy">`
    : `<div class="placeholder-media">
         <div class="ph-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5.5-5.5L3 19"/></svg></div>
         <span>Sample — add photo</span>
       </div>`;
  const tag = p.tag ? `<span class="card-tag">${p.isReal ? p.tag : "Sample · " + p.tag}</span>` : (!p.isReal ? `<span class="card-tag">Sample</span>` : "");

  const fabric = p.isReal ? (p.fabric || `<span class="ph">Add detail</span>`) : p.fabric;
  const weave = p.isReal ? (p.weave || `<span class="ph">Add detail</span>`) : p.weave;
  const colour = p.colour || `<span class="ph">Add detail</span>`;

  return `
  <article class="product-card" data-colour="${p.colour||''}" data-fabric="${p.fabric||''}" data-weave="${p.weave||''}" data-occasion="${p.occasion||''}" data-price="${p.price||0}">
    <a href="product.html?id=${p.id}" class="card-media" aria-label="View ${p.name}">
      ${tag}
      ${media}
    </a>
    <div class="card-body">
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="card-price">${formatPrice(p.price)}</div>
      <div class="card-meta">
        <div><span class="label">Fabric</span><span class="value">${fabric}</span></div>
        <div><span class="label">Weave</span><span class="value">${weave}</span></div>
        <div><span class="label">Colour</span><span class="value">${colour}</span></div>
      </div>
      <div class="card-actions">
        <a href="product.html?id=${p.id}" class="btn btn-outline btn-sm btn-block">View details</a>
        <a href="${waLink('Hi Saanvitha, I would like to enquire about the ' + p.name + '.')}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm btn-block">
          <svg class="wa-icon" viewBox="0 0 32 32" fill="currentColor"><path d="M16 2C8.3 2 2 8.3 2 16c0 2.6.7 5.1 2 7.3L2 30l6.9-1.8c2.1 1.2 4.5 1.8 7.1 1.8 7.7 0 14-6.3 14-14S23.7 2 16 2zm0 25.3c-2.3 0-4.5-.6-6.4-1.8l-.5-.3-4.1 1.1 1.1-4-.3-.5C4.6 20 4 18 4 16 4 9.4 9.4 4 16 4s12 5.4 12 12-5.4 11.3-12 11.3zm6.6-8.4c-.4-.2-2.1-1-2.4-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.9 5.1.8.3 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5z"/></svg>
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  </article>`;
}

function renderGrid(container, products){
  if(!container) return;
  if(products.length === 0){
    container.innerHTML = `<div class="empty-state">No sarees match those filters yet. Try clearing a few and searching again.</div>`;
    return;
  }
  container.innerHTML = products.map(productCardHTML).join("");
}

// ---- Shop page filtering ----
function initShop(){
  const grid = document.querySelector("#shop-grid");
  if(!grid) return;

  const state = { colour: new Set(), fabric: new Set(), weave: new Set(), occasion: new Set(), maxPrice: 10000, sort: "featured" };

  function buildFilterGroup(key, label){
    const wrap = document.querySelector(`[data-filter-group="${key}"]`);
    if(!wrap) return;
    wrap.innerHTML = FILTER_TAXONOMY[key].map(val => `
      <label>
        <input type="checkbox" value="${val}" data-filter="${key}">
        ${val}
      </label>`).join("");
  }
  ["colour","fabric","weave","occasion"].forEach(k => buildFilterGroup(k));

  document.querySelectorAll("[data-filter]").forEach(input => {
    input.addEventListener("change", () => {
      const key = input.dataset.filter;
      if(input.checked) state[key].add(input.value);
      else state[key].delete(input.value);
      apply();
    });
  });

  const priceRange = document.querySelector("#price-range");
  const priceOut = document.querySelector("#price-range-out");
  if(priceRange){
    priceRange.addEventListener("input", () => {
      state.maxPrice = Number(priceRange.value);
      priceOut.textContent = formatPrice(state.maxPrice);
      apply();
    });
  }

  const sortSelect = document.querySelector("#sort-select");
  if(sortSelect){
    sortSelect.addEventListener("change", () => { state.sort = sortSelect.value; apply(); });
  }

  const clearBtn = document.querySelector("#clear-filters");
  if(clearBtn){
    clearBtn.addEventListener("click", () => {
      state.colour.clear(); state.fabric.clear(); state.weave.clear(); state.occasion.clear();
      state.maxPrice = 10000;
      document.querySelectorAll("[data-filter]").forEach(i => i.checked = false);
      if(priceRange){ priceRange.value = 10000; priceOut.textContent = formatPrice(10000); }
      apply();
    });
  }

  function apply(){
    let items = PRODUCTS.filter(p => {
      if(state.colour.size && !state.colour.has(p.colour)) return false;
      if(state.fabric.size && !state.fabric.has(p.fabric)) return false;
      if(state.weave.size && !state.weave.has(p.weave)) return false;
      if(state.occasion.size && !state.occasion.has(p.occasion)) return false;
      const price = p.price ?? 0;
      if(p.price != null && price > state.maxPrice) return false;
      return true;
    });
    if(state.sort === "price-asc") items = items.slice().sort((a,b) => (a.price??0)-(b.price??0));
    if(state.sort === "price-desc") items = items.slice().sort((a,b) => (b.price??0)-(a.price??0));
    renderGrid(grid, items);
    const count = document.querySelector("#result-count");
    if(count) count.textContent = `${items.length} saree${items.length===1?"":"s"}`;
  }

  apply();

  const filterToggle = document.querySelector("#mobile-filter-toggle");
  const filterPanel = document.querySelector(".filters");
  if(filterToggle && filterPanel){
    filterToggle.addEventListener("click", () => filterPanel.classList.toggle("open-mobile"));
  }
}

// ---- Home page rails ----
function initHomeRails(){
  const featured = document.querySelector("#featured-grid");
  const arrivals = document.querySelector("#arrivals-rail");
  const sellers = document.querySelector("#sellers-rail");
  if(featured) renderGrid(featured, PRODUCTS.slice(0,4));
  if(arrivals) renderGrid(arrivals, PRODUCTS.filter(p => p.tag === "New" || p.isReal));
  if(sellers) renderGrid(sellers, PRODUCTS.filter(p => p.tag === "Best seller"));
}

// ---- Product detail page ----
function initProductDetail(){
  const root = document.querySelector("#pdp-root");
  if(!root) return;
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "real-01";
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];

  const val = (v) => v ? v : `<span class="ph">Add detail before publishing</span>`;
  const gallery = p.images && p.images.length ? p.images : (p.image ? [p.image] : []);
  const thumbLabels = ["Full drape", "Border detail", "Pallu detail", "View"];
  const mediaMain = gallery.length
    ? `<img src="${gallery[0]}" alt="${p.name}" id="pdp-main-img">`
    : `<div class="placeholder-media" id="pdp-main-img">
         <div class="ph-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5.5-5.5L3 19"/></svg></div>
         <span>Sample — add photo</span>
       </div>`;

  root.innerHTML = `
    <div class="pdp-gallery">
      <div class="pdp-main-media">${mediaMain}</div>
      <div class="pdp-thumbs">
        ${gallery.map((src, i) => `<button class="${i===0?'active':''}" data-src="${src}" aria-label="${thumbLabels[i] || 'View ' + (i+1)}"><img src="${src}" alt="${thumbLabels[i] || 'Thumbnail'} of ${p.name}"></button>`).join("")}
      </div>
      ${gallery.length > 1 ? `<p style="font-size:0.78rem;color:var(--ink-faint);margin-top:10px;">All angles shown are crops of the one photo you provided &mdash; add real additional-angle photos when you have them.</p>` : ""}
    </div>
    <div class="pdp-info">
      <div class="breadcrumb"><a href="index.html">Home</a> / <a href="shop.html">Shop</a> / ${p.name}</div>
      <h1>${p.name}</h1>
      <div class="pdp-price">${formatPrice(p.price)}</div>
      <div class="kinara"></div>
      <table class="spec-table">
        <tr><th>Fabric</th><td class="${p.fabric?'':'ph'}">${val(p.fabric)}</td></tr>
        <tr><th>Weave</th><td class="${p.weave?'':'ph'}">${val(p.weave)}</td></tr>
        <tr><th>Colour</th><td>${val(p.colour)}</td></tr>
        <tr><th>Saree length</th><td class="${p.length?'':'ph'}">${val(p.length)}</td></tr>
        <tr><th>Blouse</th><td class="${p.blouse?'':'ph'}">${val(p.blouse)}</td></tr>
      </table>
      <div class="pdp-actions">
        <a href="${waLink('Hi Saanvitha, I would like to order the ' + p.name + '.')}" target="_blank" rel="noopener" class="btn btn-whatsapp">
          <svg class="wa-icon" viewBox="0 0 32 32" fill="currentColor"><path d="M16 2C8.3 2 2 8.3 2 16c0 2.6.7 5.1 2 7.3L2 30l6.9-1.8c2.1 1.2 4.5 1.8 7.1 1.8 7.7 0 14-6.3 14-14S23.7 2 16 2zm0 25.3c-2.3 0-4.5-.6-6.4-1.8l-.5-.3-4.1 1.1 1.1-4-.3-.5C4.6 20 4 18 4 16 4 9.4 9.4 4 16 4s12 5.4 12 12-5.4 11.3-12 11.3zm6.6-8.4c-.4-.2-2.1-1-2.4-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.9 5.1.8.3 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5z"/></svg>
          Order on WhatsApp
        </a>
        <a href="${waLink('Hi Saanvitha, I have a question about the ' + p.name + '.')}" target="_blank" rel="noopener" class="btn btn-outline">Enquire now</a>
      </div>
      ${(!p.fabric || !p.weave || p.price==null) ? `<div class="pdp-note">Some details for this saree — ${[!p.fabric&&'fabric', !p.weave&&'weave', p.price==null&&'price'].filter(Boolean).join(', ')} — haven't been added yet. Reach out on WhatsApp and we'll confirm before you order.</div>` : ""}
      <div class="accordion">
        <details open>
          <summary>Description</summary>
          <div class="acc-body ${p.isReal ? 'ph' : ''}">${p.isReal ? "A detailed description of this saree hasn't been added yet — including its craft story, motif inspiration and styling notes." : "A quiet, versatile weave built for both festive wear and everyday elegance. Pair with a contrast blouse for a modern look, or keep it classic with a matching one."}</div>
        </details>
        <details>
          <summary>Care instructions</summary>
          <div class="acc-body ${p.care?'':'ph'}">${val(p.care)}</div>
        </details>
        <details>
          <summary>Shipping &amp; returns</summary>
          <div class="acc-body ${p.shipping?'':'ph'}">${p.shipping ? p.shipping : "Add your shipping timelines and return policy here."}</div>
        </details>
      </div>
    </div>`;

  const thumbs = root.querySelectorAll(".pdp-thumbs button");
  const mainSlot = () => document.querySelector("#pdp-main-img");
  thumbs.forEach(btn => {
    btn.addEventListener("click", () => {
      thumbs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const img = mainSlot();
      if(img && img.tagName === "IMG") img.src = btn.dataset.src;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHomeRails();
  initShop();
  initProductDetail();
});
