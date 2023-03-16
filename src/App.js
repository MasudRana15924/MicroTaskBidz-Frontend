import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import UserSignup from './pages/user/UserSignup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user-signup" element={<UserSignup/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
