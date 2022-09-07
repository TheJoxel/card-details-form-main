import { AppState } from "./context/appState";
import { CardsMain } from "./pages/CardsMain";




function App() {
  return (
    <AppState>
      <div className="App">
        <CardsMain/>
      </div>
    </AppState>
  );
}

export default App;
