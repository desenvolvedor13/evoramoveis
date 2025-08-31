// Selecionar inputs
const larguraInput = document.getElementById("largura");
const alturaInput = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const colorBoxes = document.querySelectorAll(".color-box");

let precoM2 = 0;
let corSelecionada = "";

// Função para calcular
function calcular() {
  const larguraM = parseFloat(larguraInput.value) / 100;
  const alturaM = parseFloat(alturaInput.value) / 100;

  if (larguraM > 0 && alturaM > 0 && precoM2 > 0) {
    const area = larguraM * alturaM;
    const total = area * precoM2;

    resultado.innerHTML = `
      Cor: <strong>${corSelecionada}</strong> <br>
      Preço por m²: R$ ${precoM2.toFixed(2)} <br>
      Área: ${area.toFixed(2)} m² <br>
      <span style="color:#2f6b47; font-size:1.2rem;">Total: R$ ${total.toFixed(2)}</span>
    `;
  } else {
    resultado.innerHTML = "Selecione uma cor para calcular o preço.";
  }
}

// Seleção da cor
colorBoxes.forEach(box => {
  box.addEventListener("click", () => {
    colorBoxes.forEach(b => b.classList.remove("selected"));
    box.classList.add("selected");

    precoM2 = parseFloat(box.dataset.preco);
    corSelecionada = box.dataset.nome;

    calcular();
  });
});

// Atualiza ao alterar dimensões
larguraInput.addEventListener("input", calcular);
alturaInput.addEventListener("input", calcular);
