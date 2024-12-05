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
