import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ConfirmEmail from './pages/user/ConfirmEmail';
import UserDetails from './pages/user/UserDetails';
import UpdateInfo from './pages/user/UpdateInfo';
import ResetPassword from './pages/user/Resetpassword';
import Login from './pages/user/Login';
import UserSignup from './pages/user/UserSignup';
import Changepassword from './pages/user/Changepassword';
import Home from './components/home/Home';
import SingleDoctor from './pages/doctors/SingleDoctor';
import Header from '../src/pages/shared/Header';
import Footer from '../src/pages/shared/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from './pages/loader/Loader';
import PrivateRoute from './components/Privateroute/PrivateRoute';
import PublicRoute from './components/Privateroute/PublicRoute';
import DoctorLis from './pages/DoctorsList/DoctorLis';



function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })
  return (
    <div>
      {loading ? <div>
        <Loader></Loader>
      </div> : <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Routes >
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/user-signin" element={< Login />}></Route>
            <Route path="/user-signup" element={<PublicRoute>< UserSignup /></PublicRoute>}></Route>
            <Route path="/user/password" element={<ResetPassword />}></Route>
            <Route path="/user/change/password" element={<Changepassword />}></Route>
            <Route path="/user/updateinfo" element={<UpdateInfo />}></Route>
              <Route path="/user-info" element={<PrivateRoute>
                < UserDetails />
              </PrivateRoute>}>
              </Route>
            <Route path="/user/confirm/email" element={< ConfirmEmail />}></Route>
            <Route path="/doctor/:doctorId" element={<SingleDoctor />}></Route>
            <Route path="/doctors" element={<DoctorLis />}></Route>

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>}
    </div>

  );
}
export default App;
