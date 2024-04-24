import React, { useState } from "react";
import "./loginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { dummyData } from "../common/dummyData";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setRole } = props;

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dummyData.users?.forEach((user) => {
      if (email === user.email && password === user.password) {
        if (email === "admin@example.com" && password === "admin") {
          setRole("admin");
          localStorage.setItem("userRole", "admin");
        } else {
          setRole("user");
          localStorage.setItem("userRole", "user");
        }
        navigate("/dashboard");
      }
    });

    toast.error("Authentication Failed");

    // let payload;

    // payload = {
    //   email: email,
    //   password: password,
    // };
    // try {
    //   const result = await loginApi(payload);

    //   if (result.data === "Success") {
    //     console.log('666666666666');
    //     navigate("/dashboard");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="cards mt-5 ">
            <div className="card-body">
              <h2 className="text-center mb-4">Log in page</h2>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    onChange={handlePassChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-warning loginBtn mt-3">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
