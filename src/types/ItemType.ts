import MainImageType from "./MainImageType";

type ItemType = {
  listing_id: number;
  url: string;
  MainImage?: MainImageType;
  title: string;
  currency_code: string;
  price: number;
  quantity: number;
};

export default ItemType;
