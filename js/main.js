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
  const nav = document.querySelector(".mobile-nav");
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
      ${p.articleNo ? `<div class="card-sku"><span class="sku-label">Article No.</span> <span class="sku-value">${p.articleNo}</span></div>` : ""}
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

// ---- Site search (header icon + slide-down bar) ----
function initSiteSearch(){
  const toggle = document.querySelector("#search-toggle");
  const bar = document.querySelector("#site-search-bar");
  const input = document.querySelector("#site-search-input");
  const closeBtn = document.querySelector("#search-close");
  if(!toggle || !bar || !input) return;

  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("q") || "";

  function openBar(prefill){
    bar.classList.add("open");
    toggle.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
    if(prefill != null) input.value = prefill;
    setTimeout(() => input.focus(), 180);
  }
  function closeBar(){
    bar.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    bar.classList.contains("open") ? closeBar() : openBar();
  });
  closeBtn.addEventListener("click", () => { input.value = ""; closeBar(); });

  input.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){ input.value = ""; closeBar(); }
    if(e.key !== "Enter") return;
    const term = input.value.trim();
    // On the shop page, filter in place; everywhere else, jump to Shop with the query.
    if(window.__shopSearch){
      window.__shopSearch(term);
      closeBar();
    } else if(term){
      location.href = "shop.html?q=" + encodeURIComponent(term);
    }
  });

  // Arriving from another page with ?q=... — open pre-filled so the person sees what they searched.
  if(initialQuery) openBar(initialQuery);
}


function initShop(){
  const grid = document.querySelector("#shop-grid");
  if(!grid) return;

  const SECTION_LABELS = { featured: "Featured sarees", new: "New arrivals", bestseller: "Best sellers" };
  const params = new URLSearchParams(location.search);
  const initialSection = params.get("section");
  const initialQuery = params.get("q") || "";

  const state = { colour: new Set(), fabric: new Set(), weave: new Set(), occasion: new Set(), maxPrice: 10000, sort: "featured", section: (initialSection && SECTION_LABELS[initialSection]) ? initialSection : null, search: initialQuery.trim() };

  function renderSectionNote(){
    const note = document.querySelector("#section-filter-note");
    if(!note) return;
    const parts = [];
    if(state.section) parts.push(`Showing: <strong>${SECTION_LABELS[state.section]}</strong>`);
    if(state.search) parts.push(`Results for &ldquo;<strong>${state.search}</strong>&rdquo;`);
    if(parts.length){
      note.innerHTML = parts.join(" &middot; ") + ` &middot; <a href="shop.html" id="clear-search-note">Clear</a>`;
      note.style.display = "block";
      const clearNote = document.querySelector("#clear-search-note");
      if(clearNote) clearNote.addEventListener("click", (e) => {
        e.preventDefault();
        state.section = null; state.search = "";
        const input = document.querySelector("#site-search-input");
        if(input) input.value = "";
        history.replaceState(null, "", "shop.html");
        renderSectionNote();
        apply();
      });
    } else {
      note.style.display = "none";
    }
  }

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

  function clearAll(){
    state.colour.clear(); state.fabric.clear(); state.weave.clear(); state.occasion.clear();
    state.maxPrice = 10000;
    state.section = null;
    state.search = "";
    const searchInput = document.querySelector("#site-search-input");
    if(searchInput) searchInput.value = "";
    history.replaceState(null, "", "shop.html");
    document.querySelectorAll("[data-filter]").forEach(i => i.checked = false);
    if(priceRange){ priceRange.value = 10000; priceOut.textContent = formatPrice(10000); }
    renderSectionNote();
    apply();
  }
  const clearBtn = document.querySelector("#clear-filters");
  if(clearBtn) clearBtn.addEventListener("click", clearAll);
  const clearBtnMobile = document.querySelector("#clear-filters-mobile");
  if(clearBtnMobile) clearBtnMobile.addEventListener("click", clearAll);

  // ---- Mobile filter sheet open/close ----
  const filterPanel = document.querySelector("#filter-panel");
  const backdrop = document.querySelector("#filter-backdrop");
  const openBtn = document.querySelector("#filter-open");
  const closeBtn = document.querySelector("#filter-close");
  const applyBtnMobile = document.querySelector("#apply-filters-mobile");

  function openSheet(){
    filterPanel.classList.add("open-mobile");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeSheet(){
    filterPanel.classList.remove("open-mobile");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
  if(openBtn) openBtn.addEventListener("click", openSheet);
  if(closeBtn) closeBtn.addEventListener("click", closeSheet);
  if(backdrop) backdrop.addEventListener("click", closeSheet);
  if(applyBtnMobile) applyBtnMobile.addEventListener("click", closeSheet);

  // ---- Active filter chips ----
  function renderChips(){
    const wrap = document.querySelector("#active-chips");
    if(!wrap) return;
    const chips = [];
    const closeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
    ["colour","fabric","weave","occasion"].forEach(key => {
      state[key].forEach(val => {
        chips.push({ label: val, remove: () => { state[key].delete(val); syncCheckboxes(); apply(); } });
      });
    });
    if(state.maxPrice < 10000){
      chips.push({ label: `Under ${formatPrice(state.maxPrice)}`, remove: () => {
        state.maxPrice = 10000;
        if(priceRange){ priceRange.value = 10000; priceOut.textContent = formatPrice(10000); }
        apply();
      }});
    }
    if(state.search){
      chips.push({ label: `“${state.search}”`, remove: () => {
        state.search = "";
        const si = document.querySelector("#site-search-input");
        if(si) si.value = "";
        history.replaceState(null, "", "shop.html");
        renderSectionNote();
        apply();
      }});
    }
    wrap.innerHTML = chips.map((c, i) => `<span class="chip" data-chip="${i}">${c.label}<button aria-label="Remove ${c.label}">${closeIcon}</button></span>`).join("")
      + (chips.length > 1 ? `<span class="chip chip-clear-all" id="chip-clear-all">Clear all</span>` : "");
    chips.forEach((c, i) => {
      const el = wrap.querySelector(`[data-chip="${i}"] button`);
      if(el) el.addEventListener("click", () => { c.remove(); renderChips(); });
    });
    const clearAllChip = document.querySelector("#chip-clear-all");
    if(clearAllChip) clearAllChip.addEventListener("click", clearAll);
  }
  function syncCheckboxes(){
    document.querySelectorAll("[data-filter]").forEach(i => {
      i.checked = state[i.dataset.filter].has(i.value);
    });
  }

  function apply(){
    const term = state.search.trim().toLowerCase();
    let items = PRODUCTS.filter(p => {
      if(state.section && !(p.sections||[]).includes(state.section)) return false;
      if(state.colour.size && !state.colour.has(p.colour)) return false;
      if(state.fabric.size && !state.fabric.has(p.fabric)) return false;
      if(state.weave.size && !state.weave.has(p.weave)) return false;
      if(state.occasion.size && !state.occasion.has(p.occasion)) return false;
      const price = p.price ?? 0;
      if(p.price != null && price > state.maxPrice) return false;
      if(term){
        const haystack = [p.name, p.colour, p.fabric, p.weave, p.occasion, p.pattern].filter(Boolean).join(" ").toLowerCase();
        if(!haystack.includes(term)) return false;
      }
      return true;
    });
    if(state.sort === "price-asc") items = items.slice().sort((a,b) => (a.price??0)-(b.price??0));
    if(state.sort === "price-desc") items = items.slice().sort((a,b) => (b.price??0)-(a.price??0));
    renderGrid(grid, items);
    const count = document.querySelector("#result-count");
    if(count) count.textContent = `${items.length} saree${items.length===1?"":"s"}`;
    if(applyBtnMobile) applyBtnMobile.textContent = `Show ${items.length} saree${items.length===1?"":"s"}`;
    const activeCount = state.colour.size + state.fabric.size + state.weave.size + state.occasion.size + (state.maxPrice < 10000 ? 1 : 0);
    if(openBtn){
      let b = openBtn.querySelector(".filter-count");
      if(activeCount > 0){
        if(!b){ b = document.createElement("span"); b.className = "filter-count"; openBtn.appendChild(b); }
        b.textContent = activeCount;
      } else if(b){ b.remove(); }
    }
    renderChips();
  }

  // Exposed so the header search bar can filter this page in place instead of navigating away.
  window.__shopSearch = function(term){
    state.search = term;
    history.replaceState(null, "", term ? ("shop.html?q=" + encodeURIComponent(term)) : "shop.html");
    renderSectionNote();
    apply();
  };

  renderSectionNote();
  apply();
}

// ---- Home page rails ----
function initHomeRails(){
  const featured = document.querySelector("#featured-grid");
  const arrivals = document.querySelector("#arrivals-rail");
  const sellers = document.querySelector("#sellers-rail");
  if(featured) renderGrid(featured, PRODUCTS.filter(p => (p.sections||[]).includes("featured")));
  if(arrivals) renderGrid(arrivals, PRODUCTS.filter(p => (p.sections||[]).includes("new")));
  if(sellers) renderGrid(sellers, PRODUCTS.filter(p => (p.sections||[]).includes("bestseller")));
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
  const thumbLabels = ["Full drape", "Border detail", "Pallu detail", "Blouse", "Fabric detail"];
  const mediaMain = gallery.length
    ? `<img src="${gallery[0]}" alt="${p.name}" id="pdp-main-img">`
    : `<div class="placeholder-media" id="pdp-main-img">
         <div class="ph-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5.5-5.5L3 19"/></svg></div>
         <span>Sample — add photo</span>
       </div>`;

  root.innerHTML = `
    <button type="button" class="pdp-back-btn" onclick="history.length > 1 ? history.back() : (location.href='shop.html')" aria-label="Go back">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 18l-6-6 6-6"/></svg>
      Back
    </button>
    <div class="pdp-gallery">
      <div class="pdp-main-media">${mediaMain}</div>
      <div class="pdp-thumbs">
        ${gallery.map((src, i) => `<button class="${i===0?'active':''}" data-src="${src}" aria-label="${(p.imageLabels && p.imageLabels[i]) || thumbLabels[i] || 'View ' + (i+1)}"><img src="${src}" alt="${(p.imageLabels && p.imageLabels[i]) || thumbLabels[i] || 'Thumbnail'} of ${p.name}"></button>`).join("")}
      </div>
      ${gallery.length > 1 && !p.photoNote ? (p.isReal
        ? `<p class="crop-note" style="font-size:0.78rem;color:var(--ink-faint);margin-top:10px;">All angles shown are crops of the one photo you provided &mdash; add real additional-angle photos when you have them.</p>`
        : `<p class="crop-note" style="font-size:0.78rem;color:var(--ink-faint);margin-top:10px;">Generated placeholder artwork for layout preview only &mdash; not a real product photo. Replace with your own photos before launch.</p>`
      ) : ""}
      ${p.photoNote ? `<p class="crop-note" style="font-size:0.78rem;color:var(--ink-faint);margin-top:10px;">${p.photoNote}</p>` : ""}
    </div>
    <div class="pdp-info">
      <div class="breadcrumb"><a href="index.html">Home</a> / <a href="shop.html">Shop</a> / ${p.name}</div>
      <h1>${p.name}</h1>
      ${p.articleNo ? `<div class="pdp-sku"><span class="sku-label">Article No.</span> <span class="sku-value">${p.articleNo}</span></div>` : ""}
      <div class="pdp-price">${formatPrice(p.price)}</div>
      <div class="kinara"></div>
      <table class="spec-table">
        <tr><th>Article No.</th><td class="${p.articleNo?'':'ph'}">${val(p.articleNo)}</td></tr>
        <tr><th>Fabric</th><td class="${p.fabric?'':'ph'}">${val(p.fabric)}${p.fabricNote ? `<br><span class="ph" style="font-size:0.78rem;">${p.fabricNote}</span>` : ""}</td></tr>
        <tr><th>Weave</th><td class="${p.weave?'':'ph'}">${val(p.weave)}</td></tr>
        <tr><th>Colour</th><td>${val(p.colour)}</td></tr>
        <tr><th>Pattern</th><td class="${p.pattern?'':'ph'}">${val(p.pattern)}</td></tr>
        <tr><th>Border</th><td class="${p.border?'':'ph'}">${val(p.border)}</td></tr>
        <tr><th>Pallu</th><td class="${p.pallu?'':'ph'}">${val(p.pallu)}</td></tr>
        <tr><th>Occasion</th><td class="${p.occasion?'':'ph'}">${val(p.occasion)}</td></tr>
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
      ${(!p.fabric || p.fabricNote || !p.weave || p.price==null) ? `<div class="pdp-note">Some details for this saree — ${[(!p.fabric||p.fabricNote)&&'fabric', !p.weave&&'weave', p.price==null&&'price'].filter(Boolean).join(', ')} — ${p.fabricNote ? 'are still placeholders or ' : ''}haven't been fully confirmed yet. Reach out on WhatsApp and we'll confirm before you order.</div>` : ""}
      <div class="accordion">
        <details>
          <summary>Description</summary>
          <div class="acc-body ${p.isReal && !p.description ? 'ph' : ''}">${p.description ? p.description : (p.isReal ? "A detailed description of this saree hasn't been added yet — including its craft story, motif inspiration and styling notes." : "A quiet, versatile weave built for both festive wear and everyday elegance. Pair with a contrast blouse for a modern look, or keep it classic with a matching one.")}</div>
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
  let currentIndex = 0;

  function setActive(i){
    currentIndex = i;
    thumbs.forEach((b, bi) => b.classList.toggle("active", bi === i));
    const img = mainSlot();
    if(img && img.tagName === "IMG" && gallery[i]) img.src = gallery[i];
  }

  thumbs.forEach((btn, i) => {
    btn.addEventListener("click", () => setActive(i));
  });

  initLightbox(gallery, () => currentIndex, setActive);
}

// ---- Full-screen image lightbox (product page) ----
function initLightbox(gallery, getIndex, setIndex){
  if(!gallery.length) return;
  const mainImg = document.querySelector("#pdp-main-img");
  const lightbox = document.querySelector("#lightbox");
  if(!mainImg || mainImg.tagName !== "IMG" || !lightbox) return;

  const lbImg = document.querySelector("#lightbox-img");
  const lbCounter = document.querySelector("#lightbox-counter");
  const closeBtn = document.querySelector("#lightbox-close");
  const prevBtn = document.querySelector("#lightbox-prev");
  const nextBtn = document.querySelector("#lightbox-next");

  function render(){
    const i = getIndex();
    lbImg.src = gallery[i];
    if(lbCounter) lbCounter.textContent = gallery.length > 1 ? `${i+1} / ${gallery.length}` : "";
    const multi = gallery.length > 1;
    if(prevBtn) prevBtn.style.display = multi ? "flex" : "none";
    if(nextBtn) nextBtn.style.display = multi ? "flex" : "none";
  }

  function open(){
    render();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close(){
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function next(){ setIndex((getIndex() + 1) % gallery.length); render(); }
  function prev(){ setIndex((getIndex() - 1 + gallery.length) % gallery.length); render(); }

  mainImg.style.cursor = "zoom-in";
  mainImg.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  lightbox.addEventListener("click", (e) => { if(e.target === lightbox) close(); });

  document.addEventListener("keydown", (e) => {
    if(!lightbox.classList.contains("open")) return;
    if(e.key === "Escape") close();
    if(e.key === "ArrowRight") next();
    if(e.key === "ArrowLeft") prev();
  });

  // Touch swipe for mobile
  let startX = 0, deltaX = 0, dragging = false;
  lbImg.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    deltaX = 0;
    dragging = true;
  }, { passive: true });
  lbImg.addEventListener("touchmove", (e) => {
    if(!dragging) return;
    deltaX = e.touches[0].clientX - startX;
  }, { passive: true });
  lbImg.addEventListener("touchend", () => {
    if(!dragging) return;
    dragging = false;
    if(deltaX < -40) next();
    else if(deltaX > 40) prev();
    deltaX = 0;
  });
}

// ---- Home hero carousel ----
function initHeroCarousel(){
  const root = document.querySelector("#hero-carousel");
  const track = document.querySelector("#hero-carousel-track");
  const dotsWrap = document.querySelector("#hero-carousel-dots");
  if(!root || !track) return;

  const slides = Array.from(track.children);
  if(slides.length <= 1) return;

  let index = 0;
  let timer = null;
  const AUTO_MS = 4500;

  dotsWrap.innerHTML = slides.map((_, i) =>
    `<button aria-label="Go to slide ${i+1}" class="${i===0?'active':''}"></button>`
  ).join("");
  const dots = Array.from(dotsWrap.children);

  function goTo(i){
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === index));
  }

  function next(){ goTo(index + 1); }

  function startAuto(){
    stopAuto();
    timer = setInterval(next, AUTO_MS);
  }
  function stopAuto(){
    if(timer) clearInterval(timer);
    timer = null;
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { goTo(i); startAuto(); });
  });

  // Pause auto-advance while the user is interacting
  root.addEventListener("mouseenter", stopAuto);
  root.addEventListener("mouseleave", startAuto);

  // Touch swipe, with drag-vs-tap detection so a swipe doesn't
  // accidentally trigger the slide's link navigation
  let startX = 0, currentX = 0, dragging = false, moved = false;

  track.addEventListener("touchstart", (e) => {
    stopAuto();
    startX = e.touches[0].clientX;
    currentX = startX;
    dragging = true;
    moved = false;
    track.style.transition = "none";
  }, { passive: true });

  track.addEventListener("touchmove", (e) => {
    if(!dragging) return;
    currentX = e.touches[0].clientX;
    const delta = currentX - startX;
    if(Math.abs(delta) > 6) moved = true;
    const percent = (delta / track.offsetWidth) * 100;
    track.style.transform = `translateX(calc(-${index * 100}% + ${percent}%))`;
  }, { passive: true });

  track.addEventListener("touchend", () => {
    dragging = false;
    track.style.transition = "";
    const delta = currentX - startX;
    if(delta < -40) goTo(index + 1);
    else if(delta > 40) goTo(index - 1);
    else goTo(index);
    startAuto();
  });

  // Prevent the click-through-navigation when the touch was actually a swipe
  slides.forEach(slide => {
    slide.addEventListener("click", (e) => {
      if(moved) e.preventDefault();
    });
  });

  goTo(0);
  startAuto();
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHomeRails();
  initShop();
  initProductDetail();
  initHeroCarousel();
  initSiteSearch();
});
