const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Elon Musk"],
    answer: "Bill Gates"
  },
  {
    question:"Azure VMs and storage services fall under which of the following cloud computing models?",
    options:["IaaS", "PaaS", "SaaS", "All of the above"],
    answer: "IaaS"
  }


];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }

  const options = document.querySelectorAll(".option");
  options.forEach(opt => {
    opt.onclick = null;
    opt.style.backgroundColor = opt.textContent === correct ? "#a3f7bf" : "#fdaaaa";
  });
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("question").textContent = "Quiz Completed!";
  document.getElementById("options").innerHTML = "";
  document.getElementById("score").textContent = `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();
