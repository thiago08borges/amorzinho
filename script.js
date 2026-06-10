const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".container");
const titulo = document.querySelector("h1");
const heartsContainer = document.getElementById("hearts-container");

function criarCoracaoFundo() {

    const heart = document.createElement("div");

    heart.className = "heart-bg";
    heart.innerHTML = "❤️";

    // posição horizontal aleatória
    heart.style.left = Math.random() * 100 + "vw";

    // tamanho aleatório
    heart.style.fontSize = (15 + Math.random() * 30) + "px";

    // velocidade aleatória
    heart.style.animationDuration = (8 + Math.random() * 8) + "s";

    // pequena transparência aleatória
    heart.style.opacity = Math.random() * 0.5 + 0.3;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 17000);
}

// cria um coração a cada 700ms
setInterval(criarCoracaoFundo, 700);
let etapa = 1;

function fugir() {

    const area = document.querySelector(".buttons");

    const maxX = area.clientWidth - noBtn.offsetWidth;
    const maxY = area.clientHeight - noBtn.offsetHeight;

    const simRect = yesBtn.getBoundingClientRect();
    const areaRect = area.getBoundingClientRect();

    let novoX, novoY;
    let distancia;

    do {

        novoX = Math.random() * maxX;
        novoY = Math.random() * maxY;

        // Centro do botão Não
        const centroNaoX = novoX + noBtn.offsetWidth / 2;
        const centroNaoY = novoY + noBtn.offsetHeight / 2;

        // Centro do botão Sim
        const centroSimX =
            (simRect.left - areaRect.left) + yesBtn.offsetWidth / 2;

        const centroSimY =
            (simRect.top - areaRect.top) + yesBtn.offsetHeight / 2;

        distancia = Math.sqrt(
            Math.pow(centroNaoX - centroSimX, 2) +
            Math.pow(centroNaoY - centroSimY, 2)
        );

    } while (distancia < 120); // distância mínima em pixels

    noBtn.style.position = "absolute";
    noBtn.style.left = novoX + "px";
    noBtn.style.top = novoY + "px";
}

noBtn.addEventListener("mouseover", fugir);

noBtn.addEventListener("click", function(e){
    e.preventDefault();
    fugir();
});

yesBtn.addEventListener("click", ()=>{

    if(etapa === 1){

        etapa++;

        titulo.innerHTML = "Mesmo? 🥺";

        return;
    }

    document.body.classList.add("festa");

    container.innerHTML = `

    <div class="final">

        <h1>Agora não tem mais volta❤️</h1>

        <img class="gif"
        src="https://media.tenor.com/LxggFGxwOjIAAAAC/mocha-and-milk-love.gif">

        <br><br>

        <audio autoplay loop>
            <source src="https://pixeldrain.com/api/file/xmThxPSM?download" type="audio/mpeg">
        </audio>

    </div>

    `;

    criarCoracoes();

});

function criarCoracaoFundo() {

    const heart = document.createElement("div");

    heart.className = "heart-bg";

    // Escolhe um emoji aleatório
    const emojis = ["❤️", "💖", "💕", "💗", "💘", "💝"];

    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 30) + "px";

    heart.style.animationDuration = (8 + Math.random() * 8) + "s";

    heart.style.opacity = Math.random() * 0.5 + 0.3;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 17000);

}

