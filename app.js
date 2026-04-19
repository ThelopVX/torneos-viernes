const STORAGE_KEYS = {
  currentTournament: "torneos-viernes-state",
  playerGroups: "torneos-viernes-player-groups",
  tournamentHistory: "torneos-viernes-history",
  playerRegistry: "torneos-viernes-player-registry",
  selectedHistory: "torneos-viernes-selected-history"
};

const state = normalizeTournament(loadJson(STORAGE_KEYS.currentTournament, createEmptyTournament()));
let playerGroups = normalizePlayerGroups(loadJson(STORAGE_KEYS.playerGroups, []));
let tournamentHistory = normalizeTournamentHistory(loadJson(STORAGE_KEYS.tournamentHistory, []));
let playerRegistry = normalizePlayerRegistry(loadJson(STORAGE_KEYS.playerRegistry, []));
let selectedHistoryIds = Array.isArray(loadJson(STORAGE_KEYS.selectedHistory, [])) ? loadJson(STORAGE_KEYS.selectedHistory, []) : [];

const elements = {
  tournamentForm: document.getElementById("tournamentForm"),
  tournamentName: document.getElementById("tournamentName"),
  playerCount: document.getElementById("playerCount"),
  participants: document.getElementById("participants"),
  loadSampleBtn: document.getElementById("loadSampleBtn"),
  generateRoundBtn: document.getElementById("generateRoundBtn"),
  archiveTournamentBtn: document.getElementById("archiveTournamentBtn"),
  resetTournamentBtn: document.getElementById("resetTournamentBtn"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  savePlayersBtn: document.getElementById("savePlayersBtn"),
  loadPlayersBtn: document.getElementById("loadPlayersBtn"),
  managePlayersBtn: document.getElementById("managePlayersBtn"),
  viewHistoryBtn: document.getElementById("viewHistoryBtn"),
  pairingsContainer: document.getElementById("pairingsContainer"),
  pairingsScrollTopBtn: document.getElementById("pairingsScrollTopBtn"),
  pairingsSubtitle: document.getElementById("pairingsSubtitle"),
  leaderboardBody: document.getElementById("leaderboardBody"),
  historySelection: document.getElementById("historySelection"),
  globalRankingBody: document.getElementById("globalRankingBody"),
  activeTournamentName: document.getElementById("activeTournamentName"),
  activeRoundNumber: document.getElementById("activeRoundNumber"),
  activePlayerCount: document.getElementById("activePlayerCount"),
  statusLabel: document.getElementById("statusLabel"),
  statusLabelSidebar: document.getElementById("statusLabelSidebar"),
  activeSectionLabel: document.getElementById("activeSectionLabel"),
  completedMatchesLabel: document.getElementById("completedMatchesLabel"),
  matchCardTemplate: document.getElementById("matchCardTemplate"),
  modalOverlay: document.getElementById("modalOverlay"),
  modalTitle: document.getElementById("modalTitle"),
  modalBody: document.getElementById("modalBody"),
  modalActions: document.getElementById("modalActions"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  toastStack: document.getElementById("toastStack"),
  sidebar: document.querySelector(".sidebar"),
  sidebarToggleBtn: document.getElementById("sidebarToggleBtn")
};

bindEvents();
initializeLayout();
render();

function bindEvents() {
  elements.tournamentForm.addEventListener("submit", handleCreateTournament);
  elements.loadSampleBtn.addEventListener("click", loadSamplePlayers);
  elements.generateRoundBtn.addEventListener("click", handleGenerateRound);
  elements.archiveTournamentBtn.addEventListener("click", archiveTournament);
  elements.resetTournamentBtn.addEventListener("click", openResetDialog);
  elements.exportCsvBtn.addEventListener("click", exportStandingsCsv);
  elements.savePlayersBtn.addEventListener("click", openSavePlayersDialog);
  elements.loadPlayersBtn.addEventListener("click", openLoadPlayersDialog);
  elements.managePlayersBtn.addEventListener("click", openPlayersManagerDialog);
  elements.viewHistoryBtn.addEventListener("click", openTournamentHistoryDialog);
  elements.modalCloseBtn.addEventListener("click", closeModal);
  
  elements.pairingsScrollTopBtn.addEventListener("click", () => {
    elements.pairingsContainer.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  elements.pairingsContainer.addEventListener("scroll", updatePairingsScrollButton);
  
  elements.modalOverlay.addEventListener("click", (event) => {
    if (event.target === elements.modalOverlay) closeModal();
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      const targetSection = document.querySelector(link.getAttribute("href"));
      if (targetSection) spotlightSection(targetSection);
      if (window.innerWidth <= 768) elements.sidebar.classList.add("is-collapsed");
    });
  });

  elements.sidebarToggleBtn.addEventListener("click", () => {
    elements.sidebar.classList.toggle("is-collapsed");
  });
}

function createEmptyTournament() {
  return {
    tournamentName: "",
    players: [],
    rounds: [],
    currentRoundIndex: -1,
    createdAt: null,
    lastArchivedAt: null
  };
}

function normalizeTournament(rawTournament) {
  const tournament = rawTournament && typeof rawTournament === "object" ? rawTournament : createEmptyTournament();
  return {
    ...createEmptyTournament(),
    ...tournament,
    players: Array.isArray(tournament.players)
      ? tournament.players
          .filter((player) => player && player.id && player.name)
          .map((player) => ({
            id: player.id,
            name: player.name,
            status: player.status === "removed" ? "removed" : "active",
            removedAt: player.removedAt || null,
            removedRound: Number.isInteger(player.removedRound) ? player.removedRound : null
          }))
      : [],
    rounds: Array.isArray(tournament.rounds) ? tournament.rounds : []
  };
}

function normalizePlayerGroups(rawGroups) {
  return Array.isArray(rawGroups) ? rawGroups.filter((group) => group && group.id && group.name && Array.isArray(group.players)) : [];
}

function normalizeTournamentHistory(rawHistory) {
  return Array.isArray(rawHistory) ? rawHistory.filter((entry) => entry && entry.id && entry.tournamentName) : [];
}

function normalizePlayerRegistry(rawRegistry) {
  return Array.isArray(rawRegistry) ? rawRegistry.filter((entry) => entry && entry.id && entry.name) : [];
}

function loadJson(key, fallbackValue) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallbackValue;
  } catch (error) {
    console.error(`Error cargando ${key}`, error);
    return fallbackValue;
  }
}

function saveCurrentTournament() {
  localStorage.setItem(STORAGE_KEYS.currentTournament, JSON.stringify(state));
}

function savePlayerGroups() {
  localStorage.setItem(STORAGE_KEYS.playerGroups, JSON.stringify(playerGroups));
}

function saveTournamentHistory() {
  localStorage.setItem(STORAGE_KEYS.tournamentHistory, JSON.stringify(tournamentHistory));
}

function savePlayerRegistry() {
  localStorage.setItem(STORAGE_KEYS.playerRegistry, JSON.stringify(playerRegistry));
}

function saveSelectedHistoryIds() {
  localStorage.setItem(STORAGE_KEYS.selectedHistory, JSON.stringify(selectedHistoryIds));
}

function render() {
  const derived = deriveTournamentData();
  hydrateForm();
  renderHero(derived);
  renderControls(derived);
  renderPairings(derived);
  renderLeaderboard(derived);
  renderGlobalRankingSection();
}

function initializeLayout() {
  document.querySelectorAll(".panel").forEach((panel) => {
    const heading = panel.querySelector(".section-heading");
    if (!heading) return;
    
    const headingTitle = heading.querySelector("h2");
    if (!headingTitle) return;

    const row = document.createElement("div");
    row.className = "section-heading-row";
    heading.insertBefore(row, headingTitle);
    row.appendChild(headingTitle);

    const collapseButton = document.createElement("button");
    collapseButton.type = "button";
    collapseButton.className = "icon-btn collapse-btn";
    collapseButton.textContent = "−";
    row.appendChild(collapseButton);

    const bodyWrap = document.createElement("div");
    bodyWrap.className = "panel-body-wrap";

    while (heading.nextSibling) {
      bodyWrap.appendChild(heading.nextSibling);
    }

    panel.appendChild(bodyWrap);

    collapseButton.addEventListener("click", () => {
      const collapsed = panel.classList.toggle("collapsed");
      collapseButton.textContent = collapsed ? "+" : "−";
    });
  });

  if (window.innerWidth <= 768) {
    elements.sidebar.classList.add("is-collapsed");
  }
}

function spotlightSection(section) {
  section.classList.remove("section-spotlight");
  void section.offsetWidth;
  section.classList.add("section-spotlight");
  setTimeout(() => section.classList.remove("section-spotlight"), 850);
}

function hydrateForm() {
  if (!state.players.length) return;
  elements.tournamentName.value = state.tournamentName;
  elements.playerCount.value = String(state.players.length);
  elements.participants.value = state.players.map((player) => player.name).join("\n");
}

function renderHero(derived) {
  elements.activeTournamentName.textContent = state.tournamentName || "No Creado";
  elements.activeRoundNumber.textContent = String(Math.max(state.currentRoundIndex + 1, 0));
  elements.activePlayerCount.textContent = String(derived.activePlayers.length);
}

function renderControls(derived) {
  const currentRound = state.rounds[state.currentRoundIndex];
  const completedMatches = currentRound ? currentRound.matches.filter((match) => match.result && match.result.completed).length : 0;

  elements.completedMatchesLabel.textContent = currentRound ? `${completedMatches}/${currentRound.matches.length}` : "0";

  if (!state.players.length) {
    elements.statusLabel.textContent = "Esperando configuración";
  } else if (!currentRound) {
    elements.statusLabel.textContent = "Listo para generar ronda 1";
  } else {
    elements.statusLabel.textContent = isRoundComplete(currentRound)
      ? `Ronda ${currentRound.roundNumber} completada`
      : `Ronda ${currentRound.roundNumber} en curso`;
  }

  elements.statusLabelSidebar.textContent = elements.statusLabel.textContent;
}

function renderPairings(derived) {
  const round = state.rounds[state.currentRoundIndex];

  if (!round) {
    elements.pairingsSubtitle.textContent = "Aún no se ha generado ninguna ronda.";
    elements.pairingsContainer.className = "pairings-container empty-state";
    elements.pairingsContainer.textContent = "Genera una ronda para ver las tarjetas de partido.";
    updatePairingsScrollButton();
    return;
  }

  elements.pairingsSubtitle.textContent = `Emparejamientos y resultados en vivo de la ronda ${round.roundNumber}.`;
  elements.pairingsContainer.className = "pairings-container";
  elements.pairingsContainer.innerHTML = "";

  round.matches.forEach((match) => {
    const player1 = getPlayerById(match.player1Id);
    const player2 = getPlayerById(match.player2Id);
    const player1Stats = derived.statsById.get(match.player1Id) || createEmptyStats();
    const player2Stats = derived.statsById.get(match.player2Id) || createEmptyStats();
    const card = elements.matchCardTemplate.content.firstElementChild.cloneNode(true);
    const playerRows = card.querySelectorAll(".player-row");
    const playerNames = card.querySelectorAll(".player-name");
    const playerPoints = card.querySelectorAll(".player-points");
    const status = card.querySelector(".match-status");
    const badge = card.querySelector(".match-badge");
    const saveButton = card.querySelector(".save-result-btn");
    const addSetButton = card.querySelector(".add-set-btn");
    const setsList = card.querySelector(".sets-list");
    const previewSummary = card.querySelector(".preview-summary");
    const previewSets = card.querySelector(".preview-sets");
    const previewPoints = card.querySelector(".preview-points");
    const previewAward = card.querySelector(".preview-award");

    badge.textContent = `Mesa ${match.table}`;
    status.textContent = match.result && match.result.completed ? "Guardado" : "Pendiente";
    card.classList.toggle("completed", Boolean(match.result && match.result.completed));

    playerNames[0].textContent = player1 ? player1.name : "Desconocido";
    playerPoints[0].textContent = `${formatTournamentPoints(player1Stats.points)} pts`;

    if (!player2) {
      playerNames[1].textContent = "Descanso";
      playerPoints[1].innerHTML = `<span class="bye-pill">Victoria automática</span>`;
      setsList.innerHTML = `<div class="set-row"><span class="set-label">Descanso</span><span class="muted-copy">No es necesario introducir sets.</span></div>`;
      previewSummary.textContent = "Victoria automática aplicada.";
      previewSets.textContent = "0 - 0";
      previewPoints.textContent = "0 - 0";
      previewAward.textContent = "2.00 - 0.00";
      addSetButton.disabled = true;
      saveButton.disabled = true;
      saveButton.textContent = "Descanso Aplicado";
      status.textContent = "Completado";
      card.classList.add("completed");
    } else {
      playerNames[1].textContent = player2.name;
      playerPoints[1].textContent = `${formatTournamentPoints(player2Stats.points)} pts`;
      saveButton.textContent = match.result && match.result.completed ? "Actualizar Resultado" : "Guardar Resultado";
      const editableSets = getEditableSets(match);
      renderSetRows(card, editableSets);
      addSetButton.addEventListener("click", () => {
        renderSetRows(card, [...collectSetsFromCard(card), createEmptySet()]);
      });
      saveButton.addEventListener("click", () => saveMatchResult(match.id, card));
    }

    if (player2) {
      updateMatchPreview(card);
      if (match.result && match.result.completed) {
        const summary = summarizeMatchResult(match.result);
        applyWinnerClasses(playerRows, summary.setsWonPlayer1, summary.setsWonPlayer2);
      }
    }

    elements.pairingsContainer.appendChild(card);
  });

  elements.pairingsContainer.scrollTo({ top: 0, behavior: "smooth" });
  updatePairingsScrollButton();
}

function renderLeaderboard(derived) {
  if (!state.players.length) {
    elements.leaderboardBody.innerHTML = `<tr><td colspan="9" class="table-empty">Crea un torneo para ver la clasificación.</td></tr>`;
    return;
  }

  elements.leaderboardBody.innerHTML = derived.leaderboardPlayers
    .map((player, index) => {
      const stats = derived.statsById.get(player.id);
      const opposition = stats.opponents.length
        ? stats.opponents.map((opponentId) => getPlayerById(opponentId)?.name || "Desconocido").join(", ")
        : "Sin rivales todavía";

      return `
        <tr class="${player.status === "removed" ? "withdrawn-row" : ""}">
          <td>${index + 1}</td>
          <td>${escapeHtml(player.name)}</td>
          <td><span class="status-pill ${player.status === "removed" ? "removed" : "active"}">${player.status === "removed" ? "Retirado" : "Activo"}</span></td>
          <td>${formatTournamentPoints(stats.points)}</td>
          <td>${stats.wins}</td>
          <td>${stats.losses}</td>
          <td>${formatDifference(stats.setsWon - stats.setsLost)}</td>
          <td>${formatDifference(stats.scoreFor - stats.scoreAgainst)}</td>
          <td>${escapeHtml(opposition)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderGlobalRankingSection() {
  if (!tournamentHistory.length) {
    elements.historySelection.className = "history-selection empty-state";
    elements.historySelection.textContent = "Guarda torneos completados para construir un ranking global.";
    elements.globalRankingBody.innerHTML = `<tr><td colspan="8" class="table-empty">Los torneos archivados rellenarán este ranking.</td></tr>`;
    return;
  }

  elements.historySelection.className = "history-selection";
  const list = document.createElement("div");
  list.className = "history-selection-list";

  tournamentHistory.forEach((tournament) => {
    const wrapper = document.createElement("label");
    wrapper.className = "history-checkbox";
    wrapper.innerHTML = `
      <input type="checkbox" data-history-id="${tournament.id}" ${selectedHistoryIds.includes(tournament.id) ? "checked" : ""}>
      <span>
        <strong>${escapeHtml(tournament.tournamentName)}</strong><br>
        <span class="muted-copy">${formatDate(tournament.archivedAt)} - ${tournament.finalStandings.length} jugadores - ${tournament.rounds.length} rondas</span>
      </span>
    `;
    list.appendChild(wrapper);
  });

  elements.historySelection.innerHTML = "";
  elements.historySelection.appendChild(list);

  elements.historySelection.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const historyId = checkbox.dataset.historyId;
      if (checkbox.checked) {
        selectedHistoryIds = [...new Set([...selectedHistoryIds, historyId])];
      } else {
        selectedHistoryIds = selectedHistoryIds.filter((id) => id !== historyId);
      }
      saveSelectedHistoryIds();
      renderGlobalRankingSection();
    });
  });

  const rankings = aggregateGlobalRankings();
  elements.globalRankingBody.innerHTML = rankings.length
    ? rankings
        .map(
          (entry, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${escapeHtml(entry.name)}</td>
              <td>${entry.tournaments}</td>
              <td>${formatTournamentPoints(entry.points)}</td>
              <td>${entry.wins}</td>
              <td>${entry.losses}</td>
              <td>${formatDifference(entry.setDifference)}</td>
              <td>${formatDifference(entry.scoreDifference)}</td>
            </tr>
          `
        )
        .join("")
    : `<tr><td colspan="8" class="table-empty">Selecciona al menos un torneo archivado.</td></tr>`;
}

function handleCreateTournament(event) {
  event.preventDefault();

  const tournamentName = elements.tournamentName.value.trim();
  const participantNames = elements.participants.value
    .split("\n")
    .map((name) => name.trim())
    .filter(Boolean);
  const playerCount = Number(elements.playerCount.value);

  if (!tournamentName) {
    alert("Por favor, introduce un nombre para el torneo.");
    return;
  }

  if (!Number.isInteger(playerCount) || playerCount < 2) {
    alert("Por favor, introduce un número válido de jugadores (mínimo 2).");
    return;
  }

  if (participantNames.length !== playerCount) {
    alert(`El número de jugadores y la lista de participantes no coinciden. Se esperaban ${playerCount} jugadores.`);
    return;
  }

  const uniqueNames = new Set(participantNames.map((name) => name.toLowerCase()));
  if (uniqueNames.size !== participantNames.length) {
    alert("Los nombres de los jugadores deben ser únicos dentro del torneo.");
    return;
  }

  Object.assign(state, createEmptyTournament(), {
    tournamentName,
    createdAt: new Date().toISOString(),
    players: participantNames.map((name) => createPlayerEntry(name))
  });

  saveCurrentTournament();
  render();
  showToast("Torneo Creado", `${tournamentName} está listo para generar rondas.`, "success");
}

function createPlayerEntry(name) {
  const identity = ensurePlayerIdentity(name);
  return {
    id: identity.id,
    name: identity.name,
    status: "active",
    removedAt: null,
    removedRound: null
  };
}

function loadSamplePlayers() {
  const samplePlayers = [
    "Alex Novak",
    "Sofia Chen",
    "Mateo Ruiz",
    "Lina Carter",
    "Noah Sato",
    "Eva Muller",
    "Daniel Costa",
    "Mia Petrov"
  ];

  elements.tournamentName.value = "Serie Nocturna Élite";
  elements.playerCount.value = String(samplePlayers.length);
  elements.participants.value = samplePlayers.join("\n");
}

function handleGenerateRound() {
  if (!state.players.length) {
    alert("Crea un torneo antes de generar rondas.");
    return;
  }

  const activePlayers = state.players.filter((player) => player.status === "active");
  if (activePlayers.length < 2) {
    alert("Se necesitan al menos dos jugadores activos para generar una ronda.");
    return;
  }

  const currentRound = state.rounds[state.currentRoundIndex];
  if (currentRound && !isRoundComplete(currentRound)) {
    alert("Guarda todos los resultados antes de generar la siguiente ronda.");
    return;
  }

  const derived = deriveTournamentData();
  const roundNumber = state.rounds.length + 1;
  const pairings = generateSwissPairings(activePlayers, roundNumber, derived.statsById);

  if (!pairings.length) {
    alert("No se pudieron generar emparejamientos válidos.");
    return;
  }

  state.rounds.push({
    roundNumber,
    matches: buildMatchesFromPairings(pairings, roundNumber)
  });
  state.currentRoundIndex = state.rounds.length - 1;

  saveCurrentTournament();
  render();
  showToast("Ronda Generada", `Los emparejamientos de la ronda ${roundNumber} están listos.`, "success");
}

function saveMatchResult(matchId, card) {
  const round = state.rounds[state.currentRoundIndex];
  if (!round) return;

  const match = round.matches.find((entry) => entry.id === matchId);
  if (!match) return;

  const sets = normalizeEnteredSets(collectSetsFromCard(card));
  const validation = validateSets(sets);
  if (!validation.valid) {
    alert(validation.message);
    return;
  }

  const summary = summarizeMatchResult({ sets, isBye: false });
  match.result = {
    sets,
    player1Score: summary.totalPointsPlayer1,
    player2Score: summary.totalPointsPlayer2,
    completed: true,
    isBye: false
  };

  saveCurrentTournament();
  render();
  showToast("Resultados Guardados", "El resultado del partido se actualizó correctamente.", "success");
}

function openPlayersManagerDialog() {
  if (!state.players.length) {
    alert("Crea un torneo antes de gestionar participantes.");
    return;
  }

  const derived = deriveTournamentData();
  let playersHtml = "";

  state.players.forEach((player) => {
    const stats = derived.statsById.get(player.id);
    playersHtml += `
      <div class="player-management-row ${player.status === "removed" ? "removed" : ""}">
        <div class="player-management-meta">
          <strong>${escapeHtml(player.name)}</strong>
          <span class="muted-copy">${formatTournamentPoints(stats.points)} pts - ${stats.wins}V-${stats.losses}D - ${formatDifference(stats.setsWon - stats.setsLost)} sets</span>
        </div>
        <div class="actions">
          <span class="status-pill ${player.status === "removed" ? "removed" : "active"}">${player.status === "removed" ? "Retirado" : "Activo"}</span>
          <button type="button" class="btn ${player.status === "removed" ? "btn-secondary" : "btn-danger"} remove-player-btn" data-player-id="${player.id}" ${player.status === "removed" ? "disabled" : ""}>
            ${player.status === "removed" ? "Eliminado" : "Retirar Jugador"}
          </button>
        </div>
      </div>
    `;
  });

  openModal({
    title: "Gestión de Jugadores",
    body: `<div class="modal-list">${playersHtml}</div>`,
    actions: [{ label: "Cerrar", className: "btn-secondary", onClick: closeModal }]
  });

  elements.modalBody.querySelectorAll(".remove-player-btn").forEach((button) => {
    button.addEventListener("click", () => openRemovePlayerDialog(button.dataset.playerId));
  });
}

function openRemovePlayerDialog(playerId) {
  const player = getPlayerById(playerId);
  if (!player) return;

  openModal({
    title: "Retirar Jugador",
    body: `
      <p>¿Retirar a <strong>${escapeHtml(player.name)}</strong> del torneo actual?</p>
      <p class="muted-copy">Los partidos completados se conservan. Los emparejamientos pendientes de la ronda actual se reconstruyen para mantener válido el sistema suizo.</p>
    `,
    actions: [
      { label: "Cancelar", className: "btn-secondary", onClick: closeModal },
      { label: "Retirar Jugador", className: "btn-danger", onClick: () => removePlayer(playerId) }
    ]
  });
}

function removePlayer(playerId) {
  const player = getPlayerById(playerId);
  if (!player || player.status === "removed") {
    closeModal();
    return;
  }

  player.status = "removed";
  player.removedAt = new Date().toISOString();
  player.removedRound = state.currentRoundIndex >= 0 ? state.currentRoundIndex + 1 : 0;

  rebuildPendingCurrentRound();
  saveCurrentTournament();
  closeModal();
  render();
  showToast("Jugador Retirado", `${player.name} ha sido retirado de futuras rondas.`, "warning");
}

function archiveTournament() {
  if (!state.players.length) {
    alert("Crea y juega un torneo antes de archivarlo.");
    return;
  }

  const currentRound = state.rounds[state.currentRoundIndex];
  if (currentRound && !isRoundComplete(currentRound)) {
    alert("Termina la ronda actual antes de guardar el torneo en el historial.");
    return;
  }

  const derived = deriveTournamentData();
  const completedMatches = state.rounds.flatMap((round) => round.matches).filter((match) => match.result && match.result.completed);
  if (!completedMatches.length) {
    alert("Se necesita al menos un partido completado antes de guardar un torneo.");
    return;
  }

  const snapshot = {
    id: createId("tournament"),
    tournamentName: state.tournamentName,
    createdAt: state.createdAt || new Date().toISOString(),
    archivedAt: new Date().toISOString(),
    rounds: JSON.parse(JSON.stringify(state.rounds)),
    players: state.players.map((player) => ({ ...player })),
    finalStandings: derived.leaderboardPlayers.map((player, index) => {
      const stats = derived.statsById.get(player.id);
      return {
        rank: index + 1,
        playerId: player.id,
        name: player.name,
        status: player.status,
        points: Number(formatTournamentPoints(stats.points)),
        wins: stats.wins,
        losses: stats.losses,
        setDifference: stats.setsWon - stats.setsLost,
        scoreDifference: stats.scoreFor - stats.scoreAgainst
      };
    })
  };

  tournamentHistory = [snapshot, ...tournamentHistory];
  state.lastArchivedAt = snapshot.archivedAt;
  saveTournamentHistory();
  saveCurrentTournament();
  render();

  openModal({
    title: "Torneo Guardado",
    body: `<p><strong>${escapeHtml(snapshot.tournamentName)}</strong> ya está guardado en el historial y disponible para el ranking global.</p>`,
    actions: [{ label: "Cerrar", className: "btn-primary", onClick: closeModal }]
  });
  showToast("Torneo Archivado", `${snapshot.tournamentName} se guardó en el historial.`, "success");
}

function openResetDialog() {
  if (!state.players.length && !elements.participants.value.trim()) {
    alert("No hay datos de torneo para reiniciar.");
    return;
  }

  openModal({
    title: "Reiniciar Torneo",
    body: `
      <p>Elige cómo quieres reiniciar el torneo actual.</p>
      <p class="muted-copy">Se borrarán todas las rondas, resultados y la clasificación en vivo. Puedes mantener la lista de jugadores para un nuevo evento o borrar todo.</p>
    `,
    actions: [
      { label: "Cancelar", className: "btn-secondary", onClick: closeModal },
      { label: "Mantener Lista de Jugadores", className: "btn-secondary", onClick: () => resetTournament(true) },
      { label: "Borrar Todo", className: "btn-danger", onClick: () => resetTournament(false) }
    ]
  });
}

function resetTournament(keepPlayers) {
  const playerNames = keepPlayers ? state.players.map((player) => player.name) : [];
  Object.assign(state, createEmptyTournament());
  saveCurrentTournament();

  if (keepPlayers) {
    elements.tournamentName.value = "";
    elements.playerCount.value = String(playerNames.length);
    elements.participants.value = playerNames.join("\n");
  } else {
    elements.tournamentForm.reset();
  }

  closeModal();
  render();
  showToast("Torneo Reiniciado", keepPlayers ? "Se borraron las rondas y se mantuvo la lista de jugadores." : "Se borraron todos los datos del torneo.", "info");
}

function openSavePlayersDialog() {
  const playersToSave = state.players.length
    ? state.players.map((player) => ({ id: player.id, name: player.name }))
    : elements.participants.value
        .split("\n")
        .map((name) => name.trim())
        .filter(Boolean)
        .map((name) => {
          const identity = ensurePlayerIdentity(name);
          return { id: identity.id, name: identity.name };
        });

  if (!playersToSave.length) {
    alert("Añade jugadores antes de guardar una lista reutilizable.");
    return;
  }

  openModal({
    title: "Guardar Jugadores",
    body: `
      <form id="savePlayersForm" class="inline-form">
        <label class="field">
          <span>Nombre del Grupo</span>
          <input id="playerGroupName" type="text" placeholder="Jugadores del Club">
        </label>
        <p class="muted-copy">Se guardarán ${playersToSave.length} jugadores para torneos futuros.</p>
      </form>
    `,
    actions: [
      { label: "Cancelar", className: "btn-secondary", onClick: closeModal },
      {
        label: "Guardar Jugadores",
        className: "btn-primary",
        onClick: () => {
          const groupName = document.getElementById("playerGroupName").value.trim();
          if (!groupName) {
            alert("Introduce un nombre para el grupo.");
            return;
          }

          playerGroups = [
            {
              id: createId("group"),
              name: groupName,
              createdAt: new Date().toISOString(),
              players: playersToSave
            },
            ...playerGroups
          ];
          savePlayerGroups();
          closeModal();
          render();
          showToast("Jugadores Guardados", `${groupName} ya está disponible para futuros torneos.`, "success");
        }
      }
    ]
  });
}

function openLoadPlayersDialog() {
  if (!playerGroups.length) {
    alert("Todavía no hay grupos de jugadores guardados.");
    return;
  }

  const groupsMarkup = playerGroups
    .map(
      (group) => `
        <div class="group-card">
          <div class="history-meta">
            <strong>${escapeHtml(group.name)}</strong>
            <span class="muted-copy">${group.players.length} jugadores - guardado ${formatDate(group.createdAt)}</span>
          </div>
          <div class="actions">
            <button type="button" class="btn btn-secondary load-group-btn" data-group-id="${group.id}">Cargar Jugadores</button>
            <button type="button" class="btn btn-danger delete-group-btn" data-group-id="${group.id}">Eliminar</button>
          </div>
        </div>
      `
    )
    .join("");

  openModal({
    title: "Cargar Jugadores",
    body: `<div class="modal-list">${groupsMarkup}</div>`,
    actions: [{ label: "Cerrar", className: "btn-secondary", onClick: closeModal }]
  });

  elements.modalBody.querySelectorAll(".load-group-btn").forEach((button) => {
    button.addEventListener("click", () => loadPlayerGroup(button.dataset.groupId));
  });
  elements.modalBody.querySelectorAll(".delete-group-btn").forEach((button) => {
    button.addEventListener("click", () => deletePlayerGroup(button.dataset.groupId));
  });
}

function loadPlayerGroup(groupId) {
  const group = playerGroups.find((entry) => entry.id === groupId);
  if (!group) return;

  elements.playerCount.value = String(group.players.length);
  elements.participants.value = group.players.map((player) => player.name).join("\n");
  closeModal();
  showToast("Jugadores Cargados", `${group.name} se cargó en la configuración.`, "info");
}

function deletePlayerGroup(groupId) {
  playerGroups = playerGroups.filter((group) => group.id !== groupId);
  savePlayerGroups();
  closeModal();
  render();
  showToast("Grupo Eliminado", "Se eliminó la lista guardada.", "warning");
}

function openTournamentHistoryDialog() {
  if (!tournamentHistory.length) {
    alert("Todavía no se han guardado torneos.");
    return;
  }

  const markup = tournamentHistory
    .map(
      (tournament) => `
        <div class="history-card">
          <div class="history-meta">
            <strong>${escapeHtml(tournament.tournamentName)}</strong>
            <span class="muted-copy">${formatDate(tournament.archivedAt)} - ${tournament.rounds.length} rondas - ${tournament.finalStandings.length} jugadores</span>
          </div>
          <div class="actions">
            <button type="button" class="btn btn-secondary inspect-history-btn" data-history-id="${tournament.id}">Ver Clasificación</button>
            <button type="button" class="btn btn-danger delete-history-btn" data-history-id="${tournament.id}">Eliminar</button>
          </div>
        </div>
      `
    )
    .join("");

  openModal({
    title: "Historial de Torneos",
    body: `<div class="modal-list">${markup}</div>`,
    actions: [{ label: "Cerrar", className: "btn-secondary", onClick: closeModal }]
  });

  elements.modalBody.querySelectorAll(".inspect-history-btn").forEach((button) => {
    button.addEventListener("click", () => inspectTournamentHistory(button.dataset.historyId));
  });
  elements.modalBody.querySelectorAll(".delete-history-btn").forEach((button) => {
    button.addEventListener("click", () => deleteTournamentHistory(button.dataset.historyId));
  });
}

function inspectTournamentHistory(historyId) {
  const tournament = tournamentHistory.find((entry) => entry.id === historyId);
  if (!tournament) return;

  const standingsMarkup = tournament.finalStandings
    .map(
      (standing) => `
        <div class="history-card">
          <div class="history-meta">
            <strong>#${standing.rank} ${escapeHtml(standing.name)}</strong>
            <span class="muted-copy">${standing.status === "removed" ? "Retirado" : "Activo"} - ${formatTournamentPoints(standing.points)} pts - ${standing.wins}V-${standing.losses}D</span>
          </div>
        </div>
      `
    )
    .join("");

  openModal({
    title: tournament.tournamentName,
    body: `<div class="modal-list">${standingsMarkup}</div>`,
    actions: [{ label: "Volver", className: "btn-secondary", onClick: openTournamentHistoryDialog }]
  });
}

function deleteTournamentHistory(historyId) {
  tournamentHistory = tournamentHistory.filter((tournament) => tournament.id !== historyId);
  selectedHistoryIds = selectedHistoryIds.filter((id) => id !== historyId);
  saveTournamentHistory();
  saveSelectedHistoryIds();
  closeModal();
  render();
  showToast("Entrada Eliminada", "Se eliminó el torneo archivado.", "warning");
}

function exportStandingsCsv() {
  if (!state.players.length) {
    alert("Crea un torneo antes de exportar la clasificación.");
    return;
  }

  const derived = deriveTournamentData();
  const rows = [
    ["Clasificación", "Jugador", "Estado", "Puntos", "Victorias", "Derrotas", "Sets +/-", "Puntos +/-"],
    ...derived.leaderboardPlayers.map((player, index) => {
      const stats = derived.statsById.get(player.id);
      return [
        index + 1,
        player.name,
        player.status === "removed" ? "Retirado" : "Activo",
        stats.points,
        stats.wins,
        stats.losses,
        stats.setsWon - stats.setsLost,
        stats.scoreFor - stats.scoreAgainst
      ];
    })
  ];

  const csv = rows.map((row) => row.map(escapeCsvCell).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(state.tournamentName || "tournament")}-clasificacion.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getEditableSets(match) {
  if (!match.result || !Array.isArray(match.result.sets) || !match.result.sets.length) {
    return [createEmptySet(), createEmptySet(), createEmptySet()];
  }

  return match.result.sets.map((set) => ({
    player1Score: Number(set.player1Score) || 0,
    player2Score: Number(set.player2Score) || 0
  }));
}

function createEmptySet() {
  return {
    player1Score: 0,
    player2Score: 0
  };
}

function renderSetRows(card, sets) {
  const sanitizedSets = sets.length ? sets : [createEmptySet()];
  const setsList = card.querySelector(".sets-list");
  const rowTemplate = card.querySelector(".setRowTemplate");
  setsList.innerHTML = "";

  sanitizedSets.forEach((set, index) => {
    const row = rowTemplate.content.firstElementChild.cloneNode(true);
    const inputs = row.querySelectorAll(".set-score-input");
    const removeButton = row.querySelector(".remove-set-btn");
    row.querySelector(".set-label").textContent = `Set ${index + 1}`;
    inputs[0].value = String(set.player1Score);
    inputs[1].value = String(set.player2Score);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        input.value = sanitizeNumericInput(input.value);
        updateMatchPreview(card);
      });
    });

    removeButton.disabled = sanitizedSets.length === 1;
    removeButton.addEventListener("click", () => {
      const updatedSets = collectSetsFromCard(card).filter((_, setIndex) => setIndex !== index);
      renderSetRows(card, updatedSets);
    });

    setsList.appendChild(row);
  });

  updateMatchPreview(card);
}

function collectSetsFromCard(card) {
  return [...card.querySelectorAll(".set-row")].map((row) => {
    const inputs = row.querySelectorAll(".set-score-input");
    return {
      player1Score: Number(inputs[0].value) || 0,
      player2Score: Number(inputs[1].value) || 0
    };
  });
}

function sanitizeNumericInput(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return "0";
  }

  // Máximo 11, o 14 si hay ventaja (ambos >= 11)
  const maxValue = 14;
  return String(Math.min(Math.floor(parsed), maxValue));
}

function validateSets(sets) {
  const activeSets = normalizeEnteredSets(sets);
  if (!activeSets.length) {
    return { valid: false, message: "Añade al menos un set antes de guardar el resultado." };
  }

  for (const set of activeSets) {
    if (!Number.isInteger(set.player1Score) || !Number.isInteger(set.player2Score) || set.player1Score < 0 || set.player2Score < 0) {
      return { valid: false, message: "Las puntuaciones de los sets deben ser números enteros mayores o iguales a 0." };
    }

    if (set.player1Score === set.player2Score) {
      return { valid: false, message: "Cada set debe tener un ganador. No se permiten empates en un set." };
    }

    // Validar límite de puntos: máximo 11, o 14 si hay ventaja
    const maxAllowed = 14;
    if (set.player1Score > maxAllowed || set.player2Score > maxAllowed) {
      return { valid: false, message: `La puntuación máxima es 11, o 14 en caso de ventaja.` };
    }

    // Validar que si uno llega a 11, el otro no puede estar bajo 9
    const minScore = Math.min(set.player1Score, set.player2Score);
    const maxScore = Math.max(set.player1Score, set.player2Score);
    
    if (maxScore >= 11 && minScore < 9) {
      return { valid: false, message: `Si uno llega a 11 puntos, el otro debe tener al menos 9.` };
    }
  }

  return { valid: true };
}

function normalizeEnteredSets(sets) {
  return sets.filter((set) => !(set.player1Score === 0 && set.player2Score === 0));
}

function updateMatchPreview(card) {
  const sets = collectSetsFromCard(card);
  const validation = validateSets(sets);
  const previewSummary = card.querySelector(".preview-summary");
  const previewSets = card.querySelector(".preview-sets");
  const previewPoints = card.querySelector(".preview-points");
  const previewAward = card.querySelector(".preview-award");
  const playerRows = card.querySelectorAll(".player-row");
  const setRows = card.querySelectorAll(".set-row");

  playerRows.forEach((row) => row.classList.remove("winner", "loser"));
  setRows.forEach((row) => row.classList.remove("won-top", "won-bottom"));

  if (!validation.valid) {
    previewSummary.textContent = validation.message;
    previewSets.textContent = "0 - 0";
    previewPoints.textContent = "0 - 0";
    previewAward.textContent = "0.00 - 0.00";
    return;
  }

  sets.forEach((set, index) => {
    if (set.player1Score > set.player2Score) {
      setRows[index]?.classList.add("won-top");
    } else if (set.player2Score > set.player1Score) {
      setRows[index]?.classList.add("won-bottom");
    }
  });

  const summary = summarizeMatchResult({ sets: normalizeEnteredSets(sets), isBye: false });
  previewSets.textContent = `${summary.setsWonPlayer1} - ${summary.setsWonPlayer2}`;
  previewPoints.textContent = `${summary.totalPointsPlayer1} - ${summary.totalPointsPlayer2}`;
  previewAward.textContent = `${formatTournamentPoints(summary.awardedPointsPlayer1)} - ${formatTournamentPoints(summary.awardedPointsPlayer2)}`;

  if (summary.winner === "player1") {
    previewSummary.textContent = "El jugador superior va ganando el partido.";
    applyWinnerClasses(playerRows, summary.setsWonPlayer1, summary.setsWonPlayer2);
  } else if (summary.winner === "player2") {
    previewSummary.textContent = "El jugador inferior va ganando el partido.";
    applyWinnerClasses(playerRows, summary.setsWonPlayer1, summary.setsWonPlayer2);
  } else {
    previewSummary.textContent = "El partido está empatado a sets.";
  }
}

function summarizeMatchResult(result) {
  if (result.isBye) {
    return {
      setsWonPlayer1: 0,
      setsWonPlayer2: 0,
      totalPointsPlayer1: 0,
      totalPointsPlayer2: 0,
      awardedPointsPlayer1: 2,
      awardedPointsPlayer2: 0,
      winner: "player1",
      isDraw: false
    };
  }

  const sets = Array.isArray(result.sets) ? result.sets : [];
  if (!sets.length && (Number(result.player1Score) || Number(result.player2Score))) {
    const legacySetsWonPlayer1 = Number(result.player1Score) || 0;
    const legacySetsWonPlayer2 = Number(result.player2Score) || 0;
    const legacyDraw = legacySetsWonPlayer1 === legacySetsWonPlayer2;
    const legacyWinner = legacyDraw ? null : legacySetsWonPlayer1 > legacySetsWonPlayer2 ? "player1" : "player2";

    return {
      setsWonPlayer1: legacySetsWonPlayer1,
      setsWonPlayer2: legacySetsWonPlayer2,
      totalPointsPlayer1: 0,
      totalPointsPlayer2: 0,
      awardedPointsPlayer1: legacySetsWonPlayer1 * 0.5 + (legacyDraw ? 1 : legacyWinner === "player1" ? 2 : 0),
      awardedPointsPlayer2: legacySetsWonPlayer2 * 0.5 + (legacyDraw ? 1 : legacyWinner === "player2" ? 2 : 0),
      winner: legacyWinner,
      isDraw: legacyDraw
    };
  }

  let setsWonPlayer1 = 0;
  let setsWonPlayer2 = 0;
  let totalPointsPlayer1 = 0;
  let totalPointsPlayer2 = 0;

  for (const set of sets) {
    totalPointsPlayer1 += Number(set.player1Score) || 0;
    totalPointsPlayer2 += Number(set.player2Score) || 0;

    if (set.player1Score > set.player2Score) {
      setsWonPlayer1 += 1;
    } else if (set.player2Score > set.player1Score) {
      setsWonPlayer2 += 1;
    }
  }

  const isDraw = setsWonPlayer1 === setsWonPlayer2;
  const winner = isDraw ? null : setsWonPlayer1 > setsWonPlayer2 ? "player1" : "player2";

  const setPointsPlayer1 = setsWonPlayer1 * 0.5;
  const setPointsPlayer2 = setsWonPlayer2 * 0.5;
  const matchPointsPlayer1 = isDraw ? 1 : winner === "player1" ? 2 : 0;
  const matchPointsPlayer2 = isDraw ? 1 : winner === "player2" ? 2 : 0;
  const rallyPointsPlayer1 = totalPointsPlayer1 * 0.05;
  const rallyPointsPlayer2 = totalPointsPlayer2 * 0.05;

  return {
    setsWonPlayer1,
    setsWonPlayer2,
    totalPointsPlayer1,
    totalPointsPlayer2,
    awardedPointsPlayer1: setPointsPlayer1 + matchPointsPlayer1 + rallyPointsPlayer1,
    awardedPointsPlayer2: setPointsPlayer2 + matchPointsPlayer2 + rallyPointsPlayer2,
    winner,
    isDraw
  };
}

function deriveTournamentData() {
  const statsById = new Map();

  state.players.forEach((player) => {
    statsById.set(player.id, createEmptyStats());
  });

  state.rounds.forEach((round) => {
    round.matches.forEach((match) => {
      if (!match.result || !match.result.completed) return;

      const player1Stats = statsById.get(match.player1Id);
      const player2Stats = statsById.get(match.player2Id);
      if (!player1Stats) return;

      const summary = summarizeMatchResult(match.result);

      player1Stats.scoreFor += summary.totalPointsPlayer1;
      player1Stats.scoreAgainst += summary.totalPointsPlayer2;
      player1Stats.setsWon += summary.setsWonPlayer1;
      player1Stats.setsLost += summary.setsWonPlayer2;
      player1Stats.completedMatches += 1;

      if (match.result.isBye) {
        player1Stats.points += summary.awardedPointsPlayer1;
        player1Stats.wins += 1;
        player1Stats.hadBye = true;
        return;
      }

      if (!player2Stats) return;

      player2Stats.scoreFor += summary.totalPointsPlayer2;
      player2Stats.scoreAgainst += summary.totalPointsPlayer1;
      player2Stats.setsWon += summary.setsWonPlayer2;
      player2Stats.setsLost += summary.setsWonPlayer1;
      player2Stats.completedMatches += 1;
      player1Stats.opponents.push(match.player2Id);
      player2Stats.opponents.push(match.player1Id);
      player1Stats.draws += summary.isDraw ? 1 : 0;
      player2Stats.draws += summary.isDraw ? 1 : 0;
      player1Stats.points += summary.awardedPointsPlayer1;
      player2Stats.points += summary.awardedPointsPlayer2;

      if (summary.winner === "player1") {
        player1Stats.wins += 1;
        player2Stats.losses += 1;
      } else if (summary.winner === "player2") {
        player2Stats.wins += 1;
        player1Stats.losses += 1;
      }
    });
  });

  const activePlayers = state.players.filter((player) => player.status === "active");
  const removedPlayers = state.players.filter((player) => player.status === "removed");
  const leaderboardPlayers = [
    ...activePlayers.sort((left, right) => compareLeaderboardPlayers(left, right, statsById)),
    ...removedPlayers.sort((left, right) => compareLeaderboardPlayers(left, right, statsById))
  ];

  return {
    statsById,
    activePlayers,
    removedPlayers,
    leaderboardPlayers
  };
}

function createEmptyStats() {
  return {
    points: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    setsWon: 0,
    setsLost: 0,
    scoreFor: 0,
    scoreAgainst: 0,
    opponents: [],
    completedMatches: 0,
    hadBye: false
  };
}

function compareLeaderboardPlayers(left, right, statsById) {
  const leftStats = statsById.get(left.id) || createEmptyStats();
  const rightStats = statsById.get(right.id) || createEmptyStats();

  return (
    rightStats.points - leftStats.points ||
    rightStats.setsWon - leftStats.setsWon ||
    rightStats.scoreFor - leftStats.scoreFor ||
    (rightStats.scoreFor - rightStats.scoreAgainst) - (leftStats.scoreFor - leftStats.scoreAgainst) ||
    rightStats.wins - leftStats.wins ||
    left.name.localeCompare(right.name)
  );
}

function generateSwissPairings(players, roundNumber, statsById) {
  let orderedPlayers = roundNumber === 1
    ? shuffleList(players)
    : [...players].sort((left, right) => compareLeaderboardPlayers(left, right, statsById));

  let byePlayer = null;
  if (orderedPlayers.length % 2 !== 0) {
    const byeCandidates = [...orderedPlayers].reverse().filter((player) => !(statsById.get(player.id) || createEmptyStats()).hadBye);
    byePlayer = byeCandidates[0] || orderedPlayers[orderedPlayers.length - 1];
    orderedPlayers = orderedPlayers.filter((player) => player.id !== byePlayer.id);
  }

  const pairings = buildSwissPairs(orderedPlayers, statsById);
  if (!pairings) {
    return byePlayer ? [{ player1: byePlayer, player2: null, isBye: true }] : [];
  }

  return byePlayer ? [{ player1: byePlayer, player2: null, isBye: true }, ...pairings] : pairings;
}

function buildSwissPairs(playerPool, statsById) {
  if (!playerPool.length) {
    return [];
  }

  const [firstPlayer, ...rest] = playerPool;
  const firstStats = statsById.get(firstPlayer.id) || createEmptyStats();

  const candidates = [...rest].sort((left, right) => {
    const leftStats = statsById.get(left.id) || createEmptyStats();
    const rightStats = statsById.get(right.id) || createEmptyStats();
    return (
      Math.abs(firstStats.points - leftStats.points) - Math.abs(firstStats.points - rightStats.points) ||
      Math.abs((firstStats.scoreFor - firstStats.scoreAgainst) - (leftStats.scoreFor - leftStats.scoreAgainst)) -
        Math.abs((firstStats.scoreFor - firstStats.scoreAgainst) - (rightStats.scoreFor - rightStats.scoreAgainst))
    );
  });

  for (const candidate of candidates) {
    if (firstStats.opponents.includes(candidate.id)) {
      continue;
    }

    const remaining = rest.filter((player) => player.id !== candidate.id);
    const next = buildSwissPairs(remaining, statsById);
    if (next) {
      return [{ player1: firstPlayer, player2: candidate, isBye: false }, ...next];
    }
  }

  for (const candidate of candidates) {
    const remaining = rest.filter((player) => player.id !== candidate.id);
    const next = buildSwissPairs(remaining, statsById);
    if (next) {
      return [{ player1: firstPlayer, player2: candidate, isBye: false }, ...next];
    }
  }

  return null;
}

function buildMatchesFromPairings(pairings, roundNumber) {
  return pairings.map((pairing, index) => ({
    id: `round-${roundNumber}-match-${index + 1}`,
    table: index + 1,
    player1Id: pairing.player1.id,
    player2Id: pairing.player2 ? pairing.player2.id : null,
    result: pairing.isBye
      ? {
          sets: [],
          player1Score: 0,
          player2Score: 0,
          completed: true,
          isBye: true
        }
      : null
  }));
}

function isRoundComplete(round) {
  return round.matches.every((match) => match.result && match.result.completed);
}

function rebuildPendingCurrentRound() {
  const currentRound = state.rounds[state.currentRoundIndex];
  if (!currentRound || isRoundComplete(currentRound)) {
    return;
  }

  const completedMatches = currentRound.matches.filter((match) => match.result && match.result.completed);
  const occupiedPlayers = new Set(
    completedMatches.flatMap((match) => [match.player1Id, match.player2Id].filter(Boolean))
  );

  const availablePlayers = state.players.filter((player) => player.status === "active" && !occupiedPlayers.has(player.id));
  if (!availablePlayers.length) {
    currentRound.matches = reindexTables(completedMatches);
    return;
  }

  const derived = deriveTournamentData();
  const rebuiltPairings = generateSwissPairings(availablePlayers, currentRound.roundNumber, derived.statsById);
  currentRound.matches = reindexTables([
    ...completedMatches,
    ...buildMatchesFromPairings(rebuiltPairings, currentRound.roundNumber)
  ]);
}

function reindexTables(matches) {
  return matches.map((match, index) => ({ ...match, table: index + 1 }));
}

function aggregateGlobalRankings() {
  const selectedTournaments = tournamentHistory.filter((tournament) => selectedHistoryIds.includes(tournament.id));
  if (!selectedTournaments.length) {
    return [];
  }

  const rankingMap = new Map();

  selectedTournaments.forEach((tournament) => {
    tournament.finalStandings.forEach((standing) => {
      if (!rankingMap.has(standing.playerId)) {
        rankingMap.set(standing.playerId, {
          playerId: standing.playerId,
          name: standing.name,
          tournaments: 0,
          points: 0,
          wins: 0,
          losses: 0,
          setDifference: 0,
          scoreDifference: 0
        });
      }

      const aggregate = rankingMap.get(standing.playerId);
      aggregate.name = standing.name;
      aggregate.tournaments += 1;
      aggregate.points += standing.points;
      aggregate.wins += standing.wins;
      aggregate.losses += standing.losses;
      aggregate.setDifference += standing.setDifference;
      aggregate.scoreDifference += standing.scoreDifference;
    });
  });

  return [...rankingMap.values()].sort((left, right) =>
    right.points - left.points ||
    right.scoreDifference - left.scoreDifference ||
    right.setDifference - left.setDifference ||
    right.wins - left.wins ||
    left.name.localeCompare(right.name)
  );
}

function ensurePlayerIdentity(name) {
  const normalizedName = normalizeName(name);
  const existing = playerRegistry.find((entry) => entry.normalizedName === normalizedName);
  if (existing) {
    existing.name = name;
    savePlayerRegistry();
    return existing;
  }

  const identity = {
    id: createId("player"),
    name,
    normalizedName
  };
  playerRegistry = [...playerRegistry, identity];
  savePlayerRegistry();
  return identity;
}

function getPlayerById(playerId) {
  return state.players.find((player) => player.id === playerId) || null;
}

function applyWinnerClasses(playerRows, player1Score, player2Score) {
  playerRows[0].classList.remove("winner", "loser");
  playerRows[1].classList.remove("winner", "loser");

  if (player1Score > player2Score) {
    playerRows[0].classList.add("winner");
    playerRows[1].classList.add("loser");
  } else if (player2Score > player1Score) {
    playerRows[1].classList.add("winner");
    playerRows[0].classList.add("loser");
  }
}

function openModal({ title, body, actions }) {
  elements.modalTitle.textContent = title;
  elements.modalBody.innerHTML = body;
  elements.modalActions.innerHTML = "";

  actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `btn ${action.className}`;
    button.textContent = action.label;
    button.addEventListener("click", action.onClick);
    elements.modalActions.appendChild(button);
  });

  elements.modalOverlay.classList.remove("hidden");
}

function closeModal() {
  elements.modalOverlay.classList.add("hidden");
  elements.modalTitle.textContent = "Diálogo";
  elements.modalBody.innerHTML = "";
  elements.modalActions.innerHTML = "";
}

function showToast(title, message, tone = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`;
  toast.innerHTML = `
    <strong class="toast-title">${escapeHtml(title)}</strong>
    <span>${escapeHtml(message)}</span>
  `;
  elements.toastStack.appendChild(toast);

  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(18px)";
    toast.style.transition = "opacity 0.2s ease, transform 0.2s ease";
    window.setTimeout(() => toast.remove(), 220);
  }, 2600);
}

function updatePairingsScrollButton() {
  const shouldShow = elements.pairingsContainer.scrollHeight - elements.pairingsContainer.clientHeight > 40
    && elements.pairingsContainer.scrollTop > 24;
  elements.pairingsScrollTopBtn.classList.toggle("visible", shouldShow);
}

function shuffleList(list) {
  const clone = [...list];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeName(value) {
  return value.trim().toLowerCase();
}

function escapeCsvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDifference(value) {
  return value > 0 ? `+${value}` : String(value);
}

function formatTournamentPoints(value) {
  const rounded = Math.round((Number(value) || 0) * 100) / 100;
  return rounded.toFixed(2);
}

function formatDate(value) {
  return new Date(value).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
