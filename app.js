const products = [
  { id: "twisted-kit", name: "Twisted Shake Cup Kit", category: "Exclusives", pack: "Foodservice case", desc: "16 oz branded cup system with clear gummy topper.", tags: ["Signature", "Foodservice"], anchor: true },
  { id: "gummy-everything", name: "Gummy Munchies — A Lil' of Everything", category: "Exclusives", pack: "12 bags / case", desc: "The signature colorful sweet-and-sour gummy mix.", tags: ["Signature", "Gummies"], anchor: true },
  { id: "gummy-sea", name: "Gummy Munchies — Under the Sea", category: "Exclusives", pack: "12 bags / case", desc: "Ocean-inspired gummy shapes in a bright branded bag.", tags: ["Gummies", "Retail-ready"], anchor: true },
  { id: "gummy-sour", name: "Gummy Munchies — Sour Hour", category: "Exclusives", pack: "12 bags / case", desc: "A tangy mix for customers who chase the sour bite.", tags: ["Sour", "Retail-ready"], anchor: true },
  { id: "gummy-jungle", name: "Gummy Munchies — Jungle Rumble", category: "Exclusives", pack: "12 bags / case", desc: "A playful assortment of fruit-forward gummy favorites.", tags: ["Fruity", "Retail-ready"], anchor: true },
  { id: "gummy-fruity", name: "Gummy Munchies — Juicy & Fruity", category: "Exclusives", pack: "12 bags / case", desc: "A juicy mix built for colorful grab-and-go displays.", tags: ["Fruity", "Retail-ready"], anchor: true },
  { id: "gummy-cup-kit", name: "Gummy Munchies Pick-and-Mix Cups", category: "Exclusives", pack: "Cup supply case", desc: "Branded cups for self-serve, counter service, and events.", tags: ["Pick & mix", "Foodservice"], anchor: true },

  { id: "chips-classic", name: "Classic Potato Chips", category: "Chips & Salty", pack: "24 single-serve bags", desc: "A pantry and grab-and-go essential in classic salted flavor.", tags: ["Single serve"] },
  { id: "chips-bbq", name: "Barbecue Potato Chips", category: "Chips & Salty", pack: "24 single-serve bags", desc: "Smoky-sweet crunch for snack shelves and lunch service.", tags: ["Single serve"] },
  { id: "chips-sour-cream", name: "Sour Cream & Onion Chips", category: "Chips & Salty", pack: "24 single-serve bags", desc: "A familiar flavor with broad office and retail appeal.", tags: ["Single serve"] },
  { id: "chips-variety", name: "Assorted Chip Variety Case", category: "Chips & Salty", pack: "30–40 bags / case", desc: "A balanced assortment of top salty-snack styles.", tags: ["Variety", "Pantry favorite"] },
  { id: "tortilla-variety", name: "Tortilla Chip Variety Case", category: "Chips & Salty", pack: "24–30 bags / case", desc: "Classic, cheese, and bold-flavor tortilla chip mix.", tags: ["Variety"] },
  { id: "pretzels", name: "Mini Pretzels", category: "Chips & Salty", pack: "24 single-serve bags", desc: "Light, salty crunch for desks, meetings, and checkout.", tags: ["Single serve"] },
  { id: "popcorn", name: "Ready-to-Eat Popcorn", category: "Chips & Salty", pack: "24 single-serve bags", desc: "A lighter savory option in classic and flavored varieties.", tags: ["Whole grain"] },
  { id: "cheese-snacks", name: "Cheese Puffs & Crunch Mix", category: "Chips & Salty", pack: "24 single-serve bags", desc: "Bold cheese snacks for high-energy assortments.", tags: ["Variety"] },
  { id: "snack-mix", name: "Savory Snack Mix", category: "Chips & Salty", pack: "24 single-serve bags", desc: "Crackers, pretzels, and crunchy bites in one mix.", tags: ["Variety"] },

  { id: "chocolate-variety", name: "Chocolate Bar Variety Case", category: "Candy", pack: "24–36 bars / case", desc: "A broad mix of familiar milk chocolate favorites.", tags: ["Variety", "Best seller"] },
  { id: "caramel-bars", name: "Caramel & Nougat Bars", category: "Candy", pack: "24 bars / case", desc: "Classic chewy bars for vending, checkout, and pantry shelves.", tags: ["Chocolate"] },
  { id: "peanut-bars", name: "Peanut Chocolate Bars", category: "Candy", pack: "24 bars / case", desc: "Chocolate-and-peanut favorites in single-serve format.", tags: ["Contains nuts"] },
  { id: "wafer-bars", name: "Chocolate Wafer Bars", category: "Candy", pack: "24–36 bars / case", desc: "Crisp layered wafers with a chocolate coating.", tags: ["Chocolate"] },
  { id: "pb-cups", name: "Peanut Butter Cups", category: "Candy", pack: "24 packs / case", desc: "A sweet-and-salty checkout and break-room staple.", tags: ["Contains nuts"] },
  { id: "cookies-cream-bars", name: "Cookies & Cream Bars", category: "Candy", pack: "24 bars / case", desc: "Creamy white confection with crunchy cookie pieces.", tags: ["Chocolate"] },
  { id: "fruit-chews", name: "Fruit Chews Variety", category: "Candy", pack: "24–36 packs / case", desc: "Bright individually wrapped fruit flavors for shared spaces.", tags: ["Shareable"] },
  { id: "hard-candy", name: "Hard Candy Assortment", category: "Candy", pack: "Bulk or 24 packs", desc: "Long-lasting fruit and mint candies for bowls or resale.", tags: ["Bulk available"] },

  { id: "jerky-original", name: "Original Beef Jerky", category: "Jerky", pack: "12 bags / case", desc: "Savory, protein-forward grab-and-go snack.", tags: ["High protein"] },
  { id: "jerky-teriyaki", name: "Teriyaki Beef Jerky", category: "Jerky", pack: "12 bags / case", desc: "Sweet-savory jerky in a resealable format.", tags: ["High protein"] },
  { id: "jerky-spicy", name: "Spicy Beef Jerky", category: "Jerky", pack: "12 bags / case", desc: "A bold heat-forward option for adventurous snackers.", tags: ["High protein", "Spicy"] },
  { id: "jerky-turkey", name: "Turkey Jerky", category: "Jerky", pack: "12 bags / case", desc: "A lean alternative with classic savory seasoning.", tags: ["High protein"] },
  { id: "meat-sticks", name: "Protein Meat Sticks", category: "Jerky", pack: "24 sticks / case", desc: "Portable single-serve protein for counters and pantries.", tags: ["High protein"] },

  { id: "gum-mint", name: "Peppermint Gum", category: "Gum & Mints", pack: "10–20 packs / display", desc: "Fresh everyday gum in pocket-friendly packs.", tags: ["Sugar-free options"] },
  { id: "gum-fruit", name: "Fruit Gum Variety", category: "Gum & Mints", pack: "10–20 packs / display", desc: "Bright fruit flavors for retail displays and shared bowls.", tags: ["Variety"] },
  { id: "gum-bubble", name: "Classic Bubble Gum", category: "Gum & Mints", pack: "Display or bulk", desc: "Colorful nostalgic gum for counters and events.", tags: ["Bulk available"] },
  { id: "mints", name: "Breath Mint Tins", category: "Gum & Mints", pack: "12 tins / display", desc: "Compact mint tins in refreshing flavor options.", tags: ["Sugar-free options"] },
  { id: "mint-rolls", name: "Wrapped Mint Rolls", category: "Gum & Mints", pack: "24 rolls / case", desc: "Individually portioned mints for reception and checkout.", tags: ["Single serve"] },

  { id: "trail-mix", name: "Trail Mix Variety", category: "Healthy", pack: "18–24 packs / case", desc: "Nut, fruit, and seed mixes for sustained energy.", tags: ["Plant-based options", "Contains nuts"] },
  { id: "protein-bars", name: "Protein Bar Variety", category: "Healthy", pack: "12–24 bars / case", desc: "A mix of protein-forward bars for active teams.", tags: ["High protein"] },
  { id: "granola-bars", name: "Granola Bar Variety", category: "Healthy", pack: "24–48 bars / case", desc: "Familiar oat-based bars for breakfast and snack time.", tags: ["Whole grain options"] },
  { id: "nuts-variety", name: "Nuts & Seeds Variety", category: "Healthy", pack: "24 single-serve packs", desc: "Almonds, cashews, peanuts, and seed-based options.", tags: ["Low sugar options", "Contains nuts"] },
  { id: "dried-fruit", name: "Dried Fruit Packs", category: "Healthy", pack: "18–24 packs / case", desc: "Portable fruit with no refrigeration required.", tags: ["Plant-based"] },
  { id: "fruit-snacks", name: "Fruit Snack Pouches", category: "Healthy", pack: "24–40 pouches / case", desc: "Soft fruit-flavored bites in portioned pouches.", tags: ["Gluten-free options"] },
  { id: "veggie-snacks", name: "Veggie Straws & Crisps", category: "Healthy", pack: "24 single-serve bags", desc: "Light, crunchy alternatives for balanced assortments.", tags: ["Plant-based options"] },
  { id: "rice-crisps", name: "Rice & Lentil Crisps", category: "Healthy", pack: "18–24 bags / case", desc: "Crisp, globally inspired snacks with lighter profiles.", tags: ["Gluten-free options"] },
  { id: "applesauce", name: "Fruit Purée Pouches", category: "Healthy", pack: "18–24 pouches / case", desc: "Easy, mess-conscious fruit snacks for all ages.", tags: ["Plant-based"] },
  { id: "better-popcorn", name: "Light Popcorn Variety", category: "Healthy", pack: "24 bags / case", desc: "Sea salt, kettle, and lightly seasoned popcorn options.", tags: ["Whole grain"] },

  { id: "water", name: "Bottled Water", category: "Beverages", pack: "24 bottles / case", desc: "Still water in convenient individual bottles.", tags: ["Pantry essential"] },
  { id: "sparkling-water", name: "Sparkling Water Variety", category: "Beverages", pack: "24 cans / case", desc: "Refreshing flavored sparkling water assortment.", tags: ["Zero sugar options"] },
  { id: "soda-variety", name: "Soda Variety Case", category: "Beverages", pack: "24 cans / case", desc: "Classic and zero-sugar carbonated favorites.", tags: ["Variety"] },
  { id: "iced-tea", name: "Iced Tea Variety", category: "Beverages", pack: "12–24 bottles / case", desc: "Sweetened and unsweetened ready-to-drink teas.", tags: ["Zero sugar options"] },
  { id: "juice", name: "Juice & Juice Drink Variety", category: "Beverages", pack: "24 bottles / case", desc: "Fruit-forward beverage choices for offices and retail.", tags: ["Variety"] },
  { id: "energy", name: "Energy Drink Variety", category: "Beverages", pack: "12–24 cans / case", desc: "A curated mix of top energy drink styles.", tags: ["Caffeinated"] },
  { id: "sports-drinks", name: "Sports Drink Variety", category: "Beverages", pack: "12–24 bottles / case", desc: "Hydration-focused flavors for crews and active teams.", tags: ["Electrolytes"] },
  { id: "cold-coffee", name: "Ready-to-Drink Coffee", category: "Beverages", pack: "12 bottles / case", desc: "Chilled coffee and latte options for grab-and-go coolers.", tags: ["Caffeinated"] },

  { id: "cookies-variety", name: "Cookie Variety Case", category: "Cookies & Crackers", pack: "24–36 packs / case", desc: "Classic chocolate, sandwich, and butter cookie formats.", tags: ["Variety"] },
  { id: "sandwich-cookies", name: "Sandwich Cookies", category: "Cookies & Crackers", pack: "24 packs / case", desc: "Cream-filled cookies in individual snack packs.", tags: ["Single serve"] },
  { id: "chocolate-cookies", name: "Chocolate Chip Cookies", category: "Cookies & Crackers", pack: "24 packs / case", desc: "Familiar baked-cookie flavor in grab-and-go packs.", tags: ["Single serve"] },
  { id: "cracker-variety", name: "Cracker Variety Case", category: "Cookies & Crackers", pack: "24–40 packs / case", desc: "Cheese, wheat, and classic salted cracker options.", tags: ["Variety"] },
  { id: "sandwich-crackers", name: "Sandwich Crackers", category: "Cookies & Crackers", pack: "24–36 packs / case", desc: "Portable filled crackers for a more substantial snack.", tags: ["Single serve"] },
  { id: "rice-cakes", name: "Mini Rice Cakes", category: "Cookies & Crackers", pack: "18–24 bags / case", desc: "Sweet and savory mini rice-cake varieties.", tags: ["Gluten-free options"] },
  { id: "graham-snacks", name: "Graham Snack Packs", category: "Cookies & Crackers", pack: "24 packs / case", desc: "Lightly sweet graham bites for offices and family orders.", tags: ["Single serve"] },

  { id: "curated-office", name: "Curated Office Pantry Mix", category: "Breakfast & Pantry", pack: "Built to budget", desc: "A balanced Bodega-selected mix based on headcount and needs.", tags: ["Custom", "Recurring available"] },
  { id: "oatmeal", name: "Instant Oatmeal Variety", category: "Breakfast & Pantry", pack: "24–48 cups or packets", desc: "Quick breakfast options for the office pantry.", tags: ["Whole grain options"] },
  { id: "breakfast-bars", name: "Breakfast Bar Variety", category: "Breakfast & Pantry", pack: "24 bars / case", desc: "Soft-baked and crunchy bars for busy mornings.", tags: ["Variety"] },
  { id: "cereal-cups", name: "Individual Cereal Cups", category: "Breakfast & Pantry", pack: "12–24 cups / case", desc: "Popular cereal styles in mess-conscious single cups.", tags: ["Single serve"] },
  { id: "coffee-service", name: "Coffee & Tea Service Pack", category: "Breakfast & Pantry", pack: "Sized to team", desc: "Coffee, tea, sweeteners, creamers, cups, and stirrers.", tags: ["Custom"] },
  { id: "microwave-meals", name: "Microwave Cup Meals", category: "Breakfast & Pantry", pack: "12–24 cups / case", desc: "Shelf-stable soups, noodles, and quick lunch options.", tags: ["Pantry"] },
  { id: "condiment-kit", name: "Pantry Condiment & Utensil Kit", category: "Breakfast & Pantry", pack: "Bulk service case", desc: "Everyday disposables and condiments for shared kitchens.", tags: ["Office essential"] },

  { id: "dog-biscuits", name: "Classic Dog Biscuits", category: "Dog Treats", pack: "12 bags / case", desc: "Crunchy everyday biscuits for pet-friendly offices and stores.", tags: ["Pet-friendly"] },
  { id: "dog-training", name: "Mini Training Treats", category: "Dog Treats", pack: "12 pouches / case", desc: "Small soft bites for rewards, walks, and front counters.", tags: ["Pet-friendly"] },
  { id: "dog-dental", name: "Dental Chews", category: "Dog Treats", pack: "12 packs / case", desc: "Popular chew format in assorted dog-size options.", tags: ["Pet-friendly"] },
  { id: "dog-natural", name: "Single-Ingredient Dog Treats", category: "Dog Treats", pack: "8–12 bags / case", desc: "Simple-ingredient treats for premium assortments.", tags: ["Premium"] },
  { id: "dog-variety", name: "Dog Treat Variety Case", category: "Dog Treats", pack: "Assorted case", desc: "A balanced mix of crunchy, soft, and chew treats.", tags: ["Variety", "Pet-friendly"] }
];

const categoryOrder = ["All", "Exclusives", "Chips & Salty", "Candy", "Jerky", "Gum & Mints", "Healthy", "Beverages", "Cookies & Crackers", "Breakfast & Pantry", "Dog Treats"];
const productMap = new Map(products.map(product => [product.id, product]));
const cart = JSON.parse(sessionStorage.getItem("bodegaSnackCart") || "{}");

const productGrid = document.querySelector("#product-grid");
const categoryFilters = document.querySelector("#category-filters");
const catalogSearch = document.querySelector("#catalog-search");
const catalogCount = document.querySelector("#catalog-count");
const catalogEmpty = document.querySelector("#catalog-empty");
const summaryList = document.querySelector("#summary-list");
const summaryEmpty = document.querySelector("#summary-empty");
const summaryType = document.querySelector("#summary-type");
const orderForm = document.querySelector("#order-form");
const dynamicFields = document.querySelector("#dynamic-fields");
const fulfillment = document.querySelector("#fulfillment");
const addressField = document.querySelector(".address-field");
const addressInput = addressField.querySelector("input");
const orderResult = document.querySelector("#order-result");
const formError = document.querySelector("#form-error");
const mobileCart = document.querySelector(".mobile-cart");
const toast = document.querySelector("#toast");

let activeCategory = "All";
let searchTerm = "";
let generatedOrderText = "";
let toastTimer;

function saveCart() {
  sessionStorage.setItem("bodegaSnackCart", JSON.stringify(cart));
}

function itemCount() {
  return Object.values(cart).reduce((total, qty) => total + qty, 0);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderFilters() {
  categoryFilters.innerHTML = categoryOrder.map(category => `
    <button class="filter-button" type="button" data-category="${escapeHTML(category)}" aria-pressed="${category === activeCategory}">${escapeHTML(category)}</button>
  `).join("");
}

function filteredProducts() {
  const query = searchTerm.trim().toLowerCase();
  return products.filter(product => {
    const categoryMatches = activeCategory === "All" || product.category === activeCategory;
    const haystack = [product.name, product.category, product.desc, ...product.tags].join(" ").toLowerCase();
    return categoryMatches && (!query || haystack.includes(query));
  });
}

function renderProducts() {
  const visible = filteredProducts();
  catalogCount.textContent = `${visible.length} of ${products.length} products`;
  catalogEmpty.hidden = visible.length > 0;
  productGrid.hidden = visible.length === 0;
  productGrid.innerHTML = visible.map(product => {
    const qty = cart[product.id] || 0;
    return `
      <article class="product-card ${product.anchor ? "is-anchor" : ""}">
        <span class="product-category">${escapeHTML(product.category)}${product.anchor ? " • Bodega exclusive" : ""}</span>
        <h3>${escapeHTML(product.name)}</h3>
        <p class="product-desc">${escapeHTML(product.desc)}</p>
        <div class="product-tags">${product.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
        <div class="product-bottom">
          <span class="product-pack"><span>Planning format</span><strong>${escapeHTML(product.pack)}</strong></span>
          <button class="add-product ${qty ? "added" : ""}" type="button" data-product-id="${product.id}" aria-label="Add ${escapeHTML(product.name)} to order">${qty ? `Added ${qty}` : "Add +"}</button>
        </div>
      </article>`;
  }).join("");
}

function updateCartCount() {
  const count = itemCount();
  document.querySelectorAll("[data-cart-count]").forEach(element => { element.textContent = count; });
  mobileCart.classList.toggle("has-items", count > 0);
}

function renderSummary() {
  const validLines = Object.entries(cart).filter(([id, qty]) => qty > 0 && productMap.has(id));
  summaryEmpty.hidden = validLines.length > 0;
  summaryList.hidden = validLines.length === 0;
  summaryList.innerHTML = validLines.map(([id, qty]) => {
    const product = productMap.get(id);
    return `
      <div class="summary-item">
        <div><strong>${escapeHTML(product.name)}</strong><small>${escapeHTML(product.pack)}</small></div>
        <div class="qty-control" aria-label="Quantity for ${escapeHTML(product.name)}">
          <button type="button" data-cart-action="decrease" data-product-id="${id}" aria-label="Decrease quantity">−</button>
          <span>${qty}</span>
          <button type="button" data-cart-action="increase" data-product-id="${id}" aria-label="Increase quantity">+</button>
        </div>
      </div>`;
  }).join("");
  updateCartCount();
  saveCart();
}

function addProduct(id, amount = 1, announce = true) {
  const product = productMap.get(id);
  if (!product) return;
  cart[id] = Math.max(0, (cart[id] || 0) + amount);
  if (cart[id] === 0) delete cart[id];
  renderSummary();
  renderProducts();
  if (announce) showToast(`${product.name} ${amount > 0 ? "added" : "updated"}.`);
}

function orderTypeLabel(type) {
  return ({ corporate: "Corporate pantry", b2b: "Retail / B2B", individual: "Individual" })[type] || "Order";
}

function currentType() {
  return orderForm.elements.orderType.value;
}

function checkbox(name, value, label, checked = false) {
  return `<label class="checkbox-option"><input type="checkbox" name="${name}" value="${escapeHTML(value)}" ${checked ? "checked" : ""}><span>${escapeHTML(label)}</span></label>`;
}

function renderDynamicFields(type) {
  const companyInput = orderForm.elements.company;
  const companyLabel = document.querySelector("[data-company-label]");
  if (type === "individual") {
    companyInput.required = false;
    companyLabel.textContent = "Company / organization (optional)";
    dynamicFields.innerHTML = `
      <label>What is this for? *
        <select name="occasion" required><option value="">Choose one</option><option>Personal order</option><option>Party or event</option><option>Gift or care package</option><option>School or community group</option><option>Other</option></select>
      </label>
      <label>Approximate servings / people<input name="servings" type="number" min="1" inputmode="numeric" placeholder="e.g. 20"></label>
      <div class="checkbox-group" aria-label="Individual order preferences">
        ${checkbox("preferences", "Curate it for me", "Curate it for me", true)}
        ${checkbox("preferences", "Sweet", "Sweet")}
        ${checkbox("preferences", "Salty", "Salty")}
        ${checkbox("preferences", "Better-for-you", "Better-for-you")}
        ${checkbox("preferences", "Gift-ready", "Gift-ready")}
      </div>`;
  } else if (type === "b2b") {
    companyInput.required = true;
    companyLabel.textContent = "Business name *";
    dynamicFields.innerHTML = `
      <label>Business type *
        <select name="businessType" required><option value="">Choose one</option><option>Convenience / corner store</option><option>Pizza shop / restaurant</option><option>Coffee shop / café</option><option>Smoke shop</option><option>Market / grocery</option><option>Vendor / food truck</option><option>Reseller / distributor</option><option>Other</option></select>
      </label>
      <label>Expected case volume<select name="caseVolume"><option>Not sure yet</option><option>1–5 cases per order</option><option>6–15 cases per order</option><option>16–30 cases per order</option><option>31+ cases per order</option></select></label>
      <label>Order cadence<select name="cadence"><option>One-time / first order</option><option>Weekly</option><option>Every two weeks</option><option>Monthly</option><option>Seasonal / as needed</option></select></label>
      <label>Primary sales channel<select name="salesChannel"><option>In-store</option><option>Delivery apps</option><option>In-store + delivery apps</option><option>Events / vending</option><option>Wholesale resale</option></select></label>
      <div class="checkbox-group" aria-label="Business services requested">
        ${checkbox("services", "Let Bodega build the opening mix", "Build my opening mix", true)}
        ${checkbox("services", "Twisted Shake program", "Twisted Shake program")}
        ${checkbox("services", "Gummy Munchies display", "Gummy Munchies display")}
        ${checkbox("services", "Recurring route delivery", "Recurring delivery")}
      </div>`;
  } else {
    companyInput.required = true;
    companyLabel.textContent = "Company / organization *";
    dynamicFields.innerHTML = `
      <label>Team size *<input name="headcount" type="number" min="1" inputmode="numeric" placeholder="e.g. 45" required></label>
      <label>Snack budget<select name="budget"><option>Help me set a budget</option><option>Under $250 per delivery</option><option>$250–$499 per delivery</option><option>$500–$999 per delivery</option><option>$1,000+ per delivery</option></select></label>
      <label>Replenishment cadence<select name="cadence"><option>One-time setup</option><option>Weekly</option><option>Every two weeks</option><option>Monthly</option><option>On demand</option></select></label>
      <label>Service level<select name="serviceLevel"><option>Delivery only</option><option>Curated assortment + delivery</option><option>Full pantry replenishment</option><option>Not sure — recommend one</option></select></label>
      <div class="checkbox-group" aria-label="Dietary and pantry preferences">
        ${checkbox("preferences", "Let Bodega curate the mix", "Curate the mix", true)}
        ${checkbox("preferences", "High protein", "High protein")}
        ${checkbox("preferences", "Gluten-free options", "Gluten-free")}
        ${checkbox("preferences", "Vegan options", "Vegan")}
        ${checkbox("preferences", "Low sugar options", "Low sugar")}
        ${checkbox("preferences", "Caffeine", "Coffee + caffeine")}
      </div>`;
  }
  summaryType.textContent = orderTypeLabel(type);
}

function setOrderType(type, shouldScroll = false) {
  const radio = orderForm.querySelector(`input[name="orderType"][value="${type}"]`);
  if (!radio) return;
  radio.checked = true;
  renderDynamicFields(type);
  if (shouldScroll) document.querySelector("#order").scrollIntoView({ behavior: "smooth", block: "start" });
}

function addStarterOrder() {
  const starters = {
    corporate: { "curated-office": 1, "chips-variety": 2, "chocolate-variety": 1, "trail-mix": 1, "protein-bars": 1, "sparkling-water": 2, "cookies-variety": 1 },
    b2b: { "twisted-kit": 1, "gummy-everything": 2, "gummy-sea": 1, "gummy-sour": 1, "chips-variety": 2, "chocolate-variety": 2, "gum-mint": 1, "jerky-original": 1 },
    individual: { "gummy-everything": 1, "gummy-cup-kit": 1, "chips-variety": 1, "chocolate-variety": 1, "cookies-variety": 1 }
  };
  Object.entries(starters[currentType()]).forEach(([id, qty]) => { cart[id] = Math.max(cart[id] || 0, qty); });
  renderSummary();
  renderProducts();
  showToast("Suggested starter order added.");
}

function buildOrderText(orderNumber) {
  const data = new FormData(orderForm);
  const type = currentType();
  const lines = [
    `BODEGA SNACK ORDER REQUEST ${orderNumber}`,
    "",
    `Order type: ${orderTypeLabel(type)}`,
    `Name: ${data.get("name") || ""}`,
    `Company / organization: ${data.get("company") || "Not provided"}`,
    `Email: ${data.get("email") || ""}`,
    `Phone: ${data.get("phone") || ""}`,
    "",
    "PROGRAM DETAILS"
  ];

  const excluded = new Set(["orderType", "name", "company", "email", "phone", "fulfillment", "requestedDate", "address", "notes"]);
  const grouped = {};
  for (const [key, value] of data.entries()) {
    if (excluded.has(key) || !value) continue;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(value);
  }
  Object.entries(grouped).forEach(([key, values]) => {
    const label = key.replace(/([A-Z])/g, " $1").replace(/^./, char => char.toUpperCase());
    lines.push(`${label}: ${values.join(", ")}`);
  });

  lines.push("", "PRODUCTS / QUANTITIES");
  const selected = Object.entries(cart).filter(([id, qty]) => qty > 0 && productMap.has(id));
  if (selected.length) {
    selected.forEach(([id, qty]) => {
      const product = productMap.get(id);
      lines.push(`- ${product.name} — Qty ${qty} (${product.pack})`);
    });
  } else {
    lines.push("- No specific products selected; requesting a curated recommendation.");
  }

  lines.push(
    "",
    "FULFILLMENT",
    `Method: ${data.get("fulfillment") || "Not selected"}`,
    `Requested date: ${data.get("requestedDate") || "Flexible"}`,
    `Address: ${data.get("address") || "Not provided"}`,
    `Notes: ${data.get("notes") || "None"}`,
    "",
    "Please confirm availability, pricing, minimums, substitutions, and timing before purchase."
  );
  return lines.join("\n");
}

function generateOrderNumber() {
  const now = new Date();
  const date = now.toISOString().slice(2, 10).replaceAll("-", "");
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BS-${date}-${random}`;
}

categoryFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderProducts();
});

catalogSearch.addEventListener("input", event => {
  searchTerm = event.target.value;
  renderProducts();
});

document.querySelector("#clear-filters").addEventListener("click", () => {
  activeCategory = "All";
  searchTerm = "";
  catalogSearch.value = "";
  renderFilters();
  renderProducts();
});

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-product-id]");
  if (button) addProduct(button.dataset.productId);
});

summaryList.addEventListener("click", event => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;
  addProduct(button.dataset.productId, button.dataset.cartAction === "increase" ? 1 : -1, false);
});

document.addEventListener("click", event => {
  const anchorProduct = event.target.closest("[data-add-product]");
  if (anchorProduct) addProduct(anchorProduct.dataset.addProduct);
  const path = event.target.closest("[data-order-type]");
  if (path) setOrderType(path.dataset.orderType, true);
});

orderForm.addEventListener("change", event => {
  if (event.target.name === "orderType") renderDynamicFields(event.target.value);
});

fulfillment.addEventListener("change", () => {
  const needsAddress = fulfillment.value === "Local delivery" || fulfillment.value === "Shipping request";
  addressField.hidden = !needsAddress;
  addressInput.required = needsAddress;
});

document.querySelector("#starter-order").addEventListener("click", addStarterOrder);

orderForm.addEventListener("submit", event => {
  event.preventDefault();
  formError.hidden = true;
  if (!orderForm.checkValidity()) {
    orderForm.reportValidity();
    formError.textContent = "Please complete the required fields before creating your request.";
    formError.hidden = false;
    return;
  }
  const hasItems = itemCount() > 0;
  const allowsCuration = [...orderForm.querySelectorAll("input[type='checkbox']:checked")].some(input => /curate|opening mix/i.test(input.value));
  if (!hasItems && !allowsCuration) {
    formError.textContent = "Add at least one product or choose a curated mix.";
    formError.hidden = false;
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
    return;
  }
  const orderNumber = generateOrderNumber();
  generatedOrderText = buildOrderText(orderNumber);
  const name = orderForm.elements.name.value.trim();
  const subject = `Bodega Snack ${orderTypeLabel(currentType())} request — ${orderNumber}`;
  document.querySelector("#email-order").href = `mailto:info@hirewalter.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(generatedOrderText)}`;
  document.querySelector("#result-copy").textContent = `${name}, your request ${orderNumber} is ready. Open the prepared email, review it, and press send.`;
  orderResult.hidden = false;
  orderResult.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector("#copy-order").addEventListener("click", async () => {
  if (!generatedOrderText) return;
  try {
    await navigator.clipboard.writeText(generatedOrderText);
    showToast("Order summary copied.");
  } catch {
    showToast("Copy was blocked. Download the summary instead.");
  }
});

document.querySelector("#download-order").addEventListener("click", () => {
  if (!generatedOrderText) return;
  const blob = new Blob([generatedOrderText], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "bodega-snack-order-request.txt";
  link.click();
  URL.revokeObjectURL(link.href);
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  siteNav.classList.toggle("open", !open);
});
siteNav.addEventListener("click", event => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", () => document.querySelector("[data-header]").classList.toggle("is-scrolled", window.scrollY > 12), { passive: true });

const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .08 }) : null;
document.querySelectorAll(".reveal").forEach(element => revealObserver ? revealObserver.observe(element) : element.classList.add("visible"));

const urlType = new URLSearchParams(window.location.search).get("type");
renderFilters();
renderProducts();
renderSummary();
setOrderType(["corporate", "b2b", "individual"].includes(urlType) ? urlType : "corporate");
document.querySelector("#year").textContent = new Date().getFullYear();
