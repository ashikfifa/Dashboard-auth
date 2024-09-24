import { useState } from "react";
import "./loginPage.scss";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { dummyData } from "../common/dummyData";

function LoginPage(props) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const { setRole } = props;

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formValue", formValue);

    dummyData.users?.forEach((user) => {
      if (
        formValue.email === user.email &&
        formValue.password === user.password
      ) {
        if (
          formValue.email === "admin@example.com" &&
          formValue.password === "admin"
        ) {
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
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="_login_parent">
      <h2 className="text-center mb-4">Log in page</h2>
          <div className="logInCards">
           
              

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label className="label" htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <br/>
                <div className="form-group ">
                  <label className="label" htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-warning loginBtn mt-3 px-4 py-2">
                  Login
                </button>
              </form>
            
          </div>
        
      </div>
    </div>
  );
}
export default LoginPage;
