import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './sidemenu.css'; // Import the CSS file

const SideMenu = () => {
    return (
        <>
        <aside id="sidebar" class="sidebar">
            <ul class="sidebar-nav" id="sidebar-nav">
                <li class="side-nav-item">
                    <a class="side-nav-link active d-flex align-items-center" href="#">
                        <i class="fa fa-shopping-bag" aria-hidden="true" style={{marginRight:'10px'}}></i>
                        <span>Shop</span>
                    </a>
                </li>
                <li class="side-nav-item">
                    <a class="side-nav-link d-flex align-items-center" href="#">
                        <i class="fa fa-bookmark" aria-hidden="true" style={{marginRight:'10px'}}></i>
                        <span>Deals</span>
                    </a>
                </li>
                <li class="side-nav-item">
                    <a class="side-nav-link d-flex align-items-center" href="#">
                        <i class="fa fa-refresh" aria-hidden="true" style={{marginRight:'10px'}}></i>
                        <span>Buy it again </span>
                    </a>
                </li>
                <li class="side-nav-item">
                    <a class="side-nav-link d-flex align-items-center" href="#">
                        <i class="fa fa-list" aria-hidden="true" style={{marginRight:'10px'}}></i>
                        <span>Lists</span>
                    </a>
                </li>
            </ul>
        </aside>
        
        </>
    );
};

export default SideMenu;
