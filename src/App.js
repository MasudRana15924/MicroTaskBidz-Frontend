import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import UserSignup from './pages/user/UserSignup';


function App() {
  return (

    <Routes>
      <Route path="/user-signup" element={<UserSignup />} />
    </Routes>

  );
}
export default App;
