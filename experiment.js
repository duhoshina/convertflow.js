(function () {
  // Helper para pegar parâmetros de URL
  function getQueryParams(url) {
    const queryString = url.split("?")[1] || "";
    const params = {};
    queryString.split("&").forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key) {
        params[key] = decodeURIComponent(value || "");
      }
    });
    return params;
  }

  // Extrai parâmetros da URL do script
  const scriptUrl = document.currentScript.src;
  const params = getQueryParams(scriptUrl);
  const experimentId = params.experimentId || "default-exp-id";
  const elementId = params.elementId || "default-element-id";

  // Simula a chamada a uma API para obter os dados do experimento
  function fetchExperimentData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeData = {
          variations: [
            { id: "A", color: "blue", text: "Compre Agora" },
            { id: "B", color: "green", text: "Saiba Mais" },
          ],
        };

        const assignedVariation =
          fakeData.variations[Math.random() > 0.5 ? 0 : 1];
        resolve(assignedVariation);
      }, 1000);
    });
  }

  // Atualiza o botão com os dados do experimento
  function updateButtonWithExperiment(experimentData) {
    const button = document.getElementById(elementId);
    if (button) {
      button.style.backgroundColor = experimentData.color;
      button.innerText = experimentData.text;
      button.onclick = () => {
        console.log(
          `Conversão registrada para variação ${experimentData.id} do experimento ${experimentId}`
        );
      };
    }
  }

  // Inicializa o script
  function init() {
    fetchExperimentData().then(updateButtonWithExperiment);
  }

  // Inicializa o script após o carregamento completo do DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
