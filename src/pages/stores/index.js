import React from "react";
import StoreCardHeader from "../../components/store-card-header";
import StoreCard from "../../components/store-card/index";
const Stores = () => {
  return (
    <div>
      <StoreCardHeader />
      <div className="d-md-flex flex-wrap">
        {[
          { title: "GNN Mart", bg: "#7246EF" },
          { title: "ININ Mart", bg: "#E246EF" },
          { title: "Qickway", bg: "#E2E2E29C" },
          { title: "food Mart", bg: "#D93822" },
        ].map((item, index) => (
          <StoreCard item={item} />
        ))}
      </div>
      {/* <LoginModal show={show} setShow={setShow} /> */}
    </div>
  );
};
export default Stores;
