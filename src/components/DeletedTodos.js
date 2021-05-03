import React from "react";
import { Badge, ListGroupItem } from "reactstrap";

const DeletedTodos = (props) => {
  const { deletedTasks } = props;

  return (
    <div>
      <hr size="1" />
      <p>
        Deleted Tasks <Badge color="danger">{deletedTasks.length}</Badge>
      </p>
      {deletedTasks.map((deletedTask) => (
        <ListGroupItem key={deletedTask.id}>{deletedTask.title}</ListGroupItem>
      ))}
    </div>
  );
};

export default DeletedTodos;
