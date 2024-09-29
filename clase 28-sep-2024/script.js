
document.getElementById("eventos").style.display = "none";
document.getElementById("validacionCod").style.display = "none";
document.getElementById("alerta").style.display = "none";

var codUsed = false
var cod = "codigo1";

function calcularEdad() {
    var hoy = new Date();
    var cumpleaños = new Date(document.getElementById("fecha").value);
    var edad = hoy.getFullYear() - cumpleaños.getFullYear();
    var mes = hoy.getMonth() - cumpleaños.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleaños.getDate())) {
        edad--;
    }
    document.getElementById("edad").value = edad;



    if (edad >= 15) {
        document.getElementById("eventos").style.display = "block";
        document.getElementById("edadVal").style.display = "none";
    } else {
        document.getElementById("eventos").style.display = "none";
        document.getElementById("alerta").style.display = "none";
        document.getElementById("validacionCod").style.display = "none";
        document.getElementById("edadVal").value = "Menores de 15 años NO pueden inscribirse";
        document.getElementById("edadVal").style.display = "block";
    }
}

function precioevento() {
    if (document.getElementById("ev").value == 1) {

        document.getElementById("precio").value = 0;

    } else if (document.getElementById("ev").value == 2) {

        document.getElementById("precio").value = 10000;

    } else {
        document.getElementById("precio").value = 50000;
    }
}

function codigo() {
    var codUsed = false
    var cod = "codigo1";
    var total;
    if (document.getElementById("codigoProm").value == cod && codUsed == false) {
        total = parseInt(document.getElementById("precio").value) * 0.10;
        total = parseInt(document.getElementById("precio").value) - total;
        var codUsed = true;
        document.getElementById("validacionCod").value = " ";
        document.getElementById("validacionCod").style.display = "none";
    } else {
        document.getElementById("validacionCod").value = "El Codigo Promocional no Existe o ya ha Sido Usado";
        document.getElementById("validacionCod").style.display = "block";
        total = parseInt(document.getElementById("precio").value);
    }
    document.getElementById("resultado").value = total;


}

function descuentoUsado() {
    var cod = "codigo1";
    codUsed = false;
    if (document.getElementById("tipoDoc").value == 0 || document.getElementById("documento").value == "" || document.getElementById("nombre").value == "" || document.getElementById("fecha").value == "" || document.getElementById("ev").value == 0) {
        document.getElementById("alerta").value = "Por favor Rellene los Campos Faltantes";
        document.getElementById("alerta").style.display = "block";
    } else if (document.getElementById("documento").value.length > 11 || document.getElementById("documento").value.length < 6) {
        document.getElementById("alerta").value = "El Numero de Documento NO es Valido";

    } else if (document.getElementById("codigoProm").value == cod && codUsed == false) {
        codUsed = true;
        document.getElementById("alerta").value = "Se ha inscrito con exito usando un Codigo Promocional";
        document.getElementById("alerta").style.display = "block";
    } else if (codUsed == true) {
        document.getElementById("alerta").value = "El Codigo Promocional ya ha sido usado";
        document.getElementById("alerta").style.display = "block";
    } else if (document.getElementById("codigoProm").value != cod && codUsed == false) {
        document.getElementById("alerta").value = "Se ha Inscrito con exito";
        document.getElementById("alerta").style.display = "block";
    } else if (document.getElementById("codigoProm").value == null) {
        document.getElementById("alerta").value = "Se ha Inscrito con exito";
        document.getElementById("alerta").style.display = "block";
    }
}

function minMaxDocument() {
    if (document.getElementById("documento").value.length > 11 || document.getElementById("documento").value.length < 6) {
        alert("NO ES UN DOCUMENTO VALIDO");
        document.getElementById("documentoValidacion").value = "NO ES UN DOCUMENTO VALIDO";
    } else {
        document.getElementById("documentoValidacion").style.display = "none";
    }

}
