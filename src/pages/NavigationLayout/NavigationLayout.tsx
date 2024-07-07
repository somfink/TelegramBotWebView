import { Outlet } from "react-router-dom";
import "./style.css";

const NavigationLayout = () => {
  return (
    <div className="main-container">
      <Outlet />
      <nav className="navigation-container">
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <span className=".navigation-item__icon"></span>
              <span>option</span>
            </li>
            <li className="navigation-item">
              <span className=".navigation-item__icon"></span>
              <span>option</span>
            </li>
            <li className="navigation-item">
              <span className=".navigation-item__icon"></span>
              <span>option</span>
            </li>
            <li className="navigation-item">
              <span className=".navigation-item__icon"></span>
              <span>option</span>
            </li>
            <li className="navigation-item">
              <span className=".navigation-item__icon"></span>
              <span>option</span>
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  );
};

export default NavigationLayout;
