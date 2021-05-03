import { useState } from "react";
import { Button, Form, Input, InputGroup, InputGroupAddon } from "reactstrap";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    if (!title) {
      return alert("Please add a task title!");
    }

    props.addTodo(title);

    setTitle("");

    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          name="todo"
          value={title}
          placeholder="Add a new todo..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button type="submit" color="info">
            Add
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};

export default AddTodo;
