import { book } from "..";
import { BookListItem } from "../Booklistitem";

interface BookListProps {
    books: book[];
    onRemove: (book: book) => void
}

const Booklist = ({books, onRemove}: BookListProps) => {
    return (
        <>
            <h3>{books.length} Livros cadastrados</h3>
            <ul>
                {books.map(book => <BookListItem onRemove={onRemove} key={book.id} book={book}/>)}
            </ul>
        </>
    )
}

export {Booklist}