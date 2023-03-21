import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import UserDetails from './pages/user/UserDetails';
import UserSignup from './pages/user/UserSignup';
import Login from './pages/user/Login';




function App() {
  return (

    <>
    <Routes >

      <Route path="/user-info"  element={< UserDetails/>}></Route>
      <Route path="/user-signup"  element={< UserSignup/>}></Route>
      <Route path="/user-signin"  element={< Login/>}></Route>
    </Routes>
    </>


  );
}
export default App;
