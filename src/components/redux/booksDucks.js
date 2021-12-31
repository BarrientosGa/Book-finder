import axios from "axios"

//constante
    const dataInicial = {
        arrBooks: []
}
//types
const OBTENER_LIBROS = 'OBTENER_LIBROS'
const BORRAR_LIBROS = 'BORRAR_LIBROS'

//reducer
export default function bookReducer (state = dataInicial , action ){
    switch (action.type) {
        case OBTENER_LIBROS:
            return {...state, arrBooks:action.payload}
        case BORRAR_LIBROS:
            return {...state, arrBooks:action.payload}
        default:
            return state
    }
}

//action
export const obtenerLibros = (consulta) => async (dispatch, getState) => {
    try{
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + consulta)
        dispatch({
            type : OBTENER_LIBROS,
            payload : res.data.items
        })
    }
    catch(error){
        console.log(error)
    }
}

export const borrarLibros = () => (dispatch, getState) => {
    dispatch({
        type : BORRAR_LIBROS,
        payload : []
    })
}