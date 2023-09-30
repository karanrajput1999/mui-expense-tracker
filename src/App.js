import "./App.css";
import Container from "./components/Container";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div
        style={{
          width: "97%",
          display: "flex",
          justifyContent: "center",
          marginInline: "auto",
        }}
        className="main-container"
      >
        <Container />
      </div>
    </GlobalProvider>
  );
}

export default App;
