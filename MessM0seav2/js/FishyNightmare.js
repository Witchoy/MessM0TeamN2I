
// Variables principales
let fishyPoints = 0;
let clicValue = 1; // Valeur d'un clic
let autoProduction = 0; // fishyPoints par seconde

// Coûts des améliorations
let prixClic = 10;
let prixAuto = 50;

// Références aux éléments HTML
const scoreElem = document.getElementById("score");
const prixClicElem = document.getElementById("prix-clic");
const prixAutoElem = document.getElementById("prix-auto");
const poisson1 = document.getElementById("Poisson1");
const poisson2 = document.getElementById("Poisson2");
const poisson8 = document.getElementById("Poisson8");

const poisson9 = document.getElementById("Poisson9");

const poisson2div = document.getElementById("poisson2shop");
const textePoisson2shop = document.getElementById("prix-poisson2")


const poisson3 = document.getElementById("Poisson3");
const poisson4 = document.getElementById("Poisson4");
const poisson5 = document.getElementById("Poisson5");


const poisson6 = document.getElementById("Poisson6");
const poisson7 = document.getElementById("Poisson7");

const poisson3div = document.getElementById("poisson3shop");
const poisson6div = document.getElementById("poisson6shop");

const textePoisson3shop = document.getElementById("prix-poisson3")

const fishyZone = document.getElementById("main");
const hauteur = fishyZone.offsetHeight;

const unFishyZone = document.getElementById("main");

// Fonction pour mettre à jour l'affichage des fishyPoints
function updateScore() {
    scoreElem.textContent = `Fishy Points : ${fishyPoints}`;
}

poisson1.onclick = () => {
    fishyPoints += clicValue;
    updateScore();
};

poisson2.onclick = () => {
    fishyPoints += clicValue*2;
    const tache = document.createElement('div');
    tache.classList.add('tache');
    document.addEventListener('click', function encreOnClick(event) {
        // Crée un nouvel élément

        const tache = document.createElement('div');
        tache.classList.add('tache');

        // Positionne l'élément à la position du clic
        tache.style.left = `${event.clientX}px`;
        tache.style.top = `${event.clientY}px`;

        // Ajoute l'élément au corps du document
        document.body.appendChild(tache);

        // Supprimer la tâche après 2 secondes
        setTimeout(() => {
            tache.style.opacity = '0'; // Début de la transition pour disparaître
            setTimeout(() => tache.remove(), 500); // Attendre la fin de la transition avant de retirer complètement
        }, 7000); // 2000ms = 2 secondes

        document.removeEventListener('click', encreOnClick);
    });
    updateScore();

};
poisson8.onclick = () => {
    fishyPoints += clicValue*2;
    const tache = document.createElement('div');
    tache.classList.add('tache');
    document.addEventListener('click', function encreOnClick(event) {
        // Crée un nouvel élément

        const tache = document.createElement('div');
        tache.classList.add('tache');

        // Positionne l'élément à la position du clic
        tache.style.left = `${event.clientX}px`;
        tache.style.top = `${event.clientY}px`;

        // Ajoute l'élément au corps du document
        document.body.appendChild(tache);

        // Supprimer la tâche après 2 secondes
        setTimeout(() => {
            tache.style.opacity = '0'; // Début de la transition pour disparaître
            setTimeout(() => tache.remove(), 500); // Attendre la fin de la transition avant de retirer complètement
        }, 7000); // 2000ms = 2 secondes

        document.removeEventListener('click', encreOnClick);
    });
    updateScore();

};
poisson9.onclick = () => {
    fishyPoints += clicValue*2;
    const tache = document.createElement('div');
    tache.classList.add('tache');
    document.addEventListener('click', function encreOnClick(event) {
        // Crée un nouvel élément

        const tache = document.createElement('div');
        tache.classList.add('tache');

        // Positionne l'élément à la position du clic
        tache.style.left = `${event.clientX}px`;
        tache.style.top = `${event.clientY}px`;

        // Ajoute l'élément au corps du document
        document.body.appendChild(tache);

        // Supprimer la tâche après 2 secondes
        setTimeout(() => {
            tache.style.opacity = '0'; // Début de la transition pour disparaître
            setTimeout(() => tache.remove(), 500); // Attendre la fin de la transition avant de retirer complètement
        }, 7000); // 2000ms = 2 secondes

        document.removeEventListener('click', encreOnClick);
    });
    updateScore();

};

poisson3.onclick = () => {
    fishyPoints += clicValue*3;
    const item1 = document.getElementById("main");
    const item2 = document.getElementById("sidebar");

    swapElements(item1, item2);

    function swapElements(el1, el2) {
        const tempOrder = window.getComputedStyle(el1).order;
        el1.style.order = window.getComputedStyle(el2).order;
        el2.style.order = tempOrder;
    }
    const items = document.querySelectorAll('.item');

    const nonitems = document.querySelectorAll('.itemNotAvailable')
    // Convertir la NodeList en un tableau pour pouvoir l'utiliser avec sort
    let itemsArray = Array.from(items);
    itemsArray.push(...Array.from(nonitems));
    // Fonction pour mélanger un tableau
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Échanger les éléments
        }
    }

    // Mélanger les éléments
    shuffleArray(itemsArray);

    // Trouver le parent des éléments (ici, le conteneur)
    const parent = document.querySelector("sidebar");  // Utilisez le bon sélecteur pour votre conteneur

    // Vider le parent avant de réinsérer les éléments
    parent.innerHTML = '';

    // Créer un titre pour le parent
    const title = document.createElement('h2');  // Vous pouvez utiliser 'h3', 'h1', etc.
    title.textContent = 'Améliorations';  // Le texte du titre que vous voulez afficher

    // Ajouter le titre en premier dans le parent
    parent.appendChild(title);
    itemsArray.forEach(item => parent.appendChild(item));


    updateScore();

}
poisson4.onclick = () => {
    fishyPoints += clicValue*3;
    const item1 = document.getElementById("main");
    const item2 = document.getElementById("sidebar");
    swapElements(item1, item2);


    function swapElements(el1, el2) {
        const tempOrder = window.getComputedStyle(el1).order;
        el1.style.order = window.getComputedStyle(el2).order;
        el2.style.order = tempOrder;
    }
    const items = document.querySelectorAll('.item');
    const nonitems = document.querySelectorAll('.itemNotAvailable')
    // Convertir la NodeList en un tableau pour pouvoir l'utiliser avec sort
    let itemsArray = Array.from(items);
    itemsArray.push(...Array.from(nonitems));
    // Fonction pour mélanger un tableau
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Échanger les éléments
        }
    }

    // Mélanger les éléments
    shuffleArray(itemsArray);

    // Trouver le parent des éléments (ici, le conteneur)
    const parent = document.getElementById("sidebar");  // Utilisez le bon sélecteur pour votre conteneur

    // Vider le parent avant de réinsérer les éléments
    parent.innerHTML = '';

    // Créer un titre pour le parent
    const title = document.createElement('h2');  // Vous pouvez utiliser 'h3', 'h1', etc.
    title.textContent = 'Améliorations';  // Le texte du titre que vous voulez afficher

    // Ajouter le titre en premier dans le parent
    parent.appendChild(title);
    // Réinsérer les éléments mélangés dans le parent
    itemsArray.forEach(item => parent.appendChild(item));


    updateScore();

}
poisson5.onclick = () => {
    fishyPoints += clicValue*3;
    const item1 = document.getElementById("main");
    const item2 = document.getElementById("sidebar");
    swapElements(item1, item2);


    function swapElements(el1, el2) {
        const tempOrder = window.getComputedStyle(el1).order;
        el1.style.order = window.getComputedStyle(el2).order;
        el2.style.order = tempOrder;
    }

    const items = document.querySelectorAll('.item');

    const nonitems = document.querySelectorAll('.itemNotAvailable')
    // Convertir la NodeList en un tableau pour pouvoir l'utiliser avec sort
    let itemsArray = Array.from(items);
    itemsArray.push(...Array.from(nonitems));

    // Fonction pour mélanger un tableau
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Échanger les éléments
        }
    }

    // Mélanger les éléments
    shuffleArray(itemsArray);

    // Trouver le parent des éléments (ici, le conteneur)
    const parent = document.getElementById("sidebar");  // Utilisez le bon sélecteur pour votre conteneur

    // Vider le parent avant de réinsérer les éléments
    parent.innerHTML = '';

    // Créer un titre pour le parent
    const title = document.createElement('h2');  // Vous pouvez utiliser 'h3', 'h1', etc.
    title.textContent = 'Améliorations';  // Le texte du titre que vous voulez afficher

    // Ajouter le titre en premier dans le parent
    parent.appendChild(title);
    // Réinsérer les éléments mélangés dans le parent
    itemsArray.forEach(item => parent.appendChild(item));

    updateScore();

}

poisson6.onclick = () => {
    fishyPoints += clicValue*4;
    const item1 = document.getElementById("main");
    const item2 = document.getElementById("sidebar");
    item1.style.flex = Math.random() * 4;
    item2.style.flex = Math.random() * 4;

    updateScore();

}
poisson7.onclick = () => {
    fishyPoints += clicValue*4;
    const item1 = document.getElementById("main");
    const item2 = document.getElementById("sidebar");
    item1.style.flex = Math.random() * 4;
    item2.style.flex = Math.random() * 4;

    updateScore();

}

// Acheter une amélioration
function acheter(type) {
    if (type === "clic" && fishyPoints >= prixClic) {
        fishyPoints -= prixClic;
        clicValue += 1;
        prixClic = Math.floor(prixClic * 1.5); // Augmente le prix
        prixClicElem.textContent = prixClic;
    } else if (type === "auto" && fishyPoints >= prixAuto) {
        fishyPoints -= prixAuto;
        autoProduction += 1;
        prixAuto = Math.floor(prixAuto * 1.5); // Augmente le prix
        prixAutoElem.textContent = prixAuto;
    }else if (type === "poisson2" && fishyPoints >= 100 && poisson2div.classList.contains('item')){
        fishyPoints-=100;
        poisson2div.classList.remove('item');
        poisson2div.classList.add('itemNotAvailable');
        poisson2.classList.remove('fishLock');
        poisson2.classList.add('fish')
        poisson8.classList.remove('fishLock');
        poisson8.classList.add('fish')
        poisson9.classList.remove('fishLock');
        poisson9.classList.add('fish')
        textePoisson2shop.textContent = "Cet objet a déjà été acheté";

    }else if (type === "poisson3" && fishyPoints >= 300 && poisson3div.classList.contains('item')){
        fishyPoints-=300;
        poisson3div.classList.remove('item');
        poisson3div.classList.add('itemNotAvailable');
        poisson3.classList.remove('fishLock');
        poisson3.classList.add('fish');
        poisson4.classList.remove('fishLock');
        poisson4.classList.add('fish');
        poisson5.classList.remove('fishLock');
        poisson5.classList.add('fish');
        textePoisson3shop.textContent = "Cet objet a déjà été acheté";

    }else if (type === "poisson6" && fishyPoints >= 1000 && poisson6div.classList.contains('item')){
        fishyPoints-=1000;
        poisson6div.classList.remove('item');
        poisson6div.classList.add('itemNotAvailable');
        poisson6.classList.remove('fishLock');
        poisson6.classList.add('fish');
        poisson7.classList.remove('fishLock');
        poisson7.classList.add('fish');
        textePoisson6shop.textContent = "Cet objet a déjà été acheté";

    }else if(type === "eau"){
        fishyPoints =Math.floor(fishyPoints/2);
    }
    updateScore();
}
// Fonction pour déplacer l'image aléatoirement
function deplacerAleatoirementPoisson1() {
    let x;
    let y;
    if(window.getComputedStyle(document.getElementById("main")).order ==2){
        x = Math.floor(Math.random() * (fishyZone.offsetWidth+1) );
        y = Math.random() * hauteur;

        poisson1.style.left = `${x}px`;
    }else{
        x = Math.random() * fishyZone.offsetWidth;


        y = Math.random() * hauteur;

        poisson1.style.left = `${x}px`;
    }
    poisson1.style.top = `${y}px`;
}

function deplacerAleatoirementPoisson2(){
    let x;
    let y;
    if(window.getComputedStyle(document.getElementById("main")).order==2){
        x = Math.floor(Math.random() * (fishyZone.offsetWidth+1) );


        y = Math.random() * hauteur;

        poisson2.style.left = `${x}px`;
    }else{
        x = Math.random() * fishyZone.offsetWidth;


        y = Math.random() * hauteur;

        poisson2.style.left = `${x}px`;
    }
    poisson2.style.top = `${y}px`;

    if(window.getComputedStyle(document.getElementById("main")).order==2){
        x = Math.floor(Math.random() * (fishyZone.offsetWidth+1) );


        y = Math.random() * hauteur;

        poisson8.style.left = `${x}px`;
    }else{
        x = Math.random() * fishyZone.offsetWidth;


        y = Math.random() * hauteur;

        poisson8.style.left = `${x}px`;
    }
    poisson8.style.top = `${y}px`;

    if(window.getComputedStyle(document.getElementById("main")).order==2){
        x = Math.floor(Math.random() * (fishyZone.offsetWidth+1) );


        y = Math.random() * hauteur;

        poisson9.style.left = `${x}px`;
    }else{
        x = Math.random() * fishyZone.offsetWidth;


        y = Math.random() * hauteur;

        poisson9.style.left = `${x}px`;
    }
    poisson9.style.top = `${y}px`;
}

function deplacerAleatoirementPoisson3(){
    let x;
    let y;
    if(window.getComputedStyle(document.getElementById("main")).order ==2){
        x = Math.floor(Math.random() * (fishyZone.offsetWidth+1) );


        y = Math.random() * hauteur;

        poisson3.style.left = `${x}px`;
    }else{
        x = Math.random() * fishyZone.offsetWidth;


        y = Math.random() * hauteur;

        poisson3.style.left = `${x}px`;
    }
    poisson3.style.top = `${y}px`;
    if(window.getComputedStyle(document.getElementById("main")).order ==2){
        x = Math.floor(Math.random() * (fishyZone.offsetWidth+1) );


        y = Math.random() * hauteur;

        poisson4.style.left = `${x}px`;
    }else{
        x = Math.random() * fishyZone.offsetWidth;


        y = Math.random() * hauteur;
        poisson4.style.left = `${x}px`;
    }

    poisson4.style.top = `${y}px`;
    if(window.getComputedStyle(document.getElementById("main")).order ==2){
        x = Math.floor(Math.random() * (fishyZone.offsetWidth+1) );


        y = Math.random() * hauteur;
        poisson5.style.left = `${x}px`;

    }else{
        x = Math.random() * fishyZone.offsetWidth;


        y = Math.random() * hauteur;

        poisson5.style.left = `${x}px`;
    }

    poisson5.style.top = `${y}px`;
}

function deplacerAleatoirementPoisson6(){
    let x;
    let y;
    if(window.getComputedStyle(document.getElementById("main")).order ==2){
        x = Math.floor(Math.random() * (fishyZone.offsetWidth+1) );


        y = Math.random() * hauteur;

        poisson6.style.left = `${x}px`;
    }else{
        x = Math.random() * fishyZone.offsetWidth;
        y = Math.random() * hauteur;
        poisson6.style.left = `${x}px`;
    }
    poisson6.style.top = `${y}px`;
    if(window.getComputedStyle(document.getElementById("main")).order ==2){
        x = Math.floor(Math.random() * (fishyZone.offsetWidth+1) );


        y = Math.random() * hauteur;

        poisson7.style.left = `${x}px`;

    }else{
        x = Math.random() * fishyZone.offsetWidth;


        y = Math.random() * hauteur;

        poisson7.style.left = `${x}px`;
    }
    poisson7.style.top = `${y}px`;


}
// Production automatique
setInterval(() => {
    fishyPoints += autoProduction;
    updateScore();
}, 1000);

setInterval(deplacerAleatoirementPoisson1, 700);
setInterval(deplacerAleatoirementPoisson2, 1000);
setInterval(deplacerAleatoirementPoisson3, 900);
setInterval(deplacerAleatoirementPoisson6, 800);



deplacerAleatoirementPoisson1();

