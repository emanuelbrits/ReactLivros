import { book } from "..";

interface BookListProps {
    book: book;
    onRemove: (book: book) => void
}

export function BookListItem({book, onRemove}: BookListProps) {

    const handleRemove = () => {onRemove(book)}

    return(
        <li>
            <div>
                <p>Título: {book.titulo} - Link: {book.link} -  Descrição: {book.descricao} <button onClick={handleRemove}>Remover</button></p>
            </div>
        </li>
    )
}