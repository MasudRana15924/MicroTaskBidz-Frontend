import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ConfirmEmail from './pages/user/ConfirmEmail';
import UserDetails from './pages/user/UserDetails';
import UpdateInfo from './pages/user/UpdateInfo';
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
import Contact from './components/landingpage/Contact';
import About from './components/landingpage/About';
import MyBooking from './pages/user/appointments/MyBooking';
import ForgotPassword from './pages/user/Forgotpassword';
import Resetpassword from './pages/user/Resetpassword';
import Conversations from './pages/user/conversation/Conversations';
import AdminAppointments from './pages/admin/AdminAppointments';
import AdminDoctors from './pages/admin/AdminDoctors';


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
            <Route path="/user/password" element={<ForgotPassword />}></Route>
            <Route exact path="/password/reset/:token" element={<Resetpassword></Resetpassword>} />
            <Route path="/user/change/password" element={<PrivateRoute><Changepassword /></PrivateRoute>}></Route>
            <Route path="/user/updateinfo" element={<PrivateRoute><UpdateInfo /></PrivateRoute>}></Route>
            <Route path="/user-info" element={<PrivateRoute>< UserDetails /></PrivateRoute>}></Route>
            <Route path="/user/confirm/email" element={< ConfirmEmail />}></Route>
            <Route path="/doctor/:doctorId" element={<SingleDoctor />}></Route>
            <Route path="/doctors" element={<DoctorLis />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/my-booking" element={<PrivateRoute><MyBooking /></PrivateRoute>}></Route>
            <Route path="/chat" element={<PrivateRoute><Conversations /></PrivateRoute>}></Route>
            <Route path="/admin-appointments" element={<PrivateRoute><AdminAppointments /></PrivateRoute>}></Route>
            <Route path="/user/all-doctors" element={<PrivateRoute><AdminDoctors /></PrivateRoute>}></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </div>}
    </div>

  );
}
export default App;
