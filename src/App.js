import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Porsche from './porsche/mainporsche.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" exact element  = {<Porsche />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
