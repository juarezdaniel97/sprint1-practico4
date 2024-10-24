
function homeController(req,res) {
    res.send('Página de Inicio')
}

function obtenerSuperheroePorIdController(req, res) {
    const {id} = req.params;
    
    res.send(id)
}


function buscarSuperheroePorAtributoController(req, res) {
    
}

function obenerSuperheroeMayorA30Controller (req, res) {
    
}

//EXPORTAMOS LAS FUNCIONES
export {
        homeController,
        obtenerSuperheroePorIdController, 
        buscarSuperheroePorAtributoController, 
        obenerSuperheroeMayorA30Controller
    }