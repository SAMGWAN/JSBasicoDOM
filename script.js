const h1=document.querySelector("h1");
const p=document.querySelector("p");
const pid=document.getElementById("pid");
const input1=document.getElementById("cal1");
const input2=document.getElementById("cal2");
const btn=document.getElementById("btn");
const pres=document.getElementById("result");
const form=document.getElementById("form");

h1.innerHTML="Bronco<br>Haooo";

form.addEventListener('submit',sumInputValues);

function sumInputValues(e){
    e.preventDefault();
    const suma=parseInt(input1.value)+parseInt(input2.value);
    pres.innerText="Resultado= "+suma;
};