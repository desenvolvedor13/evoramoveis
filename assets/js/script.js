// Selecionar elementos
const larguraInput = document.getElementById("largura");
const alturaInput = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const colorBoxes = document.querySelectorAll(".color-box");
const productImage = document.getElementById("product-image");

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

    // Trocar imagem do produto
    const novaImg = box.dataset.img;
    productImage.src = `assets/img/mdf_${corSelecionada}.webp`;
    productImage.alt = `MDF cor ${corSelecionada}`;

    calcular();
  });
});

// Atualiza ao alterar dimensões
larguraInput.addEventListener("input", calcular);
alturaInput.addEventListener("input", calcular);
// Selecionar elementos
const larguraInput = document.getElementById("largura");
const alturaInput = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const colorBoxes = document.querySelectorAll(".color-box");
const productImage = document.getElementById("product-image");

let precoM2 = 0;
let corSelecionada = "";

// Função para calcular o preço
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
    
    // Adicionar classe de destaque
    resultado.classList.add("highlight");
  } else {
    resultado.innerHTML = "Selecione uma cor para calcular o preço.";
    resultado.classList.remove("highlight");
  }
}

// Função para selecionar cor
function selecionarCor(box) {
  // Remover seleção anterior
  colorBoxes.forEach(b => b.classList.remove("selected"));
  
  // Adicionar seleção atual
  box.classList.add("selected");

  // Atualizar preço e cor selecionada
  precoM2 = parseFloat(box.dataset.preco);
  corSelecionada = box.dataset.nome;

  // Trocar imagem do produto
  const novaImg = box.dataset.img;
  if (novaImg) {
    productImage.src = novaImg;
    productImage.alt = `MDF cor ${corSelecionada}`;
  }

  // Calcular preço
  calcular();
}

// Inicializar eventos após carregamento da página
document.addEventListener("DOMContentLoaded", function() {
  // Adicionar eventos de clique nas caixas de cor
  colorBoxes.forEach(box => {
    box.addEventListener("click", () => selecionarCor(box));
  });

  // Atualizar ao alterar dimensões
  larguraInput.addEventListener("input", calcular);
  alturaInput.addEventListener("input", calcular);
  
  // Adicionar evento ao botão comprar
  const comprarBtn = document.querySelector(".comprar");
  if (comprarBtn) {
    comprarBtn.addEventListener("click", function() {
      if (precoM2 > 0) {
        alert("Redirecionando para a página de compra...");
        // Aqui você pode adicionar a lógica de redirecionamento
      } else {
        alert("Por favor, selecione uma cor primeiro.");
      }
    });
  }
});