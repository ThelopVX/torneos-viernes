const STORAGE_KEYS = {
  currentTournament: "swiss-table-tennis-manager-state",
  playerGroups: "swiss-table-tennis-manager-player-groups",
  tournamentHistory: "swiss-table-tennis-manager-history",
  playerRegistry: "swiss-table-tennis-manager-player-registry",
  selectedHistory: "swiss-table-tennis-manager-selected-history",
  language: "swiss-table-tennis-manager-language"
};

const TRANSLATIONS = {
  en: {
    sidebar: {
      system: "Swiss Tournament OS",
      liveStatus: "Live Status",
      description: "Generate rounds, manage withdrawals, archive events, and compare performance across tournaments."
    },
    language: {
      selector: "Language selector",
      en: "English",
      es: "Spanish"
    },
    nav: {
      setup: "Setup",
      control: "Control",
      pairings: "Pairings",
      leaderboard: "Leaderboard",
      globalRanking: "Global Ranking"
    },
    breadcrumb: { currentSection: "Current Section" },
    hero: {
      eyebrow: "Swiss-System Tournament Console",
      title: "Table Tennis Manager",
      copy: "Create tournaments, generate fair Swiss pairings, record match results, and track standings in real time."
    },
    stats: { tournament: "Tournament", round: "Round", players: "Players" },
    setup: {
      title: "Tournament Setup",
      subtitle: "Initialize your event and register participants.",
      tournamentName: "Tournament Name",
      playerCount: "Number of Players",
      participants: "Participants"
    },
    control: {
      title: "Round Control",
      subtitle: "Advance rounds only when every match result is saved.",
      status: "Status",
      completedMatches: "Completed Matches"
    },
    players: {
      title: "Players Management",
      subtitle: "Withdraw players mid-tournament while preserving completed results."
    },
    pairings: {
      title: "Round Pairings",
      noneGenerated: "No round has been generated yet.",
      generateToView: "Generate a round to view match cards.",
      roundLiveResults: "Round {round} pairings and live results."
    },
    leaderboard: {
      title: "Leaderboard",
      subtitle: "Ranked by total scoring points, then sets won and total rally points. Withdrawn players stay listed at the bottom."
    },
    history: {
      title: "Global Ranking / Statistics",
      subtitle: "Select archived tournaments to build a combined player ranking across events."
    },
    table: {
      player: "Player",
      status: "Status",
      points: "Points",
      wins: "Wins",
      losses: "Losses",
      setsDiff: "Sets +/-",
      scoresDiff: "Scores +/-",
      opposition: "Opposition",
      tournaments: "Tournaments",
      sets: "Sets",
      scoring: "Scoring"
    },
    status: {
      waitingForSetup: "Waiting for setup",
      readyRound1: "Ready to generate round 1",
      roundComplete: "Round {round} complete",
      roundInProgress: "Round {round} in progress",
      active: "Active",
      withdrawn: "Withdrawn",
      removed: "Removed",
      notCreated: "Not Created",
      unknown: "Unknown",
      pending: "Pending",
      saved: "Saved",
      completed: "Completed"
    },
    match: {
      pending: "Pending",
      vs: "VS",
      setScores: "Set Scores",
      livePreview: "Live Preview",
      addSetsToCalculate: "Add sets to calculate the result.",
      topPlayerSetScore: "Top player set score",
      bottomPlayerSetScore: "Bottom player set score",
      automaticWin: "Automatic Win",
      noSetEntryRequired: "No set entry required.",
      automaticMatchWinApplied: "Automatic match win applied.",
      byeApplied: "Bye Applied",
      saveResult: "Save Result",
      updateResult: "Update Result",
      setLabel: "Set {index}",
      tableLabel: "Table {table}",
      topPlayerWinning: "Top player currently wins the match.",
      bottomPlayerWinning: "Bottom player currently wins the match.",
      drawOnSets: "Match is currently a draw on sets.",
      bye: "Bye"
    },
    actions: {
      toggleNavigation: "Toggle navigation",
      closeDialog: "Close dialog",
      createTournament: "Create Tournament",
      loadSamplePlayers: "Load Sample Players",
      generateNextRound: "Generate Next Round",
      completeAndSaveTournament: "Complete & Save Tournament",
      savePlayers: "Save Players",
      loadPlayers: "Load Players",
      viewTournamentHistory: "View Tournament History",
      resetTournament: "Reset Tournament",
      exportStandingsCsv: "Export Standings CSV",
      scrollToTop: "Scroll to top",
      addSet: "Add Set",
      removeSet: "Remove set",
      saveResult: "Save Result",
      updateResult: "Update Result",
      removePlayer: "Remove Player",
      cancel: "Cancel",
      close: "Close",
      keepPlayerList: "Keep Player List",
      clearEverything: "Clear Everything",
      loadGroupPlayers: "Load Players",
      delete: "Delete",
      viewStandings: "View Standings",
      back: "Back",
      savePlayersConfirm: "Save Players"
    },
    placeholders: {
      tournamentName: "Spring Championship",
      participants: "One player per line",
      groupName: "Club Players"
    },
    empty: {
      leaderboard: "Create a tournament to see standings.",
      globalRanking: "Archived tournaments will populate this ranking.",
      playersManager: "Create a tournament to manage participants.",
      historySelection: "Save completed tournaments to build a global ranking.",
      noOpponents: "No opponents yet",
      selectArchived: "Select at least one archived tournament."
    },
    modal: {
      dialog: "Dialog",
      removePlayerTitle: "Remove Player",
      removePlayerBody: "Withdraw <strong>{name}</strong> from the current tournament?",
      removePlayerHelp: "Completed matches stay recorded. Any unfinished matches in the current round are rebuilt so future Swiss pairings remain valid.",
      tournamentSavedTitle: "Tournament Saved",
      tournamentSavedBody: "<p><strong>{name}</strong> is now stored in tournament history and available for global ranking aggregation.</p>",
      resetTitle: "Reset Tournament",
      resetBody: "Choose how you want to reset the current tournament.",
      resetHelp: "All rounds, results, and live standings will be cleared. You can either keep the current player list for a fresh event or wipe everything.",
      savePlayersTitle: "Save Players",
      savePlayersHelp: "{count} players will be saved for future tournaments.",
      groupName: "Group Name",
      loadPlayersTitle: "Load Players",
      tournamentHistoryTitle: "Tournament History"
    },
    alerts: {
      enterTournamentName: "Please enter a tournament name.",
      validPlayerCount: "Please enter a valid player count of at least 2.",
      playerCountMismatch: "Player count and participant list do not match. Expected {count} players.",
      uniquePlayerNames: "Player names must be unique within a tournament.",
      createTournamentBeforeRounds: "Create a tournament before generating rounds.",
      atLeastTwoPlayers: "At least two active players are required to generate a round.",
      saveResultsBeforeRound: "Save all match results before generating the next round.",
      noValidPairings: "No valid pairings could be generated.",
      setScoresWholeNumbers: "Set scores must be whole numbers greater than or equal to 0.",
      addSetBeforeSaving: "Add at least one set before saving the result.",
      setWinnerRequired: "Each set must have a winner. Tied set scores are not allowed.",
      createTournamentBeforeExport: "Create a tournament before exporting standings.",
      createAndPlayBeforeArchive: "Create and play a tournament before archiving it.",
      finishRoundBeforeArchive: "Finish the current round before saving the tournament to history.",
      atLeastOneCompletedMatch: "At least one completed match is required before saving a tournament.",
      noTournamentDataReset: "There is no tournament data to reset.",
      addPlayersBeforeSave: "Add players before saving a reusable list.",
      enterGroupName: "Please enter a group name.",
      noSavedPlayerGroups: "No saved player groups yet.",
      noSavedTournaments: "No tournaments have been saved yet."
    },
    notifications: {
      languageChangedTitle: "Language",
      languageChangedBodyEn: "English enabled.",
      languageChangedBodyEs: "Spanish enabled.",
      tournamentCreatedTitle: "Tournament Created",
      tournamentCreatedBody: "{name} is ready for round generation.",
      roundGeneratedTitle: "Round Generated",
      roundGeneratedBody: "Round {round} pairings are ready.",
      resultsSavedTitle: "Results Saved",
      resultsSavedBody: "Match results updated successfully.",
      playerRemovedTitle: "Player Removed",
      playerRemovedBody: "{name} has been withdrawn from future rounds.",
      tournamentArchivedTitle: "Tournament Archived",
      tournamentArchivedBody: "{name} was saved to history.",
      tournamentResetTitle: "Tournament Reset",
      tournamentResetKeepBody: "Rounds cleared and player list kept.",
      tournamentResetClearBody: "Tournament data cleared.",
      playersSavedTitle: "Players Saved",
      playersSavedBody: "{name} is available for future tournaments.",
      playersLoadedTitle: "Players Loaded",
      playersLoadedBody: "{name} has been loaded into setup.",
      playerGroupDeletedTitle: "Player Group Deleted",
      playerGroupDeletedBody: "Saved player list removed.",
      historyDeletedTitle: "History Entry Deleted",
      historyDeletedBody: "Archived tournament removed."
    },
    misc: {
      playersShort: "players",
      roundsShort: "rounds",
      savedOn: "saved {date}",
      pointsShort: "pts",
      scoreLabel: "Score",
      winsLossesShort: "{wins}W-{losses}L",
      sampleTournamentName: "Elite Night Series"
    }
  },
  es: {
    sidebar: {
      system: "Sistema Suizo de Torneos",
      liveStatus: "Estado en vivo",
      description: "Genera rondas, gestiona retiradas, archiva eventos y compara rendimientos entre torneos."
    },
    language: {
      selector: "Selector de idioma",
      en: "Inglés",
      es: "Español"
    },
    nav: {
      setup: "Configuración",
      control: "Control",
      pairings: "Emparejamientos",
      leaderboard: "Clasificación",
      globalRanking: "Ranking global"
    },
    breadcrumb: { currentSection: "Sección actual" },
    hero: {
      eyebrow: "Consola de Torneos Sistema Suizo",
      title: "Gestor de Tenis de Mesa",
      copy: "Crea torneos, genera emparejamientos suizos justos, registra resultados y sigue la clasificación en tiempo real."
    },
    stats: { tournament: "Torneo", round: "Ronda", players: "Jugadores" },
    setup: {
      title: "Configuración del Torneo",
      subtitle: "Inicializa tu evento y registra participantes.",
      tournamentName: "Nombre del Torneo",
      playerCount: "Número de Jugadores",
      participants: "Participantes"
    },
    control: {
      title: "Control de Rondas",
      subtitle: "Avanza de ronda solo cuando todos los resultados estén guardados.",
      status: "Estado",
      completedMatches: "Partidos completados"
    },
    players: {
      title: "Gestión de Jugadores",
      subtitle: "Retira jugadores en mitad del torneo conservando los resultados completados."
    },
    pairings: {
      title: "Emparejamientos de la Ronda",
      noneGenerated: "Aún no se ha generado ninguna ronda.",
      generateToView: "Genera una ronda para ver las tarjetas de partido.",
      roundLiveResults: "Emparejamientos y resultados en vivo de la ronda {round}."
    },
    leaderboard: {
      title: "Clasificación",
      subtitle: "Ordenada por puntos totales, luego sets ganados y puntos de tanteo. Los retirados permanecen al final."
    },
    history: {
      title: "Ranking Global / Estadísticas",
      subtitle: "Selecciona torneos archivados para construir un ranking combinado entre eventos."
    },
    table: {
      player: "Jugador",
      status: "Estado",
      points: "Puntos",
      wins: "Victorias",
      losses: "Derrotas",
      setsDiff: "Sets +/-",
      scoresDiff: "Puntos +/-",
      opposition: "Rivales",
      tournaments: "Torneos",
      sets: "Sets",
      scoring: "Puntuación"
    },
    status: {
      waitingForSetup: "Esperando configuración",
      readyRound1: "Listo para generar la ronda 1",
      roundComplete: "Ronda {round} completada",
      roundInProgress: "Ronda {round} en curso",
      active: "Activo",
      withdrawn: "Retirado",
      removed: "Eliminado",
      notCreated: "No creado",
      unknown: "Desconocido",
      pending: "Pendiente",
      saved: "Guardado",
      completed: "Completado"
    },
    match: {
      pending: "Pendiente",
      vs: "VS",
      setScores: "Marcadores por Set",
      livePreview: "Vista previa",
      addSetsToCalculate: "Añade sets para calcular el resultado.",
      topPlayerSetScore: "Puntuación del set del jugador superior",
      bottomPlayerSetScore: "Puntuación del set del jugador inferior",
      automaticWin: "Victoria automática",
      noSetEntryRequired: "No es necesario introducir sets.",
      automaticMatchWinApplied: "Victoria automática aplicada.",
      byeApplied: "Descanso aplicado",
      saveResult: "Guardar resultado",
      updateResult: "Actualizar resultado",
      setLabel: "Set {index}",
      tableLabel: "Mesa {table}",
      topPlayerWinning: "El jugador superior va ganando el partido.",
      bottomPlayerWinning: "El jugador inferior va ganando el partido.",
      drawOnSets: "El partido está empatado a sets.",
      bye: "Descanso"
    },
    actions: {
      toggleNavigation: "Mostrar u ocultar navegación",
      closeDialog: "Cerrar diálogo",
      createTournament: "Crear Torneo",
      loadSamplePlayers: "Cargar Jugadores de Ejemplo",
      generateNextRound: "Generar Siguiente Ronda",
      completeAndSaveTournament: "Completar y Guardar Torneo",
      savePlayers: "Guardar Jugadores",
      loadPlayers: "Cargar Jugadores",
      viewTournamentHistory: "Ver Historial de Torneos",
      resetTournament: "Reiniciar Torneo",
      exportStandingsCsv: "Exportar Clasificación CSV",
      scrollToTop: "Volver arriba",
      addSet: "Añadir Set",
      removeSet: "Eliminar set",
      saveResult: "Guardar resultado",
      updateResult: "Actualizar resultado",
      removePlayer: "Retirar Jugador",
      cancel: "Cancelar",
      close: "Cerrar",
      keepPlayerList: "Mantener Lista de Jugadores",
      clearEverything: "Borrar Todo",
      loadGroupPlayers: "Cargar Jugadores",
      delete: "Eliminar",
      viewStandings: "Ver Clasificación",
      back: "Volver",
      savePlayersConfirm: "Guardar Jugadores"
    },
    placeholders: {
      tournamentName: "Campeonato de Primavera",
      participants: "Un jugador por línea",
      groupName: "Jugadores del Club"
    },
    empty: {
      leaderboard: "Crea un torneo para ver la clasificación.",
      globalRanking: "Los torneos archivados rellenarán este ranking.",
      playersManager: "Crea un torneo para gestionar participantes.",
      historySelection: "Guarda torneos completados para construir un ranking global.",
      noOpponents: "Sin rivales todavía",
      selectArchived: "Selecciona al menos un torneo archivado."
    },
    modal: {
      dialog: "Diálogo",
      removePlayerTitle: "Retirar Jugador",
      removePlayerBody: "¿Retirar a <strong>{name}</strong> del torneo actual?",
      removePlayerHelp: "Los partidos completados se conservan. Los emparejamientos pendientes de la ronda actual se reconstruyen para mantener válido el sistema suizo.",
      tournamentSavedTitle: "Torneo Guardado",
      tournamentSavedBody: "<p><strong>{name}</strong> ya está guardado en el historial y disponible para el ranking global.</p>",
      resetTitle: "Reiniciar Torneo",
      resetBody: "Elige cómo quieres reiniciar el torneo actual.",
      resetHelp: "Se borrarán todas las rondas, resultados y la clasificación en vivo. Puedes mantener la lista de jugadores para un nuevo evento o borrar todo.",
      savePlayersTitle: "Guardar Jugadores",
      savePlayersHelp: "Se guardarán {count} jugadores para torneos futuros.",
      groupName: "Nombre del Grupo",
      loadPlayersTitle: "Cargar Jugadores",
      tournamentHistoryTitle: "Historial de Torneos"
    },
    alerts: {
      enterTournamentName: "Introduce un nombre para el torneo.",
      validPlayerCount: "Introduce un número válido de jugadores, al menos 2.",
      playerCountMismatch: "El número de jugadores y la lista de participantes no coinciden. Se esperaban {count} jugadores.",
      uniquePlayerNames: "Los nombres de los jugadores deben ser únicos dentro del torneo.",
      createTournamentBeforeRounds: "Crea un torneo antes de generar rondas.",
      atLeastTwoPlayers: "Se necesitan al menos dos jugadores activos para generar una ronda.",
      saveResultsBeforeRound: "Guarda todos los resultados antes de generar la siguiente ronda.",
      noValidPairings: "No se pudieron generar emparejamientos válidos.",
      setScoresWholeNumbers: "Las puntuaciones de los sets deben ser números enteros mayores o iguales a 0.",
      addSetBeforeSaving: "Añade al menos un set antes de guardar el resultado.",
      setWinnerRequired: "Cada set debe tener un ganador. No se permiten empates en un set.",
      createTournamentBeforeExport: "Crea un torneo antes de exportar la clasificación.",
      createAndPlayBeforeArchive: "Crea y juega un torneo antes de archivarlo.",
      finishRoundBeforeArchive: "Termina la ronda actual antes de guardar el torneo en el historial.",
      atLeastOneCompletedMatch: "Se necesita al menos un partido completado antes de guardar un torneo.",
      noTournamentDataReset: "No hay datos de torneo para reiniciar.",
      addPlayersBeforeSave: "Añade jugadores antes de guardar una lista reutilizable.",
      enterGroupName: "Introduce un nombre para el grupo.",
      noSavedPlayerGroups: "Todavía no hay grupos de jugadores guardados.",
      noSavedTournaments: "Todavía no se han guardado torneos."
    },
    notifications: {
      languageChangedTitle: "Idioma",
      languageChangedBodyEn: "Inglés activado.",
      languageChangedBodyEs: "Español activado.",
      tournamentCreatedTitle: "Torneo Creado",
      tournamentCreatedBody: "{name} está listo para generar rondas.",
      roundGeneratedTitle: "Ronda Generada",
      roundGeneratedBody: "Los emparejamientos de la ronda {round} están listos.",
      resultsSavedTitle: "Resultados Guardados",
      resultsSavedBody: "El resultado del partido se actualizó correctamente.",
      playerRemovedTitle: "Jugador Retirado",
      playerRemovedBody: "{name} ha sido retirado de futuras rondas.",
      tournamentArchivedTitle: "Torneo Archivado",
      tournamentArchivedBody: "{name} se guardó en el historial.",
      tournamentResetTitle: "Torneo Reiniciado",
      tournamentResetKeepBody: "Se borraron las rondas y se mantuvo la lista de jugadores.",
      tournamentResetClearBody: "Se borraron los datos del torneo.",
      playersSavedTitle: "Jugadores Guardados",
      playersSavedBody: "{name} ya está disponible para futuros torneos.",
      playersLoadedTitle: "Jugadores Cargados",
      playersLoadedBody: "{name} se cargó en la configuración.",
      playerGroupDeletedTitle: "Grupo Eliminado",
      playerGroupDeletedBody: "Se eliminó la lista guardada.",
      historyDeletedTitle: "Entrada Eliminada",
      historyDeletedBody: "Se eliminó el torneo archivado."
    },
    misc: {
      playersShort: "jugadores",
      roundsShort: "rondas",
      savedOn: "guardado {date}",
      pointsShort: "pts",
      scoreLabel: "Puntuación",
      winsLossesShort: "{wins}V-{losses}D",
      sampleTournamentName: "Serie Nocturna Élite"
    }
  }
};

const state = normalizeTournament(loadJson(STORAGE_KEYS.currentTournament, createEmptyTournament()));
let playerGroups = normalizePlayerGroups(loadJson(STORAGE_KEYS.playerGroups, []));
let tournamentHistory = normalizeTournamentHistory(loadJson(STORAGE_KEYS.tournamentHistory, []));
let playerRegistry = normalizePlayerRegistry(loadJson(STORAGE_KEYS.playerRegistry, []));
let selectedHistoryIds = Array.isArray(loadJson(STORAGE_KEYS.selectedHistory, []))
  ? loadJson(STORAGE_KEYS.selectedHistory, [])
  : [];
let currentLanguage = resolveInitialLanguage();

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
  viewHistoryBtn: document.getElementById("viewHistoryBtn"),
  playersManager: document.getElementById("playersManager"),
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
  sidebarToggleBtn: document.getElementById("sidebarToggleBtn"),
  langEnBtn: document.getElementById("langEnBtn"),
  langEsBtn: document.getElementById("langEsBtn")
};

bindEvents();
initializeLayoutEnhancements();
applyTranslations();
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
  elements.viewHistoryBtn.addEventListener("click", openTournamentHistoryDialog);
  elements.modalCloseBtn.addEventListener("click", closeModal);
  elements.pairingsScrollTopBtn.addEventListener("click", () => {
    elements.pairingsContainer.scrollTo({ top: 0, behavior: "smooth" });
  });
  elements.pairingsContainer.addEventListener("scroll", updatePairingsScrollButton);
  elements.modalOverlay.addEventListener("click", (event) => {
    if (event.target === elements.modalOverlay) {
      closeModal();
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      const targetSection = document.querySelector(link.getAttribute("href"));
      if (targetSection) {
        spotlightSection(targetSection);
      }
      if (window.innerWidth <= 640) {
        elements.sidebar.classList.add("is-collapsed");
      }
    });

    link.addEventListener("keydown", (event) => {
      const navLinks = [...document.querySelectorAll(".nav-link")];
      const currentIndex = navLinks.indexOf(link);
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        navLinks[(currentIndex + 1) % navLinks.length].focus();
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        navLinks[(currentIndex - 1 + navLinks.length) % navLinks.length].focus();
      }
    });
  });

  elements.sidebarToggleBtn.addEventListener("click", () => {
    elements.sidebar.classList.toggle("is-collapsed");
  });

  elements.langEnBtn.addEventListener("click", () => setLanguage("en"));
  elements.langEsBtn.addEventListener("click", () => setLanguage("es"));
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
    rounds: Array.isArray(tournament.rounds)
      ? tournament.rounds.map((round, roundIndex) => ({
          roundNumber: Number.isInteger(round.roundNumber) ? round.roundNumber : roundIndex + 1,
          matches: Array.isArray(round.matches)
            ? round.matches.map((match, matchIndex) => ({
                id: match.id || `round-${roundIndex + 1}-match-${matchIndex + 1}`,
                table: Number.isInteger(match.table) ? match.table : matchIndex + 1,
                player1Id: match.player1Id || null,
                player2Id: match.player2Id || null,
                result: match.result
                  ? {
                      sets: Array.isArray(match.result.sets)
                        ? match.result.sets
                            .filter((set) => set)
                            .map((set) => ({
                              player1Score: Number(set.player1Score) || 0,
                              player2Score: Number(set.player2Score) || 0
                            }))
                        : [],
                      player1Score: Number(match.result.player1Score) || 0,
                      player2Score: Number(match.result.player2Score) || 0,
                      completed: Boolean(match.result.completed),
                      isBye: Boolean(match.result.isBye)
                    }
                  : null
              }))
            : []
        }))
      : []
  };
}

function normalizePlayerGroups(rawGroups) {
  return Array.isArray(rawGroups)
    ? rawGroups
        .filter((group) => group && group.id && group.name && Array.isArray(group.players))
        .map((group) => ({
          id: group.id,
          name: group.name,
          createdAt: group.createdAt || new Date().toISOString(),
          players: group.players.filter((player) => player && player.id && player.name).map((player) => ({
            id: player.id,
            name: player.name
          }))
        }))
    : [];
}

function normalizeTournamentHistory(rawHistory) {
  return Array.isArray(rawHistory)
    ? rawHistory
        .filter((entry) => entry && entry.id && entry.tournamentName)
        .map((entry) => ({
          id: entry.id,
          tournamentName: entry.tournamentName,
          createdAt: entry.createdAt || new Date().toISOString(),
          archivedAt: entry.archivedAt || new Date().toISOString(),
          rounds: Array.isArray(entry.rounds) ? entry.rounds : [],
          players: Array.isArray(entry.players) ? entry.players : [],
          finalStandings: Array.isArray(entry.finalStandings) ? entry.finalStandings : []
        }))
    : [];
}

function normalizePlayerRegistry(rawRegistry) {
  return Array.isArray(rawRegistry)
    ? rawRegistry
        .filter((entry) => entry && entry.id && entry.name)
        .map((entry) => ({
          id: entry.id,
          name: entry.name,
          normalizedName: entry.normalizedName || normalizeName(entry.name)
        }))
    : [];
}

function loadJson(key, fallbackValue) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallbackValue;
  } catch (error) {
    console.error(`Failed to load ${key}`, error);
    return fallbackValue;
  }
}

function resolveInitialLanguage() {
  const savedLanguage = localStorage.getItem(STORAGE_KEYS.language);
  if (savedLanguage && TRANSLATIONS[savedLanguage]) {
    return savedLanguage;
  }

  const browserLanguage = (navigator.language || "en").toLowerCase();
  return browserLanguage.startsWith("es") ? "es" : "en";
}

function saveLanguage() {
  localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
}

function t(key, params = {}) {
  const source = getNestedTranslation(TRANSLATIONS[currentLanguage], key)
    ?? getNestedTranslation(TRANSLATIONS.en, key)
    ?? key;

  return String(source).replace(/\{(\w+)\}/g, (_, paramKey) => String(params[paramKey] ?? `{${paramKey}}`));
}

function getNestedTranslation(object, path) {
  return path.split(".").reduce((value, segment) => (value && segment in value ? value[segment] : null), object);
}

function setLanguage(language) {
  if (!TRANSLATIONS[language] || language === currentLanguage) {
    return;
  }

  currentLanguage = language;
  saveLanguage();
  closeModal();
  applyTranslations();
  render();
  return showToast(t("notifications.languageChangedTitle"), language === "es" ? t("notifications.languageChangedBodyEs") : t("notifications.languageChangedBodyEn"), "info");
  showToast(
    language === "es" ? "Idioma" : "Language",
    language === "es" ? "Español activado." : "English enabled.",
    "info"
  );
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
    animateTranslationNode(node);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
  });

  document.title = t("hero.title");
  updateLanguageButtons();
  updateActiveSectionLabel();
  updateCollapseButtonLabels();
}

function updateLanguageButtons() {
  elements.langEnBtn.classList.toggle("active", currentLanguage === "en");
  elements.langEsBtn.classList.toggle("active", currentLanguage === "es");
  elements.langEnBtn.setAttribute("aria-pressed", String(currentLanguage === "en"));
  elements.langEsBtn.setAttribute("aria-pressed", String(currentLanguage === "es"));
  elements.langEnBtn.setAttribute("title", t("language.en"));
  elements.langEsBtn.setAttribute("title", t("language.es"));
}

function updateActiveSectionLabel() {
  const activeLink = document.querySelector(".nav-link.active");
  if (activeLink) {
    elements.activeSectionLabel.textContent = activeLink.textContent.trim();
  }
}

function updateCollapseButtonLabels() {
  document.querySelectorAll(".panel").forEach((panel) => {
    const collapseButton = panel.querySelector(".collapse-btn");
    const headingTitle = panel.querySelector(".section-heading h2");
    if (!collapseButton || !headingTitle) {
      return;
    }

    collapseButton.setAttribute("aria-label", `${t("actions.toggleNavigation")}: ${headingTitle.textContent}`);
  });
}

function animateTranslationNode(node) {
  node.classList.remove("i18n-fade");
  void node.offsetWidth;
  node.classList.add("i18n-fade");
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
  renderPlayersManager(derived);
  renderPairings(derived);
  renderLeaderboard(derived);
  renderGlobalRankingSection();
}

function initializeLayoutEnhancements() {
  prepareCollapsiblePanels();
  observeSections();

  if (window.innerWidth <= 640) {
    elements.sidebar.classList.add("is-collapsed");
  }
}

function prepareCollapsiblePanels() {
  document.querySelectorAll(".panel").forEach((panel) => {
    const heading = panel.querySelector(".section-heading");
    if (!heading || heading.dataset.enhanced === "true") {
      return;
    }

    heading.dataset.enhanced = "true";
    const headingTitle = heading.querySelector("h2");
    if (!headingTitle) {
      return;
    }

    const row = document.createElement("div");
    row.className = "section-heading-row";
    heading.insertBefore(row, headingTitle);
    row.appendChild(headingTitle);

    const collapseButton = document.createElement("button");
    collapseButton.type = "button";
    collapseButton.className = "icon-btn collapse-btn";
    collapseButton.setAttribute("aria-expanded", "true");
    collapseButton.setAttribute("aria-label", `${t("actions.toggleNavigation")}: ${headingTitle.textContent}`);
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
      collapseButton.setAttribute("aria-expanded", String(!collapsed));
    });
  });
}

function observeSections() {
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sectionMap = navLinks
    .map((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      return target ? { link, target, label: link.textContent.trim() } : null;
    })
    .filter(Boolean);

  if (!sectionMap.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (!visibleEntries.length) {
        return;
      }

      const activeEntry = visibleEntries.sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
      const match = sectionMap.find((item) => item.target === activeEntry.target);
      if (!match) {
        return;
      }

      navLinks.forEach((link) => link.classList.remove("active"));
      match.link.classList.add("active");
      elements.activeSectionLabel.textContent = match.label;
    },
    { threshold: [0.2, 0.45, 0.7] }
  );

  sectionMap.forEach((item) => observer.observe(item.target));
}

function spotlightSection(section) {
  section.classList.remove("section-spotlight");
  void section.offsetWidth;
  section.classList.add("section-spotlight");
  window.setTimeout(() => section.classList.remove("section-spotlight"), 850);
}

function hydrateForm() {
  if (!state.players.length) {
    return;
  }

  elements.tournamentName.value = state.tournamentName;
  elements.playerCount.value = String(state.players.length);
  elements.participants.value = state.players.map((player) => player.name).join("\n");
}

function renderHero(derived) {
  elements.activeTournamentName.textContent = state.tournamentName || t("status.notCreated");
  elements.activeRoundNumber.textContent = String(Math.max(state.currentRoundIndex + 1, 0));
  elements.activePlayerCount.textContent = String(derived.activePlayers.length);
}

function renderControls(derived) {
  const currentRound = state.rounds[state.currentRoundIndex];
  const completedMatches = currentRound
    ? currentRound.matches.filter((match) => match.result && match.result.completed).length
    : 0;

  elements.completedMatchesLabel.textContent = currentRound
    ? `${completedMatches}/${currentRound.matches.length}`
    : "0";

  if (!state.players.length) {
    elements.statusLabel.textContent = t("status.waitingForSetup");
  } else if (!currentRound) {
    elements.statusLabel.textContent = t("status.readyRound1");
  } else {
    elements.statusLabel.textContent = isRoundComplete(currentRound)
      ? t("status.roundComplete", { round: currentRound.roundNumber })
      : t("status.roundInProgress", { round: currentRound.roundNumber });
  }

  elements.statusLabelSidebar.textContent = elements.statusLabel.textContent;
}

function renderPlayersManager(derived) {
  if (!state.players.length) {
    elements.playersManager.className = "players-manager empty-state";
    elements.playersManager.textContent = t("empty.playersManager");
    return;
  }

  elements.playersManager.className = "players-manager";
  elements.playersManager.innerHTML = "";

  state.players.forEach((player) => {
    const stats = derived.statsById.get(player.id);
    const row = document.createElement("div");
    row.className = `player-management-row ${player.status === "removed" ? "removed" : ""}`.trim();

    row.innerHTML = `
      <div class="player-management-meta">
        <strong>${escapeHtml(player.name)}</strong>
        <span class="muted-copy">${formatTournamentPoints(stats.points)} ${t("misc.pointsShort")} - ${t("misc.winsLossesShort", { wins: stats.wins, losses: stats.losses })} - ${t("misc.scoreLabel")} ${formatDifference(stats.scoreFor - stats.scoreAgainst)}</span>
      </div>
      <div class="actions">
        <span class="status-pill ${player.status === "removed" ? "removed" : "active"}">${player.status === "removed" ? t("status.withdrawn") : t("status.active")}</span>
        <button type="button" class="btn ${player.status === "removed" ? "btn-secondary" : "btn-danger"} remove-player-btn" data-player-id="${player.id}" ${player.status === "removed" ? "disabled" : ""}>
          ${player.status === "removed" ? t("status.removed") : t("actions.removePlayer")}
        </button>
      </div>
    `;

    elements.playersManager.appendChild(row);
  });

  elements.playersManager.querySelectorAll(".remove-player-btn").forEach((button) => {
    button.addEventListener("click", () => openRemovePlayerDialog(button.dataset.playerId));
  });
}

function renderPairings(derived) {
  const round = state.rounds[state.currentRoundIndex];

  if (!round) {
    elements.pairingsSubtitle.textContent = t("pairings.noneGenerated");
    elements.pairingsContainer.className = "pairings-container empty-state";
    elements.pairingsContainer.textContent = t("pairings.generateToView");
    updatePairingsScrollButton();
    return;
  }

  elements.pairingsSubtitle.textContent = t("pairings.roundLiveResults", { round: round.roundNumber });
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

    card.querySelector(".versus").textContent = t("match.vs");
    card.querySelector(".sets-header strong").textContent = t("match.setScores");
    card.querySelector(".add-set-btn").textContent = t("actions.addSet");
    card.querySelector(".preview-label").textContent = t("match.livePreview");
    card.querySelector(".preview-summary").textContent = t("match.addSetsToCalculate");
    card.querySelector(".preview-chip:nth-child(1) .chip-label").textContent = t("table.sets");
    card.querySelector(".preview-chip:nth-child(2) .chip-label").textContent = t("table.points");
    card.querySelector(".preview-chip:nth-child(3) .chip-label").textContent = t("table.scoring");

    badge.textContent = t("match.tableLabel", { table: match.table });
    status.textContent = match.result && match.result.completed ? t("status.saved") : t("status.pending");
    card.classList.toggle("completed", Boolean(match.result && match.result.completed));

    playerNames[0].textContent = player1 ? player1.name : t("status.unknown");
    playerPoints[0].textContent = `${formatTournamentPoints(player1Stats.points)} ${t("misc.pointsShort")}`;

    if (!player2) {
      playerNames[1].textContent = t("match.bye");
      playerPoints[1].innerHTML = `<span class="bye-pill">${t("match.automaticWin")}</span>`;
      setsList.innerHTML = `<div class="set-row"><span class="set-label">${t("match.bye")}</span><span class="muted-copy">${t("match.noSetEntryRequired")}</span></div>`;
      previewSummary.textContent = t("match.automaticMatchWinApplied");
      previewSets.textContent = "0 - 0";
      previewPoints.textContent = "0 - 0";
      previewAward.textContent = "2.00 - 0.00";
      addSetButton.disabled = true;
      saveButton.disabled = true;
      saveButton.textContent = t("match.byeApplied");
      status.textContent = t("status.completed");
      card.classList.add("completed");
    } else {
      playerNames[1].textContent = player2.name;
      playerPoints[1].textContent = `${formatTournamentPoints(player2Stats.points)} ${t("misc.pointsShort")}`;
      saveButton.textContent = match.result && match.result.completed ? t("actions.updateResult") : t("actions.saveResult");
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
    elements.leaderboardBody.innerHTML = `<tr><td colspan="9" class="table-empty">${t("empty.leaderboard")}</td></tr>`;
    return;
  }

  elements.leaderboardBody.innerHTML = derived.leaderboardPlayers
    .map((player, index) => {
      const stats = derived.statsById.get(player.id);
      const opposition = stats.opponents.length
        ? stats.opponents.map((opponentId) => getPlayerById(opponentId)?.name || t("status.unknown")).join(", ")
        : t("empty.noOpponents");

      return `
        <tr class="${player.status === "removed" ? "withdrawn-row" : ""}">
          <td>${index + 1}</td>
          <td>${escapeHtml(player.name)}</td>
          <td><span class="status-pill ${player.status === "removed" ? "removed" : "active"}">${player.status === "removed" ? t("status.withdrawn") : t("status.active")}</span></td>
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
    elements.historySelection.textContent = t("empty.historySelection");
    elements.globalRankingBody.innerHTML = `<tr><td colspan="8" class="table-empty">${t("empty.globalRanking")}</td></tr>`;
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
        <span class="muted-copy">${formatDate(tournament.archivedAt)} - ${tournament.finalStandings.length} ${t("misc.playersShort")} - ${tournament.rounds.length} ${t("misc.roundsShort")}</span>
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
    : `<tr><td colspan="8" class="table-empty">${t("empty.selectArchived")}</td></tr>`;
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
    alert(t("alerts.enterTournamentName"));
    return;
  }

  if (!Number.isInteger(playerCount) || playerCount < 2) {
    alert(t("alerts.validPlayerCount"));
    return;
  }

  if (participantNames.length !== playerCount) {
    alert(t("alerts.playerCountMismatch", { count: playerCount }));
    return;
  }

  const uniqueNames = new Set(participantNames.map((name) => name.toLowerCase()));
  if (uniqueNames.size !== participantNames.length) {
    alert(t("alerts.uniquePlayerNames"));
    return;
  }

  Object.assign(state, createEmptyTournament(), {
    tournamentName,
    createdAt: new Date().toISOString(),
    players: participantNames.map((name) => createPlayerEntry(name))
  });

  saveCurrentTournament();
  render();
  animateRefresh([elements.tournamentForm, elements.playersManager, elements.leaderboardBody]);
  showToast(t("notifications.tournamentCreatedTitle"), t("notifications.tournamentCreatedBody", { name: tournamentName }), "success");
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

  elements.tournamentName.value = t("misc.sampleTournamentName");
  elements.playerCount.value = String(samplePlayers.length);
  elements.participants.value = samplePlayers.join("\n");
}

function handleGenerateRound() {
  if (!state.players.length) {
    alert(t("alerts.createTournamentBeforeRounds"));
    return;
  }

  const activePlayers = state.players.filter((player) => player.status === "active");
  if (activePlayers.length < 2) {
    alert(t("alerts.atLeastTwoPlayers"));
    return;
  }

  const currentRound = state.rounds[state.currentRoundIndex];
  if (currentRound && !isRoundComplete(currentRound)) {
    alert(t("alerts.saveResultsBeforeRound"));
    return;
  }

  const derived = deriveTournamentData();
  const roundNumber = state.rounds.length + 1;
  const pairings = generateSwissPairings(activePlayers, roundNumber, derived.statsById);

  if (!pairings.length) {
    alert(t("alerts.noValidPairings"));
    return;
  }

  state.rounds.push({
    roundNumber,
    matches: buildMatchesFromPairings(pairings, roundNumber)
  });
  state.currentRoundIndex = state.rounds.length - 1;

  saveCurrentTournament();
  render();
  animateRefresh([elements.pairingsContainer, elements.leaderboardBody]);
  showToast(t("notifications.roundGeneratedTitle"), t("notifications.roundGeneratedBody", { round: roundNumber }), "success");
}

function saveMatchResult(matchId, card) {
  const round = state.rounds[state.currentRoundIndex];
  if (!round) {
    return;
  }

  const match = round.matches.find((entry) => entry.id === matchId);
  if (!match) {
    return;
  }

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
  animateRefresh([elements.pairingsContainer, elements.leaderboardBody]);
  showToast(t("notifications.resultsSavedTitle"), t("notifications.resultsSavedBody"), "success");
}

function openRemovePlayerDialog(playerId) {
  const player = getPlayerById(playerId);
  if (!player) {
    return;
  }

  openModal({
    title: t("modal.removePlayerTitle"),
    body: `
      <p>${t("modal.removePlayerBody", { name: escapeHtml(player.name) })}</p>
      <p class="muted-copy">${t("modal.removePlayerHelp")}</p>
    `,
    actions: [
      { label: t("actions.cancel"), className: "btn-secondary", onClick: closeModal },
      { label: t("actions.removePlayer"), className: "btn-danger", onClick: () => removePlayer(playerId) }
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
  animateRefresh([elements.playersManager, elements.pairingsContainer, elements.leaderboardBody]);
  showToast(t("notifications.playerRemovedTitle"), t("notifications.playerRemovedBody", { name: player.name }), "warning");
}

function archiveTournament() {
  if (!state.players.length) {
    alert(t("alerts.createAndPlayBeforeArchive"));
    return;
  }

  const currentRound = state.rounds[state.currentRoundIndex];
  if (currentRound && !isRoundComplete(currentRound)) {
    alert(t("alerts.finishRoundBeforeArchive"));
    return;
  }

  const derived = deriveTournamentData();
  const completedMatches = state.rounds.flatMap((round) => round.matches).filter((match) => match.result && match.result.completed);
  if (!completedMatches.length) {
    alert(t("alerts.atLeastOneCompletedMatch"));
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
  animateRefresh([elements.historySelection, elements.globalRankingBody]);

  openModal({
    title: t("modal.tournamentSavedTitle"),
    body: t("modal.tournamentSavedBody", { name: escapeHtml(snapshot.tournamentName) }),
    actions: [{ label: t("actions.close"), className: "btn-primary", onClick: closeModal }]
  });
  showToast(t("notifications.tournamentArchivedTitle"), t("notifications.tournamentArchivedBody", { name: snapshot.tournamentName }), "success");
}

function openResetDialog() {
  if (!state.players.length && !elements.participants.value.trim()) {
    alert(t("alerts.noTournamentDataReset"));
    return;
  }

  openModal({
    title: t("modal.resetTitle"),
    body: `
      <p>${t("modal.resetBody")}</p>
      <p class="muted-copy">${t("modal.resetHelp")}</p>
    `,
    actions: [
      { label: t("actions.cancel"), className: "btn-secondary", onClick: closeModal },
      { label: t("actions.keepPlayerList"), className: "btn-secondary", onClick: () => resetTournament(true) },
      { label: t("actions.clearEverything"), className: "btn-danger", onClick: () => resetTournament(false) }
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
  animateRefresh([
    elements.playersManager,
    elements.pairingsContainer,
    elements.leaderboardBody,
    elements.historySelection
  ]);
  showToast(t("notifications.tournamentResetTitle"), keepPlayers ? t("notifications.tournamentResetKeepBody") : t("notifications.tournamentResetClearBody"), "info");
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
    alert(t("alerts.addPlayersBeforeSave"));
    return;
  }

  openModal({
    title: t("modal.savePlayersTitle"),
    body: `
      <form id="savePlayersForm" class="inline-form">
        <label class="field">
          <span>${t("modal.groupName")}</span>
          <input id="playerGroupName" type="text" placeholder="${t("placeholders.groupName")}">
        </label>
        <p class="muted-copy">${t("modal.savePlayersHelp", { count: playersToSave.length })}</p>
      </form>
    `,
    actions: [
      { label: t("actions.cancel"), className: "btn-secondary", onClick: closeModal },
      {
        label: t("actions.savePlayersConfirm"),
        className: "btn-primary",
        onClick: () => {
          const groupName = document.getElementById("playerGroupName").value.trim();
          if (!groupName) {
            alert(t("alerts.enterGroupName"));
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
          showToast(t("notifications.playersSavedTitle"), t("notifications.playersSavedBody", { name: groupName }), "success");
        }
      }
    ]
  });
}

function openLoadPlayersDialog() {
  if (!playerGroups.length) {
    alert(t("alerts.noSavedPlayerGroups"));
    return;
  }

  const groupsMarkup = playerGroups
    .map(
      (group) => `
        <div class="group-card">
          <div class="history-meta">
            <strong>${escapeHtml(group.name)}</strong>
            <span class="muted-copy">${group.players.length} ${t("misc.playersShort")} - ${t("misc.savedOn", { date: formatDate(group.createdAt) })}</span>
          </div>
          <div class="actions">
            <button type="button" class="btn btn-secondary load-group-btn" data-group-id="${group.id}">${t("actions.loadGroupPlayers")}</button>
            <button type="button" class="btn btn-danger delete-group-btn" data-group-id="${group.id}">${t("actions.delete")}</button>
          </div>
        </div>
      `
    )
    .join("");

  openModal({
    title: t("modal.loadPlayersTitle"),
    body: `<div class="modal-list">${groupsMarkup}</div>`,
    actions: [{ label: t("actions.close"), className: "btn-secondary", onClick: closeModal }]
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
  if (!group) {
    return;
  }

  elements.playerCount.value = String(group.players.length);
  elements.participants.value = group.players.map((player) => player.name).join("\n");
  closeModal();
  animateRefresh([elements.tournamentForm]);
  showToast(t("notifications.playersLoadedTitle"), t("notifications.playersLoadedBody", { name: group.name }), "info");
}

function deletePlayerGroup(groupId) {
  playerGroups = playerGroups.filter((group) => group.id !== groupId);
  savePlayerGroups();
  closeModal();
  render();
  showToast(t("notifications.playerGroupDeletedTitle"), t("notifications.playerGroupDeletedBody"), "warning");
}

function openTournamentHistoryDialog() {
  if (!tournamentHistory.length) {
    alert(t("alerts.noSavedTournaments"));
    return;
  }

  const markup = tournamentHistory
    .map(
      (tournament) => `
        <div class="history-card">
          <div class="history-meta">
            <strong>${escapeHtml(tournament.tournamentName)}</strong>
            <span class="muted-copy">${formatDate(tournament.archivedAt)} - ${tournament.rounds.length} ${t("misc.roundsShort")} - ${tournament.finalStandings.length} ${t("misc.playersShort")}</span>
          </div>
          <div class="actions">
            <button type="button" class="btn btn-secondary inspect-history-btn" data-history-id="${tournament.id}">${t("actions.viewStandings")}</button>
            <button type="button" class="btn btn-danger delete-history-btn" data-history-id="${tournament.id}">${t("actions.delete")}</button>
          </div>
        </div>
      `
    )
    .join("");

  openModal({
    title: t("modal.tournamentHistoryTitle"),
    body: `<div class="modal-list">${markup}</div>`,
    actions: [{ label: t("actions.close"), className: "btn-secondary", onClick: closeModal }]
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
  if (!tournament) {
    return;
  }

  const standingsMarkup = tournament.finalStandings
    .map(
      (standing) => `
        <div class="history-card">
          <div class="history-meta">
            <strong>#${standing.rank} ${escapeHtml(standing.name)}</strong>
            <span class="muted-copy">${standing.status === "removed" ? t("status.withdrawn") : t("status.active")} - ${formatTournamentPoints(standing.points)} ${t("misc.pointsShort")} - ${t("misc.winsLossesShort", { wins: standing.wins, losses: standing.losses })} - ${t("misc.scoreLabel")} ${formatDifference(standing.scoreDifference)}</span>
          </div>
        </div>
      `
    )
    .join("");

  openModal({
    title: tournament.tournamentName,
    body: `<div class="modal-list">${standingsMarkup}</div>`,
    actions: [{ label: t("actions.back"), className: "btn-secondary", onClick: openTournamentHistoryDialog }]
  });
}

function deleteTournamentHistory(historyId) {
  tournamentHistory = tournamentHistory.filter((tournament) => tournament.id !== historyId);
  selectedHistoryIds = selectedHistoryIds.filter((id) => id !== historyId);
  saveTournamentHistory();
  saveSelectedHistoryIds();
  closeModal();
  render();
  showToast(t("notifications.historyDeletedTitle"), t("notifications.historyDeletedBody"), "warning");
}

function exportStandingsCsv() {
  if (!state.players.length) {
    alert(t("alerts.createTournamentBeforeExport"));
    return;
  }

  const derived = deriveTournamentData();
  const rows = [
    ["Rank", t("table.player"), t("table.status"), t("table.points"), t("table.wins"), t("table.losses"), t("table.setsDiff"), t("table.scoresDiff")],
    ...derived.leaderboardPlayers.map((player, index) => {
      const stats = derived.statsById.get(player.id);
      return [
        index + 1,
        player.name,
        player.status === "removed" ? t("status.withdrawn") : t("status.active"),
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
  link.download = `${slugify(state.tournamentName || "tournament")}-standings.csv`;
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
    row.querySelector(".set-label").textContent = t("match.setLabel", { index: index + 1 });
    inputs[0].value = String(set.player1Score);
    inputs[1].value = String(set.player2Score);
    inputs[0].setAttribute("aria-label", t("match.topPlayerSetScore"));
    inputs[1].setAttribute("aria-label", t("match.bottomPlayerSetScore"));
    removeButton.setAttribute("aria-label", t("actions.removeSet"));

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

  return String(Math.floor(parsed));
}

function validateSets(sets) {
  const activeSets = normalizeEnteredSets(sets);
  if (!activeSets.length) {
    return { valid: false, message: t("alerts.addSetBeforeSaving") };
  }

  for (const set of activeSets) {
    if (!Number.isInteger(set.player1Score) || !Number.isInteger(set.player2Score) || set.player1Score < 0 || set.player2Score < 0) {
      return { valid: false, message: t("alerts.setScoresWholeNumbers") };
    }

    if (set.player1Score === set.player2Score) {
      return { valid: false, message: t("alerts.setWinnerRequired") };
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
    previewSummary.textContent = t("match.topPlayerWinning");
    applyWinnerClasses(playerRows, summary.setsWonPlayer1, summary.setsWonPlayer2);
  } else if (summary.winner === "player2") {
    previewSummary.textContent = t("match.bottomPlayerWinning");
    applyWinnerClasses(playerRows, summary.setsWonPlayer1, summary.setsWonPlayer2);
  } else {
    previewSummary.textContent = t("match.drawOnSets");
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

  // Scoring model:
  // - each set won grants 0.5 points
  // - match win grants 2 points, or a draw grants 1 point each
  // - every rally point scored across all sets grants 0.05 points
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
      if (!match.result || !match.result.completed) {
        return;
      }

      const player1Stats = statsById.get(match.player1Id);
      const player2Stats = statsById.get(match.player2Id);
      if (!player1Stats) {
        return;
      }

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

      if (!player2Stats) {
        return;
      }

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

  // When a player is withdrawn mid-round, only unfinished pairings are rebuilt.
  // Completed results remain locked, and the remaining active players are paired
  // again using their latest derived standings so the Swiss flow stays coherent.
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

  // Player IDs are persisted in tournament history, so aggregation uses stable
  // identities instead of player names when merging multiple past tournaments.
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
  elements.modalTitle.textContent = t("modal.dialog");
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

function animateRefresh(nodes) {
  nodes.filter(Boolean).forEach((node) => {
    node.classList.remove("flash-update");
    void node.offsetWidth;
    node.classList.add("flash-update");
    window.setTimeout(() => node.classList.remove("flash-update"), 900);
  });
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
  return new Date(value).toLocaleDateString(currentLanguage === "es" ? "es-ES" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
