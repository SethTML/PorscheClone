import React , {useRef ,useState ,useEffect} from 'react';

const search = (<svg className = 'DealerInputImage' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8.6 14.06 3 19.64 4.35 21 10 15.41a6.49 6.49 0 0 1-1.4-1.35ZM15 3a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"/></svg>);

function Locate() {

  useEffect(() => {
    var input = document.getElementById('DealerInput');
    var autocomplete = new window.google.maps.places.Autocomplete(input);
  }, []);

  return (
    <div className="Locate">
      <div className = 'FindDealer'>
        <div className = 'DealerBox'>
          <div className = 'DealerInfo'>
            <div className = 'DealerInfoContent'>
              <span className = 'DealerTitle'>Find Your Porsche Dealer</span>
              <span className = 'DealerDesc'>An Authorized Porsche Dealer, and your dream Porsche vehicle, may be closer than you think. Search our dealer network for the closest dealership to you.</span>
              <button className = 'DealerButton'>Find a dealer</button>
            </div>
          </div>
          <div alt = "Image of a Porsche dealership on a sunny day." className = 'DealerImg'></div>
        </div>
      </div>
      <div className = 'FindLocation'>
        <div className = 'FindContent'>
          <div className = 'FindContentWrapper'>
            <span className = 'FindContentTitle'>Find your new or pre-owned Porsche.</span>
            <span className = 'FindContentDesc'>Making it easy to find your dream Porsche. Enter your location and browse the best car offers available near you.</span>
            <label className = 'DealerInputText' for = "DealerInputBox">Enter a location for your search</label>
            <div id = "DealerInputBox">
              {search}
              <input id = "DealerInput" placeholder = 'Enter City or ZIP Code' type = "text"></input>
            </div>
          </div>
        </div>
        <div alt = "Camera facing the side of 3 white porsche cars." className = 'FindImg'>

        </div>
      </div>
    </div>
  );
}

export default Locate;