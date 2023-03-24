import './App.css';
import {

  Routes,
  Route,
} from "react-router-dom";
import ConfirmEmail from './pages/user/ConfirmEmail';
import UserDetails from './pages/user/UserDetails';
import UpdateInfo from './pages/user/UpdateInfo';
import ResetPassword from './pages/user/Resetpassword';
import Login from './pages/user/Login';
import UserSignup from './pages/user/UserSignup';
import Changepassword from './pages/user/Changepassword';
import CreateTask from './pages/user/task/CreateTask';
import ContractorSignup from './pages/contractor/ContractorSignup';
import ContractorLogin from './pages/contractor/ContractorLogin';
import Home from './components/home/Home';

function App() {
  return (
    <Routes >
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/user-signin"  element={< Login/>}></Route>
      <Route path="/user-signup"  element={< UserSignup/>}></Route>
      <Route path="/user/password" element={<ResetPassword/>}></Route>
      <Route path="/user/change/password" element={<Changepassword/>}></Route>
      <Route path="/user/updateinfo" element={<UpdateInfo/>}></Route>
     <Route path="/user-info"  element={< UserDetails/>}></Route>
     <Route path="/user/confirm/email"  element={< ConfirmEmail/>}></Route>
     <Route path="/user/create-task"  element={< CreateTask/>}></Route>
     <Route path="/contractor-signup"  element={< ContractorSignup/>}></Route>
     <Route path="/contractor-signin"  element={< ContractorLogin/>}></Route>
    </Routes>
  );
}
export default App;
