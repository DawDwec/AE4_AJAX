const urlDestino = "http://localhost:5500/AE4_AJAX/"
const recurso = "pizza.json"

function enviarPeticionAsincrona() {

    let xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                listarTamanos(this.responseText)
            } else {
                alert("Error al obtener respuesta del servdor")
            }
        }
    }

    xmlHttp.open('GET', urlDestino + recurso, true)
    xmlHttp.send(null)
}

function listarTamanos(jsonDoc) {
    var objetoJson = JSON.parse(jsonDoc)

    console.log(objetoJson)

    var table = "<tr><th>Tamaño</th><th>Precio</th></tr>";
    var arrayPizzas = objetoJson.datosPizza.tamanosPizza;

    for(let datosPizza of arrayPizzas) {
        table += "<tr><td>" + datosPizza.tamanosPizza.tamano + "</td>"+
        "<td>" + datosPizza.tamanosPizza.precio + "</td></tr>";
    }

    tamanoPizza.innerHTML = table;

}