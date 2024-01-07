import "./machinerysList.css";
// import { IoCloseSharp } from "react-icons/io5";
import { getBgColor } from "../../helpers/changeColor";

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
        }) => (
          <li
            key={_id}
            className="machine-item"
            style={{ borderColor: getBgColor(status) }}
            disabled={status === "Unavailable"}
          >
            <div className="info-block">
              <div className="machine-name">
                <h3 className="machine-title">{name}</h3>{" "}
                <p className="machine-type">&nbsp;- {type}&nbsp;</p>
              </div>
              <div>
                <p className="machine-id">TEL:{number}</p>{" "}
                <p>&#40;{contact}&#41;</p>
              </div>
              <p className="machine-status">STATUS: {" "}{status}</p>
            </div>
            <div className="price-block">
              <p>{location}</p>
              <p className="price">{price}.00 UAH/hr</p>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
