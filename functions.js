const SITE = document.querySelector('.site');
console.log("Site:" , SITE)
const TRIGGER = document.querySelector('.trigger');
console.log("Trigger osztályú gomb: ")
/**Függvény létrehozás
* 1.) function
* 2.) szóköz
* 3.) függvény neve pl myFunction
* 4.) Kerek zárójel, ide kerülhet paraméter milyen paraméterekkel dolgfozzon a függvény
*/
  

function revealMenu() {
    SITE.classList.toggle('reveal');
   TRIGGER.innerHTML == 'Close menu' ? TRIGGER.innerHTML = 'Open menu' : TRIGGER.innerHTML = 'Close menu';
}


/*A conditional vagyis feltétele operátor, ami 3 bemenetet vár,
első: felvétel
második: any vagy bármi
harmadik: any vagy bármi
működése 
*/
TRIGGER.addEventListener('click', revealMenu, false);

