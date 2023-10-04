document.addEventListener('DOMContentLoaded', init);

function init(){
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const toyotaWindow = document.querySelector(".toyotaWindow");
const toyotaCars = toyotaWindow.querySelectorAll("img");
const bmwWindow = document.querySelector(".bmwWindow");
const bmwCars = bmwWindow.querySelectorAll("img");
const porscheWindow = document.querySelector(".porscheWindow")
const porscheCars = porscheWindow.querySelectorAll("img")
const toyotaBtn = document.getElementById("toyota");
const bmwBtn = document.getElementById("bmw");
const porscheBtn = document.getElementById("porsche");


//Hide Toyota Images
toyotaCars.forEach((toyotaCars) => {
    toyotaCars.classList.add("hide");
});
toyotaCars[0].classList.remove("hide");


//Hide BMW Images
bmwCars.forEach((bmwCars) => {
    bmwCars.classList.add("hide");
});
bmwCars[0].classList.remove("hide");


//Hide Porsche Images
porscheCars.forEach((porscheCars) => {
    porscheCars.classList.add("hide");
});
porscheCars[0].classList.remove("hide");


//EventListeners
toyotaBtn.addEventListener("click", albumChange);
bmwBtn.addEventListener("click", albumChange);
porscheBtn.addEventListener("click", albumChange);
next.addEventListener("click", toyotaImg);
prev.addEventListener("click", toyotaImg);
next.addEventListener("click", bmwImg);
prev.addEventListener("click", bmwImg);
next.addEventListener("click", porscheImg);
prev.addEventListener("click", porscheImg);
};

//Reset Albums to first Image
function albumReset(){
    const toyotaWindow = document.querySelector(".toyotaWindow");
    const toyotaCars = toyotaWindow.querySelectorAll("img");
    const bmwWindow = document.querySelector(".bmwWindow");
    const bmwCars = bmwWindow.querySelectorAll("img");
    const porscheWindow = document.querySelector(".porscheWindow");
    const porscheCars = porscheWindow.querySelectorAll("img");
    let i = 0;

    //Reset Toyota to first img
    toyotaCars.forEach((toyotaCars) => {
        toyotaCars.classList.add("hide");
    });
    toyotaCars[0].classList.remove("hide");

    toyotaCars.forEach((toyotaCars) => {
        toyotaCars.classList.remove("toyotaImg");
    });
    toyotaCars[0].classList.add("toyotaImg");

    //Reset BMW to first img
    bmwCars.forEach((bmwCars) => {
        bmwCars.classList.add("hide");
    });
    bmwCars[0].classList.remove("hide");

    bmwCars.forEach((bmwCars) => {
        bmwCars.classList.remove("bmwImg");
    });
    bmwCars[0].classList.add("bmwImg");

    //Reset Porsche to first img
    porscheCars.forEach((porscheCars) => {
        porscheCars.classList.add("hide");
    });
    porscheCars[0].classList.remove("hide");

    porscheCars.forEach((porscheCars) => {
        porscheCars.classList.remove("porscheImg");
    });
    porscheCars[0].classList.add("porscheImg");
}

//Album Changing
function albumChange(e) {
    const carBrand = document.getElementById("carBrand")
    const toyotaWindow = document.querySelector(".toyotaWindow");
    const bmwWindow = document.querySelector(".bmwWindow");
    const porscheWindow = document.querySelector(".porscheWindow");

    if (e.target.id === 'toyota') {
        carBrand.innerHTML = "Toyota";
        toyotaWindow.classList.remove("hidewindow");
        bmwWindow.classList.add("hidewindow");
        porscheWindow.classList.add("hidewindow");
        albumReset();
    }

    if (e.target.id === 'bmw') {
        carBrand.innerHTML = "BMW";
        toyotaWindow.classList.add("hidewindow");
        bmwWindow.classList.remove("hidewindow");
        porscheWindow.classList.add("hidewindow");
        albumReset();
    }

    if (e.target.id === 'porsche') {
        carBrand.innerHTML = "Porsche";
        toyotaWindow.classList.add("hidewindow");
        bmwWindow.classList.add("hidewindow");
        porscheWindow.classList.remove("hidewindow");
        albumReset();
    }
    
}

//Toyota Image Change
function toyotaImg(e) {
    e.preventDefault();

    const toyotaWindow = document.querySelector(".toyotaWindow");
    const toyotaCars = toyotaWindow.querySelectorAll("img");
    let toyotaImg = document.querySelector(".toyotaImg");
    let nextImg = "";

    if(e.target.id === 'next') {
        nextImg = toyotaImg.nextElementSibling;
    }

    if(e.target.id === 'prev') {
        nextImg = toyotaImg.previousElementSibling;
    }

    toyotaImg.classList.toggle("hide")
    toyotaImg.classList.toggle("toyotaImg")

    if (!nextImg) {
        nextImg = toyotaCars[toyotaCars.length - 1];
    }

    if (nextImg.nodeName !== "IMG") {
        nextImg = toyotaCars[0];
    }

    nextImg.classList.toggle("hide")
    nextImg.classList.toggle("toyotaImg")

    console.log(nextImg)
}

//BMW Image Change
function bmwImg(e) {
    e.preventDefault();

    const bmwWindow = document.querySelector(".bmwWindow");
    const bmwCars = bmwWindow.querySelectorAll("img");
    let bmwImg = document.querySelector(".bmwImg");
    let nextImg = "";
    
    if(e.target.id === 'next') {
        nextImg = bmwImg.nextElementSibling;
    }

    if(e.target.id === 'prev') {
        nextImg = bmwImg.previousElementSibling;
    }

    bmwImg.classList.toggle("hide")
    bmwImg.classList.toggle("bmwImg")

    if (!nextImg) {
        nextImg = bmwCars[bmwCars.length - 1];
    }

    if (nextImg.nodeName !== "IMG") {
        nextImg = bmwCars[0];
    }

    nextImg.classList.toggle("hide")
    nextImg.classList.toggle("bmwImg")

    console.log(nextImg)
}

//Porsche Image Change
function porscheImg(e) {
    e.preventDefault();

    const porscheWindow = document.querySelector(".porscheWindow");
    const porscheCars = porscheWindow.querySelectorAll("img");
    let porscheImg = document.querySelector(".porscheImg");
    let nextImg = "";
    
    if(e.target.id === 'next') {
        nextImg = porscheImg.nextElementSibling;
    }

    if(e.target.id === 'prev') {
        nextImg = porscheImg.previousElementSibling;
    }

    porscheImg.classList.toggle("hide")
    porscheImg.classList.toggle("porscheImg")

    if (!nextImg) {
        nextImg = porscheCars[porscheCars.length - 1];
    }

    if (nextImg.nodeName !== "IMG") {
        nextImg = porscheCars[0];
    }

    nextImg.classList.toggle("hide")
    nextImg.classList.toggle("porscheImg")

    console.log(nextImg)
}
