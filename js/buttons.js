// buttons
const btMusic = document.querySelector("#music");
const btPhoto = document.querySelector("#photo");
const btMsg = document.querySelector("#msg");
const btFav = document.querySelector("#fav");
const btMode = document.querySelector("#mode");

// read 
const readOut = document.querySelector("#readOut");
let titleRead = document.querySelector("#titleRead");
let textRead = document.querySelector("#textRead");

// img 
const img = document.querySelector("#img")

// actions elements
const disc = document.querySelectorAll(".disc");
const photos = document.querySelectorAll(".photo");
const msgs = document.querySelectorAll(".msg");

// music
let discAct = false;
let pause = false;
let tocando;
let act = "";

// photos
let photosAct = false;

// msg 
let msgAct = false;


function btClick(e){
    let btIn;
    let cIn;

    disableAll();

    if(e == "music"){
        !discAct ? discAct = true : discAct = false;
        discAct ? wrWrite("Select a music") : wrWrite("Choose an option")
        btIn = disc;
        cIn = discAct;

    } else if(e == "photo"){
        !photosAct ? photosAct = true : photosAct = false;
        photosAct ? wrWrite("Our photos") : wrWrite("Choose an option");
        btIn = photos;
        cIn = photosAct;
    } else {
        !msgAct ? msgAct = true : msgAct = false;
        msgAct ? wrWrite("Messages") : wrWrite("Choose an option");
        btIn = msgs;
        cIn = msgAct;
    }

    for(let c = 0; c < btIn.length; c++){
        setTimeout(()=>{
            cIn ? btIn[c].classList.add("openElement") : btIn[c].classList.remove("openElement")
        }, c * 100)
    }
}


function disableEl(e){
    let el = document.querySelectorAll(`${e}`);

    for(let i = 0; i < el.length; i++){
        setTimeout(()=>{
            el[i].classList.remove("openElement")
        }, i * 100)
    }
    if(e == ".disc") discAct = false;
    if(e == ".photo") photosAct = false;
    if(e == ".msg") msgAct = false;
}

function disableAll(){
    disableEl(".disc")
    disableEl(".photo")
    disableEl(".msg")
    wrWrite("Click to start")
}


function banner(e){
    return false;
}


function playMusic(e){
    if(e == act){
        !pause ? tocando.pause() : tocando.play();
        !pause ? pause = true : pause = false;
        return;
    }
    if(act && act != ""){
        act.classList.remove("activeMusic");
    }
    if(tocando){
        tocando.pause();
    }
    let xy = new Audio(`./music/${e.dataset.music}.mp3`)
    console.log(xy)

    tocando = xy;
    act = e;

    e.classList.add("activeMusic")

    xy.play();
}

function openMsg(e){
    let arr = [
        {
            title: "Feliz aniversário 🎊",
            text: `OOOOOOOOOOOOIIIIII AMOOOOOORRRRRR ❤️❤️ <br><br>
            Hoje o amor da minha vida está completando <strong>17 aninhos</strong>, espero que teu dia seja e esteja sendo o mais completo possivel, aproveita bastante nene, eu te amo mais do que tudo nesse mundo <br><br>
            Aqui está mais um presentinho, porém esse é virtual junto com a <strong>Amarelinha</strong>🏵️
    
            `
        },
        {
            title: "O começo",
            text: `Onde tudo começou <br><br>
            Lá atrás, quando tudo começou, já sabia que tu seria o amor da minha vida, a primeira vez que olhei para ti e prestei atenção, foi como uma parte de mim se abrindo para ti, dominou completamente meus sentimentos e até hoje me faz sentir o melhor dessa vida<br><br>
            Graças ao famoso trabalho de inglês 📚
            `
        },
        {
            title: "O Amor",
            text: `Desde sempre, por todo esse período, meu amor por ti não para de crescer, todo esse tempo ao teu lado, só me faz perceber quem realmente eres, o amor da minha vida<br><br>
            Obrigado por ser quem tu é, a mulher mais incrível e especial que poderia existir, eres perfeita em todos os sentidos, espero que tua vida possa seguir linda e leve para sempre<br><br>
            <strong>Eu te amo ❤️✨</strong>
            `
        },
        {
            title: "Sinais",
            text: `Não tenho dúvidas que nossos sinais foram as melhores invenções dessa vida, poder falar mesmo quando não dá para falar!?!? que doidera isso :)) <br><br>
            Poder sinalizar sempre que eu te amo mesmo estando longe, mostrar quando não estamos bem, perguntar ao outro e se importar como está, tudo isso sem precisar falar.<br><br>
            Sério amor, nós somos inccríveis ❤️❤️❤️❤️
            `
        },
        {
            title: "O futuro",
            text: `No futuro estaremos cada vez mais maduros, sempre entendendo melhor o que o outro fala, estarei tendo a melhor vida ao teu lado e fazendo de tudo para a tua vida ser muito mais do que perfeita. <br><br>
            Quero passar cada momento ao teu lado, sejam eles os mais lindos ou os mais difíceis, estarei contigo para sempre <br> <br>
            Saiba que pode contar comigo para sempre, em todas as situações dessa vida <br><br>
            <strong>Minha princesinha, </strong> eu te amo 💓🌠
            `
        }
    ]

    console.log(e, titleRead, arr[e].title)

    titleRead.innerText = arr[e].title;
    textRead.innerHTML = arr[e].text;

    readOut.classList.add("readActive");
}

function closeRead(){
    readOut.classList.remove("readActive")
}

btMusic.addEventListener("click", () => {
    btClick("music");
})

btPhoto.addEventListener("click", () => {
    btClick("photo")
})

btMsg.addEventListener("click", ()=>{
    btClick("msg")
})
