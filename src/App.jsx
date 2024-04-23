import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import Product from "./components/product/Product";
import UserList from "./components/userList/UserList";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard/*"
            element={
              <>
                <Navbar />
                <div style={{ display: "flex", gap: 40 }}>
                  <Sidebar />
                  <Profile />
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
