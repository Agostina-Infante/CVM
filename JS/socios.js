const BtnAdmin=document.getElementById("BtnSuperior");
const BtnDeportes=document.getElementById("BtnInferiorIz");
const BtnSalud=document.getElementById("BtnInferiorDe");
const ContScreen01=document.getElementById("Screen01");
const BtnImprimirOrden=document.getElementById("ImprimirOrden");
const TxtComoContinuar=document.getElementById("ComoContinuar");
const ContScreen02=document.getElementById("Screen02");
const BtnSalir=document.getElementById("Salir");
const TxtGuia=document.getElementById("Guia");

BtnAdmin.addEventListener('click', () => {
    MostrarScreen();
});
BtnDeportes.addEventListener('click', ()=> {
    MostrarScreen();
});
BtnSalud.addEventListener('click',() => {
    MostrarScreen();
});

BtnImprimirOrden.addEventListener('click', () => {
    CambiarScreen();
});
BtnSalir.addEventListener('click', ()=>{

});

function MostrarScreen(){
    ContScreen01.style.visibility="visible";
}
function CambiarScreen(){
    ContScreen01.style.visibility="hidden";
    ContScreen02.style.visibility="visible";
}