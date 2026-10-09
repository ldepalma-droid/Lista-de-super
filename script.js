let listaDeSuper = [];

listaDeSuper.push("Leche");
listaDeSuper.push("Pan");
listaDeSuper.push("Huevos");
listaDeSuper.push("Arroz");

listaDeSuper.push("Queso");
listaDeSuper.push("Galletitas");

listaDeSuper.unshift("Jugo");
listaDeSuper.unshift("Fideos");

let noHabia = listaDeSuper.pop();
let comprado = listaDeSuper.shift();

function logItems(lista) {
    lista.forEach(function(producto, indice) {
        console.log(indice + ": " + producto);
    });
}

let comando = "";

while (comando !== "salir") {
    comando = prompt("Escribi: nuevo, listar, borrar o salir");

    if (comando === "nuevo") {
        let producto = prompt("Que producto queres agregar?");
        if (producto) listaDeSuper.push(producto);

    } else if (comando === "listar") {
        logItems(listaDeSuper);

    } else if (comando === "borrar") {
        logItems(listaDeSuper);
        let indice = Number(prompt("Numero del producto a borrar:"));

        if (Number.isInteger(indice) && indice >= 0 && indice < listaDeSuper.length) {
            listaDeSuper.splice(indice, 1);
            console.log("Producto eliminado");
        } else {
            console.log("Indice invalido");
        }
    }
}