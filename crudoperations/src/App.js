import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ValidatedForm from "./Components/ValidatedForm";
import InfoContainer from "./Components/InfoContainer";

function App() {
  const [editMode, setEditMode] = useState(false);
  // debugger;
  console.log(editMode);
  //CREATE i.e. Function to add new user data
  const [userData, setUserData] = useState([
    {
      username: "Alphonso",
      email: "A@gmail.com",
      password: "1961",
      confirmPassword: "1961",
    },
    {
      username: "Bueno",
      email: "B@gmail.com",
      password: "1972",
      confirmPassword: "1972",
    },
    {
      username: "Shining Star",
      email: "Earth@gmail",
      password: "1975",
      confirmPassword: "1975",
    },
  ]);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <InfoContainer {...{ userData, setUserData, setEditMode }} />
            }
          />
          <Route
            path="/form"
            element={
              <ValidatedForm
                {...{ userData, setUserData, editMode, setEditMode }}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
