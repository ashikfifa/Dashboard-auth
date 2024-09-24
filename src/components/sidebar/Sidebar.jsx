import { useState } from "react";
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaUserAlt, FaShoppingBag, FaThList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/sidebarToggle/sidebarSlice";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.sidebar.isOpen);
  

  const [activeItem, setActiveItem] = useState("Profile");
  const { onSelectMenuItem, role } = props;


  const handleItemClick = (name) => {
    setActiveItem(name);
    onSelectMenuItem(name);
    localStorage.setItem("activeItem", name);
  };

  const menuItem = [
    {
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      name: "User List",
      icon: <FaThList />,
      disabled: role === "user",
    },
  ];

  return (
    <div>
      <div className={isOpen ? "sidebar" : "sidebar-shrink"}>
        <div className={isOpen ? "top_section" : "top_section-shrink"}>
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Tasks{" "}
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars style={{ cursor: "pointer" }} onClick={()=>dispatch(toggleSidebar())} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <div
            key={index}
            className={`link ${activeItem === item.name ? "active" : ""}`}
            onClick={() => handleItemClick(item.name)}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
