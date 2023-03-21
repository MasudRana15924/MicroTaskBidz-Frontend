import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import UserDetails from './pages/user/UserDetails';
import UserSignup from './pages/user/UserSignup';




function App() {
  return (

    <>
    <Routes >

      <Route path="/user-info"  element={< UserDetails/>}></Route>
      <Route path="/user-signup"  element={< UserSignup/>}></Route>
    </Routes>
    </>


  );
}
export default App;
