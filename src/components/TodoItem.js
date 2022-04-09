import "./Todo.css";
export const TodoItem = ({
  handleDelete,
  title,
  status,
  text,
  id,
  handleToggle,
  i
}) => {
  return (
    <>
    <td>
      {id}
    </td>
    <td style={
          status
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }>
        {title}
    </td>
    <td  style={
          status
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }>
          {text}
    </td>
    <td>
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
        {status ? "Yet to be done" : "Mark as done"}
      </button>
    </td>
    <td>
    <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </td>
    </>
  );
};
