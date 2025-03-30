// index.js — Handles all interactive homepage functionality for Anne's Ultimate PTCB Guide

document.addEventListener("DOMContentLoaded", () => {
  initFlashcards();
  initQuiz();
  initTips();
  initSmoothScroll();
  initDarkModeToggle();
  initGlobalClickSound();
});

// ?? Sound effects
const clickSound = new Audio('Assets/sounds/click.mp3');
const correctSound = new Audio('Assets/sounds/correct.mp3');
const wrongSound = new Audio('Assets/sounds/wrong.mp3');

function initGlobalClickSound() {
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });
  });
}

// ?? Flashcard Preview
const flashcards = [
  { front: "Zestril", back: "Lisinopril" },
  { front: "Synthroid", back: "Levothyroxine" },
  { front: "Glucophage", back: "Metformin" },
  { front: "Norvasc", back: "Amlodipine" },
  { front: "Lipitor", back: "Atorvastatin" }
];

let currentFlashcard = 0;

function initFlashcards() {
  const flashcard = document.getElementById("flashcard");
  const front = flashcard.querySelector(".flashcard-front");
  const back = flashcard.querySelector(".flashcard-back");
  const nextBtn = document.getElementById("next-flashcard");

  function updateFlashcard(index) {
    front.textContent = flashcards[index].front;
    back.textContent = flashcards[index].back;
  }

  updateFlashcard(currentFlashcard);

  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
  });

  nextBtn.addEventListener("click", () => {
    currentFlashcard = (currentFlashcard + 1) % flashcards.length;
    updateFlashcard(currentFlashcard);
    flashcard.classList.remove("flipped");
  });
}

// ?? Quiz of the Day
const quizQuestions = [
  {
    question: "What is the generic name for Norvasc?",
    answers: ["Lisinopril", "Metformin", "Amlodipine", "Atorvastatin"],
    correct: "Amlodipine"
  },
  {
    question: "Which drug is used to treat hypothyroidism?",
    answers: ["Levothyroxine", "Amlodipine", "Metformin", "Simvastatin"],
    correct: "Levothyroxine"
  }
];

function initQuiz() {
  const quizBox = document.getElementById("quiz-box");
  const q = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];

  const question = document.createElement("h4");
  question.textContent = q.question;
  quizBox.appendChild(question);

  q.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.classList.add("quiz-option");
    btn.onclick = () => {
      if (ans === q.correct) {
        btn.style.background = "#4CAF50";
        correctSound.currentTime = 0;
        correctSound.play();
      } else {
        btn.style.background = "#f44336";
        btn.classList.add("shake");
        wrongSound.currentTime = 0;
        wrongSound.play();
        setTimeout(() => btn.classList.remove("shake"), 400);
      }
    };
    quizBox.appendChild(btn);
  });
}

// ?? Tips Carousel
const tips = [
  "Use flashcards daily to build long-term memory.",
  "Practice tests simulate real exam pressure.",
  "Take breaks — 25 mins on, 5 mins off.",
  "Review drug classifications regularly.",
  "Write your own summaries after reading."
];

function initTips() {
  const carousel = document.getElementById("carousel");
  let i = 0;

  function showTip(index) {
    carousel.textContent = tips[index];
  }

  showTip(i);
  setInterval(() => {
    i = (i + 1) % tips.length;
    showTip(i);
  }, 6000);
}

// ? Smooth Scroll for CTA buttons
function initSmoothScroll() {
  const buttons = document.querySelectorAll(".cta-buttons button");
  const target = document.getElementById("resources");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ?? Dark Mode Toggle
function initDarkModeToggle() {
  const toggleBtn = document.getElementById("dark-toggle");
  if (!toggleBtn) return; // Only run if button exists

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}