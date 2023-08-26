import React , {useRef ,useState ,useEffect} from 'react';
import ShopItem from './ShopItem.js';
import WallCharger from './Images/porschecharger.PNG';
import PorscheBike from './Images/porschebike.PNG';
import PorscheWatch from './Images/porschewatch.PNG';
import PorscheGolf from './Images/porschegolf.PNG';
import PorscheClock from './Images/porscheclock.PNG';
import PorscheChair from './Images/porschechair.PNG';
import PorscheSki from './Images/porscheski.PNG';

function Shop() {
  const [TransX,SetTransX] = useState(300);
  const [CurrentPos,SetCurrentPos] = useState(1);
  const [screenWidth,SetScreenWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    SetScreenWidth(window.innerWidth);
  });

  const ItemStyle = {
    transform: `TranslateX(${TransX}px)`,
    transition: 'transform 0.4s ease'
  }

  useEffect(() => {
    let allItems = document.querySelectorAll(".ShopItemIndicator div");

    for (let i = 0 ; i < allItems.length; i++){
      if (CurrentPos === i + 1){
        allItems[i].className = "ShopItemLevelSelected";
      }
      else {
        allItems[i].className = "ShopItemLevel";
      }
    }
  },[CurrentPos])

  function NextX(){
    if (CurrentPos < 6){
      SetTransX(TransX - 400);
      SetCurrentPos(CurrentPos + 1);
    }
  }

  function PrevX(){
    if (CurrentPos > 1){
      SetTransX(TransX + 400);
      SetCurrentPos(CurrentPos - 1);
    }
  }



  return (
    <div className="Shop">
      <span className = 'ShopContentTitle'>Online Shop Highlights</span>
      <div className = 'ShopContentButtons'>
        <button onClick={PrevX} className = 'ShopContentButtonBack'></button>
        <button onClick={NextX} className = 'ShopContentButtonForward'></button>
      </div>
      <div style = {screenWidth < 750 ? {} : ItemStyle} className = 'ShopItemCarousel'>
        <ShopItem 
          ItemImage = {WallCharger}
          ItemTitle = "Porsche Wall Charger Connect"
          ItemDesc = "An easy charging solution for your home."
          ItemType = "Charger"
        />
        <ShopItem 
          ItemImage = {PorscheWatch}
          ItemTitle = "Porsche x Garmin Epix smartwatch"
          ItemDesc = "GPS multisport smartwatch with unique Porsche details."
          ItemType = "Smartwatch"
        />
        <ShopItem 
          ItemImage = {PorscheBike}
          ItemTitle = "Porsche eBike Sport"
          ItemDesc = "Porsche maximum e-performance on two wheels."
          ItemType = "eBike"
        />
        <ShopItem 
          ItemImage = {PorscheGolf}
          ItemTitle = "Golf Cartbag - Sport"
          ItemDesc = "Spacious cart bag made of waterproof nylon with padded shoulder strap and lined inner pocket."
          ItemType = "Cartbag"
        />
        <ShopItem 
          ItemImage = {PorscheClock}
          ItemTitle = "Wheel rim wall clock - Porsche Originals"
          ItemDesc = "Wall clock made from the original rim of a 911 in RS Spyder design."
          ItemType = "Clock"
        />
        <ShopItem 
          ItemImage = {PorscheChair}
          ItemTitle = "RECARO x Porsche Gaming Chair Limited Edition"
          ItemDesc = "For comfortable seat performance - whether for gaming or in the home office."
          ItemType = "Chair"
        />
        <ShopItem 
          ItemImage = {PorscheSki}
          ItemTitle = "PORSCHE | HEAD 7 Series Skis"
          ItemDesc = "70 mm racing skis from PORSCHE | HEAD"
          ItemType = "Skis"
        />
      </div>
      <div className = 'ShopItemIndicator'>
        <div className = 'ShopItemLevelSelected'></div>
        <div className = 'ShopItemLevel'></div>
        <div className = 'ShopItemLevel'></div>
        <div className = 'ShopItemLevel'></div>
        <div className = 'ShopItemLevel'></div>
        <div className = 'ShopItemLevel'></div>
      </div>
    </div>
  );
}

export default Shop;