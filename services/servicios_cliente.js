const listaProductos = () => fetch('http://localhost:3000/cards').then(respuesta => respuesta.json());

const baseDeDatos = (url,tittle,author,year) => {
    return fetch('http://localhost:3000/cards',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({url,tittle,author,year,id: uuid.v4()})
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

export const servicios ={
    listaProductos,
    baseDeDatos,
    eliminarAlbum,
    editarAlbum
}