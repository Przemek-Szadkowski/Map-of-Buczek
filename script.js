// zmienne zawierajace przyciski i grafiki ulic

const glownast = document.querySelector(".ulglowna");
const ulicaG = document.querySelector(".glowna");
const brojscest = document.querySelector(".ulbrojsce");
const ulicaB = document.querySelector(".brojsce");
const cichast = document.querySelector(".ulcicha");
const ulicaC = document.querySelector(".cicha");
const debowast = document.querySelector(".uldebowa");
const ulicaD = document.querySelector(".debowa");
const gornast = document.querySelector(".ulgorna");
const ulicaGo = document.querySelector(".gorna");
const krotkast = document.querySelector(".ulkrotka");
const ulicaK = document.querySelector(".krotka");
const lakowast = document.querySelector(".ullakowa");
const ulicaL = document.querySelector(".lakowa");
const modrzewiowast = document.querySelector(".ulmodrzewiowa");
const ulicaM = document.querySelector(".modrzewiowa");
const lipowast = document.querySelector(".ullipowa");
const ulicaLi = document.querySelector(".lipowa");
const osiedlest = document.querySelector(".ulosiedle");
const ulicaOM = document.querySelector(".osiedle");
const parcelast = document.querySelector(".ulparcela");
const ulicaP = document.querySelector(".parcela");
const parkowast = document.querySelector(".ulparkowa");
const ulicaPar = document.querySelector(".parkowa");
const pienkist = document.querySelector(".ulpienki");
const ulicaPie = document.querySelector(".pienki");
const poludniowast = document.querySelector(".ulpoludniowa");
const ulicaPo = document.querySelector(".poludniowa");
const poprzecznast = document.querySelector(".ulpoprzeczna");
const ulicaPop = document.querySelector(".poprzeczna");
const prostast = document.querySelector(".ulprosta");
const ulicaPro = document.querySelector(".prosta");
const slonecznast = document.querySelector(".ulsloneczna");
const ulicaSl = document.querySelector(".sloneczna");
const spacerowast = document.querySelector(".ulspacerowa");
const ulicaSp = document.querySelector(".spacerowa");
const spokojnast = document.querySelector(".ulspokojna");
const ulicaSpo = document.querySelector(".spokojna");
const spoldzielczast = document.querySelector(".ulspoldzielcza");
const ulicaSpol = document.querySelector(".spoldzielcza");
const szkolnast = document.querySelector(".ulszkolna");
const ulicaSz = document.querySelector(".szkolna");
const topolowast = document.querySelector(".ultopolowa");
const ulicaT = document.querySelector(".topolowa");
const waskast = document.querySelector(".ulwaska");
const ulicaW = document.querySelector(".waska");
const wschodniast = document.querySelector(".ulwschodnia");
const ulicaWs = document.querySelector(".wschodnia");
const zielonast = document.querySelector(".ulzielona");
const ulicaZ = document.querySelector(".zielona");

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

//warunki dzialnia ulicy szadek i wygwizdow, by sie nie wylaczaly

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

//koniec szadku i wygwizdowa


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

// nasluchiwanie na button i ich dzialnie

glownast.addEventListener("click", function () {
    ulicaG.classList.toggle("visible");
    glownast.classList.toggle("green");
});
brojscest.addEventListener("click", function () {
    ulicaB.classList.toggle("visible");
    brojscest.classList.toggle("green");
});

cichast.addEventListener("click", function () {
    ulicaC.classList.toggle("visible");
    cichast.classList.toggle("green");
});
debowast.addEventListener("click", function () {
    ulicaD.classList.toggle("visible");
    debowast.classList.toggle("green");
});
gornast.addEventListener("click", function () {
    ulicaGo.classList.toggle("visible");
    gornast.classList.toggle("green");
});
krotkast.addEventListener("click", function () {
    ulicaK.classList.toggle("visible");
    krotkast.classList.toggle("green");
});
lakowast.addEventListener("click", function () {
    ulicaL.classList.toggle("visible");
    lakowast.classList.toggle("green");
});
modrzewiowast.addEventListener("click", function () {
    ulicaM.classList.toggle("visible");
    modrzewiowast.classList.toggle("green");
});
lipowast.addEventListener("click", function () {
    ulicaLi.classList.toggle("visible");
    lipowast.classList.toggle("green");
});
osiedlest.addEventListener("click", function () {
    ulicaOM.classList.toggle("visible");
    osiedlest.classList.toggle("green");
});
parcelast.addEventListener("click", function () {
    ulicaP.classList.toggle("visible");
    parcelast.classList.toggle("green");
});
parkowast.addEventListener("click", function () {
    ulicaPar.classList.toggle("visible");
    parkowast.classList.toggle("green");
});
pienkist.addEventListener("click", function () {
    ulicaPie.classList.toggle("visible");
    pienkist.classList.toggle("green");
});
poludniowast.addEventListener("click", function () {
    ulicaPo.classList.toggle("visible");
    poludniowast.classList.toggle("green");
});
poprzecznast.addEventListener("click", function () {
    ulicaPop.classList.toggle("visible");
    poprzecznast.classList.toggle("green");
});
prostast.addEventListener("click", function () {
    ulicaPro.classList.toggle("visible");
    prostast.classList.toggle("green");
});
slonecznast.addEventListener("click", function () {
    ulicaSl.classList.toggle("visible");
    slonecznast.classList.toggle("green");
});
spacerowast.addEventListener("click", function () {
    ulicaSp.classList.toggle("visible");
    spacerowast.classList.toggle("green");
});
spokojnast.addEventListener("click", function () {
    ulicaSpo.classList.toggle("visible");
    spokojnast.classList.toggle("green");
});
spoldzielczast.addEventListener("click", function () {
    ulicaSpol.classList.toggle("visible");
    spoldzielczast.classList.toggle("green");
});
szkolnast.addEventListener("click", function () {
    ulicaSz.classList.toggle("visible");
    szkolnast.classList.toggle("green");
});
topolowast.addEventListener("click", function () {
    ulicaT.classList.toggle("visible");
    topolowast.classList.toggle("green");
});
waskast.addEventListener("click", function () {
    ulicaW.classList.toggle("visible");
    waskast.classList.toggle("green");
});
wschodniast.addEventListener("click", function () {
    ulicaWs.classList.toggle("visible");
    wschodniast.classList.toggle("green");
});
zielonast.addEventListener("click", function () {
    ulicaZ.classList.toggle("visible");
    zielonast.classList.toggle("green");
});

//DZIAŁA!!! - sprawdzić po powrocie :)))

// buttons.forEach(function (button) {
//     button.addEventListener("click", function () {
//         document.querySelector('[data-ulica="' + this.className + '"]').classList.toggle("visible");
//     });
// })

//koniec buttonow

// dzialanie przycisku wyczyść

clearButton.addEventListener("click", function () {
    // location.reload();
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("green");
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


// dodac kierunki i kierunek centrum Buczku na wjezdzajacych mapach
// dodac responsywnosc