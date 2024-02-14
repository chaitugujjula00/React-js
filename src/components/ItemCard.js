import { useState } from "react";

const ItemCard = (props) => {
  const [ItemData, setItemData] = useState([]);
  const groupData = props;
  console.log(groupData);
//   setItemData(groupData.card.card.itemCards);

  return ItemData.map((item) => {
    <h3>item.card.info.name</h3>;
  });
};

export default ItemCard;
