// ============================================================
// OW Hero Tools — app.js
// Page routing, hero selector logic, counter page logic
// ============================================================

// ─────────────── State ───────────────
const state = {
  playerCount: 5,
  perksEnabled: false,
  uniqueOnly: true,
  roleFilter: "all",
  counterRole: "all",
  selectedCounterHero: null,
};

// ─────────────── Page Routing ───────────────
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));

  document.getElementById("page-" + pageId).classList.add("active");
  const topBtn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
  if (topBtn) topBtn.classList.add("active");
  const tabBtn = document.querySelector(`.tab-btn[data-page="${pageId}"]`);
  if (tabBtn) tabBtn.classList.add("active");

  if (pageId === "counters" && document.getElementById("counter-hero-grid").children.length === 0) {
    renderCounterGrid();
  }
}

// ─────────────────────────────────────────────
//  HERO SELECTOR PAGE
// ─────────────────────────────────────────────

function changePlayerCount(delta) {
  state.playerCount = Math.min(6, Math.max(1, state.playerCount + delta));
  document.getElementById("player-count").textContent = state.playerCount;
  document.getElementById("dec-players").disabled = state.playerCount <= 1;
  document.getElementById("inc-players").disabled = state.playerCount >= 6;
}

function applyFilters() {
  state.roleFilter = document.getElementById("role-filter").value;
}

function togglePerks() {
  state.perksEnabled = !state.perksEnabled;
  const btn = document.getElementById("perks-toggle");
  btn.setAttribute("aria-checked", state.perksEnabled);
  btn.classList.toggle("on", state.perksEnabled);
}

function toggleUnique() {
  state.uniqueOnly = !state.uniqueOnly;
  const btn = document.getElementById("unique-toggle");
  btn.setAttribute("aria-checked", state.uniqueOnly);
  btn.classList.toggle("on", state.uniqueOnly);
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function rollHeroes() {
  const pool = ALL_HEROES.filter(h =>
    state.roleFilter === "all" || h.role === state.roleFilter
  );

  if (pool.length === 0) {
    showError("No heroes available for the selected role.");
    return;
  }

  const count = Math.min(state.playerCount, state.uniqueOnly ? pool.length : state.playerCount);
  const picked = [];

  if (state.uniqueOnly) {
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    picked.push(...shuffled.slice(0, count));
  } else {
    for (let i = 0; i < count; i++) picked.push(pickRandom(pool));
  }

  renderResults(picked);
  animateRoll();
}

function animateRoll() {
  const btn = document.getElementById("roll-btn");
  btn.classList.add("rolling");
  setTimeout(() => btn.classList.remove("rolling"), 600);
}

function showError(msg) {
  const grid = document.getElementById("results-grid");
  grid.innerHTML = `<p class="error-msg" role="alert">${msg}</p>`;
}

function pickPerk(perkArr) {
  return perkArr[Math.floor(Math.random() * perkArr.length)];
}

function renderResults(heroes) {
  const grid = document.getElementById("results-grid");
  grid.innerHTML = "";

  heroes.forEach((hero, idx) => {
    const card = document.createElement("article");
    card.className = "result-card";
    card.style.animationDelay = `${idx * 60}ms`;
    card.setAttribute("aria-label", `Player ${idx + 1}: ${hero.name}`);

    let perksHTML = "";
    if (state.perksEnabled && hero.perks) {
      const minor = pickPerk(hero.perks.minor);
      const major = pickPerk(hero.perks.major);
      perksHTML = `
        <div class="perk-section">
          <div class="perk-row">
            <span class="perk-badge minor">Minor</span>
            <span class="perk-name">${minor}</span>
          </div>
          <div class="perk-row">
            <span class="perk-badge major">Major</span>
            <span class="perk-name">${major}</span>
          </div>
        </div>`;
    }

    card.innerHTML = `
      <header class="result-card-header">
        <span class="player-label">P${idx + 1}</span>
        <span class="hero-role-badge role-${hero.role.toLowerCase()}">${hero.role}</span>
      </header>
      <div class="hero-icon-large" aria-hidden="true">${hero.icon}</div>
      <h2 class="hero-name">${hero.name}</h2>
      ${perksHTML}
    `;

    grid.appendChild(card);
  });
}

// ─────────────────────────────────────────────
//  COUNTERS PAGE
// ─────────────────────────────────────────────

function setCounterRole(role, btn) {
  state.counterRole = role;
  document.querySelectorAll(".role-tab").forEach(t => t.classList.remove("active"));
  btn.classList.add("active");
  renderCounterGrid();
}

function filterCounterHeroes() {
  renderCounterGrid();
}

function renderCounterGrid() {
  const query = (document.getElementById("hero-search")?.value || "").toLowerCase();
  const filtered = ALL_HEROES.filter(h => {
    const roleMatch = state.counterRole === "all" || h.role === state.counterRole;
    const nameMatch = h.name.toLowerCase().includes(query);
    return roleMatch && nameMatch;
  });

  const grid = document.getElementById("counter-hero-grid");
  grid.innerHTML = "";

  filtered.forEach(h => {
    const li = document.createElement("li");
    li.className = "counter-hero-card" + (state.selectedCounterHero === h.name ? " selected" : "");
    li.setAttribute("role", "button");
    li.setAttribute("tabindex", "0");
    li.setAttribute("aria-pressed", state.selectedCounterHero === h.name ? "true" : "false");
    li.setAttribute("aria-label", `${h.name}, ${h.role}`);

    li.innerHTML = `
      <span class="c-hero-icon" aria-hidden="true">${h.icon}</span>
      <span class="c-hero-name">${h.name}</span>
      <span class="c-hero-role role-${h.role.toLowerCase()}">${h.role}</span>
    `;

    li.addEventListener("click", () => selectCounterHero(h.name));
    li.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectCounterHero(h.name); }
    });

    grid.appendChild(li);
  });
}

function selectCounterHero(name) {
  state.selectedCounterHero = name;
  renderCounterGrid();
  renderCounterDetail(name);
}

function findHero(name) {
  return ALL_HEROES.find(h => h.name === name);
}

function renderCounterDetail(name) {
  const h = findHero(name);
  if (!h) return;

  const detail = document.getElementById("counter-detail");

  const beatsHTML = h.beats.map(b => {
    const bh = findHero(b);
    return `<li class="counter-item beats">
      <span class="ci-icon" aria-hidden="true">${bh ? bh.icon : "🎯"}</span>
      <span class="ci-name">${b}</span>
    </li>`;
  }).join("");

  const losesHTML = h.loses.map(b => {
    const bh = findHero(b);
    return `<li class="counter-item loses">
      <span class="ci-icon" aria-hidden="true">${bh ? bh.icon : "❌"}</span>
      <span class="ci-name">${b}</span>
    </li>`;
  }).join("");

  detail.innerHTML = `
    <div class="detail-inner">
      <header class="detail-header">
        <span class="detail-icon" aria-hidden="true">${h.icon}</span>
        <div class="detail-meta">
          <h2 class="detail-name">${h.name}</h2>
          <span class="hero-role-badge role-${h.role.toLowerCase()}">${h.role}</span>
        </div>
      </header>

      <div class="counters-grid">
        <section class="counters-col" aria-label="${h.name} beats these heroes">
          <h3 class="counters-col-heading beats-heading">
            <span aria-hidden="true">✅</span> Strong against
          </h3>
          <ul class="counter-list">${beatsHTML}</ul>
        </section>
        <section class="counters-col" aria-label="These heroes beat ${h.name}">
          <h3 class="counters-col-heading loses-heading">
            <span aria-hidden="true">⚠️</span> Weak against
          </h3>
          <ul class="counter-list">${losesHTML}</ul>
        </section>
      </div>

      <aside class="tip-box" aria-label="Gameplay tip for ${h.name}">
        <strong>How to play them:</strong> ${h.tip}
      </aside>
    </div>
  `;

  detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ─────────────── Init ───────────────
document.addEventListener("DOMContentLoaded", () => {
  // Init stepper states
  document.getElementById("dec-players").disabled = false;
  document.getElementById("inc-players").disabled = false;
  // Init toggles to correct visual state
  document.getElementById("unique-toggle").classList.add("on");
});
