import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./sidemenu.css"; // Import the CSS file
import { Link } from "react-router-dom";

const SideMenu = ({ item }) => {
  return (
    <>
      <aside id="sidebar" class="sidebar">
        <div className="d-flex flex-column align-items-center">
          <img
            className="store-img"
            src={item?.image}
            alt="store pic"
            // className="rounded"
          />
          <span className="text-center mb-5">{item?.name}</span>
        </div>
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="side-nav-item">
            <Link class="side-nav-link active d-flex align-items-center" to="#">
              <i
                class="fa fa-shopping-bag"
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
              <span>Shop</span>
            </Link>
          </li>
          <li class="side-nav-item">
            <Link class="side-nav-link d-flex align-items-center" to="#">
              <i
                class="fa fa-bookmark"
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
              <span>Deals</span>
            </Link>
          </li>
          <li class="side-nav-item">
            <Link class="side-nav-link d-flex align-items-center" to="#">
              <i
                class="fa fa-refresh"
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
              <span>Buy it again </span>
            </Link>
          </li>
          <li class="side-nav-item">
            <Link class="side-nav-link d-flex align-items-center" to="#">
              <i
                class="fa fa-list"
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
              <span>Lists</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideMenu;
