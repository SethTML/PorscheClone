import React , {useRef ,useState ,useEffect} from 'react';

let arrow = (<svg className = 'FeaturedItemButton' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14.81 18 20 11.5 14.81 5h-1.25l4.81 6H4v1h14.37l-4.81 6h1.25z"/></svg>);

function Discover() {
  return (
    <div className = 'Discover'>
      <span className = 'DiscoverCrumb'>Discover</span>
      <div className = 'DiscoverView'>
        <div className = 'DiscoverItem DItem1'>
          <div className = 'DiscoverItemContent'>
            <div className = 'DiscoverContent'>
              <span className = 'DiscoverItemFont'>Travel & Experience</span>
              {arrow}
            </div>
          </div>
        </div>
        <div className = 'DiscoverItem DItem2'>
          <div className = 'DiscoverItemContent'>
            <div className = 'DiscoverContent'>
              <span className = 'DiscoverItemFont'>Porsche Approved</span>
              {arrow}
            </div>
          </div>
        </div>
        <div className = 'DiscoverItem DItem3'>
          <div className = 'DiscoverItemContent'>
            <div className = 'DiscoverContent'>
              <span className = 'DiscoverItemFont'>MotorSport Experience</span>
              {arrow}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;