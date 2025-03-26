// Smooth scroll to Resource Section with confetti
function scrollToResources() {
  const section = document.getElementById("resources");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    triggerConfetti();
  }
}

// Confetti burst animation (simple visual effect)
function triggerConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.position = "fixed";
  confetti.style.top = "0";
  confetti.style.left = "0";
  confetti.style.width = "100%";
  confetti.style.height = "100%";
  confetti.style.pointerEvents = "none";
  confetti.style.zIndex = "9999";
  confetti.innerHTML = "<canvas id='confetti-canvas'></canvas>";
  document.body.appendChild(confetti);

  setTimeout(() => {
    document.body.removeChild(confetti);
  }, 1500);
}

// Flashcard Preview Functionality
const flashcards = [
  { front: "What is the brand name for lisinopril?", back: "Zestril" },
  { front: "What does q.d. mean?", back: "Once daily" },
  { front: "What is DEA Schedule II?", back: "High abuse, accepted medical use (e.g., morphine)" },
];

let currentCard = 0;

function renderFlashcard() {
  const flashcardBox = document.getElementById("flashcard");
  if (!flashcardBox) return;

	flashcardBox.innerHTML = `
	  <div class="card-face" id="flash-inner">
		${flashcards[currentCard].front}
	  </div>
	`;


  const flashInner = document.getElementById("flash-inner");
  flashInner.addEventListener("click", () => {
    flashInner.textContent = flashInner.textContent === flashcards[currentCard].front
      ? flashcards[currentCard].back
      : flashcards[currentCard].front;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const nextFlashcardBtn = document.getElementById("next-flashcard");
  if (nextFlashcardBtn) {
    nextFlashcardBtn.addEventListener("click", () => {
      currentCard = (currentCard + 1) % flashcards.length;
      renderFlashcard();
    });
  }
  renderFlashcard();

  // Quiz of the Day
  const quizBox = document.getElementById("quiz-box");
  if (quizBox) {
    const quiz = {
      question: "Which of the following is a Schedule II drug?",
      options: ["Amoxicillin", "Morphine", "Ibuprofen", "Diphenhydramine"],
      answer: "Morphine",
      explanation: "Schedule II drugs have a high potential for abuse but accepted medical use."
    };

    quizBox.innerHTML = `
      <p><strong>${quiz.question}</strong></p>
      <ul>
        ${quiz.options.map(opt => `<li><button class="quiz-option">${opt}</button></li>`).join('')}
      </ul>
      <p id="quiz-result"></p>
    `;

    const buttons = quizBox.querySelectorAll(".quiz-option");
    const result = document.getElementById("quiz-result");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selected = btn.textContent;
        if (selected === quiz.answer) {
          result.textContent = `✅ Correct! ${quiz.explanation}`;
          result.style.color = "green";
        } else {
          result.textContent = `❌ Incorrect. ${quiz.explanation}`;
          result.style.color = "red";
        }
      });
    });
  }

  // Contact Form Handling
  const form = document.querySelector("form");
  if (form) {
    const submitButton = form.querySelector("button[type='submit']");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const endpoint = form.action;

      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          form.reset();
          submitButton.textContent = "Sent! ✅";
          setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = "Send";
          }, 3000);
        } else {
          submitButton.textContent = "Try Again ❌";
          submitButton.disabled = false;
        }
      } catch (err) {
        console.error("Error sending form:", err);
        submitButton.textContent = "Error ❌";
        submitButton.disabled = false;
      }
    });
  }
});
