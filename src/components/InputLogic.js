import { useState} from 'react'
import { useDispatch } from 'react-redux'
import { obtenerLibros ,borrarLibros } from './redux/booksDucks'

const InputLogic = () => {
    const dispatch = useDispatch()
    const [queryUser, setQueryUser] = useState('')


    const handleChange = (e) => {
        e.preventDefault()
        setQueryUser(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(obtenerLibros(queryUser))
    }
    const emptyResult = (e) => {
        e.preventDefault()
        setQueryUser('')
        dispatch(borrarLibros())
    }

    const enter = (e) => {
        if (e.key === "Enter") {
            handleClick(e)
        }
    }


    return (
        <div className='container-input'>
            {queryUser !== ''?<button className='button-clear' onClick={emptyResult}><span className="material-icons iconClear">clear</span></button>:null}
            <input className='input' onChange={handleChange} onKeyDown={enter} type="text" placeholder="Escribí aca el autor o nombre del libro" value={queryUser} />
            <button className='btn-search' onClick={handleClick} >Buscar</button>
        </div>
    )
}

export default InputLogic
