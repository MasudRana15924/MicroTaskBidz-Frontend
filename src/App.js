import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import UserDetails from './pages/user/UserDetails';

function App() {
  return (
    <Routes >
      <Route path="/user-info"  element={< UserDetails/>}></Route>
    </Routes>
  );
}
export default App;
