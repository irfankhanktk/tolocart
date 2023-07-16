import React from "react";
import StoreCardHeader from "../../components/store-card-header";
import StoreCard from "../../components/store-card/index";
import { getPopularShops } from "../../services/api/api-actions";
import Loader from "../../components/loader";
import { UTILS } from "../../utils";
import ErrorPage from "../error-page";
const Stores = () => {
  const [loading, setLoading] = React.useState(true);
  const [stores, setStores] = React.useState([]);
  const [error, setError] = React.useState("");

  const getStores = async () => {
    try {
      const res = await getPopularShops();
      setStores(res?.data);
    } catch (error) {
      console.log("error=>>", error);
      setError(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    window.scrollTo(0, 0); //
    getStores();
  }, []);
  if (loading) {
    return <Loader />;
  }
  if (error) return <ErrorPage error={error} />;
  return (
    <div>
      <h2 className="p-3">Popular store in Ygnico by Area</h2>
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
