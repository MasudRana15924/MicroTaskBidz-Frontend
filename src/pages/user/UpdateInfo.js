import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSidebar from './UserSidebar';
import { updateProfile } from '../../state/user/updateprofile/updateProfileSlice';

const UpdateInfo = () => {
  const dispatch = useDispatch();
  const { loggeduser } = useSelector(
    (state) => state.userDetails
);
const userToken = loggeduser.token
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const data=({name,gender,phone,birthdate,avatar})
  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({data,userToken}));
    alert('updated');
  };
  const updateProfileDataChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
        }
    };
    reader.readAsDataURL(e.target.files[0]);
};
  
  return (
    <div className="p-10 bg-white mt-20 mb-20">
      <div className="max-w-full mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2">
          <div className="lg:w-8/12 lg:mx-auto text-end  mb-5">
            <UserSidebar></UserSidebar>

          </div>
          <div className="lg:w-8/12 mb-5  p-5">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="mt-5  text-2xl font-medium mb-4 text-start">Update Your Info</h2>

              <form onSubmit={registerSubmit}>
                <div className="mb-2 ">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mt-5 mb-5" type="text" id="username"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-2 ">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mb-5" type="text" id="username"
                    name="name"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    placeholder="Gender"
                    required
                  />
                </div>
                <div className="mb-2 ">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mb-5" type="text" id="username"
                    name="name"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Your Phone Number"
                    required
                  />
                </div>
                
                <div className="mb-2 ">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mb-5" type="date" id="username"
                    name="name"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    placeholder="Birth Date"
                    required
                  />
                </div>
                <div className="flex">
                  <img src={avatarPreview} alt="Avatar Preview" className="w-24 " />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                    className="mt-5 ms-3"
                  />
                </div>

                <button className=" text-white py-1 w-full rounded-md  font-semibold h-10 bg-violet-700 mt-5" type="submit">Update</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;