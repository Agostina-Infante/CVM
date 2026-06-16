const BtnSalud=document.getElementById("Salud");
const BtnMasInfo=document.getElementById("MasInfo");
const ContScreen01=document.getElementById("Screen01");
const BtnImprimirOrden=document.getElementById("ImprimirOrden");
const TxtComoContinuar=document.getElementById("ComoContinuar");
const ContScreen02=document.getElementById("Screen02");
const BtnSalir=document.getElementById("Salir");
const TxtGuia=document.getElementById("Guia");

BtnSalud.addEventListener('click', () => {
    MostrarScreen();
});
BtnMasInfo.addEventListener('click', ()=> {
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

fetch