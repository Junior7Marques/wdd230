const copyright = document.querySelector('#copyright');
copyright.textContent = `© ${new Date().getFullYear()}`;

const lastupdate = document.querySelector('#lastupdate');
const options1 = {month: 'numeric',day: 'numeric', year: 'numeric' , hour:'numeric', minute: 'numeric'};
let oLastModif = new Date(document.lastModified).toLocaleDateString('en-US', options1);
lastupdate.textContent = `${oLastModif}`