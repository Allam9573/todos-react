const TodoList = ({ children }) => {
    return (
        <>
            <h2 className="subtitle">Listado de Todos</h2>
            <ul>
                <li>{children}</li>
            </ul>
        </>
    )
}
export { TodoList }