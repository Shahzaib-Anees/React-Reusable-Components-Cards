import "./Card.css";

import { useState, useEffect } from "react";

function Card({ imageSrc, title, description, prices }) {
  const [itemDescription, setItemDescription] = useState("");
  function ProductDetails(title, description, prices , imageSrc) {
    this.title = title;
    this.description = description;
    this.prices = prices;
    this.imageSrc = imageSrc;
  }

  function productsDetails(title , description , prices , imageSrc) {
    const productDetails = new ProductDetails(title, description, prices , imageSrc);
    localStorage.setItem("productDetails", JSON.stringify(productDetails));
    
  }

  useEffect(() => {
    if (description.length > 40) {
      setItemDescription(description.slice(0, 40) + "...");
    } else {
      setItemDescription(description);
    }
  }, [description]);

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img className="w-[fit-content] h-[230px]" src={imageSrc} alt="Shoes" />
      </figure>
      <div className="card-body gap-[10px]">
        <h2 className="card-title">{title}</h2>
        <p className="text-[14px] font-bold text-[#666666] ">
          {itemDescription}
        </p>
        <p className="text-[15px] font-bold bg-[#f7f7f7] w-[fit-content] text-[#101010] px-3 py-1 rounded">
          Prices : Rs {prices}
        </p>
        <div className="w-full flex items-center justify-between gap-[130px] p-1 cursor-pointer">
          <button className="btn btn-primary">Buy Now</button>
          <p
            onClick={() => productsDetails( title , description , prices , imageSrc)}
            className="w-[fit-content] text-[blue] text-[15px] font-bold"
          >
            Read More
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
