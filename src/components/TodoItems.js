import { Button, Col, Input, Row } from "reactstrap";

const TodoItems = (props) => {
  const { todo, markComplete, delTodo } = props;

  let textDecoration = todo.completed ? "line-through" : "none";

  return (
    <li style={{ textDecoration }} className="my-2">
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
            onClick={() => delTodo(todo)}
          >
            Remove
          </Button>
        </Col>
      </Row>
    </li>
  );
};

export default TodoItems;
