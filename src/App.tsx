import Listing from "./components/Listing.tsx";
import items from "./data/etsy.json";
import "./css/main.css";

function App() {

  return (
    <>
      <Listing items={items} />
    </>
  );
}

export default App;
