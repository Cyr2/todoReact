import propTypes from 'prop-types';
import Todo from './Todo';

export default function Todos({ todos, setTodos }) {
    const changeTodoStatus = (event) => {
        setTodos(() => {
            return todos.map((todo) => {
                if (todo.id === parseInt(event.target.id)) {
                    return {...todo, done: !todo.done}
                } else {
                    return todo;
                }
            })
        });
    };

    const removeTodo = (id) => {
        setTodos(() => {
            return todos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <ul>
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} removeTodo={removeTodo} />
            })}
        </ul>
    )
}

Todo.propTypes = {
    todo: propTypes.object.isRequired,
    changeTodoStatus: propTypes.func.isRequired
}