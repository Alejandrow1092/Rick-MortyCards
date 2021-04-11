
const contenedor= document.getElementById('contenedor')

//Es un proceso asincrono
const llamaAPI = async() =>{
    //trae informacion de APIS como JSON
    const res = await fetch("https://rickandmortyapi.com/api/character/?page=1")
    const data = await res.json()//json() convierte res a algo que se pueda leer
    const personajes = data.results
    const ubicacion =data.location

    console.log(personajes)

    const result = personajes
        .map((personaje) => {//map recive una funcion y retorna algo
            return generarTarjeta(personaje)
        }).join(' ')

    contenedor.innerHTML= result
        
    //console.log(personajes)
}

const generarTarjeta = ({image, name, species, dimension, location}) =>{//object destructuring
    return `
    <section id="tarjeta">
        <h3>${name}</h3>
        <img src="${image}" alt="${name}">
        <div id="cardCenter">
            <br><p>Especie: ${species}</p><br>
            <p>Location: ${location.name}</p><br>
            
        </div>
    </section>
    `
}

llamaAPI()