import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Answers from './Answers';

const Routing=()=>{
    return (
        <Router>
        <Routes>
          <Route exact path="/"  element={<App />}></Route>
          <Route exact path="/answers" element={<Answers />}></Route>
        </Routes>
      </Router>
    )
}

export default Routing;

