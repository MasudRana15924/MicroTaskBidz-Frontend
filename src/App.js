import './App.css';
import {

  Routes,
  Route,
} from "react-router-dom";
import ResetPassword from './pages/user/ResetPassword';




function App() {
  return (
    <Routes>
      <Route path="/user/password" element={<ResetPassword/>}></Route>
    </Routes>
  );
}
export default App;
