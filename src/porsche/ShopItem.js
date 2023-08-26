import React , {useRef ,useState ,useEffect} from 'react';

let arrow = (<svg className = 'ShopItemButtonIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14.81 18 20 11.5 14.81 5h-1.25l4.81 6H4v1h14.37l-4.81 6h1.25z"/></svg>);

function ShopItem(props) {

  const ItemStyle = {
    backgroundImage: (`url(${props.ItemImage})`)
  }

  return (
    <div className="ShopItem">
      <div style = {ItemStyle} className = 'ShopItemImg'></div>
      <div className = 'ShopItemInfo'>
        <span className = 'ShopItemTitle'>
          {props.ItemTitle}
        </span>
        <span className = 'ShopItemDesc'>
        {props.ItemDesc}
        </span>
        <button className = 'ShopItemButton'>
          {arrow}
          <span className = 'ShopItemType'>{props.ItemType}</span>
        </button>
      </div>
    </div>
  );
}

export default ShopItem;