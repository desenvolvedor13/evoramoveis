// Captura as caixas de cor e adiciona a funcionalidade de seleção
const colorBoxes = document.querySelectorAll('.color-box');

colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remover a classe 'selected' de todas as caixas
        colorBoxes.forEach(b => b.classList.remove('selected'));
        
        // Adicionar a classe 'selected' na caixa clicada
        box.classList.add('selected');
    });
});
