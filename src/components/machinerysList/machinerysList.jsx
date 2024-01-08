import "./machinerysList.css";
// import { IoCloseSharp } from "react-icons/io5";
import { getBgColor } from "../../helpers/changeColor";
import { Location } from "../icons/location";

export const MachinerysList = ({ machinerys }) => {
  return (
    <ul className="machinery-list">
      {machinerys.map(
        ({
          name,
          number,
          type,
          contact,
          _id,
          price,
          status,
          location,
          description,
          foto_url,
        }) => (
          <li
            key={_id}
            className="machine-item"
            style={{ borderColor: getBgColor(status) }}
            disabled={status === "Unavailable"}
          >
            <div className="foto-div">
              <img alt={name} src={foto_url} className="foto" />
            </div>
            <div className="info-block">
              <h3 className="machine-title">{name}</h3>
              <p className="machine-type"> {type}</p>
              <p className="price">{price} UAH/hr</p>
              <div className="location">
                <Location />
                <p>{location}</p>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
