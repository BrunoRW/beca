window.onload = () => {
    document.body.classList.add("loaded")
}

const wr = document.querySelector("#wr");
const out = document.querySelector(".out");
const imgOut = document.querySelector(".img-out");
const btnsNav = document.querySelectorAll(".btn-nav");

let active = false;

function wrWrite(e){
    wr.innerText = e;
}

out.addEventListener("click", ()=>{
    !active ? active = true : active = false;

    active ? imgOut.classList.add("nav-open") : imgOut.classList.remove("nav-open");
    wrWrite("Choose an option")
    if(!active) disableAll();

    for(let c = 0; c < btnsNav.length; c++){
        let cx = btnsNav[c];
        setTimeout(()=>{
            active ? cx.classList.add("open") : cx.classList.remove("open");
        },c * 100)
    }            
})