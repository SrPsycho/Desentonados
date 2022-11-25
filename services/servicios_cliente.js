const listaProductos = () => fetch('http://localhost:3000/cards').then(respuesta => respuesta.json());

const baseDeDatos = (url,tittle,author,year) => {
    return fetch('http://localhost:3000/cards',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({url,tittle,author,year,nuevo:true,id: uuid.v4()})
    })
}
const eliminarAlbum = (id) => {
    return fetch(`http://localhost:3000/cards/${id}`,{
      method: 'DELETE'
    })
}
const editarAlbum = (url,tittle,author,year,id) => {
    return fetch(`http://localhost:3000/cards/${id}`,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },body: JSON.stringify({url,tittle,author,year})
    })
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err));
};

const mostrarAlbumes = (url,tittle,author,year,id) => {
  return fetch('http://localhost:3000/cards',{
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({url,tittle,author,year,id})
})
}

const detalleAlbum = (id) => {
  return fetch(`http://localhost:3000/cards/${id}`)
.then(respuesta => respuesta.json())}

const crearUsuario = (nombre,email,pass) => {
  return fetch(`http://localhost:3000/perfil`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({nombre,email,pass,id: uuid.v4()})
  })
}
const listaUsuarios = () => fetch('http://localhost:3000/perfil').then(respuesta => respuesta.json());

export const servicios ={
    listaProductos,
    baseDeDatos,
    eliminarAlbum,
    editarAlbum,
    mostrarAlbumes,
    detalleAlbum,
    crearUsuario,
    listaUsuarios
}