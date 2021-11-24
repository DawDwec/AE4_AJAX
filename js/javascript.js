const urlDestino = "http://127.0.0.1:5500/AE4_AJAX/"
const recurso = "pizza.json"

function enviarPeticionAsincrona() {

    let xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                console.log(this.responseText)
                listarTamanos(this.responseText)
            } else {
                alert("Error al obtener respuesta del servdor")
            }
        }
    }

    xmlHttp.open('GET', recurso, true)
    xmlHttp.send(null)
    
}

function listarTamanos(jsonDoc) {
    var objetoJson = JSON.parse(jsonDoc)

    var table = "<tr><th>Tamaño</th><th>Precio</th></tr>";
    var arrayPizzas = objetoJson.datosPizza;

    for(let pizza of arrayPizzas) {
        table += "<tr><td>" + pizza.tamanoPizza.tamano + "</td>"+
        "<td>" + pizza.tamanoPizza.precio + "</td></tr>";
    }

    tamanoPizza.innerHTML = table;

}