import React, { useState, useEffect } from "react";
import './sidebar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FaBars,
    FaUserAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        const storedActiveItem = localStorage.getItem('activeItem');
        if (storedActiveItem) {
            setActiveItem(storedActiveItem);
        }
    }, []);

    const toggle = () => setIsOpen(!isOpen);

    const handleItemClick = (name) => {
        setActiveItem(name);
        localStorage.setItem('activeItem', name);
    };

    const menuItem = [
        {
            name: "Profile",
            icon: <FaUserAlt />
        },
        {
            name: "Product",
            icon: <FaShoppingBag />
        },
        {
            name: "User List",
            icon: <FaThList />
        }
    ];

    return (
        <div>
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Dashb</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <div
                            key={index}
                            className={`link ${activeItem === item.name ? 'active' : ''}`}
                            onClick={() => handleItemClick(item.name)}
                        >
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Sidebar;
