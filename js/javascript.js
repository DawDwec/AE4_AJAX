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
                alert("Error al obtener respuesta del servidor")
            }
        }
    }

    xmlHttp.open('GET', recurso, true)
    xmlHttp.send(null)
    
}

function listarTamanos(jsonDoc) {
    var objetoJson = JSON.parse(jsonDoc)
    var table = "<tr><th>Tamaño</th><th>Precio</th></tr>";
    var arrayPizzas = objetoJson;

var len = arrayPizzas.length;
var table = document.getElementById('Tabla');

for (var i=0; i < len; i++) {
    var tr = document.createElement('tr');
    var s = arrayPizzas[i];

    var td = document.createElement('td');
    td.innerHTML = s.tipo;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = s.precio;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = s.key;
    tr.appendChild(td);
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "key";
    checkbox.value = s.key;
    checkbox.id = "id";
    tr.appendChild(checkbox);

    table.appendChild(tr);
}

function checkValue(){
    var names = document.getElementsByName("key");
    names.forEach(function(s){console.log(s.value , s.checked);});
};

}