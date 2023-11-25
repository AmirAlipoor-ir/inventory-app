import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <Category />
          <Products/>
        </div>
      </div>
    </div>
  );
}

export default App;
