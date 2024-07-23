
// _________Champ de saisi

let saisir= document.getElementById("saisir");
let btn= document.querySelectorAll(".btn");
let btn3=document.querySelectorAll(".btn2");


function affiche(e){
 saisir.value += parseInt(e.target.innerHTML);
}

function operateur(e){
  saisir.value += e.target.innerHTML;

}

btn.forEach((element) => {
element.addEventListener("click", affiche);


});

btn3.forEach((elemen) => {
elemen.addEventListener("click", operateur);

});

function resultat (){

    saisir.value= eval(saisir.value)

}

function reset() {
  
const result=saisir.value;
const contenue=result.slice(0,-1);
saisir.value=contenue;
}

function effacer(){
  saisir.value=" "
  console.log("____________")
}
















