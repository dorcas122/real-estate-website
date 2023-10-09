
import React from "react";
import { list } from "../../Component/data/data";

const RecentCard = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          // Destructure the object correctly here
          const { cover, category, location, name, price, type } = val;

         
          return (
            <div className="box-shadow" key={index}>
              <img src={cover} alt={name} />
              {/* <h2>{name}</h2>
              <p>{category}</p>
              <p>{price}</p>
              <p>{type}</p>
              <p>{location}</p> */}
              <div className="text">
                <div className="category-flex">
                <span style={{ background: category === "for Sale" ? "#25b5791a" : "#ff98001a",color: category==="For Sale" ? "#25b579": "#ff9800"}} >{category}</span>
                 <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                    <i className="fa-fa-location-dot">{location}</i>
                </p>
            </div>
            <div className="button flex">
                <div>
                 <button className="btn2">{price}</button> 
                 <label htmlFor=""></label>  
                </div>
                <span>{type}</span>
            </div>
            </div>
            
          )
        })}
      </div>
    </>
  );
};

export default RecentCard;














