import React from "react";
import { laptop_home } from "../../assets/images";
import "./style.css"; // Import the CSS file
const CompaignCard = ({
  image = laptop_home,
  title = "Groceries",
  style,
  bg = "#53B175B2",
  description = `Fresh
    FOOD every one
    Need`,
}) => {
  return (
    // <div className='col-md-12 col-sm-12 mt-5 px-1'>
    //     <div className='p-1' style={{ ...style, background: `${bg}` }}>
    //         <p className='text-start font-size-heavy' style={{ color: '#000' }}>{title}</p>
    //         <div className='p-3 d-sm-flex rounded justify-content-between align-items-center'>
    //             <p className='text-start font-size-heading'>{description}</p>
    //             <img className='w-50 h-75' src={image} alt='image here' />
    //         </div>
    //     </div>
    // </div>

    <div className="col-md-12 col-sm-12 px-1">
      <div className="row card-bg m-0">
        <div className="col-md-6">
          <h3 className="discount-offer">{title}</h3>
          <p className="product-title-name">{description}</p>
        </div>
        <div className="col-md-6">
          <img className="w-100" src={image} alt="image here" />
        </div>
      </div>
    </div>
  );
};
export default CompaignCard;
