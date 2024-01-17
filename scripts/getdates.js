const copyright = document.querySelector('#copyright');
copyright.textContent = `© ${new Date().getFullYear()}`;

const lastupdate = document.querySelector('#lastupdate');
const options1 = {month: 'numeric',day: 'numeric', year: 'numeric' , hour:'numeric', minute: 'numeric'};
let oLastModif = new Date(document.lastModified).toLocaleDateString('en-US', options1);
lastupdate.textContent = `${oLastModif}`


// function obterContador() {
//     let contador = localStorage.getItem('contador');
//     return contador ? parseInt(contador) : 0;
//   }

//   // Função para atualizar o contador e exibi-lo
//   function atualizarContador() {
//     let contador = obterContador();
//     contador++;
//     localStorage.setItem('contador', contador);
//     document.getElementById('contador').textContent = `Acessos: ${contador}`;
//   }

//   // Atualizar o contador quando a página é carregada
//   window.onload = function() {
//     atualizarContador();
//   };