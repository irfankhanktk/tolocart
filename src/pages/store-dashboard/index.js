import React from "react";
import SideMenu from "../../components/sideMenu";
import MenuList from "../../components/menuList";
import StoreCardHeader from "../../components/store-card-header";
const StoreDashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideMenu />
          </div>
          <div className="col-md-10">
            <MenuList />
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreDashboard;
