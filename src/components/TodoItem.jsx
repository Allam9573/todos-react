const TodoItem = ({ props }) => {
    return (
        <>
            <p className="todo-complete">
                {props.todo}
            </p>
        </>
    )
}
export { TodoItem }
