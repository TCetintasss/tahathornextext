import { createInitialGameState } from "./core/gameState.js";
import {
  advanceEra,
  applyQuickOrder,
  dispatchMission,
  queueBuildingUpgrade,
  queueShipBuild,
  simulateTick,
} from "./core/simulation.js";
import { renderApp } from "./ui/renderApp.js";

const root = document.getElementById("root");

const state = {
  phase: "auth",
  playerName: "Komutan Taha",
  screen: "overview",
  game: null,
  notice: "",
};

let tickHandle = null;

function setState(nextState) {
  Object.assign(state, nextState);
  render();
}

function mountGame(playerName) {
  state.game = createInitialGameState(playerName);
  state.screen = "overview";
  state.phase = "ready";
  startTicking();
  render();
}

async function login(playerName) {
  setState({ playerName, phase: "loading" });
  await new Promise((resolve) => window.setTimeout(resolve, 1500));
  mountGame(playerName || "Yeni Komutan");
}

function logout() {
  if (tickHandle) {
    window.clearInterval(tickHandle);
    tickHandle = null;
  }
  setState({
    phase: "auth",
    game: null,
    screen: "overview",
  });
}

function startTicking() {
  if (tickHandle) {
    window.clearInterval(tickHandle);
  }
  tickHandle = window.setInterval(() => {
    state.game = simulateTick(state.game, 5);
    render();
  }, 1000);
}

function applyGameUpdate(result) {
  state.game = result.game;
  if (result.message && state.game.logs[0] !== result.message) {
    state.game.logs.unshift(result.message);
    state.game.logs = state.game.logs.slice(0, 16);
  }
  render();
}

function handleAction(action, id) {
  if (action === "logout") {
    logout();
    return;
  }
  if (!state.game) {
    return;
  }
  if (action === "switch-screen") {
    setState({ screen: id });
    return;
  }
  if (action === "upgrade-building") {
    applyGameUpdate(queueBuildingUpgrade(state.game, id));
    return;
  }
  if (action === "queue-ship") {
    applyGameUpdate(queueShipBuild(state.game, id));
    return;
  }
  if (action === "dispatch-mission") {
    applyGameUpdate(dispatchMission(state.game, id));
    return;
  }
  if (action === "quick-order") {
    applyGameUpdate(applyQuickOrder(state.game, id));
    return;
  }
  if (action === "advance-era") {
    applyGameUpdate(advanceEra(state.game));
  }
}

function bindEvents() {
  const loginForm = root.querySelector("[data-role='login-form']");
  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const callsign = String(formData.get("callsign") || "Yeni Komutan");
      await login(callsign);
    });
  }

  root.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", () => {
      handleAction(element.dataset.action, element.dataset.id);
    });
  });
}

function render() {
  root.innerHTML = renderApp(state);
  bindEvents();
}

render();
