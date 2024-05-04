import propTypes from "prop-types";

export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div
            style={{
              padding: "10px",
              margin: "10px",
              width: "30%",
              borderRadius: "5px",
              border: "1px solid #ddd",
              backgroundColor: "#FFC0CB", // light pink shade hex code
            }}
            key={todo._id}
          >
            <h1>Title : {todo.title}</h1>
            <p>Desc : {todo.description}</p>
            <button>
              {todo.completed === true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

Todos.propTypes = {
  todos: propTypes.array.isRequired,
};
