// zmienne dotyczace szadku i wygwizdowa na osobnych planszach

const szadekst = document.querySelector(".ulszadek");
const ulicaSza = document.querySelector(".szadek");
const wygwizdowst = document.querySelector(".ulwygwizdow");
const ulicaWyg = document.querySelector(".wygwizdow");
const mapaszadek = document.querySelector(".north");
var centerPositionofSzadek = false;
var centerPositionofWygwizdow = false;

// zmienne funkcji wyczysc

const clearButton = document.querySelector(".clear");
const buttons = document.querySelectorAll(".button");
const streets = document.querySelectorAll(".street");
const buildings = document.querySelectorAll("div.map i.fas");
const mainStreets = document.querySelectorAll(".mainmap");

//warunki działania ulicy szadek i wygwizdów, by sie nie wyłączały

szadekst.addEventListener("click", function () {
    if (centerPositionofWygwizdow == false) {
        mapaszadek.classList.toggle("center");
        ulicaSza.classList.toggle("visibleSz");
        szadekst.classList.toggle("green");
        if (centerPositionofSzadek == false) {
            centerPositionofSzadek = true;
        } else if (centerPositionofSzadek == true) {
            centerPositionofSzadek = false;
            ulicaSza.classList.remove("visibleSz");
            szadekst.classList.remove("green");
            wygwizdowst.classList.remove("green");
            ulicaWyg.classList.remove("visibleSz");
        }
    } else if (centerPositionofWygwizdow == true) {
        ulicaSza.classList.toggle("visibleSz");
        szadekst.classList.toggle("green");
    };
});

wygwizdowst.addEventListener("click", function () {
    if (centerPositionofSzadek == false) {
        mapaszadek.classList.toggle("center");
        wygwizdowst.classList.toggle("green");
        ulicaWyg.classList.toggle("visibleSz");
        if (centerPositionofWygwizdow == false) {
            centerPositionofWygwizdow = true;
        } else if (centerPositionofWygwizdow == true) {
            centerPositionofWygwizdow = false;
            wygwizdowst.classList.remove("green");
            ulicaWyg.classList.remove("visibleSz");
            ulicaSza.classList.remove("visibleSz");
            szadekst.classList.remove("green");
        }
    } else if (centerPositionofSzadek == true) {
        ulicaWyg.classList.toggle("visibleSz");
        wygwizdowst.classList.toggle("green");
    };
});

// przelaczenie na inna ulice po wcisnieciu przycisku na szadku i wygwizdowie

mainStreets.forEach(function (mainStreet) {
    mainStreet.addEventListener("click", function () {
        mapaszadek.classList.remove("center");
        wygwizdowst.classList.remove("green");
        ulicaWyg.classList.remove("visibleSz");
        ulicaSza.classList.remove("visibleSz");
        szadekst.classList.remove("green");
        centerPositionofSzadek = false;
        centerPositionofWygwizdow = false;
    })
});

// nasluchiwanie na buttony i ich działanie

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelector('[data-ulica="' + this.className + '"]').classList.toggle("visible");
        if (this.getAttribute("id") != "green") {
            this.setAttribute("id", "green");
        } else {
            this.removeAttribute("id", "green");
        }
    })
});

// dzialanie przycisku wyczyść

clearButton.addEventListener("click", function () {
    // location.reload();
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute("id", "green");
    }
    for (let i = 0; i < streets.length; i++) {
        streets[i].classList.remove("visible");
    }
    for (let i = 0; i < buildings.length; i++) {
        buildings[i].classList.remove("visible2");
    }
    centerPositionofSzadek = false;
    centerPositionofWygwizdow = false;
    mapaszadek.classList.remove("center");
    ulicaSza.classList.remove("visibleSz");
    szadekst.classList.remove("green");
    wygwizdowst.classList.remove("green");
    ulicaWyg.classList.remove("visibleSz");
})


// dodać kierunki i kierunek centrum Buczku na wjeżdzajacych mapach
// dodać responsywność
// zmienić jquery buttonów budynków na js