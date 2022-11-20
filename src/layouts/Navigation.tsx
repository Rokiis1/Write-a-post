import NavLink from "../components/NavLink";
import { RouteKey } from "../routes/RouteKey";

const Navigation = () => {
  return (
    <div>
      <NavLink to={RouteKey.Index}>Home</NavLink>
    </div>
  );
};

export default Navigation;
