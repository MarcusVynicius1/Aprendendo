// Selecione todos os botões "Adicionar ao Carrinho"
const btnsBuy = document.querySelectorAll(".btn-buy");

// Selecione o contador do carrinho
const cartCount = document.querySelector(".cart-count");

// Defina o contador inicial do carrinho
let count = 0;

// Adicione um evento de clique a cada botão "Adicionar ao Carrinho"
btnsBuy.forEach((btn) => {
  btn.addEventListener("click", () => {
    count++; // incrementa o contador
    cartCount.innerText = count; // atualiza o texto do contador
  });
});

// Obtém o botão de abrir a janela modal
var openModalBtn = document.getElementById("open-modal-btn");
var openModalCaBtn = document.getElementById("open-cadastrar-btn");

// Obtém a janela modal
var loginModal = document.getElementById("login-modal");
var cadastroModal = document.getElementById("cadastro-modal");

// Obtém o botão de fechar a janela modal
var closeModalBtn = loginModal.getElementsByClassName("close")[0];
var closeModalCaBtn = cadastroModal.getElementsByClassName("close")[0];

// Define a ação para abrir a janela modal quando o botão for clicado
openModalBtn.onclick = function() {
  loginModal.style.display = "block";
}
openModalCaBtn.onclick = function() {
  cadastroModal.style.display = "block";
}
// Define a ação para fechar a janela modal quando o botão for clicado
closeModalBtn.onclick = function() {
  loginModal.style.display = "none";
}
closeModalCaBtn.onclick = function() {
  cadastroModal.style.display = "none";
}
// Define a ação para fechar a janela modal quando o usuário clicar fora dela
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == cadastroModal) {
    cadastroModal.style.display = "none";
  }
}
