const urlDestino = "https://127.0.0.1/AE4_AJAX/"
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
    var arrayPizzas = objetoJson.datosPizza.tamanoPizza;

    for(let datosPizza of arrayPizzas) {
        table += "<tr><td>" + datosPizza.tamanoPizza.tamano + "</td>"+
        "<td>" + datosPizza.tamanoPizza.precio + "</td></tr>";
    }

    tamanoPizza.innerHTML = table;

}