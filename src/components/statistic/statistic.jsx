import "./statistic.css";

export const Statistic = ({ statistic }) => {
  return (
    <div className="statistic-div">
      <h2 className="title-stat">STATISTICS</h2>
      <ul>
        <li className="stat-item">
          Total Machinerys:{" "}
          <span className="stat-value">{statistic.totalObjects}</span>
        </li>
        <li className="stat-item">
          Available Machines:{" "}
          <span className="stat-value">{statistic.availableCount}</span>
        </li>
        <li className="stat-item">
          Booked Machines:{" "}
          <span className="stat-value">{statistic.busyCount}</span>
        </li>
        <li className="stat-item">
          Average machinerys cost:{" "}
          <span className="stat-value">{statistic.averagePrice}</span> UAH/hr.
        </li>
      </ul>
    </div>
  );
};
