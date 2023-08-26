import React , {useRef ,useState ,useEffect} from 'react';
import USFlag from './Images/US.png';

const arrow = (<svg className = 'FooterSectionArrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m14.75 12-6 8h1.26L16 12l-5.99-8H8.75l6 8z"></path></svg>);

let facebookGO = (<svg className = 'FacebookSVG' version="1.0" xmlns="http://www.w3.org/2000/svg"
width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1445 2344 c-52 -8 -138 -35 -179 -56 -52 -27 -132 -103 -163 -156
-54 -91 -65 -152 -71 -364 l-4 -198 -160 -2 -159 -3 -2 -188 -2 -187 162 0
163 0 2 -487 3 -488 195 0 195 0 2 485 3 485 160 3 c156 2 160 3 164 25 3 12
12 81 21 152 9 72 19 147 22 168 l6 37 -189 0 -189 0 5 167 c6 190 10 205 73
234 34 15 66 19 175 19 l132 0 0 169 0 169 -27 6 c-40 7 -302 15 -338 10z"/>
</g>
</svg>);

let instagramGO = (<svg id="svg" className = 'instagramSVG' xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M101.172 9.068 C 54.035 17.479,17.111 54.653,9.004 101.860 C 7.218 112.259,7.218 286.959,9.004 297.359 C 17.165 344.879,54.340 382.054,101.860 390.215 C 112.259 392.001,286.959 392.001,297.359 390.215 C 344.879 382.054,382.054 344.879,390.215 297.359 C 392.001 286.959,392.001 112.259,390.215 101.860 C 382.054 54.340,344.879 17.165,297.359 9.004 C 287.358 7.287,110.832 7.344,101.172 9.068 M294.353 35.084 C 329.869 41.969,357.250 69.349,364.134 104.866 C 366.439 116.754,366.439 282.465,364.134 294.353 C 357.250 329.869,329.869 357.250,294.353 364.134 C 282.465 366.439,116.754 366.439,104.866 364.134 C 69.349 357.250,41.969 329.869,35.084 294.353 C 32.780 282.465,32.780 116.754,35.084 104.866 C 41.915 69.630,69.161 42.177,104.289 35.136 C 115.466 32.896,282.829 32.850,294.353 35.084 M299.611 83.262 C 284.820 90.974,290.873 112.631,307.524 111.571 C 322.984 110.587,326.655 88.303,312.254 82.862 C 309.031 81.645,302.305 81.857,299.611 83.262 M190.195 100.009 C 103.327 107.344,65.409 213.807,128.064 274.456 C 186.531 331.050,284.597 299.337,298.978 219.186 C 309.193 162.255,266.750 105.038,210.883 100.424 C 199.261 99.464,197.142 99.422,190.195 100.009 M219.141 128.486 C 271.622 144.052,291.517 206.414,257.535 248.835 C 218.676 297.345,141.146 280.295,125.260 219.745 C 110.811 164.674,164.662 112.328,219.141 128.486 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg>);

let pinterestGO = (<svg id="svg" className = 'pinterestSVG' xmlns="http://www.w3.org/2000/svg" width="400" height="517.2413793103449" viewBox="0, 0, 400,517.2413793103449"><g id="svgg"><path id="path0" d="M166.379 2.797 C 98.140 15.106,44.154 54.681,16.500 112.669 C -16.976 182.866,0.783 270.517,53.733 296.430 C 70.048 304.414,73.583 302.600,78.738 283.604 C 84.403 262.723,84.035 258.795,75.203 245.894 C 46.997 204.695,56.421 139.927,97.096 95.423 C 156.157 30.801,279.146 39.255,314.178 110.345 C 338.751 160.211,323.849 254.037,284.542 296.933 C 254.359 329.872,207.111 329.211,190.452 295.616 C 184.124 282.854,185.872 268.275,198.857 225.499 C 219.507 157.476,218.485 135.134,194.029 119.896 C 146.493 90.279,97.221 163.815,120.405 229.777 L 123.801 239.440 104.200 322.355 C 80.827 421.221,80.227 425.105,81.687 468.103 C 83.613 524.824,85.454 527.629,104.157 502.336 C 131.835 464.905,142.258 441.266,156.884 382.752 L 167.442 340.517 177.255 350.018 C 213.868 385.462,283.423 381.910,331.646 342.133 C 400.982 284.942,422.865 155.846,375.526 83.261 C 333.136 18.263,252.540 -12.744,166.379 2.797 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg>);

let youtubeGO = (<svg fill="#000000" className = 'youtubeSVG' height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 310 310">
<g id="XMLID_822_">
<path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
 C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
 C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
 c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
 c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
 C204.394,157.263,202.325,160.684,199.021,162.41z"/>
</g>
</svg>);

let twitterGO = (<svg id="svg" className = 'twitterSVG' xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M255.469 51.487 C 224.302 58.395,201.512 82.231,196.042 113.640 C 195.116 118.959,195.421 137.698,196.490 141.123 C 197.077 143.002,197.289 142.999,182.031 141.318 C 132.676 135.878,82.624 109.658,48.353 71.289 C 40.563 62.567,41.519 62.602,37.726 70.898 C 23.503 102.007,33.107 142.046,59.428 161.367 C 61.588 162.952,63.210 164.394,63.034 164.570 C 61.687 165.917,41.843 160.795,34.987 157.331 C 32.960 156.307,31.061 155.469,30.767 155.469 C 29.719 155.469,31.228 170.805,32.843 176.563 C 39.808 201.399,58.061 220.417,83.078 228.905 L 89.403 231.051 83.569 232.038 C 79.785 232.678,74.096 232.873,67.383 232.594 C 61.689 232.356,57.031 232.449,57.031 232.801 C 57.031 234.132,61.451 243.673,64.386 248.677 C 75.843 268.213,102.255 284.375,122.725 284.375 C 126.590 284.375,126.531 284.951,122.350 288.024 C 96.563 306.978,63.754 316.996,29.883 316.257 C 22.041 316.086,15.625 316.026,15.625 316.124 C 15.625 316.221,18.525 318.044,22.070 320.174 C 98.734 366.235,201.318 358.887,268.750 302.503 C 316.669 262.435,346.875 198.621,346.875 137.454 L 346.875 125.252 353.349 120.121 C 363.816 111.827,384.375 89.119,384.375 85.854 C 384.375 85.530,382.178 86.159,379.492 87.252 C 370.027 91.102,345.145 97.749,344.102 96.706 C 343.972 96.576,346.642 94.286,350.037 91.618 C 359.927 83.843,371.795 66.894,373.935 57.486 L 374.454 55.206 368.342 58.503 C 356.879 64.686,343.539 69.778,332.147 72.318 L 326.403 73.599 323.553 70.893 C 305.870 54.102,278.663 46.347,255.469 51.487 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg>);

let linkedinGO = (<svg fill="#000000" className = 'linkedinSVG' height="800px" width="800px" version="1.1" id="Capa_1" 
viewBox="0 0 260.366 260.366">
<g>
<path d="M34.703,0.183C15.582,0.183,0.014,15.748,0,34.884C0,54.02,15.568,69.588,34.703,69.588
 c19.128,0,34.688-15.568,34.688-34.704C69.391,15.75,53.83,0.183,34.703,0.183z"/>
<path d="M60.748,83.531H8.654c-2.478,0-4.488,2.009-4.488,4.489v167.675c0,2.479,2.01,4.488,4.488,4.488h52.093
 c2.479,0,4.489-2.01,4.489-4.488V88.02C65.237,85.539,63.227,83.531,60.748,83.531z"/>
<path d="M193.924,81.557c-19.064,0-35.817,5.805-46.04,15.271V88.02c0-2.48-2.01-4.489-4.489-4.489H93.424
 c-2.479,0-4.489,2.009-4.489,4.489v167.675c0,2.479,2.01,4.488,4.489,4.488h52.044c2.479,0,4.489-2.01,4.489-4.488v-82.957
 c0-23.802,4.378-38.555,26.227-38.555c21.526,0.026,23.137,15.846,23.137,39.977v81.535c0,2.479,2.01,4.488,4.49,4.488h52.068
 c2.478,0,4.488-2.01,4.488-4.488v-91.977C260.366,125.465,252.814,81.557,193.924,81.557z"/>
</g>
</svg>);

function Footer() {
  return (
    <div className = 'Footer'>
      <div className = 'FooterContent'>
        <div className = 'FooterContentItem1'>
          <span className = 'FooterContentTitle'>
            Current Region / Language
          </span>
          <div className = 'FooterContentLayout'>
            <img className = 'FooterFlag' src = {USFlag} />
            <span className = 'FooterContentText'>United States / English</span>
            <button className = 'FooterContentText ChangeLanguage'>Change</button>
          </div>
        </div>
        <div className = 'FooterContentItem2'>
          <div className = 'FooterContentSection'>
            <span className = 'FooterContentTitle'>Newsletter</span>
            <span className = 'FooterSectionText'>Latest news directly in your inbox</span>
            <button className = 'FooterSectionButton'>
              {arrow}
              <span className = 'FooterSectionButtonFont'>Subscribe</span>
            </button>
          </div>
          <div className = 'FooterContentSection'>
            <span className = 'FooterContentTitle'>Contact</span>
            <span className = 'FooterSectionText'>Do you have any questions?</span>
            <button className = 'FooterSectionButton'>
              {arrow}
              <span className = 'FooterSectionButtonFont'>Contact Form</span>
            </button>
          </div>
          <div className = 'FooterContentSection2'>
            <span className = 'FooterContentTitle'>Social Media</span>
            <span className = 'FooterSectionText'>Get in touch with us via social media.</span>
            <div className = 'FooterSectionButtons'>
              <div className = 'FSB' id = "FacebookDiv">
                {facebookGO}
              </div>
              <div className = 'FSB' id = "InstagramDiv">
                {instagramGO}
              </div>
              <div className = 'FSB' id = "PinterestDiv">
                {pinterestGO}
              </div>
              <div className = 'FSB' id = "YoutubeDiv">
                {youtubeGO}
              </div>
              <div className = 'FSB' id = "TwitterDiv">
                {twitterGO}
              </div>
              <div className = 'FSB' id = "LinkedinDiv">
                {linkedinGO}
              </div>
            </div>
          </div>
        </div>
        <div className = 'FooterContentItem3'>
          <span className = 'FooterContentTitle'>Company</span>
          <div className = 'FooterSectionDisplay'>
            <div className = 'FooterContentSection3'>
              <button className = 'FooterSectionText3'>Porsche at a Glance</button>
              <button className = 'FooterSectionText3'>Careers</button>
              <button className = 'FooterSectionText3'>Press</button>
            </div>
            <div className = 'FooterContentSection3'>
              <button className = 'FooterSectionText3'>Porsche Cars North America</button>
              <button className = 'FooterSectionText3'>Partner Forum</button>
              <button className = 'FooterSectionText3'>Contact</button>
            </div>
            <div className = 'FooterContentSection3'>
              <button className = 'FooterSectionText3'>Sustainability</button>
              <button className = 'FooterSectionText3'>Affiliates</button>
              <button className = 'FooterSectionText3'>   </button>
            </div>
          </div>
        </div>
        <div className = 'FooterCopyright'>
          <span className = 'FooterSectionText3'>
              © 2023 Porsche Cars North America, Inc. Legal notice. Privacy notice. California Privacy. Accessibility Statement. Open Source Software Notice. Whistleblower System. Emergency Responder Guides. Recall Information. 3G Wireless Turndown FAQs. Do Not Sell or Share My Personal Information.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;