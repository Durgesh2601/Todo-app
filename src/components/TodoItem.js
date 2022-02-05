import "./Todo.css";
export const TodoItem = ({
  handleDelete,
  title,
  status,
  text,
  id,
  handleToggle,
  i,
}) => {
  return (
    <>
      <h5>{i + 1}</h5>
      <h5
        style={
          status
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {title}
      </h5>
      <h5
        style={
          status
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {text}
      </h5>
      <button
        style={
          status
            ? { background: "#198754", color: "white", outline: "none" }
            : { color: "white" }
        }
        type="button"
        className="btn btn-secondary btn-sm"
        onClick={() => handleToggle(id, status)}
      >
        {status ? "Done" : "Mark as done"}
      </button>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </>
  );
};
