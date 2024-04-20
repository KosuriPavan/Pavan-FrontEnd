import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <Container>
        <Header />
        <DisplayCounter />
        <Controls />
      </Container>
    </>
  );
}

export default App;
