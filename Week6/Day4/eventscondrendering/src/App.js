import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";
import Button from "./common/Button.js";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Greeting />
      <h1 className="header">This is another H1</h1>
      <Button>TOUCH</Button>
      <Button>This is another button</Button>
      <Button>TOUCH2</Button>
      <Form />
    </div>
  );
}

export default App;
