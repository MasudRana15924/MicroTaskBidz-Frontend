import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import UserSignup from './pages/user/UserSignup';
import Login from './pages/user/Login';
import ConfirmEmail from './pages/user/ConfirmEmail';
import Changepassword from './pages/user/Changepassword';


function App() {
  return (
     <Routes>
      <Route path="/user/email/confirm" element={<ConfirmEmail/>}></Route>
      <Route path="/user/password" element={<Changepassword/>}></Route>
     </Routes>
  );
}
export default App;
