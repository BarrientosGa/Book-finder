
import { useState, useEffect } from 'react'
import ItemList from './ItemList'

const HomeBooks = () => {
    const [queryUser, setQueryUser] = useState('')
    const [books, setBooks] = useState([])
    const [click, setClick] = useState(false)
    const [mostrar, setMostrar] = useState(false)
    const url = `https://www.googleapis.com/books/v1/volumes?q=`;
    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.value === '') {
            setMostrar(false)
            setQueryUser('')
        }
        else {
            setQueryUser(e.target.value)
            setMostrar(true)
        }
    }
    useEffect(() => {
        if (queryUser !== '') {
            fetch(url + queryUser)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setBooks(data.items);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [queryUser])


    const handleClick = (e) => {
        e.preventDefault()
        if (queryUser === '') {
            setClick(false)
        }
        else {
            setClick(true)
        }
    }
    const emptyResult = (e) => {
        e.preventDefault()
        if (queryUser !== "") {
            setQueryUser('')
            setBooks([])
            setClick(false)
        }
    }

    const enter = (e) => {
        if (e.key === "Enter") {
            handleClick(e)
        }
    }

    return (
        <>
            <div className="main">
                <div className="container-home">
                    <div className='header'>
                        <h1 className='title-home'>Book finder</h1>
                    </div>
                    <div className='container-input'>
                        {mostrar ? <button className='button-clear' onClick={emptyResult}><span className="material-icons iconClear">clear</span></button> : null}
                        <input className='input' onChange={handleChange} onKeyDown={enter} type="text" name="search" placeholder="Escriba autor, nombre del libro, tema ..." value={queryUser} required></input>
                        <button className='btn-search' onClick={handleClick}>Buscar</button>
                        <div className='before-search'>
                            {!click ? <p>Aun no buscaste nada...</p> : null}
                        </div>
                    </div>
                </div>
            </div>
            {click && books.length !== 0 ? <ItemList items={books} /> : null}
        </>


    )
}

export default HomeBooks
