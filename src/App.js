import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Changepassword from './pages/user/Changepassword';


function App() {
  return (
     <Routes>
      <Route path="/user/changepassword" element={<Changepassword/>}></Route>
     </Routes>
  );
}
export default App;
