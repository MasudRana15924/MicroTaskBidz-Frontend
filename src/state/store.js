import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { loginReducer } from "./user/Login";
import { signUpSlice } from "./user/signupSlice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import doctorsSlice from "./doctor/doctorsSlice";
import doctorSlice from "./doctor/doctorSlice";
import reviewSlice from "./doctor/reviewSlice";
import relatedDoctorsSlice from "./relatedDoctor/relatedDoctorSlice";
import  filterdoctorsSlice  from "./filter/filterSlice";
import appointmentsSlice from "./appointments/appointmentsSlice";
import myAppointmentsSlice from "./user/appointment/myAppointmentsSlice";
import updateProfileSlice from "./user/updateprofile/updateProfileSlice";
import updatePasswordSlice from './user/changePassword/updatePasswordSlice'
import forgotPasswordSlice from "./user/forgotpassword/forgotPasswordSlice";
import resetPasswordSlice from "./user/forgotpassword/resetPasswordSlice";
import  adminAllAppointmentsSlice  from "./admin/AdminAppointmentSlices";
import adminAllDoctorsSlice  from "./admin/AdminDoctorsSlice";
import  adminAllUsersSlice  from "./admin/AllUsersSlice";
import  filternursesSlice  from "./nurses/nursesSlices";
// import nursesSlices, { filternursesSlice, nursesSlice } from "./nurses/nursesSlices";



const persistConfig = {
  key: "authentication",
  storage
};
const middlewares = [];
if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, loginReducer);
const rootReducer = combineReducers({
  signup: signUpSlice,
  userDetails: persistedReducer,
  doctors: doctorsSlice,
  doctor:doctorSlice,
  reviews:reviewSlice,
  relatedDoctors:relatedDoctorsSlice,
  filterDoctors:filterdoctorsSlice,
  appointments:appointmentsSlice,
  myAppointments:myAppointmentsSlice,
  updateProfile:updateProfileSlice,
  updatePassword:updatePasswordSlice,
  forgotPassword:forgotPasswordSlice,
  resetPassword:resetPasswordSlice,
  allAppointments:adminAllAppointmentsSlice,
  allDoctors:adminAllDoctorsSlice,
  allUsers:adminAllUsersSlice,
   filterNurses:filternursesSlice,

});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
});

export default store;

export const persistor = persistStore(store);