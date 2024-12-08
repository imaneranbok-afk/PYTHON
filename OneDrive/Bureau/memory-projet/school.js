// Memory Game JavaScript

let cardElements = document.querySelectorAll('.card');
let firstCard = null;
let secondCard = null;
let isFlipping = false;
let matchedCards = 0;
const totalPairs = cardElements.length / 2;

// Shuffle the cards
function shuffleCards() {
    const cards = Array.from(cardElements);
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random() * cards.length);
    });
}

// Event listener for card clicks
cardElements.forEach(card => {
    card.addEventListener('click', () => {
        if (isFlipping || card.classList.contains('open') || card.classList.contains('matched')) {
            return;
        }
        
        card.classList.add('open');
        
        // First card clicked
        if (!firstCard) {
            firstCard = card;
            return;
        }

        // Second card clicked
        secondCard = card;
        isFlipping = true;

        // Check if the two cards match
        if (firstCard.dataset.card === secondCard.dataset.card) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            matchedCards++;

            // Reset for next turn
            if (matchedCards === totalPairs) {
                setTimeout(() => alert('You won the game!'), 500);
            }

            resetCards();
        } else {
            setTimeout(() => {
                firstCard.classList.remove('open');
                secondCard.classList.remove('open');
                resetCards();
            }, 1000);
        }
    });
});

// Reset the flipped cards
function resetCards() {
    firstCard = null;
    secondCard = null;
    isFlipping = false;
}

// Initialize the game
function startGame() {
    shuffleCards(); // Shuffle the cards when the game starts
}

startGame();
