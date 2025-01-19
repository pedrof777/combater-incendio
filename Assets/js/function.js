//Espera o conteudo da pagina carregar
window.onload = function () {
  //Fecha e abre o menu mobile
  document.querySelector(".menu_mobile").addEventListener("click", function () {
    if (document.querySelector(".menu nav ul").style.display == "flex") {
      document.querySelector(".menu nav ul").style.display = "none";
    } else {
      document.querySelector(".menu nav ul").style.display = "flex";
    }
  });

  //Seleção do menu ativado
  const menuItems = document.querySelectorAll("nav ul li a");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove a classe 'active' de todos os itens
      document.querySelectorAll("nav ul li ").forEach((li) => li.classList.remove("active"));

      // Adiciona a classe 'active' ao item clicado
      item.parentElement.classList.add("active");
    });
  });

  //Rolagem suave
  // Seleciona os links de navegação
  const links = document.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    // Adiciona o evento de clique em cada link
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Previne o comportamento padrão do link

      // Pega o ID da seção que o link aponta
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Rola suavemente até a seção
      targetSection.scrollIntoView({
        behavior: "smooth", // Define a rolagem suave
        block: "start", // Alinha a seção ao topo da tela
      });
    });
  });
};
