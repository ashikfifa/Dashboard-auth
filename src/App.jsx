import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import Product from "./components/product/Product";
import UserList from "./components/userList/UserList";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Profile")
  const [role, setRole] = useState(localStorage.getItem('userRole') || null);

  const handleSelectMenuItem = (eventKey) => {
    setSelectedMenuItem(eventKey)
  }

  useEffect(() => {
    // Check if user role is stored in localStorage and update state
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setRole={setRole} />} />
          <Route
            path="/dashboard/*"
            element={
              <>
                <Navbar />
                <div style={{ display: "flex", gap: 40 }}>
                  <Sidebar role={role} onSelectMenuItem={handleSelectMenuItem}/>
                {selectedMenuItem==='Profile' && <Profile role={role} /> }  
                {selectedMenuItem==='Product' && <Product /> }  
                {selectedMenuItem==='User List' && role==='admin' && <UserList /> }  
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
