import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm ms-auto p-4"></div>
      </div>
    </div>
  );
}

export default App;
