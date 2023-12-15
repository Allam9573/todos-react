
import '../assets/css/app.css'
const TodoCounter = ({ complete, total }) => {
    return (
        <>
            <h2 className={'title'}>Has completado {complete} de {total} todos</h2>
        </>
    )
}
export { TodoCounter }