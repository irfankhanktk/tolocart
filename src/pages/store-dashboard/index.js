import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../../components/loader";
import MenuList from "../../components/menuList";
import SideMenu from "../../components/sideMenu";
import StoreCardHeader from "../../components/store-card-header";
import { getProductsByCategories } from "../../services/api/api-actions";
import { UTILS } from "../../utils";
import ErrorPage from "../error-page";
import { Toast } from "react-bootstrap";
import SeeMoreProductsModal from "../../components/modals/see-more-products-modal";
const StoreDashboard = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [storeData, setStoreData] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);
  const [moreProducts, setMoreProducts] = React.useState([]);
  const [error, setError] = React.useState("");

  const getStores = async () => {
    try {
      const res = await getProductsByCategories(id);
      setStoreData(res?.data);
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

  if (error) return <ErrorPage error={error} />;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideMenu item={storeData[0]?.data[0]?.vendorShop} />
          </div>
          <div className="col-md-10">
            {loading
              ? [{}, {}, {}, {}]?.map((item, index) => (
                  <MenuList key={index} item={item} loading />
                ))
              : storeData?.map((item, index) => (
                  <MenuList
                    key={index}
                    item={item}
                    onClickSeeMore={(products) => {
                      setShowMore(true);
                      setMoreProducts(products);
                    }}
                  />
                ))}
          </div>
        </div>
        <SeeMoreProductsModal
          products={moreProducts}
          show={showMore}
          setShow={() => {
            setMoreProducts([]);
            setShowMore(false);
          }}
        />
      </div>
    </>
  );
};

export default StoreDashboard;
