// Captura os elementos do DOM
const modal = document.getElementById("productModal");
const closeBtn = document.querySelector(".close-btn");
const openModalBtns = document.querySelectorAll(".open-modal");

// Elementos internos do Modal
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const freteResult = document.getElementById("freteResult");
const cepInput = document.getElementById("cepInput");

// Abrir modal e injetar dados
openModalBtns.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = button.dataset.price;

    // Atualiza conteúdo do modal
    modalTitle.textContent = name;
    modalPrice.textContent = price;
    freteResult.textContent = ""; // limpa resultado anterior
    cepInput.value = "";

    // Exibe modal
    modal.style.display = "flex";
  });
});

// Fechar modal no botão X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar modal clicando fora da caixa
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});



// Menu hamburguer
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Função de cálculo de frete (simulação)
function calcularFrete() {
  const cep = cepInput.value.trim();

  if (cep.length < 8 || isNaN(cep)) {
    freteResult.textContent = "Por favor, digite um CEP válido.";
    freteResult.style.color = "red";
    return;
  }

  // Mock de resposta (em produção, aqui entraria a API dos Correios)
  freteResult.style.color = "#666";
  freteResult.innerHTML = `
    <strong>PAC:</strong> R$ 15,90 (5 a 7 dias úteis)<br>
    <strong>Sedex:</strong> R$ 28,90 (2 a 3 dias úteis)
  `;
}
