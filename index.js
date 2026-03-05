let kNev = document.getElementById("nev");
kNev.innerHTML = "Mágori Ferenc Ferdinánd";

let tNev = document.querySelector("title");
tNev.innerHTML = "Mágori Ferenc Ferdinánd";


let kElemek = document.querySelectorAll("img")

for (let index = 0; index < kElemek.length; index++) {

}
kElemek[0].addEventListener("mouseover", function () {
    kElemek[0].classList.add("kiemelt")
})

kElemek[0].addEventListener("mouseout", function () {
    kElemek[0].classList.remove("kiemelt")
})