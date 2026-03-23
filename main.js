const USERS_KEY = "users";
const SESSION_KEY = "session";
const NOTE_PREFIX = "notes::";
const SHARED_NOTES_SCOPE = "shared";
const LIST_BOARD_PREFIX = "list-board::";
const AUTO_LOGOUT_TIMES = ["05:45", "13:45", "17:45", "21:45"];
const AUTO_LOGOUT_MESSAGE = "Du har blivit utloggad. Vid skiftöverlämning [05:45 , 13:45 , 17:45 , 21:45] sker en automatisk utloggning.";
const SITE_PASSWORD = "mbh2026";
const LIST_ACTION_ICON_FILES = {
  edit: "./Ikoner/PEN.svg",
  up: "./Ikoner/UP.svg",
  down: "./Ikoner/DOWN.svg",
  delete: "./Ikoner/Delete.svg",
  add: "./Ikoner/PLUS.svg",
  color: "./Ikoner/Color.svg",
};
const TABS = ["Produktion", "Disk", "Övrigt"];
const LIST_COLUMNS = [
  { id: "mjolk", label: "Mjölk" },
  { id: "vassle", label: "Vassle" },
  { id: "gradde", label: "Grädde" },
  { id: "ovrigt", label: "Övrigt" },
];
const LIST_STATUS_ORDER = ["none", "red", "green"];
const TAB_PLACEHOLDERS = {
  Produktion: "Anteckna moment du vill komma ihåg..",
  Disk: "Beskriv när & hur man ska diska objektet..",
  Övrigt: "Skriv övrig information..",
};
const COMPONENT_POPUP_MAP = {
  "CF_BK_KA": "Ceramic Filter",
  "Ceramic Filter_1_KA": "Ceramic Filter",
};
const POPUP_NAME_MAP = {
  BC: "Bactocatch",
  YA: "Y-agg",
  VA1: "V-agg 1",
  VA2: "V-agg 2",
  GA: "G-agg",
  "FÖRSKÖLJ-TANK DC1": "FÖRSKÖLJ-TANK DC1",
};
const DIAGRAMS = [
  { id: "MBH", label: "Mjölkbehandling", file: "./MBH.svg" },
  { id: "VBH", label: "Vasslebehandling", file: "./VBH.svg" },
  { id: "DI", label: "Disk Info", file: "./DI.svg" },
  { id: "LIST", label: "Flödeslistor", file: null },
  { id: "KA", label: "Karta Apparatsal", file: "./KA.svg" },
];
const HELP_CONTENT = {
  MBH: "Klicka på ett objekt för att öppna dess popup.\nDär inne kan du redigera dina anteckningar.\nSamma objekt har samma popup på olika sidor.",
  VBH: "Klicka på ett objekt för att öppna dess popup.\nDär inne kan du redigera dina anteckningar.\nSamma objekt har samma popup på olika sidor.",
  DI: "På denna sida kan du ersätta beskrivningar för diskar till dina egna genom att skriva egna anteckningar i ett objekts popup-flik \"Disk\".\nSedan kan du växla mellan originalbeskrivningar & dina egna beskrivningar genom att trycka på knappen åt höger.",
  KA: "Klicka på ett objekt för att öppna dess popup.\nDär inne kan du redigera dina anteckningar.\nSamma objekt har samma popup på olika sidor.",
  LIST: "Här kan du skapa egna punkter för flödet i kategorierna Mjölk, Vassle och Övrigt.\nVarje punkt kan redigeras, tas bort, flyttas upp eller ner och visa statusfärg.",
};
const DI_FILTERS = [
  { id: "all", label: "Alla", componentIds: [] },
  {
    id: "mjolk",
    label: "Mjölk",
    componentIds: [
      "Ystmjölksledning_1_DI",
      "T110_13110_DI",
      "T106_13106_DI",
      "T107_13107_DI",
      "Helmjölksledning_1_DI",
      "Mottagningslinje 1-4_1_DI",
      "MOTTAGNINGSLINJE 5_1_DI",
      "T101_13101_DI",
      "T102_13102_DI",
      "T103_13103_DI",
      "T111_13111_DI",
      "T117_13117_DI",
      "T118_13118_DI",
      "T108_13108_DI",
    ],
  },
  {
    id: "vassle",
    label: "Vassle",
    componentIds: [
      "Utlastningsledning Vassle 2_1_DI",
      "Ledn. under OPD-Vassle_1_DI",
      "Fylln. Ledn. Vasslesilos_1_DI",
      "T601_52601_DI",
      "T602_52602_DI",
      "T606_52606_DI",
      "T607_52607_DI",
      "T662_51662_DI",
      "T664_51664_DI",
      "T109_131009_DI",
      "T601_51601_DI",
      "T602_51602_DI",
      "T636_51636_DI",
      "T650_51650_DI",
      "T501_14501_DI",
      "T704_31704_DI",
      "T613_51613_DI",
      "T629_51629_DI",
    ],
  },
  {
    id: "gradde",
    label: "Grädde",
    componentIds: [
      "Utlastningsledning Grädde_1_DI",
      "Ledn. till Gräddlager_1_DI",
      "Gräddledning_1_DI",
      "T215_31215_DI",
      "T216_31216_DI",
      "T220_31220_DI",
      "T221_31221_DI",
      "T206_14206_DI",
      "T207_14207_DI",
      "T613_51613_DI",
      "T629_51629_DI",
    ],
  },
  {
    id: "ledningar",
    label: "Ledningar",
    componentIds: [
      "Utlastningsledning Grädde_1_DI",
      "Utlastningsledning Vassle 2_1_DI",
      "Ledn. till Gräddlager_1_DI",
      "Ledn. under OPD-Vassle_1_DI",
      "Ystmjölksledning_1_DI",
      "Gräddledning_1_DI",
      "Fylln. Ledn. Vasslesilos_1_DI",
      "Utlastningsledning 1_1_DI",
      "Helmjölksledning_1_DI",
      "Mottagningslinje 1-4_1_DI",
      "MOTTAGNINGSLINJE 5_1_DI",
    ],
  },
  {
    id: "tankar",
    label: "Tankar",
    componentIds: [
      "T444_14444_DI",
      "T215_31215_DI",
      "T216_31216_DI",
      "T220_31220_DI",
      "T221_31221_DI",
      "T601_52601_DI",
      "T602_52602_DI",
      "T606_52606_DI",
      "T607_52607_DI",
      "T662_51662_DI",
      "T664_51664_DI",
      "T109_131009_DI",
      "T110_13110_DI",
      "T106_13106_DI",
      "T107_13107_DI",
      "T601_51601_DI",
      "T602_51602_DI",
      "T636_51636_DI",
      "T650_51650_DI",
      "T501_14501_DI",
      "T704_31704_DI",
      "T206_14206_DI",
      "T207_14207_DI",
      "T613_51613_DI",
      "T629_51629_DI",
      "T101_13101_DI",
      "T102_13102_DI",
      "T103_13103_DI",
      "T111_13111_DI",
      "T117_13117_DI",
      "T118_13118_DI",
      "T108_13108_DI",
    ],
  },
  {
    id: "ovrigt",
    label: "Övrigt",
    componentIds: [
      "Sur Gräns_1_DI",
      "FÖRSKÖLJ-TANK DC1_1_DI",
    ],
  },
];
const DI_DYNAMIC_LETTER_FILTERS = ["A", "B", "D", "E"];
const DI_FILTER_ROWS = [
  ["all"],
  ["mjolk", "vassle", "gradde"],
  ["ledningar", "tankar"],
  ["letter-A", "letter-B", "letter-D", "letter-E"],
  ["ovrigt"],
];

const svgRoot = document.querySelector("#svg-root");
const popupRoot = document.querySelector("#popup-root");
const diagramTabsRoot = document.querySelector("#diagram-tabs");
const diagramFiltersRoot = document.querySelector("#diagram-filters");
const helpButton = document.querySelector("#help-button");
const accountActionsRoot = document.querySelector("#account-actions");
const initialSession = loadSession();

if (initialSession) {
  clearSession();
}

const state = {
  isUnlocked: false,
  currentUser: null,
  sessionLoginAt: null,
  activeDiagramId: DIAGRAMS[0].id,
  activeComponentId: null,
  activePopupId: null,
  activeDiagramFilterId: "all",
  diDescriptionMode: "notes",
  activeHelpDiagramId: null,
  activeTab: TABS[0],
  isEditing: false,
  draftText: "",
  notes: {},
  listBoard: createEmptyListBoard(),
  listActionIcons: {},
  svgMarkupByDiagram: {},
  authView: null,
  authError: "",
  authForm: {
    username: "",
    password: "",
  },
  unlockPassword: "",
  unlockError: "",
  isAccountMenuOpen: false,
  listViewer: null,
  listEditor: null,
  logoutNotice: shouldShowInitialAutoLogoutNotice(initialSession) ? AUTO_LOGOUT_MESSAGE : "",
  autoLogoutTimerId: null,
};

initialize();

async function initialize() {
  bindHelpButton();
  bindAccountMenuDismiss();
  window.addEventListener("resize", resizeActiveDiagram);
  await renderApp();
  renderPopup();
}

async function renderApp() {
  if (!state.isUnlocked) {
    clearAutoLogoutTimer();
    renderLockScreen();
    return;
  }

  if (!state.currentUser) {
    clearAutoLogoutTimer();
    renderLoggedOutView();
    return;
  }

  state.notes = loadNotesForUser(state.currentUser);
  state.listBoard = loadListBoardForUser(state.currentUser);
  scheduleNextAutoLogout();
  setAppVisibility(true);
  renderDiagramTabs();
  renderHelpButton();
  renderAccountActions();
  renderDiagramFilters();
  await renderActiveDiagram();
}

function setAppVisibility(isVisible) {
  diagramTabsRoot.hidden = !isVisible;
  helpButton.hidden = !isVisible;
  accountActionsRoot.hidden = !isVisible;
}

function renderLockScreen() {
  setAppVisibility(false);
  document.body.classList.remove("diagram-ka");
  diagramTabsRoot.innerHTML = "";
  accountActionsRoot.innerHTML = "";
  diagramFiltersRoot.innerHTML = "";
  popupRoot.innerHTML = "";
  svgRoot.innerHTML = `
    <section class="auth-screen" aria-label="Låsskärm">
      <div>
        <h1 class="auth-title">Låst sida</h1>
        <p class="auth-copy">Skriv lösenordet för att låsa upp sidan.</p>
      </div>
      <form class="auth-form" data-unlock-form="true">
        <div class="auth-fields">
          <label class="auth-field">
            <span class="auth-label">Lösenord</span>
            <input
              class="auth-input"
              type="password"
              name="unlock-password"
              autocomplete="current-password"
              value="${escapeHtml(state.unlockPassword)}"
            />
          </label>
        </div>
        ${state.unlockError ? `<p class="auth-error">${escapeHtml(state.unlockError)}</p>` : ""}
        <div class="tab-actions">
          <button class="action-button primary" type="submit">Lås upp sidan</button>
        </div>
      </form>
    </section>
  `;

  const form = svgRoot.querySelector('[data-unlock-form="true"]');
  const input = svgRoot.querySelector('input[name="unlock-password"]');

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await unlockSite();
  });

  input?.addEventListener("input", (event) => {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }

    state.unlockPassword = event.target.value;
    state.unlockError = "";
  });

  input?.focus();
}

async function unlockSite() {
  if (state.unlockPassword === SITE_PASSWORD) {
    state.isUnlocked = true;
    state.unlockPassword = "";
    state.unlockError = "";
    await renderApp();
    return;
  }

  state.unlockError = "Fel lösenord";
  renderLockScreen();
}

function renderLoggedOutView() {
  setAppVisibility(false);
  document.body.classList.remove("diagram-ka");
  diagramTabsRoot.innerHTML = "";
  accountActionsRoot.innerHTML = "";
  diagramFiltersRoot.innerHTML = "";
  svgRoot.innerHTML = `
    <section class="auth-screen" aria-label="Inloggning">
      <div>
        <h1 class="auth-title">Mjölkbehandling</h1>
        <p class="auth-copy">Logga in eller skapa ett lokalt konto för att komma in i appen.</p>
      </div>
      <div class="auth-actions">
        <button class="action-button primary" type="button" data-auth-open="login">Logga in</button>
        <button class="action-button" type="button" data-auth-open="create">Skapa konto</button>
      </div>
    </section>
  `;

  svgRoot.querySelectorAll("[data-auth-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.getAttribute("data-auth-open");
      if (view === "login" || view === "create") {
        openAuthModal(view);
      }
    });
  });
}

function renderListBoardPage() {
  svgRoot.innerHTML = `
    <section
      class="list-board"
      aria-label="Listor"
      style="display:grid;grid-template-columns:repeat(${LIST_COLUMNS.length}, minmax(0, 1fr));gap:6px;width:100%;height:100%;min-height:0;"
    >
      ${LIST_COLUMNS.map((column) => `
        <section class="list-column" style="min-width:0;height:100%;box-sizing:border-box;">
          <header class="list-column-header">
            <h2 class="list-column-title">${column.label}</h2>
            <button
              class="icon-action-button icon-action-button--add"
              type="button"
              data-list-action="add"
              data-column-id="${column.id}"
              aria-label="Ny komponent"
            >
              ${getListActionIconMarkup("add")}
            </button>
          </header>
          <div class="list-items">
            ${renderListItems(column.id)}
          </div>
        </section>
      `).join("")}
    </section>
  `;

  svgRoot.querySelectorAll("[data-list-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const action = button.getAttribute("data-list-action");
      const columnId = button.getAttribute("data-column-id");
      const itemId = button.getAttribute("data-item-id");

      if (!columnId) {
        return;
      }

      event.stopPropagation();

      if (button.getAttribute("data-disabled") === "true") {
        return;
      }

      if (action === "add") {
        openListEditor(columnId);
        return;
      }

      if (!itemId) {
        return;
      }

      if (action === "open") {
        openListViewer(columnId, itemId);
        return;
      }

      if (action === "delete") {
        deleteListItem(columnId, itemId);
        return;
      }

      if (action === "status") {
        cycleListItemStatus(columnId, itemId);
        return;
      }

      if (action === "move-up") {
        moveListItem(columnId, itemId, -1);
        return;
      }

      if (action === "move-down") {
        moveListItem(columnId, itemId, 1);
      }
    });
  });
}

function renderListItems(columnId) {
  const items = state.listBoard[columnId] ?? [];

  if (items.length === 0) {
    return '<p class="list-empty">Inga punkter inlagda.</p>';
  }

  return items.map((item, index) => `
    <article
      class="list-item list-item--${item.status}"
      role="button"
      tabindex="0"
      data-list-action="open"
      data-column-id="${columnId}"
      data-item-id="${item.id}"
      aria-label="Öppna komponent"
    >
      <div class="list-item-text">${escapeHtml(getListItemPreviewText(item.text))}</div>
      <div class="list-item-actions">
        <button
          class="icon-action-button"
          type="button"
          data-list-action="status"
          data-column-id="${columnId}"
          data-item-id="${item.id}"
          aria-label="Växla status"
        >
          ${getListActionIconMarkup("color")}
        </button>
        <button
          class="icon-action-button${index === 0 ? " is-disabled" : ""}"
          type="button"
          data-list-action="move-up"
          data-column-id="${columnId}"
          data-item-id="${item.id}"
          aria-label="Flytta upp"
          data-disabled="${index === 0 ? "true" : "false"}"
        >
          ${getListActionIconMarkup("up")}
        </button>
        <button
          class="icon-action-button${index === items.length - 1 ? " is-disabled" : ""}"
          type="button"
          data-list-action="move-down"
          data-column-id="${columnId}"
          data-item-id="${item.id}"
          aria-label="Flytta ner"
          data-disabled="${index === items.length - 1 ? "true" : "false"}"
        >
          ${getListActionIconMarkup("down")}
        </button>
      </div>
    </article>
  `).join("");
}

function getListItemPreviewText(text) {
  return text.split(/\r?\n/, 1)[0] ?? "";
}

async function ensureListActionIconsLoaded() {
  const missingEntries = Object.entries(LIST_ACTION_ICON_FILES)
    .filter(([key]) => !state.listActionIcons[key]);

  if (missingEntries.length === 0) {
    return;
  }

  const loadedEntries = await Promise.all(missingEntries.map(async ([key, file]) => {
    const response = await fetch(file, { cache: "no-store" });
    const markup = await response.text();
    return [key, normalizeIconSvgMarkup(markup)];
  }));

  for (const [key, markup] of loadedEntries) {
    state.listActionIcons[key] = markup;
  }
}

function getListActionIconMarkup(key) {
  return state.listActionIcons[key] ?? "";
}

function normalizeIconSvgMarkup(markup) {
  return markup
    .replace(/<\?xml[\s\S]*?\?>/i, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<svg\b/, '<svg class="icon-button-svg"')
    .trim();
}

async function renderActiveDiagram() {
  const diagram = DIAGRAMS.find(({ id }) => id === state.activeDiagramId);
  if (!diagram) {
    return;
  }

  document.body.classList.toggle("diagram-ka", diagram.id === "KA");
  svgRoot.classList.toggle("svg-stage--list-board", diagram.id === "LIST");

  if (diagram.id === "LIST") {
    await ensureListActionIconsLoaded();
    renderListBoardPage();
    return;
  }

  const response = await fetch(diagram.file, { cache: "no-store" });
  state.svgMarkupByDiagram[diagram.id] = await response.text();

  svgRoot.innerHTML = state.svgMarkupByDiagram[diagram.id];

  const svg = svgRoot.querySelector("svg");
  if (!svg) {
    throw new Error("SVG could not be loaded.");
  }

  svg.removeAttribute("width");
  svg.removeAttribute("height");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  if (diagram.id === "DI") {
    fitSvgViewBoxToContent(svg);
  }

  resizeSvgToStage(svg);
  positionDiagramFilters(svg);
  bindSvgButtons(svg, diagram.id);
  applyDiskDescriptionsToDiagram(svg, diagram.id);
  applyDiagramFilter(svg, diagram.id);
  updateActiveSvgButton();
}

function resizeActiveDiagram() {
  if (!state.currentUser) {
    return;
  }

  if (state.activeDiagramId === "LIST") {
    return;
  }

  const svg = svgRoot.querySelector("svg");
  if (!svg) {
    return;
  }

  resizeSvgToStage(svg);
  positionDiagramFilters(svg);
  const textarea = popupRoot.querySelector(".tab-textarea");
  if (textarea instanceof HTMLTextAreaElement) {
    adjustPopupTextareaSize(textarea);
  }
}

function resizeSvgToStage(svg) {
  const stageRect = svgRoot.getBoundingClientRect();
  const stageWidth = Math.floor(stageRect.width);
  const stageHeight = Math.floor(stageRect.height);

  if (!stageWidth || !stageHeight) {
    return;
  }

  const viewBox = svg.viewBox.baseVal;
  const sourceWidth = viewBox?.width || Number(svg.getAttribute("width")) || 1;
  const sourceHeight = viewBox?.height || Number(svg.getAttribute("height")) || 1;

  if (!sourceWidth || !sourceHeight) {
    return;
  }

  const scale = Math.min(stageWidth / sourceWidth, stageHeight / sourceHeight);

  svg.style.width = `${sourceWidth * scale}px`;
  svg.style.height = `${sourceHeight * scale}px`;
}

function positionDiagramFilters(svg) {
  if (state.activeDiagramId !== "DI") {
    diagramFiltersRoot.style.removeProperty("--filters-top");
    diagramFiltersRoot.style.removeProperty("--filters-left");
    diagramFiltersRoot.style.removeProperty("--filters-right");
    diagramFiltersRoot.style.removeProperty("--filters-gap");
    return;
  }

  const svgRect = svg.getBoundingClientRect();
  const shellRect = svgRoot.getBoundingClientRect();
  const bodyStyles = window.getComputedStyle(document.body);
  const bodyPaddingTop = Number.parseFloat(bodyStyles.paddingTop) || 0;
  const topOffset = Math.max(0, svgRect.top - shellRect.top);
  const leftOffset = Math.max(0, svgRect.left - shellRect.left);
  const rightOffset = Math.max(0, shellRect.right - svgRect.right);

  diagramFiltersRoot.style.setProperty("--filters-top", `${topOffset}px`);
  diagramFiltersRoot.style.setProperty("--filters-left", `${leftOffset}px`);
  diagramFiltersRoot.style.setProperty("--filters-right", `${rightOffset}px`);
  diagramFiltersRoot.style.setProperty("--filters-gap", `${Math.max(24, bodyPaddingTop * 2.25)}px`);
}

function fitSvgViewBoxToContent(svg) {
  const contentRoot = svg.querySelector("#Buttons");
  if (!contentRoot) {
    return;
  }

  const bounds = contentRoot.getBBox();
  if (!bounds.width || !bounds.height) {
    return;
  }

  const padding = 8;
  const minX = Math.max(0, bounds.x - padding);
  const minY = Math.max(0, bounds.y - padding);
  const width = bounds.width + padding * 2;
  const height = bounds.height + padding * 2;

  svg.setAttribute("viewBox", `${minX} ${minY} ${width} ${height}`);
}

function renderDiagramTabs() {
  diagramTabsRoot.innerHTML = DIAGRAMS.map((diagram) => `
    <button
      class="diagram-tab${diagram.id === state.activeDiagramId ? " is-selected" : ""}"
      type="button"
      data-diagram-id="${diagram.id}"
    >
      ${diagram.label}
    </button>
  `).join("");

  diagramTabsRoot.querySelectorAll("[data-diagram-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      const nextDiagramId = button.getAttribute("data-diagram-id");
      if (!nextDiagramId || nextDiagramId === state.activeDiagramId) {
        return;
      }

      state.activeDiagramId = nextDiagramId;
      resetTransientState();
      renderDiagramTabs();
      renderHelpButton();
      renderDiagramFilters();
      renderPopup();
      await renderActiveDiagram();
    });
  });
}

function renderHelpButton() {
  const diagram = DIAGRAMS.find(({ id }) => id === state.activeDiagramId);
  const label = diagram?.label ?? "aktuell sida";

  helpButton.setAttribute("aria-label", `Öppna hjälp för ${label}`);
  helpButton.setAttribute("title", `Hjälp: ${label}`);
}

function renderAccountActions() {
  if (!state.currentUser) {
    accountActionsRoot.innerHTML = "";
    return;
  }

  accountActionsRoot.innerHTML = `
    <div class="account-menu">
      <button class="account-name action-button" type="button" data-account-action="toggle-menu">
        ${escapeHtml(state.currentUser)}
      </button>
      ${
        state.isAccountMenuOpen
          ? `
            <div class="account-menu-panel">
              <button class="action-button" type="button" data-account-action="logout">Logga ut</button>
              <button class="action-button" type="button" data-account-action="delete">Ta bort konto</button>
            </div>
          `
          : ""
      }
    </div>
  `;

  accountActionsRoot.querySelector('[data-account-action="toggle-menu"]')?.addEventListener("click", () => {
    state.isAccountMenuOpen = !state.isAccountMenuOpen;
    renderAccountActions();
  });

  accountActionsRoot.querySelector('[data-account-action="logout"]')?.addEventListener("click", () => {
    void logoutUser();
  });

  accountActionsRoot.querySelector('[data-account-action="delete"]')?.addEventListener("click", () => {
    openAuthModal("delete");
  });
}

function bindAccountMenuDismiss() {
  document.addEventListener("pointerdown", (event) => {
    if (!state.isAccountMenuOpen) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    if (accountActionsRoot.contains(target)) {
      return;
    }

    state.isAccountMenuOpen = false;
    renderAccountActions();
  });
}

function bindHelpButton() {
  helpButton.addEventListener("click", () => {
    if (!state.currentUser) {
      return;
    }

    if (state.activeHelpDiagramId === state.activeDiagramId) {
      closeHelpPopup();
      return;
    }

    state.activeHelpDiagramId = state.activeDiagramId;
    state.activeComponentId = null;
    state.activePopupId = null;
    state.isEditing = false;
    state.draftText = "";
    updateActiveSvgButton();
    renderPopup();
  });
}

function renderDiagramFilters() {
  if (!state.currentUser || state.activeDiagramId !== "DI") {
    diagramFiltersRoot.innerHTML = "";
    return;
  }

  const availableFilters = getAvailableDiFilters();
  const filtersById = new Map(availableFilters.map((filter) => [filter.id, filter]));

  const filterRows = DI_FILTER_ROWS.map((row) => {
    const rowButtons = row
      .map((filterId) => filtersById.get(filterId))
      .filter(Boolean)
      .map((filter) => `
        <button
          class="diagram-filter${filter.id === state.activeDiagramFilterId ? " is-selected" : ""}"
          type="button"
          data-filter-id="${filter.id}"
        >
          ${filter.label}
        </button>
      `)
      .join("");

    return `<div class="diagram-filter-row">${rowButtons}</div>`;
  }).join("");

  const descriptionToggleLabel = state.diDescriptionMode === "notes"
    ? "Återgå till originalbeskrivningar"
    : "Gå till dina egna beskrivningar";

  diagramFiltersRoot.innerHTML = `
    ${filterRows}
    <div class="diagram-filter-row diagram-filter-row--align-end">
      <button class="diagram-filter" type="button" data-action="toggle-di-descriptions">
        ${descriptionToggleLabel}
      </button>
    </div>
  `;

  diagramFiltersRoot.querySelectorAll("[data-filter-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextFilterId = button.getAttribute("data-filter-id");
      if (!nextFilterId || nextFilterId === state.activeDiagramFilterId) {
        return;
      }

      state.activeDiagramFilterId = nextFilterId;
      renderDiagramFilters();
      const svg = svgRoot.querySelector("svg");
      if (svg) {
        applyDiagramFilter(svg, state.activeDiagramId);
      }
    });
  });

  diagramFiltersRoot.querySelector('[data-action="toggle-di-descriptions"]')?.addEventListener("click", () => {
    toggleDiDescriptionMode();
  });
}

function toggleDiDescriptionMode() {
  state.diDescriptionMode = state.diDescriptionMode === "notes" ? "original" : "notes";
  renderDiagramFilters();

  if (state.activeDiagramId !== "DI") {
    return;
  }

  const svg = svgRoot.querySelector("svg");
  if (svg) {
    applyDiskDescriptionsToDiagram(svg, "DI");
  }
}

function bindSvgButtons(svg, diagramId) {
  const buttonGroups = svg.querySelectorAll(`#Buttons g[id$="_${diagramId}"]`);

  for (const group of buttonGroups) {
    if (diagramId === "KA") {
      addHitbox(group, svg);
    }

    group.classList.add("svg-button");
    applyHoverScale(group);
    group.dataset.normalizedId = normalizeSvgIdentifier(group.id);
    group.setAttribute("tabindex", "0");
    group.setAttribute("role", "button");
    group.setAttribute("aria-label", `${formatComponentName(group.id)}: öppna popup`);

    group.addEventListener("click", () => openPopup(group.id));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPopup(group.id);
      }
    });
  }
}

function applyDiagramFilter(svg, diagramId) {
  const buttonGroups = svg.querySelectorAll(`#Buttons g[id$="_${diagramId}"]`);

  if (diagramId !== "DI") {
    buttonGroups.forEach((group) => {
      group.classList.remove("is-filtered-out");
      group.setAttribute("tabindex", "0");
      group.setAttribute("aria-disabled", "false");
    });
    return;
  }

  const activeFilter = getAvailableDiFilters().find(({ id }) => id === state.activeDiagramFilterId)
    ?? getAvailableDiFilters()[0];
  const enabledIds = new Set(getFilterComponentIds(activeFilter, svg).map(normalizeSvgIdentifier));

  buttonGroups.forEach((group) => {
    const isEnabled =
      activeFilter.id === "all" || enabledIds.has(group.dataset.normalizedId ?? "");

    group.classList.toggle("is-filtered-out", !isEnabled);
    group.setAttribute("tabindex", isEnabled ? "0" : "-1");
    group.setAttribute("aria-disabled", String(!isEnabled));
  });

  if (
    state.activeComponentId &&
    activeFilter.id !== "all" &&
    !enabledIds.has(normalizeSvgIdentifier(state.activeComponentId))
  ) {
    closePopup();
  }
}

function getAvailableDiFilters() {
  return [
    ...DI_FILTERS,
    ...DI_DYNAMIC_LETTER_FILTERS.map((letter) => ({
      id: `letter-${letter}`,
      label: letter,
      componentIds: [],
      matcher: (group) => getDiDiskLetter(group) === letter,
    })),
  ];
}

function getFilterComponentIds(filter, svg) {
  if (!filter.matcher) {
    return filter.componentIds;
  }

  return Array.from(svg.querySelectorAll('#Buttons g[id$="_DI"]'))
    .filter((group) => filter.matcher(group))
    .map((group) => normalizeSvgIdentifier(group.id));
}

function getDiDiskLetter(group) {
  const diskGroup = group.querySelector('g[id^="Disk"]');
  if (!diskGroup) {
    return "";
  }

  const diskLetterNode = diskGroup.querySelector('path[id]');
  if (!diskLetterNode) {
    return "";
  }

  const normalizedId = normalizeSvgIdentifier(diskLetterNode.id);
  return normalizedId.charAt(0).toUpperCase();
}

function addHitbox(group, svg) {
  if (group.querySelector(":scope > .svg-hitbox")) {
    return;
  }

  const bounds = group.getBBox();
  if (!bounds.width || !bounds.height) {
    return;
  }

  const hitbox = document.createElementNS(svg.namespaceURI, "rect");
  hitbox.setAttribute("class", "svg-hitbox");
  hitbox.setAttribute("x", String(bounds.x));
  hitbox.setAttribute("y", String(bounds.y));
  hitbox.setAttribute("width", String(bounds.width));
  hitbox.setAttribute("height", String(bounds.height));
  hitbox.setAttribute("fill", "#ffffff");
  hitbox.setAttribute("opacity", "0");

  group.append(hitbox);
}

function applyHoverScale(group) {
  const bounds = group.getBBox();
  const maxDimension = Math.max(bounds.width, bounds.height);

  let hoverScale = 1.035;

  if (maxDimension < 90) {
    hoverScale = 1.16;
  } else if (maxDimension < 140) {
    hoverScale = 1.125;
  } else if (maxDimension < 220) {
    hoverScale = 1.095;
  } else if (maxDimension < 340) {
    hoverScale = 1.07;
  } else if (maxDimension < 520) {
    hoverScale = 1.05;
  }

  group.style.setProperty("--hover-scale", String(hoverScale));
}

function openPopup(componentId) {
  if (!state.currentUser) {
    return;
  }

  const popupId = getPopupId(componentId);
  const initialTab = state.activeDiagramId === "DI" ? "Disk" : TABS[0];

  state.authView = null;
  state.authError = "";
  state.activeHelpDiagramId = null;
  state.activeComponentId = componentId;
  state.activePopupId = popupId;
  state.activeTab = initialTab;
  state.isEditing = false;
  state.draftText = getTabText(initialTab);
  updateActiveSvgButton();
  renderPopup();
}

function closePopup() {
  state.activeComponentId = null;
  state.activePopupId = null;
  state.isEditing = false;
  state.draftText = "";
  updateActiveSvgButton();
  renderPopup();
}

function closeHelpPopup() {
  state.activeHelpDiagramId = null;
  renderPopup();
}

function openListEditor(columnId, itemId = null) {
  if (itemId) {
    const existingItem = (state.listBoard[columnId] ?? []).find((item) => item.id === itemId) ?? null;
    if (!existingItem) {
      return;
    }

    state.listViewer = {
      columnId,
      itemId,
      text: existingItem.text,
      error: "",
      isEditing: true,
    };
    state.listEditor = null;
    renderPopup();
    return;
  }

  const existingItem = itemId
    ? (state.listBoard[columnId] ?? []).find((item) => item.id === itemId) ?? null
    : null;

  state.listEditor = {
    columnId,
    itemId,
    text: existingItem?.text ?? "",
    error: "",
  };
  renderPopup();
}

function openListViewer(columnId, itemId) {
  const item = (state.listBoard[columnId] ?? []).find((entry) => entry.id === itemId) ?? null;
  if (!item) {
    return;
  }

  state.listViewer = {
    columnId,
    itemId,
    text: item.text,
    error: "",
    isEditing: false,
  };
  state.listEditor = null;
  renderPopup();
}

function closeListViewer() {
  state.listViewer = null;
  renderPopup();
}

function closeListEditor() {
  state.listEditor = null;
  renderPopup();
}

function saveListEditor() {
  if (!state.currentUser) {
    return;
  }

  if (state.listViewer?.isEditing) {
    const text = state.listViewer.text.trim();
    if (!text) {
      state.listViewer.error = "Skriv text för komponenten.";
      renderPopup();
      return;
    }

    state.listBoard[state.listViewer.columnId] = (state.listBoard[state.listViewer.columnId] ?? []).map((item) => (
      item.id === state.listViewer?.itemId
        ? { ...item, text }
        : item
    ));

    persistListBoard();
    state.listViewer = {
      ...state.listViewer,
      text,
      error: "",
      isEditing: false,
    };

    if (state.activeDiagramId === "LIST") {
      renderListBoardPage();
    }

    renderPopup();
    return;
  }

  if (!state.listEditor) {
    return;
  }

  const text = state.listEditor.text.trim();
  if (!text) {
    state.listEditor.error = "Skriv text för komponenten.";
    renderPopup();
    return;
  }

  const items = state.listBoard[state.listEditor.columnId] ?? [];

  if (state.listEditor.itemId) {
    state.listBoard[state.listEditor.columnId] = items.map((item) => (
      item.id === state.listEditor.itemId
        ? { ...item, text }
        : item
    ));
  } else {
    state.listBoard[state.listEditor.columnId] = [
      ...items,
      {
        id: crypto.randomUUID(),
        text,
        status: "none",
      },
    ];
  }

  persistListBoard();
  state.listEditor = null;
  state.listViewer = null;

  if (state.activeDiagramId === "LIST") {
    renderListBoardPage();
  }

  renderPopup();
}

function deleteListItem(columnId, itemId) {
  state.listBoard[columnId] = (state.listBoard[columnId] ?? []).filter((item) => item.id !== itemId);
  persistListBoard();

  if (state.activeDiagramId === "LIST") {
    renderListBoardPage();
  }
}

function cycleListItemStatus(columnId, itemId) {
  state.listBoard[columnId] = (state.listBoard[columnId] ?? []).map((item) => {
    if (item.id !== itemId) {
      return item;
    }

    const currentIndex = LIST_STATUS_ORDER.indexOf(item.status);
    const nextStatus = LIST_STATUS_ORDER[(currentIndex + 1) % LIST_STATUS_ORDER.length];
    return { ...item, status: nextStatus };
  });

  persistListBoard();

  if (state.activeDiagramId === "LIST") {
    renderListBoardPage();
  }
}

function moveListItem(columnId, itemId, direction) {
  const items = [...(state.listBoard[columnId] ?? [])];
  const currentIndex = items.findIndex((item) => item.id === itemId);
  const nextIndex = currentIndex + direction;

  if (currentIndex < 0 || nextIndex < 0 || nextIndex >= items.length) {
    return;
  }

  [items[currentIndex], items[nextIndex]] = [items[nextIndex], items[currentIndex]];
  state.listBoard[columnId] = items;
  persistListBoard();

  if (state.activeDiagramId === "LIST") {
    renderListBoardPage();
  }
}

function openAuthModal(view) {
  state.authView = view;
  state.authError = "";
  if (view !== "delete") {
    state.authForm = {
      username: "",
      password: "",
    };
  }
  renderPopup();
}

function closeAuthModal() {
  state.authView = null;
  state.authError = "";
  state.authForm = {
    username: "",
    password: "",
  };
  renderPopup();
}

function setActiveTab(tab) {
  state.activeTab = tab;
  state.isEditing = false;
  state.draftText = getTabText(tab);
  renderPopup();
}

function startEditing() {
  state.isEditing = true;
  state.draftText = getTabText(state.activeTab);
  renderPopup();
}

function saveEditing() {
  if (!state.activePopupId || !state.currentUser) {
    return;
  }

  const popupNotes = ensurePopupNotes(state.activePopupId);
  popupNotes[state.activeTab] = state.draftText;
  persistPopupNotes(state.activePopupId);

  if (isDiDescriptionTab() && state.diDescriptionMode === "notes") {
    syncComponentDescriptionInSvg(state.activeComponentId);
  }

  state.isEditing = false;
  renderPopup();
}

function cancelEditing() {
  state.draftText = getTabText(state.activeTab);
  state.isEditing = false;
  renderPopup();
}

function renderPopup() {
  if (state.listViewer) {
    const columnLabel = LIST_COLUMNS.find(({ id }) => id === state.listViewer?.columnId)?.label ?? "";
    const item = (state.listBoard[state.listViewer.columnId] ?? []).find((entry) => entry.id === state.listViewer?.itemId) ?? null;

    if (!item) {
      state.listViewer = null;
      renderPopup();
      return;
    }

    popupRoot.innerHTML = `
      <div class="modal-backdrop" data-close-backdrop="true">
        <section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="list-viewer-title">
          <header class="modal-header">
            <div class="modal-heading">
              <p class="modal-kicker">Listor</p>
              <h2 class="modal-title" id="list-viewer-title">${state.listViewer.isEditing ? "Redigera komponent" : escapeHtml(columnLabel)}</h2>
            </div>
            <button class="modal-close" type="button" data-action="close-list-viewer" aria-label="Stäng">×</button>
          </header>
          <div class="auth-form list-viewer-body${state.listViewer.isEditing ? " list-viewer-body--editing" : ""}">
            ${
              state.listViewer.isEditing
                ? `
                  <label class="auth-field">
                    <span class="auth-label">Text</span>
                    <textarea class="tab-textarea" data-list-viewer-text="true">${escapeHtml(state.listViewer.text)}</textarea>
                  </label>
                  ${state.listViewer.error ? `<p class="auth-error">${escapeHtml(state.listViewer.error)}</p>` : ""}
                `
                : `<div class="list-viewer-text">${escapeHtml(item.text)}</div>`
            }
            <div class="tab-actions">
              ${
                state.listViewer.isEditing
                  ? `
                    <button class="action-button" type="button" data-action="cancel-list-viewer-edit">Avbryt</button>
                    <button class="action-button primary" type="button" data-action="save-list-viewer-edit">Spara</button>
                  `
                  : `
                    <button
                      class="icon-action-button icon-action-button--popup icon-action-button--popup-edit"
                      type="button"
                      data-action="edit-list-viewer"
                      aria-label="Redigera komponent"
                    >
                      ${getListActionIconMarkup("edit")}
                    </button>
                    <button
                      class="icon-action-button icon-action-button--popup"
                      type="button"
                      data-action="delete-list-viewer"
                      aria-label="Ta bort komponent"
                    >
                      ${getListActionIconMarkup("delete")}
                    </button>
                  `
              }
            </div>
          </div>
        </section>
      </div>
    `;

    bindBackdropClose(closeListViewer);
    popupRoot.querySelector('[data-action="close-list-viewer"]')?.addEventListener("click", closeListViewer);
    popupRoot.querySelector('[data-action="edit-list-viewer"]')?.addEventListener("click", () => {
      if (!state.listViewer) {
        return;
      }

      state.listViewer = {
        ...state.listViewer,
        text: item.text,
        error: "",
        isEditing: true,
      };
      renderPopup();
    });
    popupRoot.querySelector('[data-action="delete-list-viewer"]')?.addEventListener("click", () => {
      if (!state.listViewer) {
        return;
      }

      const { columnId, itemId } = state.listViewer;
      deleteListItem(columnId, itemId);
      closeListViewer();
    });
    popupRoot.querySelector('[data-action="cancel-list-viewer-edit"]')?.addEventListener("click", () => {
      if (!state.listViewer) {
        return;
      }

      state.listViewer = {
        ...state.listViewer,
        text: item.text,
        error: "",
        isEditing: false,
      };
      renderPopup();
    });
    popupRoot.querySelector('[data-action="save-list-viewer-edit"]')?.addEventListener("click", saveListEditor);
    popupRoot.querySelector('[data-list-viewer-text="true"]')?.addEventListener("input", (event) => {
      if (!(event.target instanceof HTMLTextAreaElement) || !state.listViewer) {
        return;
      }

      state.listViewer.text = event.target.value;
      state.listViewer.error = "";
    });
    if (state.listViewer.isEditing) {
      popupRoot.querySelector('[data-list-viewer-text="true"]')?.focus();
    }
    return;
  }

  if (state.listEditor) {
    const columnLabel = LIST_COLUMNS.find(({ id }) => id === state.listEditor.columnId)?.label ?? "";

    popupRoot.innerHTML = `
      <div class="modal-backdrop" data-close-backdrop="true">
        <section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="list-editor-title">
          <header class="modal-header">
            <div class="modal-heading">
              <p class="modal-kicker">Listor</p>
              <h2 class="modal-title" id="list-editor-title">${state.listEditor.itemId ? "Redigera komponent" : `Ny komponent i ${escapeHtml(columnLabel)}`}</h2>
            </div>
            <button class="modal-close" type="button" data-action="close-list-editor" aria-label="Stäng">×</button>
          </header>
          <div class="auth-form">
            <label class="auth-field">
              <span class="auth-label">Text</span>
              <textarea class="tab-textarea" data-list-editor-text="true">${escapeHtml(state.listEditor.text)}</textarea>
            </label>
            ${state.listEditor.error ? `<p class="auth-error">${escapeHtml(state.listEditor.error)}</p>` : ""}
            <div class="tab-actions">
              <button class="action-button" type="button" data-action="cancel-list-editor">Avbryt</button>
              <button class="action-button primary" type="button" data-action="save-list-editor">Spara</button>
            </div>
          </div>
        </section>
      </div>
    `;

    bindBackdropClose(closeListEditor);
    popupRoot.querySelector('[data-action="close-list-editor"]')?.addEventListener("click", closeListEditor);
    popupRoot.querySelector('[data-action="cancel-list-editor"]')?.addEventListener("click", closeListEditor);
    popupRoot.querySelector('[data-action="save-list-editor"]')?.addEventListener("click", saveListEditor);
    popupRoot.querySelector('[data-list-editor-text="true"]')?.addEventListener("input", (event) => {
      if (!(event.target instanceof HTMLTextAreaElement) || !state.listEditor) {
        return;
      }

      state.listEditor.text = event.target.value;
      state.listEditor.error = "";
    });
    popupRoot.querySelector('[data-list-editor-text="true"]')?.focus();
    return;
  }

  if (state.logoutNotice) {
    popupRoot.innerHTML = `
      <div class="modal-backdrop" data-close-backdrop="true">
        <section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="logout-notice-title">
          <header class="modal-header">
            <div class="modal-heading">
              <p class="modal-kicker">Information</p>
              <h2 class="modal-title" id="logout-notice-title">Automatisk utloggning</h2>
            </div>
            <button class="modal-close" type="button" data-action="close-logout-notice" aria-label="Stäng">×</button>
          </header>
          <div class="help-content">${escapeHtml(state.logoutNotice)}</div>
        </section>
      </div>
    `;

    bindBackdropClose(closeLogoutNotice);
    popupRoot.querySelector('[data-action="close-logout-notice"]')?.addEventListener("click", closeLogoutNotice);
    return;
  }

  if (state.authView) {
    renderAuthPopup();
    return;
  }

  if (state.activeHelpDiagramId) {
    const diagram = DIAGRAMS.find(({ id }) => id === state.activeHelpDiagramId);
    const title = diagram?.label ?? "Hjälp";
    const text = HELP_CONTENT[state.activeHelpDiagramId] ?? "";

    popupRoot.innerHTML = `
      <div class="modal-backdrop" data-close-backdrop="true">
        <section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="help-modal-title">
          <header class="modal-header">
            <div class="modal-heading">
              <p class="modal-kicker">Hjälp</p>
              <h2 class="modal-title" id="help-modal-title">${escapeHtml(title)}</h2>
            </div>
            <button class="modal-close" type="button" data-action="close-help" aria-label="Stäng hjälp">×</button>
          </header>
          <div class="help-content">${escapeHtml(text)}</div>
        </section>
      </div>
    `;

    bindBackdropClose(closeHelpPopup);
    popupRoot.querySelector('[data-action="close-help"]')?.addEventListener("click", closeHelpPopup);
    return;
  }

  if (!state.activeComponentId) {
    popupRoot.innerHTML = "";
    return;
  }

  const title = formatPopupName(state.activePopupId);
  const text = state.isEditing
    ? state.draftText
    : getTabText(state.activeTab);
  const placeholder = TAB_PLACEHOLDERS[state.activeTab] ?? "";

  popupRoot.innerHTML = `
    <div class="modal-backdrop modal-backdrop--popup" data-close-backdrop="true">
      <section class="modal modal--popup" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <header class="modal-header">
          <div class="modal-heading">
            <p class="modal-kicker">Komponent</p>
            <h2 class="modal-title" id="modal-title">${escapeHtml(title)}</h2>
          </div>
          <button class="modal-close" type="button" data-action="close" aria-label="Stäng popup">×</button>
        </header>
        <div class="tab-list" role="tablist" aria-label="Anteckningskategorier">
          ${TABS.map((tab) => `
            <button
              class="tab-button${tab === state.activeTab ? " is-selected" : ""}"
              type="button"
              role="tab"
              aria-selected="${String(tab === state.activeTab)}"
              data-tab="${tab}"
            >
              ${tab}
            </button>
          `).join("")}
        </div>
        <div class="tab-panel">
          <div class="tab-panel-head">
            ${state.isEditing ? '<p class="tab-caption">Redigeringsläge</p>' : ""}
          </div>
          <textarea
            class="tab-textarea"
            ${state.isEditing ? "" : "readonly"}
            aria-label="Anteckningar för ${escapeHtml(state.activeTab)}"
            placeholder="${escapeHtml(placeholder)}"
          >${escapeHtml(text)}</textarea>
          <div class="tab-actions">
            ${
              state.isEditing
                ? `
                  <button class="action-button" type="button" data-action="cancel">Avbryt</button>
                  <button class="action-button primary" type="button" data-action="save">Spara</button>
                `
                : `
                  <button class="action-button primary" type="button" data-action="edit">Redigera</button>
                `
            }
          </div>
        </div>
      </section>
    </div>
  `;

  const textarea = popupRoot.querySelector(".tab-textarea");

  bindBackdropClose(closePopup);
  popupRoot.querySelector('[data-action="close"]')?.addEventListener("click", closePopup);
  popupRoot.querySelector('[data-action="edit"]')?.addEventListener("click", startEditing);
  popupRoot.querySelector('[data-action="save"]')?.addEventListener("click", saveEditing);
  popupRoot.querySelector('[data-action="cancel"]')?.addEventListener("click", cancelEditing);

  popupRoot.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTab = button.getAttribute("data-tab");
      if (nextTab) {
        setActiveTab(nextTab);
      }
    });
  });

  textarea?.addEventListener("input", (event) => {
    if (state.isEditing && event.target instanceof HTMLTextAreaElement) {
      const previousDraft = state.draftText;

      state.draftText = event.target.value;
      adjustPopupTextareaSize(event.target);

      const hasOverflow = event.target.scrollHeight > event.target.clientHeight + 1;
      if (hasOverflow) {
        state.draftText = previousDraft;
        event.target.value = previousDraft;
        adjustPopupTextareaSize(event.target);
      }
    }
  });

  if (textarea instanceof HTMLTextAreaElement) {
    adjustPopupTextareaSize(textarea);
  }

  if (state.isEditing) {
    textarea?.focus();
    textarea?.setSelectionRange(textarea.value.length, textarea.value.length);
  }
}

function adjustPopupTextareaSize(textarea) {
  const modal = textarea.closest(".modal");
  const backdrop = textarea.closest(".modal-backdrop");

  if (!(modal instanceof HTMLElement) || !(backdrop instanceof HTMLElement)) {
    return;
  }

  const backdropStyles = window.getComputedStyle(backdrop);
  const backdropPaddingTop = Number.parseFloat(backdropStyles.paddingTop) || 24;
  const backdropPaddingBottom = Number.parseFloat(backdropStyles.paddingBottom) || backdropPaddingTop;
  const maxModalHeight = Math.max(240, window.innerHeight - backdropPaddingTop - backdropPaddingBottom);
  const minTextareaHeight = 160;

  textarea.style.height = "auto";
  textarea.style.overflowY = "hidden";

  const textareaStyles = window.getComputedStyle(textarea);
  const borderHeight =
    (Number.parseFloat(textareaStyles.borderTopWidth) || 0) +
    (Number.parseFloat(textareaStyles.borderBottomWidth) || 0);
  const naturalTextareaHeight = Math.max(minTextareaHeight, textarea.scrollHeight + borderHeight);

  textarea.style.height = `${naturalTextareaHeight}px`;

  const naturalModalHeight = modal.scrollHeight;
  const overflowAmount = Math.max(0, naturalModalHeight - maxModalHeight);
  const nextHeight = Math.max(minTextareaHeight, naturalTextareaHeight - overflowAmount);

  textarea.style.height = `${nextHeight}px`;
  textarea.style.overflowY = "hidden";
}

function renderAuthPopup() {
  const isDeleteView = state.authView === "delete";
  const title = isDeleteView
    ? "Ta bort konto"
    : state.authView === "create"
      ? "Skapa konto"
      : "Logga in";
  const submitLabel = isDeleteView
    ? "Ta bort konto"
    : state.authView === "create"
      ? "Skapa konto"
      : "Logga in";

  popupRoot.innerHTML = `
    <div class="modal-backdrop" data-close-backdrop="true">
      <section class="modal help-modal" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
        <header class="modal-header">
          <div class="modal-heading">
            <p class="modal-kicker">Konto</p>
            <h2 class="modal-title" id="auth-modal-title">${title}</h2>
          </div>
          <button class="modal-close" type="button" data-action="close-auth" aria-label="Stäng">×</button>
        </header>
        ${
          isDeleteView
            ? `
              <div class="auth-form">
                <p class="confirm-copy">Är du säker på att du vill ta bort kontot? Alla dina anteckningar kommer att raderas.</p>
                <div class="tab-actions">
                  <button class="action-button" type="button" data-action="cancel-auth">Avbryt</button>
                  <button class="action-button primary" type="button" data-action="submit-auth">${submitLabel}</button>
                </div>
              </div>
            `
            : `
              <form class="auth-form" data-auth-form="true">
                <div class="auth-fields">
                  <label class="auth-field">
                    <span class="auth-label">Användarnamn</span>
                    <input
                      class="auth-input"
                      type="text"
                      name="username"
                      autocomplete="username"
                      value="${escapeHtml(state.authForm.username)}"
                    />
                  </label>
                  <label class="auth-field">
                    <span class="auth-label">Lösenord</span>
                    <input
                      class="auth-input"
                      type="password"
                      name="password"
                      autocomplete="${state.authView === "create" ? "new-password" : "current-password"}"
                      value="${escapeHtml(state.authForm.password)}"
                    />
                  </label>
                </div>
                ${state.authError ? `<p class="auth-error">${escapeHtml(state.authError)}</p>` : ""}
                <div class="tab-actions">
                  <button class="action-button" type="button" data-action="cancel-auth">Avbryt</button>
                  <button class="action-button primary" type="submit">${submitLabel}</button>
                </div>
              </form>
            `
        }
      </section>
    </div>
  `;

  bindBackdropClose(closeAuthModal);
  popupRoot.querySelector('[data-action="close-auth"]')?.addEventListener("click", closeAuthModal);
  popupRoot.querySelector('[data-action="cancel-auth"]')?.addEventListener("click", closeAuthModal);
  popupRoot.querySelector('[data-action="submit-auth"]')?.addEventListener("click", () => {
    void handleAuthSubmit();
  });

  const form = popupRoot.querySelector('[data-auth-form="true"]');
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    void handleAuthSubmit();
  });

  popupRoot.querySelectorAll(".auth-input").forEach((input) => {
    input.addEventListener("input", (event) => {
      if (!(event.target instanceof HTMLInputElement)) {
        return;
      }

      state.authForm = {
        ...state.authForm,
        [event.target.name]: event.target.value,
      };
    });
  });

  popupRoot.querySelector(".auth-input")?.focus();
}

function closeLogoutNotice() {
  state.logoutNotice = "";
  renderPopup();
}

function bindBackdropClose(onClose) {
  const backdrop = popupRoot.querySelector(".modal-backdrop");
  let backdropPointerDown = false;

  backdrop?.addEventListener("pointerdown", (event) => {
    backdropPointerDown =
      event.target instanceof HTMLElement && event.target.dataset.closeBackdrop === "true";
  });

  backdrop?.addEventListener("click", (event) => {
    if (
      backdropPointerDown &&
      event.target instanceof HTMLElement &&
      event.target.dataset.closeBackdrop === "true"
    ) {
      onClose();
    }
    backdropPointerDown = false;
  });
}

async function handleAuthSubmit() {
  if (state.authView === "delete") {
    await deleteCurrentUser();
    return;
  }

  const username = state.authForm.username.trim();
  const password = state.authForm.password;

  if (!username || !password) {
    state.authError = "Fyll i användarnamn och lösenord.";
    renderPopup();
    return;
  }

  if (state.authView === "create") {
    await createAccount(username, password);
    return;
  }

  await loginUser(username, password);
}

function updateActiveSvgButton() {
  const currentActive = svgRoot.querySelector(".svg-button.is-active");
  currentActive?.classList.remove("is-active");

  if (!state.activeComponentId) {
    return;
  }

  const nextActive = svgRoot.querySelector(`#${CSS.escape(state.activeComponentId)}`);
  nextActive?.classList.add("is-active");
}

function ensurePopupNotes(popupId) {
  if (!popupId) {
    return createEmptyTabRecord();
  }

  if (!state.notes[popupId]) {
    state.notes[popupId] = createEmptyTabRecord();
  }

  return state.notes[popupId];
}

function createEmptyTabRecord() {
  return Object.fromEntries(TABS.map((tab) => [tab, ""]));
}

function getSavedText(popupId, tab) {
  if (!popupId) {
    return "";
  }

  return ensurePopupNotes(popupId)[tab] ?? "";
}

function getTabText(tab) {
  if (isDiDescriptionTab(tab)) {
    return getSavedDescription(state.activeComponentId);
  }

  return getSavedText(state.activePopupId, tab);
}

function getSavedDescription(componentId) {
  if (!componentId) {
    return "";
  }

  return getSavedText(getPopupId(componentId), "Disk");
}

function persistPopupNotes(popupId) {
  if (!state.currentUser || !popupId) {
    return;
  }

  localStorage.setItem(
    getNoteStorageKey(state.currentUser, popupId),
    JSON.stringify(ensurePopupNotes(popupId)),
  );
}

function createEmptyListBoard() {
  return Object.fromEntries(LIST_COLUMNS.map((column) => [column.id, []]));
}

function loadListBoardForUser(username) {
  try {
    const value = localStorage.getItem(getListBoardStorageKey(username));
    if (!value) {
      return createEmptyListBoard();
    }

    const parsed = JSON.parse(value);
    return normalizeListBoard(parsed);
  } catch {
    return createEmptyListBoard();
  }
}

function normalizeListBoard(value) {
  const nextBoard = createEmptyListBoard();

  for (const column of LIST_COLUMNS) {
    const items = Array.isArray(value?.[column.id]) ? value[column.id] : [];
    nextBoard[column.id] = items
      .filter((item) => typeof item?.text === "string")
      .map((item) => ({
        id: typeof item.id === "string" ? item.id : crypto.randomUUID(),
        text: item.text,
        status: LIST_STATUS_ORDER.includes(item.status) ? item.status : "none",
      }));
  }

  return nextBoard;
}

function persistListBoard() {
  if (!state.currentUser) {
    return;
  }

  localStorage.setItem(
    getListBoardStorageKey(state.currentUser),
    JSON.stringify(state.listBoard),
  );
}

function loadNotesForUser(username) {
  const prefix = `${NOTE_PREFIX}${username}::`;
  const notes = {};

  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (!key || !key.startsWith(prefix)) {
      continue;
    }

    const popupId = key.split("::").pop();
    if (!popupId) {
      continue;
    }

    try {
      const parsed = JSON.parse(localStorage.getItem(key) ?? "null");
      if (isTabRecord(parsed)) {
        notes[popupId] = parsed;
      }
    } catch {
      continue;
    }
  }

  return notes;
}

function getNoteStorageKey(username, popupId) {
  return `${NOTE_PREFIX}${username}::${SHARED_NOTES_SCOPE}::${popupId}`;
}

function getListBoardStorageKey(username) {
  return `${LIST_BOARD_PREFIX}${username}`;
}

function deleteNotesForUser(username) {
  const keysToDelete = [];
  const prefix = `${NOTE_PREFIX}${username}::`;

  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (key?.startsWith(prefix)) {
      keysToDelete.push(key);
    }
  }

  keysToDelete.forEach((key) => localStorage.removeItem(key));
}

function deleteListBoardForUser(username) {
  localStorage.removeItem(getListBoardStorageKey(username));
}

function isTabRecord(value) {
  return Boolean(
    value &&
      typeof value === "object" &&
      TABS.every((tab) => Object.hasOwn(value, tab)),
  );
}

async function createAccount(username, password) {
  const users = loadUsers();

  if (users.some((user) => user.username === username)) {
    state.authError = "Användarnamn är upptaget.";
    renderPopup();
    return;
  }

  const salt = createSalt();
  const passwordHash = await hashPassword(password, salt);

  users.push({ username, passwordHash, salt });
  saveUsers(users);
  await activateSession(username);
}

async function loginUser(username, password) {
  const user = loadUsers().find((entry) => entry.username === username);
  if (!user) {
    state.authError = "Fel användarnamn eller lösenord";
    renderPopup();
    return;
  }

  const passwordHash = await hashPassword(password, user.salt);
  if (passwordHash !== user.passwordHash) {
    state.authError = "Fel användarnamn eller lösenord";
    renderPopup();
    return;
  }

  await activateSession(username);
}

async function activateSession(username) {
  const loginAt = new Date().toISOString();

  saveSession(username, loginAt);
  state.currentUser = username;
  state.sessionLoginAt = loginAt;
  state.notes = loadNotesForUser(username);
  state.listBoard = loadListBoardForUser(username);
  resetTransientState();
  state.authView = null;
  state.authError = "";
  state.logoutNotice = "";
  state.authForm = {
    username: "",
    password: "",
  };
  await renderApp();
  renderPopup();
}

async function logoutUser() {
  clearSession();
  state.currentUser = null;
  state.sessionLoginAt = null;
  state.notes = {};
  state.listBoard = createEmptyListBoard();
  resetTransientState();
  state.authView = null;
  state.isAccountMenuOpen = false;
  await renderApp();
  renderPopup();
}

async function deleteCurrentUser() {
  if (!state.currentUser) {
    return;
  }

  const username = state.currentUser;
  const users = loadUsers().filter((user) => user.username !== username);
  saveUsers(users);
  deleteNotesForUser(username);
  deleteListBoardForUser(username);
  clearSession();

  state.currentUser = null;
  state.sessionLoginAt = null;
  state.notes = {};
  state.listBoard = createEmptyListBoard();
  resetTransientState();
  state.authView = null;
  state.isAccountMenuOpen = false;
  await renderApp();
  renderPopup();
}

function loadUsers() {
  try {
    const value = localStorage.getItem(USERS_KEY);
    if (!value) {
      return [];
    }

    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}


function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadSession() {
  try {
    const value = localStorage.getItem(SESSION_KEY);
    if (!value) {
      return null;
    }

    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function getValidSessionUsername(session) {
  return typeof session?.username === "string" && !isSessionExpired(session) ? session.username : null;
}

function getValidSessionLoginAt(session) {
  return typeof session?.loginAt === "string" && !isSessionExpired(session) ? session.loginAt : null;
}

function shouldShowInitialAutoLogoutNotice(session) {
  if (!session || typeof session.username !== "string") {
    return false;
  }

  if (!isSessionExpired(session)) {
    return false;
  }

  clearSession();
  return true;
}

function saveSession(username, loginAt) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ username, loginAt }));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function isSessionExpired(session, now = new Date()) {
  if (typeof session?.loginAt !== "string") {
    return true;
  }

  const loginDate = new Date(session.loginAt);
  if (Number.isNaN(loginDate.getTime())) {
    return true;
  }

  return getNextScheduledLogoutAfter(loginDate) <= now;
}

function scheduleNextAutoLogout() {
  clearAutoLogoutTimer();

  if (!state.currentUser) {
    return;
  }

  const nextLogoutAt = getNextScheduledLogoutAfter(new Date());
  const delay = Math.max(0, nextLogoutAt.getTime() - Date.now());

  state.autoLogoutTimerId = window.setTimeout(() => {
    void runAutoLogout();
  }, delay);
}

function clearAutoLogoutTimer() {
  if (state.autoLogoutTimerId !== null) {
    window.clearTimeout(state.autoLogoutTimerId);
    state.autoLogoutTimerId = null;
  }
}

async function runAutoLogout() {
  if (!state.currentUser) {
    return;
  }

  clearSession();
  clearAutoLogoutTimer();
  state.currentUser = null;
  state.sessionLoginAt = null;
  state.notes = {};
  state.authView = null;
  state.logoutNotice = AUTO_LOGOUT_MESSAGE;
  resetTransientState();
  await renderApp();
  renderPopup();
}

function getNextScheduledLogoutAfter(baseDate) {
  const sameDayCutoffs = AUTO_LOGOUT_TIMES
    .map((time) => buildScheduledDate(baseDate, time))
    .filter((date) => date > baseDate)
    .sort((left, right) => left.getTime() - right.getTime());

  if (sameDayCutoffs.length > 0) {
    return sameDayCutoffs[0];
  }

  const nextDay = new Date(baseDate);
  nextDay.setDate(nextDay.getDate() + 1);
  return buildScheduledDate(nextDay, AUTO_LOGOUT_TIMES[0]);
}

function buildScheduledDate(baseDate, time) {
  const [hours, minutes] = time.split(":").map(Number);
  const scheduledDate = new Date(baseDate);
  scheduledDate.setHours(hours, minutes, 0, 0);
  return scheduledDate;
}

function createSalt() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return bytesToHex(bytes);
}

async function hashPassword(password, salt) {
  const encoded = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return bytesToHex(new Uint8Array(digest));
}

function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function resetTransientState() {
  state.activeComponentId = null;
  state.activePopupId = null;
  state.activeHelpDiagramId = null;
  state.isEditing = false;
  state.draftText = "";
  state.listViewer = null;
  state.listEditor = null;
  updateActiveSvgButton();
}

function formatComponentName(componentId) {
  const decodedId = decodeHtmlEntities(componentId);
  const repairedId = repairMojibake(decodedId);

  return repairedId
    .replace(/_[^_]+_(?:MBH|VBH|DI|KA)$/, "")
    .replace(/_(?:MBH|VBH|DI|KA)$/, "")
    .replaceAll("_", " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatPopupName(popupId) {
  const decodedId = decodeHtmlEntities(popupId);
  const repairedId = repairMojibake(decodedId);
  const mappedName = POPUP_NAME_MAP[repairedId];

  if (mappedName) {
    return mappedName;
  }

  return repairedId
    .replaceAll("_", " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getPopupId(componentId) {
  const repairedId = normalizeSvgIdentifier(componentId);
  return COMPONENT_POPUP_MAP[repairedId] ?? repairedId.split("_")[0] ?? repairedId;
}

function isDiDescriptionTab(tab = state.activeTab) {
  return state.activeDiagramId === "DI" && tab === "Disk";
}

function normalizeSvgIdentifier(value) {
  return repairMojibake(decodeHtmlEntities(value)).replace(/\s+/g, " ").trim();
}

function applyDiskDescriptionsToDiagram(svg, diagramId) {
  if (diagramId !== "DI") {
    return;
  }

  const buttonGroups = svg.querySelectorAll(`#Buttons g[id$="_${diagramId}"]`);
  buttonGroups.forEach((group) => syncComponentDescription(group.id));
}

function syncComponentDescriptionInSvg(componentId) {
  const group = svgRoot.querySelector(`#${CSS.escape(componentId)}`);
  if (!group) {
    return;
  }

  syncComponentDescription(componentId);
}

function syncComponentDescription(componentId) {
  const group = svgRoot.querySelector(`#${CSS.escape(componentId)}`);
  if (!group) {
    return;
  }

  const descriptionGroup = group.querySelector('g[id^="Beskrivning"]');
  if (!descriptionGroup) {
    return;
  }

  const rect = descriptionGroup.querySelector("rect");
  if (!rect) {
    return;
  }

  const existingPaths = descriptionGroup.querySelectorAll('path[id^="Text"]');
  const savedDescription = getSavedDescription(componentId);
  const existingTextNode = descriptionGroup.querySelector(".editable-description-text");

  if (state.diDescriptionMode === "original" || !savedDescription) {
    existingPaths.forEach((path) => path.removeAttribute("display"));
    existingTextNode?.remove();
    return;
  }

  existingPaths.forEach((path) => path.setAttribute("display", "none"));

  const x = Number(rect.getAttribute("x") ?? 0);
  const y = Number(rect.getAttribute("y") ?? 0);
  const width = Number(rect.getAttribute("width") ?? 0);
  const height = Number(rect.getAttribute("height") ?? 0);
  const namespaceUri = descriptionGroup.ownerSVGElement?.namespaceURI;

  if (!namespaceUri || !width || !height) {
    return;
  }

  const textNode =
    existingTextNode ?? document.createElementNS(namespaceUri, "text");

  textNode.setAttribute("class", "editable-description-text");
  textNode.setAttribute("x", String(x + width / 2));
  textNode.setAttribute("y", String(y + height / 2));
  textNode.setAttribute("text-anchor", "middle");
  textNode.setAttribute("dominant-baseline", "middle");
  textNode.setAttribute("fill", "black");
  textNode.setAttribute("font-size", "22");
  textNode.setAttribute("font-family", "Helvetica Neue, Helvetica, Arial, sans-serif");
  textNode.removeAttribute("lengthAdjust");
  textNode.removeAttribute("textLength");

  if (!existingTextNode) {
    descriptionGroup.append(textNode);
  }

  textNode.textContent = getTruncatedDescriptionText(textNode, savedDescription, width);
}

function getTruncatedDescriptionText(textNode, text, rectWidth) {
  const maxWidth = Math.max(0, rectWidth - 16);
  const truncationSuffix = " .. ";

  if (!text || maxWidth <= 0) {
    return "";
  }

  textNode.textContent = text;
  if (getSvgTextWidth(textNode) <= maxWidth) {
    return text;
  }

  let low = 0;
  let high = text.length;
  let bestFit = "";

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const candidate = `${text.slice(0, mid).trimEnd()}${truncationSuffix}`;

    textNode.textContent = candidate;
    if (getSvgTextWidth(textNode) <= maxWidth) {
      bestFit = candidate;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (bestFit) {
    return bestFit;
  }

  textNode.textContent = truncationSuffix;
  if (getSvgTextWidth(textNode) <= maxWidth) {
    return truncationSuffix;
  }

  return "";
}

function getSvgTextWidth(textNode) {
  try {
    return textNode.getComputedTextLength();
  } catch {
    return Number.POSITIVE_INFINITY;
  }
}

function decodeHtmlEntities(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function repairMojibake(value) {
  const repairedValue = repairCommonSwedishMojibake(value);

  if (!/[ÃÂâ]/.test(repairedValue)) {
    return repairedValue;
  }

  try {
    const bytes = Uint8Array.from([...repairedValue].map((char) => char.charCodeAt(0) & 0xff));
    return repairCommonSwedishMojibake(new TextDecoder("utf-8").decode(bytes));
  } catch {
    return repairedValue;
  }
}

function repairCommonSwedishMojibake(value) {
  return value
    .replaceAll("Ã¶", "ö")
    .replaceAll("Ã", "Ö")
    .replaceAll("Ã–", "Ö")
    .replaceAll("Ã¤", "ä")
    .replaceAll("Ã", "Ä")
    .replaceAll("Ã„", "Ä")
    .replaceAll("Ã¥", "å")
    .replaceAll("Ã", "Å")
    .replaceAll("Ã…", "Å");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
