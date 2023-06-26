import React from "react";
import StoreCardHeader from "../../components/store-card-header";
import StoreCard from "../../components/store-card/index";
import { getPopularShops } from "../../services/api/api-actions";
import Loader from "../../components/loader";
import { UTILS } from "../../utils";
const Stores = () => {
  const [loading, setLoading] = React.useState(true);
  const [stores, setStores] = React.useState([]);
  const getStores = async () => {
    try {
      const res = await getPopularShops();
      setStores(res?.data);
    } catch (error) {
      console.log("error=>>", error);
      alert(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getStores();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h2>Popular store in Ygnico by Area</h2>
      <StoreCardHeader />
      <div className="d-md-flex flex-wrap">
        {stores?.map((item, index) => (
          <StoreCard item={item} />
        ))}
      </div>
      {/* <LoginModal show={show} setShow={setShow} /> */}
    </div>
  );
};
export default Stores;
