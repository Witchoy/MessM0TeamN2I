// Remettre la page en haut lors du rechargement
window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0); // Définit la position de défilement en haut à gauche
})


//////////////////////////////////////
// Code pour le Pwasson
//////////////////////////////////////

const boutonImage2 = document.getElementById("boutonImage2");
const boutonImageLayer = document.getElementById("boutonImageLayer");
function placerFish() {
    const y = window.innerHeight*0.8;
    boutonImage2.style.top = `${y}px`;
    boutonImageLayer.style.top = `${y}px`;

}
placerFish();


//////////////////////////////////////
// Code pour la mouette
//////////////////////////////////////
const boutonSeagull = document.getElementById("boutonSeagull");

// Fonction pour déplacer l'image aléatoirement
function deplacerAleatoirement() {
    const x = Math.random() * window.innerWidth * 1.3 - window.innerWidth * 0.2;
    const y = Math.random() * window.innerHeight * 1.3 - window.innerWidth * 0.2;
    boutonSeagull.style.left = `${x}px`;
    boutonSeagull.style.top = `${y}px`;
}

// Fonction à exécuter lors du clic sur l'image
function imageCliquee() {
}

// Déplace l'image toutes les 2 secondes
setInterval(deplacerAleatoirement, 1000);

// Déplace l'image immédiatement au chargement
deplacerAleatoirement();

//////////////////////////////////////
// Code pour les vagues
//////////////////////////////////////

// Récupération du canvas
const canvas = document.getElementById('wavesCanvas');
const ctx = canvas.getContext('2d');

// Ajuster le canvas à la taille de la fenêtre
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = 300; // Hauteur totale des vagues (ajustez si nécessaire)
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Paramètres des vagues
const waveLayers = [
    {
        y: 120, // Position de départ (plus haut pour la première ligne)
        length: 0.02, // Longueur d'onde
        amplitude: 20, // Hauteur de la vague
        frequency: 0.03, // Vitesse de la vague
        color: 'rgba(79, 172, 254, 0.8)', // Couleur avec transparence
    },
    {
        y: 160, // Position pour la deuxième ligne
        length: 0.018,
        amplitude: 25,
        frequency: 0.025,
        color: 'rgba(56, 161, 219, 0.6)',
    },
    {
        y: 200, // Position pour la troisième ligne
        length: 0.016,
        amplitude: 30,
        frequency: 0.02,
        color: 'rgba(13, 87, 170, 0.5)',
    },
    {
        y: 240, // Nouvelle couche
        length: 0.014,
        amplitude: 18,
        frequency: 0.018,
        color: 'rgba(79, 145, 200, 0.4)',
    },
    {
        y: 270, // Nouvelle couche
        length: 0.012,
        amplitude: 15,
        frequency: 0.015,
        color: 'rgba(10, 90, 180, 0.3)',
    },
    {
        y: 290, // Nouvelle couche (profondeur)
        length: 0.01,
        amplitude: 12,
        frequency: 0.01,
        color: 'rgba(5, 50, 150, 0.2)',
    },
];

let increment = 0;

// Dessiner les vagues pour une couche spécifique
function drawWave({ y, length, amplitude, frequency, color }) {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height); // Début en bas à gauche
    ctx.fillStyle = color;

    for (let i = 0; i < canvas.width; i++) {
        const waveY =
            y + Math.sin(i * length + increment) * amplitude;
        ctx.lineTo(i, waveY);
    }

    ctx.lineTo(canvas.width, canvas.height); // Ligne droite vers le bas droit
    ctx.closePath();
    ctx.fill();
}

// Animation des vagues
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    waveLayers.forEach((wave) => {
        drawWave(wave);
    });

    increment += 0.02; // Ajuste la vitesse générale
    requestAnimationFrame(animate);
}

// Démarrer l'animation
animate();

//////////////////////////////////////
// Code pour les bulles du bouton
//////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('bottomButton');
    const bubbleContainer = button.querySelector('.bubble-container');

    button.addEventListener('mouseover', function() {
        for (let i = 0; i < 10; i++) {
            createBubble();
        }
    });

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 2 + 1}s`;
        bubbleContainer.appendChild(bubble);

        bubble.addEventListener('animationend', function() {
            bubble.remove();
        });
    }
});

//////////////////////////////////////
// Code pour le bouton de défilement
//////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('boutonSeagull');
    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            console.log('Button clicked');
            const targetPosition = window.innerHeight;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 2000; // Durée de l'animation en millisecondes (2 secondes)
            let start = null;

            window.requestAnimationFrame(function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            });

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }
        });
    } else {
        console.error('Button with id "scrollButton" not found');
    }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const targetPosition = section.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 2000; // Duration of the animation in milliseconds (2 seconds)
        let start = null;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        });

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }
    } else {
        console.error('Section with id', sectionId, 'not found');
    }
}