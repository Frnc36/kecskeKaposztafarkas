let kElemek = document.querySelectorAll("img");

let kNev = document.getElementById("nev");
kNev.innerHTML = "Mágori Ferenc Ferdinánd";

let tNev = document.querySelector("title");
tNev.innerHTML = "Mágori Ferenc Ferdinánd";

let jobbElem = document.getElementById("jobb");
let csonakElem = document.getElementById("csonak");
const csonakLista = [];

/* függvények */
kiemeltKeret(kElemek);
listaba(kElemek);

function kiemeltKeret() {
  for (let index = 0; index < kElemek.length; index++) {
    kElemek[index].addEventListener("mouseover", function () {
      kElemek[index].classList.add("kiemelt");
    });

    kElemek[index].addEventListener("mouseout", function () {
      kElemek[index].classList.remove("kiemelt");
    });
  }
}

function listaba(kElemek) {
  for (let index = 0; index < kElemek.length; index++) {
    kElemek[index].addEventListener("click", function () {
      kElemek[index].style.display = "none";
      //event.target.style.display = "none";
      console.log(kElemek[index]);
      csonakLista.push(kElemek[index].src);
      //csonakLista.push(event.target.src);
      //let kep = kElemek[index].src;
      //csonakLista.push(kep);
      csonakba();
    });
  }
}

function csonakba() {
  let szoveg = "";
  for (let index = 0; index < csonakLista.length; index++) {
    szoveg += `<img src="${csonakLista[index]}" class="meret">`;
    //console.log(csonakLista[index]);
    csonakElem.innerHTML = szoveg;
  }
}

/* (tomb.push(event.target.src)) 
szovegElem[1].classList.add("valami");*/
