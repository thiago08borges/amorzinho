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

    const largura = container.offsetWidth - noBtn.offsetWidth;
    const altura = container.offsetHeight - noBtn.offsetHeight;

    const x = Math.random() * largura;
    const y = 100 + Math.random() * (altura - 120);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
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

function criarCoracoes(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.className="heart";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },5000);

    },250);

}

