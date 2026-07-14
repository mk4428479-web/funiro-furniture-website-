/* ============== Furniro - core script.js ============== */

/* ---------- Product data (mock) ---------- */
const PRODUCTS = [
  { id: 'p1', name: 'Syltherine', desc: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, tag: 'sale', discount: '-30%', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=60', category: 'chair', sku: 'SS001' },
  { id: 'p2', name: 'Leviosa', desc: 'Stylish cafe chair', price: 2500000, tag: null, img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=60', category: 'chair', sku: 'SS002' },
  { id: 'p3', name: 'Lolito', desc: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, tag: 'sale', discount: '-50%', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=60', category: 'sofa', sku: 'SS003' },
  { id: 'p4', name: 'Respira', desc: 'Outdoor bar table and stool', price: 500000, tag: 'new', discount: 'New', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=60', category: 'table', sku: 'SS004' },
  { id: 'p5', name: 'Grifo', desc: 'Night lamp', price: 1500000, img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=60', category: 'lamp', sku: 'SS005' },
  { id: 'p6', name: 'Muggo', desc: 'Small mug', price: 150000, tag: 'new', discount: 'New', img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=60', category: 'decor', sku: 'SS006' },
  { id: 'p7', name: 'Pingky', desc: 'Cute bed set', price: 7000000, oldPrice: 14000000, tag: 'sale', discount: '-50%', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=60', category: 'bed', sku: 'SS007' },
  { id: 'p8', name: 'Potty', desc: 'Minimalist flower pot', price: 500000, tag: 'new', discount: 'New', img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=60', category: 'decor', sku: 'SS008' },
  { id: 'p9', name: 'Asgaard sofa', desc: 'Modern comfort sofa', price: 250000, img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=60', category: 'sofa', sku: 'SS009' },
  { id: 'p10', name: 'Outdoor sofa set', desc: 'Weather-proof design', price: 2240000, tag: 'sale', oldPrice: 2500000, discount: '-10%', img: 'https://images.unsplash.com/photo-1519961655809-34fa156820ee?auto=format&fit=crop&w=600&q=60', category: 'sofa', sku: 'SS010' },
  { id: 'p11', name: 'Granite dining table', desc: 'With dining chair', price: 2500000, img: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=600&q=60', category: 'table', sku: 'SS011' },
  { id: 'p12', name: 'Outdoor bar table', desc: 'And stool', price: 250000, img: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?auto=format&fit=crop&w=600&q=60', category: 'table', sku: 'SS012' },
  { id: 'p13', name: 'Plain console', desc: 'With teak mirror', price: 258000, img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=60', category: 'decor', sku: 'SS013' },
  { id: 'p14', name: 'Grain design table', desc: 'Solid wood', price: 1500000, img: 'https://images.unsplash.com/photo-1449247666642-264389f5f5b1?auto=format&fit=crop&w=600&q=60', category: 'table', sku: 'SS014' },
  { id: 'p15', name: 'Kent coffee table', desc: 'Simple modern design', price: 225000, tag: 'sale', oldPrice: 250000, discount: '-10%', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=60', category: 'table', sku: 'SS015' },
  { id: 'p16', name: 'Round coffee table', desc: 'Color 2', price: 251000, tag: 'sale', oldPrice: 500000, discount: '-50%', img: 'https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?auto=format&fit=crop&w=600&q=60', category: 'table', sku: 'SS016' }
];

const fmtRp = n => 'Rp ' + n.toLocaleString('id-ID');

/* ---------- Shared header/footer injection ---------- */
const HEADER_HTML = `
<header class="site-header" id="siteHeader">
  <div class="container nav">
    <a href="index.html" class="brand" aria-label="Furniro home">
      <svg viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7 6.68L16 15.09l-4.7-8.41L16 0l4.7 6.68z" fill="#B88E2F"/><path d="M11.3 6.68l-4.7 8.42L2 6.68 6.6 0l4.7 6.68zM30 15.1h-6.2l-3.1-5.51 3.1-5.5H30l3.1 5.5-3.1 5.5z" fill="#B88E2F" opacity=".8"/></svg>
      Furniro
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" data-nav="home">Home</a></li>
      <li><a href="shop.html" data-nav="shop">Shop</a></li>
      <li><a href="about.html" data-nav="about">About</a></li>
      <li><a href="contact.html" data-nav="contact">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="login.html" class="icon-btn" title="Account" aria-label="Account">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
      </a>
      <button class="icon-btn" id="searchBtn" aria-label="Search">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      </button>
      <a href="wishlist.html" class="icon-btn" aria-label="Wishlist">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        <span class="badge" id="wishBadge">0</span>
      </a>
      <a href="cart.html" class="icon-btn" aria-label="Cart">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 4h3l2.7 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.5L22 8H6"/><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/></svg>
        <span class="badge" id="cartBadge">0</span>
      </a>
      <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="mobile-drawer" id="drawer">
  <button class="close" id="drawerClose" aria-label="Close">&times;</button>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="shop.html">Shop</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="login.html">Login</a></li>
    <li><a href="dashboard.html">Dashboard</a></li>
  </ul>
</div>`;

const PERKS_HTML = `
<section class="perks">
  <div class="container perks-grid">
    <div class="perk"><div class="ico">🏆</div><h4>High Quality</h4><p>crafted from top materials</p></div>
    <div class="perk"><div class="ico">✅</div><h4>Warranty Protection</h4><p>Over 2 years</p></div>
    <div class="perk"><div class="ico">🚚</div><h4>Free Shipping</h4><p>Order over 150 $</p></div>
    <div class="perk"><div class="ico">🎧</div><h4>24 / 7 Support</h4><p>Dedicated support</p></div>
  </div>
</section>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h3>Funiro.</h3>
        <h5>400 University Drive Suite 200<br/>Coral Gables, FL 33134 USA</h5>
      </div>
      <div>
        <h5>Links</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5>Help</h5>
        <ul>
          <li><a href="#">Payment Options</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Privacy Policies</a></li>
        </ul>
      </div>
      <div>
        <h5>Newsletter</h5>
        <form class="sub" onsubmit="event.preventDefault(); Toast.show('Subscribed!','success')">
          <input type="email" placeholder="Enter Your Email Address" required/>
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>
    <div class="copy">2023 furino. All rights reserved</div>
  </div>
</footer>`;

/* ---------- Toast ---------- */
const Toast = (() => {
  let host;
  return {
    show(msg, type = '') {
      if (!host) { host = document.createElement('div'); host.className = 'toasts'; document.body.appendChild(host); }
      const t = document.createElement('div');
      t.className = 'toast ' + type; t.textContent = msg;
      host.appendChild(t);
      setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(120%)'; setTimeout(() => t.remove(), 300); }, 2600);
    }
  };
})();

/* ---------- Storage helpers ---------- */
const Store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)) }
};

/* ---------- Cart / Wishlist ---------- */
const Cart = {
  key: 'furniro_cart',
  list() { return Store.get(this.key, []) },
  save(c) { Store.set(this.key, c); this.updateBadge(); },
  add(id, qty = 1) {
    const c = this.list();
    const it = c.find(i => i.id === id);
    if (it) it.qty += qty; else c.push({ id, qty });
    this.save(c); Toast.show('Added to cart', 'success');
  },
  remove(id) { this.save(this.list().filter(i => i.id !== id)); Toast.show('Removed from cart'); },
  setQty(id, qty) {
    const c = this.list();
    const it = c.find(i => i.id === id);
    if (it) { it.qty = Math.max(1, qty); this.save(c); }
  },
  count() { return this.list().reduce((s, i) => s + i.qty, 0) },
  total() { return this.list().reduce((s, i) => { const p = PRODUCTS.find(p => p.id === i.id); return s + (p ? p.price * i.qty : 0) }, 0) },
  updateBadge() { const b = document.getElementById('cartBadge'); if (b) b.textContent = this.count(); }
};

const Wish = {
  key: 'furniro_wish',
  list() { return Store.get(this.key, []) },
  toggle(id) {
    const w = this.list();
    const i = w.indexOf(id);
    if (i >= 0) { w.splice(i, 1); Toast.show('Removed from wishlist') }
    else { w.push(id); Toast.show('Added to wishlist', 'success') }
    Store.set(this.key, w); this.updateBadge();
  },
  has(id) { return this.list().includes(id) },
  updateBadge() { const b = document.getElementById('wishBadge'); if (b) b.textContent = this.list().length; }
};

/* ---------- Product card renderer ---------- */
function productCard(p) {
  return `
  <article class="product" data-id="${p.id}">
    <div class="thumb" style="background-image:url('${p.img}')">
      ${p.tag ? `<span class="badge-tag ${p.tag}">${p.discount || ''}</span>` : ''}
      <div class="overlay">
        <button class="add" data-add="${p.id}">Add to cart</button>
        <div class="row">
          <button data-share><span>↗</span> Share</button>
          <button data-compare>⇄ Compare</button>
          <button data-like="${p.id}">♡ Like</button>
        </div>
      </div>
    </div>
    <a class="info" href="product.html?id=${p.id}">
      <h4>${p.name}</h4>
      <p class="desc">${p.desc}</p>
      <div class="price">${fmtRp(p.price)} ${p.oldPrice ? `<s>${fmtRp(p.oldPrice)}</s>` : ''}</div>
    </a>
  </article>`;
}

function renderProducts(sel, list) {
  const el = document.querySelector(sel);
  if (!el) return;
  el.innerHTML = list.map(productCard).join('');
}

/* ---------- Global page init ---------- */
function initHeaderFooter() {
  const hh = document.getElementById('header-slot');
  if (hh) hh.innerHTML = HEADER_HTML;
  const pf = document.getElementById('perks-slot'); if (pf) pf.innerHTML = PERKS_HTML;
  const ff = document.getElementById('footer-slot'); if (ff) ff.innerHTML = FOOTER_HTML;

  // Active nav
  const page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
  const map = { '': 'home', 'index': 'home', 'shop': 'shop', 'product': 'shop', 'cart': 'shop', 'checkout': 'shop', 'about': 'about', 'contact': 'contact' };
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.dataset.nav === map[page]) a.classList.add('active');
  });

  // Sticky shadow
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    const st = document.getElementById('scrollTop');
    if (st) st.classList.toggle('show', window.scrollY > 400);
  });

  // Mobile drawer
  const b = document.getElementById('burger'), d = document.getElementById('drawer'), dc = document.getElementById('drawerClose');
  if (b) b.onclick = () => d.classList.add('open');
  if (dc) dc.onclick = () => d.classList.remove('open');

  Cart.updateBadge(); Wish.updateBadge();
}

/* ---------- Delegated actions ---------- */
document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) { Cart.add(add.dataset.add); return; }
  const like = e.target.closest('[data-like]');
  if (like) { Wish.toggle(like.dataset.like); return; }
});

/* ---------- Scroll-to-top ---------- */
function mountScrollTop() {
  const b = document.createElement('button');
  b.className = 'scroll-top'; b.id = 'scrollTop'; b.innerHTML = '↑'; b.setAttribute('aria-label', 'Scroll to top');
  b.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(b);
}

/* ---------- Debounce ---------- */
const debounce = (fn, ms = 250) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms) } };

/* ---------- Shop page logic ---------- */
function initShop() {
  const grid = document.querySelector('[data-shop-grid]');
  if (!grid) return;
  let state = { page: 1, per: 16, sort: 'default', q: '', cat: 'all' };

  function apply() {
    let list = PRODUCTS.slice();
    if (state.q) list = list.filter(p => (p.name + ' ' + p.desc).toLowerCase().includes(state.q.toLowerCase()));
    if (state.cat !== 'all') list = list.filter(p => p.category === state.cat);
    if (state.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (state.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    const total = list.length;
    const start = (state.page - 1) * state.per;
    const slice = list.slice(start, start + state.per);
    grid.innerHTML = slice.map(productCard).join('') || '<p class="empty-state">No products found.</p>';
    document.querySelector('[data-count]').textContent = `Showing ${Math.min(start + 1, total)}–${Math.min(start + state.per, total)} of ${total} results`;
    const pages = Math.max(1, Math.ceil(total / state.per));
    const pg = document.querySelector('[data-pagination]');
    if (pg) {
      let h = '';
      for (let i = 1; i <= pages; i++) h += `<a href="#" data-p="${i}" class="${i === state.page ? 'active' : ''}">${i}</a>`;
      if (pages > state.page) h += `<a href="#" data-p="${state.page + 1}">Next</a>`;
      pg.innerHTML = h;
    }
  }
  document.querySelector('[data-per]')?.addEventListener('change', e => { state.per = +e.target.value || 16; state.page = 1; apply(); });
  document.querySelector('[data-sort]')?.addEventListener('change', e => { state.sort = e.target.value; apply(); });
  document.querySelector('[data-search]')?.addEventListener('input', debounce(e => { state.q = e.target.value; state.page = 1; apply(); }, 250));
  document.querySelector('[data-cat]')?.addEventListener('change', e => { state.cat = e.target.value; state.page = 1; apply(); });
  document.querySelector('[data-pagination]')?.addEventListener('click', e => {
    const a = e.target.closest('a[data-p]'); if (!a) return; e.preventDefault();
    state.page = +a.dataset.p; apply(); window.scrollTo({ top: 200, behavior: 'smooth' });
  });
  apply();
}

/* ---------- Product detail ---------- */
function initProduct() {
  const host = document.querySelector('[data-pd]');
  if (!host) return;
  const id = new URLSearchParams(location.search).get('id') || 'p9';
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  document.title = `${p.name} — Furniro`;
  const thumbs = [p.img, p.img, p.img, p.img];
  host.innerHTML = `
    <div class="pd-thumbs">
      ${thumbs.map((s, i) => `<img src="${s}" class="${i === 0 ? 'active' : ''}" alt=""/>`).join('')}
    </div>
    <div class="pd-main"><img id="pdMain" src="${p.img}" alt="${p.name}"/></div>
    <div class="pd-info">
      <h1>${p.name}</h1>
      <div class="price">${fmtRp(p.price)}</div>
      <div class="rating"><span class="stars">★★★★☆</span><span>|  5 Customer Review</span></div>
      <p class="desc">${p.desc}. Setting the bar as one of the loudest speakers in its class, delivering rich sound with a well-balanced audio which boasts a clear midrange and extended highs.</p>
      <div class="opt-label">Size</div>
      <div class="sizes"><span class="size active">L</span><span class="size">XL</span><span class="size">XS</span></div>
      <div class="opt-label">Color</div>
      <div class="colors"><span class="color active" style="background:#816DFA"></span><span class="color" style="background:#000"></span><span class="color" style="background:#B88E2F"></span></div>
      <div class="pd-actions">
        <div class="qty"><button data-q="-">-</button><input value="1" id="pdQty"/><button data-q="+">+</button></div>
        <button class="btn" id="pdAdd">Add To Cart</button>
        <button class="btn">+ Compare</button>
      </div>
      <div class="pd-meta">
        <div class="row"><b>SKU</b><span>: ${p.sku}</span></div>
        <div class="row"><b>Category</b><span>: ${p.category}</span></div>
        <div class="row"><b>Tags</b><span>: Sofa, Chair, Home, Shop</span></div>
        <div class="row"><b>Share</b><span>: 📘 💼 🐦</span></div>
      </div>
    </div>`;
  host.querySelectorAll('.pd-thumbs img').forEach(t => {
    t.onclick = () => {
      host.querySelectorAll('.pd-thumbs img').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      host.querySelector('#pdMain').src = t.src;
    };
  });
  host.querySelectorAll('.size').forEach(s => s.onclick = () => { host.querySelectorAll('.size').forEach(x => x.classList.remove('active')); s.classList.add('active'); });
  host.querySelectorAll('.color').forEach(s => s.onclick = () => { host.querySelectorAll('.color').forEach(x => x.classList.remove('active')); s.classList.add('active'); });
  host.querySelectorAll('[data-q]').forEach(b => b.onclick = () => {
    const i = host.querySelector('#pdQty'); let v = +i.value + (b.dataset.q === '+' ? 1 : -1); i.value = Math.max(1, v);
  });
  host.querySelector('#pdAdd').onclick = () => Cart.add(p.id, +host.querySelector('#pdQty').value);

  // Tabs
  document.querySelectorAll('.tab-heads button').forEach(b => {
    b.onclick = () => {
      document.querySelectorAll('.tab-heads button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      document.querySelectorAll('.tab-panel').forEach(x => x.hidden = x.dataset.tab !== b.dataset.tab);
    };
  });

  // Related
  const related = PRODUCTS.filter(x => x.id !== p.id).slice(0, 4);
  renderProducts('[data-related]', related);
}

/* ---------- Cart page ---------- */
function initCart() {
  const wrap = document.querySelector('[data-cart-page]');
  if (!wrap) return;
  function render() {
    const items = Cart.list().map(i => ({ ...PRODUCTS.find(p => p.id === i.id), qty: i.qty })).filter(i => i.id);
    const body = document.querySelector('[data-cart-body]');
    if (!items.length) {
      body.innerHTML = `<tr><td colspan="5"><div class="empty-state">Your cart is empty. <a href="shop.html" class="link" style="color:var(--brand)">Continue shopping →</a></div></td></tr>`;
    } else {
      body.innerHTML = items.map(i => `
        <tr>
          <td><img src="${i.img}" alt=""/> <span style="color:#9F9F9F;margin-left:12px">${i.name}</span></td>
          <td style="color:#9F9F9F">${fmtRp(i.price)}</td>
          <td><input type="number" min="1" value="${i.qty}" class="qty-input" data-qty="${i.id}"/></td>
          <td>${fmtRp(i.price * i.qty)}</td>
          <td><button data-del="${i.id}" aria-label="Remove" style="color:var(--brand);font-size:20px">🗑</button></td>
        </tr>`).join('');
    }
    document.querySelector('[data-cart-sub]').textContent = fmtRp(Cart.total());
    document.querySelector('[data-cart-total]').textContent = fmtRp(Cart.total());
  }
  wrap.addEventListener('click', e => {
    const del = e.target.closest('[data-del]'); if (del) { Cart.remove(del.dataset.del); render(); }
  });
  wrap.addEventListener('change', e => {
    const q = e.target.closest('[data-qty]'); if (q) { Cart.setQty(q.dataset.qty, +q.value || 1); render(); }
  });
  render();
}

/* ---------- Home page carousels ---------- */
function initHome() {
  renderProducts('[data-home-grid]', PRODUCTS.slice(0, 8));
  // gallery dots (visual only)
  document.querySelectorAll('.dot').forEach((d, i) => d.onclick = () => {
    document.querySelectorAll('.dot').forEach(x => x.classList.remove('active'));
    d.classList.add('active');
  });
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeaderFooter();
  mountScrollTop();
  initHome();
  initShop();
  initProduct();
  initCart();
});

window.Furniro = { Cart, Wish, Toast, PRODUCTS, fmtRp, productCard, renderProducts };
