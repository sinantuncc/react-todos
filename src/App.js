import { Container } from "reactstrap";
import TodosList from "./components/TodoList";

const App = () => {
  let date = new Date().toLocaleDateString();
  return (
    <div>
      <Container style={{maxWidth:"500px"}}>
        <div className="my-4 text-center ">
          <h2>React Todos</h2>
          <h6>{date}</h6>
        </div>

        <TodosList />
      </Container>
    </div>
  );
};

export default App;
