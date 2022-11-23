const listaProductos = () => fetch('http://localhost:3000/cards').then(respuesta => respuesta.json());

const baseDeDatos = (url,tittle,year) => {
    return fetch('http://localhost:3000/cards',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({url,tittle,year,id: uuid.v4()})
    })
}
const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
      method: 'DELETE'
    })
  }

export const servicios ={
    listaProductos,
    baseDeDatos
}