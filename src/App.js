import "./styles.css";
import Form from "./Form";
import ToDoList from "./ToDoList";
import { DataList } from "./DataList";

const App = () => {
  return (
    <div className="App">
      <DataList>
        <Form />
        <ToDoList />
      </DataList>
    </div>
  );
};

export default App;
