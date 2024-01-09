import "./machinerysList.css";
// import { IoCloseSharp } from "react-icons/io5";
import { getBgColor } from "../../helpers/changeColor";
import { Location } from "../icons/location";

export const MachinerysList = ({
  machinerys,
  visibleMacinerys,
  checkedMarker,
}) => {
  const filteredMachinerys = machinerys.filter((machinery) => {
    return visibleMacinerys.some((visible) => visible._id === machinery._id);
  });
  const checkedMachinerys = machinerys.filter(
    (machinery) => machinery._id === checkedMarker._id
  );

  return (
    <>
      {checkedMachinerys.map(
        ({ name, type, _id, price, status, location, foto_url }) => (
          <div
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
          </div>
        )
      )}
      {filteredMachinerys.length === 0 && (
        <p>There are no machine in this part of the map!</p>
      )}
      {checkedMachinerys.length === 0 && (
        <ul className="machinery-list">
          {filteredMachinerys.map(
            ({ name, type, _id, price, status, location, foto_url }) => (
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
      )}
    </>
  );
};
