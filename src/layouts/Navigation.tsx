import NavLink from "../components/NavLink";
import { RouteKey } from "../routes/RouteKey";
import "../styles/Navigation.css";
const Navigation = () => {
  return (
    <div className="Navigation">
      <NavLink className="Navigation-Link" to={RouteKey.Index}>
        Home
      </NavLink>
    </div>
  );
};

export default Navigation;
