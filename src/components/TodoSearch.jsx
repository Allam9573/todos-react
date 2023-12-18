import { useState } from "react"
const TodoSearch = () => {
    const [todo, setTodo] = useState('')

    return (
        <>
            <form action="">
                <input type="search" name="" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Buscar Todo..." />
                <p>{todo}</p>
            </form>
        </>
    )
}
export { TodoSearch }