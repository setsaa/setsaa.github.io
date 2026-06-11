'use strict';

/* ── Timezone data ─────────────────────────────────────────── */
const ZONE_LIST = [
  { city: 'Honolulu',         region: 'Hawaii, US',      tz: 'Pacific/Honolulu' },
  { city: 'Anchorage',        region: 'Alaska, US',      tz: 'America/Anchorage' },
  { city: 'Los Angeles',      region: 'US West',         tz: 'America/Los_Angeles' },
  { city: 'Vancouver',        region: 'Canada',          tz: 'America/Vancouver' },
  { city: 'Denver',           region: 'US Mountain',     tz: 'America/Denver' },
  { city: 'Mexico City',      region: 'Mexico',          tz: 'America/Mexico_City' },
  { city: 'Chicago',          region: 'US Central',      tz: 'America/Chicago' },
  { city: 'New York',         region: 'US East',         tz: 'America/New_York' },
  { city: 'Toronto',          region: 'Canada',          tz: 'America/Toronto' },
  { city: 'Bogotá',           region: 'Colombia',        tz: 'America/Bogota' },
  { city: 'Lima',             region: 'Peru',            tz: 'America/Lima' },
  { city: 'Santiago',         region: 'Chile',           tz: 'America/Santiago' },
  { city: 'São Paulo',        region: 'Brazil',          tz: 'America/Sao_Paulo' },
  { city: 'Buenos Aires',     region: 'Argentina',       tz: 'America/Argentina/Buenos_Aires' },
  { city: 'Reykjavik',        region: 'Iceland',         tz: 'Atlantic/Reykjavik' },
  { city: 'London',           region: 'UK',              tz: 'Europe/London' },
  { city: 'Dublin',           region: 'Ireland',         tz: 'Europe/Dublin' },
  { city: 'Lisbon',           region: 'Portugal',        tz: 'Europe/Lisbon' },
  { city: 'Casablanca',       region: 'Morocco',         tz: 'Africa/Casablanca' },
  { city: 'Lagos',            region: 'Nigeria',         tz: 'Africa/Lagos' },
  { city: 'Madrid',           region: 'Spain',           tz: 'Europe/Madrid' },
  { city: 'Paris',            region: 'France',          tz: 'Europe/Paris' },
  { city: 'Amsterdam',        region: 'Netherlands',     tz: 'Europe/Amsterdam' },
  { city: 'Brussels',         region: 'Belgium',         tz: 'Europe/Brussels' },
  { city: 'Berlin',           region: 'Germany',         tz: 'Europe/Berlin' },
  { city: 'Zurich',           region: 'Switzerland',     tz: 'Europe/Zurich' },
  { city: 'Vienna',           region: 'Austria',         tz: 'Europe/Vienna' },
  { city: 'Rome',             region: 'Italy',           tz: 'Europe/Rome' },
  { city: 'Copenhagen',       region: 'Denmark',         tz: 'Europe/Copenhagen' },
  { city: 'Oslo',             region: 'Norway',          tz: 'Europe/Oslo' },
  { city: 'Stockholm',        region: 'Sweden',          tz: 'Europe/Stockholm' },
  { city: 'Helsinki',         region: 'Finland',         tz: 'Europe/Helsinki' },
  { city: 'Warsaw',           region: 'Poland',          tz: 'Europe/Warsaw' },
  { city: 'Prague',           region: 'Czech Republic',  tz: 'Europe/Prague' },
  { city: 'Budapest',         region: 'Hungary',         tz: 'Europe/Budapest' },
  { city: 'Bucharest',        region: 'Romania',         tz: 'Europe/Bucharest' },
  { city: 'Athens',           region: 'Greece',          tz: 'Europe/Athens' },
  { city: 'Kyiv',             region: 'Ukraine',         tz: 'Europe/Kyiv' },
  { city: 'Istanbul',         region: 'Turkey',          tz: 'Europe/Istanbul' },
  { city: 'Cairo',            region: 'Egypt',           tz: 'Africa/Cairo' },
  { city: 'Nairobi',          region: 'Kenya',           tz: 'Africa/Nairobi' },
  { city: 'Johannesburg',     region: 'South Africa',    tz: 'Africa/Johannesburg' },
  { city: 'Moscow',           region: 'Russia',          tz: 'Europe/Moscow' },
  { city: 'Riyadh',           region: 'Saudi Arabia',    tz: 'Asia/Riyadh' },
  { city: 'Dubai',            region: 'UAE',             tz: 'Asia/Dubai' },
  { city: 'Tbilisi',          region: 'Georgia',         tz: 'Asia/Tbilisi' },
  { city: 'Karachi',          region: 'Pakistan',        tz: 'Asia/Karachi' },
  { city: 'Mumbai',           region: 'India',           tz: 'Asia/Kolkata' },
  { city: 'Colombo',          region: 'Sri Lanka',       tz: 'Asia/Colombo' },
  { city: 'Kathmandu',        region: 'Nepal',           tz: 'Asia/Kathmandu' },
  { city: 'Dhaka',            region: 'Bangladesh',      tz: 'Asia/Dhaka' },
  { city: 'Almaty',           region: 'Kazakhstan',      tz: 'Asia/Almaty' },
  { city: 'Yangon',           region: 'Myanmar',         tz: 'Asia/Rangoon' },
  { city: 'Bangkok',          region: 'Thailand',        tz: 'Asia/Bangkok' },
  { city: 'Ho Chi Minh City', region: 'Vietnam',         tz: 'Asia/Ho_Chi_Minh' },
  { city: 'Jakarta',          region: 'Indonesia',       tz: 'Asia/Jakarta' },
  { city: 'Kuala Lumpur',     region: 'Malaysia',        tz: 'Asia/Kuala_Lumpur' },
  { city: 'Singapore',        region: 'Singapore',       tz: 'Asia/Singapore' },
  { city: 'Manila',           region: 'Philippines',     tz: 'Asia/Manila' },
  { city: 'Hong Kong',        region: 'China',           tz: 'Asia/Hong_Kong' },
  { city: 'Shanghai',         region: 'China',           tz: 'Asia/Shanghai' },
  { city: 'Taipei',           region: 'Taiwan',          tz: 'Asia/Taipei' },
  { city: 'Seoul',            region: 'South Korea',     tz: 'Asia/Seoul' },
  { city: 'Tokyo',            region: 'Japan',           tz: 'Asia/Tokyo' },
  { city: 'Perth',            region: 'Australia',       tz: 'Australia/Perth' },
  { city: 'Adelaide',         region: 'Australia',       tz: 'Australia/Adelaide' },
  { city: 'Melbourne',        region: 'Australia',       tz: 'Australia/Melbourne' },
  { city: 'Sydney',           region: 'Australia',       tz: 'Australia/Sydney' },
  { city: 'Brisbane',         region: 'Australia',       tz: 'Australia/Brisbane' },
  { city: 'Auckland',         region: 'New Zealand',     tz: 'Pacific/Auckland' },
];

/* ── State ──────────────────────────────────────────────────── */
let zones = [];          // [{city, region, tz, isHome}]
let cursorFraction = null; // null or 0–1 (fraction of UTC day)
let isDragging = false;
let dragBar = null;
let touchStartX = 0, touchStartY = 0, touchDirectionLocked = false;

/* ── Time helpers ───────────────────────────────────────────── */
function todayStartUTC() {
  const n = new Date();
  return new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate())).getTime();
}

function nowFraction() {
  return (Date.now() - todayStartUTC()) / 86400000;
}

function localHourAt(ms, tz) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
  }).formatToParts(new Date(ms));
  let h = parseInt(parts.find(p => p.type === 'hour').value);
  const m = parseInt(parts.find(p => p.type === 'minute').value);
  const s = parseInt(parts.find(p => p.type === 'second').value);
  if (h === 24) h = 0;
  return h + m / 60 + s / 3600;
}

function fmtTime(ms, tz) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false
  }).format(new Date(ms));
}

function fmtDay(ms, tz) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: tz, weekday: 'short', month: 'short', day: 'numeric'
  }).format(new Date(ms));
}

function fmtOffset(tz) {
  const parts = new Intl.DateTimeFormat('en', {
    timeZone: tz, timeZoneName: 'shortOffset'
  }).formatToParts(new Date());
  const p = parts.find(p => p.type === 'timeZoneName');
  return p ? p.value : tz;
}

/* ── Day/night gradient ─────────────────────────────────────── */
function hourToColor(h) {
  // Sky palette from midnight through day back to midnight
  if (h < 5)  return '#2e3a5c';
  if (h < 6)  return '#3d5080';
  if (h < 7)  return '#8f4e72';
  if (h < 8)  return '#c87050';
  if (h < 9)  return '#e8a848';
  if (h < 10) return '#f5d878';
  if (h < 16) return '#bce0f7';
  if (h < 17) return '#f5d878';
  if (h < 18) return '#e8a848';
  if (h < 19) return '#c87050';
  if (h < 20) return '#8f4e72';
  if (h < 21) return '#5a4090';
  if (h < 22) return '#3d5080';
  return '#2e3a5c';
}

function buildGradient(tz) {
  const start = todayStartUTC();
  const stops = [];
  // Sample every 30 min for a smooth gradient
  for (let i = 0; i <= 48; i++) {
    const ms = start + i * 1800000;
    const color = hourToColor(localHourAt(ms, tz));
    stops.push(`${color} ${((i / 48) * 100).toFixed(2)}%`);
  }
  return `linear-gradient(to right, ${stops.join(', ')})`;
}

/* ── Rendering ──────────────────────────────────────────────── */
function render() {
  const container = document.getElementById('zones');
  container.innerHTML = '';
  zones.forEach((z, i) => container.appendChild(makeRow(z, i)));
  setupBarListeners();
}

function makeRow(zone, index) {
  const row = document.createElement('div');
  row.className = 'zone-row' + (zone.isHome ? ' is-home' : '');
  row.dataset.tz = zone.tz;

  const nowMs = Date.now();
  const gradient = buildGradient(zone.tz);
  const nowPct = nowFraction() * 100;
  const offset = fmtOffset(zone.tz);
  const cursorPct = cursorFraction !== null ? cursorFraction * 100 : 0;
  const cursorMs = cursorFraction !== null ? todayStartUTC() + cursorFraction * 86400000 : nowMs;
  const cursorHidden = cursorFraction === null ? ' hidden' : '';
  const homeLabel = zone.isHome ? ' · Home' : '';

  row.innerHTML = `
    <div class="zone-head">
      <div class="zone-left">
        <span class="zone-city">${zone.city}</span>
        <span class="zone-sub">${offset}${homeLabel}</span>
      </div>
      <div class="zone-time-block">
        <span class="zone-clock">${fmtTime(nowMs, zone.tz)}</span>
        <span class="zone-day">${fmtDay(nowMs, zone.tz)}</span>
      </div>
    </div>
    <div class="bar-outer">
      <div class="bar" style="background:${gradient}">
        <div class="bar-now" style="left:${nowPct.toFixed(3)}%"></div>
        <div class="bar-cursor${cursorHidden}" style="left:${cursorPct.toFixed(3)}%">
          <span class="cursor-label">${fmtTime(cursorMs, zone.tz)}</span>
        </div>
      </div>
      <div class="bar-ticks">
        <span style="left:0%">0</span>
        <span style="left:25%">6</span>
        <span style="left:50%">12</span>
        <span style="left:75%">18</span>
        <span style="left:99.5%">24</span>
      </div>
    </div>
    ${!zone.isHome ? `<button class="remove-btn" data-index="${index}" aria-label="Remove ${zone.city}" title="Remove">×</button>` : ''}
  `.trim();

  return row;
}

/* ── Cursor interaction ─────────────────────────────────────── */
function fractionFromPointer(clientX, bar) {
  const rect = bar.getBoundingClientRect();
  return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
}

function applyFraction(frac, bar) {
  cursorFraction = frac;
  const pct = (frac * 100).toFixed(3) + '%';
  const ms = todayStartUTC() + frac * 86400000;

  document.querySelectorAll('.bar-cursor').forEach(el => {
    el.style.left = pct;
    el.classList.remove('hidden');
  });

  document.querySelectorAll('.cursor-label').forEach(el => {
    const tz = el.closest('.zone-row').dataset.tz;
    el.textContent = fmtTime(ms, tz);
  });
}

function clearCursor() {
  cursorFraction = null;
  document.querySelectorAll('.bar-cursor').forEach(el => el.classList.add('hidden'));
  // restore live times
  const nowMs = Date.now();
  document.querySelectorAll('.zone-row').forEach(row => {
    const tz = row.dataset.tz;
    const clock = row.querySelector('.zone-clock');
    const day = row.querySelector('.zone-day');
    if (clock) clock.textContent = fmtTime(nowMs, tz);
    if (day) day.textContent = fmtDay(nowMs, tz);
  });
}

function setupBarListeners() {
  document.querySelectorAll('.bar-outer').forEach(outer => {
    outer.addEventListener('mousedown', onMouseDown);
    outer.addEventListener('touchstart', onTouchStart, { passive: false });
  });
}

function onMouseDown(e) {
  if (e.button !== 0) return;
  e.preventDefault();
  isDragging = true;
  dragBar = e.currentTarget.querySelector('.bar');
  applyFraction(fractionFromPointer(e.clientX, dragBar), dragBar);
}

function onTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  touchDirectionLocked = false;
  isDragging = false;
  dragBar = e.currentTarget.querySelector('.bar');
}

document.addEventListener('mousemove', e => {
  if (!isDragging || !dragBar) return;
  applyFraction(fractionFromPointer(e.clientX, dragBar), dragBar);
});

document.addEventListener('mouseup', e => {
  if (!isDragging) return;
  isDragging = false;
  dragBar = null;
  // cursor remains until clicked elsewhere
});

document.addEventListener('touchmove', e => {
  if (!dragBar) return;
  const dx = Math.abs(e.touches[0].clientX - touchStartX);
  const dy = Math.abs(e.touches[0].clientY - touchStartY);

  if (!touchDirectionLocked) {
    if (dx < 6 && dy < 6) return; // not moved enough yet
    touchDirectionLocked = true;
    if (dy > dx) {
      dragBar = null; // vertical scroll, give up
      return;
    }
    isDragging = true;
  }

  if (!isDragging) return;
  e.preventDefault();
  applyFraction(fractionFromPointer(e.touches[0].clientX, dragBar), dragBar);
}, { passive: false });

document.addEventListener('touchend', () => {
  isDragging = false;
  touchDirectionLocked = false;
  dragBar = null;
});

// Click outside bars clears cursor
document.addEventListener('click', e => {
  if (!e.target.closest('.bar-outer') && !isDragging) {
    if (cursorFraction !== null) clearCursor();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && cursorFraction !== null) clearCursor();
});

/* ── Clock tick ─────────────────────────────────────────────── */
function tick() {
  if (cursorFraction !== null || isDragging) return; // don't overwrite cursor times
  const nowMs = Date.now();
  const nowPct = nowFraction() * 100;

  document.querySelectorAll('.zone-row').forEach(row => {
    const tz = row.dataset.tz;
    const clock = row.querySelector('.zone-clock');
    const day = row.querySelector('.zone-day');
    const nowEl = row.querySelector('.bar-now');
    if (clock) clock.textContent = fmtTime(nowMs, tz);
    if (day) day.textContent = fmtDay(nowMs, tz);
    if (nowEl) nowEl.style.left = nowPct.toFixed(3) + '%';
  });
}

/* ── Add zone panel ─────────────────────────────────────────── */
function setupAddPanel() {
  const btn = document.getElementById('add-btn');
  const panel = document.getElementById('add-panel');
  const search = document.getElementById('tz-search');
  const results = document.getElementById('tz-results');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isHidden = panel.hasAttribute('hidden');
    if (isHidden) {
      panel.removeAttribute('hidden');
      search.focus();
      renderResults('');
    } else {
      panel.setAttribute('hidden', '');
    }
  });

  search.addEventListener('input', () => renderResults(search.value.trim().toLowerCase()));

  results.addEventListener('click', e => {
    const li = e.target.closest('li[data-tz]');
    if (!li) return;
    addZone({ city: li.dataset.city, region: li.dataset.region, tz: li.dataset.tz });
    panel.setAttribute('hidden', '');
    search.value = '';
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.add-zone')) {
      panel.setAttribute('hidden', '');
    }
  });
}

function setupRemoveListeners() {
  document.getElementById('zones').addEventListener('click', e => {
    const btn = e.target.closest('.remove-btn');
    if (!btn) return;
    const idx = parseInt(btn.dataset.index);
    zones.splice(idx, 1);
    saveZones();
    render();
  });
}

function renderResults(query) {
  const results = document.getElementById('tz-results');
  const existingTzs = new Set(zones.map(z => z.tz));

  const filtered = ZONE_LIST
    .filter(z => !existingTzs.has(z.tz))
    .filter(z => !query
      || z.city.toLowerCase().includes(query)
      || z.region.toLowerCase().includes(query)
      || z.tz.toLowerCase().includes(query)
    )
    .slice(0, 24);

  if (!filtered.length) {
    results.innerHTML = '<li class="empty">No results</li>';
    return;
  }

  results.innerHTML = filtered.map(z =>
    `<li data-tz="${z.tz}" data-city="${z.city}" data-region="${z.region}">
      <span class="res-city">${z.city}</span>
      <span class="res-region">${z.region}</span>
    </li>`
  ).join('');
}

function addZone(zone) {
  zones.push(zone);
  saveZones();
  render();
}

function saveZones() {
  const toSave = zones.filter(z => !z.isHome);
  try { localStorage.setItem('wc-zones', JSON.stringify(toSave)); } catch (_) {}
}

/* ── Init ───────────────────────────────────────────────────── */
function init() {
  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const homeEntry = ZONE_LIST.find(z => z.tz === localTz)
    || { city: localTz.split('/').pop().replace(/_/g, ' '), region: 'Local', tz: localTz };

  zones = [{ ...homeEntry, isHome: true }];

  try {
    const saved = JSON.parse(localStorage.getItem('wc-zones') || '[]');
    for (const s of saved) {
      if (s.tz && s.tz !== localTz) {
        const entry = ZONE_LIST.find(z => z.tz === s.tz) || s;
        zones.push({ ...entry });
      }
    }
  } catch (_) {}

  render();
  setupAddPanel();
  setupRemoveListeners();
  setInterval(tick, 1000);
}

init();
