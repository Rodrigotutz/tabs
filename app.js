function openTab(event, tabId) {
    // Esconder todos os conteúdos de tab
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
  
    // Remover a classe "active" de todas as abas
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
  
    // Mostrar o conteúdo da tab selecionada
    document.getElementById(tabId).style.display = "block";
  
    // Adicionar a classe "active" na aba selecionada
    event.currentTarget.classList.add("active");
  }

  // Obtém o valor da aba ativa do localStorage
var activeTab = localStorage.getItem("activeTab");

// Se existir uma aba ativa, abre ela por padrão
if (activeTab) {
  openTab(null, activeTab);
}

function openTab(event, tabId) {
  // Esconder todos os conteúdos de tab
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Remover a classe "active" de todas as abas
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Mostrar o conteúdo da tab selecionada
  document.getElementById(tabId).style.display = "block";

  // Adicionar a classe "active" na aba selecionada
  event.currentTarget.classList.add("active");

  // Armazenar a aba ativa no localStorage
  localStorage.setItem("activeTab", tabId);
}