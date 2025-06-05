//  MENU HAMBÚRGUER 
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("active");
});

// TEMA 
document.querySelectorAll(".theme-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    const theme = icon.dataset.theme;
    if (theme === "dark") {
      document.body.style.backgroundColor = "#111";
      document.body.style.color = "white";
    } else if (theme === "blue") {
      document.body.style.backgroundColor = "#e0f7fa";
      document.body.style.color = "#333";
    } else {
      document.body.style.backgroundColor = "#f0f8ff";
      document.body.style.color = "#333";
    }
  });
});

// SLIDESHOW 
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
setInterval(() => {
  slides.forEach((s, i) => s.classList.toggle("active", i === slideIndex));
  slideIndex = (slideIndex + 1) % slides.length;
}, 3000);

// QUIZ 
const perguntas = [
  {
    pergunta: "O que causa enchentes na cidade?",
    respostas: {
      a: "Chuvas intensas e má drenagem",
      b: "Secas prolongadas",
      c: "Temperaturas altas",
      d: "Ventos fortes"
    },
    correta: "a"
  },
  {
    pergunta: "Qual tecnologia ajuda no monitoramento de enchentes?",
    respostas: {
      a: "Sensores IoT",
      b: "Impressoras 3D",
      c: "Realidade Virtual",
      d: "Energia Solar"
    },
    correta: "a"
  },
  {
    pergunta: "O que devemos fazer ao receber um alerta de enchente?",
    respostas: {
      a: "Ignorar o alerta",
      b: "Evacuar a área imediatamente",
      c: "Ficar dentro de casa sem se preparar",
      d: "Sair para ver a enchente"
    },
    correta: "b"
  },
  {
    pergunta: "Como a impermeabilização do solo contribui para enchentes?",
    respostas: {
      a: "Facilita a drenagem",
      b: "Evita alagamentos",
      c: "Impede a absorção da água",
      d: "Ajuda na agricultura"
    },
    correta: "c"
  },
  {
    pergunta: "Qual é uma medida preventiva contra enchentes?",
    respostas: {
      a: "Desmatamento",
      b: "Construção em áreas de risco",
      c: "Manutenção de bueiros",
      d: "Aumento da impermeabilização"
    },
    correta: "c"
  },
  {
    pergunta: "O que pode piorar os efeitos das enchentes?",
    respostas: {
      a: "Sistema de drenagem eficiente",
      b: "Educação ambiental",
      c: "Acúmulo de lixo nas ruas",
      d: "Áreas verdes urbanas"
    },
    correta: "c"
  },
  {
    pergunta: "Qual profissional atua na prevenção de enchentes?",
    respostas: {
      a: "Engenheiro civil",
      b: "Ator",
      c: "Médico",
      d: "Chef de cozinha"
    },
    correta: "a"
  },
  {
    pergunta: "O que é uma bacia hidrográfica?",
    respostas: {
      a: "Região sem água",
      b: "Área que capta e escoa água da chuva para um rio",
      c: "Lago artificial",
      d: "Sistema de irrigação"
    },
    correta: "b"
  },
  {
    pergunta: "Qual é o papel da vegetação nas margens dos rios?",
    respostas: {
      a: "Aumentar o fluxo de água",
      b: "Evitar erosões e enchentes",
      c: "Causar alagamentos",
      d: "Interromper o ciclo da água"
    },
    correta: "b"
  },
  {
    pergunta: "Como o cidadão pode colaborar para evitar enchentes?",
    respostas: {
      a: "Jogando lixo na rua",
      b: "Construindo em encostas",
      c: "Descartando lixo corretamente",
      d: "Ignorando alertas"
    },
    correta: "c"
  }
];

const quizContainer = document.getElementById('quiz');
const resultadoContainer = document.getElementById('resultado');
const botaoSubmit = document.getElementById('submit');

function mostrarQuiz() {
  let output = [];

  perguntas.forEach((perg, i) => {
    const respostasHTML = Object.entries(perg.respostas).map(
      ([letra, texto]) => `
        <label>
          <input type="radio" name="pergunta${i}" value="${letra}">
          ${letra}: ${texto}
        </label>
      `
    ).join('');

    output.push(`
      <div class="bloco-pergunta">
        <div class="pergunta">${perg.pergunta}</div>
        ${respostasHTML}
      </div>
    `);
  });

  quizContainer.innerHTML = output.join('');
}

function mostrarResultado() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    alert("Por favor, preencha seu nome e email antes de enviar.");
    return;
  }

  let totalCorretas = 0;

  perguntas.forEach((perg, i) => {
    const selecionado = quizContainer.querySelector(`input[name=pergunta${i}]:checked`);
    const bloco = quizContainer.querySelectorAll('.bloco-pergunta')[i];
    const perguntaDiv = bloco.querySelector('.pergunta');

    if (selecionado && selecionado.value === perg.correta) {
      totalCorretas++;
      perguntaDiv.style.color = "green";
    } else {
      perguntaDiv.style.color = "red";
    }
  });

  resultadoContainer.innerHTML = `Você acertou ${totalCorretas} de ${perguntas.length} perguntas.`;
}

// Inicializa o quiz
mostrarQuiz();
botaoSubmit.addEventListener('click', mostrarResultado);
