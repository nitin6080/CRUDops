import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ValidatedForm from "./ValidatedForm";

const InfoContainer = ({ userData, setUserData, setEditMode }) => {
  const navigate = useNavigate();
  const [editIndex, setEditIndex] = useState(null);
  const { state } = useLocation();

  //DELETE purpose
  const trashUserData = (index) => {
    console.log(index);
    const selectedUserData = userData.filter((_, i) => i !== index);
    setUserData(selectedUserData);
  };

  //UPDATE or edit purpose
  const editUserData = (index) => {
    setEditIndex(index);
    navigate("/form", { state: userData[index] }); // Navigate to the form with the data of the selected user
  };

  console.log(userData);
  return (
    <div className="p-6">
      <button className="p-4 mb-7 bg-orange-600 text-white rounded-lg" onClick={() => navigate("/form", { state: userData })}>
        Add User
      </button>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>{''}</th>
            <th>{''}</th>
          </tr>
        </thead>
        <tbody className="">
          {userData?.map((data, index) => (
            <tr key={index}>
              <td className="border-2 border-red-300 text-center">{data.username}</td>
              <td className="border-2 border-red-300 text-center">{data.email}</td>
              <td className="border-2 border-red-300 text-center">{data.password}</td>
              <td className="border-2 border-red-300 text-center">{data.confirmPassword}</td>
              <td className="text-center">
                <button className="min-w-10 bg-blue-700 text-white p-3 rounded-lg" onClick={() => {
                    setEditMode({ id: data?.id });
                    editUserData(index);
                  }}
                >
                  Edit
                </button>
              </td>
              <td className="text-center">
                <button className="min-w-10 bg-red-700 text-white p-3 rounded-lg" onClick={() => trashUserData(index)}>Trash</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoContainer;
