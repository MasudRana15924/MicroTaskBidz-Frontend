import React from 'react';


const AllUser = ({user}) => {
    const{image,name,email}=user
    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email} </td>
            <td>edit</td>
            <td>
                <button className="text-red-700">delete</button>
            </td>
          

        </tr>
    
    
    );
};

export default AllUser;