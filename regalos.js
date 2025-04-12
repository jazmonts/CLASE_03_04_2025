function buscarRegalo(lista, regalo, indice = 0) {
    // Caso base: si hemos recorrido toda la lista y no encontramos el regalo
    if (indice >= lista.length) {
        return `El regalo "${regalo}" no está en la lista.`;
    }

    // Caso base: si encontramos el regalo en la posición actual
    if (lista[indice] === regalo) {
        return `El regalo "${regalo}" está en la posición ${indice}.`;
    }

    // Llamada recursiva avanzando al siguiente índice
    return buscarRegalo(lista, regalo, indice + 1);
}

// Ejemplo de uso
const listaDeRegalos = ["muñeca", "carro", "pelota", "tren", "rompecabezas"];
console.log(buscarRegalo(listaDeRegalos, "pelota")); 
console.log(buscarRegalo(listaDeRegalos, "tablet")); 
