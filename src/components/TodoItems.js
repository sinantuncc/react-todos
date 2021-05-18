import { Button, Col, Input, Row } from "reactstrap";

const TodoItems = (props) => {
  const { todo, markComplete, delTodo } = props;

  let textDecoration = todo.completed ? "line-through" : "none";
  let fontStyle = todo.completed ? "italic" : "normal";

  return (
    <li style={{ textDecoration, fontStyle }} className="my-2">
      <Row>
        <Col>
          <Input
            name="task-complete"
            type="checkbox"
            checked={todo.completed}
            value={todo.completed}
            onChange={() => markComplete(todo.id)}
          />
          <p>{todo.title}</p>
        </Col>
        <Col>
          <Button
            outline
            color="danger"
            size="sm"
            onClick={() => delTodo(todo.id)}
          >
            Remove
          </Button>
        </Col>
      </Row>
    </li>
  );
};

export default TodoItems;
