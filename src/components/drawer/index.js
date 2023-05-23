// Drawer.js
import React, { useState } from 'react';
import './style.css';

const Drawer = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`drawer ${isOpen ? 'open' : 'closed'} bg-info`}>
            <div className="drawer-header" onClick={toggleDrawer}>
                <h3>{title}</h3>
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}>-</span>
            </div>
            {isOpen && <div className="drawer-content">{children}</div>}
        </div>
    );
};

export default Drawer;
