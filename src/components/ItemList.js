import { useSelector } from "react-redux"

const ItemList = () => {
    const books = useSelector(state => state.books.arrBooks)

    return (
        <>
            {books.length === 0 ? <p className="p-center">Aun no buscaste nada...</p> : <div className='container-item'>
                {books.map(item => (
                    <div className='item'>
                        <div className="title-item">
                            <p>Titulo: {item.volumeInfo.title}</p>
                        </div>
                        <div className="info-item">
                            <div className="volumenInfo-item">
                                <p><b>Autores:</b> {item.volumeInfo.authors}</p>
                                <p><b>Año de publicacion:</b> {item.volumeInfo.publishedDate}</p>
                                <p><b>Editorial:</b> {item.volumeInfo.publisher}</p>
                                <a href={item.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer"><button>Leer libro</button></a>
                            </div>
                            <div>
                                {item.volumeInfo.imageLinks ? <img src={item.volumeInfo.imageLinks.thumbnail} alt="" width={170} height={220} /> :
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png' alt="" width={200} height={170} />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>}
        </>

    )
}

export default ItemList
