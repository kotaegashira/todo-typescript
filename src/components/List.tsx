import { Item } from "./Item";
import { Todo } from "./Todo";

// 受け取るpropsの型を定義する
type Listprops = {
    todos: Todo[];
    deleteTodo: Function;
    updateTodo: Function;
};

const List: React.FC<Listprops> = ({ todos, deleteTodo, updateTodo }) => {
    // 押したTodoのidをdeleteTodoに渡す
    const complete = (id: number) => {
        deleteTodo(id);
    };
    return (
        <div>
            {/* Todoリストを取得してmap関数で1つ1つ取り出す */}
            {todos.map((todo) => {
                return (
                    // itemに必要なPropsを渡す
                    <Item 
                        key={todo.id}
                        todo={todo}
                        complete={complete}
                        updateTodo={updateTodo}
                    />
                );
            })}
        </div>
    );
};

export default List;