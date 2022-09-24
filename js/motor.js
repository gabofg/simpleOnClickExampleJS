var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var sonidoBotonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido";
        vibracion();
        licuadora.classList.add("active");
        //console.log("me encendistes");
    } else {
        estadoLicuadora = "apagada";
        vibracion();
        licuadora.classList.remove("active")
        //console.log("me apagaste");
    }
    function vibracion(){
        if(sonidoLicuadora.paused){
            sonidoBotonLicuadora.play();
            sonidoLicuadora.play();
        } else {
            sonidoBotonLicuadora.play();
            sonidoLicuadora.pause();
            sonidoLicuadora.currentTime = 0;
        }
    }
}