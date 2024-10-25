
import SuperheroeFileRepository from "../repository/superheroeRepository.mjs";


const repository = new SuperheroeFileRepository();



function obtenerSuperheroesPorId(id) {
    const superheroes = repository.obtenerTodos();
    
    return superheroes.find(hero => hero.id ===id);
}

function obtenerListaDeSuperheroes() {
    const superheroes = repository.obtenerTodos();

    return superheroes
}

function buscarSuperhereoPorAtributo(atributo, valor) {
    const superheroes = repository.obtenerTodos();

    return superheroes.filter(hero => String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()))
}

function obteneerSuperheroeMayorA30() {
    
}

export {
        obtenerSuperheroesPorId,
        obtenerListaDeSuperheroes,
        buscarSuperhereoPorAtributo, 
        obteneerSuperheroeMayorA30
    }
