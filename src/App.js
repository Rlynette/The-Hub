import './App.css';
import Header from "./components/header/Header";
import { Route, Routes} from "react-router-dom;"
import Home from "./components/home/Home"

function App() {
  return (
    <div className="App">
      <h2>class</h2>
      <Routes>
        <Header />
        <Route path="/" element={<Home />} />
        {/* <Route path="/header" element={<Header />} />npm  */}
      </Routes>
    </div>
  );
}

export default App;
