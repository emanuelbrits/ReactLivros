import { useState } from "react";
import { Bookform } from "./Bookform";
import { Booklist } from "./Booklist";
import { ulid } from "ulidx";

export interface book {
    id: string;
    titulo: string;
    link: string;
    descricao: string;
}

export function Bookspage() {

    const [books, setBooks] = useState<book[]>([])

    const handleAddBook = (titulo: string, link: string, descricao: string) => {
        const newBook = {
            id: ulid(),
            titulo: titulo,
            link: link,
            descricao: descricao
        }

        setBooks([newBook, ...books])
        alert("Livro adicionado")
    }

    const handleRemoveBook = (book: book) => {
        const filtrados = books.filter(b => b.id !== book.id)
        let resultado = confirm('Tem certeza que deseja remover ?')

        if(resultado) {
            setBooks(filtrados)
            alert('Livro removido')
        } else {
            alert('Operação cancelada')
        }
    }

    return(
        <>
            <Bookform onAdd={handleAddBook}/>
            <Booklist books={books} onRemove={handleRemoveBook}/>
        </>
    )
}