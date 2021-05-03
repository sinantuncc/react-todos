import { Form, Input } from "reactstrap";

const SearchTodo = (props) => {
  const { search, handleSearchChange } = props;
  return (
    <Form>
      <Input
        name="search"
        placeholder="Search in todos..."
        value={search}
        onChange={handleSearchChange}
      />
    </Form>
  );
};

export default SearchTodo;
