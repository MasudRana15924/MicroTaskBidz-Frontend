import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import UserSignup from './pages/user/UserSignup';
import Login from './pages/user/Login';
import ConfirmEmail from './pages/user/ConfirmEmail';

import UpdateInfo from './pages/user/UpdateInfo';




function App() {
  return (
     <Routes>
      <Route path="/user" element={<UpdateInfo/>}></Route>

  
     </Routes>
  );
}
export default App;
