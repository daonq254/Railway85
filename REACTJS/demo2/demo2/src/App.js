import "./App.css";
import BottomComponent from "./Components/BottomComponent";
import TopComponent from "./Components/TopComponent";

function App() {
  let dataFromAppToTop = "data_From_App_To_Top";
  return (
    <div className="container">
      <TopComponent dataFromAppToTopProps={dataFromAppToTop} />
      <BottomComponent />
    </div>
  );
}

export default App;
