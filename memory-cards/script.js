const emojis = ['😍', '😍', '🎀', '🎀', '🎈', '🎈', '🐌', '🐌', '💖', '💖', '🥶', '🥶', '🎶', '🎶', '🐱‍👤', '🐱‍👤'];

let openCards = [];
let matchedCards = [];

document.addEventListener('DOMContentLoaded', function () {
  initializeGame();
});

function initializeGame() {
  const cards = document.querySelectorAll('.item');
  cards.forEach((card) => {
    card.addEventListener('click', flipCard);
  });
  shuffleCards();
}

function shuffleCards() {
  emojis.sort(() => Math.random() - 0.5);

  const cards = document.querySelectorAll('.item');
  cards.forEach((card, index) => {
    card.querySelector('.emoji').innerHTML = '';
  });
}

function flipCard() {
  if (openCards.length < 2 && !this.classList.contains('flipped')) {
    this.classList.add('flipped');
    openCards.push(this);

    // Показываем эмодзи при клике на карту
    this.querySelector('.emoji').innerHTML = emojis[parseInt(this.id) - 1];

    if (openCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
}
function checkMatch() {
  const [card1, card2] = openCards;

  if (card1.querySelector('.emoji').innerHTML === card2.querySelector('.emoji').innerHTML) {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
    card1.classList.add('matched');
    card2.classList.add('matched');

    matchedCards.push(card1, card2);

    if (matchedCards.length === emojis.length) {
      alert('Поздравляю! Вы выиграли!');
    }
  } else {
    // Если не совпали, скрываем эмодзи
    card1.querySelector('.emoji').innerHTML = '';
    card2.querySelector('.emoji').innerHTML = '';
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }

  openCards = [];
}
function initializeGame() {
    const cards = document.querySelectorAll('.item');
    cards.forEach((card) => {
      card.addEventListener('click', flipCard);
    });
    shuffleCards();
  }
  

  
