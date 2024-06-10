import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import UserMenu from '..//InitialMenu/InitialMenu';
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";


const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <div>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
export default AppBar;