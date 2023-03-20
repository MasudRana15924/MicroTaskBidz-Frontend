import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/user/Login';
import ConfirmEmail from './pages/user/ConfirmEmail';

import UpdateInfo from './pages/user/UpdateInfo';




function App() {
  return (

    <>
    <Routes >

      <Route path="/user-signin"  element={<Login/>}></Route>
    </Routes>
    </>


  );
}
export default App;
