import { useState } from "react";

function Card({ id, cityName, image, info, price , removeTour}) {
  const description = `${info.substring(0, 200)}....`;
  const [readmore, setReadmore] = useState(true);
  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
<section className = "card">
      <img src={image} alt="image" className="image"/>
      <div className = "tour-details">
        <div className = "tour-info">
          <h4 className = "tour-price">&#8377; {price}</h4>
          <h4 className = "tour-name">{cityName}</h4>
        </div>
        <div className="description">
          {readmore ? description : info}
          <span class = "read-more" onClick={readmoreHandler}>
            {readmore ? " Read More" : " Show Less"}
          </span>
        </div>
      </div>
      <button className = "btn-red"onClick = {() => removeTour(id)}>Not interested</button>
    </section>
  );
}

export default Card;
