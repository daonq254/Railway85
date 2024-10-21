import "./App.css";
import Menu from "./Components/Menu";
import { route } from "./Router/route";

function App() {
  return (
    <div className="container">
      {/* Menu */}
      <Menu />
      {/* Content */}
      {route}
    </div>
  );
}

export default App;
