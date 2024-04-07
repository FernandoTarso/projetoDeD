const botaoMaisProjetos = document.querySelector(".botao-mais");
const botaoEsconder = document.querySelector(".botao-esconder");
const projetosInativos = document.querySelectorAll(".hide");
const projetosAtivos = document.querySelectorAll(".show");
projetosInativos.forEach(function (projetoInativo) {
  console.log(projetoInativo);
});
botaoMaisProjetos.addEventListener("click", () => {
  mostrarMaisProjetos();
  esconderBotao();
});
function esconderBotao() {
  botaoMaisProjetos.classList.add("hide");
}
function mostrarMaisProjetos() {
  projetosInativos.forEach((projetoInativo) => {
    projetoInativo.classList.add("show");
  });
}

botaoEsconder.addEventListener("click", () => {
  esconderMaisProjetos();
  mostrarBotao();
});
function mostrarBotao() {
  botaoMaisProjetos.classList.remove("hide");
}
function esconderMaisProjetos() {
  projetosInativos.forEach((projetoInativo) => {
    projetoInativo.classList.remove("show");
  });
  projetosInativos.forEach(function (projetoInativo) {
    console.log(projetoInativo);
  });
}
