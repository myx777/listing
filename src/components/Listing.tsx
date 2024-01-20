import ListingPropsType from "../types/ListingPropsType";
import React from "react";

// компонент отрисовки карточек
const Listing: React.FC<ListingPropsType> = ({ items = [] }) => {
  const card = items.map((item) => {
    const {
      listing_id,
      url,
      MainImage,
      title,
      currency_code,
      price,
      quantity,
    } = item;

    const truncatedTitle =
      title && title.length > 49 ? `${title.substring(0, 50)}...` : title;

    let valute;
    switch (currency_code) {
      case "USD":
        valute = `$ ${price}`;
        break;
      case "EUR":
        valute = `€ ${price}`;
        break;
      default:
        valute = `${price} ${currency_code}`;
    }

    const level =
      quantity <= 10
        ? "level-low"
        : quantity <= 20
        ? "level-medium"
        : "level-high";

    return (
      <div className="item-list" key={listing_id}>
        <div className="item">
          <div className="item-image">
            <a href={url}>
              <img src={MainImage?.url_570xN} alt={title}></img>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{truncatedTitle}</p>
            <p className="item-price">{valute}</p>
            <p className={`item-quantity ${level}`}>{`${quantity} left`}</p>
          </div>
        </div>
      </div>
    );
  });
  return <>{card}</>;
};

export default Listing;
