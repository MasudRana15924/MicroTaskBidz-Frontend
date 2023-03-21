import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import UpdateInfo from './pages/user/UpdateInfo';

function App() {
  return (
     <Routes>
      <Route path="/user/updateinfo" element={<UpdateInfo/>}></Route>

  
     </Routes>
  );
}
export default App;
