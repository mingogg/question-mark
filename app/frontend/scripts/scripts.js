// ELEMENTOS PRINCIPALES DEL HTML
const description = document.querySelector("p");
const divBtns = document.querySelector(".btnContainer");
const rulesBtn = document.getElementById("rules");
const playBtn = document.getElementById("play");

// BOTONES
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";

const submitAnswerBtn = document.createElement("button");
submitAnswerBtn.textContent = "Submit Answer";

const goToWelcome = document.createElement("button");
goToWelcome.textContent = "Go back! 🥱";

const input = document.createElement("input");
input.placeholder = "E.g.: 5";


// Textos para las interfaces
const welcomeText = "I'll ask you some questions and you'll have to answer!<br>Do you wanna play or do you wanna see the rules?";

const rules = "The rules are simple:<br>1. The answers will only be one word, you can use lower or upper cases. I don't really care.<br>2. The minimun of questions is 1, the limit is 10 (believe me, you'll bore if more).<br>3. Only words will be accepted, not numbers (two = ✔ whereas 2 = ✖).";

// VARIABLES
let listQuestions = [];
let counter = 0;
let points = 0;
const isShowingRules = false;

// Preguntas y respuestas
const questions = {
    1: "What does NBA stand for?",
    2: "What is the capital of France?",
    3: "What's the name of the piece that moves in an L in chess?",
    4: "What is the chemical symbol for gold?",
    5: "Which planet is known as the 'Red Planet'?",
    6: "What is the largest organ in the human body?",
    7: "What is the term for a word that reads the same backward as forward?",
    8: "What is the main gas found in Earth's atmosphere?",
    9: "What is the name of the world's largest desert?",
    10: "Who's better? [Jordan] or [LeBron]?",
    11: "What is the freezing point of water in Celsius?",
    12: "What is the smallest prime number?",
    13: "What is the square root of 81?",
    14: "What is the capital of Japan?",
    15: "What is the main currency in Japan?",
    16: "What is the fastest land animal?",
    17: "What is the tallest mountain in the world?",
    18: "What is the name of the closest star to Earth?",
    19: "Which ocean is the largest on Earth?",
    20: "What is the name of the process by which plants make their food?",
    21: "What is the hardest natural substance on Earth?",
    22: "What is the name of the Greek god of war?",
    23: "Which metal is liquid at room temperature?",
    24: "What is the term for an animal that eats both plants and meat?",
    25: "What is the capital of Canada?",
    26: "Which bird is known for its ability to mimic sounds?",
    27: "What is the only continent that is also a country?",
    28: "What is the longest river in the world?",
    29: "What is the name of the first book of the Bible?",
    30: "What is the name of the largest mammal on Earth?"
};

const answers = {
    1: "National Basketball Association",
    2: "Paris",
    3: "Knight",
    4: "Au",
    5: "Mars",
    6: "Skin",
    7: "Palindrome",
    8: "Nitrogen",
    9: "Sahara",
    10: "Jordan",
    11: "Zero",
    12: "Two",
    13: "Nine",
    14: "Tokyo",
    15: "Yen",
    16: "Cheetah",
    17: "Everest",
    18: "Sun",
    19: "Pacific",
    20: "Photosynthesis",
    21: "Diamond",
    22: "Ares",
    23: "Mercury",
    24: "Omnivore",
    25: "Ottawa",
    26: "Parrot",
    27: "Australia",
    28: "Nile",
    29: "Genesis",
    30: "Bluewhale"
};

// FUNCIONES
//  Para ara mostrar el welcome
function showWelcomeScreen(){
    description.innerHTML = welcomeText;
    divBtns.innerHTML = "";
    divBtns.appendChild(playBtn);
    divBtns.appendChild(rulesBtn);
};

// Para validar la cantidad de preguntas deseadas
function validarCantidadPreguntas(valor){
    let totalQuestions = parseInt(valor.trim());
    return !isNaN(totalQuestions) && totalQuestions >= 1 && totalQuestions <= 10 ? totalQuestions : null;
}

// Para iniciar el juego
function iniciarJuego(totalQuestions){
    input.value = "";
    counter = 0;
    points = 0;

    listQuestions = Object.keys(questions)
        .sort(() => Math.random() - 0.5)
        .slice(0, totalQuestions)
        .map(Number);

    askQuestion();
}

// Para hacer la pregunta
function askQuestion() {
    input.value = "";
    input.placeholder = "Write your answer here...";
    description.innerHTML = questions[listQuestions[counter]];

    divBtns.innerHTML = "";
    divBtns.appendChild(input);
    divBtns.appendChild(submitAnswerBtn);

    input.focus();
}

// Para validar respuesta y avanzar a la siguiente pregunta
function validarRespuesta() {
    let userAnswer = input.value.trim().toLowerCase();
    let correctAnswer = answers[listQuestions[counter]].toLowerCase();
    
    if (userAnswer === correctAnswer) {
        description.innerHTML = "✅ Correct! Next question...";
        points++; 
    } else {
        description.innerHTML = `❌ Wrong! The correct answer was: <b>${answers[listQuestions[counter]]}</b>`;
    }

    counter++;

    // Espera un momento antes de mostrar la siguiente pregunta
    setTimeout(() => {
        if (counter < listQuestions.length) {
            askQuestion();
        } else {
            mostrarResultados();
        }
    }, 1200); // Pausa breve para mostrar el mensaje antes de la siguiente pregunta
}

// Para mostrar el resultado final
function mostrarResultados() {
    description.innerHTML = `Game Over! 🎉 You got <b>${points}</b> out of <b>${listQuestions.length}</b> correct!`;
    divBtns.innerHTML = "";
    divBtns.appendChild(goToWelcome);
}

// Para resetear todo luego de finalizar el juego
function resetGame(){
    counter = 0;
    points = 0;
    listQuestions = [];
    input.value = "";
    input.placeholder = "E.g.: 5"

    showWelcomeScreen();
};

// EVENTOS
// Evento para mostrar las reglas al click de "I need them rules! 🤓"
rulesBtn.addEventListener("click", function (){
    if (!isShowingRules){
        description.innerHTML = rules;
        divBtns.innerHTML = ""; // Se limpian los botones para dar paso al botón de "Go Back!"
        divBtns.appendChild(goToWelcome);
    };
    isShowingRules = !isShowingRules; // Cambia el estado de isShowRules a cada click
});

// Vuelve a la pantalla de welcome
goToWelcome.addEventListener("click", showWelcomeScreen);

// Evento para mostrar el input de cantidad de preguntas
playBtn.addEventListener("click", function () { 
    resetGame();
    description.innerHTML = "I'll ask you some questions and you'll have to answer!<br>How many questions do you wanna answer? (1-10)";
    divBtns.appendChild(input);
    input.focus();
    divBtns.appendChild(submitBtn);
});

// Evento global para manejar la respuesta del usuario
submitAnswerBtn.addEventListener("click", function () {
    validarRespuesta();
    input.focus();
});

// Maneja la entrada del usuario en el input (cantidad de preguntas para jugar)
submitBtn.addEventListener("click", function () {
    let totalQuestions = validarCantidadPreguntas(input.value);
    if (totalQuestions) {
        iniciarJuego(totalQuestions);
        input.focus();
    } else {
        description.textContent = "HA! You're sneaky. Luckily I assisted the class of exception handling.";
        divBtns.innerHTML = "";
        divBtns.appendChild(goToWelcome);
    }
});

// Maneja el enter para ejecutar el botón correspondiente
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (document.body.contains(submitBtn) && submitBtn.offsetParent !== null) {
            submitBtn.click(); // Si submitBtn está visible, se activa
        } else if (document.body.contains(submitAnswerBtn) && submitAnswerBtn.offsetParent !== null) {
            submitAnswerBtn.click(); // Si submitAnswerBtn está visible, se activa
        }
    }
});