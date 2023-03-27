import './App.css';
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
// import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>class</h2>
      <Route>
        <Routes>
          <Header />
          <Route path="/" element={<Home />} />
          {/* <Route path="/header" element={<Header />} />npm  */}
        </Routes>
      </Route>
    </div>
  );
}

export default App;
