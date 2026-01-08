
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={{ width: "220px", padding: "20px" }}>
      <h3>React Hooks</h3>

      <ul>
        <li>
          <NavLink to="/hooks/use-state">useState</NavLink>
        </li>
        <li>
          <NavLink to="/hooks/use-effect">useEffect</NavLink>
        </li>
        <li>
          <NavLink to="/hooks/use-ref">useRef</NavLink>
        </li>
        <li>
          <NavLink to="/hooks/use-context">useContext</NavLink>
        </li>
        <li>
            <NavLink to="/hooks/use-reducer">useReducer</NavLink>
        </li>
        <li>
          <NavLink to="/hooks/use-memo">useMemo</NavLink>
        </li>

        <li>
          <NavLink to="/hooks/use-callback">useCallback</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;