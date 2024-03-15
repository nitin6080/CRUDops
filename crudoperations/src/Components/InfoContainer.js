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
    <>
      <button onClick={() => navigate("/form", { state: userData })}>
        Add User
      </button>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Opt1</th>
            <th>Opt2</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((data, index) => (
            <tr key={index}>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.confirmPassword}</td>
              <td>
                <button
                  onClick={() => {
                    setEditMode(true);
                    editUserData(index);
                  }}
                >
                  EditIt
                </button>
              </td>
              <td>
                <button onClick={() => trashUserData(index)}>TrashIt</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default InfoContainer;
