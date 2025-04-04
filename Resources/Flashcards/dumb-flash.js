// flashcards-test.js - Isolated test version of your flashcard system

document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('deck-search');
  const decks = document.querySelectorAll('.deck');

  searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    decks.forEach(deck => {
      const deckName = deck.getAttribute('data-name').toLowerCase();
      deck.style.display = deckName.includes(query) ? 'block' : 'none';
    });
  });

  const flashcardData = {
    demo: [
      {
        question: "What is 2 + 2?",
        answer: "<strong>Answer:</strong> 4",
        tags: ["#all", "#lecture1"]
      },
      {
        question: "What is the capital of France?",
        answer: "<strong>Answer:</strong> Paris",
        tags: ["#all", "#lecture2"]
      }
    ]
  };

  const modal = document.getElementById('flashcard-modal');
  const modalClose = modal.querySelector('.close-btn');
  const flashcardElement = modal.querySelector('.flashcard');
  const flashcardFront = modal.querySelector('.front p');
  const flashcardBack = modal.querySelector('.back p');
  const prevCardBtn = document.getElementById('prev-card');
  const nextCardBtn = document.getElementById('next-card');
  const shuffleBtn = document.getElementById('shuffle-deck');
  const gotItBtn = document.getElementById('got-it-btn');
  const cardNumberDisplay = document.getElementById('card-number-display');

  let completedCards = JSON.parse(localStorage.getItem("completedCards")) || [];
  let currentDeck = [];
  let filteredDeck = [];
  let currentCardIndex = 0;
  let currentTagFilter = "#all";
  let isFlipped = false;

  function loadCard() {
    if (!filteredDeck.length) return;

    const card = filteredDeck[currentCardIndex];
    flashcardFront.textContent = card.question;
    flashcardBack.innerHTML = card.answer;
    isFlipped = false;
    flashcardElement.classList.remove('flipped');

    cardNumberDisplay.textContent = "Card " + (currentCardIndex + 1) + " of " + filteredDeck.length;
  }

  function applyTagFilter(tag) {
    currentTagFilter = tag;
    filteredDeck = tag === "#all" ? currentDeck : currentDeck.filter(card => card.tags && card.tags.includes(tag));
    currentCardIndex = 0;
    loadCard();
  }

  document.querySelectorAll('.view-deck-btn').forEach(button => {
    button.addEventListener('click', () => {
      const deckName = button.getAttribute('data-deck');
      currentDeck = flashcardData[deckName] || [];
      applyTagFilter("#all");
      modal.classList.remove('hidden');
    });
  });

  modalClose.addEventListener('click', () => modal.classList.add('hidden'));

  flashcardElement.addEventListener('click', () => {
    isFlipped = !isFlipped;
    flashcardElement.classList.toggle('flipped', isFlipped);
  });

  prevCardBtn.addEventListener('click', () => {
    if (!filteredDeck.length) return;
    currentCardIndex = (currentCardIndex - 1 + filteredDeck.length) % filteredDeck.length;
    loadCard();
  });

  nextCardBtn.addEventListener('click', () => {
    if (!filteredDeck.length) return;
    currentCardIndex = (currentCardIndex + 1) % filteredDeck.length;
    loadCard();
  });

  shuffleBtn.addEventListener('click', () => {
    if (!filteredDeck.length) return;
    filteredDeck = [...filteredDeck].sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
    loadCard();
  });

  gotItBtn.addEventListener('click', () => {
    const card = filteredDeck[currentCardIndex];
    const id = card.question;

    if (!completedCards.includes(id)) {
      completedCards.push(id);
      localStorage.setItem("completedCards", JSON.stringify(completedCards));
    }

    filteredDeck.splice(currentCardIndex, 1);

    if (filteredDeck.length === 0) {
      alert("You've finished all cards!");
      modal.classList.add('hidden');
      return;
    }

    if (currentCardIndex >= filteredDeck.length) {
      currentCardIndex = 0;
    }

    loadCard();
  });

  window.resetProgress = function () {
    localStorage.removeItem("completedCards");
    location.reload();
  };

  document.querySelectorAll(".lecture-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tag = btn.getAttribute("data-tag");
      applyTagFilter(tag);
    });
  });
});