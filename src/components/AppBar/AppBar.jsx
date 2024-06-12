import Navigation from '../Navigation/Navigation';
import { useSelector } from "react-redux";
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '..//..//redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';

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