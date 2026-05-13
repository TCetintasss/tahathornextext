import { createMockSnapshot } from "./data/mockSnapshot.js";
import { renderApp } from "./ui/renderApp.js";

const root = document.getElementById("root");

const state = {
  phase: "auth",
  playerName: "Komutan Taha",
  snapshot: null,
};

function setState(nextState) {
  Object.assign(state, nextState);
  render();
}

async function login(playerName) {
  setState({ playerName, phase: "loading" });

  await new Promise((resolve) => window.setTimeout(resolve, 1400));
  setState({
    phase: "ready",
    snapshot: createMockSnapshot(playerName),
  });
}

function logout() {
  setState({
    phase: "auth",
    snapshot: null,
  });
}

function render() {
  root.innerHTML = renderApp(state);

  const loginForm = root.querySelector("[data-role='login-form']");
  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const callsign = String(formData.get("callsign") || "Yeni Komutan");
      await login(callsign);
    });
  }

  const logoutButton = root.querySelector("[data-role='logout']");
  if (logoutButton) {
    logoutButton.addEventListener("click", logout);
  }
}

render();
