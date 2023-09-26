import { useRef } from "react"

interface BookFormProps {
    onAdd: (titulo: string, link: string, descricao: string) => void
}

export function Bookform({onAdd}: BookFormProps) {

    const tituloInputRef = useRef<HTMLInputElement>(null)
    const linkInputRef = useRef<HTMLInputElement>(null)
    const descricaoInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event)=> {
        event.preventDefault()
        const titulo = tituloInputRef.current!.value
        const link = linkInputRef.current!.value
        const descricao = descricaoInputRef.current!.value

        event.target.reset()

        tituloInputRef.current!.focus()

        onAdd(titulo, link, descricao)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={tituloInputRef} placeholder='Título do livro' />
            <input type="text" ref={linkInputRef} placeholder='Link da amazon' />
            <input type="text" ref={descricaoInputRef} placeholder='Descrição' />
            <input type="submit" value="Adicionar livro" />
        </form>
    )
}