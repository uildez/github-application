import { ContextProvider } from "./context/UserContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
