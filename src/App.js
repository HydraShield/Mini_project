
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Register } from './Pages/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const dispatch = useDispatch();
  const xyz = useSelector(state => state.root)
  dispatch()
  console.log(xyz)

  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
