
// Variables pour les éléments
const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');
const verifyButton = document.getElementById('verify');
const result = document.getElementById('result');

// Get the modal
const modal = document.getElementById("captchaModal");

// Get the button that opens the modal
const btn = document.getElementById("bottom2Button");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

let score = 0;

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Ajouter les événements de glisser-déposer
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', draggable.id);
    });
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault(); // Permet de déposer
        zone.classList.add('hovered');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('hovered');
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);

        if (zone.dataset.match === draggedId) {
            zone.textContent = draggedElement.textContent;
            zone.classList.remove('hovered');
            zone.style.border = '2px solid green';
            score++;
        } else {
            zone.style.border = '2px solid red';
            setTimeout(() => zone.style.border = '2px dashed #888', 1000);
            score--;
        }
    });
});

// Vérification du CAPTCHA
verifyButton.addEventListener('click', () => {
    let allFilled = true;
    let isCorrect = true;

    dropZones.forEach(zone => {
        // Vérifie si la zone est vide
        if (zone.textContent.trim() === '') {
            allFilled = false;
        }

        // Vérifie si la zone contient le bon objet
        const matchedElement = zone.dataset.match;
        const currentContent = zone.textContent.trim().toLowerCase();

        // Compare l'ID attendu avec le contenu actuel
        if (currentContent !== matchedElement) {
            isCorrect = false;
        }
    });

    if (!allFilled) {
        result.textContent = "❌ Les champs ne sont pas tous complets.";
        result.style.color = 'red';
    } else if (isCorrect) {
        if (score === 3) {
            result.textContent = "✅ Captcha validé ! Score : " + score + "/3, ouais, pas mal...";
            result.style.color = 'green';
        } else if (score === 2) {
            result.textContent = "✅ Captcha validé ! Score : " + score + "/3, mouais.";
            result.style.color = 'green';
        } else if (score === 1) {
            result.textContent = "✅ Captcha validé ! Score : " + score + "/3, t'es un bot ?";
            result.style.color = 'green';
        } else if (score === 0 || score < 0) {
            score = 0;
            result.textContent = "✅ Captcha validé ! Score : " + score + "/3, nan mais la c'est pas possible ?";
            result.style.color = 'green';
        }

        scrollToSection('layer3');
    } else {
        result.textContent = "❌ Non Non Non. Score : " + score + "/3, ChatGPTed.";
        result.style.color = 'red';

        // Renvoyer l'utilisateur à la section "oceanView"
        const oceanView = document.getElementById('oceanView');
        if (oceanView) {
            oceanView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error('Section avec l\'id "oceanView" introuvable.');
        }
    }

    resetCaptcha();
});

function resetCaptcha() {
    // Clear the drop zones
    dropZones.forEach(zone => {
        zone.textContent = '';
        zone.style.border = '2px dashed #888';
    });

    // Reset the draggable items
    draggables.forEach(draggable => {
        draggable.style.display = 'block';
    });

}

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('bottom2Button');
    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            // Create a new button element
            const newButton = document.createElement('button');
            newButton.textContent = 'Vrai boutton pour passer la vérification :)';
            newButton.style.marginLeft = '10px'; // Add some space between the buttons

            // Insert the new button next to the existing one
            scrollButton.insertAdjacentElement('afterend', newButton);

            // Add event listener to the new button
            newButton.addEventListener('click', function() {
                scrollToSection('layer3');
            });
        });
    }
});




