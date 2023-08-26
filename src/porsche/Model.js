import React , {useRef ,useState ,useEffect} from 'react';

function Model(props) {

  const ModelStyle = {
    backgroundImage: (`url(${props.Image})`)
  }

  return (
    <div style = {ModelStyle} className="Model">
      <div className = 'ModelWrapper'>
        <div className = 'ModelContent'>
          {props.Logo}
         <div className = 'ModelInfo'>
            <span className = 'ModelDesc'>
              {props.Desc}
            </span>
            <span className = 'ModelPrice'>
              {props.Price}
            </span>
            <div className = 'ModelButtons'>
              <button className = 'ModelBuild'>
                {props.Build}
              </button>
              <button className = 'ModelAll'>
                {props.All}
              </button>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Model;