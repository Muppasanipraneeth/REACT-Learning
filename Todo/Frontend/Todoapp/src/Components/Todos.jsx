
export const Todos = ({ todos, onUpdateTodoStatus }) => {
  const handleComplete = (todoId, currentStatus) => {
    const newStatus = !currentStatus;
    onUpdateTodoStatus(todoId, newStatus);
  };

  return (
    <div>
      {Array.isArray(todos) && todos.map((todo) => (
        <div key={todo._id} className="border-3">
          <h1>{todo.title}</h1>
          <h1>{todo.description}</h1>
          <button
            type="button"
            onClick={() => handleComplete(todo._id, todo.completed)}
            className="w-20 h-5 shadow-sm bg-blue-600 text-white rounded-md"
          >
            {todo.completed ? "Completed" : "Has to complete"}
          </button>
        </div>
      ))}
    </div>
  );
};
