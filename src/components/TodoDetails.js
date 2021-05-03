import { Badge, Col, Row } from "reactstrap";

const TodoDetails = (props) => {
  const { totalTasks, completedTasks } = props;
  return (
    <div>
      <Row>
        <Col>
          Total Tasks <Badge color="success"> {totalTasks} </Badge>
        </Col>
        <Col>
          Completed Tasks <Badge color="info"> {completedTasks} </Badge>
        </Col>
      </Row>
      <hr size="1" />
    </div>
  );
};

export default TodoDetails;
