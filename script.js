const output = document.getElementById("output");
const input = document.getElementById("cmdInput");

let currentLang = 'en';

const langData = {
  en: {
    help: "Available commands: help, vision, projects, philosophy, test, contribute",
    vision: "BrightMinding is dedicated to developing experimental technologies that serve humanity through clarity, logic, and advanced reasoning.",
    projects: "1. Amaris: An advanced LLM simulating natural language reasoning.\n(More coming soon...)",
    philosophy: "We believe in ethical AI, transparent experimentation, and tech designed to uplift humanity. Our code is public, our vision clear.",
    test: "Visit our test page soon for interactive prototypes.",
    contribute: "You can contribute directly via GitHub at github.com/BrightMinding"
  },
  es: {
    help: "Comandos disponibles: help, vision, projects, philosophy, test, contribute",
    vision: "BrightMinding se dedica a desarrollar tecnologías experimentales que sirvan a la humanidad mediante la claridad, la lógica y el razonamiento avanzado.",
    projects: "1. Amaris: Un LLM avanzado que simula el razonamiento del lenguaje natural.\n(Más próximamente...)",
    philosophy: "Creemos en la IA ética, la experimentación transparente y la tecnología diseñada para elevar a la humanidad. Nuestro código es público, nuestra visión clara.",
    test: "Visita próximamente nuestra página de pruebas para prototipos interactivos.",
    contribute: "Puedes contribuir directamente en GitHub en github.com/BrightMinding"
  }
};

const bootMessages = [
  "Loading kernel...",
  "Establishing neural pathways...",
  "Fetching projects...",
  "Injecting philosophy...",
  "System ready. Type 'help' to begin."
];

let bootIndex = 0;

function showBootMessages() {
  if (bootIndex < bootMessages.length) {
    output.innerHTML += `> ${bootMessages[bootIndex]}\n`;
    bootIndex++;
    setTimeout(showBootMessages, 500);
  } else {
    output.innerHTML += "> ";
  }
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    input.value = "";
    output.innerHTML += `> ${cmd}\n`;
    if (langData[currentLang][cmd]) {
      output.innerHTML += `${langData[currentLang][cmd]}\n`;
    } else {
      output.innerHTML += "Unknown command. Type 'help' for a list.\n";
    }
    output.innerHTML += "> ";
    output.scrollTop = output.scrollHeight;
  }
});

function setLanguage(lang) {
  currentLang = lang;
  output.innerHTML += `> Language set to ${lang === 'en' ? 'English' : 'Español'}\n> `;
}

window.onload = showBootMessages;