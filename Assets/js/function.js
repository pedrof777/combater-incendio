//Espera o conteudo da pagina carregar
window.onload = function () {
  //Fecha e abre o menu mobile
  const menus = document.querySelector(".menu nav ul");
  document.querySelector(".menu_mobile").addEventListener("click", function () {
    if (menus.style.display == "flex") {
      menus.style.display = "none";
    } else {
      menus.style.display = "flex";
    }
  });

  // Seleciona todos os links de navegação
  const navLinks = document.querySelectorAll("li");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove a classe 'active' de todos os links
      navLinks.forEach((link) => link.classList.remove("active"));
    });
  });

  // Fecha o menu se a tela for pequena
  const menuItems = document.querySelectorAll("ul li a");
  const menu = document.querySelector("ul");
  const mediaQuery = window.matchMedia("(max-width: 600px)");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (mediaQuery.matches) {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
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
