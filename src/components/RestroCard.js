
import { IMG_CDN_URL } from "../config";

const RestroCard = ({ cloudinaryImageId, name, cuisines, locality }) => {


    return (
      <div className="card" >
        <img src={IMG_CDN_URL + cloudinaryImageId}></img>
        <div className="card-info">
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{locality}</h4>
        </div>
      </div>)
  }


export default RestroCard;