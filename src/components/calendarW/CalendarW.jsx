import "./calendarW.scss";

const CalendarW = () => {
  return (
    <div className="calendarW">
      <div className="top">
        <div className="title">IMPORTANT DATES</div>
      </div>
      <div className="bottom">
        <ul className="list">
          <li className="item">03/03/2023 (Fri) car registration</li>
          <li className="item">
            01/04/2023 (Wed) purchase plane tickets to Maldives
          </li>
          <li className="item">05/06/2023 (Mon) Netflix membership (yearly)</li>
          <li className="item">07/07/2023 (Fri) go to Maldives (2k)</li>
        </ul>
      </div>
    </div>
  );
};

export default CalendarW;
