import ListingPropsType from '../types/ListingPropsType';
import React from 'react';

const Listing: React.FC<ListingPropsType>  = ({ items = [] }) => {

    const card = items.map((item) => {
        
        const { listing_id, url, MainImage, title, currency_code, price, quantity } = item;
        return (
            <div className="item-list" key={listing_id}>
                <div className="item">
                    <div className="item-image">
                        <a href={url}>
                            <img src={MainImage?.url_570xN} alt={title}></img>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{title}</p>
                        <p className="item-price">{price}</p>
                        <p className="item-quantity level-medium">{`${quantity} left`}</p>
                    </div>
                </div>
            </div>
        );
    });
    return <>{card}</>;
}

export default Listing;
