import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserSignup from './pages/user/UserSignup';
import Login from './pages/user/Login';


function App() {
  return (
   
      <Routes>
        <Route path="/user-signin" element={<Login/>} />

        <Route path="/user-signup" element={<UserSignup/>} />
      </Routes>
    
  );
}
export default App;
